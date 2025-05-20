const reg = new RegExp(/\s/);

// if (/\d/.test("HO est la molécule de l'eau")) {
// if (/[0-9]/.test("H22O est la molécule de l'eau")) {

console.log(/loo*/.test("Lorem ipsum, dolor sit amet \r consectetur adipisicing elit. Quam, iste."));
console.log("Lorem ipsum, dolor sit amet \r consectetur adipisicing elit. Quam, iste. ipsum".match(/(ipsum)/g));


// const paragraph = "The quick brown fox jumps over the lazy dog. It barked.";
// const regex = /[A-Z]/g;
// const found = paragraph.match(regex);

const isValidPassword = (password)=>{
    // return /[A-Za-z0-9]{8}/.test(password); // Doit avoir au moins 8 caractères.
    // return /[A-Z]{1}/.test(password); // Doit contenir au moins une majuscule,
    // return /[a-z]{1}/.test(password); // Doit contenir au moins une minuscule,
    return /[0-9]{1}/.test(password); // Doit contenir au moins un chiffre,
    return /^(?=.*[0-9])(?=.*[A-Z])/.test(password); // Doit contenir au moins un chiffre,
    // return /\s/.test(password); // Doit contenir au moins un chiffre,
    // return /[^A-Za-z0-9]{2}/.test(password); //Ne doit pas contenir d'espaces.
    // return /[A-Za-z0-9]{8}/.test(password) && /[A-Z]{1}/.test(password) && /[a-z]{1}/.test(password) && /[0-9]{1}/.test(password) && /[^A-Za-z0-9]{1}/.test(password) && /\S/.test(password); 
    // return /.{8}/.test(password) && /[A-Z]{1}/.test(password) && /[a-z]{1}/.test(password) && /[0-9]{1}/.test(password) && /[^A-Za-z0-9]{1}/.test(password) && /\S/.test(password); 

}

// console.log('====================================');
// console.log(isValidPassword("password123!%"));
// console.log('====================================');


// const numberReche = (password);
// const password = (password123!%);
    
function numberReche (password){

    return /\d/.test(password);
}
console.log("au moins un chiffre :",numberReche("password125!%"));
// const numberReche = ("password123!%");
// const numberReche = (isValidPassword)

function  hasUpperCase(password){
    return /[A-Z]/.test(password);
}
console.log("Question 4");
console.log("Au moins une lettre majuscule" , hasUpperCase ("ssword125!%"));

function  hasLowerCase(password){
    return /[a-z]/.test(password);
}

console.log("Question 5");
console.log("Au moins une lettre minuscule" , hasLowerCase ("PASSWOR1fg25!%"));


function hasSpecialCharacter(password){
    return /\W/.test(password);
}

console.log("Au moins un caractere speciale",hasSpecialCharacter("PASSWOR125hg!!"));

// const deletespace = (password) => {
//     console.log("Split : " , password.split("").join(" "));
//     // return password.split(/[_]/);

// } 

// console.log("deleteSpace : " , deletespace ("Jires Jires"));

const reversepassword = (password) => {
    return password.split("").reverse().join("");
} 

console.log("Quetion 8");
console.log("reversepassword : " , reversepassword("Password1223!"));


// const capitalizeFirstCharacter = (password) => {
//     // return password.("!/\[A-Z"){1};
//     // return password.includes();
//     const array_letter = password.split("");
//     if (array_letter.length >= 1){
//         array_letter[0] = array_letter[0].toUpperCase();
//         return array_letter.join("");
//     } else {
//         console.log("Error");
//     }
// } 

// console.log("Quetion 9");
// console.log("result : " , capitalizeFirstCharacter("password1223!"));

const capitalizeFirstCharacter = (password) => {
    const pass = password.split("");
    for (let i=0; i<pass.length; i++){
        if (!(/[A-Z]/.test(pass[i]))){
            pass[i].toUpperCase();
        }
    }
    return pass.join("");
}
console.log("Quetion 10");
console.log("result : " , capitalizeFirstCharacter("Password1223!"));



const getSubstring = (password ,start, end) =>{
    if(0<start < password.length && 1<= end < password.length +1 ){
        let tabCopie = password.split("");
    console.log(tabCopie);
    let tabFinal = tabCopie.slice(start, end-1);
    console.log(tabFinal);

    return tabFinal.join("");
    } else {
        return "";
    }
    
}

console.log("la sous-chaine extraite est :", getSubstring("ba",1,2));

