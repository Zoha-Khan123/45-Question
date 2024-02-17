//Question No 2
//Comment=======================Personal Message =================================


// let x = ("Zoha");
// console.log( `"Hello ` + x + "," + ` would you like to learn some Python today?" `);

//Question NO 3
//Comment======================================Name Cases==============================

//Comment====================== Uppercase =========================


// let userName1 = ("Zoha");
// let upperCase = userName1.toUpperCase();

//Comment ====================== Lowercase =========================


// let userName2 = ("Zoha");
// console.log(upperCase);
// let lowerCase = userName2.toLowerCase();

//Comment ============================= Titlecase ===========================
// function titleCase(str) {
//     return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
//   }
  
//   console.log(titleCase('"the quick brown fox jumped over the lazy dog"'));
  





//Question N0 4
//Comment ======================== Famous Quotes print ===================


// console.log(`Allama Iqbal said,"One sees the dream that God want them to see."`);

//Question NO 5
//Comment ============================= Famous Quotes print in variable ==============


// let famous_Person=("Allama Iqbal said,");
// let message=(`"One sees the dream that God want them to see."`);
// console.log(famous_Person +" "+ message);

//Question NO 6
//Comment ============================== Stripping Names ======================
// let personName =("\t\n  Zoha Khan \t\n ");
// console.log("Person Name with white space:");
// console.log(personName);
// console.log("\nPerson Name after stripping white space:");
// console.log(personName.trim());




//Question NO 7 and Question 8
//Comment ================================ Operations, Number Eight =================================


// console.log(`5+3=`+(5+3));
// console.log(`10-2=`+(10-2));
// console.log(`2X4=`+(2*4));
// console.log(`16/2=`+(16/2));

//Question NO 9
//Comment ============================= Favourite Number==========================


// let favouriteNumber =1;
// let message =("My favourite number is " +favouriteNumber);
// console.log(message);

//Question NO 10
// Comment ============================ First Program  ===============================


//This program check even or odd number in prompt and give answer in alert.
//Program:Check Even or Odd
//Author:Zoha Khan
//Date:13-February-2024
// let check=prompt("This Number is Odd or Even");
// if(check%2 === 0){
//    alert("This is Even Number.");
// }else{
//     alert("This is Odd");
// }

//Comment================================ Second Program  ============================


// Comment This is game.I can connect this program in webpage but I write only Javacode.
//Program:Rock, Paper and Scissor
//Author:Zoha Khan
//Date:13-February-2024

// let option =["rock","paper","scissors"];
//  let random = Math.floor(Math.random()*option.length);
//  let computerChoise = option[random];
// let myOption =Number(prompt("Enter 0 for rock, 1 for paper,2 for scissors"));
// let myChoise = option [myOption];
// alert("You Choose: " + myChoise + "\n" +"Computer choose: "  + computerChoise);

// if (myChoise==="rock" && computerChoise ==="scissors" || myChoise==="paper" && computerChoise ==="rock" || myChoise==="ssissors" && computerChoise ==="paper " ){
//     alert("You win ");
// }else if(myChoise===computerChoise){
//     alert("It's a tie");
// }else{
//     alert("You loss");
// }

//Question NO 11
//Comment ================== Each Names print ====================================
// let names =["Saba","Meerub","Nadia","Alishba","Noor","Maila"];
// for(let name of names){
//     console.log(name);
// }

 

//Question No 12
//Comment ===================== Greetings Personal Message for Each =============================

//  let names =["Saba","Meerub","Nadia","Alishba","Noor","Maila"];
//  for(let name of names){
//          console.log(`"Assalam u Alaikum` +" " +name +`, `+`Hope you are having a fantastic day!"`);
//      }


//Question NO 13
//Comment ============================ Your Own Array Of Transportation ===============================

//  let favouriteTransportation=["Train","Bicycle","Boat","Motorcycle"];
//  let transportationStatements=[
//     "I prefer travelling long distances by train because I enjoy the scenic views.",
//     "Riding a bicycle is a great way to stay fit and reduce carbon emission",
//     "We took a boat trip along the river for relaxing afternoon.",
//     "He commutes to work every day on his motorcycle"
// ]

