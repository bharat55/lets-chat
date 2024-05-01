import React from 'react'
import LogoImage from '@logos/love.jpg'
import Link from 'next/link'
import Image from "next/image"
 import { AspectRatio } from "@/components/ui/aspect-ratio"

function Logo() {
  return (
    <Link href="/" prefetch={false} className='flex overflow-hidden'>
      <div className="flex items-center w-72 h-14">
        <AspectRatio
          ratio={16 / 9}
          className='flex items-center justify-center'
        >
          <Image
            priority
            src={LogoImage}
            alt="Logo"
            width={72}
            height={14}
            className="rounded-md dark:filter dark:invert" 
          />
        </AspectRatio>
      </div>
    </Link>
  )
}

export default Logo