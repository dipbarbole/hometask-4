import { Shipper } from "./Shipper";

export class Shipment {
  state: any;

  private static SHIPMENT_ID_GENERATOR:number =  0;

  constructor(state: any){
    this.state = state;
  }

  getShipmentId():number{
    return Shipment.SHIPMENT_ID_GENERATOR ++;
  }

  ship():string {
    const {fromZipCode, type, weight} = this.state;
    const shipper:Shipper = fromZipCode;
    const costPerOunce = shipper.getCost(type, weight);
    return `You have to pay ${this.state.weight * costPerOunce} for shipping fee`;
  }
}