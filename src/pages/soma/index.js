import axios from "axios";
import { useState } from "react"

export default function Index(){
    const [numero, setnumero] = useState();
    const [numero2, setnumero2] = useState();
    const [resposta, setresposta] = useState();

    async function somar(){
        const resp = await axios.post('http://localhost:5000/soma' , 
        {
            n1 : numero,
            n2 : numero2
        })
        setresposta(resp.data.soma)
    }
    return(

        <main>
            <h1>soma</h1>
            Soma: <input type='text' value={numero} onChange ={ e => setnumero(Number(e.target.value))} /> + <input type='text' value={numero2} onChange ={e => setnumero2(Number(e.target.value))} />
            <button onClick={somar}>calcular</button>
            a soma é {resposta}
            
        </main>
    )
}