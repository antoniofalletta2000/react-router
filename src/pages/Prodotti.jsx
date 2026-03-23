import { NavLink,Link } from "react-router"
import { useState, useEffect } from "react"
import Logo from "../../public/Logo3.png"
const endpoint = "https://fakestoreapi.com/products"


export default function Prodotti() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(endpoint)
            .then(res => res.json())
            .then(data =>
                setProducts(data)
            )
    }, [])


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

            <div className="container">
                <div className="row row-col-1 row-cols-sm-2 row-cols-md-3">
                    {products.map(product => (
                        <div key={product.id} className="col p-2">
                            <div className="card p-3 bg-light">
                                <img id="img_products" className="img-fluid" src={product.image} alt="" />
                                <div className="card-body bg-white rounded-top">
                                    <div className="d-flex justify-content-center text-center" >
                                        <h6>{product.title}</h6>
                                    </div>
                                    <div className="d-flex text-center justify-content-center">
                                        <p>{product.description}</p>
                                    </div>

                                </div>
                                <div className="d-flex justify-content-center text-center bg-white rounded-bottom" >
                                    <h3>{product.price}€</h3>
                                </div>
                                <div>
                                    <Link to={`/prodotti/${product.id}`}>Vai al prodotto</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>

    )
}