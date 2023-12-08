
const Counter = (props) => {
    return(
        <div className="counter">
            <button type="button" className="decrease" onClick={props.action}>-</button>
            <span className="visor">{props.total}</span>
            <button type="button" className="increase" onClick={props.action}>+</button>
        </div>
    )
}

export default Counter;