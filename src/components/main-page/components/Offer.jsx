export default function Offer({imagePath, OfferName}) {
  return (
    <div className="m-1">
      <div className="card bg-dark text-white">
        <img src={imagePath} className="card-img" alt="..." />
        <div className="card-img-overlay">
          <h5 className="card-title" style={{textShadow: "1px 1px 2px solid black", color: "black"}}>{OfferName}</h5>
          <p className="card-text">Shop Now</p>
        </div>
      </div>
    </div>
  );
}
