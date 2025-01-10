function main(a){//call back function storing higher order function parameter a
    console.log(a);
    console.log(a());
    
}
main(function(){//higher order function
    return "iam cbf1";
}

)
main(function(){
    return "iam cbf1";
}

)
function operator(task){
    //task(20,30)
    console.log(task(20,30))
    //console.log(task(10,20))


}
operator(function(a,b){
    return a+b;
})
operator(function(a,b){//reusablility
    return a+b;
})
operator(function(a,b){//reusablility
    return a*b;
})
//by end user
function operator(task){
    
    console.log(task())
    

}
operator(function(){
    let a=Number(prompt("enter a value"))
    let b=Number(prompt("enter b value"))
    let c=a+b;
    return c;

   
})
operator(function(){
    let a=Number(prompt("enter a value"))
    let b=Number(prompt("enter b value"))
    return a-b;

   
})
operator(function(){
    let a=Number(prompt("enter a value"))
    let b=Number(prompt("enter b value"))
    return a/b;

   
})
//higher number
function operator(task){
    
    console.log(task())
    

}
operator(function(){
    let a=Number(prompt("enter a value"))
    let b=Number(prompt("enter b value"))

    if(a>b){
        console.log("a is largest")
    }
    else{
        console.log(" b is largest")
    }
})
//Arrow function
//Implicit Arrow function
let a=() =>console.log("hello");
//Explicit Arrow function
let b=()=>{return "hello"}
console.log(b())



    let main1=(task)=>{
        console.log(task(10,20))
    }
    main1((a,b)=>{
        return a+b;
    })




   

   






