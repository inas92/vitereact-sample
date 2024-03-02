import { useState, useEffect } from "react";
import './Movingimage.css';
import { draw1, state1 } from "../../assets/index";
const Movingimage = () => {
  const [imageVersion, setImageVersion] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageVersion((prevVersion) => (prevVersion === 1 ? 2 : 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="appmove">
      <img
        src={imageVersion === 1 ? draw1 : state1}
        alt="Moving Image"
        style={{ width: "300px", height: "300px" }}
      />
    </div>
  );
};

export default Movingimage;
