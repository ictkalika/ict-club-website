import { list } from '@vercel/blob'
import { NextResponse } from 'next/server'

// GET /api/upload?prefix=digitalhorizon
// Fetches all blob files with optional prefix filter

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const prefix = searchParams.get('prefix') || undefined

    const { blobs } = await list({
      token: process.env.ictkalika_READ_WRITE_TOKEN!,
      prefix: prefix,
    })

    return NextResponse.json({
      blobs: blobs.map(blob => ({
        url: blob.url,
        pathname: blob.pathname,
        size: blob.size,
        uploadedAt: blob.uploadedAt,
      })),
    })
  } catch (error) {
    console.error('Error fetching blobs:', error)
    return NextResponse.json(
      { error: 'Failed to fetch images' },
      { status: 500 }
    )
  }
}
