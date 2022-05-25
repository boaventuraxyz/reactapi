import axios from "axios";
import { useState } from "react"

export default function Index(){
    const [inteiras, setinteiras] = useState(0);
    const [meias, setmeias] = useState(0);
    const [nacionalidade, setnacionalidade] = useState('');
    const [dia, setdia] = useState('');
    const [resp, setresp] = useState(0);

    async function calcular(){
        const resp = await axios.post('http://localhost:5000/cinema/', 
        {
            a: inteiras,
            b: meias,
            c: nacionalidade,
            d: dia
        })

        setresp(resp.data.cinema);
    }
    return(
        <main>
            <h1>Cinema</h1>
            Qtd. de inteira <input type='text' value={inteiras} onChange={ e => setinteiras(Number(e.target.value))} /> 
            Qtd. de Meias <input type='text'  value={meias} onChange= {e => setmeias(Number(e.target.value))} /> 
            Nacionalidade <input type='text' placeholder="brasileiro ou estrangeiro?" value={nacionalidade} onChange={ e => setnacionalidade(e.target.value)}  />
            Dia da Semana <input type='text' value={dia} onChange={ e => setdia(e.target.value)} />
            <button onClick={calcular} >calcular</button>
            o total é de R${resp}
        </main>
    )
}