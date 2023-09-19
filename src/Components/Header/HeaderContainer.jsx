import React from 'react'
import { TopBar } from './TopBar'
import { NavBar } from './NavBar'
import { Banner } from './Banner'

export const HeaderContainer = () => {
    return (
        <header>
            <TopBar />
            <NavBar />
        </header>
    )
}
