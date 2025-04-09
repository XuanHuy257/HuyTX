import { useParams } from "react-router-dom";
import Header from "./Header";
import { useState, useEffect } from "react";
import Footer from "./Footer";

const DetailProduct = () => {
  const { phoneId } = useParams();
  const [phone, setPhone] = useState(null); // Đặt state ban đầu là null để kiểm tra sau này
  let id = parseInt(phoneId);

  useEffect(() => {
    fetch("http://localhost:9999/Product")
      .then((res) => res.json())
      .then((result) => {
        let product = result.filter((p) => p.id == id)[0];
        console.log(product);
        setPhone(product);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [id]);

  //   if (!phone) {
  //     return <div>Loading...</div>; // Hiển thị nội dung tải trong khi dữ liệu đang được lấy
  //   }

  return (
    <div>
      <Header />
      <div style={{ marginBottom: "50px" }} className="container">
        <div style={{ marginTop: "60px" }} className="row">
          <div className="col-md-6 phone-img">
            <img src={phone?.Images} className="card-img-top" alt="Product" />
            <h3 className="phone-name">{phone?.Name}</h3>
          </div>
          <div className="col-md-6">
            <h2 style={{ color: "red" }}>Giá bán: {phone?.Price}đ</h2>
            <img
              style={{ width: "100%" }}
              src="../../images/bannerProduct.jpg"
              alt="Banner"
            />
            <div className="khuyenmai">
              <p>Nhận ngay khuyến mãi đặc biệt</p>
              <input type="checkbox" checked /> Trả góp 0%
              <br />
            </div>

            <button className="buy" style={{ width: "100%" }}>
              <h5>MUA NGAY</h5>
              <span>Giao hàng miễn phí hoặc nhận hàng tại shop</span>
            </button>
            <div className="row">
              <div className="col-md-6">
                <button className="payment" style={{ width: "100%" }}>
                  <h5>TRẢ GÓP 0%</h5>
                  <span>Duyệt nhanh qua điện thoại</span>
                </button>
              </div>
              <div className="col-md-6">
                <button className="payment" style={{ width: "100%" }}>
                  <h5>TRẢ GÓP QUA THẺ</h5>
                  <span>Visa, Master Card, JCB, AMEX</span>
                </button>
              </div>
            </div>
            <p style={{ fontSize: "14px", marginTop: "10px" }}>
              Gọi vào <span style={{ color: "red" }}>1800-6601</span> để được tư
              vấn mua hàng (Miễn phí)
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailProduct;
