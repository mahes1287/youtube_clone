import { Box, CardContent, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ChannelCard = ({ channelDetail }) => {
  return (
    <Box boxShadow="none" borderRadius="20px">
      <Link to={`/channel/${channelDetail?.id?.channelId}`}></Link>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignText: "center",
          color: "#fff",
        }}
      ></CardContent>
    </Box>
  );
};

export default ChannelCard;
