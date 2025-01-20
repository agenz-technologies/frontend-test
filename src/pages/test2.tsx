import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
function HiringTest2(props: { clickId: string }) {
  const [clickId, setClickId] = useState<string | null>(null);
  const handleClick = () => {
    setClickId(props?.clickId);
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

export default HiringTest2;

export const getServerSideProps = async () => {
  return {
    props: {
      clickId: uuidv4(),
    },
  };
};
