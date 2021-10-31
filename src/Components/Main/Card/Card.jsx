import React from "react"

export function Card({children, style}){
  return(
    <article className={style}>
      {children}
    </article>
  )
}