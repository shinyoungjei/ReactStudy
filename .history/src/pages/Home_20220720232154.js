import { useState } from "react";

import MyHeader from "./../components/MyHeader";

const Home = () => {
  // 날짜를 저장할 State
  const [curDate, setCurDate] = useState(new Date());
  console.log(curDate);
  return (
    <div>
      <MyHeader />
    </div>
  );
};

export default Home;
