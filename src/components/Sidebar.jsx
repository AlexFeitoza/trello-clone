//import React from "react";
import { useState } from "react";
import { ChevronRight, ChevronLeft, Plus, X } from "react-feather";
import { Popover } from "react-tiny-popover";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [showpop, setShowpop] = useState(false);

  return (
    <div
      className={`bg-[#121417] h-[calc(100vh-3rem)] border-r border-r-[#9fadbc29] transition-all linear duration-500 flex-shrink-0 ${
        collapsed ? "w-[40px]" : "w-[280px]"
      }`}
    >
      {collapsed && (
        <div className="p-2">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className=" hover:bg-slate-600 rounded-sm"
          >
            <ChevronRight size={18}></ChevronRight>
          </button>
        </div>
      )}

      {!collapsed && (
        <div>
          <div className="workspace p-3 flex justify-between border-b border-b-[#9fadbc29]">
            <h4>Remote Devs Workspace</h4>
            <button
              onClick={() => setCollapsed(!collapsed)}
              className=" hover:bg-slate-600 p-1 rounded-sm"
            >
              <ChevronLeft size={18}></ChevronLeft>
            </button>
          </div>

          <div className="boardlist">
            <div className="flex justify-between px-3 py-2">
              <h6>Your Boards</h6>
              
              <Popover
                isOpen={showpop}
                positions={["right","top", "bottom", "left"]} // preferred positions by priority
                content={<div className="ml-2 p-2 w-60 flex flex-col justify-center items-center bg-slate-500 text-white rounded ">
                                <button className="absolute right-2 top-2 hover:bg-gray-"><X size={16}></X></button>
                                <h4>Create Board</h4>
                        </div>}
              >
                <button onClick={() => setShowpop(!showpop)} className=" hover:bg-slate-600 p-1 rounded-sm">
                <Plus size={16}></Plus>
              </button>
              </Popover>

            </div>
          </div>

          <ul>
            <li>
              <button className="px-2 py-2 w-full text-sm flex justify-start align-baseline hover:bg-gray-700">
                <span className="w-6 h-max rounded-sm mr-2 bg-red-600">
                  &nbsp;
                </span>
                <span>My Trello Board</span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
