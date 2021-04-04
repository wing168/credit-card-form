import './App.css';
import { useState } from 'react';

const App = () => {

  const [cardNum, setCardNum] = useState('');
  const [cardName, setCardName] = useState('');
  const [month, setMonth] = useState('');
  const [year, setCardYear] = useState('');
  const [cvv, setCvv] = useState('');

  const handleChangeCardNum = (e) => {
    
    let value = e.target.value.replace(/\D/g, ''); //Removes whitespace before filtering into the setCardNum function

    setCardNum(value.replace(/(\d{4})/, '$1 ').replace(/(\d{4}) (\d{4})/, '$1 $2 ').replace(/(\d{4}) (\d{4}) (\d{4})/, '$1 $2 $3 ')); //Max 16 digits with 3 spaces

  }


  console.log(cardNum);

  return (
    <div className='App container-fluid'>
      <h1>Credit card form</h1>
      <form className='login-form'>
        <input className='card-num form-control' name='cardNum' type='tel' maxLength="19" value={cardNum} placeholder='Your 16 digit card number' onChange={handleChangeCardNum} required />
        <input className='card-name form-control' name='cardName' type='text' value={cardName} placeholder='Your name as it appears on the card' required />
        <input className='end-date-month form-control' name='month' type='text' value={month} placeholder='Month' required />
        <input className='end-date-year form-control' name='year' type='year' value={year} placeholder='Year' required />
        <input className='cvv form-control' name='cvv' type='number' value={cvv} placeholder='CVV' required />
      </form>
    </div>
  );
}

export default App;
