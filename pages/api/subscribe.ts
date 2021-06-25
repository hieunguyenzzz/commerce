import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const url = process.env.EMAIL_REGISTER_URL
    if (!url) {
      throw new Error('EMAIL_REGISTER_URL not found')
    }
    console.log(req.body)
    fetch(url, {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    }).then((result) => {
      const jsonData = result.json()
      console.log(jsonData)
      res.status(200).json(jsonData)
      return jsonData
    })
  } catch (error) {
    console.error(error)
  }
  return res
}
