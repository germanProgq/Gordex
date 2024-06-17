import { useLayoutEffect, useState } from "react"

const useIsMobile = (size) => {
    const [isMobile, setIsMobile] = useState(false);

    useLayoutEffect(() => {
        setIsMobile(window.innerWidth <= size);
        const updateSize = () => {
            setIsMobile(window.innerWidth <= size);
        };

        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize)
    }, []);


    return isMobile;
}

export default useIsMobile;