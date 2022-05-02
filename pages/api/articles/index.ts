import type { NextApiRequest, NextApiResponse } from "next";
import getArticles from "../services/getArticles";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET": {
      return getArticles(req, res);
    }
  }
};
