import { Shipper } from "./Shipper";

export class ChicagoSprintShipper implements Shipper {
  getCost(itemType: ItemType, weight: number): number {
    if (itemType === ItemType.LETTER || itemType === ItemType.OVERSIZED) {
      return 0.42 * weight;
    }
    return 0.2 * weight;
  }
}
