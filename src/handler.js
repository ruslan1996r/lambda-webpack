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

exports.handler = async (event) => {
  console.log('event', event)
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};
