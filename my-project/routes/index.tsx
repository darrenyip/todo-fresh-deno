/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { useState } from "preact/hooks";
import TaskList from "../islands/TaskList.tsx";
let init = {
  All: {
    categoryColor: "red",
    tasks: [
      {
        task: "Get a new helmet",
        completed: false,
        color: "red",
        category: "Uncategorized",
      },
      {
        task: "Purchase Milk & Corn Flakes",
        completed: false,
        color: "green",
        category: "Uncategorized",
      },
    ],
  },
  Groceries: {
    categoryColor: "red",
    tasks: [
      {
        task: "Get a new helmet",
        completed: false,
        color: "red",
        category: "Uncategorized",
      },
      {
        task: "Purchase Milk & Corn Flakes",
        completed: false,
        color: "green",
        category: "Uncategorized",
      },
    ],
  },
};
export default function Home() {
  const [categories, setCategories] = useState(init);
  const [selectedCate, setSelectedCate] = useState(init["All"]);
  const left = tw`bg-white border-r-2 border-[#D8D8D8] w-[200px] rounded-bl-lg rounded-tl-lg flex justify-center items-center`;
  const right = tw`py-[30px] px-[20px] w-full`;
  return (
    <div
      class={tw`w-full h-screen bg-red-300 flex justify-center items-center`}
    >
      <div class={tw`bg-white max-w-[900px] min-h-[700px] rounded-lg flex `}>
        <div class={left}>
          <div class="categories">
            {/* {JSON.stringify(categories)} */}
            {Object.keys(categories).map((cate, index) => {
              return <div>{cate}</div>;
            })}
          </div>
        </div>
        <div class={right}>
          <TaskList category={"All"} />
          <h1>hi!!!</h1>
          <h1>{JSON.stringify(selectedCate)}</h1>
        </div>
      </div>
    </div>
  );
}
