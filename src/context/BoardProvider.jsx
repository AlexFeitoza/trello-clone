
import { useState } from "react";
import PropTypes from "prop-types";
import { BoardContext } from "./BoardContext";

export const BoardProvider = ({ children }) => {
    const [allboard, setAllBoard] = useState({
      boards: [],
      active: null,
    });
  
    return (
      <BoardContext.Provider value={[allboard, setAllBoard]}>
        {children}
      </BoardContext.Provider>
    );
  };

  BoardProvider.propTypes = {
    children: PropTypes.node.isRequired
  };