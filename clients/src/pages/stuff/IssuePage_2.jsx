import React from 'react'
import IssuePageTwoTop from '../../components/Admin/IssuePage_2_Top'
import { NewIssueNotifications } from '../../components/Admin/NewIssueNotification'
import IssueCard from '../../components/Admin/IssueCard'

function IssuePageRight() {
  return (
    <div>
        <div className='flex justify-end pb-5'>
            <NewIssueNotifications />
        </div>
        <IssuePageTwoTop />
        <div className='p-5'>
        <IssueCard />
        
        </div>
    </div>
  )
}

export default IssuePageRight