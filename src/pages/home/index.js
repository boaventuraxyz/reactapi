import './index.scss';
import { Link } from "react-router-dom";
import './index.scss'
export default function Index(){
    return(
        <main className="tudo">
            <h1 class="homepg">Home</h1>

            <ul class="tabelinha">
                <li ><Link to='/cinema'  class="tabelinha">CINEMA</Link></li>
                <li><Link to='/dobro'    class="tabelinha">DOBRO</Link></li>
                <li><Link to='/febre'    class="tabelinha">FEBRE</Link></li>
                <li><Link to='/freq'     class="tabelinha">FREQ</Link></li>
                <li><Link to='/maior'    class="tabelinha">MAIOR</Link></li>
                <li><Link to='/media'    class="tabelinha">MEDIA</Link></li>
                <li><Link to='/primaria' class="tabelinha">COR PRIMARIA</Link></li>
                <li><Link to='/soma'     class="tabelinha">SOMA</Link></li>
                <li><Link to='/tabuada'  class="tabelinha">TABUADA</Link></li>
            </ul>
        </main>
    )
}