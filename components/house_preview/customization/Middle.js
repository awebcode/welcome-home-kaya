import React, { useEffect, useState } from 'react'
import ReactImageGallery from 'react-image-gallery';

const Middle = ({ project }) => {
    
    const [thumbnails, setThumbnails] = useState([]);

    useEffect(() => {
      if (project) {
        const thumbnails = project?.images?.map((image) => ({
          thumbnailTitle: "House Builder",
          original: image,
          thumbnail: image,
        }));

        if (thumbnails && thumbnails.length > 0) {
          setThumbnails(thumbnails);
        }
      }
    }, [project]);
  return (
    <div>
      <div className="max-w-[90vw] md:max-w-[100%] h-screen">
        <ReactImageGallery
          thumbnailTitle={true}
          showBullets
          slideDuration={1000}
          autoPlay={true}
          swipingTransitionDuration={300}
          sizes={["large"]}
          thumbnailHeight={500}
          thumbnailWidth={700}
          items={thumbnails}
          slideOnThumbnailOver={true}
          lazyLoad={true}

          // onImageLoad={<Skeleton/>}
        />
      </div>
    </div>
  );
}

export default Middle