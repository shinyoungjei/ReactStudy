const DiaryList = ({ diaryList }) => {
  return;
  <div className="DiaryList">
    {diaryList.map(it => (
      <div key={it.id}>{it.content}</div>
    ))}
  </div>;
};

export default DiaryList();
