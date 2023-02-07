import { NextApiRequest, NextApiResponse } from "next";

type BodyType = {
  email: string;
  name: string;
};

function isValidEmail(email: string): boolean {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const isBodyType = (body: any): body is BodyType => {
  console.log("isBodyType function");
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
      attributes: { FIRSTNAME: "" },
      listIds: [5],
      updateEnabled: false,
      email,
    }),
  };

  try {
    console.log("try-catch block");
    const response = await fetch(url, options);
    console.log("response::::: ", response);
    if (response.status === 201) {
      res.status(200).send({ message: "Email added to list" });
    } else {
      console.log("try-catch-else block");
      const json = await response.json();
      console.log("response::::: ", json);
      res.status(500).send({ message: json.message });
    }
  } catch (error) {
    console.log("BIG ERRROR ::: ", error);
    res.status(500).send({ message: "Error while sending email" });
  }
}
