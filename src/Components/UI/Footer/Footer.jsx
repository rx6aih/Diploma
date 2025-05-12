import React from 'react';
import gitFooter from "../../../Images/Pages/Home/gitFooter.svg";
import telegramFooter from "../../../Images/Pages/Home/telegram.png";
import vkFooter from "../../../Images/Pages/Home/vk.svg";

const Footer = () => {
    return (
        <div className={"flex justify-center mt-40 h-[10em] overflow-hidden"}>
            <div className={"w-[85%] flex justify-center bg-gradient-to-tr from-red-500 to-orange-500 p-1 pb-2 rounded-3xl shadow-2xl"}>
                <div className={"bg-white w-full h-full rounded-3xl p-4 flex flex-row gap-8"}>
                    <a href={"#"} className={"flex flex-col items-center"}>
                        <img src={gitFooter} className={"w-[3.2em]"}></img>
                        <p>github</p>
                    </a>
                    <a href={"#"} className={"flex flex-col items-center"}>
                        <img src={telegramFooter} className={"w-[3.2em]"}></img>
                        <p>telegram</p>
                    </a>
                    <a href={"#"} className={"flex flex-col items-center"}>
                        <img src={vkFooter} className={"w-[3.2em]"}></img>
                        <p>VKontakte</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;