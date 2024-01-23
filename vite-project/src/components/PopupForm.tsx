import  { useState } from 'react';

const PopupForm = ({ tileList, setTileList }) => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [websiteName, setWebsiteName] = useState('');
  const [websiteURL, setWebsiteURL] = useState('');

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const handleWebsiteNameChange = (e) => {
    setWebsiteName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any action with the websiteName data (e.g., submit to the server)
    const newTile = { websiteName: websiteName, websiteURL: websiteURL };
    setTileList( (tileList) => [...tileList, newTile]);
    // Close the popup after submission
    closePopup();
  };

  return (
    <div style={{ position: 'fixed', top:'70vh', left: '48vw' }}>
      <button onClick={openPopup} className="bg-white border-2 border-black rounded-lg">Open Popup</button>

      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <span className="close-btn" onClick={closePopup}>
              &times;
            </span>
            <h2>Website Name Form</h2>
            <form onSubmit={handleSubmit}>
              <div> 
                <label className="">
                  Website Name:
                  <input
                    type="text"
                    value={websiteName}
                    onChange={handleWebsiteNameChange}
                    required
                    className="bg-white border-2 border-black"
                  />
                </label>
              </div> 

              <div> 
                <label>
                  Website URL:
                  <input
                    type="text"
                    value={websiteURL}
                    onChange={ (e) => setWebsiteURL(e.target.value) }
                    required
                    className="bg-white border-2 border-black"
                  />
                </label>
              </div>
              <button type="submit" className="bg-white border-2 border-black rounded-lg">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupForm;
