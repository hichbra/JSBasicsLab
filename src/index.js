console.log('Hello World!');

var str = "imagepng"
str.split('.');
console.log(str.split('.'));
str = str.split('.')

if (str.length >= 2) {
  console.log(str.pop());
} else {
  console.log('non');

}
