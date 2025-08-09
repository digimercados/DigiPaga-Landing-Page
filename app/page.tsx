import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import LogoCloud from "@/components/logo-cloud"
import FeatureSection from "@/components/feature-section"
import GlobalReachSection from "@/components/global-reach-section"
import PaymentControlSection from "@/components/payment-control-section"
import CurrencySliderSection from "@/components/currency-slider-section"
import DebitCardSection from "@/components/debit-card-section"
import PaymentGatewaySection from "@/components/payment-gateway-section"
import CashAccessSection from "@/components/cash-access-section"
import Footer from "@/components/footer"
import PaymentControlSection2 from "@/components/Payment_control2"
import PaymentGateway from "@/components/PaymentGateway"

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Header />
      <main>
        <HeroSection />
        <LogoCloud />
        <FeatureSection />
        <GlobalReachSection />
        <PaymentControlSection />
        <PaymentControlSection2/>
        <CurrencySliderSection />
        <DebitCardSection />
        <PaymentGateway/>
        <CashAccessSection />
      </main>
      <Footer />
    </div>
  )
}
