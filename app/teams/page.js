import React from 'react'
import Link from 'next/link'
import TeamsList from '@/components/TeamsList'
export default function page() {
  return (
    <>
    <section className="breadcrumb-area breadcrumb-bg" data-background="img/bg/breadcrumb_bg.jpg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-content">
              <h2 className="title">Teams</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/" passHref>Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Teams
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
    <TeamsList/>
    </>
    
  )
}
