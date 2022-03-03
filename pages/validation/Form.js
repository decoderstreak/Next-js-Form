import React, { Component } from "react";
import ValidationStyles from '../../styles/Validation.module.css'

export default class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
          Name: "",
          Email: "",
          phone: "",
          Day: "",
          Time: "5 pm",
          Aol: "",
          phonenumberid: "+91",
          phonenumber: "",
          isNameEmpty: 0,
          isEmailEmpty: 0,
          isPhoneEmpty: 0,
          isEmailCorrect: 1,
          isRadioButtonEmpty: 0,
          isFormEmpty: 0,
          countries: [
            {
              code: "+91",
              Name: "India",
            },
          ],
          days: [
            {
              day: null,
              date: null,
              month: null,
            },
            {
              day: null,
              date: null,
              month: null,
            },
            {
              day: null,
              date: null,
              month: null,
            },
            {
              day: null,
              date: null,
              month: null,
            },
            {
              day: null,
              date: null,
              month: null,
            },
            {
              day: null,
              date: null,
              month: null,
            },
            {
              day: null,
              date: null,
              month: null,
            },
          ],
          currentDay: "",
          currentDate: "",
          currentMonth: 0,
          months: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          isOpen: false,
          isClose: true,
    
        };
      }

    formValidations = () => {

        if (this.state.Name === '') {
          this.setState({ isNameEmpty: 1 })
          return false
        }
        else {
          this.setState({ isNameEmpty: 0 })
        }
    
        if (this.state.Email === '') {
          this.setState({ isEmailEmpty: 1 })
        }
        else if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.Email))) {
          console.log("email correct");
          this.setState({ isEmailCorrect: 1 })
          this.setState({ isEmailEmpty: 0 })
        }
        else {
          console.log("email incorrect");
          this.setState({ isEmailEmpty: 0 })
          this.setState({ isEmailCorrect: 0 })
          return false
        }
        if (this.state.phonenumber === "") {
          this.setState({ isPhoneEmpty: 1 })
          return false
        }
        else {
          this.setState({ isPhoneEmpty: 0 })
        }
        if (this.state.Aol === "") {
          this.setState({ isRadioButtonEmpty: 1 })
        }
        else {
          this.setState({ isRadioButtonEmpty: 0 })
        }
        if (this.state.Name === '' || this.state.Email === '' || this.state.phonenumber === "" || this.state.Aol === "") {
          
          this.setState({ isFormEmpty: 1 })
         ;
          return false
        }
        return true
      }
    
      handleUsernameChange = (event) => {
        this.setState({
          Name: event.target.value,
        });
      };
      handleEmailChange = (event) => {
        this.setState({
          Email: event.target.value,
        });
      };
      handlePhoneChange = (event) => {
        console.log(event.target.value)
        this.setState({
          phonenumberid: event.target.value,
        });
      };
      handleDayChange = (event) => {
        this.setState({
          Day: event.target.value,
        });
      };
      handleTimeChange = (event) => {
        this.setState({
          Time: event.target.value,
        });
      };
      handleAolChange = (event) => {
        this.setState({
          Aol: event.target.value,
        });
      };
      handlePhonenumberChange = (event) => {
        this.setState({
          phonenumber: event.target.value,
        });
      };
      handleSubmit = () => {
        if (this.formValidations()) {
          var formData = new FormData();
          let l = 0
          if (this.state.Aol === "Yes") {
            l = 1
          }
    
    
          
    
    
          console.log(
            `${this.state.Name} ${this.state.Email} ${this.state.Day} ${this.state.Time} ${this.state.Aol} ${this.state.phonenumber}`
          );
        }
    
      };
      componentDidMount = () => {
        var fixDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
      
    
      };
      render() {
        return (

        <div  className={ValidationStyles.Body}>
        <div className={ValidationStyles.Form_Maincontainer}>
        <div className={ValidationStyles.Form_Fields}>
          <div className={ValidationStyles.Form_Heading}>
            <div className={ValidationStyles.Form_heading_stylings}>
              Join 1000 people who took the free introduction in the last week
            </div>
          </div>
          <div className={ValidationStyles.Form_Formandcontent}>
            <form className={ValidationStyles.Form_Fieldsstart} onSubmit={this.handleSubmit}>
              <label>Name*</label>
              <input
                type="text"
                value={this.state.Name}
                onChange={this.handleUsernameChange}
              />

              {this.state.isNameEmpty === 1 ? <span style={{ color: 'red' }} className={ValidationStyles.Form_errormsg}>Please fill out this field.</span> : ""}
              <label>Email*</label>
              <input
                type="text"
                value={this.state.Email}
                onChange={this.handleEmailChange}
              />
              {this.state.isEmailEmpty === 1 ? <span style={{ color: 'red' }} className={ValidationStyles.Form_errormsg}>Please fill out this field.</span> : ""}
              {this.state.isEmailCorrect === 0 ? <span style={{ color: 'red' }} className={ValidationStyles.Form_errormsg}>Please fill valid email.</span> : ""}
              <label>Phone*</label>
              <div className={ValidationStyles.Form_phonenumber}>
                <select
                  className={ValidationStyles.Form_selecttag}
                  value={this.state.phonenumberid}
                  onChange={this.handlePhoneChange}
                >
                  
                    <option>+91</option>
                
                </select>
                <div className={ValidationStyles.Form_phone_number_vertical_line}></div>
                <input
                  type="tel"
                  required
                  className={ValidationStyles.Form_phoneinput}
                  // defaultCountry="NA"
                  value={this.state.phonenumber}
                  onChange={this.handlePhonenumberChange}
                />
              </div>
              {this.state.isPhoneEmpty === 1 ? <span style={{ color: 'red' }} className={ValidationStyles.Form_errormsg}>Please fill out this field.</span> : ""}

              <label>Select Day</label>
              <select value={this.state.Day} onChange={this.handleDayChange}>
                {this.state.days.map((day, index) => {
                  if (index >= this.state.currentDay) {
                    return (
                      <option className={ValidationStyles.Form_option}>
                        {day.day}-{day.date}-{day.month}
                      </option>
                    );
                  } else {
                  }
                })}
            
              </select>
              <label>Select Time</label>
              <select value={this.state.Time} onChange={this.handleTimeChange}>
                <option value="10am">10am</option>
                <option value="6am">6am</option>
                <option value="7pm">7pm</option>
              </select>
              <div className={ValidationStyles.Form_question}>
                Have you learnt Sudarshan Kriya<sup className={ValidationStyles.Form_sup_text}>TM</sup>
              </div>
              <div
                value={this.state.Aol}
                onChange={this.handleAolChange}
                className={ValidationStyles.Form_Radio}
              >
                <input type="radio" value="Yes" name="gender" />
                <label className={ValidationStyles.Form_radio}>Yes</label>
                <input type="radio" value="No" name="gender" />
                <label>No</label>
              </div>
              {this.state.isRadioButtonEmpty === 1 ? <span style={{ color: 'red' }} className={ValidationStyles.Form_errormsg}>Please fill out this field.</span> : ""}
              <button className={ValidationStyles.Form_button1} type="button" onClick={() => { this.handleSubmit() }} >
                Sign up Now
              </button>
            </form>
            
             
           
            {/* </div>  */}
            <div className={ValidationStyles.Form_finalcontent}>
              <div>
        
              </div>
            </div>
          </div>
        </div>
       
      </div>
      </div>
    )
        }
}

