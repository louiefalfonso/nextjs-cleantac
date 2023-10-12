import React from 'react'
import Link from 'next/link'

export default function ServicesSlider() {
  return (
    <>
    <section className="services-area-three pt-125">
        <div className="services-bg jarallax" data-background="img/bg/services_bg.jpg"/>
        <div className="container custom-container">
            <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7">
                <div className="section-title-two white-title text-center mb-65 tg-heading-subheading animation-style2">
                <span className="sub-title">What We’re Offering</span>
                <h2 className="title tg-element-title">
                    Providing the Best Services <br /> for Our Customers
                </h2>
                </div>
            </div>
            </div>
            <div className="services-item-wrap-two">
                <div className="row services-active">
                    <div className="col-lg-3">
                        <div className="services-item-three">
                            <div className="services-thumb-three">
                            <Link href="/services" passHref>
                                <img src="img/images/services_img06.jpg" alt="" />
                            </Link>
                            </div>
                            <div className="services-content-three">
                            <div className="icon">
                                <svg
                                viewBox="0 0 20 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    d="M18.7379 18.7498C18.7379 17.8794 17.2221 15.4468 17.2221 15.4468C17.2221 15.4468 15.6833 17.8794 15.6833 18.7498C15.6833 19.6184 16.3675 20.3229 17.2108 20.3229C18.0537 20.3229 18.7379 19.6184 18.7379 18.7498ZM7.7775 5.12022H4.72292V1.96567H5.55583V0.244141H0V1.96567H0.833333V6.84132C0.833333 8.1089 1.82833 9.13597 3.05542 9.13597H7.7775V9.99673H9.44458V4.26032H7.7775V5.12022ZM19.1658 12.2909V7.41531C19.1658 6.14816 18.1712 5.12066 16.9454 5.12066H12.2225V4.26076H10.5554V9.99761H12.2225V9.1364H15.2775V12.2909H14.4454V14.0125H20V12.2909H19.1658Z"
                                    fill="currentcolor"
                                />
                                </svg>
                            </div>
                            <h2 className="title">
                                <Link href="/services" passHref>Plumbing Service</Link>
                            </h2>
                            <p>
                                Lorem ipsum dolor sit consectetur. Ut tellus suspendisse nulla
                                aliquam. Risus any rutrum eget time of ultrices.
                            </p>
                            <Link href="/services" passHref className="btn btn-two">Read more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                    <div className="services-item-three">
                        <div className="services-thumb-three">
                            <Link href="/services" passHref>
                                <img src="img/images/services_img01.jpg" alt="" />
                            </Link>
                        </div>
                        <div className="services-content-three">
                        <div className="icon">
                            <svg
                            viewBox="0 0 29 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                d="M14.383 14.6886C14.383 15.2897 13.8961 15.7766 13.2949 15.7766H6.76664C6.16549 15.7766 5.67859 15.2897 5.67859 14.6886V9.24833C5.67859 6.84484 7.62728 4.89615 10.0308 4.89615C10.8234 4.89615 11.5666 5.10831 12.2069 5.47825C13.5076 6.23118 14.383 7.63748 14.383 9.24833V14.6886Z"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M10.0308 17.9526H13.2949C13.8961 17.9526 14.383 18.4395 14.383 19.0406C14.383 19.6418 13.8961 20.1287 13.2949 20.1287H6.76664C6.16549 20.1287 5.67859 19.6418 5.67859 19.0406C5.67859 18.4395 6.16549 17.9526 6.76664 17.9526H10.0308Z"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M5.6786 14.6887H1V12.5126H5.6786"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M14.383 12.5126H27.766V14.6887H14.383"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M2.08807 25.5691V14.6886"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M16.5591 14.6886V25.5691H26.6779V14.6886"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M5.67859 25.5691C5.67859 24.9679 6.16549 24.481 6.76664 24.481H13.2949C13.8961 24.481 14.383 24.9679 14.383 25.5691"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M10.0308 25.5691V22.305"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M10.0308 17.9526V15.7765"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M8.94275 20.1288V22.3049H11.1188V20.1288"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M26.6779 20.1287H16.5591"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M19.9865 16.8647H23.2506"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M19.9865 22.3049H23.2506"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M19.9865 10.3366V12.5127"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M6.76661 2.72015C5.56486 2.72015 4.59052 3.69449 4.59052 4.89624"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M2.41449 2.72015C3.61624 2.72015 4.59058 3.69449 4.59058 4.89624"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M6.76661 2.71997C5.56486 2.71997 4.59052 1.74562 4.59052 0.543877"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M2.41449 2.71997C3.61624 2.71997 4.59058 1.74562 4.59058 0.543877"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M17.8103 8.1604V5.98431"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M18.8984 7.07227H16.7223"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M23.2505 4.89624V2.72015"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M24.3386 3.80811H22.1625"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M20.5304 0.544111C20.5304 0.844521 20.2868 1.08813 19.9864 1.08813C19.686 1.08813 19.4424 0.844521 19.4424 0.544111C19.4424 0.243702 19.686 8.80957e-05 19.9864 8.80957e-05C20.2868 8.80957e-05 20.5304 0.243702 20.5304 0.544111Z"
                                fill="currentcolor"
                            />
                            <path
                                d="M12.2069 5.47827V0.54398H17.5383"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M22.4345 0.544007H27.766V10.3364H14.383"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            </svg>
                        </div>
                        <h2 className="title">
                            <Link href="/services" passHref>Office Cleaning</Link>
                        </h2>
                        <p>
                            Lorem ipsum dolor sit consectetur. Ut tellus suspendisse nulla
                            aliquam. Risus any rutrum eget time of ultrices.
                        </p>
                        <Link href="/services" passHref className="btn btn-two">Read More</Link>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3">
                    <div className="services-item-three">
                        <div className="services-thumb-three">
                            <Link href="/services" passHref>
                                <img src="img/images/services_img02.jpg" alt="" />
                            </Link>
                        </div>
                        <div className="services-content-three">
                        <div className="icon">
                            <svg
                            viewBox="0 0 22 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                d="M17.2975 17.5312C17.1077 17.5312 16.9537 17.6849 16.9537 17.875C16.9537 18.2542 16.6454 18.5625 16.2662 18.5625C16.0765 18.5625 15.9225 18.7162 15.9225 18.9063C15.9225 19.0963 16.0765 19.25 16.2662 19.25C17.0246 19.25 17.6412 18.6333 17.6412 17.875C17.6412 17.6849 17.4872 17.5312 17.2975 17.5312Z"
                                fill="currentcolor"
                            />
                            <path
                                d="M17.5347 14.1936C17.7241 14.1936 17.8784 14.3476 17.8784 14.5374C17.8784 14.7275 18.0324 14.8811 18.2222 14.8811C18.4119 14.8811 18.5659 14.7275 18.5659 14.5374C18.5659 13.9688 18.1032 13.5061 17.5347 13.5061C17.3449 13.5061 17.1909 13.6598 17.1909 13.8499C17.1909 14.0399 17.3449 14.1936 17.5347 14.1936Z"
                                fill="currentcolor"
                            />
                            <path
                                d="M12.925 19.1746C12.7356 19.1746 12.5812 19.0206 12.5812 18.8308C12.5812 18.6407 12.4272 18.4871 12.2375 18.4871C12.0477 18.4871 11.8937 18.6407 11.8937 18.8308C11.8937 19.3994 12.3564 19.8621 12.925 19.8621C13.1147 19.8621 13.2687 19.7084 13.2687 19.5183C13.2687 19.3282 13.1147 19.1746 12.925 19.1746Z"
                                fill="currentcolor"
                            />
                            <path
                                d="M4.12494 13.176C4.12494 13.3661 4.27894 13.5198 4.46869 13.5198C4.65844 13.5198 4.81244 13.3661 4.81244 13.176C4.81244 12.6075 4.34975 12.1448 3.78119 12.1448C3.59144 12.1448 3.43744 12.2984 3.43744 12.4885C3.43744 12.6786 3.59144 12.8323 3.78119 12.8323C3.9706 12.8323 4.12494 12.9863 4.12494 13.176Z"
                                fill="currentcolor"
                            />
                            <path
                                d="M10.8556 14.1936C11.0453 14.1936 11.1993 14.04 11.1993 13.8499C11.1993 13.6601 11.3537 13.5061 11.5431 13.5061C11.7328 13.5061 11.8868 13.3524 11.8868 13.1624C11.8868 12.9723 11.7328 12.8186 11.5431 12.8186C10.9745 12.8186 10.5118 13.2813 10.5118 13.8499C10.5118 14.04 10.6658 14.1936 10.8556 14.1936Z"
                                fill="currentcolor"
                            />
                            <path
                                d="M11.3437 15.8125C12.4812 15.8125 13.4062 14.8874 13.4062 13.75C13.4062 13.5571 13.3808 13.3708 13.3306 13.1927C13.444 13.1257 13.5478 13.0446 13.6382 12.9525C13.9315 12.6613 14.093 12.2732 14.093 11.8593C14.093 11.4454 13.9315 11.0574 13.64 10.7683C13.3488 10.4747 12.9607 10.3135 12.5468 10.3135C12.1329 10.3135 11.7449 10.475 11.4547 10.7672C11.1952 11.0268 11.0405 11.3599 11.0078 11.7146C10.0299 11.8758 9.28119 12.727 9.28119 13.75C9.28119 14.8874 10.2062 15.8125 11.3437 15.8125ZM11.3437 12.375H11.3574C11.4571 12.375 11.5517 12.3316 11.617 12.2564C11.6823 12.1814 11.7119 12.0814 11.6978 11.9831C11.6593 11.7119 11.7479 11.4458 11.9415 11.2523C12.2639 10.9281 12.828 10.926 13.1535 11.2543C13.3158 11.4152 13.4052 11.63 13.4052 11.8593C13.4052 12.0886 13.3158 12.3035 13.1498 12.4681C13.0532 12.5668 12.9304 12.6407 12.7947 12.6812C12.6977 12.7105 12.6187 12.7806 12.5784 12.8734C12.5382 12.9662 12.5406 13.0717 12.5853 13.1625C12.674 13.3419 12.7187 13.5396 12.7187 13.75C12.7187 14.5083 12.102 15.125 11.3437 15.125C10.5854 15.125 9.96869 14.5083 9.96869 13.75C9.96869 12.9916 10.5854 12.375 11.3437 12.375Z"
                                fill="currentcolor"
                            />
                            <path
                                d="M20.9687 16.1563C20.9687 15.2505 20.3954 14.4606 19.5755 14.177C19.4611 13.276 18.7646 12.5562 17.875 12.406V8.34627L20.1977 8.92687C20.2259 8.93409 20.2537 8.93752 20.2816 8.93752C20.4356 8.93752 20.5755 8.83337 20.6147 8.67696L21.9897 3.17695C22.0278 3.02432 21.957 2.86482 21.8178 2.79057L17.8743 0.686127C17.0273 0.237188 16.0765 0 15.125 0C15.037 0 14.9562 0.0440001 14.9486 0.0488126C14.9321 0.0584376 13.2742 1.03125 11 1.03125C8.72571 1.03125 7.0678 0.0584376 7.0513 0.0488126C7.04374 0.0440001 6.96777 0 6.87496 0C5.92345 0 4.97264 0.237188 4.12495 0.686814L0.182125 2.79057C0.042906 2.86482 -0.0279067 3.02432 0.0102496 3.17695L1.38525 8.67696C1.43166 8.86155 1.619 8.97327 1.80222 8.92721L4.12495 8.34627V9.2909C4.06857 9.28471 4.01117 9.28127 3.95307 9.28127C3.10023 9.28127 2.40619 9.97531 2.40619 10.8282C2.40619 11.0375 2.44744 11.2396 2.52651 11.4259C2.02119 11.8113 1.71869 12.4111 1.71869 13.0625C1.71869 13.6888 1.99575 14.2663 2.47151 14.6562C2.42854 14.8067 2.40619 14.9652 2.40619 15.125C2.40619 16.0728 3.17723 16.8438 4.12495 16.8438V18.9063C4.12495 19.0964 4.27895 19.25 4.4687 19.25H10.6872C10.8515 20.2239 11.6985 20.9688 12.7187 20.9688C13.4303 20.9688 14.0728 20.601 14.4468 20.0225C14.9273 20.4078 15.5275 20.6251 16.1562 20.6251C17.556 20.6251 18.7124 19.5732 18.8825 18.2188H18.9062C20.0437 18.2188 20.9687 17.2938 20.9687 16.1563ZM14.6657 0.953909C14.5781 1.31244 14.4282 1.77925 14.1762 2.24297C13.5018 3.49182 12.4331 4.12501 11 4.12501C8.41943 4.12501 7.58721 2.0381 7.32836 0.951159C8.05952 1.27085 9.37231 1.71875 11 1.71875C12.6235 1.71875 13.9335 1.27291 14.6657 0.953909ZM3.0937 15.125C3.0937 14.969 3.12876 14.8167 3.19476 14.6844C3.27451 14.5245 3.21882 14.3306 3.06654 14.2371C2.65301 13.9845 2.40619 13.5448 2.40619 13.0625C2.40619 12.5479 2.68944 12.0815 3.14526 11.845C3.23532 11.7982 3.29995 11.7143 3.32229 11.6153C3.34463 11.5167 3.32229 11.4129 3.26076 11.3321C3.15145 11.1877 3.0937 11.0134 3.0937 10.8282C3.0937 10.3541 3.47938 9.96878 3.95307 9.96878C4.01289 9.96878 4.0696 9.97634 4.12495 9.98768V11.4847C4.12495 11.6208 4.20504 11.7439 4.32948 11.7989C4.8317 12.022 5.1562 12.5177 5.1562 13.0625C5.1562 13.607 4.83204 14.1024 4.33498 14.3234C4.33498 14.3234 4.33498 14.3234 4.33464 14.3234C4.33429 14.3234 4.33395 14.3238 4.33361 14.3238C4.24423 14.3616 4.15107 14.3904 4.05654 14.4097C3.87023 14.4472 3.74992 14.6287 3.78738 14.8146C3.82038 14.9783 3.96373 15.0907 4.12392 15.0907H4.12426V16.1563C3.55638 16.1563 3.0937 15.6936 3.0937 15.125ZM4.81245 14.8456C5.44426 14.4767 5.8437 13.8013 5.8437 13.0625C5.8437 12.3228 5.44564 11.6435 4.81245 11.275V6.87502C4.81245 6.68492 4.65845 6.53127 4.4687 6.53127C4.27895 6.53127 4.12495 6.68492 4.12495 6.87502V7.63814L1.96894 8.17715L0.742439 3.27079L4.44773 1.29388C5.10808 0.943596 5.83958 0.739408 6.57967 0.696439C6.76358 1.7191 7.60199 4.81251 11 4.81251C13.124 4.81251 14.2288 3.59288 14.7809 2.57057C15.181 1.83357 15.3529 1.10241 15.423 0.696439C16.1621 0.740096 16.8925 0.944284 17.5515 1.29319L21.2575 3.27079L20.031 8.1768L17.875 7.63814V6.87502C17.875 6.68492 17.721 6.53127 17.5312 6.53127C17.3415 6.53127 17.1875 6.68492 17.1875 6.87502V12.406C16.2136 12.5703 15.4687 13.4173 15.4687 14.4375C15.4687 14.6964 15.5151 14.947 15.6055 15.1807C14.6434 15.378 13.8507 16.0824 13.5448 17.0157C13.2876 16.9022 13.0085 16.8438 12.7187 16.8438C11.6988 16.8438 10.8518 17.5887 10.6872 18.5625H4.81245V14.8456ZM16.1562 19.9376C15.5598 19.9376 14.9957 19.6801 14.6052 19.2281C14.4787 19.0857 14.3735 18.9276 14.2924 18.7581C14.2103 18.5866 14.005 18.5148 13.8338 18.5962C13.6627 18.6784 13.5905 18.8836 13.6723 19.0548C13.7493 19.2157 13.8473 19.3645 13.9535 19.5065C13.7256 19.975 13.2502 20.2813 12.7187 20.2813C11.9604 20.2813 11.3437 19.6646 11.3437 18.9063C11.3437 18.148 11.9604 17.5313 12.7187 17.5313C13.0288 17.5313 13.3203 17.6317 13.5613 17.8218C13.6582 17.8984 13.7892 17.9163 13.9036 17.8706C14.0181 17.8238 14.0989 17.7197 14.115 17.597C14.2488 16.5795 15.1264 15.8125 16.1562 15.8125C16.2869 15.8125 16.4061 15.7386 16.4642 15.6214C16.5223 15.5045 16.5093 15.365 16.4302 15.2608C16.2508 15.025 16.1562 14.74 16.1562 14.4375C16.1562 13.6792 16.7729 13.0625 17.5312 13.0625C18.2895 13.0625 18.9062 13.6792 18.9062 14.4375C18.8935 14.762 19.1706 14.7724 19.1823 14.7744C19.8086 14.9006 20.2812 15.4942 20.2812 16.1563C20.2812 16.9146 19.6646 17.5313 18.9062 17.5313H18.8805C18.8261 17.0916 18.6728 16.6771 18.4229 16.3168C18.6395 16.2223 18.8306 16.0979 18.9939 15.9449C19.1324 15.8149 19.1393 15.5974 19.0094 15.4588C18.8794 15.3206 18.6615 15.3138 18.5233 15.4434C18.3329 15.6221 18.0754 15.7438 17.7578 15.8053C17.6316 15.8294 17.5295 15.9225 17.4931 16.0456C17.457 16.169 17.4924 16.3024 17.5855 16.3911C17.9939 16.7805 18.2187 17.3079 18.2187 17.875C18.2187 19.0125 17.2937 19.9376 16.1562 19.9376Z"
                                fill="currentcolor"
                            />
                            <path
                                d="M2.48663 18.2652C2.32163 18.1693 2.11194 18.226 2.01672 18.3903C1.95519 18.4965 1.84107 18.5625 1.71869 18.5625C1.52928 18.5625 1.37494 18.4085 1.37494 18.2188C1.37494 18.029 1.52928 17.875 1.71869 17.875C1.90844 17.875 2.06244 17.7213 2.06244 17.5313C2.06244 17.3412 1.90844 17.1875 1.71869 17.1875C1.15013 17.1875 0.687439 17.6502 0.687439 18.2188C0.687439 18.7873 1.15013 19.25 1.71869 19.25C2.08547 19.25 2.42751 19.0527 2.61176 18.7347C2.70698 18.5704 2.6506 18.36 2.48663 18.2652Z"
                                fill="currentcolor"
                            />
                            <path
                                d="M20.4531 11.8704C20.4273 11.8319 20.4005 11.7941 20.372 11.7576C20.0781 11.3798 19.6797 11.1719 19.25 11.1719C19.0603 11.1719 18.9062 11.3255 18.9062 11.5156C18.9062 11.7057 19.0603 11.8594 19.25 11.8594C19.4628 11.8594 19.6687 11.9732 19.8296 12.1801C20.01 12.4118 20.1094 12.7256 20.1094 13.0625C20.1094 13.2526 20.2634 13.4063 20.4531 13.4063C20.6429 13.4063 20.7969 13.2526 20.7969 13.0625C20.7969 12.7256 20.8962 12.4118 21.0767 12.1801C21.2376 11.9732 21.4435 11.8594 21.6563 11.8594C21.846 11.8594 22 11.7057 22 11.5156C22 11.3255 21.846 11.1719 21.6563 11.1719C21.1905 11.1719 20.7969 10.6208 20.7969 9.96875C20.7969 9.77866 20.6429 9.625 20.4531 9.625C20.2634 9.625 20.1094 9.77866 20.1094 9.96875C20.1094 10.6061 20.3686 11.1708 20.7653 11.5136C20.6828 11.5844 20.6054 11.6662 20.5339 11.7576C20.5057 11.7944 20.4789 11.8319 20.4531 11.8704Z"
                                fill="currentcolor"
                            />
                            <path
                                d="M10.3124 7.90626C10.5335 7.90626 10.7435 8.00766 10.9047 8.19157C11.0769 8.38854 11.1718 8.65357 11.1718 8.93751C11.1718 9.1276 11.3258 9.28126 11.5156 9.28126C11.7053 9.28126 11.8593 9.1276 11.8593 8.93751C11.8593 8.65357 11.9542 8.38854 12.1268 8.19157C12.2876 8.00766 12.4977 7.90626 12.7187 7.90626C12.9084 7.90626 13.0624 7.7526 13.0624 7.5625C13.0624 7.37241 12.9084 7.21875 12.7187 7.21875C12.2966 7.21875 11.9023 7.40335 11.6091 7.73919C11.5761 7.77666 11.5448 7.81585 11.5156 7.85607C11.4863 7.81585 11.4551 7.777 11.4221 7.73919C11.3653 7.67457 11.3048 7.6151 11.2409 7.56147C11.6163 7.24763 11.8593 6.7485 11.8593 6.1875C11.8593 5.99741 11.7053 5.84375 11.5156 5.84375C11.3258 5.84375 11.1718 5.99741 11.1718 6.1875C11.1718 6.75606 10.7861 7.21875 10.3124 7.21875C10.1227 7.21875 9.96869 7.37241 9.96869 7.5625C9.96869 7.7526 10.1227 7.90626 10.3124 7.90626Z"
                                fill="currentcolor"
                            />
                            <path
                                d="M10.3124 10.3125C10.5022 10.3125 10.6562 10.1589 10.6562 9.96876C10.6562 9.77866 10.5022 9.62501 10.3124 9.62501C9.55413 9.62501 8.93745 8.85397 8.93745 7.90625C8.93745 7.71616 8.78345 7.5625 8.59369 7.5625C8.40394 7.5625 8.24994 7.71616 8.24994 7.90625C8.24994 8.37685 8.09938 8.81685 7.82644 9.14479C7.56794 9.45451 7.23003 9.62501 6.87494 9.62501C6.68519 9.62501 6.53119 9.77866 6.53119 9.96876C6.53119 10.1589 6.68519 10.3125 6.87494 10.3125C7.23003 10.3125 7.56794 10.483 7.82644 10.7924C8.09938 11.1207 8.24994 11.5607 8.24994 12.0313C8.24994 12.2214 8.40394 12.375 8.59369 12.375C8.78345 12.375 8.93745 12.2214 8.93745 12.0313C8.93745 11.5607 9.08801 11.1207 9.36095 10.7927C9.61945 10.483 9.95735 10.3125 10.3124 10.3125ZM8.83294 10.3527C8.74323 10.4603 8.66348 10.5755 8.59369 10.6982C8.52391 10.5758 8.44382 10.46 8.35444 10.3524C8.22932 10.2022 8.09044 10.0739 7.94125 9.96876C8.09079 9.86322 8.22932 9.73466 8.35444 9.58479C8.44451 9.47719 8.52494 9.36066 8.59507 9.23725C8.76419 9.53288 8.98763 9.78279 9.24888 9.96704C9.09832 10.0729 8.95876 10.2018 8.83294 10.3527Z"
                                fill="currentcolor"
                            />
                            <path
                                d="M20.7969 18.5625C20.6071 18.5625 20.4531 18.7162 20.4531 18.9063C20.4531 19.0963 20.6071 19.25 20.7969 19.25C21.0812 19.25 21.3125 19.4813 21.3125 19.7656C21.3125 20.0499 21.0812 20.2813 20.7969 20.2813C20.5126 20.2813 20.2813 20.0499 20.2813 19.7656C20.2813 19.5755 20.1273 19.4219 19.9375 19.4219C19.7478 19.4219 19.5938 19.5755 19.5938 19.7656C19.5938 20.4291 20.1334 20.9688 20.7969 20.9688C21.4603 20.9688 22 20.4291 22 19.7656C22 19.1022 21.4603 18.5625 20.7969 18.5625Z"
                                fill="currentcolor"
                            />
                            </svg>
                        </div>
                        <h2 className="title">
                            <Link href="/services" passHref>Laundry Service</Link>
                        </h2>
                        <p>
                            Lorem ipsum dolor sit consectetur. Ut tellus suspendisse nulla
                            aliquam. Risus any rutrum eget time of ultrices.
                        </p>
                        <Link href="/services" passHref className="btn btn-two">Read More</Link>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3">
                    <div className="services-item-three">
                        <div className="services-thumb-three">
                            <Link href="/services" passHref>
                               <img src="img/images/services_img03.jpg" alt="" /> 
                            </Link>
                        </div>
                        <div className="services-content-three">
                        <div className="icon">
                            <svg
                            viewBox="0 0 27 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                d="M26 9.43506H15.5325V7.40254H26V9.43506Z"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M15.5325 7.40234L18.7337 5.36983H22.7988L26 7.40234"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M18.7337 5.36987V0.999959H22.7988V5.36987"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M7.25002 1.00011H13.5V9.43506H1.00003V1.00011H7.25002Z"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M7.25002 9.43506V1.00011"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M5.2175 4.04883V6.38623"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M9.28254 4.04883V6.38623"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M23.9675 23.9675H15.5325V19.9025H23.9675V23.9675Z"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M13.5 26V17.8699"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M18.7338 15.8376H17.7175V17.8701"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M22.9512 15.8376H23.9675V17.8701"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M1.00003 21.9351H13.5"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M6.23376 19.9026H8.26628"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M6.23376 23.9675H8.26628"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M13.5 13.5C12.3776 13.5 11.4675 14.41 11.4675 15.5325"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M9.43497 13.5C10.5574 13.5 11.4675 14.41 11.4675 15.5325"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M13.5 13.5C12.3776 13.5 11.4675 12.5899 11.4675 11.4675"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M9.43497 13.5C10.5574 13.5 11.4675 12.5899 11.4675 11.4675"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M19.75 13.5V11.4675"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M20.7663 12.4836H18.7337"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M5.36994 15.5325V13.5"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M6.3862 14.5161H4.35368"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M7.75815 26.0002C7.75815 26.2808 7.53066 26.5083 7.25002 26.5083C6.96938 26.5083 6.74189 26.2808 6.74189 26.0002C6.74189 25.7196 6.96938 25.492 7.25002 25.492C7.53066 25.492 7.75815 25.7196 7.75815 26.0002Z"
                                fill="currentcolor"
                            />
                            <path
                                d="M4.96341 26H1V17.8699H26V26H9.53663"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            </svg>
                        </div>
                        <h2 className="title">
                            <Link href="/services" passHref>Kitchen Cleaning</Link>
                        </h2>
                        <p>
                            Lorem ipsum dolor sit consectetur. Ut tellus suspendisse nulla
                            aliquam. Risus any rutrum eget time of ultrices.
                        </p>
                            <Link href="/services" passHref className="btn btn-two">Read More</Link>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3">
                    <div className="services-item-three">
                        <div className="services-thumb-three">
                            <Link href="/services" passHref>
                                <img src="img/images/services_img05.jpg" alt="" />
                            </Link>
                        </div>
                        <div className="services-content-three">
                        <div className="icon">
                            <svg
                            viewBox="0 0 29 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                d="M14.383 14.6886C14.383 15.2897 13.8961 15.7766 13.2949 15.7766H6.76664C6.16549 15.7766 5.67859 15.2897 5.67859 14.6886V9.24833C5.67859 6.84484 7.62728 4.89615 10.0308 4.89615C10.8234 4.89615 11.5666 5.10831 12.2069 5.47825C13.5076 6.23118 14.383 7.63748 14.383 9.24833V14.6886Z"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M10.0308 17.9526H13.2949C13.8961 17.9526 14.383 18.4395 14.383 19.0406C14.383 19.6418 13.8961 20.1287 13.2949 20.1287H6.76664C6.16549 20.1287 5.67859 19.6418 5.67859 19.0406C5.67859 18.4395 6.16549 17.9526 6.76664 17.9526H10.0308Z"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M5.6786 14.6887H1V12.5126H5.6786"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M14.383 12.5126H27.766V14.6887H14.383"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M2.08807 25.5691V14.6886"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M16.5591 14.6886V25.5691H26.6779V14.6886"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M5.67859 25.5691C5.67859 24.9679 6.16549 24.481 6.76664 24.481H13.2949C13.8961 24.481 14.383 24.9679 14.383 25.5691"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M10.0308 25.5691V22.305"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M10.0308 17.9526V15.7765"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M8.94275 20.1288V22.3049H11.1188V20.1288"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M26.6779 20.1287H16.5591"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M19.9865 16.8647H23.2506"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M19.9865 22.3049H23.2506"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M19.9865 10.3366V12.5127"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M6.76661 2.72015C5.56486 2.72015 4.59052 3.69449 4.59052 4.89624"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M2.41449 2.72015C3.61624 2.72015 4.59058 3.69449 4.59058 4.89624"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M6.76661 2.71997C5.56486 2.71997 4.59052 1.74562 4.59052 0.543877"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M2.41449 2.71997C3.61624 2.71997 4.59058 1.74562 4.59058 0.543877"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M17.8103 8.1604V5.98431"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M18.8984 7.07227H16.7223"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M23.2505 4.89624V2.72015"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M24.3386 3.80811H22.1625"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M20.5304 0.544111C20.5304 0.844521 20.2868 1.08813 19.9864 1.08813C19.686 1.08813 19.4424 0.844521 19.4424 0.544111C19.4424 0.243702 19.686 8.80957e-05 19.9864 8.80957e-05C20.2868 8.80957e-05 20.5304 0.243702 20.5304 0.544111Z"
                                fill="currentcolor"
                            />
                            <path
                                d="M12.2069 5.47827V0.54398H17.5383"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M22.4345 0.544007H27.766V10.3364H14.383"
                                stroke="currentcolor"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            </svg>
                        </div>
                        <h2 className="title">
                            <Link href="/services" passHref>Office Cleaning</Link>
                        </h2>
                        <p>
                            Lorem ipsum dolor sit consectetur. Ut tellus suspendisse nulla
                            aliquam. Risus any rutrum eget time of ultrices.
                        </p>
                        <Link href="/services" passHref className="btn btn-two">Read More</Link>
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
