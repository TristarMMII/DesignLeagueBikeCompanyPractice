import Image from 'next/image';

export default function commuteBigSection() {
    return (
        <div className="relative bg-[#FE610B] flex items-center justify-center flex-col overflow-hidden">
            {/* E-bike top view */}

            <div className='w-screen z-10 '>
                <Image
                    src="/E-bike-top-view.svg"
                    alt="Ebike top view"
                    layout="responsive"
                    width={1600}
                    height={400}
                    priority
                />
            </div>

            {/* Overlayed text */}
            <h1 className="absolute bottom-[33%] left-1/2 transform -translate-x-1/2 text-[4rem] sm:text-[6.5rem] md:text-[9rem] lg:text-[12rem] xl:text-[16rem] 2xl:text-[20rem] text-white z-0 leading-none pointer-events-none select-none">
                C<span className="italic">O</span>MMUTE
            </h1>



        </div>
    );
}
