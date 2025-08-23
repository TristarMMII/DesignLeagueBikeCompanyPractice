import Image from 'next/image';

export default function InformationSection() {
    return (
        <div className="bg-black text-white py-30 px-10 flex items-center justify-center flex-col">
            <div className="text-5xl text-center">
                Leading the Way in <br /> Sustainable Transportation
            </div>

            {/* E-bike light section */}
            <div className="bg-[#262626] mt-30 w-[95%] relative">
                <Image
                    src="/E-bike-light.svg"
                    alt="Ebike front light"
                    layout="responsive"
                    width={1600}
                    height={400}
                    priority
                />

                {/* Text*/}
                <div className="mt-4 mb-4 px-4 text-center max-w-xl md:mt-0 md:mb-0 md:px-0 md:text-left md:absolute md:bottom-15 md:left-15">
                    <p className="text-3xl md:text-4xl font-semibold pb-2">High-quality materials</p>
                    <p className="text-xl md:text-2xl text-neutral-400">
                        Premium materials and advanced construction techniques to ensure durability and a long lifespan
                    </p>
                </div>
            </div>

            {/* Row of 2 image sections side by side */}
            <div className="flex flex-col md:flex-row mt-20 w-[95%] gap-5">
                {/* E-bike map */}
                <div className="w-full md:w-1/2">
                    <div className="bg-[#262626]">
                        <Image
                            src="/E-bike-map.svg"
                            alt="E bike map view"
                            layout="responsive"
                            width={1600}
                            height={400}
                            priority
                        />
                    </div>
                    <div className="pt-4">
                        <p className="text-4xl font-semibold pb-4">High-quality materials</p>
                        <p className="text-2xl text-neutral-400 md:pb-0 pb-15">
                            Premium materials and advanced construction techniques to ensure durability and a long lifespan.
                        </p>
                    </div>
                </div>

                {/* Bike together */}
                <div className="w-full md:w-1/2">
                    <div className="bg-[#262626]">
                        <Image
                            src="/Bike-together.svg"
                            alt="two people biking together"
                            layout="responsive"
                            width={1600}
                            height={400}
                            priority
                        />
                    </div>
                    <div className="pt-4">
                        <p className="text-4xl font-semibold pb-4">Sustainable manufacturing practices</p>
                        <p className="text-2xl text-neutral-400">
                            We have adopted environmentally-friendly manufacturing practices and source all our materials sustainably.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
