import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

import HeroSection from '@/components/landing/HeroSection'
import FeatureShowcase from '@/components/landing/FeatureShowcase'
import AnimatedStatsPreview from '@/components/landing/AnimatedStatsPreview'
import CTASection from '@/components/landing/CTASection'

export default function LandingPage() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />

      <HeroSection />

      <FeatureShowcase />

      <AnimatedStatsPreview />

      <CTASection />

      <Footer />
    </main>
  )
}
