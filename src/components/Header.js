import React from "react";

function Header(props){
    console.log("header",props.data)
    return(
        <div>
           <div className="add-to-cart">
            <span className="cart-count">{props.data.length}</span>
            <img src="https://media.istockphoto.com/photos/red-shopping-cart-icon-picture-id815698766" alt=""/>
           </div>
        </div>
    );
}
export default Header;