import DeityCard from "./DeityCard";
import UserCard from './UserCard'; 

function SearchList({ filteredSearch, controller, fetchJsonData}) {
  let filtered;
  
  if (controller === "Deity") {
    filtered = filteredSearch.map((deity) => <DeityCard deity={deity} fetchJsonData={fetchJsonData}/>);
  } else if (controller === "User") {
    filtered = filteredSearch.map((user) => <UserCard user={user} fetchJsonData={fetchJsonData}/>);
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