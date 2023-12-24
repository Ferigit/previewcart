//Home page to list projects
import Head from "next/head";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import MarketPlace from "@/src/components/business/MarketPlace";
import { IProject } from "@/src/types/project";
import { callApi } from "@/src/libs/api";
import { BASE_URL } from "@/src/constants/db";

export default function Page({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Carbon Offset Marketplace</title>
        <meta
          name="description"
          content="Discover meaningful carbon offset projects and make a difference for our planet."
        />
        <meta
          name="keywords"
          content="carbon offset, climate action, sustainability, projects"
        />
      </Head>
      <MarketPlace projects={data} />
    </>
  );
}

export const getStaticProps = (async (context) => {
  // make the get http request to pull the projects list
  try {
    const response = await callApi(
      undefined,
      undefined,
      "GET",
      BASE_URL + "/tech/frontend-code-challenge/projects_sample.json"
    );

    return { props: { data: response?.data ?? [] }, revalidate: 34560 }; //revalidate data and refetch everyday //TODO: could be updated
  } catch (error) {
    return { props: { data: [] } };
  }
}) satisfies GetStaticProps<{
  data: IProject[];
}>;
