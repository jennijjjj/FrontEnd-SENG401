import Card from './Card';


function SearchList({ filteredSearch, onccardclick}) {

  
  const handleCardClick = (flightCode) => {
    onccardclick(flightCode); // Update flightCode in the App component
    // Handle navigation based on userType here
    // Example: navigate('/browseseats');
  };
  const filtered = filteredSearch.map(deity =>  <Card key={deity.DeityName} deity={deity} onCardClick={handleCardClick}/>); 
  return (
    <div className={"searchContainer"}>
      {filtered}
    </div>
  );
}

export default SearchList;