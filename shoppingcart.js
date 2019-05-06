const shoppingCart = []; //Empty Array
const itemList = [
    {name: 'Book', price: 50},
    {name: 'Drink', price: 30},
    {name: 'Hat', price: 10},
    {name: 'Pen', price: 5},
    {name: 'Phone', price: 70}
]; //Array 5 OBJECTS containing 2 PROPERTIES
//Can access the elements just like a regular array. Example: 'console.log(itemList[0].name);  This retuns 'Book'

//1. function to add objects to 'shoppingCart' using Splice 
const entry1 = [
    {name:'PC', price: 1000},//object1
    {name: 'Console', price: 200}//object2
];
let result = {};//Global variable

    function addItem(itemName, itemPrice){
        result = [...shoppingCart, ...entry1];
        console.log(result);
    }
    addItem(...entry1);//Displays result of adding new objects to array 'ShoppingCart'
    


//2. function to remove objects from array using Array.'findIndex()'
const name = 'PC';//object to find
let remove;//Var containing final elemts after removing element
const met = result.findIndex(result => result.name === name); 
console.log(met);//This should be taken off. It just shows the value that we searched (Display '0')
    function removeItem(itemName){
        remove = result.slice(met + 1);
        console.log(remove);
    }
    removeItem(find);


//3. Function to edit object
const price = 200;//Array to edit
const amount = [
    {name: "Console", price: 800}
];
let go;
const test = result.findIndex(result => result.price === price);
    function editItem(){
        go = result.map(test => amount);
        console.log(go);
    }
    editItem();

//4. function to print all items
function printTotal(){
    for(const end of go){
        console.log(end);
    }
}
printTotal();