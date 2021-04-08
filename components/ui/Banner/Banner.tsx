import React, { FC } from 'react'

interface Props {}

const Banner: FC<Props> = () => (
  <section className="banner-section style2">
    <div className="shape-layer">
      <div className="circle-shape" data-depth="0.1"></div>
      <div className="circle-shape-2" data-depth="0.05"></div>
      <div className="shape-box1" data-depth="0.15">
        <img src="/images/dot-shape.png" alt="" />
      </div>
      <div className="shape-box" data-depth="0.15">
        <img src="/images/dot-shape.png" alt="" />
        <div className="sm-circle"></div>
      </div>
      <div className="name-shape" data-depth="0.3">
        <img src="/images/flux.png" alt="" />
      </div>
      <div className="dot-circle-shape" data-depth="0.1"></div>
    </div>
    <div className="banner-content-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="banner-text">
              <p className="subtitle">Give Your Business A New Identity</p>
              <h1 className="title">
                Give Your Business
                <br />A New Identity
              </h1>
              <a href="product-leftsidebar.html" className="banner-btn">
                <span>Browse Products</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="banner-image-area">
      <div className="screenshot-images" data-depth="0.05">
        <img src="/images/banner/screenshot/01.png" alt="screenshot" />
        <div className="screenshot1" data-depth="0.015">
          <img src="/images/banner/screenshot/02.png" alt="screenshot" />
        </div>
        <div className="screenshot2" data-depth="0.03">
          <img src="/images/banner/screenshot/03.png" alt="screenshot" />
        </div>
        <div className="screenshot3" data-depth="0.02">
          <img src="/images/banner/screenshot/04.png" alt="screenshot" />
        </div>
      </div>
    </div>
  </section>
)

export default Banner
