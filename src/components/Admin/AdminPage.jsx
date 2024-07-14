import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";
export default function AdminPage() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <SideBar/>
          <div className="col py-3">
            <Outlet/>
          </div>
        </div>
      </div>
    </div>
  );
}
