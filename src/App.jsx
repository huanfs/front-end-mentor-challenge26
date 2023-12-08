import {useState, useEffect} from "react";
import './App.scss'
/*images header*/
import logo from "./assets/images/logo.svg";
import icon_cart from "./assets/images/icon-cart.svg";
import picture from "./assets/images/image-avatar.png/";
/*images article */
import arrow_right from "./assets/images/icon-previous.svg";
import arrow_left from "./assets/images/icon-next.svg";
import product_1 from "./assets/images/image-product-1.jpg";
import product_2 from "./assets/images/image-product-2.jpg";
import product_3 from "./assets/images/image-product-3.jpg";
import product_4 from "./assets/images/image-product-4.jpg";

/*components*/
import Nav_links from "./components/nav_links";
import Cart from "./components/cart";
import Profile_picture from "./components/profile_picture";
import Product_view from "./components/product-view";
import Counter from "./components/counter";
import Cart_contents_here from "./components/cart_contents_here";
function App() {
  /*see the size of screen*/
const[width, setWidth] = useState(window.innerWidth);
  /*see if the cart is open or closed*/
  const[close, setClose] = useState(true);
function openCart(){
  const cart = document.querySelector(".cart");
  if(close==false){
  cart.style.display="none";
  setClose(true);
  }
  else if(close==true){
    cart.style.display="flex";
    setClose(false);
  }
}
  /*counter*/
  const[cont, setCont] = useState(0);
  function count(t){
    if(t.target.className=="increase"){
        cont<3?setCont(cont=>cont+1):setCont(3)
    }
    else if(t.target.className=="decrease"){
        cont<=0?setCont(0):setCont(cont=>cont-1)
    }
}
  /*show products*/
  const[product, setPorduct] = useState(product_1);
  useEffect(()=>{
    let items = document.querySelectorAll(".collection img");
    items.forEach((i)=>{
      i.addEventListener("click", changeProductShow);
    })
  },[])
  function changeProductShow(t){
    let view = document.querySelector(".products img")
    view.src=t.target.src;
    console.log("ai calica");
    //EU PAREI AQUI
  }
  return (
    <>
      <header>
      <div className="mobile-menu"></div>
        <img src={logo}/>
        <nav>
          <ul>
            <Nav_links link="collections"/>
            <Nav_links link="men"/>
            <Nav_links link="women"/>
            <Nav_links link="about"/>
            <Nav_links link="contact"/>
          </ul>
          <div className="user">
            <div className="cartIcon">
              <Cart icon={icon_cart} action={openCart} qtd={cont}/>
              <Cart_contents_here qtd={cont} price={129.99} source={product_1}/>
            </div>
            <Profile_picture picture={picture}/>
          </div>
        </nav>
      </header>

      <main>
        <article className="products">
          <div className="controls">
          <img src={arrow_right}/>
          <img src={arrow_left}/>
          </div>
          <img src={product}/>
          <article className="collection">
            {/*coleção de imagens que virão dentro de um componente*/}
            <Product_view product={product_1}/>
            <Product_view product={product_2}/>
            <Product_view product={product_3}/>
            <Product_view product={product_4}/>
          </article>
        </article>
        <section>
          <span>sneaker company</span>
          <h1>fall limited edition sneakers</h1>
          <p>
            these low-profile sneakers are your perfect 
            casual wear companion, Featuring a durable 
            rubber outer sole they'll withstand everithing 
            the weather can offer.
          </p>
          <div className="price">
            <div className="atual-price">
              <h2>$129,99</h2>
              <p>$299,99</p>
            </div>
            <div className="discount">
              <p>50%</p>
            </div>
          </div>
          <div className="action">
            <Counter action={count} total={cont}/>
            <button type="button" className="add"><img src={icon_cart}/>add to cart</button>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
