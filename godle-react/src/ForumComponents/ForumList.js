import ThreadCard from "./ThreadCard";


function ForumList({ filteredSearch, username}) {

  const filtered = filteredSearch.map(thread =>  <ThreadCard thread={thread} username={username} />); 
  return (
    <div>
      {filtered}
    </div>
  );
}

export default ForumList;