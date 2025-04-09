const Banner = () => {
  return (
    <div style={{ marginTop: "70px" }} className="container">
      <div className="row">
        <div className=" bannerR col-md-2">
          <img
            style={{ width: "92%", height: "auto" }}
            src="../../images/ip6.png"
            alt=""
          />
          <img
            style={{ width: "92%", height: "auto" }}
            src="../../images/ip2.png"
            alt=""
          />
          <img
            style={{ width: "92%", height: "auto" }}
            src="../../images/ip3.png"
            alt=""
          />
          <img
            style={{ width: "94%", height: "auto" }}
            src="../../images/ip5.png"
            alt=""
          />
        </div>
        <div className="col-md-7">
          <div
            id="carouselExampleInterval"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active" data-interval="10000">
                <img
                  src="../../images/banner1.png"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item" data-interval="2000">
                <img
                  src="../../images/banner2.png"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../../images/banner3.png"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-target="#carouselExampleInterval"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-target="#carouselExampleInterval"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </button>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-target="#carouselExampleIndicators"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </button>
          <img
            style={{ width: "100%", marginTop: "20px", height: "77px" }}
            src="../../images/bannerbot.png"
            alt=""
          ></img>
        </div>
        <div className="bannerL col-md-3">
          <img src="../../images/bannerL1.png" alt=""></img>
          <br />
          <img src="../../images/bannerL2.png" alt=""></img>
          <br />
          <img src="../../images/BannerL3.png" alt=""></img>
          <br />
        </div>
      </div>
    </div>
  );
};
export default Banner;
