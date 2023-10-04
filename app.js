const challenge1 = (breakfast, lunch, dinner) => {
    return `breakfast: ${breakfast}, lunch: ${lunch}, dinner: ${dinner}`
}

const challenge2 = (num) => {
    if(typeof num === 'string' || num <= 0){
        return 'needs to be a positive number'
    }
    if(num % 3 === 0 && num % 5 === 0){
        return 'fizz buzz'
    } else if(num % 3 === 0){
        return 'fizz'
    } else if(num % 5 === 0){
        return 'buzz'
    } else {
        return num
    }
}

const challenge3 = (num1, num2) => {
    if(typeof num1 === 'string' || typeof num2 === 'string'){
        return 'make sure you enter 2 numbers'
    }
    let res = num1 + num2
    if(res % 2 === 0){
        return res
    } else {
        return num1 * num2
    }
}

const challenge4 = () => {
    let arr = []
    for(let i = 0; )
}

const challenge5 = () => {
    // add code here
}

module.exports = {
    challenge1,
    challenge2,
    challenge3,
    challenge4,
    challenge5,
}
