import axios from "axios";
import { useState } from "react"
import '../cinema/index.scss'

export default function Index(){
    const [temp, setTemp] = useState('');
    const [resposta,setResposta] = useState('');

    async function verificarFebre(){
        const resp = await axios.get('http://localhost:5000/febre/?g=' + temp)
        if (resp.data.febre === true) {
            setResposta('SIM!');
        }
        else {
            setResposta('NÃO!');
        }
    }
    return(
        <main>
            <h1>Febre</h1>
            <div className="text">
            Temperatura </div><input type='text' value={temp} onChange={e => setTemp(Number(e.target.value))} />

            <div>
            <button className="botao" onClick={verificarFebre}>Consultar</button>
            </div>

            <div>
            <h1>Estou com febre? {resposta}</h1>
            </div>
        </main>
    )
}