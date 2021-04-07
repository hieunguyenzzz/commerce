import React, { FC } from 'react'

interface Props {}

const NewsLetter: FC<Props> = () => (
  <section className="newsletter-section section-ptb-90">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 text-center text-lg-left mb-4 mb-lg-0">
          <div className="section-heading">
            <h3 className="mb-0 text-white">
              Lorem ipsum dolor
              <br />
              consectetuer adipiscing elit?
            </h3>
          </div>
        </div>
        <div className="col-lg-6 d-flex justify-content-center justify-content-lg-end">
          <form
            action="#"
            className="newsletter-form d-flex justify-content-center justify-content-lg-end"
          >
            <input type="text" name="email" placeholder="Email" />
            <button className="submit button" type="submit">
              Go
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
)

export default NewsLetter
