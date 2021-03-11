import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
      <nav >
        <button className="hamburger" type="button" onClick={showSidebar}>
        </button>
        <ul onClick={showSidebar}>   
          <Link to="/albums">Albums</Link><br/>
          <Link to="/add-album">Add Album</Link>
        </ul>
      </nav>
      
    );
  }
  
  export default Sidebar;