import React from 'react'
import CustomLayout from '../../component/shared/CustomLayout'
import {PresentHead} from '../../Data'

const Present = () => {
  return (
    <CustomLayout title={PresentHead.title}  subtitle={PresentHead.subtitle}>Present</CustomLayout>
  )
}

export default Present