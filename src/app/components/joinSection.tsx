import Image from 'next/image';

export default function joinSection() {
    return (
        <div className="relative flex items-center justify-center flex-col overflow-hidden">
            {/* E-bike hand view orange bg dots - cropped to middle portion */}

            <div className='w-screen h-[1000px] z-10 overflow-hidden'>
                <Image
                    src="/Bike-orange-dots.svg"
                    alt="Ebike hand, with orange background dots"
                    fill
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center'
                    }}
                    priority
                />
            </div>

            {/* Overlayed text */}
            <h1 className="absolute top-5 left-20 text-[20rem] text-white z-10">
                J<span className="italic">O</span>IN
            </h1>

            {/* Horizontal line */}
            <hr className="w-[95%] border-t-2 border-white z-30 relative mt-20 mx-auto" />

            <p className="text-5xl z-30 text-white pb-2 max-w-sm self-start m-20">Join the ReCycle Revolution</p>

        </div>
    );
}