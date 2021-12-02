// PART 1 Objects
const person = {
  name: "Jordi",
  age: 35,
  evaluations: [7, 10, 9],
};

person.name = "Jordi";

const selection = "age";
person[selection] = "35";

console.log(person.evaluations);

// PART 2 Arrays
const favorirteColors = [
  "yellow",
  "green",
  "purple",
  "white",
  5,
  { greeting: "hi, I am an object" },
];

console.log(favorirteColors[5]);

// PART 3 A 'real-life' object
const catBreeds = [
  {
    name: "Abyssinian",
    description:
      "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: [
      "Active",
      "Energetic",
      "Independent",
      "Intelligent",
      "Gentle",
    ],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
    food: {
      favourite_food: "fish",
      medium_liked_food: "dried fruits",
      disliked_food: "walnuts",
    },
  },

  {
    name: "Aegean",
    description:
      "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: ["Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {
      favourite_food: "tuna",
      medium_liked_food: "canned food",
      disliked_food: "all fruits",
    },
  },

  {
    name: "American Bobtail",
    description:
      "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: [
      "Intelligent",
      "Interactive",
      "Lively",
      "Playful",
      "Sensitive",
    ],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {
      favourite_food: "meaty things",
      medium_liked_food: "tuna",
      disliked_food: "canned food",
    },
  },
];

// Step1
console.log('Name cat 3:', catBreeds[2].name);
// Step2
console.log('Energy level cat 1:',catBreeds[0].energy_level);
// Step3
console.log('First temperament cat breed 2:', catBreeds[1].temperament[0]);
// Step4
console.log('Last temperament cat breed 3:', catBreeds[2].temperament[4]);
// Step5
console.log('Favourite food cat breed 3:', catBreeds[2].food.favourite_food);