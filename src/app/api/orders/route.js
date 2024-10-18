import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'
import { ObjectId } from 'mongodb'

export async function POST(req) {
  try {
    const { userId, products, totalAmount, shippingAddress } = await req.json()
    const client = await clientPromise
    const db = client.db('greenleaf')

    const result = await db.collection('orders').insertOne({
      userId: new ObjectId(userId),
      products,
      totalAmount,
      shippingAddress,
      status: 'pending',
      createdAt: new Date(),
    })

    return NextResponse.json({ message: 'Order placed successfully', orderId: result.insertedId }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'An error occurred while placing the order' }, { status: 500 })
  }
}

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url)
    const userId = searchParams.get('userId')
    
    const client = await clientPromise
    const db = client.db('greenleaf')

    const orders = await db.collection('orders').find({ userId: new ObjectId(userId) }).toArray()
    return NextResponse.json(orders)
  } catch (error) {
    return NextResponse.json({ error: 'An error occurred while fetching orders' }, { status: 500 })
  }
}