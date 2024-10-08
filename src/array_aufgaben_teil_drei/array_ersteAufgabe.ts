let getraenke: string[] = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
];
console.log(getraenke);
// we log the getraenke arrow, it works and shows each string in console 
const getraenkeAlphabetisch : string [] = getraenke.sort();
console.log(getraenkeAlphabetisch);
// we have sorted getreanke alphabetically and saved the array in a new const 
// now we write the function to display each string forEach 
const getreankeAlphabetischAndere : string[] = [...getraenke].sort();
console.log(getreankeAlphabetischAndere);
// this way it works as well
// now we make the function display each string of the array forEach()
const myDrinks = (drink: string[]) => {
    let outputHtml = "<ol>";
    drink.forEach((item)=> {
        console.log(item);
        outputHtml += `<li>${item}</li>`;
    })
    outputHtml += "</ol"; 
    document.getElementById("getraenkeListe")!.innerHTML = outputHtml;
    // we use ! bc we are sure that this element exists
}
myDrinks(getraenke);
myDrinks(getraenke)









