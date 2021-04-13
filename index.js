// Code your solutions in this file
let names =['lisa' , 'Joe' , 'Sonya'];
let events = 'surprise';

function writeCards(names,events){
  let messages=[];
 for (let i=0; i<names.length; i++) {
messages.push('Thank you, ${names[i]}, for the amazing ${events} gift!;');
}
return messages;
}

console.log(writeCards(['lisa', 'Joe' , 'Sonya'], 'surprise'))
