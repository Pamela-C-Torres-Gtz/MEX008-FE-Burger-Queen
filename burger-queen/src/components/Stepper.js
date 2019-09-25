import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bs-stepper/dist/css/bs-stepper.min.css';
import Stepper from 'bs-stepper'




class FlowStepper extends React.Component {

  componentDidMount() {
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    })
  }

  onSubmit(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div>
        
        <div id="stepper1" class="bs-stepper" >
          <div className="bs-stepper-header">
            <div className="step" data-target="#test-l-1">
              <button className="step-trigger" color = "danger">
                <span className="bs-stepper-circle">1</span>
                <span className="bs-stepper-label">Email</span>
              </button>
            </div>
            <div className="line"></div>
            <div className="step" data-target="#test-l-2">
              <button className="step-trigger">
                <span className="bs-stepper-circle">2</span>
                <span className="bs-stepper-label">Password</span>
              </button>
            </div>
            <div class="line"></div>
            <div class="step" data-target="#test-l-3">
              <button class="step-trigger">
                <span class="bs-stepper-circle">3</span>
                <span class="bs-stepper-label">Form</span>
              </button>
            </div>
            <div class="line"></div>
            <div class="step" data-target="#test-l-4">
              <button class="step-trigger">
                <span class="bs-stepper-circle">4</span>
                <span class="bs-stepper-label">Form</span>
              </button>
            </div>
            <div class="line"></div>
            <div class="step" data-target="#test-l-5">
              <button class="step-trigger">
                <span class="bs-stepper-circle">5</span>
                <span class="bs-stepper-label">Validate</span>
              </button>
            </div>
          </div>
          <div class="bs-stepper-content">
            <form onSubmit={this.onSubmit}>
              <div id="test-l-1" class="content">
                <div class="form-group">
                  <label>Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                </div>
                <button class="btn btn-primary" onClick={() => this.stepper.next()}>Next</button>
              </div>
              <div id="test-l-2" class="content">
                <div class="form-group">
                  <label >Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button class="btn btn-primary" onClick={() => this.stepper.next()}>Next</button>
              </div>
              <div id="test-l-3" class="content">
                <div class="form-group">
                  <label >Form</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="placeholder" />
                </div>
                <button class="btn btn-primary" onClick={() => this.stepper.next()}>Next</button>
              </div>
              <div id="test-l-4" class="content">
                <div class="form-group">
                  <label >Form</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="placeholder" />
                </div>
                <button class="btn btn-primary" onClick={() => this.stepper.next()}>Next</button>
              </div>
              
              <div id="test-l-5" class="content text-center">
                <button type="submit" class="btn btn-primary mt-5">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default FlowStepper