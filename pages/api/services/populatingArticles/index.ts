import { dbConnect } from "util/connectMongo";
import ArticleModel from "models/Article";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

/**
 * API to populate the database with spaceflightnews articles
 * @param res Request response that will be sent
 * @returns sucess message
 */
export default async function populateArticles(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // connect to the database
    await dbConnect();

    let articlesFromSpace: Array<object> = [];

    const deleteAllData = async () => {
      try {
        await ArticleModel.deleteMany();
        console.log("All Data from the database was successfully deleted");
      } catch (error: any) {
        console.log("Coudn't delete data from the database-> ", error);
        return res.json({
          message: new Error(error).message,
          success: false,
        });
      }
    };

    const updateAllData = async () => {
      try {
        await ArticleModel.insertMany(articlesFromSpace);
        console.log("All Data was successfully updated");
      } catch (error: any) {
        console.log("Coudn't insert data from space api-> ", error);
        return res.json({
          message: new Error(error).message,
          success: false,
        });
      }
    };

    await axios
      .get("https://api.spaceflightnewsapi.net/v3/articles", {
        params: { _limit: 200 },
      })
      .then((response) => {
        articlesFromSpace = response.data;
      })
      .catch((error) => {
        console.log("Error at spaceFlightNewsApi Request!!", error);
        return res.json({
          message: new Error(error).message,
          success: false,
        });
      });

    await deleteAllData();
    await updateAllData();
    return res.json({
      success: true,
      message: articlesFromSpace,
    });
  } catch (error: any) {
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}
