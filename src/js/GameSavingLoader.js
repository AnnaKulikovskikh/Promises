// TODO: write your code here
import read from './reader';
import json from './parse';

export default class GameSavingLoader {
  static load() {
    return read().then(
      (data) => json(data),
      (error) => console.log(error),
    );
  }
}
