import type { NextApiRequest, NextApiResponse } from "next";
/**
 * Home page
 * @returns {JSX.Element}: Element responsible for rendering the main page
 */

export default (req: NextApiRequest, res: NextApiResponse) => {
  res
    .status(200)
    .json({ message: "Fullstack Challenge 2021 🏅 - Space Flight News" });
};
