import axios from "axios";
import { useRouter } from "next/router";
import Header from "./food/header";
import Footer from "./food/footer";
import ListmakananTitle from "./food/listmakananTitle";

export async function getServerSideProps() {
  const resp = await axios.get("https://api-bootcamp.do.dibimbing.id/api/v1/foods", {
    headers: { apiKey: "w05KkI9AWhKxzvPFtXotUva-" }
  });
  return {
    props: {
      food: resp.data.data,
    },
  };
}

export default function Home({ food }) {
  const router = useRouter();
  return (
    <main>
      <div
        className="w-full relative bg-fill-white overflow-hidden flex flex-col items-start justify-start gap-[80px] leading-[normal] tracking-[normal] mq750:gap-[40px] mq450:gap-[20px]"
      >
        <Header />
        <div
          className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-10 box-border max-w-full"
        >
          <div
            className="w-[1110px] flex flex-col items-start justify-start gap-[64px] max-w-full text-left text-41xl text-fill-black font-px-h2 mq750:gap-[16px] mq1125:gap-[32px]"
          >
            <ListmakananTitle />
            <div
              className="self-stretch flex flex-wrap items-start justify-start relative gap-[64px_28.7px] text-center text-xl font-px-regular"
            >
              {food.map((food) => (
                <div
                  className="w-[255px] !m-[0] top-[0px] left-[0px] flex flex-col items-start justify-start gap-[12px] rounded-xl hover:shadow-2xl hover:cursor-pointer"
                  onClick={() => router.push(`food/${food.id}`)}
                >
                  <img
                    className="w-[255px] h-[255px] relative object-cover rounded-full"
                    loading="lazy"
                    alt=""
                    src={food.imageUrl}
                  />

                  <div
                    className="self-stretch flex flex-row items-start justify-start py-0 px-4"
                  >
                    <div
                      className="flex-1 relative tracking-[-0.2px] leading-[28px] font-semibold mq450:text-base mq450:leading-[22px]"
                    >
                      {food.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
