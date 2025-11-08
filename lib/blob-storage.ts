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
    banner: `${BLOB_BASE_URL}/installation/mainbanner.jpg`,
    installation1: `${BLOB_BASE_URL}/ictinstallation/1.jpg`,
    installation2: `${BLOB_BASE_URL}/ictinstallation/2.jpg`,
    installation3: `${BLOB_BASE_URL}/ictinstallation/3.jpg`,
    installation4: `${BLOB_BASE_URL}/ictinstallation/4.jpg`,
    installation5: `${BLOB_BASE_URL}/ictinstallation/5.jpg`,
    installation6: `${BLOB_BASE_URL}/ictinstallation/6.jpg`,
    installation7: `${BLOB_BASE_URL}/ictinstallation/7.jpg`,
    installation8: `${BLOB_BASE_URL}/ictinstallation/8.jpg`,
    installation9: `${BLOB_BASE_URL}/ictinstallation/9.jpg`,
    installation10: `${BLOB_BASE_URL}/ictinstallation/10.jpg`,

    bodreveal1: `${BLOB_BASE_URL}/installation/BOD%20POST.jpg`,
    bodreveal2: `${BLOB_BASE_URL}/installation/BOD%20POST-1.jpg`,
    bodreveal3: `${BLOB_BASE_URL}/installation/BOD%20POST-2.jpg`,
    bodreveal4: `${BLOB_BASE_URL}/installation/BOD%20POST-3.jpg`,
    bodreveal5: `${BLOB_BASE_URL}/installation/BOD%20POST-4.jpg`,
    bodreveal6: `${BLOB_BASE_URL}/installation/BOD%20POST-5.jpg`,
    bodreveal8: `${BLOB_BASE_URL}/installation/BOD%20POST-7.jpg`,
  },
  digitalHorizon: {
 SyangjaMain: `${BLOB_BASE_URL}/digitalhorizonsyangja/syangjamain.jpg`,
 Syangja2: `${BLOB_BASE_URL}/digitalhorizonsyangja/2.jpg`,
 Syangja3: `${BLOB_BASE_URL}/digitalhorizonsyangja/3.jpg`,
 Syangja4: `${BLOB_BASE_URL}/digitalhorizonsyangja/4.jpg`,
 Syangja5: `${BLOB_BASE_URL}/digitalhorizonsyangja/5.jpg`,
 Syangja6: `${BLOB_BASE_URL}/digitalhorizonsyangja/6.jpg`,
Syangja7: `${BLOB_BASE_URL}/digitalhorizonsyangja/7.jpg`,
Syangja8: `${BLOB_BASE_URL}/digitalhorizonsyangja/8.jpg`,
Syangja9: `${BLOB_BASE_URL}/digitalhorizonsyangja/9.jpg`,
Syangja10: `${BLOB_BASE_URL}/digitalhorizonsyangja/10.jpg`,
Syangja11: `${BLOB_BASE_URL}/digitalhorizonsyangja/11.jpg`,
Syangja12: `${BLOB_BASE_URL}/digitalhorizonsyangja/12.jpg`,

  },
  digitalHorizonPalpa: {
    palpamain:`${BLOB_BASE_URL}/digitalhorizonpalpa/palpamain.jpg`,
    main: `${BLOB_BASE_URL}/digitalhorizon/main.jpg`,
    palpa1: `${BLOB_BASE_URL}/digitalhorizonpalpa/13.jpg`,
    palpa2: `${BLOB_BASE_URL}/digitalhorizonpalpa/14.jpg`,
    palpa3: `${BLOB_BASE_URL}/digitalhorizonpalpa/15.jpg`,
    palpa4: `${BLOB_BASE_URL}/digitalhorizonpalpa/16.jpg`,
    palpa5: `${BLOB_BASE_URL}/digitalhorizonpalpa/17.jpg`,
    palpa6: `${BLOB_BASE_URL}/digitalhorizonpalpa/18.jpg`,
    palpa7: `${BLOB_BASE_URL}/digitalhorizonpalpa/19.jpg`,
    palpa8: `${BLOB_BASE_URL}/digitalhorizonpalpa/20.jpg`,
    palpa9: `${BLOB_BASE_URL}/digitalhorizonpalpa/21.jpg`,
    palpa10: `${BLOB_BASE_URL}/digitalhorizonpalpa/22.jpg`,
    palpa11: `${BLOB_BASE_URL}/digitalhorizonpalpa/23.jpg`,
    

  },
  itfest: {
    itfest1: `${BLOB_BASE_URL}/itfest/1.jpg`,
    itfest2: `${BLOB_BASE_URL}/itfest/2.jpg`,
    itfest3: `${BLOB_BASE_URL}/itfest/3.jpg`,
    itfest4: `${BLOB_BASE_URL}/itfest/4.jpg`,
    itfest5: `${BLOB_BASE_URL}/itfest/5.jpg`,

  },
}
