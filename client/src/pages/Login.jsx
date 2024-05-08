import React from 'react'
import { Link } from 'react-router-dom'
import { Logo, FormRow } from '../components'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'

const Login = () => {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h1>Login</h1>
        <FormRow type='email' name='email' defaultValue='joe@joe.com' />
        <FormRow type='password' name='password' defaultValue='joejoe' />
        <button type='submit' className='btn btn-block'>
          Submit
        </button>
        <button type='button' className='btn btn-block'>
          explore the app
        </button>
        <p>
          Not a member yet?
          <Link to='/register' className='member-btn'>
            Register
          </Link>
        </p>
      </form>
    </Wrapper>
  )
}

export default Login
