//Import json data
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

//Step 2
let other_numbers = [ lhs_rhs_lhs, lhs_rhs_rhs, lhs_lhs]

//find x
let x = []
const find_x_in_other_numbers = (arr_of_other_numbers) => {
    for(i=0; i < arr_of_other_numbers.length; i++ ){
        if(arr_of_other_numbers[2] === 'x'){
            x.push('-x')
            arr_of_other_numbers.pop()
            return arr_of_other_numbers
        } else
       if(arr_of_other_numbers[0] === 'x'){
           x.push('1/x')
           arr_of_other_numbers.shift()
           return arr_of_other_numbers
       } else
       if(arr_of_other_numbers[1] === 'x'){
           x.push('1/x')
           arr_of_other_numbers.splice(1)
           return arr_of_other_numbers
       }
    }
 
}

let only_numbers = find_x_in_other_numbers(other_numbers)
console.log(x)


if(parseInt(rhs) > 0){
    rhs = `-${rhs}`
} else if(parseInt(rhs) < 0){
    rhs = `+${rhs}`
}
only_numbers.push(rhs)

console.log(only_numbers)

//Step 3(bonus)


let sum = []
if(only_numbers[1] < 0){
    let sub =   parseInt(only_numbers[2])  -  only_numbers[1]
      sum.push(sub)

} else if (only_numbers[1] > 0){
  let add =   parseInt(only_numbers[2])  +  only_numbers[1]
     sum.push(add)
}

console.log(sum)

let first = only_numbers.shift()



//  console.log(only_numbers[1])
