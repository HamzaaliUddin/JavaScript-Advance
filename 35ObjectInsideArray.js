// objects  inside array

const users =[
    {userId:1,firstName:"Hamza ",gender:"male"},
    {userId:2,firstName:"Ali",gender:"male"},
    {userId:3,firstName:"Hussain",gender:"male"},
    {userId:4,firstName:"abbas",gender:"male"},
]

const userNames =[];
for(let user of users){
    userNames.push(user.firstName)
}
console.log(userNames)