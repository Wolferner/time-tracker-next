import GridBox from "@/04 items/layout/GridBox/GridBox";
import SideBar from "@/04 items/layout/SideBar/SideBar";
import SideMenu from "@/02 widgets/SideMenu/SideMenu";
import Menu from "@/02 widgets/Menu/Menu";

export const metadata = {
  title: "TimeTracker App",
};

export default function Layout({ children }) {
  return (
    <GridBox>
      <SideBar gridRatio={1} position={"left"} className="SideBar">
        <SideMenu className="SideMenu" />
      </SideBar>

      <div className={`Menu col s2`}>
        <Menu />
      </div>

      <div className={` modalWindow col s9`}>{children}</div>
    </GridBox>
  );
}
