import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <Link href="/" className="inline-flex items-center mb-6 text-green-600 hover:text-green-800">
          <ArrowLeft className="mr-2" />
          Back to Home
        </Link>
        <div className="bg-white shadow-md rounded-lg p-6 md:p-8">
          <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
          <form className="space-y-6">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" defaultValue="John Doe" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="john@example.com" />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
            </div>
            <div>
              <Label htmlFor="address">Default Delivery Address</Label>
              <Input id="address" defaultValue="123 Green St, Veggie City, VC 12345" />
            </div>
            <Button type="submit" className="w-full md:w-auto">Update Profile</Button>
          </form>
        </div>

        <div className="mt-8 bg-white shadow-md rounded-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-4">Order History</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((order) => (
              <div key={order} className="border-b pb-4">
                <p className="font-semibold">Order #{order}</p>
                <p className="text-gray-600">Date: May {order}, 2023</p>
                <p className="text-gray-600">Total: $24.99</p>
                <Button variant="link" className="p-0 h-auto font-normal text-green-600 hover:text-green-800">
                  View Details
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}