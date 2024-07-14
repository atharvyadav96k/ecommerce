export default function RecommendCard() {
  return (
    <div className="pb-2" style={{height: "100px", position: "relative"}}>
      <div class="card mb-3 overflow-hidden" style={{height: "100%"}}>
        <div class="row g-0">
          <div class="col-4 overflow-hidden position-relative">
            <img src="https://images.unsplash.com/photo-1525598912003-663126343e1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmV8ZW58MHwwfDB8fHww" class="img-fluid rounded-start" alt="..." style={{objectFit: "cover", width: "100%", objectPosition: "center",height: "100%"}}/>
          </div>
          <div class="col-8">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}