import { useState } from "react"
import axios from "axios";

export default function Index(){
    const[n, setn] = useState();
    const[resposta, setresp] = useState([]);



    async function calcular(){
        const resp = await axios.get('http://localhost:5000/tabuada?n=' + n)
        setresp(resp.data.tabuada)
    }
    return(
        <main>
            <h1>tabuada</h1>
            numero: <input type='text' value={n} onChange={e => setn(Number(e.target.value))} />
            <div>
            <button onClick={calcular}> calcular</button>
            </div>
            {resposta}
        </main>
    )
}