import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Typography,
  Grid,
  Divider,
} from "@mui/material";
import { fetchImageDetails } from "../services/api";

function DetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [imageDetails, setImageDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getImageDetails = async () => {
      try {
        const res = await fetchImageDetails(id);
        setImageDetails(res.data);
        setError(null);
      } catch (error) {
        console.error("Couldn't fetch image details", error);
        setError("Couldn't fetch image details. Please try again later.");
      }
    };

    getImageDetails();
  }, [id]);

  return (
    <Container maxWidth="lg">
      {error && (
        <Typography color="error" variant="body1">
          {error}
        </Typography>
      )}
      {imageDetails && (
        <Box>
          <Box sx={{ mb: 4 }}>
            <Grid
              container
              alignItems="center"
              justifyContent="space-between"
              sx={{ margin: 4 }}
            >
              <Grid item xs={10}>
                <Typography variant="h4" className="text-headline">
                  {imageDetails.description || "Image Description"}
                </Typography>
              </Grid>
              <Grid item xs={2} sx={{ textAlign: "right" }}>
                <Button variant="contained" onClick={() => navigate("/")}>
                  Back to Home
                </Button>
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
            <img
              src={imageDetails.urls.regular}
              alt={imageDetails.alt_description}
              style={{
                maxWidth: "100%",
                maxHeight: "500px",
                objectFit: "contain",
              }}
            />
          </Box>

          <Box
            sx={{
              mb: 4,
              backgroundColor: "#f5f5f5",
              padding: 3,
              borderRadius: 2,
            }}
          >
            <Typography
              variant="h5"
              className="text-semibold"
              gutterBottom
              color="primary"
            >
              Image Details
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography variant="body1" className="text-normal" paragraph>
                  <strong>Description:</strong>{" "}
                  {imageDetails.alt_description || "No description available"}
                </Typography>
                <Typography variant="body1" className="text-semibold">
                  <strong>Photographer:</strong> {imageDetails.user.name}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="body2" className="text-normal">
                  <strong>Likes:</strong> {imageDetails.likes}
                </Typography>
                <Typography variant="body2" className="text-normal">
                  <strong>Date:</strong>{" "}
                  {new Date(imageDetails.created_at).toLocaleDateString()}
                </Typography>
                {imageDetails.location && (
                  <Typography variant="body2" className="text-normal">
                    <strong>Location:</strong>{" "}
                    {imageDetails.location.name || "Not specified"}
                  </Typography>
                )}
              </Grid>
            </Grid>
          </Box>
        </Box>
      )}
    </Container>
  );
}

export default DetailsPage;
