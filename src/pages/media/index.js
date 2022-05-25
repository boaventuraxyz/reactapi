import axios from "axios"
import { useState } from "react"

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
            <h1>media</h1>
            <div>   nota 1: <input type='text' value={n1} onChange={e => setn1(Number(e.target.value))} /> </div>
            <div> nota 2: <input type='text' value={n2} onChange={e => setn2(Number(e.target.value))} /> </div>
            <div>note 3: <input type='text' value={n3} onChange={e => setn3(Number(e.target.value))} /></div>

            <button onClick={media}>calcular media</button>
            a media é de {resp}
        </main>
    )
}