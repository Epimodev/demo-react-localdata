import { LocaldataProps } from 'react-localdata';

interface AppLocaldata {
  counter1: number;
  counter2: number;
  counter3: number;
}

type AppLocaldataProps = LocaldataProps<AppLocaldata>;

export { AppLocaldata, AppLocaldataProps };
