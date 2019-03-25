import App from './App.jsx'
import style from './main.css'
import MovieList from './MovieList.jsx'

const arr = [1, 2, 3];
const iAmJavascriptES6 = () => console.log(...arr);
window.iAmJavascriptES6 = iAmJavascriptES6;

console.log(`I'm a silly entry point`);