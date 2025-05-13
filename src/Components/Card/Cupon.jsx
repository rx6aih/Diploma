import React from 'react';
import {Button, Card, CardFooter, Image} from "@heroui/react";
import like from "../../Images/Cupon/like.svg"
import dislike from "../../Images/Cupon/dislike.svg"

export default function Cupon({img, text ,textColor="white" , height=330, width=220, ref="/#"}) {
    return (
        <Card isFooterBlurred className="border-none hover:opacity-90 opacity-100" radius="lg">
            <a href={ref}>
                <Image
                    alt="Woman listing to music"
                    className="object-cover"
                    height={height}
                    src={img}
                    width={width}
                    isBlurred={true}
                />
            </a>

            <CardFooter className="justify-between flex flex-col before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className={`text-tiny mb-1 text-${textColor}`}>{text}</p>
                <div className={"flex gap-8"}>
                    <Button
                        className={`text-tiny bg-[#3dff4b]/20`}
                        color="default"
                        radius="lg"
                        size="sm"
                        variant="flat"
                    >
                        <img src={like} className={"w-6"}/>
                    </Button>
                    <Button
                        className={`text-tiny bg-[#ff553b]/30`}
                        color="default"
                        radius="lg"
                        size="sm"
                        variant="flat"
                    >
                        <img src={dislike} className={"w-6"}/>
                    </Button>
                </div>

            </CardFooter>
        </Card>
    );
}