export enum CardEnum {
  studentCard = "student life",
  liquidCard = "liquid card",
  anywhereCard = "anywhere card",
}

type ProductCardDataProps = {
  id: number;
  name: CardEnum;
  apr: number;
  balanceTransfer: number;
  purchaseOffer: number;
  credit: number;
  info: string;
};

export let ProductCardData: ProductCardDataProps[] = [
  {
    id: 1,
    name: CardEnum.studentCard,
    apr: 18.9,
    balanceTransfer: 0,
    purchaseOffer: 6,
    credit: 1200,
    info: "The Student Life credit card is only available to customers with an employment status of Student.",
  },
  {
    id: 2,
    name: CardEnum.anywhereCard,
    apr: 33.9,
    balanceTransfer: 0,
    purchaseOffer: 0,
    credit: 300,
    info: "The anywhere card is available to anyone anywhere.",
  },
  {
    id: 1,
    name: CardEnum.liquidCard,
    apr: 33.9,
    balanceTransfer: 12,
    purchaseOffer: 6,
    credit: 3000,
    info: "The Liquid card is a card available to customers who have an income of more than £16000.",
  },
];
