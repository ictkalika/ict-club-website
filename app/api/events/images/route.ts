import { list } from '@vercel/blob'
import { NextResponse } from 'next/server'

// GET /api/events/images
// Fetches all event images from Vercel Blob

export async function GET() {
  try {
    const { blobs } = await list({
      token: process.env.ictkalika_READ_WRITE_TOKEN!,
    })

    // Organize images by event
    const eventImages = {
      installation: blobs.filter(b => b.pathname.includes('installation')),
      itfest: blobs.filter(b => b.pathname.includes('itfest')),
      digitalHorizon: blobs.filter(b => b.pathname.includes('digitalhorizon')),
    }

    return NextResponse.json({
      eventImages: {
        installation: eventImages.installation.map(b => b.url),
        itfest: eventImages.itfest.map(b => b.url),
        digitalHorizon: eventImages.digitalHorizon.map(b => b.url).sort(),
      },
      allBlobs: blobs.map(blob => ({
        url: blob.url,
        pathname: blob.pathname,
      })),
    })
  } catch (error) {
    console.error('Error fetching event images:', error)
    return NextResponse.json(
      { error: 'Failed to fetch event images' },
      { status: 500 }
    )
  }
}
