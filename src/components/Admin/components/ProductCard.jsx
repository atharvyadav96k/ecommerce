export default function ProductCard() {
  return (
    <div class="card mb-3" style={{ maxHeight: "100px;" }}>
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="https://images.unsplash.com/photo-1720679816618-3fdc3504ac58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Product Name</h5>
            <div className="card-title">Product Brand</div>
            <div className="row">
              <div className="col-6 card-title">Price</div>
              <div
                className="col-6 card-title"
                style={{ textDecoration: "line-through" }}
              >
                MRP
              </div>
            </div>
            <div className="card-title">Category</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              iure, assumenda praesentium reiciendis nemo adipisci quasi esse
              alias accusamus laborum!
            </div>
            <hr />
            <div className="row mt-1">
              <div className="col-6 d-flex"><button className="btn btn-primary">Edit</button></div>
              <div className="col-6 d-flex"><button className="btn btn-danger">Delete</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
