// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "127"
tinderUser.Name = "Nirmal"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    emial : "nirmal@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Nirmal",
            lastname : "Patel",
        }
    }
}

// console.log(regularUser.fullname.userfullname);


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = {5:"a", 6:"b"}

// const obj4 = {obj1, obj2}
// const obj4 = Object.assign({}, obj1, obj2, obj3)
const obj4 = {...obj1, ...obj2}


console.log(obj4);
