import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Logo from "../../public/Logo3.png"
import { NavLink, Link } from "react-router"

export default function SingleProduct() {


    const { id } = useParams()

    const endpoint = `https://fakestoreapi.com/products/${id}`
    const [product, setProduct] = useState(null)
    useEffect(() => {

        fetch(endpoint)
            .then(res => res.json())
            .then(data =>

                setProduct(data)
            )
    }, [id])


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

            {product === null && (<h1>Caricamento...</h1>)}
            {product !== null && (
                <div className="container">
                    <div id="card_product" className="card p-3 bg-light">
                        <div className="d-flex justify-content-center text-center pt-4" >
                                <h4>{product.title}</h4>
                            </div>
                        <div className="d-flex align-items-center juaify-content-between">
                            <img id="product" className="img-fluid" src={product.image} alt="" />
                        <div className="card-body  rounded">
                            
                            <div className="d-flex text-center justify-content-center">
                                <p>{product.description}</p>
                            </div>

                        </div>
                        
                        </div>
                        <div className="d-flex justify-content-center text-center bg-white rounded" >
                            <h3>{product.price}€</h3>
                        </div>
                    </div>
                </div>
            )}
        </>
    )

}