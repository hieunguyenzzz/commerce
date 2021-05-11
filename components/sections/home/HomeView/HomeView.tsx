import Image from 'next/image'
import React from 'react'
import s from './HomeView.module.css'
const HomeView: React.FC = () => (
  <div className={s.root} data-testid="HomeView">
    <div className="fit relative">
      <Image layout="fill" objectFit="cover" src="/home_cover.jpeg" />
    </div>
  </div>
)
export default HomeView
