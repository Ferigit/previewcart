import React from "react";
import { IProject } from "@/src/types/project";
import { Button } from "@/src/components/common";

interface CardOverLayerProps {
  project: IProject;
  handleAddToCart: () => void;
}

export const CardOverLayer: React.FC<CardOverLayerProps> = ({
  project,
  handleAddToCart,
}) => {
  return (
    <div className="hidden w-full p-4 absolute inset-0 bg-opacity-50 group-hover:bg-gray-500 group-hover:flex items-center justify-center flex-col gap-y-2 ">
      <h2 className="w-full text-white text-2xl font-bold border-b border-b-white pb-2">{project.name}</h2>
      {project.sdgs?.length ? (
        <>
          <h3 className="text-white w-full text-xl">Project sdgs: </h3>
          <div className="flex w-full flex-wrap gap-1 border-b border-b-white pb-2">
            {project.sdgs?.map((sdg: number) => (
              <div key={sdg} className="text-white w-1/3">
                <p className="text-white ">{sdg}</p>
              </div>
            ))}
          </div>
        </>
      ) : null}
      <Button
        label="Add to cart"
        onClick={handleAddToCart}
        className="w-full mx-auto h-12 !rounded-t-0 my-4"
      />
      <Button label="More info" className="w-full  mx-auto h-12 !rounded-t-0" />
    </div>
  );
};
