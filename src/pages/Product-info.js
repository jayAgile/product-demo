import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function ProductInfo() {
  const location = useLocation();

  const navigate = useNavigate();

  const editProduct = (item) => {
    // console.log(item);
    navigate(`/product-edit/${item.id}`);
  };

  return (
    <div>
      <ol>
        {[location.state.item].map((obj) => (
          <>
            <img
              src={obj.image}
              style={{ height: 100, width: 100 }}
              alt="No image"
            />
            <div
              key={obj.id}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <p>{obj.title}</p>
              <p>{obj.price}</p>
              <p>{obj.body}</p>
              <p>{obj.category}</p>
              {/* <p>{obj.price}</p> */}
              <button
                style={{ marginLeft: "1em" }}
                onClick={() => editProduct(obj)}
              >
                Edit
              </button>
            </div>
          </>
        ))}
      </ol>
    </div>
  );
}
