import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const GallerySlice = ({slice}) => {

    const [swiperRef, setSwiperRef] = useState(null);

    const next = () => swiperRef.slideNext();
    const prev = () => swiperRef.slidePrev();

    return (
        <div className="px-4 sm:px-10 md:px-14 lg:px-24 py-6 md:py-20 space-y-14">
            <h1 className="text-6xl">{slice.primary.title[0].text}</h1>

            <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-5/6">
                    <Swiper
                        loop={true}
                        onSwiper={setSwiperRef}
                        breakpoints={{
                            640: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                            },
                            768: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                            },
                            1024: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                            },
                        }}
                    >
                        {slice.items.map((item, index) => {
                            return (
                                <SwiperSlide 
                                    key={index}
                                >
                                    <div className="relative bg-gradient-to-r from-orange-300 to-rose-300" style={{paddingTop: '64%'}}>
                                        <div
                                            className="absolute top-0 left-0 h-full w-full bg-cover bg-center bg-no-repeat"
                                            style={{backgroundImage: `url("${item.gallery_image.url}")`}}
                                        ></div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
                <div className="flex flex-col justify-end">
                    <div className="flex flex-row gap-4">
                        <div onClick={prev} className="group hover:bg-black duration-100 text-black hover:text-white cursor-pointer h-14 w-14 flex items-center justify-center rounded-full border-2 border-black">
                            <svg className="group-hover:scale-125 duration-300" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 12L3.64645 11.6464L3.29289 12L3.64645 12.3536L4 12ZM19 12.5C19.2761 12.5 19.5 12.2761 19.5 12C19.5 11.7239 19.2761 11.5 19 11.5V12.5ZM9.64645 5.64645L3.64645 11.6464L4.35355 12.3536L10.3536 6.35355L9.64645 5.64645ZM3.64645 12.3536L9.64645 18.3536L10.3536 17.6464L4.35355 11.6464L3.64645 12.3536ZM4 12.5H19V11.5H4V12.5Z" fill="currentColor"/>
                            </svg>
                        </div>
                        <div onClick={next} className="group hover:bg-black duration-100 text-black hover:text-white cursor-pointer h-14 w-14 flex items-center justify-center rounded-full border-2 border-black">
                            <svg className="group-hover:scale-125 duration-300" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 12L20.3536 11.6464L20.7071 12L20.3536 12.3536L20 12ZM5 12.5C4.72386 12.5 4.5 12.2761 4.5 12C4.5 11.7239 4.72386 11.5 5 11.5V12.5ZM14.3536 5.64645L20.3536 11.6464L19.6464 12.3536L13.6464 6.35355L14.3536 5.64645ZM20.3536 12.3536L14.3536 18.3536L13.6464 17.6464L19.6464 11.6464L20.3536 12.3536ZM20 12.5H5V11.5H20V12.5Z" fill="currentColor"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GallerySlice;