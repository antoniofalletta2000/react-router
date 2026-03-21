import { NavLink } from "react-router"
import Logo from "../../public/Logo3.png"
export default function ChiSiamo() {
    return (
        <>
            <div className="bg-white">
                <div className="container mt-2">
                    <nav className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 d-flex justify-content-between">
                        <div className="col">
                            <img id="logo_nav" src={Logo} alt="" />
                        </div>
                        <div className="col d-flex gap-1">
                            <button className="btn"><NavLink className="text-decoration-none" to="/"><span className="fw-bold">Home</span></NavLink></button>
                            <button className="btn"><NavLink className="text-decoration-none" to="/Chisiamo"><span className="fw-bold">Chi siamo</span></NavLink></button>
                            <button className="btn"><NavLink className="text-decoration-none" to='/Prodotti'><span className="fw-bold">Prodotti</span></NavLink></button>
                        </div>

                    </nav>
                </div>
            </div>

            <div className="container mt-5">
                <div>
                    <img id="logo" src={Logo} alt="" />
                </div>

                <div className="card-body">
                    <div className="d-flex justify-content-center text-center">
                        <p>Benvenuti su ePay, l'e-commerce progettato per semplificare la tua vita quotidiana. Abbiamo unito la tecnologia più avanzata nel campo dei pagamenti digitali a una selezione infinita di prodotti, creando un'esperienza di shopping sicura, veloce e senza confini.</p>
                    </div>
                </div>
            </div>
        </>

    )
}