import axios from "axios"
import { useState } from "react"
import '../cinema/index.scss'
export default function Index(){
    const [n1,setn1] = useState()
    const [n2,setn2] = useState()
    const [n3,setn3] = useState()
    const [resp,setresp] = useState()

    async function media(){
        const resp = await axios.post('http://localhost:5000/media/' , {
            n1 : n1,
            n2 : n2,
            n3 : n3
        })
        setresp(resp.data.media);
    }
    return(
        <main>
            <h1>Média</h1>
            <div className="text">   Nota 1 </div><input type='text' value={n1} onChange={e => setn1(Number(e.target.value))} /> 
            <div className="text"> Nota 2  </div><input type='text' value={n2} onChange={e => setn2(Number(e.target.value))} /> 
            <div className="text">Nota 3 </div><input type='text' value={n3} onChange={e => setn3(Number(e.target.value))} />

            <div>
            <button className="botao" onClick={media}>Calcular média</button>
            </div>
            <h1>A media é de {resp}</h1>
        </main>
    )
}