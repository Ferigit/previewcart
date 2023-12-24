"use client";

import { IProject } from "@/src/types/project";
import { Project } from "@/src/components/business/Project";
import { AddToCartForm } from "@/src/components/business/AddToCartForm";
import { FilterInput } from "@/src/components/business/FilterInput";
import { useRouter } from "next/router";

interface IProps {
  projects: IProject[];
}

function MarketPlace({ projects }: IProps) {
  const router = useRouter();

  //filter projects based on query filter param
  const filterQuery = router?.query?.filter ?? "";
  const filteredProjects = projects?.filter((project) =>
    typeof filterQuery === "string"
      ? project.name.toLowerCase().includes(filterQuery?.toLowerCase())
      : false
  );
  return (
    <div className="flex min-h-screen">
      <header className="p-4 md:w-9/12 z-10 fixed top-0 bg-white shadow-md w-full">
        <h1 className="text-2xl font-bold mb-4">Carbon Offset Projects</h1>
        <FilterInput />
      </header>

      <div className="flex-1 overflow-y-auto">
        <aside className=" md:h-full p-4 fixed md:top-0 top-[131px] w-full right-0 z-10 bg-gray-200 md:w-3/12 pt-8">
          <AddToCartForm />
        </aside>

        <main className="w-full p-4 md:mt-[120px] mt-[320px]">
          {filteredProjects?.length ? (
            <section className="container flex xl:gap-4 gap-1 flex-wrap w-full md:w-9/12 justify-start items-start">
              {filteredProjects?.map((project) => (
                <Project key={project.id} project={project} />
              ))}
            </section>
          ) : (
            <p>No project available!</p>
          )}
        </main>
      </div>
    </div>
  );
}

export default MarketPlace;
