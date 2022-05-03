import ArticleModel from "models/Article";
import { dbConnect } from "util/connectMongo";
import { NextApiRequest, NextApiResponse } from "next";

/**
 * API to fetch articles
 * @param req Request that will be sent
 * @param res Response that will be sent
 * @returns Article filtered by id
 */

export default async function getArticleById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const articleId: Number = Number(req.query.id);
    await dbConnect();
    // Fetch the posts using the ArticleModel checking for type
    const articles = await ArticleModel.findOne({ id: articleId });

    return res.json({
      message: JSON.parse(JSON.stringify(articles)),
      success: true,
    });
  } catch (error: any) {
    console.log(error);
    return res.json({
      message: new Error(error),
      success: false,
    });
  }
}
