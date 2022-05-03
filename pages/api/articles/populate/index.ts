/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from "next";
import populateArticles from "../../services/populatingArticles";
export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET": {
      return await populateArticles(req, res);
    }
    default: {
      throw new Error("Method not found");
    }
  }
};
