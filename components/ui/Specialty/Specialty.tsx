import React, { FC } from 'react'

interface Props {
  cards: any
}

const CARDS = [
  {
    img: '/images/feature/icon1.png',
    title: 'Beautiful Design',
    content: `Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eiusmod tempor incididunt magna aliqua.`,
  },
  {
    img: '/images/feature/icon2.png',
    title: 'Nice Functionality',
    content: `Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eiusmod tempor incididunt magna aliqua.`,
  },
  {
    img: '/images/feature/icon3.png',
    title: 'Fast Loading Speed',
    content: `Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eiusmod tempor incididunt magna aliqua.`,
  },
]

const Specialty: FC<Props> = ({ cards = CARDS }) => (
  <section className="specialty-section section-ptb">
    <div className="section-header pb--30 pb_lg--60">
      <div className="container">
        <div className="row align-items-center text-center text-lg-left">
          <div className="col-lg-6 mb--15 mb-lg-0">
            <h3>
              Convince Your Client
              <br />
              <span>with the Most Important Features </span>
            </h3>
          </div>
          <div className="col-lg-6 text-center text-lg-right">
            <a href="/" className="flux-btn-solid">
              Join with Us
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="section-wrapper">
      <div className="container">
        <div className="row">
          {cards.map((card, key) => (
            <div className="col-md-6 col-lg-4" key={key}>
              <div className="card style1">
                <div className="thumb">
                  <img src={card.img} alt="feature icon" />
                </div>
                <div className="content">
                  <h5 className="title">{card.title}</h5>
                  <p>{card.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default Specialty
