import axios from "axios";
import { useState } from "react"

export default function Index(){
    const [temp, settemp] = useState();
    const [resp,setresp] = useState('');

    async function febre(){
        const resp = await axios.get('http://localhost:5000/febre/' + temp);
        if (resp.data.febre === true) {
            setresp('SIM');
        }
        else {
            setresp('nao');
        }
    }
    return(
        <main>
            <h1>febre</h1>
            Temperatura: <input type='text' value={temp} onChange={e => settemp(Number(e.target.value))} />
            <button onClick={febre}>consultar</button>
            estou com febre? {resp}
        </main>
    )
}