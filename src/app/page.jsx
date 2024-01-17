import styles from './page.module.css'
import prisma from '../../lib/prisma'
import CoinFundingRates from './(components)/(funding)/CoinFundingRates'
import CoinBorrowRates from './(components)/(borrow)/CoinBorrowRates'
import Nav from './(components)/(nav)/Nav'


async function getCoinFundingRates() {
  const response = await prisma.coinFundingRate.findMany()
  return response;
}


async function getCoinBorrowRates() {
  const response = await prisma.coinBorrowRate.findMany()
  return response;
}


async function getCoinBorrowRatesApi() {
  const response = await fetch('https://bybit-premiums-backend-4ade2ef52ba5.herokuapp.com/borrowrates');
  const data = await response.json()
  return data;
}

async function getCoinFundingRatesApi() {
  const response = await fetch('https://bybit-premiums-backend-4ade2ef52ba5.herokuapp.com/fundingrates');
  const data = await response.json()
  return data;
}

export default async function Home() {
  const coinFundingRates = await getCoinFundingRatesApi();
  const coinBorrowRates = await getCoinBorrowRatesApi();


  // console.log(coinFundingRates);
  return (
    <main className={styles.main}>
      <Nav/>
      <div className={styles.mainDivTwo}>
            <CoinFundingRates
              coinFundingRates={coinFundingRates}
            />
            <CoinBorrowRates
              coinBorrowRates={coinBorrowRates}
            />
      </div>
    </main>
  )
}
