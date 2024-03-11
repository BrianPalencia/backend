import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import {Link} from "react-router-dom";

function ItemDetail ({id, title, image, category, description, price, stock, setCheckOut}) {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
        setCheckOut((prev)=>([...prev, {id, title, image, category, description, price, quantity}]))
    }

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {title}
                </h2>
            </header>
            <picture>
                <img src={image} alt={title} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descricion: {description}
                </p>
                <p className="Info">
                    Precio: ${price}
                </p>
            </section>
            <footer className="ItemFooter">
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className='Option'>Terminar Compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={ handleOnAdd}/>
                    )
                }
                
            </footer>
        </article>

    )

}

export default ItemDetail;