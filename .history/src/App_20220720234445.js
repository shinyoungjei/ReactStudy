import React, { useReducer, useRef } from "react";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import New from "./pages/New";

const reducer = (state, action) => {
  let newState = [];

  switch (action.type) {
    case "INIT": {
      return action.data;
    }

    case "CREATE": {
      newState = [action.data, ...state];
      break;
    }

    case "REMOVE": {
      newState = state.filter(it => it.id !== action.targetId);
    }

    case "EDIT": {
      newState = state.map(it =>
        it.id === action.data.id ? { ...action.data } : it
      );
    }

    default:
      return state;
  }
  return newState;
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const DummyDate = [
  {
    id: 1,
    emotion: 1,
    content: "test_1",
    date: 1658328151213,
  },
  {
    id: 1,
    emotion: 1,
    content: "test_2",
    date: 1658328151214,
  },
  {
    id: 1,
    emotion: 1,
    content: "test_3",
    date: 1658328151215,
  },
  {
    id: 1,
    emotion: 1,
    content: "test_4",
    date: 1658328151216,
  },
  {
    id: 1,
    emotion: 1,
    content: "test_5",
    date: 1658328151217,
  },
];

function App() {
  const [data, dispatch] = useReducer(reducer, DummyDate);

  const dataId = useRef(0);
  //CREATE
  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
    dataId.current += 1;
  };
  //REMOVE
  const onRemove = targetId => {
    dispatch({
      type: "REMOVE",
      targetId,
    });
  };
  //EDIT
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider
        value={{
          onCreate,
          onRemove,
          onEdit,
        }}
      >
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<New />} />
              <Route path="/diary/:id" element={<Diary />} />
              <Route path="/edit" element={<Edit />} />
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
