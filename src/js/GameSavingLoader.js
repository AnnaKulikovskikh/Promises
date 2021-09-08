import read from './reader';
import json from './parse';
import GameSaving from './gameSaving';

export default class GameSavingLoader {
  static load() {
    return read().then((data) => json(data))
      .then((saving) => {
        const parseSaving = JSON.parse(saving);
        const game = new GameSaving(parseSaving.id, parseSaving.created, parseSaving.userInfo);
        return game;
      });
  }
}
