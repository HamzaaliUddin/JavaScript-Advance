// nested Destructurning

const users =[
    {userId:1,firstName:"Hamza ",gender:"male"},
    {userId:2,firstName:"Ali",gender:"male"},
    {userId:3,firstName:"Hussain",gender:"male"},
    {userId:4,firstName:"abbas",gender:"male"},
]
const [user1,user2,user3]=users;
console.log(user1,user2,user3)



// destructure from object an array 
const [{firstName,userId},,{gender:genderForm}]=users;
console.log(userId,firstName,genderForm)