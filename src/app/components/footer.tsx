import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookF, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <footer className="bg-black text-white py-5 flex flex-col items-center">
            {/* top section */}
            <div className="pt-10 flex w-full justify-between items-start pl-20 pr-60 flex-col xl:flex-row">
                {/* left email section */}
                <div className="flex-col">
                    <p className="font-bold text-4xl">ReCycle</p>
                    <p className="pt-10 pb-5 text-lg">
                        Join our newsletter to stay up to date on features and releases.
                    </p>
                    <div>
                        <input
                            className="bg-white text-black p-3 sm:w-[70%] rounded-full"
                            placeholder="Enter your email"
                            type="text"
                        />
                        <button className=" mt-5 px-8 py-3 rounded-full border border-white md:mt-5 md:ml-0 lg:ml-10 lg:mt-0 xl:mt-5 xl:ml-0 2xl:mt-0  2xl:ml-10">Subscribe</button>
                    </div>
                    <p className="pt-5 max-w-2xl text-md">
                        By subscribing you agree to with our <span className="underline">Privacy Policy</span> and provide consent to recieve updates from our company.
                    </p>
                </div>

                {/* links wrapper — below on lg and smaller, right side on xl+ */}
                <div className="w-full mt-10 xl:mt-0 xl:w-auto flex flex-col gap-10 xl:flex-row xl:flex-1 xl:gap-40 xl:justify-between xl:pl-25 xl:pr-0 2xl:pl-50">

                    {/* Explore */}
                    <div className="flex-col">
                        <p className="font-bold text-lg pb-10">Explore</p>
                        <div className="flex flex-row flex-wrap gap-x-8 gap-y-3 xl:flex-col xl:gap-0 xl:space-y-5">
                            <a href="#">E-bikes</a>
                            <a href="#">Specs</a>
                            <a href="#">Our Impact</a>
                            <a href="#">Contact Us</a>
                        </div>
                    </div>

                    {/* Our Top Picks */}
                    <div className="flex-col">
                        <p className="font-bold text-lg pb-10">Our Top Picks</p>
                        <div className="flex flex-row flex-wrap gap-x-8 gap-y-3 xl:mr-10 2xl:mr-0 xl:flex-col xl:gap-0 xl:space-y-5">
                            <a href="#">Zoom</a>
                            <a href="#">EcoBoost</a>
                            <a href="#">Voltage</a>
                            <a href="#">PowerPedal</a>
                        </div>
                    </div>

                    {/* Follow Us */}
                    <div className="flex-col">
                        <p className="font-bold text-lg pb-10">Follow Us</p>
                        <div className="flex flex-row flex-wrap items-center gap-x-8 gap-y-3 xl:flex-col xl:items-start xl:gap-0 xl:space-y-5">
                            <a href="#" className="flex items-center gap-3">
                                <FontAwesomeIcon className="text-xl" icon={faFacebookF} /> Facebook
                            </a>
                            <a href="#" className="flex items-center gap-3">
                                <FontAwesomeIcon className="text-xl" icon={faInstagram} /> Instagram
                            </a>
                            <a href="#" className="flex items-center gap-3">
                                <FontAwesomeIcon className="text-xl" icon={faTwitter} /> Twitter
                            </a>
                            <a href="#" className="flex items-center gap-3">
                                <FontAwesomeIcon className="text-xl" icon={faLinkedin} /> LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Horizontal line (matches content width) */}
            <div className="w-full px-20">
                <hr className="border-t-2 border-white z-30 relative mt-20" />
            </div>

            {/* Privacy + Links row */}
            <div className="pt-5 sm:pt-10 pb-10 sm:pb-0 sm:text-lg flex flex-col sm:flex-row w-full justify-between items-center sm:px-20">
                <p>2021 Relume. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="underline">Privacy Policy</a>
                    <a href="#" className="underline">Terms of Service</a>
                    <a href="#" className="underline">Cookies Policy</a>
                </div>
            </div>

            {/* Big text */}
            <h1 className="text-[4rem] sm:text-[6.5rem] md:text-[9rem] lg:text-[12rem] xl:text-[16rem] 2xl:text-[22rem] text-white -mt-10">
                C<span className="italic">O</span>MMUTE
            </h1>
        </footer>
    );
}
