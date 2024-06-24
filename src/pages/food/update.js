import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function UpdateResep({ defaultFormData }) {
    const router = useRouter();
    const [formData, setFormData] = useState(defaultFormData)
    const onSubmit = async (event) => {

        console.log(formData)
        event.preventDefault();
        const resp = await axios.post(`https://api-bootcamp.do.dibimbing.id/api/v1/update-food/${router.query.id}`,
            {
                name: formData.name,
                description: formData.description,
                ingredients: (formData.ingredients).split(','),
                imageUrl: formData.imageUrl
            },
            {
                headers: {
                    apiKey: 'w05KkI9AWhKxzvPFtXotUva-',
                    "Content-Type": 'application/json',
                    Authorization:
                        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q'
                },
            }
        );
        console.log(resp);
        if (resp.data.code === '200') router.reload();
    }
    return (
        <form onSubmit={onSubmit}
            className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full text-left text-xs text-fill-black font-px-regular"
        >
            <div
                className="w-[1108px] flex flex-col items-start justify-start gap-[22px] max-w-full"
            >
                <div className="relative leading-[15px] inline-block min-w-[35px]">
                    NAME
                </div>
                <div
                    className="self-stretch h-[46px] flex flex-col items-start justify-start pt-0 px-0 pb-2.5 box-border gap-[11px] min-w-[250px]"
                >
                    <div
                        className="w-[61.5px] h-[23px] flex flex-row items-start justify-start py-0 px-[11px] box-border"
                    >
                        <input
                            value={formData.name}
                            onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
                            className="w-[1000px] [border:none] [outline:none] font-px-regular text-sm bg-[transparent] h-[23px] relative leading-[23px] text-fill-dark-gray text-left inline-block"
                            placeholder='Nama Makanan'
                            type="text"
                        />
                    </div>
                    <div className="w-[1108px] h-0.5 relative bg-fill-light-gray"></div>
                </div>
                <div
                    className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2.5 gap-[22px]"
                >
                    <div className="relative leading-[15px] inline-block min-w-[80px]">
                        DESCRIPTION
                    </div>
                    <div
                        className="self-stretch flex flex-col items-start justify-start gap-[11px] min-w-[250px]"
                    >
                        <div
                            className="flex flex-row items-start justify-start py-0 px-[11px]"
                        >
                            <input
                                value={formData.description}
                                onChange={(event) => setFormData((prev) => ({ ...prev, description: event.target.value }))}
                                className="w-[1000px] [border:none] [outline:none] font-px-regular text-sm bg-[transparent] relative leading-[23px] text-fill-dark-gray text-left inline-block min-w-[102px]"
                                placeholder='Deskripsi Makanan'
                                type="text"
                            />
                        </div>
                        <div
                            className="self-stretch h-0.5 relative bg-fill-light-gray"
                        ></div>
                    </div>
                </div>
                <div
                    className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2.5 box-border gap-[22px] min-w-[250px] max-w-full"
                >
                    <div className="relative leading-[15px] inline-block min-w-[80px]">
                        INGREDIENTS
                    </div>
                    <div
                        className="self-stretch flex flex-col items-start justify-start gap-[11px] max-w-full"
                    >
                        <div
                            className="flex flex-row items-start justify-start py-0 px-[11px] box-border max-w-full"
                        >
                            <input
                                value={formData.ingredients}
                                onChange={(event) => setFormData((prev) => ({ ...prev, ingredients: event.target.value }))}
                                className="w-[1000px] [border:none] [outline:none] font-px-regular text-sm bg-[transparent] relative leading-[23px] text-fill-dark-gray text-left inline-block min-w-[61px] max-w-full"
                                placeholder='Bahan Makanan'
                                type="text"
                            />
                        </div>
                        <div
                            className="self-stretch h-0.5 relative bg-fill-light-gray"
                        ></div>
                    </div>
                </div>
                <div
                    className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2.5 box-border gap-[22px] max-w-full"
                >
                    <div className="relative leading-[15px] inline-block min-w-[65px]">
                        IMAGE URL
                    </div>
                    <div
                        className="self-stretch flex flex-col items-start justify-start gap-[11px] min-w-[250px] max-w-full text-right text-fill-primary"
                    >
                        <div
                            className="flex flex-row items-start justify-start py-0 px-[11px] box-border max-w-full"
                        >
                            <input
                                value={formData.imageUrl}
                                onChange={(event) => setFormData((prev) => ({ ...prev, imageUrl: event.target.value }))}
                                className="w-[1000px] [border:none] [outline:none] font-px-regular text-sm bg-[transparent] relative leading-[23px] text-fill-dark-gray text-left inline-block min-w-[57px] max-w-full"
                                placeholder='Link Foto Makanan'
                                type="text"
                            />
                        </div>
                        <div
                            className="self-stretch flex flex-col items-end justify-start gap-[8px]"
                        >
                            <div
                                className="self-stretch h-0.5 relative bg-fill-light-gray"
                            ></div>
                        </div>
                    </div>
                </div>
                <button
                    type="submit"
                    className="cursor-pointer py-[11px] px-[47px] bg-[transparent] rounded flex flex-row items-start justify-start border-[1px] border-solid border-fill-black hover:bg-darkslategray-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100"
                >
                    <div
                        className="relative text-lg tracking-[-0.2px] font-medium font-px-regular text-fill-black text-center inline-block min-w-[69px]"
                    >
                        SUBMIT
                    </div>
                </button>
            </div>
        </form>
    );
};