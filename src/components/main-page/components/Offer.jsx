export default function Offer({imagePath, OfferName}) {
  return (
      <div className="card text-white" style={{height: "100%", width: "100%",position: "relative", minHeight:"150px"}}>
        <img src={imagePath} className="card-img" style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
        top: 0,
        left: 0
      }}/>
        <div className="card-img-overlay">
          <h5 className="card-title" style={{textShadow: "1px 1px 2px solid black", color: "black"}}>{OfferName}</h5>
          <p className="card-text" style={{textShadow: "1px 1px 2px solid black", color: "black"}}>Shop Now</p>
        </div>
      </div>
  );
}
