import { getTest } from "./test"
import { myTSString } from "./my"

class Test {
  constructor() {}

  printHello() {
    console.log('HELLO, ZHORA!' + getTest() + myTSString);
  }
}

const test = new Test()

test.printHello()