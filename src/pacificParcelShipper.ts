import { Shipper } from "./Shipper";

export class PacificParcelShipper implements Shipper {
  getCost(itemType: ItemType, weight: number): number {
    if (itemType === ItemType.PACKAGE) {
      return 0.19 * weight;
    }

    if (itemType === ItemType.OVERSIZED) {
      return (0.51 + 0.02) * weight;
    }
    return 0.51 * weight;
  }
}
