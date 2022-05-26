
import axios from "axios";
import { useState } from "react"
import '../cinema/index.scss'
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
            <h1>Soma</h1>
            <div className="text">Soma </div> 
            
            <input type='text' value={numero} onChange ={ e => setnumero(Number(e.target.value))} /> + <input type='text' value={numero2} onChange ={e => setnumero2(Number(e.target.value))} />
            
            <div>
            <button class="botao"onClick={somar}>Calcular</button>
            </div>
            <h1>A soma é {resposta}</h1>
            
        </main>
    )
}