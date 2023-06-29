import type { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method === 'POST') {
        const { email } = req.body;
        const apiKey = process.env.BREVO_API_KEY;
        if (!apiKey) {
              return res.status(500).json({ error: 'Missing API Key' });
        }
    
        // Add the email to Sendinblue contacts
        const response = await fetch('https://api.brevo.com/v3/contacts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'api-key': apiKey,
          },
          body: JSON.stringify({
            email,
            updateEnabled: false,
            attributes: {
              // additional attributes if needed
            },
            listIds: [7] // replace with your list id
          })
        });
    
        const data = await response.json();
    
        if (!response.ok) {
          return res.status(response.status).json(data);
        }
    
        return res.status(200).json(data);
      }
    
      return res.status(405).end(); // Method Not Allowed
}