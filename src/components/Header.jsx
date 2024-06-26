/* eslint-disable react/prop-types */
import { Paper, Typography } from "@mui/material";

const Header = ({ headerValue = "Scalaix - Image Search" }) => {
  return (
    <Paper sx={{ height: "10vh" }}>
      <Typography
        variant="body1"
        fontWeight="500"
        fontSize="1.5rem"
        fontFamily="Clarity city"
        align="center"
        sx={{ p: 2 }}
      >
        {headerValue}
      </Typography>
    </Paper>
  );
};

export default Header;
