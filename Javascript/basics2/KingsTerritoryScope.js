//KINGS PROBLEM
let king='john'
if(true)
{
    let king='sam'

    if(true)
    {
        let king='Ram'
        //if it is made comment  the it would take value of king of above scope that is  sam.
        //and if that is also made comment ,then john.
        console.log(king);
    }
}
if(true){
    console.log("i am second part "+king)
}
