import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
function HiringTest1() {
  const [clickId, setClickId] = useState<string | null>(null);
  const handleClick = () => {
    setClickId(uuidv4());
  };
  return (
    <>
      <h1>
        In the production environnement, this page is accessible to all
        visitors. Its a static page and all visitors are served with the same
        content
      </h1>
      <h2>
        The click id will be used to track users interaction with the page
        during the visit
      </h2>
      <button type="button" onClick={handleClick}>
        Click Me !
      </button>
      {clickId ? <p> Your click Id is : {clickId}</p> : null}
    </>
  );
}

export default HiringTest1;
