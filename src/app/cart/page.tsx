import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Minus, Plus, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const cartItems = [
  { id: 1, name: 'Spinach', price: 2.99, quantity: 2, image: '/placeholder.svg?height=100&width=100' },
  { id: 2, name: 'Kale', price: 3.49, quantity: 1, image: '/placeholder.svg?height=100&width=100' },
  { id: 4, name: 'Arugula', price: 2.79, quantity: 3, image: '/placeholder.svg?height=100&width=100' },
]

export default function CartPage() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = subtotal * 0.08 // Assuming 8% tax
  const total = subtotal + tax

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <Link href="/store" className="inline-flex items-center mb-6 text-green-600 hover:text-green-800">
          <ArrowLeft className="mr-2" />
          Continue Shopping
        </Link>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 py-4 border-b">
                  <Image src={item.image} alt={item.name} width={100} height={100} className="rounded-md" />
                  <div className="flex-grow">
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="icon">
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="font-semibold">{item.quantity}</span>
                    <Button variant="outline" size="icon">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-5 w-5 text-red-500" />
                  </Button>
                </div>
              ))}
            </div>
          )}
          <div className="mt-6 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <div className="mt-8">
            <Link href="/payment">
              <Button className="w-full">Proceed to Checkout</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}