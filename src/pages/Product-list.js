import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProductData, getAxiosData, postData } from "../utils/api";

export default function ProductList() {
  const productlist = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 2,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 3,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 4,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
  ];
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    getData();
    postData();
  }, []);
  const getData = async () => {
    // const data = await getProductData();
    const data = await getAxiosData();
    setMyData(data);
  };

  const navigate = useNavigate();

  const viewProduct = (item) => {
    console.log("Yooo", item.id);
    navigate(`/product-info/${item.id}`, { state: { item } });
  };

  return (
    <div>
      <ol>
        {myData.map((obj) => (
          <>
            <div key={obj.id} style={{ display: "flex" }}>
              <li>{obj?.title}</li>
              <button
                style={{ marginLeft: "1em" }}
                onClick={() => viewProduct(obj)}
              >
                View
              </button>
            </div>
            {/* <img src={obj.image} style={{ height: 100, width: 100 }} /> */}
          </>
        ))}
      </ol>
    </div>
  );
}
