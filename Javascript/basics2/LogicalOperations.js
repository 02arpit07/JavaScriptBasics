//&&-And operator-bothh sides should be true
//||-oR-ONE SIDE NEED TO BE TRUE


let isVerified=false
let isLoggedIn=true
let hasPaymentToken=true
let isGuest=true
if(!isVerified &&isLoggedIn&&hasPaymentToken) {
    console.log('greeting message to user')
    console.log('grant access to paid courses')
}
else if(isVerified||isGuest)
{
    console.log('allow free previews')
}
else{
    console.log('Message:please contact admin')
}
