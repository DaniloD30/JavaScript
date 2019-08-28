export const idade = 23;
import axios from 'axios'; 
 
export default class Usuario {
    
    static info() {
        console.log('Apenas teste');
    }

    
   
// g
}

// Funão delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

function umPorSegundo() {
    delay().then(() => {
    console.log('1s');
    delay().then(() => {
    console.log('2s');
    delay().then(() => {
    console.log('3s');
    });
 })
 });
}


async function executar(){
    const response = await delay();
    console.log(response);
}
// executar();


