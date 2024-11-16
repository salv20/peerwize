import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay, Navigation, EffectFade } from "swiper/modules";

const slidesComponents = [
  {
    src: "book.png",
    category: "Course",
    title: "Conducting Interview for better research enviro...",
    rating: 4,
    ratingValue: "4.3 (2)",
  },
  {
    src: "tutor.png",
    category: "Course",
    title: "Conducting Interview for better research enviro...",
    rating: 4,
    ratingValue: "4.3 (2)",
  },
  {
    src: "student.png",
    category: "Course",
    title: "Conducting Interview for better research enviro...",
    rating: 4,
    ratingValue: "4.3 (2)",
  },
  {
    src: "student.png",
    category: "Course",
    title: "Conducting Interview for better research enviro...",
    rating: 4,
    ratingValue: "4.3 (2)",
  },
];

const DashboardSlider = () => {
  return (
    <div className="w-[95%] lg:w-[956px] mx-auto">
      <Swiper
        breakpoints={{
          900: {
            slidesPerView: 3.2,
            spaceBetween: 10,
          },
          560: {
            slidesPerView: 2.2,
            spaceBetween: 10,
          },
          300: {
            slidesPerView: 1.2,
            spaceBetween: 5,
          },
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectFade, Pagination, Navigation]}
      >
        {slidesComponents.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="py-[10px] mb-[30px] font-roboto text-[#141414] "
          >
            <div className="grid gap-[8px]">
              <img src={slide.src} alt="" className="w-full" />

              <div className="grid gap-[8px] px-[16px]">
                <h1 className="text-[11px] font-[700]"> {slide.category}</h1>
                <p className="text-[16px] font-[400]"> {slide.title}</p>

                <div className="flex items-center justify-between">
                  <img src="/ratingstar.png" alt="" />
                  {slide.ratingValue}
                </div>
                <button className="text-center w-full bg-[#37BBCA] h-[36px] rounded-[4px] text-[#FFFFFF] text-[13px]">
                  View Course
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DashboardSlider;
