/* eslint-disable react/prop-types */
import { Pagination as MuiPagination } from "@mui/material";

function Pagination({ page, count, onChange }) {
  return <MuiPagination count={count} page={page} onChange={onChange} />;
}

export default Pagination;
