export default function Footer() {
    return (
        <footer className="bg-black text-white p-5 flex items-center justify-center flex-col ">

            {/* Horizontal line */}
            <hr className="w-[96%] border-t-2 border-white z-30 relative mt-20 mx-auto" />
            {/* min-h-screen */}
            <h1 className="text-[20rem] text-white">
                C<span className="italic">O</span>MMUTE
            </h1>
        </footer>
    );
}