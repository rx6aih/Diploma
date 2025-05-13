import React from 'react';
import kitty from "../../../Images/Profile/kitty4.jpg"
const Profile = () => {
    return (
        <div className={"flex  justify-center w-full h-full"}>
            <div className={"absolute overflow-hidden flex justify-center items-center -top-16 w-60 h-60 bg-white rounded-full shadow-[0px_13px_25px_0px_rgba(0,_0,_0,_0.15)]"}>
                <img src={kitty} className={"w-[19em] mt-6"}/>
            </div>
            <div className={"flex flex-col"}>
                <div className={"flex justify-center w-[49em] mt-52"}>
                    <p className={"text-[25px]"}>Your name</p>
                </div>
                <div className={"flex flex-row"}>
                    <div className={"flex flex-col mt-2"}>
                        <p className={"text-[26px] font-bold"}>О себе</p>
                        <div className={"bg-zinc-400/10 text-wrap p-4 w-[20.6em] h-60 mt-4 rounded-xl"}>
                            <p className={""}>#купоны#купоны#купоны#купоны#купон ы#купоны#купоны#купоны#купоны#купо ны#купоны#купоны#купоны#купоны#куп оны</p>
                        </div>
                    </div>
                    <div className={"flex flex-col ml-20 w-full mt-2"}>
                        <p className={"font-bold text-[26px] text-end mr-3"}>Статистика</p>
                        <div className={"flex flex-col"}>
                            <div className={"bg-zinc-400/10 text-wrap p-4 w-[23em] h-30 mt-4 rounded-xl flex gap-3 flex-col flex-wrap"}>
                                <p className={"text-[20px]"}>Лайки: 10</p>
                                <p className={"text-[20px]"}>Дизлайки: 10</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Profile;