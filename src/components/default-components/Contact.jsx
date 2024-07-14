export default function Contact() {
  return (
    <div>
      <div className="container contact-container">
        <div className="row">
          <div className="col-md-6">
            <h1>Get in touch</h1>
            <p>
              We're here to help. Chat to our friendly team 24/7 and get set up
              and ready to go in just 5 minutes.
            </p>
            <div className="row">
              <a href="#" style={{textDecoration: "none"}} className="col-12">
                <i className="fas fa-comments"></i> instagram
              </a>
              <a href="#" style={{textDecoration: "none"}} className="col-12">
                <i className="fas fa-envelope"></i> Shoot us an email
              </a>
              <a href="#" style={{textDecoration: "none"}} className="col-12">
                <i className="fas fa-twitter"></i> Message us on Telegram
              </a>
            </div>
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="firstName">First name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="First name"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label for="lastName">Last name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div className="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="you@company.com"
                />
              </div>
              <div className="form-group">
                <label for="phone">Phone number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="(555) 000-0000"
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="10" cols="70" style={{width: "100%", border: "1px solid gray", borderRadius: "7px"}}></textarea>
              </div>
              <button type="submit" className="btn btn-primary mb-4">
                Send message
              </button>
            </form>
          </div>
          <div className="col-md-6">
            <iframe style={{width: "100%", height: "100%"}}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509437!2d144.95565131568055!3d-37.8173279797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5774de2d30b2017!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1597808497310!5m2!1sen!2sus"
              frameborder="0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
