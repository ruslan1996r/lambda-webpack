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
console.log("test", test)

const handler = async (event) => {
  const response = {
    statusCode: 200,
    testMsg: "hello!",
    body: JSON.stringify(event),
    printHello: test.printHello(),
  };
  return response;
}

// exports.handler = handler
export { handler }
