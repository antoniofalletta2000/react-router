import { NavLink } from "react-router"
import { useState, useEffect } from "react"

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
            <div className="bg-dark">
                <div className="container mt-2">
                    <nav className="d-flex justify-content-around">
                        <button className="btn"><NavLink className="text-decoration-none text-white" to="/">Home</NavLink></button>
                        <button className="btn"><NavLink className="text-decoration-none text-white" to="/Chisiamo">Chi siamo</NavLink></button>
                        <button className="btn"><NavLink className="text-decoration-none text-white" to='/Prodotti'>Prodotti</NavLink></button>
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

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>

    )
}