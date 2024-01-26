const TodoComputed = ({computedItemsLeft,clearCompleted}) => {
    return (  <section className="flex py-4 px-4 justify-between bg-white rounded-b-md">
    <span className="text-gray-400">{computedItemsLeft} items left</span>
    <button className="text-gray-400" onClick={clearCompleted}  >Clear Completed</button>
  </section>)
}

export default TodoComputed;