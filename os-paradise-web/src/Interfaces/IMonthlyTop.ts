import { IPlayer } from "./IPlayer";

export interface IMonthlyTop {
  startDate: number;
  endDate: number;
  gained: number;
  player: IPlayer;
}
