let currentId = 0;

function generateId() {
    return ++currentId;
}

let posters = [];

function addPoster(title) {
    let id = generateId();
    let newPoster = { id, title };
    posters.push(newPoster);
    return newPoster;
}

// Example usage:
let poster1 = addPoster("First Poster");
let poster2 = addPoster("Second Poster");

console.log(posters);
// Output: 
// [
//   { id: 1, title: 'First Poster' },
//   { id: 2, title: 'Second Poster' }
// ]