// Comment: list 
// favouriteTransportation.forEach(function element (vehicle){
//      console.log(favouriteTransportation.indexOf(vehicle) +": "+vehicle);    
// });

// Comment: Heading of statements 
//  console.log("                       Statements Of Vehicles");

 // Comment: Statements of Vehicle 
//  transportationStatements.forEach(function element (onebyone){
//     console.log(transportationStatements.indexOf(onebyone)+":"+" "+onebyone)
// });





//Question NO 14
//Comment ============================== Guest List ===============================
// let person =["Huzaifa","Saqib","Waheed"];
// let invitation =[" You are invited to our cozy dinner gathering! Come join us for good food and even better company.It will be a laid-back evening filled with laughter and shared stories."]

//Comment: Guest List 
// console.log(`                "Guest List"`)
// person.forEach(function element (name){
//     console.log("                  "+person.indexOf(name)+": "+name);
// })

//Comment: Invitation 
// console.log(`                "Invitation"`)
// person.forEach(function element (name){
//    console.log(person.indexOf(name)+`: `+ name+ "," +invitation);
// })





//Question NO 15
//Comment: Guest List Name who came
// let guest =["Huzaifa","Saqib","Waheed"];
// console.log("         Guest List who came:");
// for (let name of guest){
//     console.log("\n"+name);
// }

//Comment:  Guest who can not came 
// let notCame =["Saqib"]
// console.log("\n" +"Unfortunately " + notCame +" can not came.")

// Comment: New Guest add 
// let newGuest =["Babar"];
// console.log("\n" + "I invited new guest " +newGuest +".");

// Comment: Replace the Guest  
// let remove= guest.splice(1,1)
// for (let oldGuest of remove){
//     console.log("\n" +"I remove "+ oldGuest +" from the list.")
// }

// Comment: Add new guest and print New set of invitation:
//  guest.splice(1,0,"Babar");
//  console.log("\n"+"        Updated Guest List :");
//  for (let list of guest){
//   console.log("\n"+list);
// }
    


//Question NO 16
//Comment =============================== More Guest ================================================
// Comment Question 15 Guest
// let oldGuest=["Huzaifa","Babar","Waheed"]
// console.log("                             Old Guest Of Question 15")
// for (let list of oldGuest){
//     console.log(oldGuest.indexOf(list)+":"+list)
// }

// Comment: Informing to my friends that I found a big dinner table
// console.log("\n" + "                            Information Message:" )
// console.log("\n" +"Hello Friends! Great news we found a biggger dinner table, so there is more space available.I invited my three more friends.")

// Comment:Add one  guest in the beginning
// console.log("\n" + "                          Add one guest in the beginning:")
// oldGuest.unshift("Ahsan")
// for(let list of oldGuest){ 
// console.log(oldGuest.indexOf(list)+":"+list)
// }

// Comment: Add one guest in the middle
// oldGuest.splice(2,0,"Ali");
//  console.log("\n"+"         Add one guest in the Middle :");
//  for (let list of oldGuest){
//   console.log(oldGuest.indexOf(list)+":"+list);
// }
    
// Comment: Add one guest in the end
// console.log("\n" + "                          Add one guest in the End:")
// oldGuest.push("Moosa")
// for(let list of oldGuest){ 
// console.log(oldGuest.indexOf(list)+":"+list)
// }

// Comment: New Invitation Message
// console.log("\n" + "                          New Invitation Message:")
// let invitation =[" You are invited to our cozy dinner gathering! Come join us for good food and even better company.It will be a laid-back evening filled with laughter and shared stories."]
// for (let list of oldGuest){
//     console.log(oldGuest.indexOf(list)+ ":"+" " +"Hello" + " " +  list +"," +invitation)
// }


//Question No 17
//Comment =========================== Shrinking Guest ==================================
//Comment Old Guest Of Question 16
// let oldGuest2=["Ahsan","Huzaifa","Ali","Babar","Waheed","Moosa"];
// console.log("                             Old Guest Of Question 16");
// for (let list of oldGuest2){
//     console.log(oldGuest2.indexOf(list)+":"+list);
// }

// Comment: Informing to my friends that I have space of only two guest:
// console.log("\n" + "                            Information Message:" )
// console.log("\n" +"Hello Friends! I am very apologize to you.My dinner table is arrive and this table contain only two person space so,I can invited only two guest. ")

