import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

AlbumObj.propTypes = {
  album: PropTypes.object.isRequired,
};

function AlbumObj({ album }) {
  return (
    <div className="albumobj">
      <div className="albumobj_thumbnail">
        <img src={album.thumbnailURL} alt={album.name} />

        {/* Other - Control */}
      </div>
      <p className="albumobj_name">{album.name}</p>
    </div>
  );
}

export default AlbumObj;
