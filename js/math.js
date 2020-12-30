calculation = {
    a: 6 , b: 8 , c: 10 , message: "This is math calculation object properties"
}
function math (abc){
    console.log(calculation.message)
    console.log("a="+calculation.a)
    console.log("b="+calculation.b)
    console.log("c="+calculation.c)

    let add = calculation.a+ calculation['b']
    console.log("a+b =" + add)
}
math(calculation)
