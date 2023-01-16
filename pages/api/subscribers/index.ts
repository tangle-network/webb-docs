import { NextApiRequest, NextApiResponse } from "next";

import isValidEmail from "../utils";

type BodyType = {
  email: string;
};

const isBodyType = (body: any): body is BodyType => {
  return typeof body.email === "string";
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("api/subscribers/index.ts");
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  const apiKey = process.env.SENDINBLUE_API_KEY;
  if (!apiKey) {
    throw new Error("Missing SENDINBLUE_API_KEY");
  }

  if (!isBodyType(req.body)) {
    res.status(400).send({ message: "Invalid body" });
    return;
  }
  console.log("line code: 32");
  const { email } = req.body;

  if (!isValidEmail(email)) {
    res.status(400).send({ message: "Invalid email" });
    return;
  }

  const url = "https://api.sendinblue.com/v3/contacts";
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify({
      updateEnabled: false,
      email,
    }),
  };

  try {
    console.log("try-catch block");
    const response = await fetch(url, options);

    if (response.status === 201) {
      res.status(200).send({ message: "Email added to list" });
    } else {
      console.log("try-catch-else block");
      const json = await response.json();
      console.log("response::::: ", json);
      res.status(500).send({ message: json.message });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error while sending email" });
  }
}
