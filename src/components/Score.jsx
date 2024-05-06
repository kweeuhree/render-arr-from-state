import React from 'react'

const Score = ({ details }) => {
  return (
    <div className='score-section'>
         <div 
            className={`score ${details.score < 70 ? 'low-score' : ''}`}>
                    {details.score}
         </div>

         <div className='date'>{details.date}</div>
    </div>
  )
}

export default Score;