import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
function HiringTest1() {
  const [clickId, setClickId] = useState<string | null>(null);
  const handleClick = () => {
    setClickId(uuidv4());
  };
  return (
    <>
      <button type="button" onClick={handleClick}>
        Click Me !
      </button>
      {clickId ? <p> Your click Id is : {clickId}</p> : null}
    </>
  );
}

export default HiringTest1;
