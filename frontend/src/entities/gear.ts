export interface GearItem {
  id: string;
  name: string;
  weight: number;
  description?: string;
  image_url?: string;
}
export interface GearList {
  id: string;
  name: string;
  items: GearItem[];
}