//import React from "react";
import { useState, useContext, Children } from "react";
import { ChevronRight, ChevronLeft, Plus, X,  } from "react-feather";
import { Popover } from "react-tiny-popover";
import { BoardContext } from "../context/BoardContext";
import { createContext } from "react";

export const BoardContext = createContext();

export const BoardProvider = ({ children }) =>  {
  const [allboard, setAllBoard] = useState({
    boards: [{ name: "Board 1", bgcolor: "#ff5733"}],
  })


return (
  <BoardContext.Provider value={{ allboard, setAllBoard }}>  
      {children}
    </BoardContext.Provider>
);

};


const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [showpop, setShowpop] = useState(false);
  const [allboard, setAllBoard] = useContext(BoardContext);

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
                align="start"
                positions={["right","top", "bottom", "left"]} // preferred positions by priority
                content={
                      <div className="ml-2 p-2 w-60 flex flex-col justify-center items-center bg-slate-600 text-white rounded">
                        <button onClick={() => setShowpop(!showpop)} className="absolute right-2 top-2 hover:bg-gray-500 p-1 rounded"><X size={16}></X></button>
                        <h4 className=" p-3">Create board</h4>
                        <img src="https://placehold.co/200x120/png" alt="" />
                        <div className="mt-3 flex flex-col items-start w-full">
                            <label htmlFor="title">Board Title <span>*</span></label>
                            <input type="text" className="mb-2 h-8 px-2 w-full bg-gray-700" />
                            <label htmlFor="Color">Board Color</label>
                            <input type="color" className="mb-2 h-8 px-2 w-full bg-gray-700" />
                            <button className="w-full rounded h-8 bg-slate-700 mt-2 hover:bg-gray-500">Create</button>
                        </div>
                      </div>
                      }
              >
                <button onClick={() => setShowpop(!showpop)} className=" hover:bg-slate-600 p-1 rounded-sm">
                <Plus size={16}></Plus>
              </button>
              </Popover>

            </div>
          </div>

          <ul>
            {allboard.boards && allboard.boards.map((x, index)=>(
                <li key={index}>
              <button onClick={()=> setAllBoard} className="px-3 py-2 w-full text-sm flex justify-start align-baseline hover:bg-gray-700">
                <span className="w-6 h-max rounded-sm mr-2 " style={{backgroundColor:`${x.bgcolor}`}}>
                  &nbsp;
                </span>
                <span>{x.name}</span>
              </button>
            </li>
            ))}
              
          </ul>
        </div>
      )}
      
    </div>
  );
};

export default Sidebar;


