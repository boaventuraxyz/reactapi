import axios from "axios"
import { useState } from "react"
import '../cinema/index.scss'
export default function Index(){
    const [cor, setcor ] = useState('');
    const [resposta, setResposta] = useState('');

    async function verificarCor(){
        const resp = await axios.get('http://localhost:5000/primaria/' + cor);
        if (resp.data.primaria === true){
            setResposta(' SIM!');
        }
        else {
            setResposta(" NÃO!");
        }
    }
    return(
        <main>
            <h1>Cor Primária</h1>
            <div className="text">
                Cor </div><input type='text' value={cor} onChange={e => setcor(e.target.value)} />
            
            <div>
                <button className="botao" onClick={verificarCor}>Verificar</button>
            </div>
            <div>
                <h1>É cor primária?{resposta}</h1>
            </div>
        </main>
    )
}
