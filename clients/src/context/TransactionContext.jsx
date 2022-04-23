import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

const { ethereum } = window; //destructuring ethereum

/** MetaMask injects a Web3 Provider as "web3.currentProvider", so
we can wrap it up in the ethers.js Web3Provider, which wraps a
 Web3 Provider and exposes the ethers.js Provider API. */
const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  ); //   to fetch contract

  console.log({
    provider,
    signer,
    transactionContract,
  });
};

export const TransactionProvider = ({ children }) => {
  return (
    <TransactionContext.Provider value={{ value: "test" }}>
      {children}
    </TransactionContext.Provider>
  );
};
