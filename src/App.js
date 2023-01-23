import { useEffect, useState } from 'react';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// css
import './App.css'
//components
import Navbar from './components/Navbar.js';
import Options from './components/Options';
import Footer from './components/Footer';

const App = () => {

    const [coresErradas, setCoresErradas] = useState([]);
    const [corCerta, setCorCerta] = useState('');

    let i = 1;

    useEffect(() => {

        //gerar 4 cores aleatória
        const generateRandomColor = () => {

            while (i <= 4) {

                //Gerar código de cor aleatório
                let tmpCor = Math.random().toString(16).substr(-6);

                if (i === 4) {
                    //Cor certa
                    setCorCerta(`#${tmpCor}`);
                } else {
                    //Cores erradas
                    setCoresErradas((oldCor) => { return [...oldCor, `#${tmpCor}`] });
                }

                i++;
            }

        }

        generateRandomColor();
    }, [i])

    //Variável com as 4 cores geradas e ordena-las de forma aleatória
    const cores = [coresErradas[0], coresErradas[1], coresErradas[2], corCerta].sort();

    return (
        <div className='d-flex flex-column min-vh-100'>
            <Navbar corCerta={corCerta} />
            <Options cores={cores} corCerta={corCerta} />
            <Footer />
        </div>
    );

}

export default App;