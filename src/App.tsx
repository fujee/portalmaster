import React from 'react';
import BaseLayout from './layout';
import HeroSection from './sections/heroSection';
import AboutSection from './sections/aboutSection';
import FunctionSection from './sections/functionSection';
import DemoSection from './sections/demoSection';

function App() {
  return (
    <BaseLayout>
      <HeroSection />
      <AboutSection />
      <FunctionSection />
      <DemoSection />
    </BaseLayout>
  );
}

export default App;
