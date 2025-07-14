import Image from 'next/image';

export default function Navbar() {


    return (
        <header className="bg-neutral-800 p-5 flex items-center justify-between">

            <div className="ml-15 text-white text-4xl flex items-center justify-between">
                <Image className="mr-3 mt-3" src="/logo.png" alt="Company Logo" width={45} height={45} />
                Recycle
                <span className="text-2xl align-top">&reg;</span>
            </div>

            <div className="text-white space-x-15 text-lg pr-5">
                <button>E-bikes</button>
                <button>Specs</button>
                <button>Our Impact</button>
            </div>

            <button className="text-white bg-black p-3 px-5 mr-15 rounded-full">Order now</button>


        </header>
    );
}
