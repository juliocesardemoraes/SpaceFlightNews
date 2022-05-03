import ArticleModel from "models/Article";
import { dbConnect } from "util/connectMongo";
import { NextApiResponse } from "next";

/**
 * API to fetch articles
 * @param res Request response that will be sent
 * @returns All the posts that were requested
 */

export default async function getArticles(res: NextApiResponse) {
  try {
    await dbConnect();
    // Fetch the posts using the ArticleModel checking for type
    const articles = await ArticleModel.find();

    return res.json({
      message: JSON.parse(JSON.stringify(articles)),
      success: true,
    });
  } catch (error: any) {
    return res.json({
      message: new Error(error),
      success: false,
    });
  }
}
