import Link from "next/link";

function Header() {
    return (
        <header
            className="self-stretch flex flex-row items-start justify-center py-[35px] px-5 box-border sticky top-[0] z-[99] max-w-full text-center text-base text-fill-black font-px-regular"
        >
            <div
                className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-fill-white"
            ></div>
            <div
                className="w-[1110px] overflow-hidden shrink-0 flex flex-row items-start justify-between gap-[20px] max-w-full z-[1]"
            >
                <img
                    className="h-[50px] w-[161px] relative"
                    loading="lazy"
                    alt=""
                    src="/logo.svg"
                />
                <div
                    className="w-[526px] flex flex-col items-center justify-start pt-[13px] px-0 pb-0 box-border max-w-full "
                >
                    <div
                        className="flex flex-row items-start justify-between gap-[40px] max-w-full"
                    >
                        <Link className="no-underline" href='/'>
                            <div className=" flex flex-row items-start justify-start gap-[4px]">
                                <div
                                    className=" text-black relative leading-[24px] font-medium text-[inherit] inline-block min-w-[84px]"
                                >List Makanan </div>
                                <div
                                    className="flex flex-col items-start justify-start pt-1 px-0 pb-0"
                                >
                                    <div className="w-4 h-4 relative">
                                        <div
                                            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gainsboro opacity-[0] mix-blend-normal"
                                        ></div>
                                        <img
                                            className="absolute h-[33.13%] w-[58.13%] top-[33.13%] right-[21.25%] bottom-[33.75%] left-[20.63%] max-w-full overflow-hidden max-h-full z-[1]"
                                            alt=""
                                            src="/shape.svg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link className="no-underline" href="/food/tambahresep">
                            <div className="flex flex-row items-start justify-start gap-[4px]">
                                <div
                                    className="[text-decoration:none] text-black relative leading-[24px] font-medium text-[inherit] inline-block min-w-[95px] whitespace-nowrap"
                                >Tambah Resep</div>
                                <div
                                    className="flex flex-col items-start justify-start pt-1 px-0 pb-0"
                                >
                                    <div className="w-4 h-4 relative">
                                        <div
                                            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gainsboro opacity-[0] mix-blend-normal"
                                        ></div>
                                        <img
                                            className="absolute h-[33.13%] w-[58.13%] top-[33.13%] right-[21.25%] bottom-[33.75%] left-[20.63%] max-w-full overflow-hidden max-h-full z-[1]"
                                            alt=""
                                            src="/shape.svg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div
                    className="w-24 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border"
                >
                    <div
                        className="self-stretch overflow-hidden flex flex-row items-start justify-between gap-[20px]"
                    >
                        <img
                            className="h-8 w-8 relative object-cover min-h-[32px]"
                            loading="lazy"
                            alt=""
                            src="/feathericonsearch@2x.png"
                        />

                        <img
                            className="h-8 w-8 relative object-cover min-h-[32px]"
                            loading="lazy"
                            alt=""
                            src="/avatar32px@2x.png"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
