function foo() {
  console.trace("Inside foo");
  bar();
}

function bar() {
  console.trace("Inside bar");   
  baz();
}

function baz() {
  console.trace("Inside baz");  
}

foo();
