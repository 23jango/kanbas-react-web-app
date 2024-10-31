export default function PassingFunctions(
  { theFunction }: { theFunction: () => void }) {
    // function passed in as a parameter
   return (
     <div>
       <h2>Passing Functions</h2>
       <button onClick={theFunction} className="btn btn-primary">
       {/* // invoking function with no arguments */}
         Invoke the Function
       </button>
       <hr/>
     </div>
 );}
 