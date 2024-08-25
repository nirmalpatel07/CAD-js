const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
}

for (const key in myObject) {
    // console.log(key);
    console.log(`${key} for ${myObject[key]}`);
    
    
}