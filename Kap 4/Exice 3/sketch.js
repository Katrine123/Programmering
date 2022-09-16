function setup() {
  createCanvas(400, 400);
  console.log(2 == 2 && 2 == '2'); 
console.log(2 == 2 && 2 == '2' && 2 === '2'); 
console.log(2 == 2 && 2 == '2' || 2!=2); 
console.log('hello' != 'Hello' && 'hello' !== 'Hello'); 
console.log('hello' != 'Hello' || 'hello' !== 'hello' && 'hello' !== 'heLLo'); 
console.log(2 === 2 || 2!=3 ); 
console.log(2 === 2 || 2!='2' && (true || false));
}

function draw() {
  background(220);
  
}
