

let guest_list :string [] = ['imran khan','nawaz sharif','Asif',];

//for(let i=0; i<guest_list.length; i++){
  //  console.log('Dera Mr.' + guest_list[i] + ', \n\n it is our pleasure to invite you in our party. \n\n Thank you!');
//}

 let absent_guest:string = 'Imran khan';
 let New_guest: string = 'Muhammad ali';
 guest_list[0] = New_guest;
// for(let i=0; i<guest_list.length; i++){
// console.log('Dear Mr.' + guest_list [i] + ',\n\nit is our pleasure to invite you in our party. \n\n Thank you!');
// }
console.log(`Mr.${absent_guest} is not coming to the party`);
 console.log('Good News! we find Big Table so we are inviting 3 mor guests.');

 guest_list.unshift('sir rehan');
 guest_list.splice(2 ,0 ,'usman');
 guest_list.push('faizan');
 for(let i=0; i<guest_list.length; i++){
    console.log('Dear Mr.' + guest_list [i] + ',\n\nit is our pleasure to invite you in our party. \n\n Thank you!');
    }
    console.log(`\n sorrywe can not inviting for party`)
while(guest_list.length >2){
 let remove_guest = guest_list.pop()
 console.log(`sorry Mr ${remove_guest},you are not inviting for party `)
}

for(let i=0; i<guest_list.length; i++){
  console.log('Dear Mr.' + guest_list [i] + ',\n\n you are still  inviting party\n\n thank you. ');
  }


guest_list.splice(0, 2);
console.log(guest_list);
