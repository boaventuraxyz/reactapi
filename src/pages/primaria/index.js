import axios from "axios"
import { useState } from "react"

export default function Index(){
    const [cor, setcor ] = useState('');
    const [resposta, setResposta] = useState('');

    async function verificarCor(){
        const resp = await axios.get('http://localhost:5000/primaria/' + cor);
        if (resp.data.primaria === true){
            setResposta('SIM');
        }
        else {
            setResposta("NAO");
        }
    }
    return(
        <main>
            <h1>Cor Primaria</h1>
            <div>
                Cor: <input type='text' value={cor} onChange={e => setcor(e.target.value)} />
            </div>
            <div>
                <button onClick={verificarCor}>verificar</button>
            </div>
            <div>
                é cor primaria?{resposta}
            </div>
        </main>
    )
}
