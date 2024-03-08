const { PI, getCircumference, getArea, getVolume } = require('./mathUtil.js');

console.log(PI);
const circumference = getCircumference(10);
const area = getArea(10)
const volume = getVolume(10);

console.log(circumference);
console.log(area);
console.log(volume);

console.log(circumference.toFixed(2) + ' cm');
console.log(area.toFixed(2) + ' cm^2');
console.log(volume.toFixed(2) + ' cm^3');