import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ParticlesBg from 'particles-bg';
import '../css_Files/signup.css';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail_id: '',
      password: '',
      current_password: '',
    };
  }

  onChangeMail_id = (event) => {
    console.log(event.target.value);
    this.setState({ mail_id: event.target.value });
  };

  onChangePassword = (event) => {
    console.log(event.target.value);
    this.setState({ password: event.target.value });
  };

  onChangeCurrentPassword = (event) => {
    console.log(event.target.value);
    this.setState({ current_password: event.target.value });
  };

  Submit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className='signup_container'>
        <form className='flex form' onSubmit={this.Submit}>
        <ParticlesBg num={50} type='circle' bg={true} />
          <label className='flex_row'>
            <div>Enter your Email_id:</div>
            <input
              type='Mail_id'
              name='Mail_id'
              placeholder='Write Your Mail_id...'
              value={this.state.mail_id}
              className='search_input'
              onChange={this.onChangeMail_id}
            />
          </label>
          <label className='flex_row'>
            <div>Password:</div>
            <input
              type='Password'
              name='Password'
              placeholder='Write Your Password...'
              value={this.state.password}
              className='search_input'
              onChange={this.onChangePassword}
            />
          </label>
          <label className='flex_row'>
            <div>Confirm Password:</div>
            <input
              type='CPassword'
              name='CPassword'
              placeholder='Write Your Confirm Password...'
              value={this.state.cpassword}
              className='search_input'
              onChange={this.onChangeCurrentPassword}
            />
          </label>
          <div className='btn'>
            <Button
              variant='contained'
              color='secondary'
              type='submit'
              className='flex_row'
            >
              SignUp
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
