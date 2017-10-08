const { Haiku } = require('../types/Haiku');

class FakeDB {
  constructor() {
    this.count = 0;
    this.haikuMap = {};
  }

  createHaiku(haiku) {
    const id = this.count;
    this.count += 1;
    this.haikuMap[id] = haiku;
    return new Haiku(id, haiku);
  }

  getHaiku(id) {
    if (!this.haikuMap[id]) {
      throw new Error(`No haiku with id ${id} found`);
    }

    return new Haiku(id, this.haikuMap[id]);
  }

  clearHaiku(id) {
    delete this.haikuMap[id];
  }

  clearAllHaikus() {
    this.haikuMap = {};
  }
}

exports.FakeDB = FakeDB;
