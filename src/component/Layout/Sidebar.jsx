import { NavLink } from 'react-router-dom';
import { AiOutlineDashboard, AiOutlineUserAdd, AiOutlineUsergroupAdd, AiOutlineFileAdd  } from "react-icons/ai";
import imgLogo from '../../assets/image/logo.png'

const Sidebar = (props) => {
    return (
        <div className="sm:w-full sm:max-w-[18rem]">
            <input type="checkbox" id="sidebar-mobile-fixed" className="sidebar-state" />
            <label htmlFor="sidebar-mobile-fixed" className="sidebar-overlay"></label>
            <aside className="sidebar sidebar-fixed-left sidebar-mobile h-full justify-start max-sm:fixed max-sm:-translate-x-full shadow-lg bg-gray-100">
                <section className="sidebar-title items-center p-4">
                    <img src={imgLogo} width={40} alt="Logo BPR Lingga Sejahtera" />
                    <div className="flex flex-col">
                        <span className='text-[#002D74]'>BANK</span>
                        <span className="text-xs font-normal text-[#002D74]">Lingga Sejahtera</span>
                    </div>
                </section>
                <section className="sidebar-content">
                    <nav className="menu rounded-md">
                        <section className="menu-section px-4">
                            <span className="menu-title">Main menu</span>
                            <ul className="menu-items">
                                <NavLink  to="/dashboard">
                                    <li className=
                                    {
                                        `menu-item ${window.location.pathname === "/dashboard"
                                            ?
                                            "bg-gradient-to-tr from-[#194181] bg-opacity-50 to-[#7F95B7] text-white"
                                            :
                                            "hover:bg-[#ACB9CF] text-gray-600"}`
                                    }>
                                        <AiOutlineDashboard size={20}/>
                                        <span>Dashboard</span>
                                    </li>
                                </NavLink>
                                <NavLink  to="/user">
                                    <li className=
                                    {
                                        `menu-item ${window.location.pathname === "/user"
                                            ?
                                            "bg-gradient-to-tr from-[#194181] bg-opacity-50 to-[#7F95B7] text-white"
                                            :
                                            "hover:bg-[#ACB9CF] text-gray-600"}`
                                    }>
                                        <AiOutlineUserAdd size={20}/>
                                        <span>User</span>
                                    </li>
                                </NavLink>
                                <NavLink  to="/pegawai">
                                    <li className=
                                    {
                                        `menu-item ${window.location.pathname === "/pegawai"
                                            ?
                                            "bg-gradient-to-tr from-[#194181] bg-opacity-50 to-[#7F95B7] text-white"
                                            :
                                            "hover:bg-[#ACB9CF] text-gray-600"}`
                                    }>
                                        <AiOutlineUsergroupAdd size={20}/>
                                        <span>Pegawai</span>
                                    </li>
                                </NavLink>
                                <li className="menu-item">
                                    <AiOutlineFileAdd size={20}/>
                                    <span>Master Memo</span>
                                </li>
                            </ul>
                        </section>
                    </nav>
                </section>
                <section className="sidebar-footer justify-end pt-2 bg-gray-100">
                    <div className="divider my-0"></div>
                    <div className="dropdown z-50 flex h-fit w-full cursor-pointer hover:bg-gray-4">
                        <label className="whites mx-2 flex h-fit w-full cursor-pointer p-0 hover:bg-gray-4" tabIndex="0">
                            <div className="flex flex-row gap-4 p-4">
                                <div className="avatar-square avatar avatar-md">
                                    <img src="https://i.pravatar.cc/150?img=30" alt="avatar" />
                                </div>

                                <div className="flex flex-col">
                                    <span>Sandra Marx</span>
                                </div>
                            </div>
                        </label>
                        <div className="dropdown-menu-right-top dropdown-menu ml-2">
                            <a className="dropdown-item text-sm">Profile</a>
                            <a tabIndex="-1" className="dropdown-item text-sm">Account settings</a>
                            <a tabIndex="-1" className="dropdown-item text-sm">Change email</a>
                            <a tabIndex="-1" className="dropdown-item text-sm">Subscriptions</a>
                            <a tabIndex="-1" className="dropdown-item text-sm">Change password</a>
                            <a tabIndex="-1" className="dropdown-item text-sm">Refer a friend</a>
                            <a tabIndex="-1" className="dropdown-item text-sm">Settings</a>
                        </div>
                    </div>
                </section>
            </aside>
        </div>
    );
}

export default Sidebar;