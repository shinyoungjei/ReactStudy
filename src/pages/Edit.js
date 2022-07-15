// QueryString 사용

import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const navi = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  return (
    <div>
      <h1> Edit</h1>
      <p> 여긴 일기 수정 </p>
      <button onClick={() => setSearchParams({ who: "zerojei" })}>
        {" "}
        query
      </button>
      <button
        onClick={() => {
          navi("/");
        }}
      >
        {" "}
        Home돌아가기{" "}
      </button>
      <button
        onClick={() => {
          navi(-1);
        }}
      >
        뒤로가기
      </button>
    </div>
  );
};

export default Edit;
