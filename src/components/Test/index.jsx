import React, { useState } from 'react'
import { NoticeCat, NoticeDesc, NoticeHeading, NoticeOption, NoticeSubmit, NoticeWrapper, TestSect, TestWrapper } from '../../styles/Test'

const Test = () => {

  const [noticeHeading, setNoticeHeading] = useState('')
  const [noticeDesc, setNoticeDesc] = useState('')
  const [noticeCat, setNoticeCat] = useState('')

  const handleSubmit = () => {
    console.log(noticeHeading)
    console.log(noticeDesc)
    console.log(noticeCat)
  }

  return (
    <TestSect>
      <TestWrapper>
        <NoticeWrapper>
          <NoticeHeading type = "text" placeholder='Notice Topic' onChange={(e) => setNoticeHeading(e.target.value)}/>
          <NoticeDesc placeholder='Notice Description' onChange={(e) => setNoticeDesc(e.target.value)}></NoticeDesc>
          <NoticeCat onChange={(e) => setNoticeCat(e.target.value)}>
            <NoticeOption disabled selected>Select a category</NoticeOption>
            <NoticeOption>Parking</NoticeOption>
            <NoticeOption>Restaurent</NoticeOption>
            <NoticeOption>GYM</NoticeOption>
          </NoticeCat>
          <NoticeSubmit onClick={handleSubmit}>Submit</NoticeSubmit>
        </NoticeWrapper>
      </TestWrapper>
    </TestSect>
  )
}

export default Test