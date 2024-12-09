// Понимание функций высшего порядка и оптимизации в JavaScript.

const original = {
  name: "John",
  address: {
    city: "New York",
    country: "USA",
  },
};

const copy = deepClone(original);
copy.address.city = "Los Angeles";

console.log(original.address.city); // New York
console.log(copy.address.city); // Los Angeles

function deepClone(original) {
  return JSON.parse(JSON.stringify(original));
}
