import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import axios from "axios";
import { useHistory } from "react-router-dom";
export default function AllDiscussion() {
  const [discussions, setDiscussions] = useState([]);
  const history = useHistory();
  useEffect(async () => {
    await axios
      .get(process.env.REACT_APP_BACKEND_API + "api/discussion/alldiscussions")
      .then((response) => {
        setDiscussions(response.data.discussions);
        console.log(response.data.discussions);
      });
  }, []);
  return (
    <div>
      {discussions.map((discussion) => (
        <Paper
          elevation={3}
          className="DiscussionPaper"
          style={{ marginBottom: "10px" }}
        >
          <div style={{ width: "100%", display: "flex" }}>
            <div style={{ float: "left", width: "80%" }}>
              <h1 style={{ margin: "0px", padding: "0px" }}>
                {discussion.title}
              </h1>
            </div>
            <div style={{ width: "50%" }}>
              <div style={{ float: "right" }}>
                {" "}
                <IconButton aria-label="upload picture" component="span">
                  <div
                    style={{
                      display: "flex",
                      backgroundColor: "#e1e5ea",
                      borderRadius: "30%",
                      padding: "3px",
                    }}
                  >
                    <div>
                      <ThumbUpIcon style={{ color: "green" }} />
                    </div>
                    <div>
                      <p
                        style={{
                          margin: "0px",
                          fontSize: "20px",
                        }}
                      >
                        {discussion.likes.length}
                      </p>
                    </div>
                  </div>
                </IconButton>
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <div
                    style={{
                      display: "flex",
                      backgroundColor: "#e1e5ea",
                      borderRadius: "30%",
                      padding: "3px",
                    }}
                  >
                    <div>
                      <ThumbDownIcon style={{ color: "red" }} />
                    </div>
                    <div>
                      <p
                        style={{
                          margin: "0px",
                          fontSize: "20px",
                        }}
                      >
                        {discussion.dislikes.length}
                      </p>
                    </div>
                  </div>
                </IconButton>
              </div>
            </div>
          </div>
          <div className="DiscussionContent">
            <p style={{ marginTop: "0px" }}>
              <span
                style={{
                  fontSize: "1rem",
                  color: "#2940D3",
                  fontStyle: "italic",
                  margin: "0px",
                  padding: "0px",
                }}
              >
                {discussion.tags.map((tag) => (
                  <span>{"#" + tag + " "}</span>
                ))}
              </span>
              <br />
              <span
                style={{
                  fontSize: "1rem",
                  color: "#8b8b8b",
                  fontStyle: "italic",
                  fontWeight: "bold",
                  margin: "0px",
                  padding: "0px",
                }}
              >
                Posted by: {discussion.postedBy.name}
              </span>
              <br />
              {discussion.description}
              <br />
              <span
                style={{
                  fontSize: "1rem",
                  color: "#8b8b8b",
                  fontStyle: "italic",
                  fontWeight: "bold",
                  margin: "0px",
                }}
              >
                Posted on:{" "}
                {discussion.postedAt.substring(0, 10) +
                  " " +
                  discussion.postedAt.substring(11, 19)}
              </span>
              <br />
              <br />
            </p>
            <div style={{ width: "100%", display: "flex" }}>
              <div style={{ width: "100%" }}>
                <div style={{ float: "right" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ backgroundColor: "#002fb0", color: "#ffffff" }}
                    onClick={(e) =>
                      history.push("/discussion/" + discussion._id)
                    }
                  >
                    <b>MORE</b>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Paper>
      ))}
    </div>
  );
}
