export default function DataSection() {
    return (
        <div className="bg-white py-20 px-10">
            <div className="flex justify-between items-start">
                {/* Left: Heading */}
                <h2 className="text-[3rem]/[3.5rem] pl-10">
                    Positive Impact of <br /> ReCycle E-Bikes
                </h2>

                {/* Right: Paragraph */}
                <p className="text-lg max-w-2xl mr-50">
                    Not only are ReCycle e-bikes good for the environment, they are also beneficial
                    <br />for your health and well-being. Electric-assisted biking can provide a
                    low-impact cardiovascular workout and help reduce stress.
                </p>

            </div>

            {/* Horizontal line */}
            <hr className="border-t border-gray-300 mt-4" />

            {/* Vertical line */}
            {/* <div className="absolute left-[33%] top-full mt-0.5 w-px h-16 bg-gray-300"></div> */}
        </div>
    );
}
