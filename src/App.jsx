import {useState, useEffect} from "react";
import './App.css'
/*images header*/
import logo from "./assets/images/logo.svg";
import icon_cart from "./assets/images/icon-cart.svg";
import picture from "./assets/images/image-avatar.png/";
import menu_open from "./assets/images/icon-menu.svg";
import menu_close from "./assets/images/icon-close.svg";
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
window.addEventListener("resize", changeMenuLayout);
function changeMenuLayout(){
  setWidth(window.innerWidth);
}
  /*hide or show menu mobile on clicking hamburguer*/ 
  const[menu, setMenu] = useState(true);
  function openClose(){
    let menuMobile = document.querySelector(".mobile-menu")
    setMenu(!menu);
    menu==true?menuMobile.style.left="0px":menuMobile.style.left="-200px";
  }
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
  const[contage, setContage] = useState(0);
  function count(t){
    if(t.target.className=="increase"){
            contage>=3?setContage(3):setContage(contage=>contage+1);
          }
          else if(t.target.className=="decrease"){
            contage<=0?setContage(0):setContage(contage=>contage-1);
          }
  }
  //função que salva contage como estado de cont para que o valor
  //seja exibido no carrinho
  function addToCart(){
    setCont(contage);
  }









  /*show products*/
  const[source, setSource] = useState(product_1);
  function changeSource(t){
    let productShow = document.querySelectorAll("article img")[2];
    productShow.src=t.target.src;
  }
  /*this useEffect sets all image product a event click for changeSource()*/
  useEffect(()=>{
    let product = document.querySelectorAll(".collection img");
    product.forEach((i)=>{
      i.addEventListener("click", changeSource);
    })
  },[])

  /*function change the main image to show product details*/ 
  useEffect(()=>{
    let arrows = document.querySelectorAll(".controls img");
    arrows.forEach((i)=>{
      i.addEventListener("click", change);
    })
  },[])
  function change(){
    let product = document.querySelectorAll(".products img")[2];
    if(product.src.includes("product-1")){
      product.src=product_2;
    }
    else if(product.src.includes("product-2")){
      product.src=product_3;
    }
    else if(product.src.includes("product-3")){
      product.src=product_4;
    }
    else if(product.src.includes("product-4")){
      product.src=product_1;
    }
  }
  /*remove from cart */
  function removeFromCart(){
    cont>0?setCont(cont=>cont-1):null;
  }
  return (
    <>
      <header>
        {width<500 && (
          <>
          <img src={menu_open} className="menu-icon" onClick={openClose}/>
          <ul className="mobile-menu">
            <Nav_links link="collections"/>
            <Nav_links link="men"/>
            <Nav_links link="women"/>
            <Nav_links link="about"/>
            <Nav_links link="contact"/>
          </ul>
          <div className="user">
            <div className="cartIcon">
              <Cart icon={icon_cart} action={openCart} qtd={cont}/>
              <Cart_contents_here action={removeFromCart} qtd={cont}set={setCont} price={129.99} source={product_1}/>
            </div>
            <Profile_picture picture={picture}/>
          </div>
          </>
        )}
        {width>=500 && (
          <>
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
              <Cart_contents_here qtd={cont}set={setCont} price={129.99} source={product_1}/>
            </div>
            <Profile_picture picture={picture}/>
          </div>
        </nav>
          </>
        )}
      </header>

      <main>
        <article className="products">
          <div className="controls">
          <img src={arrow_right}/>
          <img src={arrow_left}/>
          </div>
          <img src={source}/>
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
            <Counter action={count} total={contage}/>
            <button type="button" className="add" onClick={addToCart}><img src={icon_cart}/>add to cart</button>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
