import { AirEastShipper } from "./AirEastShipper";
import { ChicagoSprintShipper } from "./chicagoSprintShipper";
import { PacificParcelShipper } from "./pacificParcelShipper";
import { Shipper } from "./Shipper";

export class ShipperFactory {
  static getShipper(zipCode: string): Shipper {
    if (zipCode) {
      const prefix = zipCode.substring(0, 1);
      if (prefix === "1" || prefix === "2" || prefix === "3") {
        return new AirEastShipper();
      }

      if (prefix === "A4" || prefix === "A5" || prefix === "A6") {
        return new ChicagoSprintShipper();
      }

      if (prefix === "A7" || prefix === "A8" || prefix === "A9") {
        return new PacificParcelShipper();
      }
    }
    return new AirEastShipper();
  }
}
