export default function Footer() {
    return (
        <footer className="bg-black text-white py-5 flex flex-col items-center">
            {/* top section */}
            <div className="pt-10 text-lg flex w-full justify-between items-center px-20">
                <div className="flex-col">
                    <p className="font-bold text-4xl">ReCycle</p>
                    <p className="pt-10 pb-5">Join our newsletter to stay up to date on features and releases.</p>
                    <p className="font-bold text-4xl">ReCycle</p>
                    <p className="font-bold text-4xl">ReCycle</p>
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
