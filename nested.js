// function parent(){
//     function child(){
//         console.log("This is child")
        
//     }
//    child()
//}
// parent()
var a=10;//global scope
let b=20;//local scope
function parent(){
    var a="varsha";
    let b="saketh";
    console.log(a)
    console.log(b)
    console.log(this.a)
    //console.log(this.a)
}
parent()

//lexical scope
function main(){
    let a=10;
    function child(){
        console.log(a)
    }
    child()
}
main()
//clouser
function parent(){
    function child1(){
        console.log("child 1")
        function child_1(){
            console.log("child_1")
        }
        return child_1
    }
    function child2(){
        console.log("child 2")
    }
    return [child1,child2]
}
parent()[0]()()
parent()[1]()
