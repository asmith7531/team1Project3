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
              
          <form className="col s12">
            <div className="row">
              <h3>Find your Passion</h3>
                <div className="input-field col s6">
                  <input id="first_name" type="text" className="qValidate"/>
                  <label for="first_name">First Name</label>
                </div>
                <div className="input-field col s6">
                  <input id="last_name" type="text" className="qValidate"/>
                  <label for="last_name">Last Name</label>
                </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="picture" type="text" className="qValidate"/>
                  <label for="password">Paste a link here to your favorite selfie! (image URL required)</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="fun_fact" type="text" className="qValidate"/>
                  <label for="funfact">Fun Fact about you! (optional)</label>
                </div>
              </div>
              <div className="row">
            <h3 className="surveyHeaderFix">Multiple Choice</h3>
          <div className="input-field col s12">
            <select className="qValidate" id="profQone">
              <option value="" disabled selected></option>
              <option value="1">work with my hands.</option>
              <option value="2">use my creativity.</option>
              <option value="3">work on the road.</option>
              <option value="4">lead a team.</option>
              <option value="5">do nothing at all.</option>
            </select>
            <label>If I could do anything I want for a living, I'd choose to... </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <select className="qValidate" id="profQtwo">
              <option value="" disabled selected></option>
              <option value="1">beach.</option>
              <option value="2">mountains.</option>
              <option value="3">forest.</option>
              <option value="4">city.</option>
              <option value="5">suburbs.</option>
            </select>
            <label>If I could live anywhere in the world, I'd aim for the... </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <select className="qValidate" id="profQthree">
              <option value="" disabled selected></option>
              <option value="1">music.</option>
              <option value="2">scuplture.</option>
              <option value="3">dance.</option>
              <option value="4">painting.</option>
              <option value="5">film.</option>
            </select>
            <label>The most fascinating artistic medium is... </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <select className="qValidate" id="profQfour">
              <option value="" disabled selected></option>
              <option value="1">learning code and developing software.</option>
              <option value="2">some form of martial arts.</option>
              <option value="3">vocational skills such as electrical work and automechanics.</option>
              <option value="4">learning a new musical instrument.</option>
              <option value="5">all of the books collecting dust on my bookcase.</option>
            </select>
            <label>If I was given enough money to spend a full month studying whatever I want, I'd focus on... </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <select className="qValidate" id="profQfive">
              <option value="" disabled selected></option>
              <option value="1">at a concert.</option>
              <option value="2">visiting a museum.</option>
              <option value="3">hitting up the stadium to see my favorite sports team.</option>
              <option value="4">catching up on work.</option>
              <option value="5">doing nothing.</option>
            </select>
            <label>I'd prefer to spend my weekend... </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <select className="qValidate" id="profQsix">
              <option value="" disabled selected></option>
              <option value="1">Asia.</option>
              <option value="2">Europe.</option>
              <option value="3">Africa.</option>
              <option value="4">Australia.</option>
              <option value="5">South America.</option>
            </select>
            <label>If I could vacation anywhere next week for free, I'd travel to... </label>
          </div>
        </div>
        <div className="row">
          <h3 className="surveyHeaderFix">On a Scale of 1 to 5...</h3>
          <div className="input-field col s12">
            <select className="qValidate" id="survQone">
              <option value="" disabled selected></option>
              <option value="1">1 (strongly disagree)</option>
              <option value="2">2</option>
              <option value="3">3 (meh)</option>
              <option value="4">4</option>
              <option value="5">5 (strongly agree)</option>
            </select>
            <label>I'd much rather be outdoors than cramped inside.</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <select className="qValidate" id="survQtwo">
              <option value="" disabled selected></option>
              <option value="1">1 (strongly disagree)</option>
              <option value="2">2</option>
              <option value="3">3 (meh)</option>
              <option value="4">4</option>
              <option value="5">5 (strongly agree)</option>
            </select>
            <label>I'm a big fan of video games.</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <select className="qValidate" id="survQthree">
              <option value="" disabled selected></option>
              <option value="1">1 (strongly disagree)</option>
              <option value="2">2</option>
              <option value="3">3 (meh)</option>
              <option value="4">4</option>
              <option value="5">5 (strongly agree)</option>
            </select>
            <label>I don't like eating meat.</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <select className="qValidate" id="survQfour">
              <option value="" disabled selected></option>
              <option value="1">1 (strongly disagree)</option>
              <option value="2">2</option>
              <option value="3">3 (meh)</option>
              <option value="4">4</option>
              <option value="5">5 (strongly agree)</option>
            </select>
            <label>I don't really care about politics.</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <select className="qValidate" id="survQfive">
              <option value="" disabled selected></option>
              <option value="1">1 (strongly disagree)</option>
              <option value="2">2</option>
              <option value="3">3 (meh)</option>
              <option value="4">4</option>
              <option value="5">5 (strongly agree)</option>
            </select>
            <label>It's really hard to offend or upset me. </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <select className="qValidate" id="survQsix">
              <option value="" disabled selected></option>
              <option value="1">1 (strongly disagree)</option>
              <option value="2">2</option>
              <option value="3">3 (meh)</option>
              <option value="4">4</option>
              <option value="5">5 (strongly agree)</option>
            </select>
            <label>I love dogs!</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <select className="qValidate" id="survQseven">
              <option value="" disabled selected></option>
              <option value="1">1 (strongly disagree)</option>
              <option value="2">2</option>
              <option value="3">3 (meh)</option>
              <option value="4">4</option>
              <option value="5">5 (strongly agree)</option>
            </select>
            <label>I love cats!</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <select className="qValidate" id="survQeight">
              <option value="" disabled selected></option>
              <option value="1">1 (strongly disagree)</option>
              <option value="2">2</option>
              <option value="3">3 (meh)</option>
              <option value="4">4</option>
              <option value="5">5 (strongly agree)</option>
            </select>
            <label>There's too many billionaires.</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <select className="qValidate" id="survQnine">
              <option value="" disabled selected></option>
              <option value="1">1 (strongly disagree)</option>
              <option value="2">2</option>
              <option value="3">3 (meh)</option>
              <option value="4">4</option>
              <option value="5">5 (strongly agree)</option>
            </select>
            <label>I love staying out until sunrise.</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <select className="qValidate" id="survQten">
              <option value="" disabled selected></option>
              <option value="1">1 (strongly disagree)</option>
              <option value="2">2</option>
              <option value="3">3 (meh)</option>
              <option value="4">4</option>
              <option value="5">5 (strongly agree)</option>
            </select>
            <label>I rely more on knowledge than imagination.</label>
          </div>
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
