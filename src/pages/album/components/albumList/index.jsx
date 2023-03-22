import React from "react";
import PropTypes from "prop-types";
import AlbumObj from "../albumObj";
import "./styles.scss";

AlbumList.propTypes = {
  albumData: PropTypes.array,
};

AlbumList.defaultProp = {
  albumData: [],
};

function AlbumList({ albumData }) {
  return (
    <div>
      <ol className="album-list">
        {albumData.map((album) => (
          <li key={album.id}>
            <AlbumObj album={album} />
          </li>
        ))}
      </ol>
    </div>
  );
}

export default AlbumList;
