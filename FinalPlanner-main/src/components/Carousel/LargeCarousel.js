import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Keyboard, Pagination, } from 'swiper';

import './carousel.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Card from "./Card";



import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function LargeCarousel()  {



  useEffect(() => {
    const keyDownHandler = event => {
      if (event.key === 'Enter') {
        event.preventDefault();
        runApp(document.querySelector('.swiper-slide-active').childNodes[0].title);
      }
    };
      document.addEventListener('keydown', keyDownHandler);
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

 

    
    const navigate = useNavigate();
    const data = useSelector(state => state.data.application)

    const runApp = (item) => {
      navigate(`/${item}`)
    }   

    return (<div className="App">

      <Swiper
        spaceBetween={140}
        slidesPerView={3}
        navigation={true}
        modules={[Navigation, Keyboard, Pagination]}
        keyboard={{
          enabled: true,
        }}
        pagination={{clickable: true,}}
        loop={true}
        centeredSlides={true}
      >
        
        {data.map((slide) => {
          return  <SwiperSlide key={slide.image} >
                       <Card image={slide.image} path={slide.path} title={slide.title} onClick={() => runApp(slide.path)}/>
                   </SwiperSlide>
            
        })}
   
      </Swiper>

    </div>
    );
  };