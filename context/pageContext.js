"use client"
import {
    useContext,
    useRef,
    useMemo,
    useState,
    useEffect,
    useLayoutEffect,
    createContext
}
    from "react"
import Lenis from "@studio-freight/lenis"
import debounce from "@/utils/debounce"

const PageContext = createContext({
    lenis: null
})

export const PageProvider = ({ children }) => {
    const [lenis, setlenis] = useState()

    const reqIdref = useRef(null)

    useLayoutEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: "vertical",
            gestureDirection: "vertical",
            smooth: true,
            smoothTouch: true,
            touchMultiplier: 2,
        })

        let lastheight = 0
        let hidenav = false
        let isScrolled = false

        lenis.on("scroll", ({ scroll }) => {

            debounce(() => (lastheight = scroll))()

            if (lastheight < scroll && scroll > 80 && !hidenav) {
                document.body.classList.add("hide_header")
                hidenav = true
            }
            if (lastheight >= scroll && scroll > 80 && hidenav) {
                document.body.classList.remove("hide_header")
                hidenav = false
            }
            if (lastheight < scroll && scroll > 120 && !isScrolled) {
                document.body.classList.add("scrolled")
                isScrolled = true
            }
            if (lastheight >= scroll && scroll < 120 && isScrolled) {
                document.body.classList.remove("scrolled")
                isScrolled = false
            }

        })


        setlenis(lenis)
        return () => {
            lenis.destroy()
            setlenis(null)
        }
    }, [])

    useEffect(() => {

        const animate = (time) => {
            lenis?.raf(time)
            reqIdref.current = requestAnimationFrame(animate)
        }
        reqIdref.current = requestAnimationFrame(animate)
        return () => {
            cancelAnimationFrame(reqIdref.current)
        }

    }, [lenis])

    const memoedvalue = useMemo(
        () => ({
            lenis
        }), []
    )

    return (
        <PageContext.Provider value={memoedvalue}>{children}</PageContext.Provider>
    )

}


export default function usePage() {
    return useContext(PageContext)
}