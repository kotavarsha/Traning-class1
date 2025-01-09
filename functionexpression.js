/*let demo=function(){
    console.log("hello")
}
console.log(demo)
demo()*/

//let operator=function(){
    //let a=num(prompt("enter a value"))
    //let b=num(prompt("enter b value"))
   //let c=a+b
   //return c
    //return console.log("hello")


//}
//console.log(operator())
//operator
//crete function expression ti find the largest of three no and input given by end users
let largest=function(){
    let a=Number(prompt("enter a value"))
    let b=Number(prompt("enter b value"))
    let c=Number(prompt("enter c value"))
    if(a>b&& a>c){
        console.log("a is largest")
    }
    else if(b>a&&b>c){
        console.log("b is largest")
    }
    else {
        console.log("c is largest")
    }
    
}
console.log(largest())

