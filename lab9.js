//Q1
let characters = ['Harry', 'Hermione', 'Ron', 'Draco', 'Luna']
for (let i = 0; i < characters.length; i++) 
    { console.log(characters[i]); 
    }

//Q2
let firstname = ("Harry");
let house = ("gryffindor");
console.log(`Welcome, ${firstname} of ${house}!`)

//Q3
let charactername = ("Hermione");
console.log(charactername.toLocaleLowerCase)
console.log(charactername.toUpperCase)

//Q4
let spell = ("Expelliarmus");
console.log(spell.trim)

//Q5
let quote = ("I solemnly swear that I am up to no good");
let extracted = quote.slice(11, 16);
console.log(extracted);

//Q6
let firstnamee = ("Ron");
let lastnamee = ("Weasley");
let fullname = firstnamee.concat(lastnamee);
console.log(fullname);

//Q7
let sentance = ("Draco is a good wizard");
let newsentance = sentance.replace("good", "bad");
console.log(newsentance)

//Q8
let houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw']
houses.push("Slytherin");
houses.pop("Slytherin");
console.log(houses)

//Q9
let spells = ['Alohomora', 'Lumos', 'Nox'];
spells.unshift("Accio");
spells.shift("Accio");
console.log(spells)

//Q10
let professors = ['Dumbledore', 'McGonagall', 'Snape', 'Hagrid'];
let selectedprofessors = professors.slice(1, 3);
console.log(selectedprofessors)

//Q11
let students = ['Neville', 'Seamus', 'Dean', 'Parvati']
students.splice(1, 2 );
console.log(students)

//Q12
let phrase = ("Mischief Managed");
let trimmedphrase = phrase.trim(0);
let lowerCasePhrase = trimmedphrase.toLocaleLowerCase(0);
let finalphrase = lowerCasePhrase.concat("- Harry");
console.log(finalphrase);

//Q13
let wizards = ['Harry', 'Hermione', 'Ron'];
wizards.push("Luna", "Draco");
console.log(wizards);

//Q14
let message = ("Welcome to Hogwarts School of Witchcraft and Wizardry")
let extracted1 = message.slice(11, 19);
let finalmessage = extracted1.concat("castle");
console.log(finalmessage)