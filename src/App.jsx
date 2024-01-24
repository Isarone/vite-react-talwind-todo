import CrossIcon from "./components/CrossIcon";
import MoonIcon from "./components/MoonIcon";

const App = ()=>{
    return (
      <div 
      className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain min-h-screen" >
        <header className="container mx-auto px-4 pt-8">
         <div className="flex justify-between">
          <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]">TODO</h1>
          <button><MoonIcon fill="#000"/></button>
         </div>
         
         <form className="mt-8 flex items-center gap-4 bg-white rounded-md overflow-hidden py-4">
            <span className="inline-block h-5 w-5 rounded-full border-2"></span>
            <input type="text" placeholder="Create a new todo..." 
              className="w-full text-gray-400 outline-none"
            />
          </form>
        </header>
        <main className="container mx-auto mt-8 px-4">
          <div className="rounded-md bg-white">
          <article className="flex gap-4 border-b border-b-gray-400 py-4 px-4">
            <button className="flex-none inline-block h-5 w-5 rounded-full border-2"></button>
            <p className="text-gray-600 grow">Complete online Javascript</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>

          <article className="flex gap-4 border-b border-b-gray-400 py-4 px-4">
            <button className="flex-none inline-block h-5 w-5 rounded-full border-2"></button>
            <p className="text-gray-600 grow">Complete online Javascript</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>

          <article className="flex gap-4 border-b border-b-gray-400 py-4 px-4">
            <button className="flex-none inline-block h-5 w-5 rounded-full border-2"></button>
            <p className="text-gray-600 grow">Complete online Javascript</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
          
          <section className="py-4 px-4 flex justify-between">
            <span className="text-gray-400">5 items left</span>
            <button>Clear Completed</button>
          </section>

          <section className="container mx-auto px-4 mt-8">
            <div className="bg-white p-4 flex justify-center gap-4">
              <button className="text-blue-600">All</button>
              <button className="hover:text-blue-600">Active</button>
              <button className="hover:text-blue-600">Completed</button>
            </div>
          </section>
          <section className="text-center">
            Drag and drop to reorder list
          </section>
          </div>
          
        </main>
      </div>
    );
}

export default App;