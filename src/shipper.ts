export interface Shipper {
  getCost(itemType: ItemType, weight: number): number;
}
