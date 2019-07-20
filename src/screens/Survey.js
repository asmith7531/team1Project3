import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer"
import M from "materialize-css";

export default class Survey extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <>
      <NavBar />
        
      <div className="container center-align">
        <div className="row">
          <h3>Find your Passion</h3>  
         
        <form action="#">

          <div className="row left-align">
            <h5>I like science and mathemetaics,  </h5>
            <div className="col s-6">
            <label>
              <input name="group1" type="radio"/>
              <span>Yes</span>
            </label>
            </div>
            <div className="col s-6">
            <label>
              <input class="with-gap" name="group1" type="radio"/>
              <span>No</span>
            </label>
            </div>
          </div>
                  
          <div className="row left-align">
            <h5>This is Question 2</h5>
            <div className="col s-6">
            <label>
              <input name="group2" type="radio"/>
              <span>Yes</span>
            </label>
            </div>
            <div className="col s-6">
            <label>
              <input class="with-gap" name="group2" type="radio"/>
              <span>No</span>
            </label>
            </div>
          </div>

          <div className="row left-align">
            <h5>This is Question 3</h5>
            <div className="col s-6">
            <label>
              <input name="group3" type="radio"/>
              <span>Yes</span>
            </label>
            </div>
            <div className="col s-6">
            <label>
              <input class="with-gap" name="group3" type="radio"/>
              <span>No</span>
            </label>
            </div>
          </div>

          <div className="row left-align">
            <h5>This is Question 4?</h5>
            <div className="col s-6">
            <label>
              <input name="group4" type="radio"/>
              <span>Yes</span>
            </label>
            </div>
            <div className="col s-6">
            <label>
              <input class="with-gap" name="group4" type="radio"/>
              <span>No</span>
            </label>
            </div>
          </div>

          <div className="row left-align">
            <h5>This is Question 5?</h5>
            <div className="col s-6">
            <label>
              <input name="group5" type="radio"/>
              <span>Yes</span>
            </label>
            </div>
            <div className="col s-6">
            <label>
              <input class="with-gap" name="group5" type="radio"/>
              <span>No</span>
            </label>
            </div>
          </div>

          <div className="row left-align">
            <h5>This is Question 6?</h5>
            <div className="col s-6">
            <label>
              <input name="group6" type="radio"/>
              <span>Yes</span>
            </label>
            </div>
            <div className="col s-6">
            <label>
              <input class="with-gap" name="group6" type="radio"/>
              <span>No</span>
            </label>
            </div>
          </div>

          <div className="row left-align">
            <h5>This is Question 7?</h5>
            <div className="col s-6">
            <label>
              <input name="group7" type="radio"/>
              <span>Yes</span>
            </label>
            </div>
            <div className="col s-6">
            <label>
              <input class="with-gap" name="group7" type="radio"/>
              <span>No</span>
            </label>
            </div>
          </div>

          <div className="row left-align">
            <h5>This is Question 8?</h5>
            <div className="col s-6">
            <label>
              <input name="group8" type="radio"/>
              <span>Yes</span>
            </label>
            </div>
            <div className="col s-6">
            <label>
              <input class="with-gap" name="group8" type="radio"/>
              <span>No</span>
            </label>
            </div>
          </div>

          <div className="row left-align">
            <h5>This is Question 9?</h5>

            <div className="col s-6">
            <label>
              <input name="group9" type="radio"/>
              <span>Yes</span>
            </label>
            </div>
            <div className="col s-6">
            <label>
              <input class="with-gap" name="group9" type="radio"/>
              <span>No</span>
            </label>
            </div>
          </div>

          <div className="row left-align">
            <h5>This is Question 10?</h5>
            <div className="col s-6">
            <label>
              <input name="group10" type="radio"/>
              <span>Yes</span>
            </label>
            </div>
            <div className="col s-6">
            <label>
              <input class="with-gap" name="group10" type="radio"/>
              <span>No</span>
            </label>
            </div>
          </div>

          <div className="row left-align">
            <h5>This is Question 11?</h5>
            <div className="col s-6">
            <label>
              <input name="group11" type="radio"/>
              <span>Yes</span>
            </label>
            </div>
            <div className="col s-6">
            <label>
              <input class="with-gap" name="group11" type="radio"/>
              <span>No</span>
            </label>
            </div>
          </div>

          <div className="row left-align">
            <h5>This is Question 12?</h5>
            <div className="col s-6">
            <label>
              <input name="group12" type="radio"/>
              <span>Yes</span>
            </label>
            </div>
            <div className="col s-6">
            <label>
              <input class="with-gap" name="group12" type="radio"/>
              <span>No</span>
            </label>
            </div>
          </div>

          <div className="row left-align">
            <h5>This is Question 13?</h5>
            <div className="col s-6">
            <label>
              <input name="group13" type="radio"/>
              <span>Yes</span>
            </label>
            </div>
            <div className="col s-6">
            <label>
              <input class="with-gap" name="group13" type="radio"/>
              <span>No</span>
            </label>
            </div>
          </div>

          <div className="row left-align">
            <h5>This is Question 14?</h5>
            <div className="col s-6">
            <label>
              <input name="group14" type="radio"/>
              <span>Yes</span>
            </label>
            </div>
            <div className="col s-6">
            <label>
              <input class="with-gap" name="group14" type="radio"/>
              <span>No</span>
            </label>
            </div>
          </div>

          <div className="row left-align">
            <h5>This is Question 15?</h5>
            <div className="col s-6">
            <label>
              <input name="group15" type="radio"/>
              <span>Yes</span>
            </label>
            </div>
            <div className="col s-6">
            <label>
              <input class="with-gap" name="group15" type="radio"/>
              <span>No</span>
            </label>
            </div>
          </div>

          <div className="row left-align">
            <h5>This is Question 16?</h5>
            <div className="col s-6">
            <label>
              <input name="group16" type="radio"/>
              <span>Yes</span>
            </label>
            </div>
            <div className="col s-6">
            <label>
              <input class="with-gap" name="group16" type="radio"/>
              <span>No</span>
            </label>
            </div>
          </div>

          <div className="row left-align">
            <h5>This is Question 17?</h5>
            <div className="col s-6">
            <label>
              <input name="group17" type="radio"/>
              <span>Yes</span>
            </label>
            </div>
            <div className="col s-6">
            <label>
              <input class="with-gap" name="group17" type="radio"/>
              <span>No</span>
            </label>
            </div>
          </div>

          <div className="row left-align">
            <h5>This is Question 18?</h5>
            <div className="col s-6">
            <label>
              <input name="group18" type="radio"/>
              <span>Yes</span>
            </label>
            </div>
            <div className="col s-6">
            <label>
              <input class="with-gap" name="group18" type="radio"/>
              <span>No</span>
            </label>
            </div>
          </div>

          <div className="row left-align">
            <h5>This is Question 19?</h5>
            <div className="col s-6">
            <label>
              <input name="group19" type="radio"/>
              <span>Yes</span>
            </label>
            </div>
            <div className="col s-6">
            <label>
              <input class="with-gap" name="group19" type="radio"/>
              <span>No</span>
            </label>
            </div>
          </div>

          <div className="row left-align">
            <h5>This is Question 20?</h5>
            <div className="col s-6">
            <label>
              <input name="group20" type="radio"/>
              <span>Yes</span>
            </label>
            </div>
            <div className="col s-6">
            <label>
              <input class="with-gap" name="group20" type="radio"/>
              <span>No</span>
            </label>
            </div>
          </div>

          <div className="row left-align">
            <h5>This is Question 21?</h5>
            <div className="col s-6">
            <label>
              <input name="group21" type="radio"/>
              <span>Yes</span>
            </label>
            </div>
            <div className="col s-6">
            <label>
              <input class="with-gap" name="group21" type="radio"/>
              <span>No</span>
            </label>
            </div>
          </div>

          <div className="row left-align">
            <h5>This is Question 22?</h5>
            <div className="col s-6">
            <label>
              <input name="group22" type="radio"/>
              <span>Yes</span>
            </label>
            </div>
            <div className="col s-6">
            <label>
              <input class="with-gap" name="group22" type="radio"/>
              <span>No</span>
            </label>
            </div>
          </div>

          <div className="row left-align">
            <h5>This is Question 23?</h5>
            <div className="col s-6">
            <label>
              <input name="group23" type="radio"/>
              <span>Yes</span>
            </label>
            </div>
            <div className="col s-6">
            <label>
              <input class="with-gap" name="group23" type="radio"/>
              <span>No</span>
            </label>
            </div>
          </div>

          <div className="row left-align">
            <h5>This is Question 24?</h5>
            <div className="col s-6">
            <label>
              <input name="group24" type="radio"/>
              <span>Yes</span>
            </label>
            </div>
            <div className="col s-6">
            <label>
              <input class="with-gap" name="group24" type="radio"/>
              <span>No</span>
            </label>
            </div>
          </div>

          <div className="row left-align">
            <h5>This is Question 25?</h5>
            <div className="col s-6">
            <label>
              <input name="group25" type="radio"/>
              <span>Yes</span>
            </label>
            </div>
            <div className="col s-6">
            <label>
              <input class="with-gap" name="group25" type="radio"/>
              <span>No</span>
            </label>
            </div>
          </div>

          <div className="row left-align">
            <h5>This is Question 26?</h5>
            <div className="col s-6">
            <label>
              <input name="group26" type="radio"/>
              <span>Yes</span>
            </label>
            </div>
            <div className="col s-6">
            <label>
              <input class="with-gap" name="group26" type="radio"/>
              <span>No</span>
            </label>
            </div>
          </div>

          <div className="row left-align">
            <h5>This is Question 27?</h5>
            <div className="col s-6">
            <label>
              <input name="group27" type="radio"/>
              <span>Yes</span>
            </label>
            </div>
            <div className="col s-6">
            <label>
              <input class="with-gap" name="group27" type="radio"/>
              <span>No</span>
            </label>
            </div>
          </div>

          <div className="row left-align">
            <h5>This is Question 28?</h5>
            <div className="col s-6">
            <label>
              <input name="group28" type="radio"/>
              <span>Yes</span>
            </label>
            </div>
            <div className="col s-6">
            <label>
              <input class="with-gap" name="group28" type="radio"/>
              <span>No</span>
            </label>
            </div>
          </div>

          <div className="row left-align">
            <h5>This is Question 29?</h5>
            <div className="col s-6">
            <label>
              <input name="group29" type="radio"/>
              <span>Yes</span>
            </label>
            </div>
            <div className="col s-6">
            <label>
              <input class="with-gap" name="group29" type="radio"/>
              <span>No</span>
            </label>
            </div>
          </div>

          <div className="row left-align">
            <h5>This is Question 30?</h5>
            <div className="col s-6">
            <label>
              <input name="group30" type="radio"/>
              <span>Yes</span>
            </label>
            </div>
            <div className="col s-6">
            <label>
              <input class="with-gap" name="group30" type="radio"/>
              <span>No</span>
            </label>
            </div>
          </div>

    </form>


    <button type="submit" className="btn btn-primary btn-lg btn-block" id="submit"><i className="fa fa-check-circle" aria-hidden="true"></i>
      Submit</button>
    </div>

  </div>

     <Footer/>
       </>

    );
  }
}
