import DeityCard from "./DeityCard";


function SearchList({ filteredSearch}) {

  
  const filtered = filteredSearch.map(deity =>  <DeityCard key={deity.DeityName} deity={deity}/>); 
  return (
    <div className={"searchContainer"}>
      {filtered}
    </div>
  );
}

export default SearchList;