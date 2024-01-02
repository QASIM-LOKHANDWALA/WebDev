const user1 = {
    firstName: "A",
    age: 17,
    gender: "male"
}
const user2 = {
    firstName: "B",
    age: 18,
    gender: "male"
}
const user3 = {
    firstName: "C",
    age: 19,
    gender: "male"
}
const user4 = {
    firstName: "D",
    age: 20,
    gender: "male"
}
const people = [user1,user2,user3,user4];

const users = [{
    firstName: "X",
    age: 17,
    gender: "male",
    address: {
        houseName: "Random Appartment",
        houseNumber: 12,
        street: "Unknown Street"
    }
},{
    firstName: "Y",
    age: 18,
    gender: "female"
},{
    firstName: "Z",
    age: 19,
    gender: "female"
},{
    firstName: "W",
    age: 20,
    gender: "female"
}]

for(let i=0 ; i<people.length ; i++){
    if(people[i]["gender"]=="male"){
        console.log(people[i]["firstName"]);
    }
}
for(let i=0 ; i<users.length ; i++){
    if(users[i]["gender"]=="female"){
        console.log(people[i]["firstName"]);
    }
}
console.log(users[0]["address"]["street"]);
