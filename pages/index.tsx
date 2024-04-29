import type { NextPage } from 'next'
import { FaucetSender } from '../components/FaucetSender'

const Home: NextPage = () => {
  // return <FaucetSender
  //   faucetAddress="cosmos15aptdqmm7ddgtcrjvc5hs988rlrkze40l4q0he"
  //   rpcUrl="https://rpc.sentry-01.theta-testnet.polypore.xyz" />
  return <FaucetSender
  faucetAddress="cosmos1dw0na20g3pjy5jdz6wt63ymz3rsldnxrjsauza"
  rpcUrl="ws://127.0.0.1:26657" />
}

export default Home
