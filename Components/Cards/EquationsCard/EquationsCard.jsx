import React from 'react'
import './EquationsCard.css'

function equationscard({ eq } ) {
  
  return (
      <div className="card-container">
          <div className="card">
              <div className="columns">
                <div className="col1">{eq.number})</div>
                <div className="col2">{eq.operator}</div>
                <div className="col3">
                  <div className="num1">{eq.a}</div>
                  <div className="num2">{eq.b}</div>
                  <div className="sumLine"></div>
                </div>
              </div>
          </div>
      </div>
  )
}

export default equationscard