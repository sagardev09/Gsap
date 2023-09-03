export default function debounce(fn, ms = 300) {
    let timeoutid;

    return function (...args) {
        clearTimeout(timeoutid)
        timeoutid = setTimeout(() =>
            fn.apply(args)
            , ms);
    }
}