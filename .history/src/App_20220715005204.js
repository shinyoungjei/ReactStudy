import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import RouteTest from "./components/RouteTest";

import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import New from "./pages/New";
import MyButton from "./components/MyButton";

function App() {
  // 이미지 저장 경로
  // const env = process.env.PUBLIC_URL;

  return (
    // Step 02. App Component의 최상위 태그에 감싸 준다.
    // 감싸져 있는 부분은 BrowserUrl과 mapping되어 있다.
    <BrowserRouter>
      <div className="App">
        {/* 이미지 불러오기 
        <img src={env + `/assets/emotion1.png`}></img>
        <img src={env + `/assets/emotion2.png`}></img>
        <img src={process.env.PUBLIC_URL + `/assets/emotion3.png`}></img>
        <img src={process.env.PUBLIC_URL + `/assets/emotion4.png`}></img>
        <img src={process.env.PUBLIC_URL + `/assets/emotion5.png`}></img> */}

        <MyButton
          text={"버튼"}
          onClick={() => {
            alert("버튼 클릭");
          }}
          type={"positive"}
        />

        <MyButton
          text={"버튼"}
          onClick={() => {
            alert("버튼 클릭");
          }}
          type={"negative"}
        />

        <MyButton
          text={"버튼"}
          onClick={() => {
            alert("버튼 클릭");
          }}
        />

        {/* Step 03. 본격적인 routing 
       Url이 바뀌게 된다면 어떤 컴포넌트를 렌더링 하여 
       그 컴포넌트가 페이지 역할을 할 것인지 결정하기 위한 태그 */}
        <Routes>
          {/* Step 04. Route 
        실질적으로 URL 경로와 컴포넌트를 매핑 시켜주는 태그 */}
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/diary/:id" element={<Diary />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
        {/* <RouteTest /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
