//Creation new hashTable
const print = function(a,b){
    console.log(a,b);
    
}

let hashTable = new Map([
    ['name', 'aymen'],
    ['phone', 23824210],
    [3100, 'zip Code'],
    ['kairouan',true],
    [print,'PrintValue']
])

console.log(hashTable);

//GEt a valeur from the key 
console.log(hashTable.get('name'));
console.log(hashTable.get('phone'));
console.log(hashTable.get(3100));
console.log(hashTable.get(print));


//Set a new (key , valeur)
hashTable.set('age',31)
console.log(hashTable);

//exemple of found or not ==> return true / false 
console.log(hashTable.has('age'))

//Delete 
hashTable.delete('kairouan')

//Size of length 
console.log(hashTable.size)
// console.log(hashTable);


//loop on Map 
for (let item of hashTable){
    console.log(item);
}



//affichage All Keys
console.log(hashTable.keys());


//afficha All Value
console.log(hashTable.values());

// Clear All 
console.log(hashTable.clear());
console.log(hashTable);



