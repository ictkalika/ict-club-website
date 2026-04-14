"use client"

import { useEffect, useRef } from 'react'

interface AdSenseAdProps {
  adSlot: string
  adFormat?: string
  width?: number
  height?: number
  className?: string
  responsive?: boolean
}

declare global {
  interface Window {
    adsbygoogle: any[]
  }
}

export default function AdSenseAd({ 
  adSlot, 
  adFormat = "auto", 
  width = 320, 
  height = 50,
  className = "",
  responsive = true 
}: AdSenseAdProps) {
  const adRef = useRef<HTMLModElement>(null)

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
 
        window.adsbygoogle = window.adsbygoogle || []
        
        // Push ad to queue
        window.adsbygoogle.push({})
        
        console.log('AdSense ad loaded for slot:', adSlot)
      }
    } catch (error) {
      console.error('AdSense error:', error)
    }
  }, [adSlot])

  return (
    <div className={`adsense-container ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ 
          display: 'block',
          ...(responsive ? {} : { width: `${width}px`, height: `${height}px` })
        }}
        data-ad-client="ca-pub-7528456570041321"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  )
}
