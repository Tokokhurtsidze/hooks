import { use, useEffect, useState } from "react"

const useWindowResize = () => {
const [width , setWidth] = useState(window.innerWidth)
const [height , setheight] = useState(window.innerHeight)

useEffect(()=>{
    const handleResize = ()=>{
setWidth(window.innerWidth)
setheight(window.innerHeight)
    }
   window.addEventListener('resize',handleResize)
   return()=> window.removeEventListener('resize',handleResize)
},[])
return{width,height}
}
export default useWindowResize