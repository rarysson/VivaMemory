import { CardStates } from "./types";

export interface ICard {
  state: CardStates;
  emoji: string;
  key: string;
}
