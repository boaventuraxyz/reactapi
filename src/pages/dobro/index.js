import axios from "axios";
import { useState } from "react"
import '../cinema/index.scss'

export default function Index(){
    const [n, setn] = useState(0);
    const [resposta, setresp] = useState('');

    async function calcular(){
        const resp = await axios.get(`http://localhost:5000/dobro/${n}`)
        setresp(resp.data.dobro)
    }
    return(
        <main className="tudo">
            <h1>Dobro</h1>
            <div class="text">
            Número </div><input type='text' value={n} onChange={ e => setn(Number(e.target.value))} />
            <div>
            <button className="botao" onClick={calcular} >Calcular</button>
            </div>
            <div>
            <h1>O dobro é {resposta}</h1>
            </div>
        </main>
    )
}