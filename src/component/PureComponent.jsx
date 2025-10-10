import { memo, useEffect, useRef } from "react";

function PureComponent({ title, func }) {
  const renderCount = useRef(1);
  useEffect(() => func(), [func]);
  return (
    <div>
      {title}, Rendered: {renderCount.current++} times.
    </div>
  );
}
export default memo(PureComponent); // this HOC from react will make sure this component only re-renders when props passed by parents actually changes.

// export default PureComponent; // this will let component re-render everytime parent renders.
