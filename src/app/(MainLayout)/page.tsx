import AgricultureMatters from "@/components/HomePage/AgricultureMatters";
import Badge from "@/components/HomePage/Badge";
import Banner from "@/components/HomePage/Banner";
import Farmers from "@/components/HomePage/Farmers";
import OurProjects from "@/components/HomePage/OurProjects";
import QualityProducts from "@/components/HomePage/QualityProducts";
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
      <QualityProducts/>
      <Badge/>
      <AgricultureMatters/>
      <OurProjects/>
      <Farmers/>
    </div>
  );
}
