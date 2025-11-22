const callStack = [];

function pushStack(funcName) {
  callStack.push(funcName);
  console.log(`PUSH: ${funcName} | Current Stack: [${callStack.join(" -> ")}]`);
}

function popStack(funcName) {
  const popped = callStack.pop();
  console.log(`POP:  ${funcName} | Current Stack: [${callStack.join(" -> ")}]`);
}

function foo() {
  console.trace("Inside foo"); 
  pushStack("foo");

  bar();

  popStack("foo");
}

function bar() {
  console.trace("Inside bar");  
  pushStack("bar");

  baz();

  popStack("bar");
}

function baz() {
  console.trace("Inside baz");
  pushStack("baz");

  popStack("baz");
}

foo();
