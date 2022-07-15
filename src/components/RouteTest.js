// react-route에서 제공하는 SPA방식(CSR방식으로) 페이지를 이동시켜주는 컴포넌트 사용
// => Link

import { Link } from "react-router-dom";

const RouteTest = () => {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"/diary"}>diary</Link>
      <br />
      <Link to={"/new"}>new</Link>
      <br />
      <Link to={"/edit"}>edit</Link>
    </>
  );
};

export default RouteTest;
