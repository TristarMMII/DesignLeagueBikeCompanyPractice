import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function EcoboostSection() {
    return (
        <div className="relative bg-white py-30 px-10 flex items-center justify-center flex-col overflow-hidden">
            {/* Background text */}
            <div className="absolute inset-0 text-[15rem] sm:text-[20rem] leading-[0.8] font-normal select-none pointer-events-none">

                {Array.from({ length: 5 }).map((_, rowIndex) => (
                    <div
                        key={rowIndex}
                        className="whitespace-nowrap"
                        style={{ transform: `translateX(${(-20 * rowIndex) - 10}%)` }}
                    >
                        {Array.from({ length: 20 }).map((_, i) => (
                            <span key={i} className="mr-6">
                                ECOBOOST - ECOBOOST
                            </span>
                        ))}
                    </div>
                ))}
            </div>

            {/* Foreground content */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center w-full justify-start gap-20 lg:justify-center lg:gap-0">

                {/* Orange box */}
                <div
                    className="absolute z-0 bg-[#FE610B] overflow-hidden"
                    style={{ transform: 'rotate(5deg)' }}
                >
                    <Image
                        src="/girl-on-bike.svg"
                        alt=""
                        width={600}
                        height={600}
                        priority
                        className="invisible"
                    />
                </div>

                {/* Background skewed copy */}
                <div className="absolute z-0" style={{ transform: 'rotate(-3deg)' }}>
                    <Image
                        src="/hands-on-bike.svg"
                        alt=""
                        width={675}
                        height={675}
                        priority
                    />
                </div>

                {/* Foreground image */}
                <div className="relative z-10">
                    <Image
                        src="/girl-on-bike.svg"
                        alt="two people biking together"
                        width={600}
                        height={600}
                        priority
                    />
                </div>

                {/* Arrow buttons below image on small and med, overlaid on large+ */}
                <div className="flex w-full justify-center gap-20 lg:contents">
                    {/* Left */}
                    <button
                        aria-label="Previous"
                        className="bg-[#FE610B] rounded-full w-25 h-25 flex justify-center items-center shadow-lg hover:bg-orange-600 transition
                       lg:absolute lg:left-10 lg:top-1/2 lg:-translate-y-1/2"
                    >
                        <FontAwesomeIcon size="xl" icon={faArrowLeft} />
                    </button>

                    {/* Right */}
                    <button
                        aria-label="Next"
                        className="bg-[#FE610B] rounded-full w-25 h-25 flex justify-center items-center shadow-lg hover:bg-orange-600 transition
                       lg:absolute lg:right-10 lg:top-1/2 lg:-translate-y-1/2"
                    >
                        <FontAwesomeIcon size="xl" icon={faArrowRight} />
                    </button>
                </div>
            </div>
        </div>
    );
}
