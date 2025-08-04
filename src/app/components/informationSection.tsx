import Image from 'next/image';

export default function InformationSection() {
    return (
        <div className="bg-black text-white py-30 px-10 flex items-center justify-center flex-col">
            <div className="text-4xl text-center">
                Leading the Way in <br /> Sustainable Transportation
            </div>

            <div className="bg-[#262626] mt-20 w-[95%] relative">
                <Image
                    src="/E-bike-light.svg"
                    alt="Ebike front light"
                    layout="responsive"
                    width={1600}
                    height={400}
                    priority
                />

                {/* Overlay Text */}
                <div className="absolute bottom-8 left-8">
                    <p className="text-4xl font-semibold pb-5">High-quality materials</p>
                    <p className="text-2xl max-w-xl text-neutral-400">
                        Premium materials and advanced construction techniques to ensure durability and a long lifespan
                    </p>
                </div>
            </div>
        </div>
    );
}
