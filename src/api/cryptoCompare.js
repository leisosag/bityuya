import axios from 'axios';

export default axios.create({
  baseURL:
    'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD',
});
