// adding cards          // in par we can place props or destructured object as parameter {p1,p2}
function Card(props){   // here props parameter is an Object. it is helpful if we want same type of card with Different Names
    return(  
      <>         
        <div className="py-8 m-4 px-8 max-w-sm mx-auto bg-blue-300 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
  <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpf54XPulJI5v_5q-N2UCynDtu9ZLzhbqgNBZyv79ccuk0Jw4A&s" alt="Woman's Face" />
  <div className="text-center space-y-2 sm:text-left">
    <div className="space-y-0.5">
      <p className="text-lg text-black font-semibold">
        {props.Name}
      </p>
      <p className="text-slate-500 font-medium">
        {props.work}
      </p>
    </div>
    <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Contact</button>
  </div>
</div>

</> 

    )
}
export default Card