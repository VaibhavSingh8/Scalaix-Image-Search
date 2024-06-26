import { Box, Container, Grid, Typography } from "@mui/material";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import ImageCard from "../components/ImageCard";
import { fetchImages } from "../services/api";
import { useEffect, useState } from "react";

function Home() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  //const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState(null);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    const fetchInitialImages = async () => {
      try {
        const res = await fetchImages(query || "popular", page);
        setImages(res.data.results);
        //setTotalPages(res.data.total_pages);
        setError(null);
      } catch (error) {
        console.error("Couldn't fetch images", error);
        setError("Couldn't fetch images. Please try again later.");
      }
    };

    fetchInitialImages();
  }, [query, page]);

  return (
    <Container>
      <SearchBar onSearch={handleSearch} placeholder="Search Images..." />
      {error && (
        <Typography color="error" variant="body1">
          {error}
        </Typography>
      )}
      <Box>
        <Grid container>
          {images.map((image) => (
            <Grid item key={image.id} xs={12} sm={6} md={4}>
              <ImageCard image={image} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2, mb: 2 }}>
        <Pagination page={page} count={10} onChange={handlePageChange} />
      </Box>
    </Container>
  );
}

export default Home;
