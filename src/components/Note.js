import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Add() {
  const [isChange, setIsChange] = useState(true);
  //khai báo cho add
  const [id, idChange] = useState("");
  const [title, titleChange] = useState("");
  const [description, descriptionChange] = useState("");
  const [price, priceChange] = useState("");
  const [discountPercentage, disChange] = useState("");
  const [rating, rateChange] = useState("");
  const [stock, stockChange] = useState("");
  //===========ĐÂY LÀ ĐẶT 2 THẰNG RIÊNG CHO OPTION SELECT============
  //===========NHỚ SET GIÁ TRỊ MẶC ĐỊNH CHO 2 ĐỨA NÀY
  //===========TÙY THEO DB SAVE TÊN HAY ID=====
  //===========CÁC GIÁ TRỊ NÀO MÀ SAVE VO DB DẠNG SỐ SỦNG
  //===========PHẢI PARSE VALUE================
  //====!!!!!!!!! RIÊNG TẰNG OPTION THÌ PHẢI PARSE NGAY Ở USESTATE====
  const [category, categoryChange] = useState(parseInt("1"));
  const [brand, brandChange] = useState(parseInt("1"));
  //=====================DÀNH REÊNG CHO LẤY DATA CHO 2 TH OPTION======
  const [getDataCate, setCate] = useState([]);
  const [getDateBrand, setBrand] = useState([]);

  //=====================Error state variables for each input field
  const [priceError, setPriceError] = useState("");
  const [discountError, setDiscountError] = useState("");
  const [titleError, setTitleError] = useState("");
  //=================NAVIGATE TO BACK TO HOME=============
  const navigate = useNavigate();
  ///================fetch data
  useEffect(() => {
    fetch("http://localhost:9999/brand")
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        setBrand(result);
      })
      .catch((err) => {
        console.log("error", err);
      });
    fetch("http://localhost:9999/category")
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        setCate(result);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, [isChange]);

  //=============FUNCTION================
  //========add
  const isValid = () => {
    let check = true;
    let errorMess = [];
    if (price < 0) {
      check = false;
      // errorMess.push("price must > 0!");
      setPriceError("Price must be greater than or equal to 0");
    }
    if (discountPercentage < 0 || discountPercentage > 100) {
      check = false;
      // errorMess.push("Thes dicount 100 > must > 0!");
      setDiscountError("Discount must be between 0 and 100");
    }
    if (!title) {
      check = false;
      // errorMess.push("Title can not null.");
      setTitleError("Title cannot be empty");
    }
    // Notify the user of specific errors using the errorMess array
    if (!check) {
      errorMess.forEach((error) => {
        alert(error);
      });
    }
    return check;
  };

  //==================|SUBMIT=======================
  //đặt table ađd vo form + đặt onsubmit ở trong form tag
  //handle submit

  const handleSubmit = (e) => {
    e.preventDefault();
    let regobj = {
      //========RULE: ==============
      //1. KHÔNG SAVE : id
      //2. KHÔNG ĐẶT TÊN SAI VỚI TRONG DB!
      //3. TÊN CẦN ĐƯỢC ĐẶT THEO THỨ TỰ TRONG DB!
      title,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      category,
    };
    if (isValid()) {
      console.log(regobj);
      fetch("http://localhost:9999/product", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(regobj),
      })
        .then((res) => {
          // toast.success("registered successfully");
          navigate("/");
          alert("add done!");
        })
        .catch((err) => {
          // toast.error("fail: " + err.message);
          alert("Please enter the form field!!!");
        });
    }
  };
  return (
    <>
      <form action="" className="container" onSubmit={handleSubmit}>
        <div style={{ marginTop: "50px" }}>
          <div className="d-flex justify-content-center">
            <h2>Create a new Product</h2>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                {/* ====================ID===================== */}
                <div className="form-group">
                  <label>ID</label>
                  <input
                    value={id}
                    onChange={(e) => idChange(e.target.value)}
                    className="form-control"
                    readOnly
                  ></input>
                </div>
                {/* ============PRICE========= */}
                <div className="form-group">
                  <label>
                    Price
                    <span style={{ color: "red" }} className="errmsg">
                      *
                    </span>
                  </label>
                  <input
                    value={price}
                    onChange={(e) => priceChange(parseInt(e.target.value))}
                    className="form-control"
                    type="number"
                  ></input>
                  <span className="error-message">{priceError}</span>
                </div>
                {/* ====================RATING===================== */}
                <div className="form-group">
                  <label>Rating</label>
                  <input
                    value={rating}
                    onChange={(e) => rateChange(parseFloat(e.target.value))}
                    className="form-control"
                    type="number"
                  ></input>
                </div>
                {/* ====================BRAND===================== */}
                <div className="form-group">
                  <label>Brand</label>
                  <select
                    className="form-control"
                    value={brand}
                    onChange={(e) => brandChange(parseInt(e.target.value))}
                  >
                    {getDateBrand.map((mybrand, index) => {
                      return (
                        <option key={index} value={mybrand.id}>
                          {mybrand.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              {/* =============COL 1=========================== */}
              <div className="col-md-1"></div>
              {/* =============COL 2=========================== */}
              <div className="col-md-5">
                {/* ====================TITLE===================== */}
                <div className="form-group">
                  <label>
                    Title
                    <span style={{ color: "red" }} className="errmsg">
                      *
                    </span>
                  </label>
                  <input
                    value={title}
                    onChange={(e) => titleChange(e.target.value)}
                    className="form-control"
                  ></input>
                  <span style={{ color: "red" }} span className="error-message">
                    {titleError}
                  </span>
                </div>
                {/* ====================DISCOUNT===================== */}
                <div className="form-group">
                  <label>
                    Discount
                    <span style={{ color: "red" }} className="errmsg">
                      *
                    </span>
                  </label>
                  <input
                    value={discountPercentage}
                    onChange={(e) => disChange(parseInt(e.target.value))}
                    className="form-control"
                    type="number"
                  ></input>
                  <span style={{ color: "red" }} className="error-message">
                    {discountError}
                  </span>
                </div>
                {/* ====================sTOCK===================== */}
                <div className="form-group">
                  <label>Stock</label>
                  <input
                    value={stock}
                    onChange={(e) => stockChange(parseFloat(e.target.value))}
                    className="form-control"
                  ></input>
                </div>
                {/* ====================CATEGORY===================== */}
                <div className="form-group">
                  <label>Category</label>
                  <select
                    value={category} // Make sure 'cate' is a single selected value, not an array
                    onChange={(e) => categoryChange(parseInt(e.target.value))}
                    className="form-control"
                  >
                    {getDataCate.map((mycate, index) => {
                      return (
                        <option key={index} value={mycate.id}>
                          {" "}
                          {/* Set the value attribute */}
                          {mycate.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              {/* ============================ */}
              <br />
              <div>
                <label>Description</label>
                <textarea
                  value={description}
                  onChange={(e) => descriptionChange(e.target.value)}
                  className="form-control"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
            </div>
          </div>
          {/* ==============button=========== */}
          <br />
          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-primary"
              style={{ marginRight: "10px" }}
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Add;