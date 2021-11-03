import React from "react"
import './AsideLogin.scss'

export function AsideLogin() {
  return (
    <aside className="aside">
        <h2 className="aside-title">
          Seja um desenvolvedor <strong>Front-end</strong>
        </h2>

        <div className="aside-imagens">
          <div>
            <img src="https://github.com/alexRicc2.png" alt="" />
            <p>Alex</p>
          </div>
          <div>
            <img src="https://github.com/paolaguedes.png" alt="" />
            <p>Paola</p>
          </div>
        </div>
        <div className="traco1"></div>
        <div className="traco2"></div>
        <div className="circulo1"><span>&lt;</span></div>
        <div className="circulo2"><span>/&gt;</span></div>
      </aside>
  )
}