import { NavLink } from "react-router"
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
                <div className="card">
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ipsum ullam explicabo ducimus quibusdam unde.</h1>
                </div>
            </div>
        </>

    )
}