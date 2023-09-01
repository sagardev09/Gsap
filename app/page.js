"use client"
import Image from 'next/image'
import { TweenMax, Power3 } from "gsap"
import { useRef, useEffect, useState } from 'react'

export default function Home() {

  let redcircle = useRef(null)
  let yellowcircle = useRef(null)
  let bluecircle = useRef(null)

  const [togglecircle, settogglecircle] = useState(false)

  useEffect(() => {
    TweenMax.staggerFrom(
      [redcircle, yellowcircle, bluecircle],
      .8,
      {
        opacity: 0,
        x: 100,
        ease: Power3.easeOut,
      },
      .2
    )
  }, [])
  const handleExpand = () => {
    TweenMax.to(
      yellowcircle,
      .8,
      {
        height: 200,
        width: 200,
        ease: Power3.easeOut
      }
    )
    settogglecircle(true)
  }

  const handleShrink = () => {
    TweenMax.to(
      yellowcircle,
      .8,
      {
        height: 100,
        width: 100,
        ease: Power3.easeOut
      }
    )
    settogglecircle(false)
  }


  return (
    <main className='flex flex-col justify-center items-center min-h-screen w-full'>
      <div>
        <div ref={el => { redcircle = el }} className='h-[100px] w-[100px] bg-red-600 rounded-full my-4 '></div>
        <div onClick={togglecircle ? handleShrink : handleExpand} ref={el => { yellowcircle = el }} className='h-[100px] w-[100px] bg-yellow-400 rounded-full my-4'></div>
        <div ref={el => { bluecircle = el }} className='h-[100px] w-[100px] bg-blue-600 rounded-full my-4'></div>
      </div>
    </main>
  )
}
