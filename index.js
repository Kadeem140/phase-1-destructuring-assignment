const farmAnimals = 'cow horse sheep pig chicken';

//My code here #1
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ')

//My code here #2
const [bessie, , dolly, babe, little] = farmAnimals.split(' ')

//My code here #3
const [blackAndWhite, ,black, pink, ,] = farmAnimals.split(' ')


// const dogsName = 'Sir Woody BarksALot';
// const [title, firstName, lastName] = dogsName.split(' ');

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];


//my code here #4

let [red, orange ,yellow ,green ,blue , indigo, violet ] = colors
console.log(red, "color 1")

//my code here #5
let removed = colors.splice(5,1)
console.log(removed)
let [r, o, y, g, b, v] = colors
console.log(colors, "supposed to be red")

//my code here #6 
const indg = removed[0]
console.log(removed)

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

//my code  #7
const {muppetName, color, song, job, partner} = muppet
muppetName = "muppetName";
color = "color";
song = "song";
job = "job";
partner = "partner"

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

//My code # 8
const {song1, song2, song3, song4} = nestedMuppet.album.theMuppetMovie
song2 = "song2";
song4 = "song4"
// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner