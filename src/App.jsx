import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TrustedBySection from "./components/TrustedBySection";
import FeaturesSection from "./components/FeaturesSection";
import FeatureOneDetailsSection from "./components/FeatureOneDetailsSection";
import FeatureTwoDetailsSection from "./components/FeatureTwoDetailsSection";
import CallToActionSection from "./components/CallToActionSection";
import FeatureFourDetailsSection from "./components/FeatureFourDetailsSection";
import FeatureThreeDetailsSection from "./components/FeatureThreeDetailsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <main className="mx-5 mt-20 flex flex-col gap-28 md:mx-16 lg:mx-28 xl:mx-48 2xl:mx-72">
        <HeroSection />
        <TrustedBySection />
        <FeaturesSection />
        <FeatureOneDetailsSection />
        <FeatureTwoDetailsSection />
        <CallToActionSection />
        <FeatureThreeDetailsSection />
        <FeatureFourDetailsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
