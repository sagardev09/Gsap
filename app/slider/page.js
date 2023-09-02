"use client"
import React from 'react'
import img1 from "@/public/img1.avif"
import img2 from "@/public/img2.avif"
import img3 from "@/public/img3.avif"
import img4 from "@/public/img4.avif"
import img5 from "@/public/img5.avif"
import img6 from "@/public/img6.avif"
import img7 from "@/public/img7.avif"
import img8 from "@/public/img8.avif"
import img9 from "@/public/img9.avif"
import Image from 'next/image'
import { gsap, Power2 } from 'gsap'
import { useEffect, useRef } from 'react'

const Slider = () => {


    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".img",
                scrub: true,
                markers: true

            }
        }).to(
            ".img",
            {
                stagger: .2,
                y: -700,
                scrub: true
            }
        )
    }, [])



    return (
        <>
            <h1>so sick</h1>

            <section>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </section>

            <section>
                <div class="img"></div>
                <div class="img"></div>
                <div class="img"></div>
                <div class="img"></div>
                <div class="img"></div>
                <div class="img"></div>
                <div class="img"></div>
                <div class="img"></div>
                <div class="img"></div>
            </section>

            <section></section>
        </>
    )
}

export default Slider