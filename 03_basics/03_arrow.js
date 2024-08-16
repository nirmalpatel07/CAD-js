/*-------------------------
// const user = {
//     username : "Nirmal",
//     price : 999,

//     welcomeMessage : function(){
//         console.log(`${this.username}, welcome to website`);    // 'this' function used to target values inside this user
//    //     console.log(`${username}, welcome to website`);         //  error 
//         console.log(this);
        
//     }                                (this.username) works in objects not inside function directly
// }
// user.welcomeMessage();
// user.username = "Toji"
// user.welcomeMessage();

// console.log(this);
---------------------------------*/
/*-----------------
// function one(){
//     let name = "Nirmal"
//     console.log(this.name);             // undefined
// }
// one()

// const one = function(){
//     let name = "Nirmal"
//      console.log(this.name);                //undefined
// }
// one()
---------------------*/


// const one = () => {                         //Arrow fubction 
//     let name = "Nirmal"
//     console.log(this.name);                 // 'this' will not work in arrow function like this

// }
// one()

//() => {}                          //basic arrow function

//              parameters
  //              ^     ^
const addTwo = (num1, num2) =>{
    return num1+num2
}
console.log((addTwo(3,4)));

                //or

const addTwo1 = (num1, num2) => num1+num2
console.log((addTwo(30,4)));

                //or

const addTwo2 = (num1, num2) => (num1+num2)
console.log((addTwo(30,40)));


                //or

const name = (num1, num2) => ({usename : "Nirmal"})     //{} needed
console.log((name(30,40)));
