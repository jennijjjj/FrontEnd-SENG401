import DeityCard from "./DeityCard";
import UserCard from './UserCard'; 

function SearchList({ filteredSearch, controller}) {
  let filtered;
  
  if (controller === "Deity") {
    filtered = filteredSearch.map((deity) => <DeityCard deity={deity}/>);
  } else if (controller === "User") {
    filtered = filteredSearch.map((user) => <UserCard user={user} />);
  } else {
    filtered = null; // or handle other cases as needed
  }

  return (
    <div className={"searchContainer"}>
      {filtered}
    </div>
  );
}

export default SearchList;