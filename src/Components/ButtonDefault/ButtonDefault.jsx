import React from "react"
import './Button.scss'

export function ButtonDefault({children}) {
  return (
      <button className="btnDefault">
      {children}
      </button>
  )
}