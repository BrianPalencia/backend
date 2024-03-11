import { Link } from "react-router-dom";
import "./checkOut.css"
import { useEffect, useState } from "react";

function CheckOut({ products }) {
    const [total, setTotal] = useState(0)
    
    useEffect(() => {
        setTotal(0)
        products.forEach((product) => {
            setTotal((prev) => (product.quantity * product.price) + prev)
        })
    }, [products])
    return (
        <>
        <p className="message">Gracias por Preferirnos</p>
            {products.map((product) =>
                <div className="cart-info-container" key={product.id}>
                    <picture className="Imagen">
                        <img src={product.image} alt={product.title} className="ItemImg" />
                    </picture>
                    <p><strong>{product.title} * {product.quantity}</strong></p>
                    <p>${(product.quantity * product.price).toLocaleString("es-GT")}</p>
                </div>
            )}
            <p>Total a pagar: ${total.toLocaleString("es-GT")}</p>
            <button className="volver"><Link to="/">Volver</Link></button>
        </>
    )
}

export default CheckOut