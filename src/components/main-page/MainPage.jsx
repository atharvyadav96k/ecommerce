import Carousel from "./components/Carousel";
import Offer from "./components/Offer";
import ProductCard from "./components/ProductCard";
import ProductContainerScroll from "./components/ProductContainerScroll";
export default function MainPage() {
  return (
    <div className="container">
          <div className="row mt-3">
            <div className="col-lg-9 col-md-9 col-sm-12">
                <Carousel />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 offer-res">
                <div className="col position-relative p-1"><Offer imagePath={"https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhZHBob25lfGVufDB8MHwwfHx8MA%3D%3D"} OfferName={"HeadPhone"}/></div>
                <div className="col position-relative p-1"><Offer imagePath={"https://images.unsplash.com/photo-1593121925328-369cc8459c08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhlYWRwaG9uZXxlbnwwfDB8MHx8fDA%3D"} OfferName={"HeadPhone"}/></div>
            </div>
          </div>
          <div className="row mt-3 p-2">
                <div className="col-lg-4 col-md-4 p-1 col-sm-12 d-flex justify-content-center">
                    <ProductCard productName={"Hello"} imagePath={"https://images.unsplash.com/photo-1720671847847-0b127f440aa3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
                </div>
                <div className="col-lg-4 col-md-4 p-1 col-sm-12 d-flex justify-content-center">
                    <ProductCard productName={"Hello"} imagePath={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgicTlrqg9x1RkNxcdg9QoRhIABkfvvCh83w&s"}/>
                </div>
                <div className="col-lg-4 col-md-4 p-1 col-sm-12 d-flex justify-content-center">
                    <ProductCard productName={"Hello"} imagePath={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxZBAnDVNqJoj9eNTCq7mRGzD10YRh9-Mp8w&s"}/>
                </div>
          </div>
          <ProductContainerScroll title="Best Seller"/>
          <ProductContainerScroll title="Trending this week"/>
    </div>
  );
}
