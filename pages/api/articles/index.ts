/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from "next";
import getArticles from "../services/getArticles";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET": {
      return await getArticles(res);
    }
    default: {
      throw new Error("Method not found");
    }
  }
};
