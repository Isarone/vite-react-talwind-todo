const TodoFilter = ({changeFilter,filter}) =>{
return (
    <section className="container mx-auto px-4 mt-8">
    <div className="bg-white p-4 flex justify-center gap-4 rounded-md">
      <button className={`${filter ==='all'
                  ?'text-blue-500 hover:text-blue-400'
                  :'text-gray-400 hover:text-blue-500'}`} 
                  onClick={()=>changeFilter('all')}>All</button>
      <button className={`${filter ==='active'
                  ?'text-blue-500 hover:text-blue-400'
                  :'text-gray-400 hover:text-blue-500'}`}  
                  onClick={()=>changeFilter('active')}>Active</button>

      <button className={`${filter ==='completed'
                  ?'text-blue-500 hover:text-blue-400'
                  :'text-gray-400 hover:text-blue-500'}`}  
                  onClick={()=>changeFilter('completed')}>Completado</button>
    </div>
  </section>
)
}

export default TodoFilter;