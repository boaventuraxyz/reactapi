import axios from "axios"
import { useState } from "react"

export default function Index(){
    const[numeros, setnumeros] = useState([]);
    const[numero, setnumero] = useState();
    const[resp, setresp] = useState('');

     function adc(){
        setnumeros([...numeros, numero])
        setnumero('');
    }
    async function maior(){
        const resp = await axios.post('http://localhost:5000/maior/' , numeros);
        setresp(resp.data.maior);
    }

    return(
        <main>
            <h1>Maior</h1>
            <div>
                Numero: <input type='text' value={numero} onChange= {e => setnumero(Number(e.target.value))} /> <button onClick={adc}>adc numero</button>
            </div>
            <div>
                {numeros.map(item => <div>{item}</div>)}
            </div>
            <div>
                <button onClick={maior} >verificar</button>

                o maior numero é: {resp}
            </div>
        </main>
    )
}