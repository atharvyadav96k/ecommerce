export default function RecommendCard() {
  return (
    <div className="pb-2" style={{height: "100px", position: "relative"}}>
      <div className="card mb-3 overflow-hidden" style={{height: "100%"}}>
        <div className="row g-0">
          <div className="col-4 overflow-hidden position-relative">
            <img src="https://images.unsplash.com/photo-1525598912003-663126343e1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmV8ZW58MHwwfDB8fHww" className="img-fluid rounded-start" alt="..." style={{objectFit: "cover", width: "100%", objectPosition: "center",height: "100%"}}/>
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
