import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Carousel from 'react-material-ui-carousel'
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import Rating from "@mui/material/Rating";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Avatar } from "@mui/material";

const reviews = [
  {
    name: "John Doe",
    avatar: "https://i.pravatar.cc/100?img=1",
    comment:
      "J'aime beaucoup ce site, il est très bien fait et les médecins sont très compétents.",
    rating: 4,
  },
  {
    name: "Jane Smith",
    avatar: "https://i.pravatar.cc/100?img=2",
    comment:
      "Incroyable ! J'ai trouvé un médecin en 5 minutes et j'ai pu prendre rendez-vous immédiatement.",
    rating: 5,
  },
  {
    name: "Bob Johnson",
    avatar: "https://i.pravatar.cc/100?img=3",
    comment:
      "Dommage que ce site n'existe pas depuis plus longtemps, j'aurais pu éviter de nombreuses visites chez le médecin.",
    rating: 3,
  },
];

const Item = styled(Box)(({ theme }) => ({
  height: "75vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: theme.spacing(2),
}));

const AvatarWrapper = styled(Box)({
  marginBottom: "1rem",
});

const ArrowButton = styled(Box)({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  color: "#fff",
  borderRadius: "50%",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "12px",
  zIndex: 1,
});

export default function ReviewsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleSlideChange = (event, value) => {
    setCurrentSlide(value - 1);
  };

  const handlePreviousSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? reviews.length - 1 : currentSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide(currentSlide === reviews.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Carousel
        autoPlay={false}
        animation="slide"
        indicatorIconButtonProps={{
          sx: {
            "&.Mui-selected": {
              backgroundColor: "#fff",
            },
          },
        }}
        indicatorContainerProps={{
            sx: {
              position: "absolute",
              bottom: "16px",
              display: "flex",
              justifyContent: "center",
              width: "100%",
            },
          }}
        >
          {reviews.map((review, index) => (
            <Item key={index}>
              <AvatarWrapper>
                <Avatar
                  src={review.avatar}
                  alt={review.name}
                  sx={{ width: 100, height: 100 }}
                />
              </AvatarWrapper>
              <Typography
                variant="h4"
                component="div"
                sx={{ fontWeight: 600, color: "#fff", marginY: "1rem" }}
              >
                {review.comment}
              </Typography>
              <Typography
                variant="h6"
                component="div"
                sx={{ fontWeight: 100, color: "#fff", marginTop: "1rem" }}
              >
                {review.name}
              </Typography>
            </Item>
          ))}
        </Carousel>
      </Box>
    )

}

    