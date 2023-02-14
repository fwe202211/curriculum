class Taiyaki {
  constructor(element) {
    this.element = element;
  }

  search(){
    console.log(`中身は${this.element}です`);
  }
}

let anko = new Taiyaki("あんこ");
anko.search();

let kurimu = new Taiyaki("クリーム");
kurimu.search();

let tizu = new Taiyaki("チーズ")
tizu.search();
