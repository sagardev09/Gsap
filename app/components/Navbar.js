"use client"
import React, { useRef } from 'react'
import { Logo } from "../portfolio/logo"
import { gsap, Power1 } from 'gsap'

const Navbar = () => {

    const logoref = useRef(null)

    const onlogoenter = () => {
        const currcolor = logoref.current.getAttribute("data-color")
        const logosvg = logoref.current.firstChild.firstChild

        const nextcolor = currcolor === "#a6e2e3" ? "#8566f6" : currcolor === "#8566f6" ? "#ed7c50" : "#a6e2e3"
        logoref.current.setAttribute("data-color", nextcolor)
        gsap.to(logosvg, {
            fill: currcolor,
            duration: 0.2,
            ease: Power1.easeOut
        })

    }
    const onlogoleave = () => {
        const logosvg = logoref.current.firstChild.firstChild
        gsap.to(logosvg, {
            fill: "#282829",
            duration: 0.2,
            ease: Power1.easeOut
        })
    }
    return (
        <div className='header min-w-screen fixed left-0 top-0 z-10 w-screen px-7 transition-all duration-500 ease-ou '>
            <div className='overflow-hidden bg-none'>
                <div className='header_container  flex items-center justify-between transition-all duration-500 ease-out will-change-transform lg:py-8'>
                    {/* button */}
                    <div className='group overflow-hidden relative cursor-pointer text-3xl uppercase leading-6 text-black  '>
                        <span className='inline-block p-1 transition duration-500 ease-out group-hover:translate-y-[-120px] mt-3'>menu</span>
                        <span className='absolute left-0 translate-y-[120px] rotate-12 inline-block p-1 transition duration-500 ease-out group-hover:translate-y-[0] group-hover:rotate-0 mt-3'>menu</span>
                    </div>
                    {/* Header */}
                    <div>
                        <div className='header_logo pointer-events-auto h-12 cursor-pointer leading-none transition-height [&>svg]:h-10 [&>svg]:duration-500 [&>svg]:ease-out lg:[&>svg]:h-16'
                            data-color="#a6e2e3"
                            ref={logoref}
                            onMouseEnter={onlogoenter}
                            onMouseLeave={onlogoleave}
                        >
                            <Logo />
                        </div>
                    </div>
                    {/* button */}
                    <div className='group overflow-hidden relative cursor-pointer text-3xl uppercase leading-6 text-black '>
                        <span className='inline-block p-1 transition duration-500 ease-out group-hover:translate-y-[-120px] mt-2'>contact</span>
                        <span className='absolute left-0 translate-y-[120px] rotate-12 inline-block p-1 transition duration-500 ease-out group-hover:translate-y-[0] group-hover:rotate-0 mt-2'>contact</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar