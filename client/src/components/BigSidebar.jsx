import React from 'react'

import Wrapper from '../assets/wrappers/BigSidebar'
import { useDashBoardContext } from '../pages/DashboardLayout'
import Logo from './Logo'
import NavLinks from './NavLinks'

const BigSidebar = () => {
  const { showSidebar } = useDashBoardContext()

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container ' : 'sidebar-container show-sidebar'
        }
      >
        <div className='content'>
          <header>
            <Logo />
          </header>
          <NavLinks isBigSidebar />
        </div>
      </div>
    </Wrapper>
  )
}

export default BigSidebar
