//affichage 5 4 3 2 1 recursive
function Up(n){
    if (n > 0 ){
        console.log(n);
        Up(n-1)
        
    }
    else{
        return
    }
}
Up(5)


console.log( '==========================');
console.log( '==========================');
console.log( '==========================');


// affichage 1 2 3 4 5 recursive
function Down(n){
    if (n > 0 ){
        Down(n-1)
        console.log(n);
        
        
    }
    else{
        return
    }
}
Down(5)




// somme 1
function somme (n){
    let sum = 0 
    for (let i=0 ; i<= n ; i++){
        sum += i
    }
    return sum
}


console.log(somme (5))


console.log( '==========================');
console.log( '==========================');
console.log( '==========================');

// somme 2 recursive
function Total(n){
    if(n===0){
        return 0
    }
    else{
        return Total(n-1)+n
    }
}


console.log(Total(5));


// Factoriel 
function fact(n){
    let result = 1 
    if (n === 0 || n === 1){
        return 1
    }
    for (let i=2 ; i<= n ; i++){
        result*= i
    }
    return result
}
console.log(fact(5))



// Factoriel2 recursive recursive
function fact2(n){
    if(n===0 || n===1){
        return 1
    }
    else{
        return fact2(n-1)*n
    }
}
console.log(fact(5));



// Fonction pwissance 
function pow(m,n){
    let result2= 1
    for (let i=1 ; i<= n ; i++){
        result2*= m
    }
    return result2
}
console.log(pow(2,3));



// Fonction pwissance 
function pow2(m,n){
    if(n===0) return 1
    else{
        return pow2(m,n-1)*m
    }
}
console.log(pow2(2,3));




//Function mou9arna 
function panetrom(str){
    let p1=0
    let p2=str.length-1

    while(p1 !== p2){
        if(str[p1] !== str[p2]){
            return false
        }
        else{
            return true
        }
    }
}
console.log(panetrom('madam'));



// Function Mou9arna 2
function panetrom2(str){
   return str === str.split("").reverse().join("")
}
console.log(panetrom2('madam'));




// Function Fibnotchi 
//{0,1,1,2,3,5,8,13,21}
function Fibnotchi(n){
    let result4=[0,1]
    for (let i=2 ; i<n; i++){
        result4.push(result4[i-2] + result4[i-1])
    }
    return result4
}
console.log(Fibnotchi(5));
