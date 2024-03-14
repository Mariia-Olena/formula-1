import './spinnerStyles.scss';
import SpinnerCar from 'ui/SpinnerCar';

function Spinner() {
  return (
    <div className='spinner'>
      <div className='spinner-box'>
        <div className='spinner-svg'>
          <SpinnerCar fill='#1e40af' />
        </div>
        <div className='spinner-svg'>
          <SpinnerCar fill='#1e40af' />
        </div>
      </div>
      <div className='spinner-box'>
        <div className='spinner-svg'>
          <SpinnerCar fill='#dc2626' />
        </div>
        <div className='spinner-svg'>
          <SpinnerCar fill='#dc2626' />
        </div>
      </div>
      <div className='spinner-box'>
        <div className='spinner-svg'>
          <SpinnerCar fill='#065f46' />
        </div>
        <div className='spinner-svg'>
          <SpinnerCar fill='#065f46' />
        </div>
      </div>
    </div>
  );
}

export default Spinner;
