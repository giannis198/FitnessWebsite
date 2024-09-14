// context/TextSizeContext.tsx
'use client'

import { createContext, useState, ReactNode } from 'react'

type TextSizeContextType = {
  textSize: string
  increaseTextSize: () => void
  increaseLetterSpacing: () => void
  increaseLineSpacing: () => void
  changeTextAlignment: () => void
}

export const TextSizeContext = createContext<TextSizeContextType | undefined>(
  undefined
)

type TextSizeProviderProps = {
  children: ReactNode
}

export const TextSizeProvider = ({ children }: TextSizeProviderProps) => {
  const [textSize, setTextSize] = useState<string>('medium')
  const [letterSpace, setLetterSpace] = useState<string>('medium')
  const [lineSpace, setLineSpace] = useState<string>('medium')
  const [textAlignment, setTextAlignment] = useState<string>('left')

  const increaseTextSize = () => {
    if (textSize === 'medium') {
      setTextSize('large')
      document.documentElement.style.fontSize = '20px'
    } else if (textSize === 'large') {
      setTextSize('x-large')
      document.documentElement.style.fontSize = '25px'
    } else {
      setTextSize('medium')
      document.documentElement.style.fontSize = '1rem'
    }
  }

  const increaseLetterSpacing = () => {
    if (letterSpace === 'medium') {
      setLetterSpace('large')
      document.documentElement.style.letterSpacing = '0.12em'
    } else if (letterSpace === 'large') {
      setLetterSpace('x-large')
      document.documentElement.style.letterSpacing = '0.24em'
    } else {
      setLetterSpace('medium')
      document.documentElement.style.letterSpacing = 'normal'
    }
  }

  const increaseLineSpacing = () => {
    if (lineSpace === 'medium') {
      setLineSpace('large')
      document.documentElement.style.lineHeight = '55.5px'
    } else if (lineSpace === 'large') {
      setLineSpace('x-large')
      document.documentElement.style.lineHeight = '64.75px'
    } else {
      setLineSpace('medium')
      document.documentElement.style.lineHeight = '74px'
    }
  }

  const changeTextAlignment = () => {
    if (textAlignment === 'left') {
      setTextAlignment('center')
      document.documentElement.style.textAlign = 'center'
    } else if (textAlignment === 'center') {
      setTextAlignment('right')
      document.documentElement.style.textAlign = 'right'
    } else {
      setTextAlignment('left')
      document.documentElement.style.textAlign = 'left'
    }
  }
  return (
    <TextSizeContext.Provider
      value={{
        textSize,
        increaseTextSize,
        increaseLetterSpacing,
        increaseLineSpacing,
        changeTextAlignment
      }}
    >
      {children}
    </TextSizeContext.Provider>
  )
}
