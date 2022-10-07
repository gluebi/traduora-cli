import fetch from 'node-fetch'
import type { Response } from 'node-fetch'
import { token } from './login.js'
import { baseUrl } from './setup.js'
import inquirer from 'inquirer'

const addTerm = async (projectId: string): Promise<void> => {
    console.log('Add term:', projectId, token)

    const keyPrompt = await inquirer.prompt([
        {
            type: 'input',
            name: 'key',
            message: 'Please enter a translation key:',
        },
    ])

    if (!keyPrompt.key) {
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
            value: keyPrompt.key
        })
    })

    const termBody = await termResponse.json() as { data: { id: string }; error: { code: string; message: string } }
    if (termBody.error) {
        console.log(termBody.error.message)
        return
    }
    const termId: string = termBody.data.id

    const translationPrompt = await inquirer.prompt([
        {
            type: 'input',
            name: 'translation',
            message: 'Please enter a translation:',
        },
    ])

    if (!translationPrompt.translation) {
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
            value: translationPrompt.translation
        })
    })
    const translationResponseBody = await translationResponse.json() as { data: { id: string }; error: { code: string; message: string } }
    if (translationResponse.ok) {
        console.log('Translation added!')
    } else {
        if (translationResponseBody.error.code === 'NotFound') {
            console.log('Couldn\'t add translation. Do you have a locale already?')
        } else {
            console.log(translationResponseBody.error.message)
        }
    }
}

export default addTerm
