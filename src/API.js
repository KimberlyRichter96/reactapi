import React, { Component } from 'react';
import Subjects from "./Subjects.js";

const url = "https://scpsubjects-5ce4.restdb.io/rest/scp-files";

class API extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="collapse bg-dark" id="navbarHeader">
            <div className="container">
              <div className="row">
                <div className="col-sm-8 col-md-7 py-4">
                  <h4 className="text-white">Welcome</h4>
                  <p className="text-white">Please ensure you are viewing this page in a private setting and on a secure server, the provided content is highly confidential.</p>
                </div>
                <div className="col-sm-4 offset-md-1 py-4">
                  <h4 className="text-white">Important Information</h4>
                  <ul className="list-unstyled">
                    <li className="text-white"> Our Policy</li>
                    <li className="text-white"> Browsing Securely</li>
                    <li className="text-white"> No Email Available</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar navbar-dark bg-dark shadow-sm">
            <div className="container">
              <a href="http://www.scpwiki.com/" className="navbar-brand d-flex align-items-center">
                <svg className="svg-icon" viewBox="0 0 20 20">
                  <path d="M14.911,1.295H5.09c-0.737,0-1.339,0.603-1.339,1.339v14.733c0,0.736,0.603,1.338,1.339,1.338h9.821c0.737,0,1.339-0.602,1.339-1.338V2.634C16.25,1.898,15.648,1.295,14.911,1.295 M15.357,17.367c0,0.24-0.205,0.445-0.446,0.445H5.09c-0.241,0-0.446-0.205-0.446-0.445v-0.893h10.714V17.367z M15.357,15.58H4.644V4.42h10.714V15.58z M15.357,3.527H4.644V2.634c0-0.241,0.205-0.446,0.446-0.446h9.821c0.241,0,0.446,0.206,0.446,0.446V3.527z"></path>
                </svg>
                <strong>SCP Foundation</strong>
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>

        </header >
        <section className="py-2 text-center container</div>">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <p><img src="images/headerbg.png" className="rounded mx-auto img-fluid" alt="Responsive image" /></p>
              <p>
                <a href="https://github.com/KimberlyRichter96/reactapi.git" className="btn btn-dark text-light my-2 text-center">Link to GitHub Repository</a> &nbsp;
              </p>
            </div>
          </div>
        </section>

        <div className="accordion" id="accordion">
          <div className="accordion-item">
            <h5 className="mb-0">
              <button className="btn btn-danger btn-lg btn-block w-100 p-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Click to reveal classified content</strong></button>
            </h5>
            <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
              <div className="card-deck">
                <div className="card">
                      <div>
                        <Subjects subjects={this.state.subjects} />
                      </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="text-dark py-5 bg-dark">
          <div className="container">
            <p className="float-end mb-1">
              <a href="#" className="link-light">Scroll to top</a>
            </p>
            <p className="mb-1 text-white">SCP Foundation</p>
            <p className="mb-0 text-white">Thank you for visiting this page</p>
          </div>
        </footer>
      </div>
    );
  }
  state = { subjects: [] }

  componentDidMount() {
    fetch(url, {
      method: 'GET',
      headers: {
        "cache-control": "no-cache",
        "x-apikey": "60a1d832e3b6e02545eda989",
        "content-type": "application/json"
      }
    })
      .then(result => result.json())
      .then(
        (data) => { this.setState({ subjects: data }) }
      )
      .catch(console.log);
  }
}

export default API;
