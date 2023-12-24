//Project component to render each project
import React from "react";
import clsx from "classnames";
import { Image } from "@/src/components/common/index";
import { useCartStore } from "src/store/cartstore";
import { IProject } from "@/src/types/project";
import { CardOverLayer } from "./ProjectOverLayer";
import { ProjectFeature } from "./ProjectFeature";

interface ProjectProps {
  project: IProject;
}

export const Project: React.FC<ProjectProps> = ({ project }) => {
  const { setSelectedProject, selectedProject } = useCartStore();
  const {
    id,
    image,
    name,
    earliest_delivery = "-",
    supplier_name = "-",
    distribution_weight = "-",
    offered_volume_in_tons = "-",
    price_per_ton = "-",
    description = "-",
  } = project;

  //When click on each project, it is selected in the basket
  const handleAddToCart = () => setSelectedProject(project);
  return (
    <article
      className={clsx(
        "cursor-pointer group relative rounded-lg overflow-hidden shadow-md w-full md:w-[calc(32%)]",
        selectedProject?.id === project.id &&
          "shadow-2xxl shadow-xl shadow-cyan-500/50"
      )}
    >
      <Image
        src={image}
        alt={`Project Image for ${id}`}
        layout="fill"
        objectFit="cover"
        className={{ container: "w-full h-48 object-cover" }}
      />
      <CardOverLayer project={project} handleAddToCart={handleAddToCart} />
      <div className="px-4 py-6">
        <p className="font-medium text-gray-800 text-lg mb-2">{name}</p>
        <ProjectFeature label="Earliest delivery" value={earliest_delivery} />
        <ProjectFeature label="Supplier name:" value={supplier_name} />
        <ProjectFeature
          label="Distribution weight: "
          value={distribution_weight}
        />
        <ProjectFeature
          label="Offered volume in tons:"
          value={offered_volume_in_tons}
        />
        <ProjectFeature label="Price per ton:" value={price_per_ton} />
        <p className="text-gray-700 truncate mt-2">{description}</p>
      </div>
    </article>
  );
};
