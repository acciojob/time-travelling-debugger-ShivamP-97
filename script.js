function foo() {
  bar();
  console.trace("Inside foo"); // called last
}

function bar() {
  baz();
  console.trace("Inside bar");
}

function baz() {
  console.trace("Inside baz"); 
}

foo();
