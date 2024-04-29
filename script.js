const json = '{"name":"Mango","age":3,"isHappy":true}'; // zmienna json
const obj = JSON.parse(json); // konwertowanie json na obiekt
console.log(obj); // wyświetlenie w konsoli objektu

const badJson = '{"name":"Mango","age":3,"isHappy":true}}'; // ponownie tylko błędny json
try {
  // próba parsowania
  const obj = JSON.parse(badJson); // zmienianie na objekt
  console.log(obj); // wyświetlanie obj w konsoli
} catch (error) {
  // wyłapanie błędu
  console.error("Name:", error.name); // wyświetlenie błędu
  console.error("Message", error.message); // JW
}
