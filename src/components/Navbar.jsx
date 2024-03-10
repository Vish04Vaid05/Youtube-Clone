import { Stack ,Typography} from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";
import { CenterFocusStrong } from "@mui/icons-material";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
      <Typography color="#fff" variant="h4" fontWeight="bold" marginLeft={1}>
        YouTube 2.0
      </Typography>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;