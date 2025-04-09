import Header from "./Header";
import { useState, useEffect, useRef } from "react";
import Footer from "./Footer";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

const Products = () => {
  const [category, setCategory] = useState([]);

  const [products, setProducts] = useState([]);

  const searchByName = useRef("");
  const [paggingProducts, setPaggingProducts] = useState([]);
  const [pagging, setPagging] = useState([]);
  const [isChange, setIsChange] = useState(true);
  const [searchedProduct, setSearchedProduct] = useState([]);
  let myArrayRef = useRef([]);

  useEffect(() => {
    fetch("http://localhost:9999/Category")
      .then((res) => res.json())
      .then((result) => {
        setCategory(result);
      });

  }, []);
  useEffect(() => {
    fetch("http://localhost:9999/Product")
      .then((res) => res.json())
      .then((result) => {
        if (result.length >= 8) {
          setPaggingProducts(result.slice(0, 8));
        } else {
          setPaggingProducts(result.slice(0, result.length));
        }
        let setpagging = [];
        let end;
        if (result.length % 8 === 0) {
          end = result.length / 8;
        } else {
          end = result.length / 8 + 1;
        }
        for (let i = 1; i <= end; i++) {
          setpagging = [...setpagging, i];
        }
        setPagging(setpagging);
        setSearchedProduct(result);
        setProducts(result);
      });
  }, [isChange]);
  useEffect(() => {
    if (searchedProduct.length >= 8) {
      setPaggingProducts(searchedProduct.slice(0, 8));
    } else {
      setPaggingProducts(searchedProduct.slice(0, searchedProduct.length));
    }
    let setpagging = [];
    let end;
    if (searchedProduct.length % 8 === 0) {
      end = searchedProduct.length / 8;
    } else {
      end = searchedProduct.length / 8 + 1;
    }
    for (let i = 1; i <= end; i++) {
      setpagging = [...setpagging, i];
    }
    setPagging(setpagging);
  }, [searchedProduct]);
  const Pagging = (index) => {
    if (products.length > index * 8) {
      setPaggingProducts(searchedProduct.slice((index - 1) * 8, index * 8));
    } else
      setPaggingProducts(
        searchedProduct.slice((index - 1) * 8, searchedProduct.length)
      );
  };
  const searchByCategory = (id) => {
    let list = [...products];
    list = list.filter((p) => id == p.Category_ID);
    setSearchedProduct(list);
    myArrayRef = [];
    document.getElementById("1").checked = false;
    document.getElementById("2").checked = false;
    document.getElementById("3").checked = false;
    document.getElementById("4").checked = false;
    document.getElementById("5").checked = false;
  };
  const searchByNames = (name) => {
    console.log(name.current.value);
    let list = [...products];
    list = list.filter((p) =>
      p.Name.toLowerCase().includes(name.current.value.toLowerCase())
    );
    setSearchedProduct(list);
  };
  const sortAscending = () => {
    let list = [...searchedProduct];
    list.sort((a, b) => a.Price - b.Price);
    setSearchedProduct(list);
  };
  const sortDescending = () => {
    let list = [...searchedProduct];
    list.sort((a, b) => b.Price - a.Price);
    setSearchedProduct(list);
  };
  const handleCheckBox = (e, value) => {
    if (e.target.checked === true) {
      myArrayRef.current.push(value);
    }
    if (e.target.checked === false) {
      myArrayRef.current = myArrayRef.current.filter((a) => a !== value);
    }
    console.log(myArrayRef.current);
    let list = [];
    for (let i = 0; i < myArrayRef.current.length; i++) {
      for (let j = 0; j < products.length; j++) {
        if (myArrayRef.current[i] === 1) {
          if (products[j].Price <= 2000000) {
            console.log(1);
            list.push(products[j]);
          }
        }

        if (myArrayRef.current[i] === 3) {
          if (products[j].Price <= 4000000 && products[j].Price >= 2000000) {
            console.log(2);
            list.push(products[j]);
          }
        }
        if (myArrayRef.current[i] === 5) {
          if (products[j].Price >= 4000000 && products[j].Price <= 7000000) {
            console.log(3);
            list.push(products[j]);
          }
        }
        if (myArrayRef.current[i] === 8) {
          if (products[j].Price >= 7000000 && products[j].Price <= 13000000) {
            console.log(4);
            list.push(products[j]);
          }
        }
        if (myArrayRef.current[i] === 15) {
          if (products[j].Price >= 13000000) {
            console.log(5);
            list.push(products[j]);
          }
        }
      }
    }

    if (myArrayRef.current.length === 0) {
      setSearchedProduct(searchedProduct);
    } else {
      setSearchedProduct(list);
    }
  };
  return (
    <div style={{ marginTop: "50px" }}>
      <Header />

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {" "}
            <img
              src="../../images/banner.png"
              alt="Mô tả về nội dung của hình ảnh"
            />
          </div>
        </div>

        <div style={{ marginTop: "20px" }} className="row">
          <div className="col-md-2 searchCategory">
            <p style={{ fontWeight: "bold", fontSize: "17px" }}>Nhãn hàng:</p>
            {category.map((c) => {
              return (
                <div>
                  <button
                    onClick={() => searchByCategory(c.id)}
                    className="category" 
                    style={{
                      padding: "8px",
                      width: "100px",
                      border: "1px solid gray",
                      color: "black",
                      backgroundColor: "white",
                    }}
                  >
                    {c.Category_Name}
                  </button>
                </div>
              );
            })}
            <div>
              <p style={{ fontWeight: "bold", fontSize: "17px" }}>Mức giá</p>
              <input
                type="checkbox"
                id="1"
                onChange={(e) => handleCheckBox(e, 1)}
              />{" "}
              Dưới 2 triệu <br />
              <input
                type="checkbox"
                id="2"
                onChange={(e) => handleCheckBox(e, 3)}
              />{" "}
              Từ 2-4 triệu <br />
              <input
                type="checkbox"
                id="3"
                onChange={(e) => handleCheckBox(e, 5)}
              />{" "}
              Từ 4-7 triệu <br />
              <input
                type="checkbox"
                id="4"
                onChange={(e) => handleCheckBox(e, 8)}
              />{" "}
              Từ 7-13 triệu <br />
              <input
                type="checkbox"
                id="5"
                onChange={(e) => handleCheckBox(e, 15)}
              />{" "}
              Trên 13 triệu <br />
            </div>
          </div>
          <div className="col-md-10">
            <input
              style={{
                marginBottom: "20px",
                width: " 250px",
                border: "2px solid gray",
                outline: "none",
                borderRadius: "5px",
              }}
              type="text"
              placeholder="Search by name ..... "
              ref={searchByName}
              onChange={() => searchByNames(searchByName)}
            />
            <AiOutlineSearch className="search-icon1" />
            <input
              type="radio"
              name="SearchP"
              onClick={() => sortAscending()}
            />{" "}
            Sort ascending
            <input
              style={{ marginLeft: "30px" }}
              type="radio"
              name="SearchP"
              onClick={() => sortDescending()}
            />{" "}
            Sort descending
            <div className="row">
              {paggingProducts.map((p) => {
                return (
                  <div style={{ marginBottom: "10px" }} className="col-md-3">
                    <div
                      class="card"
                      style={{ width: "220px", height: "350px" }}
                    >
                      <img src={p.Images} class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">{p.Name}</h5>
                        {/* <p class="card-text1">{}</p> */}
                        <p style={{ fontSize: "17px" }} class="card-text">
                          Giá: {p.Price} VND
                        </p>
                        <a href="#" class="btn btn-primary">
                          <Link className="x" to={`/xemchitiet/${p.id}`}>
                            Xem chi tiết
                          </Link>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="pagging">
              {pagging.map((p) => {
                return (
                  <button
                    style={{
                      marginLeft: "25px",
                      width: "35px",
                      height: "35px",
                      marginTop: "30px",
                      backgroundColor: "red",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                    }}
                    onClick={() => Pagging(p)}
                  >
                    {p}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Products;

