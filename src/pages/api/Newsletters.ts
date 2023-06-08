import type { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method === 'POST') {
        const { email } = req.body;
    
        // Add the email to Sendinblue contacts
        const response = await fetch('https://api.brevo.com/v3/contacts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'api-key': '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'
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