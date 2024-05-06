import React from 'react'

const Learner = ({ learner }) => {
  return (
    <div className='learner-container'>
        <div className='learner-name'>{learner.name}</div>
        <div className='learner-bio'>{learner.bio}</div>
        
        <div className='learner-scores'>
            {learner.scores.map((score, index) => (
                <div className={`score ${score.score < 70 ? 'low-score' : ''}`} key={index}>{score.score}</div>
        ))}
        </div>

    </div>
  )
}

export default Learner;