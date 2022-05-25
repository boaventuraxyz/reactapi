import axios from "axios";
import { useState } from "react"

export default function Index(){
    const [n, setn] = useState(0);
    const [resposta, setresp] = useState('');

    async function calcular(){
        const resp = await axios.get(`http://localhost:5000/dobro/${n}`)
        setresp(resp.data.dobro)
    }
    return(
        <main>
            <h1>dobro</h1>
            numero <input type='text' value={n} onChange={ e => setn(Number(e.target.value))} />
            <button onClick={calcular} >calcular</button>
            o dobro é {resposta}
        </main>
    )
}