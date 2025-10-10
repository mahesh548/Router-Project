import { memo, useEffect, useId, useRef } from "react";

function PureComponent({ title, func }) {
  const eleId = useId(); // this hook provided by react that returns unique id for html elements and it stays same until our html structure changes.
  console.log(eleId);
  const renderCount = useRef(1);
  useEffect(() => func(), [func]);
  return (
    <div id={eleId}>
      {title}, Rendered: {renderCount.current++} times.
    </div>
  );
}
export default memo(PureComponent); // this HOC from react will make sure this component only re-renders when props passed by parents actually changes.

// export default PureComponent; // this will let component re-render everytime parent renders.
