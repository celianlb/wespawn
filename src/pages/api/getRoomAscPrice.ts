import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity';
import { Room } from "../../../typings";

const query = groq`
*[_type == "room"]
| order(price asc)
`

type Data = {
    roomAscPrice: Room[];
  }
  
  export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const roomAscPrice: Room[] = await sanityClient.fetch(query);
  
    res.status(200).json({ roomAscPrice });
  }