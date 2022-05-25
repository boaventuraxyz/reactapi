import { Link } from "react-router-dom";

export default function Index(){
    return(
        <main>
            <h1>home</h1>

            <ul>
                <li><Link to='/cinema'>cinema</Link></li>
                <li><Link to='/dobro'>dobro</Link></li>
                <li><Link to='/febre'>febre</Link></li>
                <li><Link to='/freq'>freq</Link></li>
                <li><Link to='/maior'>maior</Link></li>
                <li><Link to='/media'>media</Link></li>
                <li><Link to='/primaria'>cor primaria</Link></li>
                <li><Link to='/soma'>soma</Link></li>
                <li><Link to='/tabuada'>tabuada</Link></li>
            </ul>
        </main>
    )
}