import Banner from "@/components/HomePage/Banner";
import ServicesOffer from "@/components/HomePage/ServicesOffer";
import Videos from "@/components/HomePage/Videos";
import WelCome from "@/components/HomePage/WelCome";

export default function Home() {
  return (
    <div>
      <Banner />
      <WelCome />
      <ServicesOffer/>
      <Videos/>
    </div>
  );
}
