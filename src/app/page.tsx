import Hero from '@/components/Hero'
import Motivation from '@/components/Motivation'
import Architecture from '@/components/Architecture'
import Methodology from '@/components/Methodology'
import Results from '@/components/Results'
import Challenges from '@/components/Challenges'
import Future from '@/components/Future'
import Team from '@/components/Team'
import Ethics from '@/components/Ethics'
import References from '@/components/References'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Motivation />
      <Architecture />
      <Methodology />
      <Results />
      <Challenges />
      <Future />
      <Team />
      <Ethics />
      <References />
      <Footer />
    </main>
  )
} 