# Guess The Color

Guess The Color is a game where the user tries to guess the color out of the four options that are given to him. 

## Installation

Download the files in the repository and execute the following commands:


```bash
npm install
```
Open the terminal

```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Pages

App.js - This page contains the main structure of the page with components, also has some useStates and has the function that contains the logic to generate four random colors.\
\
Navbar.js - The Navbar component has the title of the page and the code of the color that the user needs to guess.\
\
Options.js - The options component has a map function that prints all values of the generated colors.

## Code

### App.js

Create useStates for the wrong and right colors.
```javascript
const [coresErradas, setCoresErradas] = useState([]);
const [corCerta, setCorCerta] = useState('');
```
A function that generates four random colors. In the fourth loop will generate the correct color, after that all colors generated are the options for the wrong colors.
```javascript
const generateRandomColor();
```
Create a const named colors and store all the colors generated randomly.
```javascript
const cores = [coresErradas[0], coresErradas[1], coresErradas[2], corCerta].sort();
```

### Options.js

Modal state from React Bootstrap
```javascript
const [smShow, setSmShow] = useState(false);;
```
Message that informs the user if the gues is right or wrong
```javascript
const [msg, setMsg] = useState('');
```
Color of the text depending on the user answer.
```javascript
const [corLetras, setCorLetras] = useState('');
```
Depending on the user answer this usestate will change between right or wrong.
```javascript
const [estado, setEstado] = useState('');
```
The function handlerClick will activate when the user clicks on one of the answers. When clicked, will activate the model, then will compare the value of the button clicked and the value of the correct answer. If the values match, it will set the message for “Correct”, put the color of the text to green and set the state to correct. If the values don't match, set the message to “Wrong”, set the text color to red and the state to wrong.
```javascript
const handlerClick();
```
The handleClose is a onHide function that when the model is hidden will run the function. This function will see if the useState state is “correct” and will refresh the page. If the state is wrong, nothing will append.
```javascript
const handleClose();
```

## Packages

[React Bootstrap](https://react-bootstrap.github.io/)\
[uuid](https://github.com/uuidjs/uuid)

## References
[React](https://reactjs.org/)\
[Bootstrap](https://getbootstrap.com/)\
[React Bootstrap](https://react-bootstrap.github.io/)\
[uuid](https://github.com/uuidjs/uuid)\
[Google Fonts Hind](https://fonts.google.com/specimen/Hind?query=Hind)\
[Google Fonts Silkscreen](https://fonts.google.com/specimen/Silkscreen?query=Silkscreen)
