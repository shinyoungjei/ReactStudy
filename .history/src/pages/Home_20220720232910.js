import { useState } from "react";

import MyHeader from "./../components/MyHeader";
import MyButton from "./../components/MyButton";

const Home = () => {
  // 날짜를 저장할 State
  const [curDate, setCurDate] = useState(new Date());
  console.log(curDate);

  /*
    .getFullYear = 현재 Date의 년도를 가져온다.
    .getMonth = 현제 Date의 월을 가져온다 (0월 부터 시작)
  */
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;
  return (
    <div>
      <MyHeader
        headText={headText}
        leftChild={<MyButton text={"<"} onClick={() => {}} />}
      />
    </div>
  );
};

export default Home;
