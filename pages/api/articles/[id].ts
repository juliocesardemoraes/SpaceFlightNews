import type { NextApiRequest, NextApiResponse } from "next";

/*
type Data = {
  name: string;
};

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ name: "John Doe" });
};
*/
export default (req: NextApiRequest, res: NextApiResponse) => {
  res
    .status(200)
    .json({ message: "Fullstack Challenge 2021 🏅 - Space Flight News" });
};
