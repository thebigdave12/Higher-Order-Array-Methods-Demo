////////////////////////////////////
////// COPY AND CHANGE ARRAYS //////
////////////////////////////////////

const lotr = ['biLbO BaGGINs', 'leGOlAs', 'Frodo bAGGINS', 'sAMwiSe GamGEe', 'gAndALF tHe GREY']

const copyArrToCamelCase = arr => {
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        const str = arr[i]
        const splitStr = str.split(' ')
        let camelCaseStr = ''
        
        for (let x = 0; x < splitStr.length; x++) {
            let word = splitStr[x]

            word = word.toLowerCase()

            if (x !== 0) {
                word = word.charAt(0).toUpperCase() + word.slice(1)
            }

            camelCaseStr += word
        }

        newArr.push(camelCaseStr)
    }

    return newArr
}

const copyArrToSnakeCase = arr => {
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        let str = arr[i]
        str = str.toLowerCase()
        const splitStr = str.split(' ')
        const snakeCaseStr = splitStr.join('_')
        newArr.push(snakeCaseStr)
    }

    return newArr
}
  
// console.log(copyArrToCamelCase(lotr))
// console.log(copyArrToSnakeCase(lotr))


const copyArrAndChange = (arr, cb) => {
    const result = []
    for (let i = 0; i < arr.length; i++){
        const newValue = cb(arr[i])
        result.push(newValue)
    }
    // arr.forEach((elem) => {
    //     const newValue = cb(elem)
    //     result.push(newValue)
    // })
    return result
}

const copyStrToCamelCase = (str) => {
    const splitStr = str.split(' ')
        let camelCaseStr = ''
        
        for (let x = 0; x < splitStr.length; x++) {
            let word = splitStr[x]

            word = word.toLowerCase()

            if (x !== 0) {
                word = word.charAt(0).toUpperCase() + word.slice(1)
            }

            camelCaseStr += word
        }
        return camelCaseStr
}

const copyStrToSnakeCase = (str) => {
    str = str.toLowerCase()
    const splitStr = str.split(' ')
    const snakeCaseStr = splitStr.join('_')

    return snakeCaseStr
}

// console.log(copyArrAndChange(lotr, copyStrToCamelCase))
// console.log(copyArrAndChange(lotr, copyStrToSnakeCase))

const multiplyByFour = num => num * 4

const nums = [1, 2, 3, 4, 5]

// console.log(copyArrAndChange(nums, multiplyByFour))

let mappedNums = nums.map(multiplyByFour)
let mappedNums2 = nums.map((num) => num * 4)

// console.log(mappedNums, mappedNums2)

////////////////////////////////////////
////// HIGHER ORDER ARRAY METHODS //////
////////////////////////////////////////


//// MAP ////

/*
    Pass a callback to map that will return 'pink'
    for each color in the array.
*/

const colors = ['red', 'blue', 'yellow', 'green', 'orange']

 const mappedColors = colors.map((color) => {
    return 'pink'
 })
console.log(colors)
console.log(mappedColors)
/*
    Edit the formalGreeting function and use the built in .map method 
    to map over the names parameter and return a new array with "Hello, " 
    appended to the beginning of each name
    
    Make sure to use arrow functions combined with the map method    
*/

const formalNames = ['Bernard', 'Elizabeth', 'Conrad', 'Mary Margaret']

const formalGreeting = names => {
    let appendedNames = names.map((name) => {
        return `Hello, ${name}`
    })
    return appendedNames
}


// Call formalGreeting passing in the formalNames array

console.log(formalGreeting(formalNames))

//// FILTER ////

/*
    Pass a callback to filter that will return
    only strings that begin with the letter A
*/

const places = ['Binghampton', 'Albany', 'New York', 'Ithaca', 'Auburn', 'Rochester', 'Buffalo']


const placesThatStartWithA = places.filter((place) => {
    return place.startsWith('A')
})

console.log(placesThatStartWithA)

/*
    Create a function called identifier that uses the filter higher order 
    array method to filter over the provided jobs array of objects

    The function should return the object of the person with a job as a programmer
    
    Make sure to use the arrow function in conjunction with the filter method
    
    Your returned value should be a single object, not an array with one object inside of it
    
    Use arrow functions and the filter method
*/

// Do not edit the code below.
let jobs = [
	{ receptionist: "James" },
	{ programmer: "Steve" },
	{ designer: "Alicia" },
    { programmer: "Tommy"}
];

// Do not edit the code above.

function identifier(arr){
    let filteredJob = arr.filter(function (elem){
        return elem.programmer // elem.programmer === true
    })
    return filteredJob[0]
} 

// call the function passing in the jobs array

console.log(identifier(jobs))

//// REDUCE ////

/*
    Edit the productOfArray function and use 
    the built in .reduce method to loop over the numbers parameter
    and return the product of all the numbers in the array

    Make sure to use arrow functions combined with the reduce method    
*/

const numsToReduce = [43, 7, 24, 79, 290]

const productOfArray = numbers => {
    let total = numbers.reduce((acc, curr) => {
        return acc * curr
    })
    return total
}



// call productOfArray passing in numsToReduce

console.log(productOfArray(numsToReduce))


/*
    Pass a callback and an initial value to reduce 
    that will subtract all the expenses in the array
    from the initial budget

    This will allow us to see how much we have left
    in the budget after these expenses
*/

const budget = 2000

const expenses = [
    {
        title: 'rent', 
        amount: 1000
    }, 
    {
        title: 'car payment', 
        amount: 250
    }, 
    {
        title: 'food', 
        amount: 300
    }
]


const remaining = expenses.reduce((acc,curr) => {
    console.log(curr.amount)
    console.log(acc)
    return acc - curr.amount

}, budget)

console.log(remaining)
