import axios from "axios"
import { useState } from "react"
import '../cinema/index.scss'
export default function Index(){
    const[txt, settxt] = useState('')
    const[c, setc] = useState('')
    const[resp, setresp] = useState('')

    async function freq(){
        const resp = await axios.get(`http://localhost:5000/freq/${txt}/${c}`);
        setresp(resp.data.Numero)
    }
    return(
        <main>
            <h1>Frequência</h1>
           <div className="text"> Texto</div> <input type='text' value={txt} onChange= {e => settxt(e.target.value)}   />
            <div className="text">Caracter </div><input type='text' value={c} onChange= {e => setc(e.target.value)} />
            <div>
            <button className="botao" onClick={freq}>Consultar</button>
            </div>
            <h1>
            Frequência: {resp}
            </h1>

        </main>
    )
}