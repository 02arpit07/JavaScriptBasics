let iAmGlobal='somevalue'

if(true)
{
    //var iamLocal='someMoreValue';
    let iamLocal='someMoreValue';
    iAmGlobal='superman'
    console.log(iAmGlobal);
    console.log(iamLocal);
}
//console.log(iamLocal)
//--this do not work because iamlocal isinside the scope of if condition
//if we make that var as in comment there,we can accesss that outside if,thus it creates problem
//thats why we prefer let inside any scope except global scope
console.log(iAmGlobal)
