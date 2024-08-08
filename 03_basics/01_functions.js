// function sayMyName(){
//     console.log("N");
//     console.log("I");
//     console.log("R");
//     console.log("M");
//     console.log("A");
//     console.log("L");
// }

// sayMyName()

// function addTwoNumbers (n1, n2){
//     console.log(n1 + n2)
// }

// addTwoNumbers(25,27)


function loginMessage(username){
    if(!username){                                  // username === undefined
        console.log("Please enter a username");
        return                                      // it wil end function will not print "just logged in"
    }
    return `${username} just logged in`             
}

console.log(loginMessage("Nirmal"));        //will print username       //it will return undefined if name not entered