//Comment Remove guest from one at a time
//  console.log("\n" +"                             Removed Guest:")

// while (oldGuest2.length > 2){
//    let removedGuest = oldGuest2.pop()
//    console.log("Sorry," +" "+ removedGuest + " I can not invite you to dinner.")
// }

//Comment Remaining Guest Invite
// console.log("\n" +"                             Remaining Guest Invitation:")
// oldGuest2.forEach(oldGuest2 =>{
//     console.log(oldGuest2 +","+" "+`you are still invited to dinner.`)
// })

// Comment Remove last two remaining guest
// console.log("\n" +"                            Remove last two remaining Guest:")
// while (oldGuest2.length > 0){
//     let removedGuest = oldGuest2.pop()
//     console.log("Removed " + removedGuest +" from the list" )
//  }

 // Comment Now array is Empty:
// console.log("\n" +"                            Now Array is Empty:")
// console.log(oldGuest2)


//Question NO 18
// Comment========================== Seeing the world ==============================
// const favouritePlaces =["Switzerland","Makkah","Dubai","Turkey","England"];
// //Orignal order
//  console.log("\n" +"                           Favourite Places Orignal order:")
//  favouritePlaces.forEach(favouritePlaces=>{
//     console.log(favouritePlaces)
//  })

 //Comment Alphabetical Order

//  console.log("\n" +"                           Alphabetical order:")
// favouritePlaces.sort()
// for(let list of favouritePlaces){
//     console.log(list)
// }


// Comment Orignal order
// const favouritePlaces2 =["Switzerland","Makkah","Dubai","Turkey","England"];
//  console.log("\n" +"                           Print Orignal order Again:")
//  favouritePlaces2.forEach(favouritePlaces2=>{
//     console.log(favouritePlaces2)
//  })

//Comment Reversed Order
// console.log("\n" +"                       Reversed order:")
// favouritePlaces2.reverse()
// for(let list of favouritePlaces2){
//     console.log(list)
// }

//Comment Reversed Again
// console.log("\n" +"                       Reversed Again:")
// favouritePlaces2.reverse()
// for(let list of favouritePlaces2){
//     console.log(list)
// }

//Comment sort your array
// console.log("\n" +"                       Sort Array in Alphabetical order:")
// favouritePlaces.sort()
// for(let list of favouritePlaces){
//     console.log(list);
// }

//Comment sort your array
// console.log("\n" +"                       Sort Array in Reversed order:")
// favouritePlaces.reverse()
// for(let list of favouritePlaces){
//     console.log(list);
// }


//Question No 19
//Comment ======================================== Dinner Guest ========================================
// let person =["Huzaifa","Saqib","Waheed"];
// let number=person.length;

//Comment Number of people
// console.log("I am inviting "+number+" people to dinner.");

//Question No 20
//Comment ==============================List========================================
// let languages =["Urdu","Sindhi","Punjabi","Balochi","Pashto"];
// languages.forEach(languages=>{
//         console.log(languages);
//       })

//Question 21
//Comment =========================== Object Containing Items =================================================
// let person={};
// person.Name="Jhangir ";
// person.Age="28";
// person.University="NED";
// person.Study  ="Master Of Engineering";

// for(let detail in person){
//     console.log(detail +":" +person[detail])
// }

// //Question 22
//Comment ============================International Error ======================
// let places  = ["Switzerland","Makkah","Dubai","Turkey","England"];

// //Comment Error
//  console.log("\n" +"                       Error:")
// console.log(places[5]);

// // Comment Correcting the Error
//  console.log("\n" +"                       Correcting the Error:");
//  console.log(places[4]);

//Question 23
//Comment======================
// let car = 'subaru';

//Comment Test1
// console.log("Is car == 'sabru'? I predict True.");
// console.log(car == 'subaru');

//Comment Test2
// console.log("Is car == 'Amir'? I predict False.");
// console.log(car == 'Amir');

//Comment Test3
// console.log("Does the car length is 6 ? I predict True.");
// console.log(car.length==6);

//Comment Test4
// console.log("Does the car length is 4 ? I predict False.");
// console.log(car.length==4);

//Comment Test5
// console.log("Does car includes 'sub' ? I predict True.");
// console.log(car.includes('sub'));

