const map = new Map()           // Prints unique values
map.set('IN', "India")
map.set('EN', "England")
map.set('RUS', "Russia")
map.set('IN', "India")          //won't allow same value more than one time

console.log(map);
