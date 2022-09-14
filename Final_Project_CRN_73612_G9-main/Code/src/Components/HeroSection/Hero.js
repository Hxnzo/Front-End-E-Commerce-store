import React, {useState} from 'react'
import Video from '../../Videos/video.mp4'
import {HeroContainer,HeroBg,VideoBg, HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight,Button} from './HeroElements'

const Hero = () => {

    const [hover,setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <HeroContainer id='home'>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type = '/video/mp4'/>
        </HeroBg>

        <HeroContent>
            <HeroH1>Welcome To Orange Tech</HeroH1>
            <HeroP>
                Highest Quality,
                Cheapest Price,
                Amazing tech
            </HeroP>
            <HeroBtnWrapper>
                <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                    Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default Hero