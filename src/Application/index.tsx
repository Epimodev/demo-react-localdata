import { createElement } from 'react';
import { LocaldataProvider } from 'react-localdata';
import CounterPage from 'src/pages/CounterPage';
import { AppLocaldata } from './types';
import 'assets/fonts/fonts.css';
import './style.scss';

const defaultLocaldata: AppLocaldata = {
  counter1: 0,
  counter2: 0,
  counter3: 0,
};

function Application() {
  return (
    <LocaldataProvider defaultData={defaultLocaldata}>
      <CounterPage />
    </LocaldataProvider>
  );
}

export default Application;
