import { Stack, colors } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" ,borderBottom:'1px solid red' }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img  src={logo} alt="logo" height={45} />

      {/* <h3 style={{color:'white' ,fontWeight:'bold'}}>YouTube</h3> */}
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
