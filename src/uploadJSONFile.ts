import { token } from './login.js'
import { baseUrl } from './setup.js'
import fetch, { FormData, fileFromSync } from 'node-fetch'
import type { Response } from 'node-fetch'
import inquirer from 'inquirer'

const uploadJSONFile = async (projectId: string): Promise<void> => {
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
            message: 'Please enter the path to the json file relative to project root:',
        },
    ])

    const file = fileFromSync(prompts.path, 'application/json')
    const formData = new FormData()
    formData.set('file', file, 'input.json')

    const params = new URLSearchParams({
        locale: prompts.locale,
        format: 'jsonflat',
    })

    const url = `${baseUrl}/api/v1/projects/${projectId}/imports?${params}`

    const response: Response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        body: formData
    })
    const responseBody = await response.json() as { data: { id: string }; error: { code: string; message: string } }
    if (response.ok) {
        console.log('Json file successfully exported to traduora!')
    } else {
        console.log(responseBody.error.message)
    }
}

export default uploadJSONFile
