var number = 0;

for (i=0; i<1000; i++){
  if (i%3===0 || i%5===0){
    number += i;
  }
}

console.log('The sum of multiples of 3 and 5 below 1000 is ' + number + '.');