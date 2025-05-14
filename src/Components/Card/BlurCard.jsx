import {Card, CardFooter, Image, Button} from "@heroui/react";
export default function BlurCard({img, text , buttonText,textColor="white", href="/#" , height=330, width=220}) {
    return (
        <Card isFooterBlurred className="border-none" radius="lg">
            <Image
                alt="Woman listing to music"
                className="object-cover"
                height={height}
                src={img}
                width={width}
                isBlurred={true}
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className={`text-tiny  text-${textColor}`}>{text}</p>
                <Button
                    className={`text-tiny bg-black/20 text-${textColor}`}
                    color="default"
                    radius="lg"
                    size="sm"
                    variant="flat"
                >
                    <a className={"w-full h-full flex items-center justify-center"} href={href}>
                        {buttonText}
                    </a>
                </Button>
            </CardFooter>
        </Card>
    );
}