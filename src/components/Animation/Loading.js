import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import loadingAnimation from "../../animations/12510-orange-loading.json";

export default function Loading() {
  const animation = useRef(null);

  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: animation.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: loadingAnimation,
    });
    return () => instance.destroy();
  }, []);

  return (
    <div className="absolute w-full h-full flex items-center justify-center">
      <div className="" ref={animation}></div>
    </div>
  );
}
