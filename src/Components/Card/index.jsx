import React, { useState } from "react";

export default (props) => {
  const [ShowAge, setShowAge] = useState(false);
  return (
    <div
      style={{
        marginTop: "10px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#2D5468",
        width: "400px",
        height: "170px",
        padding: 13,
        borderRadius: "15px",
      }}
    >
      <div>
        <img
          src={props.imgUrl}
          alt="Apple-Image"
          style={{ width: "150px", height: "150px", borderRadius: 20 }}
        />
      </div>
      <div
        style={{
          height: "180px",
          paddingLeft: "8px",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <p>Name: {props.name}</p>
        <p>Email:{props.email}</p>
        <button onClick={() => setShowAge(!ShowAge)}>Show Age</button>
        {ShowAge && <p>Age:{props.age}</p>}
      </div>
    </div>
  );
};
