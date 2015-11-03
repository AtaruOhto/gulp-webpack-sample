class HogeFuga {

  constructor() {
    console.log('newly created!');
  }

  print() {
    console.log('print')
  }

}

hogeFuga = new hogeFuga();
hogeFuga.print();

let test = "test"

(() => {
  console.log(test);
})();
