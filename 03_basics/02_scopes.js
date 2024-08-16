// const a = 10;       //local scope 
// let b = 20;         // local scope
// var c = 30;         //global scope      // never use var


// function one(){
//     const username = "Nirmal"

//     function two(){
//         const website = "youtube"
//         console.log(username);              //child function can access vlaue from parent
//     }
//     // console.log(website)                 //error, patent can't access value from child
//     two()
// }
// one()

// if(true){
//     const name = "Nirmal"
//     if(name==="Nirmal"){
//         const fname = "Vaghasiya"
//         console.log(fname +" "+ name);
//     }
//     // console.log(fname);
    
// }
// // console.log(name);


//+++++++++++++++++++++++++++


console.log(addone(5))                  
function addone(num){                   // first method to declare function
    return num+1
}


// addtwo(3);                            // cna't write before , error
const addtwo = function(num){           // in this declaration we can access function before function
    return num+2                        // seconde method to declare function
}
addtwo(3);

