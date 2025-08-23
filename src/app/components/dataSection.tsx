import Image from 'next/image';

export default function DataSection() {
    return (
        <>
            <div className="bg-white py-20 overflow-hidden ">
                <div className="flex justify-between items-start px-10 flex-col md:flex-row">
                    {/* Left: Heading */}
                    <h2 className="text-[3rem]/[3.5rem] pl-10 ">
                        Positive Impact of <br /> ReCycle E-Bikes
                    </h2>

                    {/* Right: Paragraph */}
                    <p className="text-lg  max-w-2xl mr-0 md:mr-50 pl-10 lg:pl-0 pt-5 lg:pt-0">
                        Not only are ReCycle e-bikes good for the environment, they are also beneficial
                        <br />for your health and well-being. Electric-assisted biking can provide a
                        low-impact cardiovascular workout and help reduce stress.
                    </p>
                </div>

                {/* Horizontal line */}
                <div className="w-full px-20">
                    <hr className="border-t-2 border-gray-300 z-30 relative mt-20" />
                </div>

                {/* percent section */}
                <div className="flex justify-end pr-10 mr-10 lg:mr-50">
                    {/* left line */}
                    <div className="border-l-2 border-gray-300 flex max-[600px]:flex-col">
                        <div className="pl-40 max-[600px]:pl-6">
                            <div className="md:text-[10rem] text-[5rem]">25%</div>
                            <p className="md:w-80 w-40">
                                Treduction in commuter transportation and carbon emissions
                            </p>
                        </div>

                        <div className="-mr-15 ml-15 max-[600px]:-mr-0 max-[600px]:ml-0 max-[600px]:mt-6">
                            <div className="pl-40 max-[600px]:pl-6">
                                <div className="md:text-[10rem] text-[5rem]">30%</div>
                                <p className="md:w-80 w-40">
                                    Treduction in commuter transportation and carbon emissions
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RECYCLE Big Section */}
                <div className="overflow-hidden whitespace-nowrap mt-10 mb-20 md:mb-0">
                    <div className="animate-scroll-text inline-block">
                        <span className="text-[20rem] mx-10">
                            RECYCLE<span className="">&reg;</span> - RECYCLE<span className="">&reg;</span> - RECYCLE<span className="">&reg;</span> - RECYCLE<span className="">&reg;</span> - RECYCLE<span className="">&reg;</span> -
                        </span>
                    </div>
                </div>
            </div>

            {/* Wheel Image Section  */}
            <div className="w-screen -mt-60">
                <Image
                    src="/E-bike-wheel.svg"
                    alt="Ebike wheel"
                    layout="responsive"
                    width={1600}
                    height={400}
                    priority
                />
            </div>
        </>
    );
}
