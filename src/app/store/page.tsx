import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'

const products = [
  { id: 1, name: 'Spinach', price: 2.99, image: '/placeholder.svg?height=200&width=200' },
  { id: 2, name: 'Kale', price: 3.49, image: '/placeholder.svg?height=200&width=200' },
  { id: 3, name: 'Lettuce', price: 1.99, image: '/placeholder.svg?height=200&width=200' },
  { id: 4, name: 'Arugula', price: 2.79, image: '/placeholder.svg?height=200&width=200' },
  { id: 5, name: 'Swiss Chard', price: 3.29, image: '/placeholder.svg?height=200&width=200' },
  { id: 6, name: 'Collard Greens', price: 2.89, image: '/placeholder.svg?height=200&width=200' },
]

export default function StorePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-green-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">GreenLeaf Express</Link>
          <Link href="/cart">
            <Button variant="ghost" className="text-white hover:text-green-200">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Cart
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Our Fresh Greens</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
                <Button className="w-full">Add to Cart</Button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}