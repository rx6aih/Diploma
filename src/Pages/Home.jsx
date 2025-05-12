import React from 'react';
import svgLogo from "../Images/Pages/Home/Group3.png"
import wing from "../Images/Pages/Home/Wing.png"
import heroCard from "../Images/Pages/Home/Hero-card.png"
import fries from "../Images/Pages/Home/fries.png"
import sloganLogo from "../Images/Pages/Home/Hero-logo.webp"
import kfcImage from "../Images/Pages/Home/kfcImage.jpg"
import pizzaImage from "../Images/Pages/Home/pizzaImage.png"
import pizzaImage2 from "../Images/Pages/Home/dominos1.jpg"
import macdonalds from "../Images/Pages/Home/macdonalds.webp"
import pizzaImag3 from "../Images/Pages/Home/pizzaImage3.jpg"
import kfcRestaurant from "../Images/Pages/Home/kfcRestaurant.jpg"
import macRestaurant from "../Images/Pages/Home/macdonaldsRestaurant.jpg"
import gitFooter from "../Images/Pages/Home/gitFooter.svg"
import telegramFooter from "../Images/Pages/Home/telegram.png"
import vkFooter from "../Images/Pages/Home/vk.svg"
import {Button, Card, Chip, Image} from "@heroui/react";
import BlurCard from "../Components/Card/BlurCard.jsx";

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
                        <Button className={"mt-14 text-[16px] w-72 h-12 rounded-3xl bg-gradient-to-r from-amber-200 to-yellow-400"}>
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
                        <p className={"absolute top-[3em] mt-auto mb-10 ml-12 text-[#efddc3] text-[30px] font-extrabold"}>#рестораны#пицца#бургеры#роллы#фастфуд#рестораны#пицца#бургеры#роллы#рестораны#пицца#бургеры#макдон</p>
                        <p className={"absolute top-[4.5em] mt-auto mb-10 ml-12 text-[#efddc3] text-[30px] font-extrabold"}>ллы#рестораны#рестораны#пицца#бургеры#роллы#фастфуд#рестораны#пицца#бургеры#пицца#бургеры#роллы#кфс</p>
                        <p className={"absolute top-[6em] mt-auto mb-10 ml-12 text-[#efddc3] text-[30px] font-extrabold"}>тораны#пицца#бургеры#роллы#фастфуд#рестораны#пицца#бургеры#роллы#рестораны#пицца#бургеры#ролл#бурге</p>
                        <p className={"absolute top-[7.5em] mt-auto mb-10 ml-12 text-[#efddc3] text-[30px] font-extrabold"}>#роллы#фастфуд##рестораны#пицца#бургерырестораны#пицца#бургеры#роллы#рестораны#пицца#бургеры#кфс#ма</p>
                        <p className={"absolute top-[9em] mt-auto mb-10 ml-12 text-[#efddc3] text-[30px] font-extrabold"}>бургеры#роллы#фастфуд#рестораны#пицца#бургеры#роллы#рестораны#пицца#бургеры#рестораны#пицца#роллы#б</p>
                        <p className={"absolute top-[10.5em] mt-auto mb-10 ml-12 text-[#efddc3] text-[30px] font-extrabold"}>рестораны#пицца#бургеры#роллы#фастфуд#рестораны#пицца#бургеры#роллы#рестораны#пицца#бургеры##пицца#</p>
                        <p className={"absolute top-[12em] mt-auto mb-10 ml-12 text-[#efddc3] text-[30px] font-extrabold"}>#пицца#бургеры#роллы#фастфуд#рестораны#пицца#рестораны#роллы#рестораны#пицца#бургеры#рестора#рестора</p>
                        <p className={"absolute top-[13.5em] mt-auto mb-10 ml-12 text-[#efddc3] text-[30px] font-extrabold"}>а#бургеры#роллы#фастфуд#рестораны#пицца#бургеры#роллы#рестораны#пицца#бургеры#рестораны#пицца#рестор</p>
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
            <Image src={kfcImage} width={350} className={"rotate-[25deg] mr-[100em]"}/>
            <Image src={pizzaImage} width={300} className={"rotate-[20deg] mr-[10em]"}/>
            <div className={"flex flex-col justify-center text-center gap-10 mb-28 mr-[4em]"}>
                <Chip className={"text-white font-extrabold text-[42px] p-24 pb-[3em] bg-gradient-to-r from-red-500 to-orange-500 shadow-[10px_10px_15px_0px_rgba(0,_0,_0,_0.2)]"}>Присоединяйся к нам!
                    <p className={"text-[27px] mt-4 mb-2"}>Стань частью сети партнёров</p>
                    <p className={"text-[24px] "}>Увеличивай выручку благодаря купонам</p></Chip>

            </div>
            <Image src={pizzaImage2} width={200} className={"rotate-[-20deg] -translate-x-[2em]"}/>
            <Image src={macdonalds} width={400} className={"rotate-[28deg] translate-x-4"}/>
            <div className={"overflow-hidden"}>
                <Image src={pizzaImag3} width={200} height={200} className={"rotate-[2deg]"}/>

            </div>
        </div>
            <div className={"flex justify-center mt-28"}>
                <div className={"flex flex-row w-[90%] mb-10 gap-16 border-solid border-2 border-[#e3e3e3] p-8 shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1)] rounded-xl"}>
                    <div className={"w-[22em]"}>
                        <p className={"text-black text-[27px] font-extrabold"}>Получи<span className={"text-lime-600"}> выгоду</span> здесь и сейчас
                        </p>
                        <p className={"text-black text-[16px] font-medium mt-8"}>Здесь собраны самые вкусныерестораны быстрого питания с купонами, доступными каждому.
                        Ежедневные обновления и самые горячие скидки ждут вас!</p>
                        <Button className={"mt-4 bg-gradient-to-r from-lime-300 to-lime-500"}>Перейти к купонам</Button>
                    </div>
                    <div className={"flex gap-10"}>
                        <BlurCard img={kfcRestaurant} height={400} width={700} text={"KFC"} buttonText={"Перейти"}></BlurCard>
                        <BlurCard img={macRestaurant} text={"MACDONALDS"} height={400} width={600} buttonText={"Перейти"}></BlurCard>
                    </div>
                </div>
            </div>


        </div>

    );
};

export default Home;