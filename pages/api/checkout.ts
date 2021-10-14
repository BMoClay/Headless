import { NextApiRequest, NextApiResponse } from "next";



export default function checkout(req: NextApiRequest, res: NextApiResponse) {
    res.json({message: "Hello World"})
}