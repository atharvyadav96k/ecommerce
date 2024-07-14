export default function UploadForm() {
  return (
    <section className="bg-light py-3 py-md-5">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
            <h2 className="mb-4 display-5 text-center">Upload product</h2>
            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-log-6 col-md-6">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
          </div>
          <div className="col-log-6 col-md-6">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Category
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option>Choose Category</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Price
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    MRP
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Image
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="mb-3">
                  <label htmlFor="formFile" className="form-label">
                    Default file input example
                  </label>
                  <input className="form-control" type="file" id="formFile" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Brand
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Color
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Size
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{height: "100px"}}
          ></textarea>
          <label for="floatingTextarea2">Description</label>
        </div>
        <button className="btn btn-primary mt-3">Submit</button>
      </div>
    </section>
  );
}
