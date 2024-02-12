import React, { useState, useEffect } from "react";

function SliderHomePage() {
    const [currentIndexSlider, setCurrentIndexSlider] = useState(0);
    const [sliderData, setSliderData] = useState([]);

    const previousSlide = () => {
        const isFirstSlide = currentIndexSlider === 0;
        const nexIndex = isFirstSlide ? sliderData.length - 1 : currentIndexSlider - 1;
        setCurrentIndexSlider(nexIndex);
    };

    return;

    <div className="max-w-[1400px] h-[780] w-full m-auto py-16 px-4 relative">
        <div className="hidden">
            <div className="hidden group-hover:black absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 test-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BschevronCompacteft onClick={previousSlide} size={30} />
            </div>
        </div>
    </div>;
}

export default SliderHomePage;
