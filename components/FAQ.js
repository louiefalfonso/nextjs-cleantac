import React from 'react'

export default function FAQ() {
  return (
    <>
    <section className="faq-area pt-90">
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-lg-6">
                <div className="faq-content">
                <div className="section-title-two mb-40 tg-heading-subheading animation-style2">
                    <span className="sub-title">Our Company FAQs</span>
                    <h2 className="title tg-element-title">
                    Frequently Asked <br /> Question from Our Clients
                    </h2>
                </div>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                        >
                        What days and hours can I have my home cleaned?
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                        <p>
                            Lorem ipsum dolor sit amet consectetur. suspendisse nulla
                            aliquam. Risus rutrum tellus eget ultrices pretium nisi amet
                            facilisis dummy text now.
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                        >
                        Do I need to be at home during the cleaning services?
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                        <p>
                            Lorem ipsum dolor sit amet consectetur. suspendisse nulla
                            aliquam. Risus rutrum tellus eget ultrices pretium nisi amet
                            facilisis dummy text now.
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                        >
                        How will I recognise your staff?
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                        <p>
                            Lorem ipsum dolor sit amet consectetur. suspendisse nulla
                            aliquam. Risus rutrum tellus eget ultrices pretium nisi amet
                            facilisis dummy text now.
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                        <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                        >
                        And will they wear their outside shoes in my home?
                        </button>
                    </h2>
                    <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                        <p>
                            Lorem ipsum dolor sit amet consectetur. suspendisse nulla
                            aliquam. Risus rutrum tellus eget ultrices pretium nisi amet
                            facilisis dummy text now.
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                        <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                        >
                        Do you bring all your own equipment and supplies?
                        </button>
                    </h2>
                    <div
                        id="collapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFive"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                        <p>
                            Lorem ipsum dolor sit amet consectetur. suspendisse nulla
                            aliquam. Risus rutrum tellus eget ultrices pretium nisi amet
                            facilisis dummy text now.
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSix">
                        <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                        >
                        So what equipment do you use?
                        </button>
                    </h2>
                    <div
                        id="collapseSix"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingSix"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                        <p>
                            Lorem ipsum dolor sit amet consectetur. suspendisse nulla
                            aliquam. Risus rutrum tellus eget ultrices pretium nisi amet
                            facilisis dummy text now.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-8">
                <div className="faq-img">
                <img src="img/images/faq_img.png" alt=""/>
                </div>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}
