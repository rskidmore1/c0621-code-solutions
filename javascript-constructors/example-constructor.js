function ExampleConstructor() {

}
console.log('Prototype prop:', ExampleConstructor.prototype);
console.log('Typeof', typeof ExampleConstructor());
var examp = new ExampleConstructor();
console.log('examp var:', examp);
console.log('instanceOf check:', examp instanceof ExampleConstructor);
