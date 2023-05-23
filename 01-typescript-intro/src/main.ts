import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts';
import './topics/01-basic-types.ts'; //Para importar una carpeta o un archivo en comillas simples se pone ./
import './topics/02-basic-types.ts';
import './topics/03-functions.ts';
import './topics/04-homework.ts'
import './topics/05-basic-destructuring.ts'
import './topics/06-function-destructuring.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
Hola Mundo
`;
console.log("Hola mundo");
setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
