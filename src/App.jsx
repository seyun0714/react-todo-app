import Button from "./components/Button";
import TabMenu from "./components/TabMenu";
import TodoItem from "./components/TodoItem";

function App() {
  const onChangeTab = (menu) => {
    console.log(menu);
  };
  const onClickButton = () => {
    console.log("button clicked");
  };
  return (
    <>
      <TabMenu onChangeTab={onChangeTab}></TabMenu>
      <TodoItem title={"할일1"}></TodoItem>
      <TodoItem title={"할일2"}></TodoItem>
      <TodoItem title={"할일3"}></TodoItem>
      <TodoItem title={"할일4"}></TodoItem>
      <Button
        label={"submit"}
        size="sm"
        type="normal"
        onClickButton={onClickButton}
      ></Button>
    </>
  );
}

export default App;
