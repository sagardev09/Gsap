"use client"
import React, { useState, useEffect } from 'react';
import { CSSPlugin, gsap, Expo } from 'gsap';
gsap.registerPlugin(CSSPlugin);

const Preloader = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const count = setInterval(() => {
            setCounter((prevCounter) => {
                if (prevCounter < 100) {
                    return prevCounter + 1;
                } else {
                    clearInterval(count);
                    reveal();
                    return 100; // Make sure the counter stays at 100 when done
                }
            });
        }, 25);

        return () => {
            clearInterval(count); // Cleanup on unmount
        };
    }, []);

    const reveal = () => {
        const tl = gsap.timeline({
            onComplete: () => {
                console.log('completed');
            },
        });

        tl.to('.follow', {
            width: '100%',
            duration: 1.5,
            delay: 0.2,
            ease: Expo.easeInOut,
        })
            .to('.hidee', {
                opacity: 0,
                duration: 0.1,
            })
            .to('.hidee', {
                display: 'none',
                duration: 0.1,
            })
            .to('.follow', {
                height: '100%',
                duration: 0.8,
                delay: 0.1,
                ease: Expo.easeInOut,
            })
            .to('.content', {
                width: '100%',
                duration: 0.8,
                ease: Expo.easeInOut,
            }).to(".lines", {
                opacity: 1,
                duration: 0.6,
                ease: Expo.easeInOut,
                stagger: 0.15
            })
    };

    return (
        <div className="w-[100vw] h-[100vh] text-black relative text-center">
            <div className="h-[100%] w-[100%] bg-[#121212] flex justify-center items-center absolute top-0">
                <div className="follow absolute bg-[#f48049] h-[2px] w-[0%] left-0 z-[2]" style={{ width: counter + "%" }}></div>
                <div
                    className="hidee absolute h-[2px] w-0 left-0 bg-[#fff] transition ease-out duration-200"
                    style={{ width: "100% " }}
                ></div>
                <h1 className="hidee absolute text-9xl text-white font-semibold -translate-y-12 -translate-x-20 z-20">
                    {counter}%
                </h1>
            </div>
            <div className=" content h-[100%] w-[0] absolute top-0 left-0 bg-[#121212] z-20 flex flex-col overflow-hidden text-white justify-center items-center">
                <p className='text-4xl tracking-wider font-medium my-1 opacity-0 lines'>Hey i am Sagar dabas,front end developer,  </p>
                <p className='text-4xl tracking-wider font-medium my-1 opacity-0 lines'>
                    2nd year computer science student , future web developer
                </p>
                <p className='text-4xl tracking-wider font-medium my-1 opacity-0 lines'>
                    carrying experience  of website developing and website design.
                </p>
                <p className='text-4xl tracking-wider font-medium my-1 opacity-0 lines'>
                    My passion for web space  development bought me to SGT University where i am working on my bachelor  degree.
                </p>
            </div>
        </div>
    );
};

export default Preloader;
