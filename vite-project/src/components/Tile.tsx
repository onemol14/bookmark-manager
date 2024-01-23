
function Tile({ websiteName, websiteURL }) {
  return (
    <>
      <div className="border border-black p-4 rounded-lg" > 
        <h1> {websiteName} </h1>
        <a href={websiteURL} target="_blank"> go to this website </a> 
      </div> 
    </>
  );
}

export default Tile;