import { motion, useMotionValue, useTransform } from "framer-motion"
import './cards.css'
import React from "react"
import styled from "styled-components"
import MadeImg from "../../assets/kitt_squirrel_fly.png"
import { CardDetails } from "./CardDetails"

const CardWrapper = styled.div`
  width: 100%;
  perspective: 2500;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CardContainer = styled(motion.div)`
  width: 285px;
  height: 500px;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
  background-color: #1d1f21;
  color: #fff;
  position: absolute;
  cursor: grab;
`

const CircleWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
  border-top-right-radius: 25px;
`

const Circle = styled.div`
  position: absolute;
  width: 350px;
  height: 350px;
  top: -4.2em;
  right: -10em;
  z-index: 5;
  background-color: var(--color-lurp);
  border-radius: 50%;
`

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1.2;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  padding: 1em 15px;
`

const BottomContainer = styled.div`
  display: flex;
  flex: 0.8;
  padding: 0 1em;
`

const NftWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Card = styled(motion.div)`
  width: auto;
  height: 190px;
  z-index: 69;
  user-select: none;
  margin-right: 3em;
  margin-top: 4em;
  z: 10000;

  img {
    width: auto;
    height: 100%;
    user-select: none;
  }
`

export function CardNFT(props) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [30, -30])
  const rotateY = useTransform(x, [-100, 100], [-30, 30])

  return (
    <CardWrapper>
      <CardContainer
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.16}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: "grabbing" }}
      >
        <TopContainer>
          <CircleWrapper>
            <Circle />
          </CircleWrapper>
          <NftWrapper>
            <Card
              style={{
                x,
                y,
                rotateX,
                rotateY,
                rotate: "-25deg",
                z: 100000
              }}
              drag
              dragElastic={0.12}
              whileTap={{ cursor: "grabbing" }}
            >
              <img src={MadeImg} alt="made" />
            </Card>
          </NftWrapper>
        </TopContainer>
        <BottomContainer>
          <CardDetails />
        </BottomContainer>
      </CardContainer>
    </CardWrapper>
  )
}