//Comment Test6
// console.log("Does car contain the letter 'u' ? I predict True.");
// console.log(car.indexOf('u')!==-1);

//Comment Test7
// console.log("Is car == 'Honda'? I predict False.");
// console.log(car == 'Honda');

//Comment Test8
// console.log("Is the first character of car is 's'? I predict True.");
// console.log(car.charAt(0) === 's');

//Comment Test9
// console.log("Is car !== 'sabru'? I predict False.");
// console.log(car !== 'subaru');

//Comment Test8
// console.log("Is the last character of car is 's'? I predict False.");
// console.log(car.charAt(5) === 's');


//Question NO 24
//Comment ==========================More Conditional Test ===========================
//Comment Test1 Equality and inequality
// console.log("\n" +"                      Equality and inequality:")
// let a=10
// let b=5
// console.log(a == b);
// console.log(a !== b);

//Comment Test2  LowerCase
// console.log("\n" +"                      LowerCase:")
// let c="ZOHA";
// console.log(c.toLowerCase() == "zoha");

//Comment Test3 Numerical
// console.log("\n" +"                     Numerical:")
// let e=10;
// let f=15;
// console.log(e == f);
// console.log(e != f);
// console.log(e > f);
// console.log(e < f);
// console.log(e >= f);
// console.log(e <= f);

//Comment Test4 and && or||
// console.log("\n" +"                     and && or||:")
// let g="zoha";
// let h="meerub";
// console.log(g=="zoha" && h=="meerub");
// console.log(g=="meerub" && h=="zoha");
// console.log(g=="zoha" || h=="meerub");
// console.log(g=="meerub" || h=="zoha");

//Comment Test5 An item is in array
// console.log("\n" +"               An item is in array:")
// let fruits=["apple","banana","mango"];
// console.log(fruits.includes("apple"));

//Comment Test6 An item is  not in array
// console.log("\n" +"               An item is not in array:")
// console.log(fruits.includes("orange"));




//Comment Question 25
//Comment==========================Allien Colors #1 ================================
// console.log("\n" +"                      Passing Version:")
// let alien_Color=["yellow"];
// if(alien_Color=="yellow"){
//     console.log("The player just earned 5 points");
// }
//Comment Failing Version
// console.log("\n" +"                      Failing Version:")
// alien_Color=["red"];
// if(alien_Color=="yellow"){
//     console.log("The player just earned 5 points");
// }



//Comment Question 26
//Comment==========================Allien Colors #2 ================================
// console.log("\n" +"                      Runing if Block:")
// let alien_Color=["green"];
// if(alien_Color == "green"){
//     console.log("The player just earned 5 points for shooting the alien.");
// }else{
//     console.log("The player just earned 10 points for shooting the alien.");
// }

// console.log("\n" +"                      Runing else Block:")
// alien_Color=["red"];
// if(alien_Color == "green"){
//     console.log("The player just earned 5 points for shooting the alien.");
// }else{
//     console.log("The player just earned 10 points for shooting the alien.");
// }


//Comment Question 27
//Comment==========================Allien Colors #3 ================================
//Comment Version 1
// console.log("\n" +"                      Version 1:")
// let alien_Color=["green"];
// if(alien_Color == "green"){
//     console.log("The player just earned 5 points for shooting the alien.");
// }else if (alien_Color == "yellow"){
//     console.log("The player just earned 10 points for shooting the alien.");
// }else {
//     console.log("The player just earned 15 points for shooting the alien.");
// }


//Comment Version 3
// console.log("\n" +"                      Version 2:")
//  alien_Color=["yellow"];
// if(alien_Color == "green"){
//     console.log("The player just earned 5 points for shooting the alien.");
// }else if (alien_Color == "yellow"){
//     console.log("The player just earned 10 points for shooting the alien.");
// }else {
//     console.log("The player just earned 15 points for shooting the alien.");
// }

//Comment Version 3
// console.log("\n" +"                      Version 3:")
//  alien_Color=["red"];
// if(alien_Color == "green"){
//     console.log("The player just earned 5 points for shooting the alien.");
// }else if (alien_Color == "yellow"){
//     console.log("The player just earned 10 points for shooting the alien.");
// }else {
//     console.log("The player just earned 15 points for shooting the alien.");
// }


