import { CardEnum } from "./enums";

export interface iProductCardData {
  id: number;
  name: CardEnum;
  apr: number;
  balanceTransfer: number;
  purchaseOffer: number;
  credit: number;
  info: string;
}
