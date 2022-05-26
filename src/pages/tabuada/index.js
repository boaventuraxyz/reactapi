import { useState } from "react"
import axios from "axios";
import '../cinema/index.scss'
export default function Index(){
    const[n, setn] = useState();
    const[resposta, setresp] = useState([]);



    async function calcular(){
        const resp = await axios.get('http://localhost:5000/tabuada?n=' + n)
        setresp(resp.data.tabuada)
    }
    return(
        <main>
            <h1>Tabuada</h1>
            <div className="text">Número: </div> <input type='text' value={n} onChange={e => setn(Number(e.target.value))} />
            <div>
            <button className="botao" onClick={calcular}> Calcular</button>
            </div>
            <div className="text"> {resposta + ''} </div>
        </main>
    )
}