//Comment Question 28
//Comment==========================Stages Of life ================================
// let age=500;
// if(age<2){
//     console.log("The person is a baby")
// }else if(age>=2 && age<4){
//     console.log("The person is a toddler")
// }else if(age>=4 && age<13){
//     console.log("The person is a kid")
// }else if(age>=13 && age<20){
//     console.log("The person is a teenager")
// }else if(age>=20 && age<65){
//     console.log("The person is a adult")
// }else{
//     console.log("The person is elder")
// }


//Comment Question 29
//Comment==========================Favourite Fruit================================
// let favouriteFruits =["apple","banana","orange"]; 
// if (favouriteFruits == "apple"){
//     console.log("I really like apple.");
// }else if(favouriteFruits == "banana"){
//     console.log("I really like banana.");
// }else if(favouriteFruits == 'orange'){
//     console.log("I really like orange.");
// }else {
//     console.log("I did not like");
// }

//Comment Question 30
//Comment==========================Hello Admin================================
// let userNames=["admin ","akbar ","amjad ","bilal ","waseem "];
// if (userNames=="admin"){
//     console.log("Hello admin,would you like to see a status report");
// }else{
// console.log("Hello " + userNames +","+ " thank you for logging in again." )
// }


//Comment Question 31
//Comment==========================Hello Admin================================
// let list=[""];
// if (list==""){
//     console.log("We need to find some users!");
// }else if (list=="admin"){
//     console.log("Hello admin,would you like to see a status report");
// }else{
// console.log("Hello " + list +","+ " thank you for logging in again." )
// }


//Comment Question 32
//Comment==========================Hello Admin================================
// let current_users = ['admin', 'akbar', 'amjad', 'bilal', 'waseem'];
// let new_users = ['akbar', 'moosa', 'ADMIN', 'jamal', 'zeeshan'];

// let current_users_lower = current_users.map(user => user.toLowerCase());
// for (let i = 0; i < new_users.length; i++) {
//     let new_user_lower = new_users[i].toLowerCase();
//     if (current_users_lower.includes(new_user_lower)) {
//         console.log("Sorry, the username '" + new_users[i] + "' is already taken. Please enter a new username.");
//     } else {
//         console.log("Congratulations! The username '" + new_users[i] + "' is available.");
//     }
// }
    




//Comment Question 33
//Comment=========================================================
// function getOrdinal(n) {
//         const suffixes = ["th", "st", "nd", "rd"];
//         const v = n % 100;
//         return n + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
//     }
    
//     for (let i = 1; i <= 9; i++) {
//         console.log(getOrdinal(i));
//     }
    

//Comment Question 34
//Comment==================== Pizzas=====================================
//Name of pizza
// console.log("\n" +"                      Pizza Name:")
// let pizzas=["Fajita","BBQ Chicken","Pepperoni"];
// for(let pizza of pizzas){
// console.log(pizza)
// }

//Comment Statement
// console.log("\n" +"                     Statement:")
//  pizzas=["Fajita","BBQ Chicken","Pepperoni"];
// for(let pizza of pizzas){
// console.log("I like "+pizza+ " pizza.")
// }

//Comment Additional Sentence
// console.log("\n" +"                     Additional Sentence:")
// console.log("The cheesey layers, the burst of flavours, and the crunch of it's crust-everthing about pizza just hits the spot.When it comes to pizza,how can annyone not love it from the bottom of their heart!")


//Comment Question 35
//Comment==================== Animals=====================================
//Comment Three animals that common charcteristics
// console.log("\n" +"        Three animals that common charcteristics:")
// let animals=["Cat","Dog","Rabbit"];
// let x =""
// for (let i=0; i<animals.length; i++){
//     console.log(x+animals[i] )
// }

//Comment Print  statement about each animal
// console.log("\n" +"        Print  statement about each animal:")
//  animals=["Cat","Dog","Rabbit"];
//  x =""
// for (let i=0; i<animals.length; i++){
//     console.log(x+animals[i]+" would make a great pet." )
// }

//Comment Print common characteristic
// console.log("\n" +"        Print common characteristic:")
// console.log("These animals are known for their championship and loyalty to their owners")


