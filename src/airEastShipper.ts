import { Shipper } from "./Shipper";

export class AirEastShipper implements Shipper {

  getCost(itemType: any, weight: number): number {
    if (itemType === "PACKAGE") {
      return 0.25 * weight;
    }

    if (itemType === "OVERSIZED") {
      return 10 + 0.39 * weight;
    }
    return 0.39 * weight;
  }

}