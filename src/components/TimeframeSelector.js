import React from 'react'

const TimeframeSelector = ({onSelect}) => (
  <div>
    <button className='btn btn-primary' onClick={() => onSelect('daily')}>
      Daily
    </button>
    <button className='btn btn-primary' onClick={() => onSelect('weekly')}>
      Weekly
    </button>
    <button className='btn btn-primary' onClick={() => onSelect('monthly')}>
      Monthly
    </button>
  </div>
)

export default TimeframeSelector
