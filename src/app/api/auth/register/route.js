import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import clientPromise from '@/lib/mongodb'

export async function POST(req) {
  try {
    const { name, email, password } = await req.json()
    const client = await clientPromise
    const db = client.db('greenleaf')

    const existingUser = await db.collection('users').findOne({ email })
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 })
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const result = await db.collection('users').insertOne({
      name,
      email,
      password: hashedPassword,
    })

    return NextResponse.json({ message: 'User registered successfully', userId: result.insertedId }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'An error occurred while registering the user' }, { status: 500 })
  }
}