import { Handler } from '@netlify/functions'

export const handler: Handler = async (event) => {
  if (event.body) {
    const data = JSON.parse(event.body)
    console.log('Datos recibidos:', data)
  }

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
    body: JSON.stringify({ message: 'Datos recibidos correctamente' })
  }
}