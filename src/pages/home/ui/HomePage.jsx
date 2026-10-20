import { Header } from '@/widgets/header';
import { Hero } from '@/widgets/hero';
import { Benefits } from '@/widgets/benefits';
import { HowItWorks } from '@/widgets/how-it-works';
import { Pricing } from '@/widgets/pricing';
import { Testimonials } from '@/widgets/testimonials';
import { Faq } from '@/widgets/faq';
import { FinalCta } from '@/widgets/final-cta';
import { Footer } from '@/widgets/footer';

function HomePage({ onOpenModal }) {
  return (
    <>
      <Header onOpenModal={onOpenModal} />
      <main>
        <Hero onOpenModal={onOpenModal} />
        <Benefits />
        <HowItWorks />
        <Pricing onOpenModal={onOpenModal} />
        <Testimonials />
        <Faq />
        <FinalCta onOpenModal={onOpenModal} />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