//Comment Question 36
//Comment==================== T-shirts=====================================
// function make_shirts(size,message){
//     console.log("The size of the shirt is "+ size + " and print the message on shirt is "+message)
// }
// make_shirts(40,"Hello ZOha");


//Comment Question 37
//Comment==================== Large shirts=====================================
// function make_shirts(size="large",messages="I love Typescript"){
//     console.log("The size of the shirt is "+ size + " and print the message on shirt is "+messages)
// }make_shirts();
// make_shirts("medium");
// make_shirts("small ","Programming is the best.");


//Comment Question 38
//Comment==================== City=====================================
// function describe_city(city,country){
//     console.log(city+ " is in "+country)
// }describe_city("Karachi","Pakistan");
// describe_city("London","United Kingdom");
// describe_city("Paris","France");


//Comment Question 39
//Comment==================== City names=====================================
// function city_country(city,country){
//         console.log(city+" " +country)
//     }city_country(`"Karachi"`,`"Pakistan"`);
//     city_country(`"London"`,`"UnitedKingdom"`);
//     city_country(`"Paris"`,`"France"`);
    


//Comment Question 40
//Comment==================== Albums=====================================
// function make_album(artist,title,numTracks){
//           let album={
//             artist:artist,
//             title:title
//           }
//         if(numTracks !==undefined)
//         album.numTracks=numTracks;
//     return album;
//         }
        //Comment Create three albums
        // let album1=make_album(`Taylor Swift`,`1989`)
        // let album2=make_album(`Ed Sheeran,1989`,`Divide`,16)

        // let album3=make_album(`Beyonce`,`Lemonoade`,12);

        //Comment Print each album
        // console.log(album1);
        // console.log(album2);
        // console.log(album3);



//Comment Question 41
//Comment==================== Magicians=====================================
// function showMagicians(magicians){
//     magicians.forEach(magician => {
//         console.log(magician);
//     });
// }
// let magiciansNames=["David Copperfield","Harry Houdini","Penn Jillete","Teller"];
// showMagicians(magiciansNames);


//Comment Question 42
//Comment==================== Great Magicians=====================================
//   function showMagicians(magicians){
//         magicians.forEach(magician => {
//             console.log(magician);
//         });
//     }
   
//     function make_great(magicians){
//         for(let i=0; i<magicians.length; i++){
//        magicians[i]="The Great "+magicians[i];
//         }
//     }
//      let magiciansNames=["David Copperfield","Harry Houdini","Penn Jillete","Teller"];
//     make_great(magiciansNames);
//     showMagicians(magiciansNames);



//Comment Question 43
//Comment==================== Unchanged Magicians=====================================
// function showMagicians(magicians){
//     magicians.forEach(magician => {
//         console.log(magician);
//     });
// }
// function makeGreat(magicians){
//     let greatMagicians =[];
//     for (let i=0; i<magicians.length; i++){
//         greatMagicians.push("The great "+magicians[i]);
//     }
//     return greatMagicians;
// }
// let magiciansNames=["David Copperfield","Harry Houdini","Penn Jillete","Teller"];
// let greatMagicians=makeGreat([...magiciansNames]);
// console.log("                Orignal Magicians:");
// showMagicians(magiciansNames);
// console.log("                Great Magicians:");
// showMagicians(greatMagicians)

//Comment Question 44
//Comment==================== Sandwiches=====================================
// function makeSandwich(...items) {
//         console.log("Making a sandwich with:", items.join(", "));
//     }
    
//     // Call the function with different numbers of arguments
//     makeSandwich("ham", "cheese", "lettuce");
//     makeSandwich("turkey", "avocado");
//     makeSandwich("peanut butter", "jelly");
   


//Comment Question 45
//Comment==================== Cars=====================================
// function carInfo(manufacturer,model, ...arbitrary){
//         let carObject = {
//             manufacturer: manufacturer,
//             model: model
//         };
//         for (let i = 0; i < arbitrary.length; i += 2) {
//             let key = arbitrary[i];
//             let value = arbitrary[i + 1];
//             carObject[key] = value;
//         }
    
//         return carObject;
//     }
//     let myCar = carInfo('Toyota', 'Camry', 'color', 'black', 'year', 2020);
//     console.log(myCar);