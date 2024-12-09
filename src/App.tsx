import BaseLayout from './layout';
import HeroSection from './sections/heroSection';
import AboutSection from './sections/aboutSection';
import FunctionSection from './sections/functionSection';
import ToldSection from './sections/toldSection';
import FaqSection from './sections/faqSection';

function App() {
  return (
    <BaseLayout>
      <HeroSection />
      <AboutSection />
      <FunctionSection />
      <ToldSection />
      <FaqSection />
    </BaseLayout>
  );
}

export default App;
