import React from 'react';
import svgLogo from "../Images/Pages/Home/Group3.png"
import heroLogo from "../Images/Pages/Home/Hero-logo.webp"
import cupon from "../Images/Pages/Home/coupon.svg"
import wing from "../Images/Pages/Home/Wing.png"

const Home = () => {
    return (
        <div className={"flex flex-col justify-center"}>
            <div className={"h-[47em]"}>
                <div className={"static flex justify-center"}>
                    <div className={"absolute flex flex-row w-[65em] h-[45em] top-[0em] bg-[#0A090F] rounded-3xl overflow-hidden"}>
                        <div className={"flex justify-center items-center m-auto mt-80 ml-1"}>
                            <p className={"text-white font-bold text-9xl"}>
                                FAST FOOD CUPONS
                            </p>
                        </div>
                        <img src={svgLogo} className={"ml-auto"}/>
                    </div>
                </div>
            </div>

            <div className={"flex justify-center"}>
                <div>
                    <div className={"flex justify-center flex-row mr-2 mt-20"}>
                        <img className={"-scale-x-100 w-30 h-32"} src={wing}/>
                        <p className={"text-black text-[52px] text-center w-[50%] mt-auto mb-auto mb-8"}>Кушай много Кушай вкусно</p>
                        <img className={"w-30 h-32"} src={wing}/>
                    </div>
                    <p className={"text-black text-[20px] text-center w-[60%] mt-10 m-auto"}>Здесь собраны самые свежие и актуальные купоны ресроранов быстрого питания. Забирай <p className={"underline"}>прямо сейчас!</p></p>
                </div>
            </div>
        </div>

    );
};

export default Home;