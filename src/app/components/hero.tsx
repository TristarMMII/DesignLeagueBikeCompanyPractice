import Image from 'next/image';

export default function Hero() {
    return (
        <div className="relative w-screen h-screen background-fade ">
            {/* Background image */}
            <Image
                src="/E-bike-hero.png"
                alt="Ebike"
                layout="fill"
                objectFit="cover"
                priority
            />

            {/* Text content over image */}
            <div className="relative z-10 ml-20 pt-20">
                <h1 className="text-[3rem] text-white">
                    Revolutionize Your Commute <br /> with ReCycle E-Bikes
                </h1>

                <button className="text-black bg-white p-3 px-5 mt-3 rounded-full">
                    Order now
                </button>

            </div>

            {/* Centered horizontally, bottom aligned vertically */}
            <h1 className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-[20rem] text-white z-0 leading-none pointer-events-none select-none">
                C<span className="italic">O</span>MMUTE
            </h1>
        </div>
    );
}
