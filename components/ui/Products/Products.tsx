import React, { FC } from 'react'
import { ProductCard } from '@components/product'

interface Props {}

const Products: FC<Props> = () => (
  <section className="product-section section-ptb bg-gray1">
    <div className="section-header pb--30 pb_lg--60">
      <div className="container">
        <div className="row align-items-center text-center text-lg-left">
          <div className="col-lg-6 mb--15 mb-lg-0">
            <h3>
              Our Collection of Handcrafted
              <br />
              <span>HTML Template</span>
            </h3>
          </div>
          <div className="col-lg-6 text-center text-lg-right">
            <div className="text text-center text-lg-left">
              <p>
                the examples used in this post are startups that specifically
                asked for feedback on their respec-tive websites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section-wrapper">
      <div className="container p-lg-0">
        <div className="d-flex pb--30 pb_lg--60">
          <ul className="product-tabname nav" role="tablist">
            <li role="presentation">
              <a
                className="tabnav-btn active"
                id="productTypeName1-tab1"
                data-toggle="tab"
                href="#productTypeName1"
                role="tab"
                aria-controls="productTypeName1"
                aria-selected="true"
              >
                WordPress
              </a>
            </li>
            <li role="presentation">
              <a
                className="tabnav-btn"
                id="productTypeName2-tab"
                data-toggle="tab"
                href="#productTypeName2"
                role="tab"
                aria-controls="productTypeName2"
                aria-selected="false"
              >
                Template
              </a>
            </li>
            <li role="presentation">
              <a
                className="tabnav-btn"
                id="productTypeName3-tab"
                data-toggle="tab"
                href="#productTypeName3"
                role="tab"
                aria-controls="productTypeName3"
                aria-selected="false"
              >
                PSD
              </a>
            </li>
            <li role="presentation">
              <a
                className="tabnav-btn"
                id="productTypeName4-tab"
                data-toggle="tab"
                href="#productTypeName4"
                role="tab"
                aria-controls="productTypeName4"
                aria-selected="false"
              >
                React
              </a>
            </li>
            <li role="presentation">
              <a
                className="tabnav-btn"
                id="productTypeName5-tab"
                data-toggle="tab"
                href="#productTypeName5"
                role="tab"
                aria-controls="productTypeName5"
                aria-selected="false"
              >
                Vue
              </a>
            </li>
            <li role="presentation">
              <a
                className="tabnav-btn"
                id="productTypeName6-tab"
                data-toggle="tab"
                href="#productTypeName6"
                role="tab"
                aria-controls="productTypeName6"
                aria-selected="false"
              >
                Angular
              </a>
            </li>
          </ul>
        </div>
        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="productTypeName1"
            role="tabpanel"
            aria-labelledby="productTypeName1-tab1"
          >
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <ProductCard />
              </div>
              <div className="col-md-6 col-lg-4">
                <ProductCard />
              </div>
              <div className="col-md-6 col-lg-4">
                <ProductCard />
              </div>
              <div className="col-12 mt--30 text-center">
                <a
                  href="product-leftsidebar.html"
                  className="view-theme button"
                >
                  View All Theme
                </a>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="productTypeName2"
            role="tabpanel"
            aria-labelledby="productTypeName2-tab"
          >
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <ProductCard />
              </div>
              <div className="col-md-6 col-lg-4">
                <ProductCard />
              </div>
              <div className="col-md-6 col-lg-4">
                <ProductCard />
              </div>
              <div className="col-12 mt--30 text-center">
                <a
                  href="product-leftsidebar.html"
                  className="view-theme button"
                >
                  View All Theme
                </a>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="productTypeName3"
            role="tabpanel"
            aria-labelledby="productTypeName3-tab"
          >
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <ProductCard />
              </div>
              <div className="col-md-6 col-lg-4">
                <ProductCard />
              </div>
              <div className="col-md-6 col-lg-4">
                <ProductCard />
              </div>
              <div className="col-12 mt--30 text-center">
                <a
                  href="product-leftsidebar.html"
                  className="view-theme button"
                >
                  View All Theme
                </a>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="productTypeName4"
            role="tabpanel"
            aria-labelledby="productTypeName4-tab"
          >
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <ProductCard />
              </div>
              <div className="col-md-6 col-lg-4">
                <ProductCard />
              </div>
              <div className="col-md-6 col-lg-4">
                <ProductCard />
              </div>
              <div className="col-12 mt--30 text-center">
                <a
                  href="product-leftsidebar.html"
                  className="view-theme button"
                >
                  View All Theme
                </a>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="productTypeName5"
            role="tabpanel"
            aria-labelledby="productTypeName5-tab"
          >
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <ProductCard />
              </div>
              <div className="col-md-6 col-lg-4">
                <ProductCard />
              </div>
              <div className="col-md-6 col-lg-4">
                <ProductCard />
              </div>
              <div className="col-12 mt--30 text-center">
                <a
                  href="product-leftsidebar.html"
                  className="view-theme button"
                >
                  View All Theme
                </a>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="productTypeName6"
            role="tabpanel"
            aria-labelledby="productTypeName6-tab"
          >
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <ProductCard />
              </div>
              <div className="col-md-6 col-lg-4">
                <ProductCard />
              </div>
              <div className="col-md-6 col-lg-4">
                <ProductCard />
              </div>
              <div className="col-12 mt--30 text-center">
                <a
                  href="product-leftsidebar.html"
                  className="view-theme button"
                >
                  View All Theme
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Products
