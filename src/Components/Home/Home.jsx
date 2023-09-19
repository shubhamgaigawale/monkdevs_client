import React from 'react'
import { HeaderContainer } from '../Header/HeaderContainer'
import { AboutUs } from './AboutUs'
import { Services } from './Services'
import { StayInTouch } from './StayInTouch'
import { Footer } from '../Footer'
import { Banner } from '../Header/Banner'

export const Home = () => {
  return (
    <main>
        <Banner />
        <AboutUs />
        <Services />
        <StayInTouch />
    </main>
)
}
