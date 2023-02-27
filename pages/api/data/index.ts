// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import data from "../../../data.json"

type PostType = typeof data[number] & { id: number }

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostType[]>
) {
  if (req.method === "GET") {
    const result = data.map((item, index) => ({
      ...item,
      id: index
    }))
    res.status(200).json(result)
  }
}
