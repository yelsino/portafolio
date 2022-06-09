import "./Slicer.css";
import svgFigma from "../../Assets/figma.svg";
import svgJavasScript from "../../Assets/javascript.svg";
import svgJWT from "../../Assets/jwt-icon.svg";
import svgNode from "../../Assets/nodejs-icon.svg";
import svgPostman from "../../Assets/postman-icon.svg";
import svgSocket from "../../Assets/socket.io.svg";
import svgTailwind from "../../Assets/tailwindcss-icon.svg";
import { useCallback, useEffect, useState } from "react";
import {  motion} from "framer-motion";




const Slider = () => {
  const [images, setImg] = useState([
    svgFigma,
    svgJavasScript,
    svgJWT,
    svgNode,
    svgPostman,
    svgSocket,
    svgTailwind,
  ]);

  const functionarraymove = useCallback(
    (arr, fromIndex, toIndex) => {
      var element = arr[fromIndex];
      arr.splice(fromIndex, 1);
      arr.splice(toIndex, 0, element);
      setImg([...arr]);
    },
    [setImg]
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      functionarraymove(images, 6, 0);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [images]);


    

  return (
    <div>
    

      <div className="flex gap-x-5 overflow-hidden ">
        {images.map((v, i) => {
          if (i <= 3) {
            return <motion.img
            initial={{ scale: 0.5}}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeInOut", type: "spring" }}
            key={v}
            className={`w-10 h-10`}
            src={v}
          />;
          }
          
        })}
      </div>

     
    </div>
  );
};

export default Slider;
