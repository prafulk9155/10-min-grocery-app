import Link from 'next/link'
import { ArrowLeft, CreditCard } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

export default function PaymentPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <Link href="/cart" className="inline-flex items-center mb-6 text-green-600 hover:text-green-800">
          <ArrowLeft className="mr-2" />
          Back to Cart
        </Link>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h1 className="text-3xl font-bold mb-6">Payment</h1>
          <form>
            <div className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" required />
              </div>
              <div>
                <Label htmlFor="address">Delivery Address</Label>
                <Input id="address" placeholder="123 Green St, Veggie City, VC 12345" required />
              </div>
              <div>
                <Label>Payment Method</Label>
                <RadioGroup defaultValue="card" className="mt-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card">Credit Card</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label htmlFor="paypal">PayPal</Label>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <Label htmlFor="card-number">Card Number</Label>
                <Input id="card-number" placeholder="1234 5678 9012 3456" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input id="expiry" placeholder="MM/YY" required />
                </div>
                <div>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" placeholder="123" required />
                </div>
              </div>
              <Link href="/delivery">
                <Button className="w-full">
                  <CreditCard className="mr-2 h-4 w-4" /> Pay $24.99
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}