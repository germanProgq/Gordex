import { Outlet } from "react-router-dom";
import AdminNavbar from "../../components/Admin/AdminNavbar/AdminNavbar"

function Admin() {
    return (
        <AdminNavbar>
            <Outlet/>
        </AdminNavbar>
    )
}


export default Admin