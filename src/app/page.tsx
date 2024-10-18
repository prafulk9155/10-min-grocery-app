import Link from 'next/link'
import { ShoppingCart, User } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-green-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">GreenLeaf Express</Link>
          <nav className="space-x-4">
            <Link href="/store">
              <Button variant="ghost" className="text-white hover:text-green-200">Store</Button>
            </Link>
            <Link href="/cart">
              <Button variant="ghost" className="text-white hover:text-green-200">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Cart
              </Button>
            </Link>
            <Link href="/profile">
              <Button variant="ghost" className="text-white hover:text-green-200">
                <User className="w-5 h-5 mr-2" />
                Profile
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-green-50 py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-4">Fresh Greens in 10 Minutes</h1>
            <p className="text-xl text-green-600 mb-8">Get your favorite leafy vegetables delivered to your doorstep in no time!</p>
            <Link href="/store">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">Shop Now</Button>
            </Link>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose GreenLeaf Express?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Lightning Fast Delivery</h3>
                <p>Get your greens in just 10 minutes!</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Farm Fresh Quality</h3>
                <p>We source directly from local farms for the freshest produce.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
                <p>Choose from a variety of leafy greens and vegetables.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 GreenLeaf Express. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}