/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res
    .status(200)
    .json({ message: "Fullstack Challenge 2021 🏅 - Space Flight News" });
};
