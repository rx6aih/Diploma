import React from 'react';
import svgLogo from "../Images/Pages/Home/Group3.png"
import wing from "../Images/Pages/Home/Wing.png"
import heroCard from "../Images/Pages/Home/Hero-card.png"
import fries from "../Images/Pages/Home/fries.png"
import sloganLogo from "../Images/Pages/Home/Hero-logo.webp"
import kfcImage from "../Images/Pages/Home/kfcImage.jpg"
import pizzaImage from "../Images/Pages/Home/pizzaImage.png"
import {Button, Card, Image} from "@heroui/react";
import BlurCard from "../Components/UI/Card/BlurCard.jsx";

const Home = () => {
    return (
        <div className={"flex flex-col justify-center"}>
            <div className={"h-[38.7em] flex-col"}>
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
            <div className={"flex justify-center mb-10"}>
                <p className={"text-[80px]"}>АГГРЕГАТОР КУПОНОВ</p>
            </div>

            <div className={"flex justify-center mr-8 "}>
                <div>
                    <div className={"flex justify-center flex-row mt-20"}>
                        <img className={"-scale-x-100 w-30 h-32"} src={wing}/>
                        <p className={"text-black text-[52px] text-center w-[50%] mt-auto mb-auto mb-8"}>Кушай много Кушай вкусно</p>
                        <img className={"w-30 h-32"} src={wing}/>
                    </div>
                    <p className={"text-black text-[20px] text-center w-[60%] mt-10 m-auto"}>Здесь собраны самые свежие и актуальные купоны ресроранов быстрого питания. Забирай <p className={"underline"}>прямо сейчас!</p></p>
                </div>
            </div>

            <div className={"flex justify-center"}>
                <div className={"flex flex-row w-[85em] h-[24em] bg-[#0A090F] rounded-3xl mt-20 mb-10"}>
                    <img className={"h-[24em]"} src={heroCard}/>
                    <div className={"flex flex-col mt-12 mb-10 ml-16"}>
                        <div className={"flex flex-row gap-2"}>
                            <p className={"text-white text-[44px]"}>получи купон</p>
                            <img src={fries} className={"w-12 h-14"}/>
                        </div>
                        <div className={"w-[50em] mt-4"}>
                            <p className={"text-white text-[17px] font-thin"}>Купон купон купон купон купон купон купоннннннн купон купоннннннн купон купоннн купон купон купонннн купонннн купон купон купон купон купон купон купон</p>
                        </div>
                        <div className={"flex flex-row gap-12 text-white mt-6"}>
                            <p>👉Купоннн</p>
                            <p>👉Купоннн купонн</p>
                            <p>👉Купоннн купонн купон</p>
                        </div>
                        <Button className={"mt-14 text-[16px] w-64 h-12 rounded-3xl bg-gradient-to-r from-amber-200 to-yellow-400"}>
                            Лучшие купоны за всю историю
                        </Button>
                    </div>
                </div>
            </div>
            <div className={"flex flex-col justify-center w-[70%] m-auto mb-10 mt-6"}>
                <div className={"flex flex-row"}>
                    <div className={"flex justify-center mb-6 bg-[#ffb03d] rounded-3xl w-[10em]"}>
                        <p className={"font-bold text-[36px]"}>Список наших партнёров</p>
                    </div>
                    <div className={"relative flex translate-y-24 -translate-x-[31em]"}>
                        <p className={"absolute top-[3em] mt-auto mb-10 ml-12 text-[#efddc3] text-[30px] font-extrabold"}>#рестораны#пицца#бургеры#роллы#фастфуд#рестораны#пицца#бургеры#роллы#рестораны#пицца#бургеры</p>
                        <p className={"absolute top-[4.5em] mt-auto mb-10 ml-12 text-[#efddc3] text-[30px] font-extrabold"}>ллы#рестораны#рестораны#пицца#бургеры#роллы#фастфуд#рестораны#пицца#бургеры#пицца#бургеры#ро</p>
                        <p className={"absolute top-[6em] mt-auto mb-10 ml-12 text-[#efddc3] text-[30px] font-extrabold"}>тораны#пицца#бургеры#роллы#фастфуд#рестораны#пицца#бургеры#роллы#рестораны#пицца#бургеры#рол</p>
                        <p className={"absolute top-[7.5em] mt-auto mb-10 ml-12 text-[#efddc3] text-[30px] font-extrabold"}>#роллы#фастфуд##рестораны#пицца#бургерырестораны#пицца#бургеры#роллы#рестораны#пицца#бургеры</p>
                        <p className={"absolute top-[9em] mt-auto mb-10 ml-12 text-[#efddc3] text-[30px] font-extrabold"}>бургеры#роллы#фастфуд#рестораны#пицца#бургеры#роллы#рестораны#пицца#бургеры#рестораны#пицца#</p>
                        <p className={"absolute top-[10.5em] mt-auto mb-10 ml-12 text-[#efddc3] text-[30px] font-extrabold"}>рестораны#пицца#бургеры#роллы#фастфуд#рестораны#пицца#бургеры#роллы#рестораны#пицца#бургеры#</p>
                        <p className={"absolute top-[12em] mt-auto mb-10 ml-12 text-[#efddc3] text-[30px] font-extrabold"}>#пицца#бургеры#роллы#фастфуд#рестораны#пицца#рестораны#роллы#рестораны#пицца#бургеры#рестора</p>
                        <p className={"absolute top-[13.5em] mt-auto mb-10 ml-12 text-[#efddc3] text-[30px] font-extrabold"}>а#бургеры#роллы#фастфуд#рестораны#пицца#бургеры#роллы#рестораны#пицца#бургеры#рестораны#пицц</p>
                    </div>
                </div>

                <div className={"flex flex-row gap-8 bg-[#ffb03d] rounded-3xl p-4 "}>
                    <BlurCard img={sloganLogo} text={"Text"} buttonText={"Click!"}></BlurCard>
                    <BlurCard img={sloganLogo} text={"Text"} buttonText={"Click!"}></BlurCard>
                    <BlurCard img={sloganLogo} text={"Text"} buttonText={"Click!"}></BlurCard>
                    <BlurCard img={sloganLogo} text={"Text"} buttonText={"Click!"}></BlurCard>
                    <BlurCard img={sloganLogo} text={"Text"} buttonText={"Click!"}></BlurCard>
                    <BlurCard img={sloganLogo} text={"Text"} buttonText={"Click!"}></BlurCard>
                </div>
            </div>
        <div className={"flex flex-row mt-20"}>
            <Image src={kfcImage} width={300} className={"rotate-[25deg]"}/>
            <Image src={pizzaImage} width={300} className={"rotate-[20deg]"}/>
            <div className={"flex flex-col justify-center text-center gap-10 mb-28 ml-auto mr-auto"}>
                <p className={"font-extrabold text-[20px]"}>Присоединяйся к нашей компании!</p>
                <p>asdasdads</p>
                <p>asdasdads</p>
            </div>
            <Image src={pizzaImage} width={300} className={"rotate-[20deg]"}/>
            <Image src={pizzaImage} width={300} className={"rotate-[20deg]"}/>

        </div>
        </div>

    );
};

export default Home;