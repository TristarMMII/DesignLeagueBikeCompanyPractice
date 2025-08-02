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
            <hr className="border-t-2 border-gray-300 mt-20 mx-10" />
            {/* percent section */}
            <div className="flex justify-end pr-10 mr-50">
                {/* left line */}
                <div className="border-l-2 border-gray-300 flex gap-20  ">
                    <div>
                        <div className="text-[10rem] pl-25">25%</div>
                        <p>Treduction in commuter transportation and carbon emissions</p>
                    </div>

                    <div className="text-[10rem] -mr-20">30%</div>
                </div>
            </div>

        </div>
    );
}
