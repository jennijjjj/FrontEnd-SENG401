import ThreadCard from "./ThreadCard";


function ForumList({ filteredSearch, username,fetchData }) {

  const filtered = filteredSearch.map(thread =>  <ThreadCard thread={thread} username={username} fetchData={fetchData} />); 
  return (
    <div>
      {filtered}
    </div>
  );
}

export default ForumList;