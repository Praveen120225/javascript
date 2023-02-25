// settimeout practice
setTimeout(()=>{
console.log("hello")
},[3000])

//2nd one 
setTimeout(()=>{
    console.log("everyone")
},[5000]

)

function greet(){
    console.log("hello everyone")
}
setTimeout(greet, 7000);
// console.log("welcome to settimeout")