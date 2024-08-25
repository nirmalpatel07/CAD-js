const map = new Map()           // Prints unique values
map.set('IN', "India")
map.set('EN', "England")
map.set('RUS', "Russia")
map.set('IN', "India")          //won't allow same value more than one time

// console.log(map);


//          Destructured     --      if you print only key it will print it as array
//           |     |
for (const [key, value] of map) {       // this method will not work on Objects as it works here
   // console.log(key, " : ",value);
    
}

for (const key of map) {            // this method will print values as array
    console.log(key);
    
}