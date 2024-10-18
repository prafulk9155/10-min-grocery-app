import Link from 'next/link'
import { CheckCircle, Truck } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function DeliveryPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <div className="text-center">
          <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
          <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
          <p className="text-xl mb-6">Your greens are on their way!</p>
        </div>
        <div className="space-y-4 mb-6">
          <div className="flex items-center justify-between">
            <span className="font-semibold">Order Number:</span>
            <span>#GLE12345</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">Estimated Delivery:</span>
            <span>10 minutes</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">Delivery Address:</span>
            <span className="text-right">123 Green St,<br />Veggie City, VC 12345</span>
          </div>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-6">
          <div className="flex items-center">
            <Truck className="h-6 w-6 text-green-500 mr-2" />
            <span className="font-semibold">Your order is being prepared</span>
          </div>
          <div className="mt-2 text-sm text-gray-600">
            Our team is carefully selecting and packing your fresh greens. They'll be on their way to you shortly!
          </div>
        </div>
        <Link href="/">
          <Button className="w-full">Back to Home</Button>
        </Link>
      </div>
    </div>
  )
}