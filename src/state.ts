export class State {
  shipmentId: number;
  toAddress: string;
  fromAddress: string;
  toZipCode: string;
  fromZipCode: string;
  weight: number;
  type: ItemType;
  marks?: string[];

  constructor(
    toAddress: string,
    fromAddress: string,
    toZipCode: string,
    fromZipCode: string,
    weight: number,
    type: ItemType,
    marks?: string[]
  ) {
    this.toAddress = toAddress;
    this.fromAddress = fromAddress;
    this.toZipCode = toZipCode;
    this.fromZipCode = fromZipCode;
    this.weight = weight;
    this.type = type;
    this.marks = marks;
  }
}
