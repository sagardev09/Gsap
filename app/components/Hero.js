"use client"
import React, { useEffect, useRef } from 'react'
import { FlowerLogo } from './FlowerLogo'
import { gsap, Power1 } from 'gsap'
import { CustomEase } from 'gsap/all'

gsap.registerPlugin(CustomEase)
CustomEase.create("cubic-text", "0.25,1,0.5,1")


const Hero = () => {
    const heroInfiniteRef = useRef(null);
    const crazytext = useRef(null)
    const hero = useRef(null)
    useEffect(() => {
        const titles = document.querySelectorAll(".h_title")
        const tl = gsap.timeline({ defaults: { duration: 1 } })
        tl.to(hero?.current, {
            opacity: 1,
            duration: 0,
            ease: Power1.easeOut
        })

        titles.forEach((title, index) => {
            const el = document.querySelectorAll("span span")
            const delay = index * 0.08
            tl.to(el, {
                y: 0,
                duration: 1.5,
                ease: "cubic-text"
            },
                delay
            )
        })



        tl.to(heroInfiniteRef?.current, {
            marginLeft: 0,
            marginRight: 0,
            opacity: 1,
            ease: Power1.easeInOut
        }
            , 1.2

        )
            .from(crazytext?.current, {
                width: 0,
                duration: 1,
                ease: Power1.easeOut,
            },
                .1
            )

        return () => { };
    }, [])

    return (
        <div ref={hero} className='min-h-screen pt-[120px] pb-[90px] opacity-0'>
            <div className='h_container flex flex-col items-center  px-2 pb-[20vw]'>
                <h1 className='h_title relative w-full text-center text-[11vw] leading-[90%] uppercase font-light'>
                    <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                        <span className=" inline-block  translate-y-full pb-1.5 pt-6 will-change-transform ">
                            You&nbsp;
                        </span>
                    </span>
                    <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                        <span className="inline-block  translate-y-[200%] pb-1.5 pt-6 will-change-transform [&>svg]:w-[11vw] lg:[&>svg]:w-[6.9vw]">
                            <FlowerLogo />
                        </span>
                    </span>
                    <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                        <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                            &nbsp;Can
                        </span>
                    </span>
                    <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                        <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                            &nbsp;Only
                        </span>
                    </span>
                    <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                        <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                            Build&nbsp;
                        </span>
                    </span>
                    <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                        <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                            Brands&nbsp;
                        </span>
                    </span>
                </h1>
                <h1 className="h_title relative  w-full text-center text-[11vw] font-light uppercase leading-[90%] lg:text-[8.7vw] ">
                    <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                        <span className=" inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                            People&nbsp;
                        </span>
                    </span>
                    <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                        <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                            Love
                        </span>
                    </span>
                </h1>
                <h1 className="h_title relative w-full text-center text-[11vw] font-light uppercase leading-[90%] lg:text-[8.7vw] ">
                    <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                        <span className="font_aeonik inline-block  translate-y-full pb-1.5  pt-6  font-medium leading-[81%] text-orange will-change-transform text-orange-500 ">
                            By Loving
                        </span>
                    </span>
                    <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                        <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                            &nbsp;Your
                        </span>
                    </span>
                </h1>
                <h1 className="h_title relative flex w-full flex-col items-center justify-center text-center text-[11vw]  font-light uppercase leading-[90%] lg:flex-row lg:text-[8.7vw] ">
                    <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                        <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                            Audience
                        </span>
                    </span>
                    <div ref={heroInfiniteRef} className='absolute bottom-[-25vw] left-[35%] ml-10 -mr-10 h-8 w-40  rounded-full border-black border text-xs font-normal overflow-hidden uppercase lg:relative lg:left-8 lg:bottom-3 lg:right-[1vw] lg:h-14 lg:w-[16vw] lg:text-xl  lg:leading-10 opacity-0'>
                        <div className="group flex h-full cursor-pointer items-center whitespace-nowrap">
                            <span className=" group-hover:pause animate-loopL">Show Reel 2023© Show Reel 2023©&nbsp;</span>
                            <span className=" group-hover:pause animate-loopL">Show Reel 2023© Show Reel 2023©&nbsp;</span>
                        </div>
                    </div>
                    <div ref={crazytext} className='absolute bottom-[-12vh] left-[24vw] bg-purple-600 flex items-center justify-center rotate-[8deg] w-[800px] overflow-hidden'>
                        <div className='flex items-center justify-center px-6'>
                            <h1 className='text-white text-center mt-4 font-black w-[800px] overflow-hidden'>like crazy</h1>
                        </div>
                    </div>
                </h1>
            </div>
        </div>
    )
}

export default Hero