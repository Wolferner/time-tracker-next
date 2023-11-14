import GridBox from "@/app/components/GridBox/GridBox"
import SideBar from "@/app/components/SideBar/SideBar"
import SideMenu from "@/app/components/SideMenu/SideMenu"
import Menu from "@/app/components/Menu/Menu"



export const metadata = {
  title: 'TimeTracker App',
}

export default function Layout({ children }) {
  return (
      <GridBox>

        <SideBar gridRatio={1} position = {'left'} className='SideBar'>
            <SideMenu className='SideMenu'/>
        </SideBar>

        <div className={`Menu col s2`}>
            <Menu/>

        </div>

        <div className={` modalWindow col s11`}>
            {children}
        </div>

      </GridBox>
  )
}