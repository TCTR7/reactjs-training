import {Outlet, Link} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <nav style={{marginBottom: 20}}>
                <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/user">User</Link> | <Link to="/user/1">User Detail</Link>
            </nav>
            <Outlet />
        </div>
    )
}
export default MainLayout;