// for Loop
const arr1 = [100,200,300,400,500];
console.log ("For Loop");
var pos = 0;
for (var i=0; i<=arr1.length-1; i++) {
  console.log ("Number " + (++pos) + " : " + arr1[i]);
   
}

// forIn
const nums = [{n:200},{n:560},{n:276}, {n:784},{n:843}];
console.log ("For In");
for (var j=0; j<nums.length;j++) {
console.log ('n' in nums);
}

const names=["Madhavi","Radhika","Priya"];
console.log (2 in names);
//index 2 is existing
// forEach

const ords = ["First", "Second", "Third", "Fourth", "Fifth"];
console.log ("For Each")
ords.forEach(ordinals);

function ordinals (value){
  console.log (value);
}

// for of

console.log ("For Of");
const iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value);
}

const topic = ["Javascript", "NodeJS", "React","MongoDB"];

for (const value of topic) {
  console.log(value);
}


const myProfile = {
  name:"Madhavi Latha Yayavaram",
  mobile: "9425057832",
  email: "lathayvm@gmail.com",
  address: {houseno:"335",
   location:"DK-1",
   scheme: "Scheme No.74-C",
   area: "Vijaynagar",
   city: "Indore",
   state: "Madhya Pradesh",
   country:"India"},
  
  education: ["B.Sc", "M.A", "PGDCA"],
  sotwareskills: ["MongoDb", "React", "NodeJS", "Javascript", "HTML", "Oracle"],
  experience:["Digital Marketing Executive", "Content Writer", "Facutly Member", "Software Programmer"]
  
}

console.log (myProfile);
