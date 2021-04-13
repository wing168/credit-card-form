import './App.css';
import { useState } from 'react';

const App = () => {

  const [cardNum, setCardNum] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const setStateFuncMapping = {
    cardNum: setCardNum,
    cardName: setCardName,
    expiryDate: setExpiryDate,
    cvv: setCvv
  }


  const handleChange = (e) => {

    const targetName = e.target.name;

    if (targetName === "cardNum") {
      let value = e.target.value.replace(/\D/g, ''); //Removes whitespace before filtering into the setCardNum function

      setStateFuncMapping[targetName](value.replace(/(\d{4})/, '$1 ').replace(/(\d{4}) (\d{4})/, '$1 $2 ').replace(/(\d{4}) (\d{4}) (\d{4})/, '$1 $2 $3 ')); //Max 16 digits with 3 spaces
 
      //handling the delete event when it reaches the space inserted above after every 4 digits
      if (e.nativeEvent.inputType === "deleteContentBackward" && cardNum.charAt(cardNum.length - 1) === " ") {
        setStateFuncMapping[targetName](cardNum.slice(0, -1));
      }

    } else {
        setStateFuncMapping[targetName](e.target.value);
    }
  }

  return (
    <div className='App container-fluid'>
      <div className="form-wrapper">
        <form className='login-form'>
          <label className="form-label">Card Number</label>
          <input className='card-num form-control' name='cardNum' type='tel' maxLength="19" value={cardNum} placeholder='Your 16 digit card number' onChange={handleChange} required />
          <label className="form-label">Card Name</label>
          <input className='card-name form-control' name='cardName' type='text' value={cardName} placeholder='Your name as it appears on the card' onChange={handleChange} required />
          <div className="row">
            <div className="col-xl">
              <label className="form-label">Expiration date</label>
              <input className='end-date-month form-control' name='expiryDate' type='month' value={expiryDate}  onChange={handleChange} required />
            </div>
            <div className="col-xl">
              <label className="form-label">CVV</label>
              <input className='cvv form-control' name='cvv' type='tel' maxLength="4" value={cvv} placeholder='CVV' onChange={handleChange} required />
            </div>
           
          </div>
         
        </form>
      </div>
      
    </div>
  );
}

export default App;
