import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div className="text-white p-4 max-w-xl mx-auto">
            <header className="flex justify-center">
                <Image width={100} height={100} src="/b.webp" alt="Header Image" className="h-auto w-full rounded-sm" />
            </header></div>
    )
}

export default Header