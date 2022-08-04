import { Shipper } from "./Shipper";

export class AirEastShipper implements Shipper {
  getCost(itemType: ItemType, weight: number): number {
    if (itemType === ItemType.PACKAGE) {
      return 0.25 * weight;
    }

    if (itemType === ItemType.OVERSIZED) {
      return 10 + 0.39 * weight;
    }
    return 0.39 * weight;
  }
}
