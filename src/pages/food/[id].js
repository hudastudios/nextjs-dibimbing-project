import axios from "axios";
import Header from "./header";
import Footer from "./footer";
import DeleteMakanan from "./delete";
import UpdateResep from "./update";


export async function getServerSideProps(context) {
    const resp = await axios.get(`https://api-bootcamp.do.dibimbing.id/api/v1/foods/${context.params.id}`, {
        headers: { apiKey: "w05KkI9AWhKxzvPFtXotUva-" }
    });
    const data = resp.data.data;
    console.log(resp.data);
    return {
        props: {
            food: data,
            name: data.name,
            description: data.description,
            image: data.imageUrl,
            ingredients: data.ingredients,
        }
    }
}

export default function FoodDetail({ food, name, description, image, ingredients }) {
    return (
        <div>
            <div
                className="w-full h-[2884px] relative bg-fill-white flex flex-row items-start justify-start tracking-[normal] leading-[normal] mq1025:h-auto mq1025:min-h-[2884]"
            >
                <div
                    className="w-full !m-[0] absolute h-full top-[0px] right-[0px] bottom-[0px] left-[0px] flex flex-col items-start justify-start gap-[78px] max-w-full mq750:gap-[39px] mq450:gap-[19px]"
                >
                    <Header />
                    <section
                        className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-41xl text-fill-black font-px-h2"
                    >
                        <div
                            className="w-[1110px] flex flex-col items-start justify-start gap-[14px] max-w-full"
                        >
                            <h1
                                className="m-0 w-[950px] relative text-inherit leading-[72px] font-bold font-inherit inline-block max-w-full mq450:text-17xl mq450:leading-[43px] mq1025:text-29xl mq1025:leading-[58px] capitalize"
                            >
                                {name}
                            </h1>
                            <div
                                className="self-stretch h-px flex flex-row items-start justify-start max-w-full"
                            >
                                <div
                                    className="self-stretch flex-1 relative bg-fill-light-gray max-w-full"
                                ></div>
                            </div>
                            <div
                                className="w-[824px] relative text-lg tracking-[-0.2px] leading-[28px] font-px-regular inline-block max-w-full"
                            >
                                {description}
                            </div>
                        </div>
                    </section>
                    <section
                        className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full"
                    >
                        <img
                            className="w-[1110px] relative max-h-full overflow-hidden shrink-0 object-cover max-w-full"
                            loading="lazy"
                            alt=""
                            src={image}
                        />
                    </section>
                    <section
                        className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-lg text-fill-black font-px-regular"
                    >
                        <div
                            className="w-[1109px] flex flex-row items-start justify-between max-w-full gap-[20px] mq1025:flex-wrap mq1025:justify-center"
                        >
                            <div
                                className="flex flex-col items-start justify-start gap-[25px] max-w-full"
                            >
                                <h2
                                    className="m-0 w-[196px] relative text-11xl leading-[37px] font-bold font-px-h2 inline-block mq450:text-lg mq450:leading-[22px] mq1025:text-5xl mq1025:leading-[30px]"
                                >
                                    Ingredients
                                </h2>
                                {ingredients.map(ingredientss =>
                                    <div
                                        className="flex flex-row items-start justify-start py-0.5 px-0 gap-[16px]"
                                    >
                                        <div
                                            className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0"
                                        >
                                            <input
                                                className="cursor-pointer m-0 w-6 h-6 relative"
                                                type="radio"
                                                name="radioGroup-1"
                                            />
                                        </div>
                                        <div className="relative tracking-[-0.2px] leading-[28px]">
                                            {ingredientss}
                                        </div>
                                    </div>)}
                            </div>
                            <div
                                className="w-[349px] rounded-xl bg-fill-lightest-gray flex flex-row items-start justify-start py-10 px-[18px] box-border max-w-full text-11xl font-px-h2"
                            >
                                <div
                                    className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[24px]"
                                >
                                    <h2
                                        className="m-0 w-[246px] relative text-inherit leading-[37px] font-bold font-inherit inline-block mq450:text-lg mq450:leading-[22px] mq1025:text-5xl mq1025:leading-[30px]"
                                    >
                                        Nutrition Facts
                                    </h2>
                                    <div
                                        className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[4px] text-base text-darkslategray-200 font-px-regular"
                                    >
                                        <div
                                            className="self-stretch flex flex-col items-start justify-start gap-[4px]"
                                        >
                                            <div
                                                className="self-stretch flex flex-row items-start justify-start gap-[16px] mq450:flex-wrap"
                                            >
                                                <div
                                                    className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[96px]"
                                                >
                                                    <div className="self-stretch relative leading-[24px]">
                                                        Calories
                                                    </div>
                                                </div>
                                                <div
                                                    className="flex-1 relative leading-[24px] text-fill-black text-right inline-block min-w-[97px]"
                                                >
                                                    219.9
                                                </div>
                                            </div>
                                            <div
                                                className="self-stretch flex flex-row items-start justify-start"
                                            >
                                                <div
                                                    className="h-px flex-1 relative bg-fill-light-gray"
                                                ></div>
                                            </div>
                                        </div>
                                        <div
                                            className="self-stretch flex flex-col items-start justify-start gap-[4px]"
                                        >
                                            <div
                                                className="self-stretch flex flex-row items-start justify-start gap-[16px] mq450:flex-wrap"
                                            >
                                                <div
                                                    className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[96px]"
                                                >
                                                    <div className="self-stretch relative leading-[24px]">
                                                        Total Fat
                                                    </div>
                                                </div>
                                                <div
                                                    className="flex-1 relative leading-[24px] text-fill-black text-right inline-block min-w-[97px]"
                                                >
                                                    10.7 g
                                                </div>
                                            </div>
                                            <div
                                                className="self-stretch flex flex-row items-start justify-start"
                                            >
                                                <div
                                                    className="h-px flex-1 relative bg-fill-light-gray"
                                                ></div>
                                            </div>
                                        </div>
                                        <div
                                            className="self-stretch flex flex-col items-start justify-start gap-[4px]"
                                        >
                                            <div
                                                className="self-stretch flex flex-row items-start justify-start gap-[16px] mq450:flex-wrap"
                                            >
                                                <div
                                                    className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[96px]"
                                                >
                                                    <div className="self-stretch relative leading-[24px]">
                                                        Saturated Fat
                                                    </div>
                                                </div>
                                                <div
                                                    className="flex-1 relative leading-[24px] text-fill-black text-right inline-block min-w-[97px]"
                                                >
                                                    2.2 g
                                                </div>
                                            </div>
                                            <div
                                                className="self-stretch flex flex-row items-start justify-start"
                                            >
                                                <div
                                                    className="h-px flex-1 relative bg-fill-light-gray"
                                                ></div>
                                            </div>
                                        </div>
                                        <div
                                            className="self-stretch flex flex-col items-start justify-start gap-[4px]"
                                        >
                                            <div
                                                className="self-stretch flex flex-row items-start justify-start gap-[16px] mq450:flex-wrap"
                                            >
                                                <div
                                                    className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[96px]"
                                                >
                                                    <div className="self-stretch relative leading-[24px]">
                                                        Cholesterol
                                                    </div>
                                                </div>
                                                <div
                                                    className="flex-1 relative leading-[24px] text-fill-black text-right inline-block min-w-[97px]"
                                                >
                                                    37.4 mg
                                                </div>
                                            </div>
                                            <div
                                                className="self-stretch flex flex-row items-start justify-start"
                                            >
                                                <div
                                                    className="h-px flex-1 relative bg-fill-light-gray"
                                                ></div>
                                            </div>
                                        </div>
                                        <div
                                            className="self-stretch flex flex-col items-start justify-start gap-[4px]"
                                        >
                                            <div
                                                className="self-stretch flex flex-row items-start justify-start gap-[16px] mq450:flex-wrap"
                                            >
                                                <div
                                                    className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[96px]"
                                                >
                                                    <div className="self-stretch relative leading-[24px]">
                                                        Sodium
                                                    </div>
                                                </div>
                                                <div
                                                    className="flex-1 relative leading-[24px] text-fill-black text-right inline-block min-w-[97px]"
                                                >
                                                    120.3 mg
                                                </div>
                                            </div>
                                            <div
                                                className="self-stretch flex flex-row items-start justify-start"
                                            >
                                                <div
                                                    className="h-px flex-1 relative bg-fill-light-gray"
                                                ></div>
                                            </div>
                                        </div>
                                        <div
                                            className="self-stretch flex flex-col items-start justify-start gap-[4px]"
                                        >
                                            <div
                                                className="self-stretch flex flex-row items-start justify-start gap-[16px] mq450:flex-wrap"
                                            >
                                                <div
                                                    className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[96px]"
                                                >
                                                    <div className="self-stretch relative leading-[24px]">
                                                        Potassium
                                                    </div>
                                                </div>
                                                <div
                                                    className="flex-1 relative leading-[24px] text-fill-black text-right inline-block min-w-[97px]"
                                                >
                                                    32.8 mg
                                                </div>
                                            </div>
                                            <div
                                                className="self-stretch flex flex-row items-start justify-start"
                                            >
                                                <div
                                                    className="h-px flex-1 relative bg-fill-light-gray"
                                                ></div>
                                            </div>
                                        </div>
                                        <div
                                            className="self-stretch flex flex-col items-start justify-start gap-[4px]"
                                        >
                                            <div
                                                className="self-stretch flex flex-row items-start justify-start gap-[16px] mq450:flex-wrap"
                                            >
                                                <div
                                                    className="flex flex-col items-start justify-start pt-1 px-0 pb-0"
                                                >
                                                    <div className="relative leading-[24px]">
                                                        Total Carbohydrate
                                                    </div>
                                                </div>
                                                <div
                                                    className="flex-1 relative leading-[24px] text-fill-black text-right inline-block min-w-[97px]"
                                                >
                                                    22.3 g
                                                </div>
                                            </div>
                                            <div
                                                className="self-stretch flex flex-row items-start justify-start"
                                            >
                                                <div
                                                    className="h-px flex-1 relative bg-fill-light-gray"
                                                ></div>
                                            </div>
                                        </div>
                                        <div
                                            className="self-stretch flex flex-col items-start justify-start gap-[4px]"
                                        >
                                            <div
                                                className="self-stretch flex flex-row items-start justify-start gap-[16px] mq450:flex-wrap"
                                            >
                                                <div
                                                    className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[96px]"
                                                >
                                                    <div className="self-stretch relative leading-[24px]">
                                                        Sugars
                                                    </div>
                                                </div>
                                                <div
                                                    className="flex-1 relative leading-[24px] text-fill-black text-right inline-block min-w-[97px]"
                                                >
                                                    8.4 g
                                                </div>
                                            </div>
                                            <div
                                                className="self-stretch flex flex-row items-start justify-start"
                                            >
                                                <div
                                                    className="h-px flex-1 relative bg-fill-light-gray"
                                                ></div>
                                            </div>
                                        </div>
                                        <div
                                            className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[5px] gap-[16px] mq450:flex-wrap"
                                        >
                                            <div className="h-px w-[312px] relative hidden">
                                                <div
                                                    className="absolute h-full w-full top-[0%] right-[0px] bottom-[0%] left-[0px] bg-fill-light-gray"
                                                ></div>
                                            </div>
                                            <div
                                                className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[96px]"
                                            >
                                                <div className="self-stretch relative leading-[24px]">
                                                    Protein
                                                </div>
                                            </div>
                                            <div
                                                className="flex-1 relative leading-[24px] text-fill-black text-right inline-block min-w-[97px]"
                                            >
                                                7.9 g
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section
                        className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-41xl text-fill-black font-px-h2"
                    >
                        <div
                            className="w-[1125px] flex flex-col items-start justify-start gap-[29px] max-w-full"
                        >
                            <h1
                                className="m-0 self-stretch relative text-inherit leading-[72px] font-bold font-inherit mq450:text-17xl mq450:leading-[43px] mq1025:text-29xl mq1025:leading-[58px]"
                            >
                                Edit Resep Ini?
                            </h1>
                            <div
                                className="self-stretch h-[11px] flex flex-row items-start justify-start py-0 px-[7px] box-border max-w-full"
                            >
                                <div
                                    className="self-stretch flex-1 relative bg-fill-primary max-w-full"
                                ></div>
                            </div>
                        </div>
                    </section>
                    <section
                        className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full text-left text-xs text-fill-black font-px-regular"
                    >
                        <div
                            className="w-[1108px] flex flex-col items-start justify-start gap-[22px] max-w-full"
                        >

                            <UpdateResep defaultFormData={{ name: food.name, description: food.description, imageUrl: food.imageUrl, ingredients: food.ingredients }} ></UpdateResep>

                            <section
                                className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-41xl text-fill-black font-px-h2"
                            >
                                <div
                                    className="w-[1125px] flex flex-col items-start justify-start gap-[29px] max-w-full"
                                >
                                    <h1
                                        className="m-0 self-stretch relative text-inherit leading-[72px] font-bold font-inherit mq450:text-17xl mq450:leading-[43px] mq1025:text-29xl mq1025:leading-[58px]"
                                    >
                                        Hapus Resep Ini?
                                    </h1>
                                    <div
                                        className="self-stretch h-[11px] flex flex-row items-start justify-start py-0 px-[7px] box-border max-w-full"
                                    >
                                        <div
                                            className="self-stretch flex-1 relative bg-fill-primary max-w-full"
                                        ></div>
                                    </div>
                                </div>

                            </section>

                            <DeleteMakanan></DeleteMakanan>

                        </div>
                    </section>
                    <Footer />
                </div>
            </div>
        </div>
    );
}