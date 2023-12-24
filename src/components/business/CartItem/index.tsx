import React from "react";
import { Button, Image } from "@/src/components/common";
import { useCartStore } from "src/store/cartstore";
import { IProject } from "@/src/types/project";
import { ProjectFeature } from "@/src/components/business/Project/ProjectFeature";

interface IProps {
  cartItem: IProject;
}
export const CartItem: React.FC<IProps> = ({ cartItem }) => {
  const { cart, setCartItems } = useCartStore();
  const handleRemoveItem = (projectId: string | undefined) => {
    setCartItems(cart.filter((item) => item.id !== projectId));
  };

  const handleAdjustVolume = (
    projectId: string | undefined,
    volumeDelta: number
  ) => {
    setCartItems(
      cart.map((item: IProject) =>
        item.id === projectId
          ? { ...item, volume: Math.max(1, (item?.volume ?? 1) + volumeDelta) }
          : item
      )
    );
  };
  const {
    id,
    image,
    name,
    earliest_delivery = "-",
    supplier_name = "-",
    distribution_weight = "-",
    offered_volume_in_tons = "-",
    price_per_ton = "-",
    volume,
  } = cartItem;
  return (
    <article className="flex justify-start items-start py-2 flex-col md:flex-row">
      <Image
        src={image}
        alt={`Project Image for ${id}`}
        layout="fill"
        objectFit="cover"
        className={{ container: "w-full md:w-52 h-52 object-cover" }}
      />
      <div className="md:flex-1 flex flex-col p-2 pt-0 w-full">
        <h2 className="text-lg font-medium mb-1">{name}</h2>
        <ProjectFeature className="!justify-start" label="Name:" value={name} />
        <ProjectFeature
          className="!justify-start"
          label="Earliest delivery:"
          value={earliest_delivery}
        />
        <ProjectFeature
          label="Distribution weight:"
          className="!justify-start"
          value={distribution_weight}
        />
        <ProjectFeature
          label="Offered volume in tons:"
          className="!justify-start"
          value={offered_volume_in_tons}
        />
        <ProjectFeature
          label="Price per ton:"
          className="!justify-start"
          value={price_per_ton}
        />
        <ProjectFeature
          label="Supplier name:"
          className="!justify-start"
          value={supplier_name}
        />
      </div>
      <div className="flex items-center justify-between md:w-1/6 w-1/2 my-4">
        <Button
          label="-"
          onClick={() => handleAdjustVolume(id, -1)}
          className="w-8 h-8 !p-1"
        />
        <p className="text-xl font-medium">{volume}</p>
        <Button
          label="+"
          onClick={() => handleAdjustVolume(id, 1)}
          className="w-8 h-8 !p-1"
        />

        <Button
          label=""
          icon={<>X</>}
          onClick={() => handleRemoveItem(cartItem?.id)}
          className="w-8 h-8 bg-red-500 text-white hover:bg-red-600 ml-2 !p-1"
        />
      </div>
    </article>
  );
};
