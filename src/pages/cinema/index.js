import axios from "axios";
import { useState } from "react"
import './index.scss';

export default function Index(){
    const [inteiras, setinteiras] = useState();
    const [meias, setmeias] = useState();
    const [nacionalidade, setnacionalidade] = useState('');
    const [dia, setdia] = useState('');
    const [resp, setresp] = useState();

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
        <main className="tudo">
            <h1>Cinema</h1>

            <div className="text">Qtd. de inteira </div> <input type='text' value={inteiras} onChange={ e => setinteiras(Number(e.target.value))} />
            <div className="text">Qtd. de Meias</div> <input type='text'  value={meias} onChange= {e => setmeias(Number(e.target.value))} /> 
            <div className="text">Nacionalidade </div><input type='text' placeholder="Brasileiro ou estrangeiro?" value={nacionalidade} onChange={ e => setnacionalidade(e.target.value)}  />
            <div className="text">Dia da Semana </div><input type='text' value={dia} onChange={ e => setdia(e.target.value)} />
            <div >
            <button  className="botao" onClick={calcular} >Calcular</button>
            </div>
            <h1 className="total">O total é de R${resp}</h1>
        </main>
    )
}