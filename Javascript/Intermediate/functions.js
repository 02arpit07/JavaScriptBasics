//this is how we use functions which are inbuilt
console.log('john')
// this is how we create functions or declare function
let sayhello=function(name){
    console.log(`Greeting message for ${name}`);
    console.log(`Hey ${name}`)
}
//noww we need to call that function to make it into use
//sayhello()

sayhello('John')
//----------------------------------------------------
let fullNameMake=function(firstname,lastname) {
    console.log('Welcome to my website')
    console.log(`happy to have you, ${firstname} ${lastname}`)
}

fullNameMake('arpit','vashisht')


//------------------------------
let myAdder=function(num1,num2){
    let added=num1+num2;;
    return added
}

let result=myAdder(3,5)
console.log(result)
