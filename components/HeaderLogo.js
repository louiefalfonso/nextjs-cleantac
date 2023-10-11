import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MainLogo from '../public/img/logo/logo.svg'
import HeaderContact from './HeaderContact'

export default function HeaderLogo() {
  return (
    <>
    <div className="header-logo-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-3">
                <div className="logo">
                  <Link href="/" passHref>
                    <Image src={MainLogo} alt="Logo"  />
                  </Link>
                </div>
          </div>
          <div className="col-xl-8 col-lg-9">
          <HeaderContact/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
