// Utility functions for Vercel Blob storage
import { list } from '@vercel/blob'
import { it } from 'node:test'

// Your Vercel Blob base URL
export const BLOB_BASE_URL = 'https://n4ce5f0tqvsfhe7l.public.blob.vercel-storage.com'

// Function to get all blob files (for server-side use)
export async function listBlobFiles(prefix?: string) {
  try {
    const { blobs } = await list({
      token: process.env.ictkalika_READ_WRITE_TOKEN,
      prefix: prefix, // e.g., 'digitalhorizon/', 'ins  tallation/', etc.
    })
    return blobs
  } catch (error) {
    console.error('Error fetching blob files:', error)
    return []
  }
}

// Helper to construct blob URL
export function getBlobUrl(pathname: string): string {
  // If already a full URL, return as-is
  if (pathname.startsWith('http')) {
    return pathname
  }
  // Otherwise, construct the full URL
  const cleanPath = pathname.startsWith('/') ? pathname : `/${pathname}`
  return `${BLOB_BASE_URL}${cleanPath}`
}

// Event image URLs - Direct access to your blob storage
export const EVENT_IMAGES = {


  installation:{
    banner: `${BLOB_BASE_URL}/installation/mainbanner.png`,
    installation1: `${BLOB_BASE_URL}/ictinstallation/1.png`,
    installation2: `${BLOB_BASE_URL}/ictinstallation/2.png`,
    installation3: `${BLOB_BASE_URL}/ictinstallation/3.png`,
    installation4: `${BLOB_BASE_URL}/ictinstallation/4.png`,
    installation5: `${BLOB_BASE_URL}/ictinstallation/5.png`,
    installation6: `${BLOB_BASE_URL}/ictinstallation/6.png`,
    installation7: `${BLOB_BASE_URL}/ictinstallation/7.png`,
    installation8: `${BLOB_BASE_URL}/ictinstallation/8.png`,
    installation9: `${BLOB_BASE_URL}/ictinstallation/9.png`,
    installation10: `${BLOB_BASE_URL}/ictinstallation/10.png`,

    bodreveal1: `${BLOB_BASE_URL}/installation/BOD%20POST.png`,
    bodreveal2: `${BLOB_BASE_URL}/installation/BOD%20POST-1.png`,
    bodreveal3: `${BLOB_BASE_URL}/installation/BOD%20POST-2.png`,
    bodreveal4: `${BLOB_BASE_URL}/installation/BOD%20POST-3.png`,
    bodreveal5: `${BLOB_BASE_URL}/installation/BOD%20POST-4.png`,
    bodreveal6: `${BLOB_BASE_URL}/installation/BOD%20POST-5.png`,
    bodreveal8: `${BLOB_BASE_URL}/installation/BOD%20POST-7.png`,
  },
  digitalHorizon: {
 SyangjaMain: `${BLOB_BASE_URL}/digitalhorizonsyangja/syangjamain.png`,
 Syangja2: `${BLOB_BASE_URL}/digitalhorizonsyangja/2.png`,
 Syangja3: `${BLOB_BASE_URL}/digitalhorizonsyangja/3.png`,
 Syangja4: `${BLOB_BASE_URL}/digitalhorizonsyangja/4.png`,
 Syangja5: `${BLOB_BASE_URL}/digitalhorizonsyangja/5.png`,
 Syangja6: `${BLOB_BASE_URL}/digitalhorizonsyangja/6.png`,
Syangja7: `${BLOB_BASE_URL}/digitalhorizonsyangja/7.png`,
Syangja8: `${BLOB_BASE_URL}/digitalhorizonsyangja/8.png`,
Syangja9: `${BLOB_BASE_URL}/digitalhorizonsyangja/9.png`,
Syangja10: `${BLOB_BASE_URL}/digitalhorizonsyangja/10.png`,
Syangja11: `${BLOB_BASE_URL}/digitalhorizonsyangja/11.png`,
Syangja12: `${BLOB_BASE_URL}/digitalhorizonsyangja/12.png`,

  },
  digitalHorizonPalpa: {
    palpamain:`${BLOB_BASE_URL}/digitalhorizon/palpamain.png`,
    main: `${BLOB_BASE_URL}/digitalhorizon/main.png`,
    palpa1: `${BLOB_BASE_URL}/digitalhorizon/palpa1.png`,
    palpa2: `${BLOB_BASE_URL}/digitalhorizon/palpa2.png`,
    palpa12: `${BLOB_BASE_URL}/digitalhorizon/palpa12.png`,
    palpa13: `${BLOB_BASE_URL}/digitalhorizon/palpa13.png`,
    palpa22: `${BLOB_BASE_URL}/digitalhorizon/palpa22.png`,
    palpa23: `${BLOB_BASE_URL}/digitalhorizon/palpa23.png`,
    palpa24: `${BLOB_BASE_URL}/digitalhorizon/palpa24.png`,
  palpa14: `${BLOB_BASE_URL}/digitalhorizon/palpa14.png`,
   palpa25: `${BLOB_BASE_URL}/digitalhorizon/palpa25.png`,
    

  },
  itfest: {
    itfest1: `${BLOB_BASE_URL}/itfest/1.png`,
    itfest2: `${BLOB_BASE_URL}/itfest/2.png`,
    itfest3: `${BLOB_BASE_URL}/itfest/3.png`,
    itfest4: `${BLOB_BASE_URL}/itfest/4.png`,
    itfest5: `${BLOB_BASE_URL}/itfest/5.png`,

  },
}
