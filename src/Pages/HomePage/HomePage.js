import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import NavBar from "../../Component/NavBar/NavBar";

import "./HomePage.scss";

const HomePage = () => {
  return (
    <div>
      {/* <NavBar></NavBar> */}

      <Container
        style={{ marginTop: "1%", width: "100%" }}
        // sx={{ height: "2%" }}
      >
        <Stack
          justifyContent="center"
          alignItems="center"
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 2, sm: 2, md: 3 }}
        >
          <Typography
            style={{ color: "#0D4C92", fontWeight: "600" }}
            variant="h3"
            gutterBottom
          >
            Your All in One Health and Wellness Platform
          </Typography>
          <CardMedia
            component="img"
            image="https://img.freepik.com/premium-vector/world-health-day-concept-with-characters-people-are-exercising-yoga-living-healthy_138260-728.jpg?w=740"
            alt="green iguana"
            height="400px"
            sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
          />
        </Stack>
      </Container>
      {/* <Box>
        
      </Box> */}
      <div style={{ background: "#CFF5E7", padding: "2%" }}>
        {/* <Container style={{ width: "100%", textAlign: "center" }}>
          <Typography variant="h3" gutterBottom>
            Services
          </Typography>
        </Container> */}

        <Stack
          justifyContent="center"
          alignItems="center"
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 3, sm: 4, md: 10 }}
        >
          {/*  card 1 */}
          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                // style={{ height: "inherit" }}
                component="img"
                image="https://img.freepik.com/premium-vector/stay-home-concept-woman-doing-yoga-cozy-modern-interior_113065-557.jpg?w=740"
                alt="green iguana"
                height="220px"
                sx={{ objectFit: "contain" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Physical Health
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Show More
              </Button>
            </CardActions>
          </Card>
          {/* card 2 */}
          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                style={{ height: "220px" }}
                component="img"
                height="230"
                image="https://img.freepik.com/premium-vector/stay-home-concept-woman-doing-yoga-cozy-modern-interior_113065-556.jpg"
                alt="green iguana"
                sx={{ objectFit: "contain" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Mental Health
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Show More
              </Button>
            </CardActions>
          </Card>
          {/*  card 1 */}
          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                style={{ height: "220px" }}
                component="img"
                height="230"
                image="https://img.freepik.com/premium-vector/doctor-nurse-character-robe-with-stethoscope-stand_1016-1647.jpg"
                alt="green iguana"
                sx={{ objectFit: "contain" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Nearby Doctors
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Show More
              </Button>
            </CardActions>
          </Card>
        </Stack>
      </div>
    </div>
  );
};

export default HomePage;
