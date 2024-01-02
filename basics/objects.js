const user1 = {
    firstName: "Qasim",
    age: 17,
    gender: "male"
}
const user2 = {
    firstName: "Shabbir",
    age: 14,
    gender: "male"
}
const user3 = {
    firstName: "Hussein",
    age: 45,
    gender: "male"
}
const user4 = {
    firstName: "Zainab",
    age: 39,
    gender: "female"
}
const people = [user1,user2,user3,user4];

const users = [{
    firstName: "Qasim",
    age: 17,
    gender: "male",
    address: {
        houseName: "Hilltop Complex",
        houseNumber: 103,
        street: "M.G Road"
    }
},{
    firstName: "Shabbir",
    age: 14,
    gender: "male"
},{
    firstName: "Hussein",
    age: 45,
    gender: "male"
},{
    firstName: "Zainab",
    age: 39,
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
