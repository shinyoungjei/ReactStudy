import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";

import MyHeader from "./../components/MyHeader";
import MyButton from "./../components/MyButton";
import DiaryList from "../components/DiaryList";

const Home = () => {
  // App에서 DiaryStateContext에 data를 할당 해주었기 때문에 불러와 사용.
  const diaryList = useContext(DiaryStateContext);

  // 해당하는 달의 일기만 저장할 State
  const [data, setData] = useState([]);

  // 날짜를 저장할 State
  const [curDate, setCurDate] = useState(new Date());

  /*
    headText
    .getFullYear = 현재 Date의 년도를 가져온다.
    .getMonth = 현제 Date의 월을 가져온다 (0월 부터 시작)
  */
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  useEffect(
    () => {
      if (diaryList.length >= 1) {
        // 해당 년도 해당 달의 1일의 시간을 갖고온다.
        const firstDay = new Date(
          curDate.getFullYear(),
          curDate.getMonth(),
          1
        ).getTime();

        // 해당 년도 해당 달의 마지막 날의 시간을 갖고온다.
        const lastDay = new Date(
          curDate.getFullYear(),
          curDate.getMonth(),
          0
        ).getTime();

        // diaryList의 date가 firstDay와 lastDay안에 해당하는 배열을 만들어 data로 전달.
        setData(
          diaryList.filter(it => firstDay <= it.date && it.date <= lastDay)
        );
      }
    },
    //diaryList가 변할 경우 동작을 해야 하기 때문에 diaryList 추가.
    //diaryList가 변한다는 뜻은 일기가 생성,수정,삭제가 되었단 뜻이기 때문에 업로드 해야함.
    [diaryList, curDate]
  );

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
    <div className="Home">
      <MyHeader
        headText={headText}
        leftChild={
          <MyButton
            text={"<"}
            onClick={() => {
              decreasMonth();
            }}
          />
        }
        rightChild={
          <MyButton
            text={">"}
            onClick={() => {
              increasMonth();
            }}
          />
        }
      />
      <DiaryList diaryList={diaryList} />
    </div>
  );
};

export default Home;
