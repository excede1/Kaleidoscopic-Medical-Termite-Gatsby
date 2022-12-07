import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import projectStyles from '../style.module.css'
import styles from './index.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Kaleidoscopic Medical Termite</title>
        <meta property="og:title" content="Kaleidoscopic Medical Termite" />
      </Helmet>
      <Header></Header>
      <div className={styles['container1']}>
        <div className={styles['container2']}>
          <div className={projectStyles['videocontainer']}>
            <video
              src="/playground_assets/pp-moose_3.mp4"
              loop
              muted
              poster="https://play.teleporthq.io/static/svg/videoposter.svg"
              preload="auto"
              autoPlay
              playsInline
              className={styles['video']}
            ></video>
          </div>
          <div className={styles['hero-headlines']}>
            <div className={styles['container3']}>
              <h1 className={styles['text']}>
                Toilet Train Your Apartment Dog in Days
              </h1>
              <span className={styles['text1']}>
                Australia&apos;s first real grass dog toilet for urban dogs
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
