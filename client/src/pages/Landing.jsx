import Wrapper from '../assets/wrappers/LandingPage'
import main from '../assets/images/main-2.svg'
import { Link } from 'react-router-dom'
import { Logo } from '../components'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            job <span>tracker</span>
          </h1>
          <p>
            Welcome to Job Tracker, a full-stack web application built to help
            software engineers manage and streamline their job search. Track
            your job applications, discover new opportunities, and land your
            next dream job!
          </p>
          <Link to='/register' className='btn register-link'>
            Register
          </Link>
          <Link to='/login' className='btn '>
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Landing
