import { Shipment } from "./shipment";

class Client {

  onShip(shipment:Shipment):number{
    shipment.ship();
    return shipment.getShipmentId();
  }

}
