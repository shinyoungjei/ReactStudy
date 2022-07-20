import { useState } from "react";

const Home = () => {
  // 날짜를 저장할 State
  const [curDate, setCurDate] = useState(new Date());
  console.log(curDate);
  return <div></div>;
};

export default Home;
