//Store to persist data locally //TODO complete states and handlers to have have more control on cart 
import { create } from "zustand";
import { IProject } from "@/src/types/project";
interface CartStore {
  selectedProject: IProject | null;
  setSelectedProject: (project: IProject | null) => void;
  setProjects: (projects: IProject[]) => void;
  cart: IProject[];
  setCartItems: (items: IProject[]) => void;
  addProjectToCart: (cartItem: IProject) => void;
}

const initialState: CartStore = {
  selectedProject: null,
  cart: [],
  setProjects: function (): void {
    throw new Error("Function not implemented.");
  },
  setCartItems: function (): void {
    throw new Error("Function not implemented.");
  },
  addProjectToCart: function (): void {
    throw new Error("Function not implemented.");
  },
  setSelectedProject: function (): void {
    throw new Error("Function not implemented.");
  },
};

export const useCartStore = create<CartStore>((set) => ({
  ...initialState,
  addProjectToCart: (item: IProject) =>
    set((state) => ({
      ...state,
      cart: [...state.cart, item],
    })),
  setCartItems: (items: IProject[]) =>
    set((state) => ({
      ...state,
      cart: items,
    })),
  setProjects: (projects: IProject[]) =>
    set((state) => ({
      ...state,
      projects,
    })),
  setSelectedProject: (project: IProject | null) =>
    set((state) => ({
      ...state,
      selectedProject: project,
    })),
}));
