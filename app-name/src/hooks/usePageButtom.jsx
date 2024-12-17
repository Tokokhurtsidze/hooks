import { useEffect, useState } from "react";

const usePageButtom = () => {
  const [bottom, setBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {

      const isBottom =
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.scrollHeight;

      setBottom(isBottom); 
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll); 
    };
  }, []);

  return bottom;
};

export default usePageButtom;

