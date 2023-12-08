import trash from "../assets/images/icon-delete.svg";
const Cart_contents_here = (props) => {
    function checkout(){
        alert("your order is comming");
    }
    return(
        <div className="cart">
                <h3>cart</h3>
                <hr/>
                <div className="cart-contents-here">
                    {props.qtd > 0 && (
                        <>
                        <img src={props.source}/>
                        <div className="informations">
                            <h4>Fall limited edition sneakers</h4>
                            <div className="sommatory">
                                <em>{`$${props.price} x ${props.qtd}`}</em>
                                <strong>{`$${props.price*props.qtd}`}</strong>
                            </div>
                        </div>
                        <img src={trash}/>
                        </>
                    )}
                    {props.qtd<=0 && (
                        <h2>the cart is empty</h2>
                    )}
                </div>
                {props.qtd>0 &&(
                    <button type="button" onClick={checkout}>checkout</button>
                )}
              </div>
    )
}

export default Cart_contents_here;