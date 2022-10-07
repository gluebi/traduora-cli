import { token } from './login.js'
import { baseUrl } from './setup.js'
import fetch from 'node-fetch'
import type { Response } from 'node-fetch'
import inquirer from 'inquirer'
import * as fs from 'fs'

const importJSONFile = async (projectId: string): Promise<void> => {
    console.log('Add locale:')

    const prompts = await inquirer.prompt([
        {
            type: 'input',
            name: 'locale',
            message: 'Please enter the locale corresponding to your json file:',
        },
        {
            type: 'input',
            name: 'path',
            message: 'Please enter the path where the json file should be saved relative to project root:',
        },
    ])

    const params = new URLSearchParams({
        locale: prompts.locale,
        format: 'jsonflat',
    })

    const url = `${baseUrl}/api/v1/projects/${projectId}/exports?${params}`

    const response: Response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    })
    const responseBody = await response.json() as { data: { id: string }; error: { code: string; message: string } }

    fs.writeFileSync(prompts.path, JSON.stringify(responseBody))

    if (response.ok) {
        console.log('Json file successfully imported!')
    } else {
        console.log(responseBody.error.message)
    }
}

export default importJSONFile
