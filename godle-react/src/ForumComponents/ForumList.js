import ThreadCard from "./ThreadCard";


function ForumList({ filteredSearch}) {

  const filtered = filteredSearch.map(thread =>  <ThreadCard thread={thread} />); 
  return (
    <div className={"searchContainer"}>
      {filtered}
    </div>
  );
}

export default ForumList;