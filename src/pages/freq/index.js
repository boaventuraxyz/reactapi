import axios from "axios"
import { useState } from "react"

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
            <h1>Frequencia</h1>
            texto <input type='text' value={txt} onChange= {e => settxt(e.target.value)}   />
            caracter <input type='text' value={c} onChange= {e => setc(e.target.value)} />
            <button onClick={freq}>consultar</button>
            
            Frequencia: {resp}

        </main>
    )
}