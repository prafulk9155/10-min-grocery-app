import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db('greenleaf')

    const products = await db.collection('products').find({}).toArray()
    return NextResponse.json(products)
  } catch (error) {
    return NextResponse.json({ error: 'An error occurred while fetching products' }, { status: 500 })
  }
}

export async function POST(req) {
  try {
    const { name, price, description, image } = await req.json()
    const client = await clientPromise
    const db = client.db('greenleaf')

    const result = await db.collection('products').insertOne({
      name,
      price,
      description,
      image,
    })

    return NextResponse.json({ message: 'Product added successfully', productId: result.insertedId }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'An error occurred while adding the product' }, { status: 500 })
  }
}