import React from "react"
import './DashboardWrapper.scss'
import SideBar from "../../organisms/SideBar/SideBar"
import Header from "../../organisms/Header/Header";


const DashboardWrapper = ({children}) => {
 return(
    <div className="dashboard-wrapper">
       <div>
         <SideBar />
       </div>
       <div>
         <Header />
         <div>
            {children}
         </div>
       </div>
    </div>
 )
}

export default DashboardWrapper