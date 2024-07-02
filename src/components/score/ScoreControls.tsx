import { css, cx } from '@emotion/css'
import { FC } from 'react'
import {
  RiPauseLargeFill,
  RiPlayLargeFill,
  RiStopLargeFill,
} from 'react-icons/ri'
import { RxLoop } from 'react-icons/rx'

export type BasicButtonProps = {
  onClick: () => void
}

export type ToggleButtonProps = BasicButtonProps & {
  isToggled: boolean
}

const playButtonStyle = css`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background-color: #ffffff15;
  color: #ffffff;
  font-size: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease, outline 0.2s ease;
  border: none;
  &:hover {
    background-color: #ffffff40;
  }
  &:focus {
    outline: 2px solid #ffffff;
  }
`

const secondaryButtonStyle = css`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  background-color: transparent;
  color: #ffffff;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease, outline 0.2s ease;
  background-color: #ffffff20;
  border: none;
  &:hover {
    background-color: #ffffff40;
  }
  &:focus {
    outline: 2px solid #ffffff;
  }
`

const toogledButtonStyle = css`
  background-color: #ffffff60;
  &:hover {
    background-color: #ffffff60;
  }
`

export const PlayButton: FC<ToggleButtonProps> = ({ onClick, isToggled }) => {
  return (
    <button className={playButtonStyle} onClick={onClick}>
      {isToggled ? <RiPauseLargeFill /> : <RiPlayLargeFill />}
    </button>
  )
}

export const LoopButton: FC<ToggleButtonProps> = ({ onClick, isToggled }) => {
  const className = cx(
    secondaryButtonStyle,
    isToggled ? toogledButtonStyle : null,
  )
  return (
    <button className={className} onClick={onClick}>
      <RxLoop />
    </button>
  )
}

export const StopButton: FC<BasicButtonProps> = ({ onClick }) => {
  return (
    <button className={secondaryButtonStyle} onClick={onClick}>
      <RiStopLargeFill />
    </button>
  )
}
