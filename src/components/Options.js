import { v4 as id } from 'uuid';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const Options = ({ cores, corCerta }) => {

    const [smShow, setSmShow] = useState(false);
    const [msg, setMsg] = useState('');                 //Mensagem a dizer se acertou na cor ou não 
    const [corLetras, setCorLetras] = useState('');     //Atribuir class em Bootstrap dependendo do tipo da resposta
    const [estado, setEstado] = useState('');           //Estado da resposta acertou/errou

    const handlerClick = (e) => {
        setSmShow(true)     //Ativar Modal

        //Verificar resposta, atribuir mensagem, class e estado conforme a resposta
        if (e.target.value === corCerta) {
            setMsg('ACERTOU!')
            setCorLetras('text-success');
            setEstado('acertou');
        } else {
            setMsg('Errou!')
            setCorLetras('text-danger');
            setEstado('errou');
        }

    }

    //Verificar resposta ao fechar o model
    const handleClose = () => {
        //Se acertou refresh
        if (estado === 'acertou') {
            window.location.reload(false);
        }
    }

    return (
        <>
            <section className="p-5">
                <div className="container overflow-hidden">
                    <div className="row g-4">
                        {cores.map(cor =>
                            <div className="col-md-6 option" key={id()}>
                                <button className="h-100 w-100 rounded" value={cor} style={{ backgroundColor: cor }} onClick={handlerClick}></button>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <Modal size="sm" show={smShow} onHide={() => setSmShow(false)} backdrop="static">
                <Modal.Header closeButton onHide={handleClose}>
                    <Modal.Title className={corLetras}>
                        {msg}
                    </Modal.Title>
                </Modal.Header>
            </Modal>
        </>

    );
}

export default Options;