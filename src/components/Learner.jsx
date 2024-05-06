import React from 'react'
import Score from './Score';

const Learner = ({ learner }) => {
  return (
    <div className='learner-container'>
        <div className='learner-name'>{learner.name}</div>
        <div className='learner-bio'>{learner.bio}</div>
        
        <div className='learner-scores'>
            {learner.scores.map((score, index) => (
                <Score key={index} details={score} />
        ))}
        </div>

    </div>
  )
}

export default Learner;