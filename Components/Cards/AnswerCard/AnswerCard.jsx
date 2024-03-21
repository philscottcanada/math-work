import React from 'react'
import './AnswerCard.css'

function AnswerCard( {eq} ) {
  return (
    <div className="answers-container">
      <div className="answers">
        <span className="number">{eq.number})</span> 
        {eq.total}
      </div>
    </div> 
  )
}

export default AnswerCard