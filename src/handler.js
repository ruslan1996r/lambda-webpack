import { getTest } from "./test"
import { myTSString } from "./my"

class Test {
  constructor() {}

  printHello() {
    console.log('HELLO, ZHORA!' + getTest() + myTSString);
  }
}

const test = new Test()

exports.handler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(event),
    printHello: test.printHello(),
  };
  return response;
};
