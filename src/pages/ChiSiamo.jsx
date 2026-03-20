import { NavLink } from "react-router"
import Logo from "../../public/Logo.png"
export default function ChiSiamo() {
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
                <div>
                    <img id="logo" src={Logo} alt="" />
                </div>
                    
                    <div className="card-body">
                         <p>Benvenuti su ePay, l'e-commerce progettato per semplificare la tua vita quotidiana. Abbiamo unito la tecnologia più avanzata nel campo dei pagamenti digitali a una selezione infinita di prodotti, creando un'esperienza di shopping sicura, veloce e senza confini.</p>
                    </div>
            </div>
        </>

    )
}