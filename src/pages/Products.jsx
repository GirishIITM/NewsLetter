import React from 'react';
import '../styles/products.css';

function Products() {
  const products = [
    {
      title: "Creators Guide",
      price: "$0",
      image: "https://framerusercontent.com/images/jIBK8NFrirFmogYv2GkGvuBvQ.png?scale-down-to=512",
      alt: "Creators Guide",
      description: "A free guide on how to launch a successful online store",
      buttons: [
        { text: "Get it now", class: "button_1" },
        { text: "Learn more", class: "button2" }
      ]
    },
    {
      title: "Merchant Guide",
      price: "$0",
      image: "https://framerusercontent.com/images/vhfpy8tzDSkc6kUTl7inDavw.jpeg?scale-down-to=512",
      alt: "Merchant Guide",
      description: "Free LemonSqueezy guide on how to sell online",
      buttons: [
        { text: "Get it now", class: "button_1" },
        { text: "Learn more", class: "button2" }
      ]
    },
    {
      title: "Bookshelf",
      price: "$0",
      image: "https://framerusercontent.com/images/RcY9MxYfdkom935JmhacufyeruE.jpg?scale-down-to=512",
      alt: "Bookshelf",
      description: "Bookshelf is a digital home for all of your books",
      buttons: [
        { text: "Get it now", class: "button_1" },
        { text: "Learn more", class: "button2" }
      ]
    }
  ];


  return (
    <div className="digital_products">
      <h1>Digital Products</h1>
      <p>Free and paid resources for the community</p>
      <div className="filters">
        <button className="filter_button active">All</button>
        <button className="filter_button">Templates</button>
        <button className="filter_button">Guides</button>
        <button className="filter_button">Free</button>
      </div>
      <div className="product_list">
        {products.map((product, index) => (
          <div className="product_card" key={index}>
            <div className="price_tag">{product.price}</div>
            <img src={product.image} alt={product.alt} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <div className="button_group">
              {product.buttons.map((button, btnIndex) => (
                <button className={button.class} key={btnIndex}>
                  {button.text}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
