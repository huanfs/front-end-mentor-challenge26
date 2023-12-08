
const Cart = (props) => {
    return(
        <>
        {/*<span>{props.qtd}</span>*/}
        {props.qtd>0?<span>{props.qtd}</span>:null}
        <img src={props.icon} onClick={props.action}/>
        </>
    )
}

export default Cart;