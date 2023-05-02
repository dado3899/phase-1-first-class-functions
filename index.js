function Monday() {
    routine(lift)
}

function Tuesday() {
    routine(swim)
}

function Wednesday() {
    routine(run)
}

function Thursday() {
    routine(lift)
}

function Friday() {
    routine(swim)
}

function run(){
    console.log("Go for a five-mile run");
}
function swim(){
    console.log("Swim 40 laps");
}
function lift(){
    console.log("Pump iron");
}

function routine(extraExercise){
    run()
    extraExercise()
}

Monday()

Saturday()

function Saturday(){
    routine(()=>console.log("Tennis"))
}
function Sunday(sundayExercise){
    if (sundayExercise === swim){
        console.log("Prepping for swimming")
    }
    routine(sundayExercise)
}

// Sunday(()=>console.log("Rowing"))
Sunday(lift)
const array = [1,2,3]
// console.log(typeof array)


// Return Functions
function returnAFunction(){
    function somethingElse(){
        console.log("Hello")
        return "Final"
    }
    return somethingElse
    // return function(){
    //     console.log("Hello")
    //     return "Final"
    // }
}

const returnedFunction = returnAFunction()
// const finalReturn = returnedFunction()
// console.log(returnedFunction)

// function returnSwim()

function receivesAFunction(callback){
    callback()
}

function returnsANamedFunction(){
    return function named(){
        return 1
    }
}
function returnsAnAnonymousFunction(){
    return function(){
        return 1
    }
}

const newArray = [[1,2,3],[1,2,3],[1,2,3]]
// 1 line == 9 lines
newArray.forEach((num)=>num.forEach((singlenum)=>console.log(singlenum)))
