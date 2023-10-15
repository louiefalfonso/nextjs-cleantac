import React from 'react'
import Link from 'next/link'
export default function ProjectArea() {
  return (
    <>
    <section className="project-area-two pt-125 pb-100">
        <div className="container">
            <div className="row align-items-center">
            <div className="col-lg-5">
                <div className="section-title-two mb-60 tg-heading-subheading animation-style2">
                <span className="sub-title">Complete Projects</span>
                <h2 className="title tg-element-title">
                    Keep Eye on Our New Projects
                </h2>
                </div>
            </div>
            <div className="col-lg-7">
                <div className="project-nav-wrap mb-40">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                    <button
                        className="nav-link active"
                        id="all-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#all-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="all-tab-pane"
                        aria-selected="true"
                    >
                        All
                    </button>
                    </li>
                    <li className="nav-item" role="presentation">
                    <button
                        className="nav-link"
                        id="office-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#office-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="office-tab-pane"
                        aria-selected="false"
                    >
                        Home
                    </button>
                    </li>
                    <li className="nav-item" role="presentation">
                    <button
                        className="nav-link"
                        id="home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#home-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="home-tab-pane"
                        aria-selected="false"
                    >
                        Office
                    </button>
                    </li>
                    <li className="nav-item" role="presentation">
                    <button
                        className="nav-link"
                        id="outdoor-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#outdoor-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="outdoor-tab-pane"
                        aria-selected="false"
                    >
                        Outdoor
                    </button>
                    </li>
                    <li className="nav-item" role="presentation">
                    <button
                        className="nav-link"
                        id="laundry-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#laundry-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="laundry-tab-pane"
                        aria-selected="false"
                    >
                        Laundry Service
                    </button>
                    </li>
                </ul>
                </div>
            </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="tab-content" id="myTabContent">
                    <div
                        className="tab-pane fade show active"
                        id="all-tab-pane"
                        role="tabpanel"
                        aria-labelledby="all-tab"
                        tabIndex={0}
                    >
                        <div className="row">
                        <div className="col-lg-6">
                            <div className="project-item-two big-item">
                            <div className="project-thumb-two">
                                <Link href="/projects" passHref>
                                <img
                                    src="img/project/h2_project__img01.jpg"
                                    alt=""
                                />
                                </Link>
                            </div>
                            <div className="project-content-two">
                                <h2 className="title">
                                <Link href="/projects" passHref>Home Cleaning Services</Link>
                                </h2>
                                <p>
                                Lorem ipsum dolor sit amet consectetur. Ut tellus
                                suspendisse nulla aliquam. Risus rutrum tellus eget
                                ultrices.
                                </p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="project-item-two small-item">
                            <div className="project-thumb-two">
                                <Link href="/projects" passHref>
                                    <img
                                    src="img/project/h2_project_img01.jpg"
                                    alt=""
                                />
                                </Link>
                            </div>
                            <div className="project-content-two">
                                <h2 className="title">
                                <Link href="/projects" passHref>Office Cleaning Services
                                </Link>
                                </h2>
                                <p>
                                Lorem ipsum dolor sit consectetur. Ut tellus suspendisse
                                aliquam.
                                </p>
                            </div>
                            </div>
                            <div className="project-item-two small-item">
                            <div className="project-thumb-two">
                                <Link href="/projects" passHref>
                                    <img
                                    src="img/project/h2_project_img02.jpg"
                                    alt=""
                                />
                                </Link>
                            </div>
                            <div className="project-content-two">
                                <h2 className="title">
                                <Link href="/projects" passHref>Outdoor Cleaning
                                </Link>
                                </h2>
                                <p>
                                Lorem ipsum dolor sit consectetur. Ut tellus suspendisse
                                aliquam.
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="office-tab-pane"
                        role="tabpanel"
                        aria-labelledby="office-tab"
                        tabIndex={0}
                    >
                        <div className="row">
                        <div className="col-lg-6">
                            <div className="project-item-two big-item">
                            <div className="project-thumb-two">
                                <a href="#">
                                <img
                                    src="img/project/h2_project__img02.jpg"
                                    alt=""
                                />
                                </a>
                            </div>
                            <div className="project-content-two">
                                <h2 className="title">
                                <a href="#">Home Cleaning Services</a>
                                </h2>
                                <p>
                                Lorem ipsum dolor sit amet consectetur. Ut tellus
                                suspendisse nulla aliquam. Risus rutrum tellus eget
                                ultrices.
                                </p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="project-item-two small-item">
                            <div className="project-thumb-two">
                                <a href="#">
                                <img
                                    src="img/project/h2_project_img01.jpg"
                                    alt=""
                                />
                                </a>
                            </div>
                            <div className="project-content-two">
                                <h2 className="title">
                                <a href="#">
                                    Office Cleaning Services
                                </a>
                                </h2>
                                <p>
                                Lorem ipsum dolor sit consectetur. Ut tellus suspendisse
                                aliquam.
                                </p>
                            </div>
                            </div>
                            <div className="project-item-two small-item">
                            <div className="project-thumb-two">
                                <a href="#">
                                <img
                                    src="img/project/h2_project_img02.jpg"
                                    alt=""
                                />
                                </a>
                            </div>
                            <div className="project-content-two">
                                <h2 className="title">
                                <a href="#">Outdoor Cleaning</a>
                                </h2>
                                <p>
                                Lorem ipsum dolor sit consectetur. Ut tellus suspendisse
                                aliquam.
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="home-tab-pane"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                        tabIndex={0}
                    >
                        <div className="row">
                        <div className="col-lg-6">
                            <div className="project-item-two big-item">
                            <div className="project-thumb-two">
                               <Link href="/projects" passHref>
                                <img
                                    src="img/project/h2_project__img03.jpg"
                                    alt=""
                                />
                                </Link> 
                            </div>
                            <div className="project-content-two">
                                <h2 className="title">
                                <Link href="/projects" passHref>Office Cleaning Services</Link>
                                </h2>
                                <p>
                                Lorem ipsum dolor sit amet consectetur. Ut tellus
                                suspendisse nulla aliquam. Risus rutrum tellus eget
                                ultrices.
                                </p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="project-item-two small-item">
                            <div className="project-thumb-two">
                                <Link href="/projects" passHref>
                                    <img
                                    src="img/project/h2_project_img01.jpg"
                                    alt=""
                                />
                                </Link>
                            </div>
                            <div className="project-content-two">
                                <h2 className="title">
                                <Link href="/projects" passHref>Office Cleaning Services</Link>    
                                </h2>
                                <p>
                                Lorem ipsum dolor sit consectetur. Ut tellus suspendisse
                                aliquam.
                                </p>
                            </div>
                            </div>
                            <div className="project-item-two small-item">
                            <div className="project-thumb-two">
                                <Link href="/projects" passHref>
                                    <img
                                    src="img/project/h2_project_img02.jpg"
                                    alt=""
                                />
                                </Link>
                            </div>
                            <div className="project-content-two">
                                <h2 className="title">
                                <Link href="/projects" passHref>Outdoor Cleaning</Link>
                                </h2>
                                <p>
                                Lorem ipsum dolor sit consectetur. Ut tellus suspendisse
                                aliquam.
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="outdoor-tab-pane"
                        role="tabpanel"
                        aria-labelledby="outdoor-tab"
                        tabIndex={0}
                    >
                        <div className="row">
                        <div className="col-lg-6">
                            <div className="project-item-two big-item">
                            <div className="project-thumb-two">
                                <Link href="/projects" passHref>
                                    <img
                                    src="img/project/h2_project__img01.jpg"
                                    alt=""
                                />
                                </Link>
                            </div>
                            <div className="project-content-two">
                                <h2 className="title">
                                    <Link href="/projects" passHref>Home Cleaning Services
                                    </Link>
                                </h2>
                                <p>
                                Lorem ipsum dolor sit amet consectetur. Ut tellus
                                suspendisse nulla aliquam. Risus rutrum tellus eget
                                ultrices.
                                </p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="project-item-two small-item">
                            <div className="project-thumb-two">
                               <Link href="/projects" passHref>
                                <img
                                    src="img/project/h2_project_img01.jpg"
                                    alt=""
                                />
                                </Link> 
                            </div>
                            <div className="project-content-two">
                                <h2 className="title">
                                <Link href="/projects" passHref>
                                   Office Cleaning Services 
                                </Link>
                                </h2>
                                <p>
                                Lorem ipsum dolor sit consectetur. Ut tellus suspendisse
                                aliquam.
                                </p>
                            </div>
                            </div>
                            <div className="project-item-two small-item">
                            <div className="project-thumb-two">
                                <Link href="/projects" passHref>
                                    <img
                                    src="img/project/h2_project_img02.jpg"
                                    alt=""
                                />
                                </Link>
                            </div>
                            <div className="project-content-two">
                                <h2 className="title">
                                <Link href="/projects" passHref>
                                   Outdoor Cleaning 
                                </Link>
                                </h2>
                                <p>
                                Lorem ipsum dolor sit consectetur. Ut tellus suspendisse
                                aliquam.
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="laundry-tab-pane"
                        role="tabpanel"
                        aria-labelledby="laundry-tab"
                        tabIndex={0}
                    >
                        <div className="row">
                        <div className="col-lg-6">
                            <div className="project-item-two big-item">
                            <div className="project-thumb-two">
                                <Link href="/projects" passHref>
                                    <img
                                    src="img/project/h2_project__img02.jpg"
                                    alt=""
                                />
                                </Link>
                            </div>
                            <div className="project-content-two">
                                <h2 className="title">
                                <Link href="/projects" passHref>
                                    Home Cleaning Services
                                </Link>      
                                </h2>
                                <p>
                                Lorem ipsum dolor sit amet consectetur. Ut tellus
                                suspendisse nulla aliquam. Risus rutrum tellus eget
                                ultrices.
                                </p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="project-item-two small-item">
                            <div className="project-thumb-two">
                                <Link href="/projects" passHref>
                                    <img
                                    src="img/project/h2_project_img01.jpg"
                                    alt=""
                                />
                                </Link>
                            </div>
                            <div className="project-content-two">
                                <h2 className="title">
                                <Link href="/projects" passHref>
                                    Office Cleaning Services
                                </Link>
                                </h2>
                                <p>
                                Lorem ipsum dolor sit consectetur. Ut tellus suspendisse
                                aliquam.
                                </p>
                            </div>
                            </div>
                            <div className="project-item-two small-item">
                            <div className="project-thumb-two">
                                <Link href="/projects" passHref>
                                    <img
                                    src="img/project/h2_project_img02.jpg"
                                    alt=""
                                />
                                </Link>
                            </div>
                            <div className="project-content-two">
                                <h2 className="title">
                                    <Link href="/projects" passHref>
                                        Outdoor Cleaning
                                    </Link>
                                </h2>
                                <p>
                                Lorem ipsum dolor sit consectetur. Ut tellus suspendisse
                                aliquam.
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
