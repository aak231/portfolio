import { useActiveSectionContext } from "@/context/activeSectionContext";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function useSectionInView(){
    const { ref, inView } = useInView({
        threshold: 0.6,
      });
      const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
    
      useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
          setActiveSection("About");
        }
      }, [inView, setActiveSection, timeOfLastClick]);
    
}