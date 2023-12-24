import React from "react";
import clsx from "classnames";
import * as Yup from "yup";
import Link from "next/link";
import { toast } from "react-toastify";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCartStore } from "@/src/store/cartstore";
import { TextInput, Button } from "@/src/components/common";
import { IProject } from "@/src/types/project";

interface AddToCartFormType {
  volume: number;
}

const validationSchema = Yup.object({
  volume: Yup.number()
    .moreThan(0)
    .transform((value) => (isNaN(value) ? undefined : value))
    .required("can not be empty"),
});

export const AddToCartForm: React.FC = () => {
  const { selectedProject, setSelectedProject, cart, setCartItems } =
    useCartStore();

  const formMethods = useForm({
    resolver: yupResolver(validationSchema),
  });

  const {
    register,
    reset,
    formState: { errors, isValid },
  } = formMethods;

  const onSubmit = (data: AddToCartFormType) => {
    const { volume } = data;
    if (selectedProject) {
      const projectIndex = cart.findIndex(
        (item) => item.id === selectedProject.id
      );

      if (projectIndex < 0) {
        setCartItems([
          ...cart,
          {
            ...selectedProject,
            volume,
          },
        ]);
      } else {
        setCartItems(
          cart.map((item: IProject, index: number) => ({
            ...item,
            volume: index === projectIndex ? volume : item.volume,
          }))
        );
      }

      toast("Project is added to cart successfully", {
        hideProgressBar: true,
        autoClose: 2000,
        type: "success",
        position: "top-right",
      });

      setSelectedProject(null);
      reset();
    }
  };

  return (
    <div className="">
      <Link
        href="/cart"
        className={clsx(
          "text-center bg-blue-600 text-white px-4 py-3 rounded-md h-12 block w-full",
          cart?.length === 0 && "hidden"
        )}
      >
        View Cart ({cart?.length})
      </Link>
      <h2 className="md:mt-6 text-gray-800 text-3xl font-medium">Cart</h2>

      {selectedProject?.id ? (
        <>
          <h3 className="text-gray-800 font-medium my-1">
            Project: {selectedProject?.name}
          </h3>
          <FormProvider {...formMethods}>
            <form
              onSubmit={formMethods.handleSubmit(onSubmit)}
              className="flex flex-row gap-x-1 md:mb-4"
            >
              <TextInput
                name="volume"
                id="volume"
                type="number"
                placeholder="Volume"
                register={register}
                errors={errors}
                className={{ input: "border-2" }}
              />
              <Button
                label="Add"
                type="submit"
                size="small"
                className="px-2 py-1 h-12 flex-1"
              />
            </form>
          </FormProvider>
        </>
      ) : (
        <p className="p-1">No project is selected. </p>
      )}
    </div>
  );
};
