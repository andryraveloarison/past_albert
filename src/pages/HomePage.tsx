import NavMenu from '@/components/Layout/NavMenu';
import Hero from '@/components/HomePage/Hero';
import Intro from '@/components/HomePage/Intro';
import ResumeBio from '@/components/HomePage/ResumeBio';
import ResumeWorks from '@/components/HomePage/ResumeWorks';
import { Footer } from '@/components/Layout/Footer';

export default function HomePage() {
  return (
    <>
      <NavMenu color='light'/>
      <Hero />
      <Intro />
      <ResumeBio />
      <ResumeWorks />
      <Footer />
    </>
  );
}

