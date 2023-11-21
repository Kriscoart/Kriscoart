const person = {
    name: "Thanura",
    age: 19
};

for (const [key,value] of Object.entries(person)){
    console.log(`Key => ${key} | Value ${value}`)
}