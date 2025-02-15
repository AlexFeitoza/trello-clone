//import React from "react";
import { useState } from "react";
import { ChevronRight, ChevronLeft } from "react-feather";

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div className={`bg-[#121417] h-[calc(100vh-3rem)] border-r border-r-[#9fadbc29] transition-all linear duration-500 flex-shrink-0 ${collapsed ? 'w-[42px]' : 'w-[280-px]'}`}>
                
               {collapsed && <div className="p-2">
                    <button onClick={()=> setCollapsed(!collapsed)}  className=" hover:bg-slate-600 rounded-s-sm">
                        <ChevronRight size={18}></ChevronRight>
                    </button>
                </div>}

               {!collapsed && <div className="">
                    Sidebar
                    <button onClick={()=> setCollapsed(!collapsed)} className=" hover:bg-slate-600 rounded-s-sm">
                        <ChevronLeft size={18}></ChevronLeft>
                    </button>
                </div>}
        </div>
    );
}

export default Sidebar;