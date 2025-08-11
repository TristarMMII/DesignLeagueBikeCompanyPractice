import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function EcoboostSection() {
    return (
        <div className="relative bg-white py-30 px-10 flex items-center justify-center flex-col overflow-hidden">
            {/* Background text */}
            <div className="absolute inset-0 text-[20rem] leading-[0.8] font-normal select-none pointer-events-none">
                {Array.from({ length: 4 }).map((_, rowIndex) => (
                    <div
                        key={rowIndex}
                        className="whitespace-nowrap"
                        style={{
                            transform: `translateX(${(-20 * rowIndex) - 10}%)`
                        }}
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
            <div className="relative z-10 flex justify-center items-center w-full">

                {/* Orange box */}
                <div
                    className="absolute z-0 bg-[#FE610B] overflow-hidden"
                    style={{
                        transform: 'rotate(5deg)',
                    }}
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

                {/* Left arrow button */}
                <button
                    aria-label="Previous"
                    className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-[#FE610B] rounded-full w-25 h-25 flex justify-center items-center shadow-lg hover:bg-orange-600 transition"

                >
                    <FontAwesomeIcon size="xl" icon={faArrowLeft} />

                </button>

                {/* Right arrow button */}
                <button
                    aria-label="Next"
                    className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-[#FE610B] rounded-full w-25 h-25 flex justify-center items-center shadow-lg hover:bg-orange-600 transition"

                >
                    <FontAwesomeIcon size="xl" icon={faArrowRight} />
                </button>


            </div>
        </div>
    );
}
