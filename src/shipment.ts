import { Shipper } from "./Shipper";
import { ShipperFactory } from "./shipperFactory";
import { State } from "./state";

export class Shipment {
  state: State;

  private static SHIPMENT_ID_GENERATOR: number = 0;

  constructor(state: State) {
    this.state = state;
  }

  getShipmentId(): number {
    return Shipment.SHIPMENT_ID_GENERATOR++;
  }

  ship(): string {
    const { fromZipCode, type, weight } = this.state;
    const shipper: Shipper = ShipperFactory.getShipper(fromZipCode);
    const costPerOunce = shipper.getCost(type, weight);
    return `You have to pay ${
      this.state.weight * costPerOunce
    } for shipping fee`;
  }
}
