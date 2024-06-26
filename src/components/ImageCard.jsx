/* eslint-disable react/prop-types */
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ImageCard = ({ image }) => {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(`/details/${image.id}`)}
      sx={{
        maxWidth: 345,
        height: 300,
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        marginBottom: 3,
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={image.urls.small}
        alt={image.alt_description}
      />
      <CardContent
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column", py: 1 }}
      >
        <Typography variant="h6" component="div" noWrap>
          {image.description || "No Description"}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap>
          {image.alt_description || "No Alt Description"}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ pt: 1 }}>
          By {image.user.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ImageCard;
