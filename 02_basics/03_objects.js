// singleton
// object.create

// object literals

const mySum = Symbol()

const JsUser = {
    name : "Nirmal",
    "full Name" : "Nirmal Vaghasiya",   //  Can not access with "." Operator
    [mySum] : "mykey1",     //  syntax for symbol    //  Symbol in object []
    age : 20,
    loc : "Ahm",
    mail : "nirmal@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"],

}

console.log(JsUser.mail);      //  Access method values from inside object
console.log(JsUser["mail"]);       //  Access method values from inside object
console.log(JsUser["full Name"]);       //  Access method values from inside object
console.log(JsUser[mySum]);     //  Only way to access symbol from object
console.log(typeof(mySum));

JsUser.age = 18;        //      Change value   overwrite
Object.freeze(JsUser);      //      can not change value of object after freez
JsUser.age = 25;            //      This value will not overwrite

console.log(JsUser);