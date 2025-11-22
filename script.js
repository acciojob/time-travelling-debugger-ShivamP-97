//your JS code here. If required.
class CallStack {
  constructor() {
    this.stack = [];
  }

  push(funcName) {
    this.stack.push(funcName);
    console.log(`PUSH: ${funcName}`);
    this.print();
  }

  pop() {
    const funcName = this.stack.pop();
    console.log(`POP:  ${funcName}`);
    this.print();
    return funcName;
  }

  print() {
    console.log(`Current Call Stack: [${this.stack.join(" -> ")}]`);
    console.log('-------------------------');
  }
}

const callStack = new CallStack();

function functionA() {
  callStack.push("functionA");
  console.log("Executing functionA");

  const resultB = functionB(5);
  console.log(`functionA received from functionB: ${resultB}`);

  callStack.pop();
  return resultB + 1;
}

function functionB(n) {
  callStack.push("functionB");
  console.log(`Executing functionB with n = ${n}`);

  let resultC = 0;
  if (n > 0) {
    resultC = functionC(n - 1);
  }

  callStack.pop();
  return n + resultC;
}

function functionC(n) {
  callStack.push("functionC");
  console.log(`Executing functionC with n = ${n}`);

  const value = n * 2;

  callStack.pop();
  return value;
}

console.log("=== Program Start ===");
const finalResult = functionA();
console.log(`Final Result: ${finalResult}`);
console.log("=== Program End ===");
