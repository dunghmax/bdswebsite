import React from "react";
import PropTypes from "prop-types";
import AlbumList from "../components/albumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumDataEx = [
    {
      id: 1,
      name: "'See Tình' và series Hit tạo nên thương hiệu",
      thumbnailURL:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/2/6/8/5268ca89ac8eece34a05285999c7903d.jpg",
    },
    {
      id: 2,
      name: "'ghệ iu dấu của tình ơi', nghe tlinh hát o kì hem?",
      thumbnailURL:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/d/c/0/7/dc07e6eb440a6382795c661c29c4694c.jpg",
    },
    {
      id: 3,
      name: "'Thị Mầu' Hòa Minzy và những bản Hit đỉnh nhất",
      thumbnailURL:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/a/e/9/aae98c264c71d089e2c2d9f01112aee7.jpg",
    },
  ];
  return (
    <div>
      <h2>2. Album List</h2>
      <h3>Có thể bạn sẽ thích đấy</h3>
      <AlbumList albumData={albumDataEx} />
    </div>
  );
}

export default AlbumFeature;
