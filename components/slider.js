import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { useStore } from "@/store";


export default function Slider() {

const { colorActive} = useStore();
console.log({colorActive} )
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    updated() {
      console.log("updated")
      
    }
  
  });

  useEffect(() => {
    instanceRef.current.update();
  },[colorActive])

  console.log(instanceRef);

  return (
    <div className="navigation-wrapper relative aspect-4/5">
      <div ref={sliderRef} className="keen-slider">
        {Object.keys(colorActive).length > 0 &&  colorActive.images.map((item, index) => {
          return (
            <div
              key={index}
              className={`keen-slider__slide flex justify-center items-center aspect-4/5`}
            >
              {
                <Image
                  src={item.imagen}
                  width={1350}
                  height={1080}
                  alt={item.imagen}
                  className=""
                ></Image>
              }
            </div>
          );
        })}
      </div>
      {loaded && instanceRef.current && (
        <>
          <Arrow
            left
            onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
            disabled={currentSlide === 0}
          />

          <Arrow
            onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
            // disabled={
            //   currentSlide ===
            //   instanceRef.current.track.details.slides.length - 1
            // }
          />
        </>
      )}

      {loaded && instanceRef.current && (
        <div className="dots absolute  left-2/4 right-2/4">
          {[
            ...Array(colorActive.images.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </div>
  );
}

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
