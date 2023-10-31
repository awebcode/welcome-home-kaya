import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import CustomTable from "./CustomTable";

const HomeProjects = () => {
  const {projects} = useSelector((state) => state.project); // Assuming you have a Redux state for projects
  const [displayedProjects, setDisplayedProjects] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    setDisplayedProjects(projects.slice(0, itemsPerPage));
  }, [projects, itemsPerPage]);

  const fetchData = () => {
    const newItemsPerPage = itemsPerPage + 10; // Increase itemsPerPage by 10 when fetching more
    setItemsPerPage(newItemsPerPage);

    if (newItemsPerPage >= projects?.length) {
      setHasMore(false);
    }

    setDisplayedProjects(projects?.slice(0, newItemsPerPage));
  };

  return (
    <div className="container mx-auto p-4">
      <InfiniteScroll
        dataLength={displayedProjects.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<div className="text-center">Loading...</div>}
      >
        <CustomTable projects={displayedProjects} />
      </InfiniteScroll>
    </div>
  );
};

export default HomeProjects;
