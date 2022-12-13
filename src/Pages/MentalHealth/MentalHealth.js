import React, { useState } from "react";

import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import axios from "axios";
import { useEffect } from "react";
// import Genres from "../../components/Genres/Genres";
import SingleContent from "../../components/SingleContent/SingleContent";
import useGenre from "../../hooks/useGenre";
import CustomPagination from "../../components/Pagination/CustomPagination";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";

export default function MentalHealth() {
  const theme = useTheme();
  const [music, setMusic] = useState([]);
  const [image, setImage] = useState("");

  //music
  var SpotifyWebApi = require("spotify-web-api-node");
  var spotifyApi = new SpotifyWebApi({
    clientId: process.env.REACT_APP_MUSIC_CLIENT_ID,
    clientSecret: process.env.REACT_APP_MUSIC_SECRET,
    redirectUri: "http://www.example.com/callback",
  });
  spotifyApi.setAccessToken(process.env.REACT_APP_MUSIC_TOKEN);
  spotifyApi.getAlbum("5U4W9E5WsYb2jUQWePT8Xm").then((data) => {
    console.log(data.body);
    setImage(data.body.images[0]?.url);
    setMusic(data.body.tracks.items);
  });
  const [option, setOption] = React.useState(10);

  //movies
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const genreforURL = useGenre(selectedGenres);

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
    );
    setContent(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchMovies();
    // eslint-disable-next-line
  }, [genreforURL, page]);

  //options
  const handleChange = (event) => {
    setOption(event.target.value);
  };
  const handleOutput = (value) => {
    if (value === 10) {
      return (
        <Box
          sx={{ flexGrow: 1, p: 2 }}
          style={{ marginTop: "20px", marginLeft: "20px", textAlign: "center" }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              "--Grid-borderWidth": "1px",
              borderTop: "var(--Grid-borderWidth) solid",
              borderLeft: "var(--Grid-borderWidth) solid",
              borderColor: "white",
              "& > div": {
                borderRight: "var(--Grid-borderWidth) solid",
                borderBottom: "var(--Grid-borderWidth) solid",
                borderColor: "white",
              },
            }}
          >
            {music.length ? (
              music.map((song) => (
                <Card
                  sx={{ display: "flex" }}
                  style={{ margin: "10px", width: "350px" }}
                >
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent
                      sx={{ flex: "1 0 auto" }}
                      style={{ width: "200px" }}
                    >
                      <Typography component="div" variant="h5">
                        {song.name}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                      >
                        {song.artists[0]?.name}
                      </Typography>
                    </CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        pl: 1,
                        pb: 1,
                      }}
                    >
                      <IconButton
                        aria-label="play/pause"
                        href={song.external_urls.spotify}
                        target="_blank"
                      >
                        <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                      </IconButton>
                    </Box>
                  </Box>
                  <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={image}
                    alt="Image"
                  />
                </Card>
              ))
            ) : (
              <div></div>
            )}
          </Grid>
        </Box>
      );
    } else if (value === 20) {
      return <div>books</div>;
    } else if (value === 30) {
      return (
        <div style={{ width: "100%" }}>
          <div className="trending">
            <Box
              sx={{ flexGrow: 1, p: 2 }}
              style={{
                marginTop: "20px",
                marginLeft: "20px",
                textAlign: "center",
              }}
            >
              <Grid
                container
                spacing={2}
                sx={{
                  "--Grid-borderWidth": "1px",
                  borderTop: "var(--Grid-borderWidth) solid",
                  borderLeft: "var(--Grid-borderWidth) solid",
                  borderColor: "white",
                  "& > div": {
                    borderRight: "var(--Grid-borderWidth) solid",
                    borderBottom: "var(--Grid-borderWidth) solid",
                    borderColor: "white",
                  },
                }}
              >
                {content &&
                  content.map((c) => (
                    <Slide bottom>
                      <SingleContent
                        key={c.id}
                        id={c.id}
                        poster={c.poster_path}
                        title={c.title || c.name}
                        date={c.first_air_date || c.release_date}
                        media_type="movie"
                        vote_average={c.vote_average}
                      />
                    </Slide>
                  ))}
              </Grid>
            </Box>
          </div>
          {numOfPages > 1 && (
            <CustomPagination setPage={setPage} numOfPages={numOfPages} />
          )}
        </div>
      );
    } else {
      return <div>games</div>;
    }
  };
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Box sx={{ width: 120, margin: "20px" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={option}
            label="Option"
            onChange={handleChange}
          >
            <MenuItem value={10}>Music</MenuItem>
            <MenuItem value={20}>Books</MenuItem>
            <MenuItem value={30}>Movies</MenuItem>
            <MenuItem value={40}>Games</MenuItem>
          </Select>
        </FormControl>
      </Box>
      {handleOutput(option)}
    </div>
  );
}
