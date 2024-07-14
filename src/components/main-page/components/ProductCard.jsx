export default function ProductCard({ productName, imagePath }) {
  return (
    <div className="card   text-white container-fluid" style={{ position: "relative", overflow: "hidden", height: "200px" }}>
    <img
      src={imagePath}
      alt={productName}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
        position: "absolute",
        top: 0,
        left: 0
      }}
    />
    
    <div className="card-img-overlay">
      {/* display text display the light text inside light background */}
      <h5 className="card-title display-text">{productName}</h5>
      <p className="card-text display-text">Last updated 3 mins ago</p>
    </div>
  </div>  
  );
}
