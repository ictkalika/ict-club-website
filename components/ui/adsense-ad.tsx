"use client"

import { useEffect } from 'react'

interface AdSenseAdProps {
  adSlot: string
  adFormat?: string
  width?: number
  height?: number
  className?: string
  responsive?: boolean
}

export default function AdSenseAd({ 
  adSlot, 
  adFormat = "auto", 
  width = 320, 
  height = 50,
  className = "",
  responsive = true 
}: AdSenseAdProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({})
      }
    } catch (error) {
      console.error('AdSense error:', error)
    }
  }, [])

  const adStyles = responsive 
    ? "block w-full h-auto" 
    : `block w-[${width}px] h-[${height}px]`

  return (
    <div className={`adsense-container ${className}`}>
      <ins
        className={`adsbygoogle ${adStyles}`}
        data-ad-client="ca-pub-7528456570041321"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  )
}
