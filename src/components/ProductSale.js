const ProductSale = () => {
    return (
        
        <div className="container hotsale ">
            <h1 className="product-title"><span style={{ color: "rgb(249,0,0)" }}>HOT SALE </span><span style={{ color: "white"}} >GIÁ SỐC</span></h1>
            <div className="row  product-sale">
                <div className="col-md-2">
                    <div class="card" style={{width: "220px",height: "350px"}}>
                        <img src="../../images/ip2.png" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Iphone 15</h5>
                                <p class="card-text1">Giá gốc:<span > 40.000.000</span></p>
                                <p class="card-text">Sale: 35.000.000</p>
                                <a href="#" class="btn btn-primary">Buy</a>
                            </div>
                    </div>
                </div>

                <div className="col-md-2">
                    <div class="card" style={{width: "220px",height: "350px"}}>
                        <img src="../../images/ip3.png" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Iphone 14</h5>
                                <p class="card-text1">Giá gốc: 30.000.000</p>
                                <p class="card-text">Sale: 25.000.000</p>
                                <a href="#" class="btn btn-primary">Buy</a>
                            </div>
                    </div>
                </div>

                <div className="col-md-2">
                    <div class="card" style={{width: "220px",height: "350px"}}>
                        <img src="../../images/ip4.png" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Iphone 13</h5>
                                <p class="card-text1">Giá gốc: 25.000.000</p>
                                <p class="card-text">Sale: 20.000.000</p>
                                <a href="#" class="btn btn-primary">Buy</a>
                            </div>
                    </div>
                </div>

                <div className="col-md-2">
                    <div class="card" style={{width: "220px",height: "350px"}}>
                        <img src="../../images/ip5.png" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Iphone 12</h5>
                                <p class="card-text1">Giá gốc: 11.000.000</p>
                                <p class="card-text">Sale:10. 000.000</p>
                                <a href="#" class="btn btn-primary">Buy</a>
                            </div>
                    </div>
                </div>

                
               
            </div>
        </div>
    )
}
export default ProductSale;