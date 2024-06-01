let a=Math.round(Math.random()*99)
console.log(a);
if(a%5 === 0){
    console.log("fizz son");

}
  else if (a%3 === 0){
    console.log("buzz soni ");
}
else if(a%5 ===0 && a%3===  0){
    console.log("buzz fizz soni ");
}
else{
    console.log("hech qaysi songa tegishli emas")
}