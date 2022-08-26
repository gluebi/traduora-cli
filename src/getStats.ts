import logIn, { token } from './login.js';
import { baseUrl, projectId } from './setup.js';
import fetch from 'node-fetch'
import type { Response } from 'node-fetch';

const getStats = async (): Promise<void> => {
    await logIn()
    const response: Response = await fetch(`${baseUrl}/api/v1/projects/${projectId}/stats`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    const body: unknown = await response.json()
    console.log(body)
}

export default getStats
