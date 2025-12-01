import _ from 'lodash'; 


const fruiten = ['Peer', 'Appel', 'Bannan', 'Aardbij']; 

const gehusseld = _.shuffle(fruiten); 
console.log('Gehusseld:', gehusseld); 


const titel = "Hallo dit is een Title Voor Een Blogpost"; 
const urlSlug = _.kebabCase(titel); 
console.log('URL Slug:', urlSlug);  
