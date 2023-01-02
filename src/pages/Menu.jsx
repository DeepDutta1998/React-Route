import React from 'react'
import bgimage from '../assets/img/post-bg.jpg'
import MenuContent from '../component/core/MenuContent'

export default function Menu() {
  return (
    <div style={{marginTop:'80px'}}>
    <header className="masthead"  style={{ backgroundImage: `url(${bgimage})` }}>
         <div className="container position-relative px-4 px-lg-5">
             <div className="row gx-4 gx-lg-5 justify-content-center">
                 <div className="col-md-10 col-lg-8 col-xl-7">
                     <div className="site-heading">
                         <h1>Menu</h1>
                         <span className="subheading">A Blog Theme by Start Bootstrap</span>
                     </div>
                 </div>
             </div>
         </div>
     </header>
 
     <MenuContent/>

 </div>

  )
}
