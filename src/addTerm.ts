import fetch from 'node-fetch'
import prompt from 'prompt'
import type { Response } from 'node-fetch';
import logIn, { token } from './login';
import { baseUrl, projectId } from './setup';

const addTerm = async (): Promise<void> => {
    await logIn()

    const { key }: { key: string } = await prompt.get(['key'])

    if (!key) {
        console.log('No key given! Aborting!')
        return
    }

    const termResponse: Response = await fetch(`${baseUrl}/api/v1/projects/${projectId}/terms`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            value: key
        })
    })

    const termBody = await termResponse.json() as { data: { id: string } }
    const termId: string = termBody.data.id

    const { translation }: { translation: string } = await prompt.get(['translation'])

    if (!key) {
        console.log('No translation given! Aborting!')
        return
    }

    const translationResponse: Response = await fetch(`${baseUrl}/api/v1/projects/${projectId}/translations/en`, {
        method: 'PATCH',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            termId,
            value: translation
        })
    })
    if (translationResponse.ok) {
        console.log('Translation added!')
    } else {
        console.log(translationResponse.statusText)
    }
}

export default addTerm
