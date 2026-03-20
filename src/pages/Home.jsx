import {NavLink} from "react-router"
export default function Home(){
    return(
        <>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Chisiamo">Chi siamo</NavLink>
            <NavLink to='/Prodotti'>Prodotti</NavLink>
        </nav>
        <h1>Benvenuto</h1>
         
        </>
        
    )
}