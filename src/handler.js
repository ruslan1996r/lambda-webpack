import { getTest } from "./test"
import { myTSString } from "./my"

class Test {
  constructor() {}

  printHello() {
    const str = 'HELLO, ZHORA!' + getTest() + myTSString

    return str
  }
}

const test = new Test()

const handler = (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(event),
    printHello: test.printHello(),
  };
  return response;
}

exports.handler = handler
