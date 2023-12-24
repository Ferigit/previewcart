import { NextApiRequest, NextApiResponse } from "next";
// API instance to make http requests
interface RequestConfig {
  method: "GET" | "POST" | "DELETE" | "PUT";
  headers: {
    "Content-Type": string;
  };
  body?: string;
}

export async function callApi(
  req?: NextApiRequest | undefined,
  res?: NextApiResponse | undefined,
  httpMethod: "GET" | "POST" | "DELETE" | "PUT" = "GET",
  url: string = "",
  data?: any
): Promise<any> {
  try {
    const config: RequestConfig = {
      method: httpMethod,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (httpMethod !== "GET") {
      config.body = JSON.stringify(data);
    }

    const res = await fetch(url, config);

    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`);
    }

    const json = await res.json();

    return { data: json };
  } catch (error: any) {
    //TODO ApiResponse should be customized
    return { error: error?.message, data: [] };
  }
}
