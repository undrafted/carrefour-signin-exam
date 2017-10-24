import React, {Component} from 'react';
import './SignInForm/SignInForm.css';

import LoginService from '../ServiceHelpers/LoginService';

class SignInForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fields: {
        username: '',
        password: ''
      },

      fieldErrors: {},

      fieldClassNames: {
        username: '',
        password: ''
      }

    }

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);

  }

  onFormSubmit = (evt) => {
    const signInDetails = this.state.fields;

    evt.preventDefault();

    if (this.validate(signInDetails)) {

      return;

    } else {
      this.setState({
        fieldClassNames: {}
      });
    }

    LoginService.login(this.state.fields, (response) => {
      alert(response.message);
    });

  };

  onInputChange = (evt) => {

    const fields = this.state.fields;
    fields[evt.target.name] = evt.target.value;
    this.setState({fields});
  };

  validate = (signInDetails) => {

    const errors = {};
    const errorClasses = {};

    if (!signInDetails.username) {
      errors.username = 'Required Field';
      errorClasses.username = 'has-error';
    }

    if (!signInDetails.password) {
      errors.password = 'Required Field';
      errorClasses.password = 'has-error';
    }

    this.setState({fieldErrors: errors, fieldClassNames: errorClasses});

    return Object.keys(errors).length > 0;

  };

  render() {
    return (
      <div className='SignInForm'>
        <header>
          <h1>Sign In Now</h1>
          <h2>Unlock awesome features!</h2>
        </header>

        <form onSubmit={this.onFormSubmit}>

          <div className="input-container">
            <span className="validation-error">{this.state.fieldErrors.username}</span>
            <input name='username' type='text' value={this.state.fields.username} onChange={this.onInputChange} className={`input-fields ${this.state.fieldClassNames.username}`}/>
            <span className="floating-label">Username</span>
          </div>

          <div className="input-container">
            <span className="validation-error">{this.state.fieldErrors.password}</span>
            <input name='password' type='password' value={this.state.fields.password} onChange={this.onInputChange} className={`input-fields ${this.state.fieldClassNames.password}`}/>
            <span className="floating-label">Password</span>
          </div>

          <div className='formFooter'>
            <span className='checkbox-keep-session'>
              <input type='checkbox' id='keep-session' defaultChecked></input>
              <label htmlFor='keep-session'>Keep me logged in</label>
            </span>
            <a href='#'>Forgot password?</a>
          </div>

          <input type='submit' className='btn-submit' value='Sign In'/>
        </form>
      </div>
    );
  }
}

export default SignInForm;
