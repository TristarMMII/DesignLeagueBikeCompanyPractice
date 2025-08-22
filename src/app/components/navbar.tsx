import Image from "next/image";

export default function Navbar() {
    return (
        <header
            className="background flex flex-col items-center gap-3 p-3
                 md:flex-row md:justify-around md:gap-6 md:p-4
                 lg:justify-between lg:p-5"
        >
            {/* Logo */}
            <div className="flex items-center text-white text-2xl md:text-3xl lg:text-4xl md:ml-5 lg:ml-15">
                <Image
                    className="mr-2 md:mr-2 lg:mr-3 lg:mt-3"
                    src="/logo.png"
                    alt="Company Logo"
                    width={45}
                    height={45}
                />
                Recycle
                <span className="text-lg md:text-xl lg:text-2xl align-top">&reg;</span>
            </div>

            {/* Nav buttons */}
            <div
                className="flex w-full justify-center text-white space-x-6 text-sm
                   md:w-auto md:justify-center md:space-x-8 md:text-base
                   lg:justify-end lg:space-x-15 lg:text-lg lg:pr-5"
            >
                <button>E-bikes</button>
                <button>Specs</button>
                <button>Our Impact</button>
            </div>

            {/* CTA */}
            <button
                className="text-white bg-black py-2 px-4 rounded-full
                   md:py-2 md:px-5 md:rounded-xl
                   lg:p-3 lg:px-5 lg:mr-15 lg:rounded-full"
            >
                Order now
            </button>
        </header>
    );
}
