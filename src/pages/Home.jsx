import { NavLink } from "react-router"
import Logo from "../../public/Logo3.png"
import LogoHome from "../../public/LogoHome2.png"
export default function Home() {
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
                <div className="card border-0">
                    <img id="logo_home" src={LogoHome} alt="" />
                    <div className="card-body d-flex flex-column gap-4">
                        <div className="d-flex justify-content-center">
                            <button id="btn_home" className="btn px-5"><NavLink className="text-decoration-none text-white" to='/Prodotti'>Inizia ad acquistare</NavLink></button>
                        </div>
                        <div className="d-flex text-center justify-content-center">
                            <h5>Acquista in un lampo con ePay! Rapido, facile e sicuro.</h5>
                        </div>

                    </div>
                </div>
            </div>



        </>

    )
}