import React, { useContext } from 'react'
import { theme } from '../App'
import Using from './Using'



function ChildComp() {
    const data = useContext(theme)
    let themeStyle={
        backgroundColor : data?"black": "brown",
        color: data?"white":"yellow",
        padding: "2vw"
    }
    

    const content = `East Or west Kalvium is best , and compliting react assignment is like climbing Everest`
  return (
    <div style={themeStyle}>
        <Using OurData={content}/>
    </div>
  )
}

export default ChildComp