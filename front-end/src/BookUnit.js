
import {useEffect, useState, useContext, } from 'react';
import AuthContext from './AuthContext';
import StorageUnit from './storage-unit.jpeg';

const BookUnit = () => {
    const [storageUnits, setStorageUnits] = useState([]);
    const [unitClicked, setUnitClicked] = useState(false);
    const [unitId, setUnitId] = useState(null);
    const [unitData, setUnitData] = useState({});
    const { userData, isLoggedIn } = useContext(AuthContext); 

    const unitClickedHandler = (id) => {
      setUnitClicked(!unitClicked);
      setUnitId(id);
    };

    const unitCloseHandler = e => {
      e.preventDefault();
      setUnitClicked(!unitClicked);
    };




  
  
  
  
    useEffect(() => {
      const fetchStorageUnits = async () => {
        try {
          const response = await fetch('http://localhost:3001/api/v1/storageunits');
          
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
  
          const data = await response.json();
          setStorageUnits(data.data.storageUnits); // Assuming the response is an array of storage units
          
        } catch (error) {
          console.error('Error fetching storage units:', error);
          // Handle errors here, e.g., set an error state or display a message to the user
        }
      };
  
      fetchStorageUnits();
    }, []);



    useEffect(() => {
    const getOneUnit = async () => {
    console.log(unitId)
      try {
        const response = await fetch(`http://localhost:3001/api/v1/storageunits/${unitId}`);
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        const data = await response.json();
        // Assuming the response is an object containing details of the storage unit
        setUnitData(data.data)
        // Update state or perform any other action with the storage unit details
      } catch (error) {
        console.error('Error fetching storage unit details:', error);
        // Handle errors here, e.g., set an error state or display a message to the user
      }
    }
    getOneUnit();
  }, [unitId]);


  
  
    return (
      <div className={!unitClicked ? "App" : "App Dark"}>
        <header className="App-header">
        <h2>
        Rent a Storage Unit
      </h2>
      {!isLoggedIn &&
      <div>
        <p>Ready to book a storage unit? <a href='/'>Log In</a> or <a href='/'>Sign Up</a></p>
        </div>}

        {isLoggedIn &&
        <div>
          <p>
            Welcome, {userData.fullName}. Rent a Storage Unit Below.
            </p></div>}

  <div className='storage-map'>
    <h3>
      Palmerston North Storage Facility Map
    </h3>
    <p>
      Click on an available unit below to view details and book
    </p>
  <div className='key'>
    <h4>
      Key:
    </h4>

<div className='keys'>
  <div className='availability available'>
      <p>
              Unit Available
      </p>
      <div className='key-box blue'></div>

    </div>
  <div className='availability booked'>
            <p>
              Unit Booked
            </p>
            <div className='key-box red'></div>
  </div>


</div>

</div>
{!unitClicked &&
    <div className='storage-units'>
      

          {storageUnits.map((unit) => (
            <div className={unit.unitBooked ? 'unit booked' : 'unit available'} key={unit._id} onClick={!unit.unitBooked ? () => unitClickedHandler(unit._id) : null}>

  
            </div>

          ))}




        </div>}


                  {unitClicked && 
                    <div className='unit-modal'>
                      <div className='close-btn' onClick={unitCloseHandler}><span>X</span></div>
                      <h4>
                        Unit Details
                      </h4>
                      <img src={StorageUnit} alt='storage-unit'></img>
                      <p>
                        <strong>
                          Unit Number:
                          {unitData.unitNumber}
                        </strong>
                      </p>
                      <p>
                        Dimensions: {unitData.length} x {unitData.height} x {unitData.width}
                      </p>
                      <button
                      className='button-solid'>
                        Rent Unit
                      </button>
                    </div>
                    }
      </div>
        </header>
      </div>
    );
  };

export default BookUnit;