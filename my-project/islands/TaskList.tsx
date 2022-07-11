/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";
interface Task {
  task: string;
  completed: boolean;
  color: string;
  category: string;
}
interface TaskProps {
  tasks: Task;
  onAddTask(): Task;
  category: Task;
}

export default function TaskList(props) {
  const { category } = props;
  const [task, setTask] = useState({
    task: "string",
    completed: false,
    color: "red",
    category: "All",
  });
  const handleOnChange = ({ currentTarget }) => {
    const value = currentTarget.value;
    console.log(value);
  };
  const btn = tw`px-2 py-1 border(gray-100 1) hover:bg-gray-200`;
  return (
    <div class={tw``}>
      <h1 class={tw`color-[#000] text-[31px] font-bold mb-[25px]`}>
        {category}
      </h1>
      <input
        class={tw`bg-[#F3F3F3] h-[47px] w-full rounded-[8px] pl-[27px]`}
        type="text"
        placeholder="Add a new task insdie 'all' category"
        onChange={handleOnChange}
      />
    </div>
  );
}
