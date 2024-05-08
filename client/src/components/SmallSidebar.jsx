import React from 'react'
import Wrapper from '../assets/wrappers/SmallSidebar'
import { useDashBoardContext } from '../pages/DashboardLayout'
import { FaTimes } from 'react-icons/fa'
import Logo from './Logo'
import links from '../utils/links'
import NavLinks from './NavLinks'

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useDashBoardContext()
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className='content'>
          <button type='button' className='close-btn' onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  )
}

export default SmallSidebar
