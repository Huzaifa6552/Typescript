let personName :string = '';

personName = prompt('what is your name?') ||'';

let lowercase :string = personName.toLowerCase() ;

let uppercase :string = personName.toLocaleUpperCase() ;

let titalecase :string = personName.split('').map(word => word.charAt(0).
toUpperCase + word.slice(1).toLowerCase()).join('') ;

if(personName !==null && personName !== ''){
alert(`Hello ${personName},Here are your name in:
lowercase: ${lowercase}
uppercase: ${uppercase}
titalecase:${titalecase}`
)}
else{
    alert('please fill your name !')
}
