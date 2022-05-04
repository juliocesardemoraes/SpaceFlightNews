import type { NextApiRequest, NextApiResponse } from "next";
/**
 * Home page
 * @returns {JSX.Element}: Element responsible for rendering the main page
 */

export default async function getChallengeCode(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    return res
      .status(200)
      .json({ message: "Fullstack Challenge 2021 🏅 - Space Flight News" });
  } catch (error: any) {
    console.log(error);
    return res.json({
      message: new Error(error),
      success: false,
    });
  }
}
