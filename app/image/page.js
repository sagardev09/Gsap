"use client"

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap/all';
import { CSSRulePlugin } from 'gsap/all';
import { Power2 } from 'gsap';
import bmw from "@/public/bmw.webp"

const ImagePage = () => {
    let ImageContainer = useRef(null);
    let image = useRef(null);
    let redline = useRef(null)
    let darkblueline = useRef(null)
    let blueline = useRef(null)
    let title = useRef(null)

    const tl = gsap.timeline();

    useEffect(() => {
        tl.to(ImageContainer, {
            duration: 0,
            css: {
                visibility: 'visible',

            },
        }, "a").to('.img-container-overlay', {
            duration: 1,
            width: '0%',
            ease: Power2.easeOut,
        }, "a").from(image,
            {
                duration: 1,
                scale: 1.6,
                ease: Power2.easeOut,
                delay: -1
            }
            , "b").from(
                redline,
                {
                    duration: 1,
                    top: "-1000px",
                    ease: Power2.easeInOut,
                }, "a")
            .from(
                darkblueline,
                {
                    duration: 1,
                    top: "-1000px",
                    ease: Power2.easeInOut,
                    delay: 0.2
                }, "a")
            .from(
                blueline,
                {
                    duration: 1,
                    top: "-1000px",
                    ease: Power2.easeInOut,
                    delay: 0.3
                }, "a")
            .from(
                title,
                {
                    duration: 1,
                    ease: Power2.easeOut,
                    scale: 5.8,
                    opacity: 0

                }
                , "a"
            )

    }, []);

    return (
        <main ref={(el) => {
            ImageContainer = el
        }} className='relative invisible '>
            <div

                className="min-h-screen w-[1380px] ml-[350px] my-0 flex items-center   "
            >
                <div className="w-[1380px] h-[960px] relative overflow-hidden img-container">
                    <Image
                        ref={(el) => {
                            image = el;
                        }}
                        src={bmw}
                        alt=""
                        className="w-[1380px] absolute"
                    />
                    <div className="img-container-overlay"></div>
                </div>
            </div>
            <h1 ref={el => { title = el }} className='text-8xl font-black absolute top-[40%] left-0 -rotate-90'>BMW</h1>
            <div className='z-20 '>
                <div ref={el => { redline = el }} className='w-full bg-red-600 h-[50px]  -rotate-90 absolute top-[100px] left-[-700px]'></div>
                <div ref={el => { darkblueline = el }} className='w-full bg-blue-800 h-[50px] -rotate-90 absolute top-[70px] left-[-650px]'></div>
                <div ref={el => { blueline = el }} className='w-full bg-blue-600 h-[50px] -rotate-90 absolute top-[50px] left-[-600px]'></div>
            </div>
        </main>
    );
};

export default ImagePage;
