import React from 'react';
import BaseLayout from './layout';
import HeroSection from './sections/heroSection';
import AboutSection from './sections/aboutSection';
import FunctionSection from './sections/functionSection';

function App() {
  return (
    <BaseLayout>
      <HeroSection />
      <AboutSection />
      <FunctionSection />
    </BaseLayout>
  );
}

export default App;
