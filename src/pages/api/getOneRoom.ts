import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity';
import { Room } from "../../../typings";

const query = groq`
  *[_type == "room" && slug.current == $slug][0]{
        _id,
        _createdAt,
        description,
        email,
        image,
        title,
        phone,
        price,
        person,
        size,
        slug,
        wifi,
        country,
        city,
    }
`

type Data = {
    room: Room;
  }
  
  export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const { slug } = req.query;
    const room: Room = await sanityClient.fetch(query, {
      slug,
    });
  
    res.status(200).json({ room });
  }