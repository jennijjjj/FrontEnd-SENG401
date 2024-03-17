import React from 'react';
import ThreadCard from "./ThreadCard";

function ForumList({ filteredSearch, username, fetchData }) {
  // Sort threads by most recent date
  const sortedThreads = filteredSearch.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Map sorted threads to ThreadCard components
  const sortedThreadCards = sortedThreads.map(thread => (
    <ThreadCard key={thread.id} thread={thread} username={username} fetchData={fetchData} />
  ));

  return (
    <div>
      {sortedThreadCards}
    </div>
  );
}

export default ForumList;