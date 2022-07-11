import React from "react";
import { Outlet, NavLink } from "react-router-dom";
const Layout = () => {
    let activeStyle = {
        textDecoration: "none",
        color: "white",
    };
    return (
        <div>
            <nav style={{ color: "white" }}>
                <button className="btn">
                    <NavLink
                        to="/"
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Home
                    </NavLink>
                </button>
                <button className="btn">
                    <NavLink
                        to="/users"
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Users
                    </NavLink>
                </button>
            </nav>
            <Outlet />
        </div>
    );
};

export default Layout;
