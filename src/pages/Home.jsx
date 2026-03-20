import { NavLink } from "react-router"
export default function Home() {
    return (
        <>
        <div className="bg-dark">
             <div className="container mt-2">
                <nav className="d-flex justify-content-around">
                    <button className="btn"><NavLink className="text-decoration-none text-white" to="/">Home</NavLink></button>
                    <button className="btn"><NavLink className="text-decoration-none text-white" to="/Chisiamo">Chi siamo</NavLink></button>
                    <button className="btn"><NavLink className="text-decoration-none text-white" to='/Prodotti'>Prodotti</NavLink></button>
                </nav>
            </div>
        </div>
           


            <div className="container mt-5">
                <div className="card">
                    <h1>Non seguire le tendenze, dettale. Rinnova il tuo stile con i capi più cool della stagione. Ti aspettiamo in store!</h1>
                </div>
            </div>



        </>

    )
}