export interface IProject {
  id?: string | undefined;
  name: string;
  country: string;
  image: string;
  price_per_ton: number;
  offered_volume_in_tons: number;
  distribution_weight: number;
  supplier_name: string;
  earliest_delivery: string;
  sdgs: number[];
  description: string;
  volume?: number;
}
