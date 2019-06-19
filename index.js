const input = require('./input.json')

//Assing all values to  variables
let equal_op = input.op
let lhs_op = input.lhs.op
let lhs_lhs = input.lhs.lhs
let lhs_rhs_lhs = input.lhs.rhs.lhs
let lhs_rhs_rhs = input.lhs.rhs.rhs
let lhs_rhs_op = input.lhs.rhs.op
let rhs = input.rhs

//Function which returns type of opration
const operator = (op) => {
    if(op === 'add'){
        return `+`
    } 
    if(op === 'subtract'){
        return `-`
    }
    if(op === 'multiply'){
        return `*`
    }
    if(op === 'divide'){
        return `/`
    }
    if(op === 'equal'){
        return `=`
    } 
    console.log('wrong operator')
}
//Print Step 1
console.log(  `(${lhs_rhs_lhs} ${lhs_rhs_rhs}) ${rhs} ${lhs_lhs} ${operator(lhs_op)} ${operator(lhs_rhs_op)} ${operator(equal_op)}`  )

