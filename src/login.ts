import { baseUrl, clientSecret, clientId } from './setup.js'
import fetch from 'node-fetch'
import type { Response } from 'node-fetch';
export let token: string

const logIn = async (): Promise<void> => {
    console.log('Logging in...')
    const response: Response = await fetch(`${baseUrl}/api/v1/auth/token`, {
        method: 'POST',
        body: JSON.stringify({
            grant_type: 'client_credentials',
            client_id: clientId,
            client_secret: clientSecret
        }),
        headers: { 'Content-Type': 'application/json' }
    })
    const body = await response.json() as { access_token: string }
    token = body.access_token
}
export default logIn
