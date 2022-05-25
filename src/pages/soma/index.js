import axios from "axios";
import { useState } from "react"

export default function Index(){
    const [numero, setnumero] = useState('');
    const [numero2, setnumero2] = useState('');
    const [resposta, setresposta] = useState();

    async function somar(){
        const resp = await axios.get('http://localhost:5000/soma/' + numero + numero2);
        resp.data = setresposta();
    }
    return(

        <main>
            <h1>soma</h1>
            Soma: <input type='number' value={numero} onChange ={ e => setnumero(e.target.value)} /> + <input type='number' value={numero2} onChange ={e => setnumero2(e.target.value)} />
            <button onClick={somar}>calcular</button>
            {resposta}
            
        </main>
    )
}