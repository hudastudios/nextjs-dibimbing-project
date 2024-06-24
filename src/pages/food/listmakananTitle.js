const ListmakananTitle = () => {
    return (
        <div
            className="self-stretch flex flex-col items-start justify-start gap-[29px] max-w-full"
        >
            <div
                className="overflow-hidden flex flex-row items-start justify-start"
            >
                <div
                    className="overflow-hidden flex flex-row items-start justify-start py-0 pr-10 pl-0"
                >
                    <h1
                        className="m-0 relative text-inherit leading-[72px] font-bold font-inherit mq450:text-[36px] mq450:leading-[43px] mq1025:text-[48px] mq1025:leading-[58px]"
                    >
                        List Makanan
                    </h1>
                </div>
            </div>
            <div
                className="self-stretch h-px flex flex-row items-start justify-start max-w-full"
            >
                <div
                    className="self-stretch flex-1 relative bg-gainsboro-100 max-w-full"
                ></div>
            </div>
        </div>
    );
}

export default ListmakananTitle;