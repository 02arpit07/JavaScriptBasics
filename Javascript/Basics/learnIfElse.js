if(false)
{
    console.log('i am inside if block')
    console.log('i am still inside if block')
}
else if(false)
{
    console.log('i am inside if in caps block')
}
else{
    console.log('i am inside else block')

}

console.log('LCO PROBLEM------')
//LCO
var whoIsHere='actor'
if(whoIsHere=='user')
{
    console.log('greeting message for user')
    console.log('allow access to all courses')
}
else if(whoIsHere=='teacher')
{
    console.log('greeting message for teacher')
    console.log('allow access to his courses')
}
else{
    console.log('please verify email')
}
