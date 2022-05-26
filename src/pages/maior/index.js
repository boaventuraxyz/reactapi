import axios from "axios"
import { useState } from "react"
import '../cinema/index.scss'
export default function Index(){
    const[numeros, setnumeros] = useState([]);
    const[numero, setnumero] = useState();
    const[respostas, setrespostas] = useState('');

     function adc(){
        setnumeros([...numeros, numero])
        setnumero('');
    }
    async function maior(){
        const resp = await axios.post('http://localhost:5000/maior' , numeros);
        setrespostas(resp.data.maior)
    }

    return(
        <main>
            <h1>Maior</h1>
            <div className="text">
                Número: </div><input type='text' value={numero} onChange= {e => setnumero(Number(e.target.value))} /> <button className="botao" onClick={adc}>Adicionar Número</button>
            
            <div className="text">
                {numeros.map(item => <div>{item}</div>)}
            </div>
            <div>
                <button className="botao" onClick={maior} >Verificar</button>
                </div>
                <h1>O maior número é: {respostas}</h1>
           
        </main>
    )
}
//aaa