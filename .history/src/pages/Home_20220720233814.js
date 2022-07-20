import { useState } from "react";

import MyHeader from "./../components/MyHeader";
import MyButton from "./../components/MyButton";

const Home = () => {
  // 날짜를 저장할 State
  const [curDate, setCurDate] = useState(new Date());
  console.log(curDate);

  /*
    headText
    .getFullYear = 현재 Date의 년도를 가져온다.
    .getMonth = 현제 Date의 월을 가져온다 (0월 부터 시작)
  */
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  // 1개월씩 증가 시키기.
  const increasMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
    );
  };

  // 1개월씩 감소 시키기
  const decreasMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
    );
  };

  return (
    <div>
      <MyHeader
        headText={headText}
        leftChild={<MyButton text={"<"} onClick={() => {}} />}
        rightChild={
          <MyButton
            text={">"}
            onClick={() => {
              increasMonth();
            }}
          />
        }
      />
    </div>
  );
};

export default Home;
