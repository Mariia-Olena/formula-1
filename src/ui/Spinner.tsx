import './spinnerStyles.scss';
import SpinnerCar from 'ui/SpinnerCar';

function Spinner() {
  return (
    <div className='spinner'>
      <SpinnerCar fill='#1e40af' />
      <SpinnerCar fill='#dc2626' />
      <SpinnerCar fill='#065f46' />
    </div>
  );
}

export default Spinner;
