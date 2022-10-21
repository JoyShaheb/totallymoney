import { observable, action, configure, makeAutoObservable } from "mobx";
import { nanoid } from "nanoid";
import dayjs from "dayjs";
import { ProductCardData } from "../API/ProductCardData";

export enum CardEnum {
  studentCard = "student life",
  liquidCard = "liquid card",
  anywhereCard = "anywhere card",
}

export enum JobEnum {
  student = "student",
  partTime = "part-time",
  fullTime = "full-time",
}

export interface UserDataProps {
  id?: string;
  date?: string;
  name?: string;
  job?: JobEnum;
  salary?: number;
  location?: string;
  availableCards?: CardEnum[];
}

configure({
  enforceActions: "always",
});

class Store {
  constructor() {
    makeAutoObservable(this);
  }

  @observable.shallow userData: UserDataProps = {};
  @observable.shallow selectedCards: string[] = [];
  @observable availableCredits: number = 0;

  @action.bound
  collectUserData = (data: UserDataProps) => {
    this.clearStore();
    data.id = nanoid(10);
    data.date = dayjs().format();
    data.availableCards = this.eligibleFor(data);
    this.userData = data;
  };

  eligibleFor = (data: UserDataProps) => {
    let { job, salary } = data;

    if (job === JobEnum.student) {
      if (+salary! > 16000) {
        return [
          CardEnum.studentCard,
          CardEnum.anywhereCard,
          CardEnum.liquidCard,
        ];
      } else {
        return [CardEnum.studentCard, CardEnum.anywhereCard];
      }
    } else if (+salary! > 16000) {
      return [CardEnum.anywhereCard, CardEnum.liquidCard];
    } else {
      return [CardEnum.anywhereCard];
    }
  };

  @action.bound
  clearStore = () => {
    this.userData = {};
    this.selectedCards = [];
    this.availableCredits = 0;
  };

  @action.bound
  selectCardsFn = (data: []) => {
    this.selectedCards = data.map((item: any) => item.value);
    this.availableCredits = this.calculateTotalCredit(this.selectedCards);
  };

  calculateTotalCredit = (data: string[]) => {
    if (data.length === 0) {
      return 0;
    } else {
      return ProductCardData.filter((item) => data.includes(item.name))
        .map((item) => item.credit)
        .reduce((x, y) => x + y);
    }
  };
}

export let store = new Store();
