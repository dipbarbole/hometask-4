import { Shipper } from "./Shipper";

export class ChicagoSprintShipper implements Shipper{

  getCost(itemType: any, weight: number): number {
    if(itemType === "LETTER" || itemType === "OVERSIZED"){
      return 0.42 * weight;
    }
    return 0.20 * weight;
  }

}