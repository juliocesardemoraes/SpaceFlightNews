import type { NextApiRequest, NextApiResponse } from "next";
import populateArticles from "../../services/populatingArticles";
export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "POST": {
      return populateArticles(req, res);
    }
    default: {
      throw new Error("Method not found");
    }
  }
};
