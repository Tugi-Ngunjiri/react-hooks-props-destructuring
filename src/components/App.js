import React from "react";
import MovieCard from "./MovieCard";


function App() {
  const title ="Hello World";
  
  const  {postersurl}  ="https://m.media-amazon.com/images/M/MV5BOGIwYjZlOTctZTNhOC00OTdiLWI5ZWItOTdiMWRjMjUwMDlhXkEyXkFqcGdeQXVyNDQxNjcxNQ@@._V1_.jpg";
  const genresArr = ["Romance ,Adventure", "Fantasy"];

  return (
    <div className="App">
      {/*passing down the props from the parent component */}
      <MovieCard
       title={title} genres={genresArr} />
    </div>
  );
}

export default App;
