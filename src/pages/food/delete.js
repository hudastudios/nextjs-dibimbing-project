import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function DeleteMakanan() {
    const [formData, setFormData] = useState({ name: '', description: '', ingredients: '', imageUrl: '' })
    const router = useRouter();
    const onSubmit = async (event) => {
        console.log(formData);
        event.preventDefault();
        const resp = await axios.delete(`https://api-bootcamp.do.dibimbing.id/api/v1/delete-food/${router.query.id}`,
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
        if (resp.data.code === '200') router.push('/');
    }

    return (
        <div className="pl-[1.25rem] pr-[1.25rem]">
            <form onSubmit={onSubmit}>
                <button type="submit"
                    className="cursor-pointer py-[11px] px-[47px] bg-[transparent] rounded flex flex-row items-start justify-start border-[1px] border-solid border-fill-black hover:bg-darkslategray-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100"
                >
                    <div
                        className="relative text-lg tracking-[-0.2px] font-medium font-px-regular text-fill-black text-center inline-block min-w-[69px]"
                    >
                        DELETE
                    </div>
                </button>
            </form>
        </div>
    )
}