import { connectToDatabase } from "util/connectMongo";

export default async function getArticles(req, res) {
  try {
    // connect to the database
    let { db } = await connectToDatabase();
    // fetch the posts
    let posts = await db
      .collection("articles")
      .find({})
      .sort({ published: -1 })
      .toArray();
    // return the posts
    return res.json({
      message: JSON.parse(JSON.stringify(posts)),
      success: true,
    });
  } catch (error) {
    // return the error
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}

/*

res
  .status(200)
  .json({ message: "Fullstack Challenge 2021 🏅 - Space Flight News" });

  */
