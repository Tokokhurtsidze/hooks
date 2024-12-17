import { useState, useEffect } from "react";

const useDetectDevice = () => {
  const [device, setDevice] = useState('');

  useEffect(() => {
    const checkDevice = () => {
      if (window.innerWidth <= 600) {
        setDevice('mobile');
        
      } else if (window.innerWidth <= 1024) {
        setDevice('tablet');
      } else {
        setDevice('desktop');
      }
    };

    checkDevice(); 
    window.addEventListener("resize", checkDevice); 

    return () => {
      window.removeEventListener("resize", checkDevice); 
    };
  }, []);

  return device;
};

export default useDetectDevice;
