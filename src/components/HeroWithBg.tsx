import { dmserif } from "@/fonts"

type HeroWithBgProps = {
    title: string
    BgImage: string
}
export default function HeroWithBg(props: HeroWithBgProps) {
    return (
        <div className='flex flex-col flex-items justify-center text-white relative py-16 overflow-hidden'>
            <img src={props.BgImage} className='absolute min-w-full min-h-full max-w-full -z-10' />

            <div className="flex gap-4 items-center text-white divide-x-2 px-4 md:px-16">
                <h1 className={`${dmserif.className} text-2xl md:text-3xl lg:text-4xl`}>{props.title}</h1>
            </div>
        </div>
    )
}