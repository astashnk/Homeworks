class Developer {
  constructor(userName) {
    this.name = userName;
  }
  startWork() {
    console.log(`${this.name} start work...`);
  }
  endWork() {
    console.log(`${this.name} end work...`);
  }
}

class Backend extends Developer {
  buildServer() {
    console.log(`${this.name} start build server`);
  }
}

class Frontend extends Developer {
  constructor(websiteName) {
    super(websiteName)
    this.websiteName = "Amazon";
  }
  buildWebSite() {
    console.log(`${this.name} start build website ${this.websiteName}`);
  }
}

const pit = new Backend('Pit');
pit.startWork();
pit.buildServer();
pit.endWork();

const jack = new Frontend('Jack');
jack.startWork();
jack.buildWebSite();
jack.endWork();

