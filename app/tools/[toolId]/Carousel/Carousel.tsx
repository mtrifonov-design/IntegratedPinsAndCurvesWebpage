"use client";
import React, { useEffect } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import {  useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image';

type PropType = {
  slides: string[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const [isMobile, setIsMobile] = React.useState(false);
  useEffect(() => {
      const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
      };
      handleResize(); // Set initial state
      window.addEventListener('resize', handleResize);
      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, [])

  const leftNeedsShadow = !prevBtnDisabled;
  const rightNeedsShadow = !nextBtnDisabled;
  const bothNeedShadow = leftNeedsShadow && rightNeedsShadow;

  let shadow = '';
  if (bothNeedShadow) {
    shadow = 'inset 0px 0px 50px rgba(0, 0, 0, 0.5)';
  } else if (leftNeedsShadow) {
    shadow = 'inset 25px 0px 50px rgba(0, 0, 0, 0.5)';
  } else if (rightNeedsShadow) {
    shadow = 'inset -25px 0px 50px rgba(0, 0, 0, 0.5)';
  } else {
    shadow = 'none';
  }

  return (

    <div style={{
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '20px',

    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        gap: '20px',
      }}>
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <div style={{
          overflow: 'hidden',
          position: 'relative',
          zIndex:-1,
        }} ref={emblaRef}>
          <div style={{
            display: 'flex',
            gap: '20px',
          }}>
            {slides.map((index) => (
              <div style={{
                width: isMobile ? '300px' : '600px',
                height: isMobile ? '200px' : '400px',
                flex: `0 0 ${isMobile ? '300px' : '600px'}`,
                borderRadius: 'var(--borderRadiusSmall)',
                minWidth: 0,
                overflow: 'hidden',
                backgroundColor: 'lightgray',
              }} key={index}>
                <Image
                  src={index}
                  alt={`Slide ${index}`}
                  width={isMobile ? 300 : 600}
                  height={isMobile ? 200 : 400}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',

                  }}
                />
              </div>
            ))}
          </div>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            boxShadow: shadow,
            width: '100%',
            height: '150%',
            transform: 'translateY(-25%)',
            pointerEvents: 'none',
          }}></div>
        </div>
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>

      <div>
        <div>
          {scrollSnaps.map((_, index) => (
            <div key={index} style={{
              display: 'inline-block',
              width: '15px',
              height: '15px',
              borderRadius: '50%',
              backgroundColor: selectedIndex === index ? 'var(--gray5)' : 'black',
              border: '2px solid var(--gray5)',
              margin: '0 5px',
              cursor: 'pointer',
            }}
            onClick={() => onDotButtonClick(index)}
            >
              
            </div>
            // <DotButton
            //   key={index}
            //   onClick={() => onDotButtonClick(index)}
            //   style={{
            //     width: '20px',
            //     height: '20px',
            //     borderRadius: 'var(--borderRadiusSmall)',
            //     backgroundColor: selectedIndex === index ? 'black' : 'lightgray',

            //   }}
            // />
          ))}
        </div>
      </div>
    </div>

  )
}

export default EmblaCarousel
