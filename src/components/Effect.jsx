import React, { useEffect, useState } from "react";

const Effect = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setTimeout(() => setTime(new Date()), 1000);
    return () => clearTimeout(timer);
  }, [time, setTime]);

  let d = time.toLocaleTimeString();

  return <h1>Time is: {d}</h1>;
};

export default Effect;
