// import React, { useEffect } from "react";
// import { preBuiltPlaces } from "./data";
// import ListCard from "./ListCard";
// import { useValue } from "@/context/ContextProvider";
// import { getAllProjects } from "@/firebase/function";

// const ListView = () => {
//   const {
//     state: { filteredRooms },
//    dispatch
//   } = useValue();

//    useEffect(() => {
//      // dispatchRedux(getProjects(dispatch))
//      getAllProjects(dispatch);
//    }, []);
//   return (
//     <div className="container m-2 p-2 flex flex-wrap justify-between items-center gap-2">
//       {filteredRooms.map((v, i) => {
//         return <ListCard key={v.title} {...v} />;
//       })}
//     </div>
//   );
// };

// export default ListView;
import {
  Avatar,
  Card,
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Rating,
  Tooltip,
} from "@mui/material";

import { StarBorder } from "@mui/icons-material";
import { useValue } from "@/context/ContextProvider";
import { useEffect } from "react";
import { getAllProjects } from "@/context/function";
import { useRouter } from "next/router";

const Rooms = () => {
  const router = useRouter();
  const {
    state: { filteredRooms },
    dispatch,
  } = useValue();

  useEffect(() => {
    // dispatchRedux(getProjects(dispatch))
    getAllProjects(dispatch);
  }, []);
  return (
    <Container>
      <ImageList
        gap={12}
        sx={{
          mb: 8,
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))!important",
        }}
      >
        {filteredRooms.map((home) => (
          <Card
            key={home._id}
            className="cursor-pointer"
            onClick={() => router.push(`/house/single/${home._id}`)}
          >
            <ImageListItem sx={{ height: "100% !important" }}>
              <ImageListItemBar
                sx={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.7)0%, rgba(0,0,0,0.3)70%, rgba(0,0,0,0)100%)",
                }}
                title={"$" + home.price + " | " + home.homeType}
                // actionIcon={
                //   <Tooltip title={home.uName} sx={{ mr: "5px" }}>
                //     <Avatar src={home.uPhoto} />
                //   </Tooltip>
                // }
                position="top"
              />
              <img
                src={home.images[0]}
                alt={home.title}
                loading="lazy"
                style={{ cursor: "pointer" }}
              />
              <ImageListItemBar
                title={home.address}
                actionIcon={
                  <Rating
                    sx={{ color: "#fde047", mr: "5px" }}
                    name="room-rating"
                    defaultValue={3.5}
                    precision={0.5}
                    emptyIcon={<StarBorder sx={{ color: "#bef264" }} />}
                  />
                }
              />
            </ImageListItem>
          </Card>
        ))}
      </ImageList>
    </Container>
  );
};

export default Rooms;
