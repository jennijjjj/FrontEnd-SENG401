import ThreadCard from "./ThreadCard";


function ForumList({ filteredSearch}) {

  const filtered = filteredSearch.map(thread =>  <ThreadCard thread={thread} />); 
  return (
    <div>
      {filtered}
    </div>
  );
}

export default ForumList;