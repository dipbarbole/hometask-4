import { Shipper } from "./Shipper";

export class PacificParcelShipper implements Shipper{

  getCost(itemType: any, weight: number): number {
    if (itemType === "PACKAGE"){
      return 0.19 * weight;
    }

    if (itemType === "OVERSIZED"){
      return (0.51 + 0.02) * weight;
    }
    return 0.51 * weight;
  }

}