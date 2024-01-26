import CrossIcon from "./icons/CrossIcon";
import IconCheck from "./icons/IconCheck";

const TodoItem = ({ todo,removeTodo,updateTodo }) => {

const {id,completed,title} = todo;
    
  return (
    <article className="flex gap-4 border-b border-b-gray-400 py-4 px-4">
      {completed ? (
        <button 
        className="flex-none h-5 w-5 rounded-full border-2 bg-gradient-to-r from-indigo-500 to-pink-500 flex justify-center items-center"
        onClick={()=>updateTodo(id)}
        >
          <IconCheck />
        </button>
      ) : (
        <button 
            className="flex-none inline-block h-5 w-5 rounded-full border-2"
            onClick={()=>updateTodo(id)}
        >
          <IconCheck />
        </button>
      )}

      <p className={`text-gray-600 grow ${completed && "line-through"}`}>{title}</p>
      
      <button 
        className="flex-none"
        onClick={()=>removeTodo(id)}
      >
        <CrossIcon />
      </button>
    </article>
  );
};
export default TodoItem;
