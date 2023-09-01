/* eslint-disable */
//import "bootstrap";
//import "./style.css";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";


// Define the lists of pronouns, adjectives, nouns, and extensions
const pronouns = ["the", "our"];
const adjectives = ["great", "big"];
const nouns = ["jogger", "racoon"];
const extensions = [".com", ".net", ".us", ".io", ".nft", ".x"];

// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Function to generate and shuffle all the domain name combinations
function generateAndShuffleDomainNames() {
  const domainNames = [];
  for (const pronoun of pronouns) {
    for (const adjective of adjectives) {
      for (const noun of nouns) {
        for (const extension of extensions) {
          const domainName = pronoun + adjective + noun + extension;
          domainNames.push(domainName);
        }
      }
    }
  }
  shuffleArray(domainNames);
  return domainNames;
}

// Call the function to generate and shuffle domain names
const domainNames = generateAndShuffleDomainNames();

// Display the shuffled domain names
for (const domainName of domainNames) {
  console.log(domainName);
}
