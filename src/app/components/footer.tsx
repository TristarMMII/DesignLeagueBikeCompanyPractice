import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookF, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <footer className="bg-black text-white py-5 flex flex-col items-center">
            {/* top section */}
            <div className="pt-10 flex w-full justify-between items-center pl-20 pr-60">
                {/* left */}
                <div className="flex-col">
                    <p className="font-bold text-4xl">ReCycle</p>
                    <p className="pt-10 pb-5 text-lg">Join our newsletter to stay up to date on features and releases.</p>
                    <div>
                        <input className="bg-white text-black p-3 w-[70%] rounded-full" placeholder="Enter your email" type="text" />
                        <button className="ml-10 px-8 py-3 rounded-full border border-white">Subscribe</button>
                    </div>
                    <p className="pt-5 max-w-2xl text-md">By subscribing you agree to with our <span className="underline">Privacy Policy</span> and provide consent to recieve updates from our company.</p>
                </div>
                {/* links */}
                <div className="flex-col">
                    <p className="font-bold text-lg">Explore</p>
                    <div className="flex flex-col">
                        <a href="#" className="pt-5">E-bikes</a>
                        <a href="#" className="pt-5">Specs</a>
                        <a href="#" className="pt-5">Our Impact</a>
                        <a href="#" className="pt-5">Contact Us</a>
                    </div>
                </div>

                <div className="flex-col">
                    <p className="font-bold text-lg">Our Top Picks</p>
                    <div className="flex flex-col">
                        <a href="#" className="pt-5">Zoom</a>
                        <a href="#" className="pt-5">EcoBoost</a>
                        <a href="#" className="pt-5">Voltage</a>
                        <a href="#" className="pt-5">PowerPedal</a>
                    </div>
                </div>

                <div className="flex-col">
                    <p className="font-bold text-lg">Follow Us</p>
                    <div className="flex flex-col">
                        <a href="#" className="pt-5 flex items-center gap-3">
                            <FontAwesomeIcon className="text-xl" icon={faFacebookF} /> Facebook
                        </a>
                        <a href="#" className="pt-5 flex items-center gap-3">
                            <FontAwesomeIcon className="text-xl" icon={faInstagram} /> Instagram
                        </a>
                        <a href="#" className="pt-5 flex items-center gap-3">
                            <FontAwesomeIcon className="text-xl" icon={faTwitter} /> Twitter
                        </a>
                        <a href="#" className="pt-5 flex items-center gap-3">
                            <FontAwesomeIcon className="text-xl" icon={faLinkedin} /> LinkedIn
                        </a>
                    </div>
                </div>



            </div>

            {/* Horizontal line (matches content width) */}
            <div className="w-full px-20">
                <hr className="border-t-2 border-white z-30 relative mt-20" />
            </div>

            {/* Privacy + Links row */}
            <div className="pt-10 text-lg flex w-full justify-between items-center px-20">
                {/* Left text */}
                <p>2021 Relume. All rights reserved.</p>

                {/* Right links */}
                <div className="flex gap-6">
                    <a href="#" className="underline">Privacy Policy</a>
                    <a href="#" className="underline">Terms of Service</a>
                    <a href="#" className="underline">Cookies Policy</a>
                </div>
            </div>

            {/* Big text */}
            <h1 className="text-[22rem] text-white -mt-10">
                C<span className="italic">O</span>MMUTE
            </h1>
        </footer>
    );
}
