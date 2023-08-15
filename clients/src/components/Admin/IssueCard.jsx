import React from 'react'
import IssueCardContent from './IssueCardContent'


function IssueCard() {
  return (
    <div>
        <div>
            <p>8/12</p>
            <div className='flex justify-between items-center'>
            <p>All Issues</p>
            <select>
                <option >All Issues</option>
                <option >Academic</option>
                <option >Welfare</option>
                <option >Rogistic</option>
            </select>
            </div>
        </div>
        <div className='grid grid-cols-4 p-10'>
                <IssueCardContent />
                <IssueCardContent />
                <IssueCardContent />
                <IssueCardContent />
                <IssueCardContent />
        </div>

    </div>
  )
}

export default IssueCard