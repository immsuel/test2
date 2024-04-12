import React, { useRef } from 'react';
import { useCalendlyEventListener, InlineWidget  } from "react-calendly";

const Program = ({ numAnswered, nextClick, prevClick }) => {

  let firstName
  let lastName
  let phoneNumber
  let business
  let service 
  let website 

  //const sendEmail = (message) => {
    //Email.send({
      //Host: "smtp.gmail.com",
    //  Username: "immanuelshipale08@gmail.com",
   //   Password: "Shipale4035",
   //   To: 'immanuelshipale08@gmail.com',
    //  From: "immanuelshipale08@gmail.com",
   //   Subject: "This is the subject",
   //   Body: "Test ga",
   // }).then(
   //   message => console.log("sent successfully"),
  //    error => console("Error email: " + error)
  //  );
 // }
  
  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: (e) => {
      
      document.getElementById("subText").textContent = "You can now close this tab.";
      document.getElementById("title").textContent = "Thank you!";
    }
  });

  const element = document.querySelector('.jWSwi_R_Xl7kPjUhuQoo _igrKj_5lj_5nWQu8DPw');

  const deleteLogo = () => {
    if(element){
      element.remove();
    }
  }

  while(element){
    deleteLogo();
  }

  if (numAnswered === 0) {
    return (
      <div className="main">
        <h1 className="titleText">Welcome!</h1>
        <p className="subText">Please take a moment to answer a few questions to give us an idea of how we could serve you best. You can expect to hear back within 24 hours.</p>
        <button className="nextBtn" onClick={() => {nextClick(); //const message = `${firstName}, ${lastName}, ${email}, ${phoneNumber}, ${business}, ${service}, ${website}`;
      //sendEmail(message);
      }}>Next</button>
      </div>
    );
  }

  if (numAnswered === 1) {
    return (
      <div className="main">
        <h1 className="titleText">Please introduce yourself</h1>
        <input id="firstName" placeholder="First Name"></input>
        <input id="lastName" placeholder="Last Name"></input>
        <br />
        <input id="email" placeholder="Email Address"></input>
        <input id="phoneNumber" placeholder="Phone Number"></input>
        <br />
        <button className="backBtn" onClick={prevClick}>Back</button>
        <button className="nextBtn" onClick={() => { 
          nextClick();
          firstName = document.getElementById("firstName").value;
          lastName = document.getElementById("lastName").value;
          //email = document.getElementById("email").value;
          phoneNumber = document.getElementById("phoneNumber").value;
  
          console.log(firstName, lastName, 
            //email, 
            phoneNumber);
        }}>Next</button>
      </div>
    );
  }

  if (numAnswered === 2) {
    return (
      <div className="main">
        <div className="main2">
          <h1 className="titleText">What business/industry are you in?</h1>
          <input id="business" className="enterMessage" placeholder="Enter your message"></input>
          <br />
          <button className="backBtn" onClick={prevClick}>Back</button>
          <button className="nextBtn" onClick={() => {
            nextClick();
            business = document.getElementById("business").value;
          }}>Next</button>
        </div>
      </div>
    );
  }

  if (numAnswered === 3) {
    return (
      <div className="main">
        <div className="main2">
          <h1 className="titleText">What service do you need?</h1>
          <div className="selectOption">
            <label htmlFor="webDesign" className="selectOptionText">
              <span>Web Design</span>
              <input type="checkbox" id="webDesign" />
            </label>
          </div>
          <div className="selectOption">
            <label htmlFor="customWeb" className="selectOptionText">
              <span>Custom software Development</span>
              <input type="checkbox" id="customWeb" />
            </label>
          </div>
          <div className="selectOption">
            <label htmlFor="branding" className="selectOptionText">
              <span>Branding</span>
              <input type="checkbox" id="branding" />
            </label>
          </div>
          <div className="selectOption">
            <label htmlFor="seo" className="selectOptionText">
              <span>SEO</span>
              <input type="checkbox" id="seo" />
            </label>
          </div>
          <br />
          <button className="backBtn" onClick={prevClick}>Back</button>
          <button className="nextBtn" onClick={nextClick}>Next</button>
        </div>
      </div>
    );
  }

  if (numAnswered === 4) {
    return (
      <div className="main">
        <div className="main2">
          <h1 className="titleText">Provide your current website's URL/Link</h1>
          <p className="subText">If you do not have a website yet just enter "No" and proceed.</p>
          <input id="url" className="enterMessage" placeholder="Enter your message"></input>
          <br />
          <button className="backBtn" onClick={prevClick}>Back</button>
          <button className="nextBtn" onClick={() => {
            nextClick();
            website = document.getElementById("url").value;
          }}>Next</button>
        </div>
      </div>
    );
  }
  

  if (numAnswered === 5) {
    return (
      <div className="main">
        <div className="main2">
          <h1 className="titleText" id="title">Almost done</h1>
          <p className="subText" id="subText">Select a Date & Time that works for you</p>
          <div className="calendly">
          <InlineWidget url="https://calendly.com/stellarcode/30min?back=1&month=2024-04" pageSettings={{
  backgroundColor: 'ffffff',
  hideEventTypeDetails: false,
  hideLandingPageDetails: false,
  primaryColor: '00a2ff',
  textColor: '4d5055'
}} styles={{height:'100%'}}/>
          </div>
        </div>
      </div>
    );
  }
};

export default Program;
