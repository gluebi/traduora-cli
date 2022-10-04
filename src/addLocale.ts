import logIn, { token } from './login.js'
import { baseUrl } from './setup.js'
import fetch from 'node-fetch'
import type { Response } from 'node-fetch'
import inquirer from 'inquirer'

const addLocale = async (projectId: string): Promise<void> => {
    await logIn()

    console.log('Add locale:')

    const localePrompt = await inquirer.prompt([
        {
            type: 'input',
            name: 'locale',
            message: 'Please enter a locale like "en" or "de":',
        },
    ])

    const response: Response = await fetch(`${baseUrl}/api/v1/projects/${projectId}/translations`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            code: localePrompt.locale
        })
    })
    const responseBody = await response.json() as { data: { id: string }; error: { code: string; message: string } }
    if (response.ok) {
        console.log('Locale added!')
    } else {
        console.log(responseBody.error.message)
    }
}

export default addLocale
