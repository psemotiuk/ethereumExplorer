import Web3 from 'web3';

// const web3 = new Web3('ws://localhost:8546');

export const web3Instance = new Web3(window?.web3?.currentProvider || new Web3.providers.HttpProvider('http://localhost:8545'));
// console.log('eth', window.web3.currentProvider);

// export const getBlockNumber = async () => {
//     const recentBlockNumber = await web3.eth.getBlockNumber();

//     console.log('recent block', recentBlockNumber);
// }

// window.addEventListener('load', function () {
//     if (typeof web3 !== undefined) {
//         console.log(321);

//         window.web3 = new Web3(window.web3.currentProvider);
//     }

//     else {
//         window.web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
//     }
// })

export const getRecentBlockNumber = async () => {
  const recentBlock = await web3Instance.eth.getBlockNumber();

  return recentBlock;
};

export const getBLock = async (number) => {
  const block = await web3Instance.eth.getBlock(number);

  return block;
};

export const getLastTenBlocks = async () => {
  const recentBlock = await getRecentBlockNumber();
  const firstOfTen = recentBlock - 10;
  const blockList = [];

  for (let i = recentBlock; i > firstOfTen; i--) {
    blockList.push(await getBLock(i));
  }

  return blockList;
};

export const getTransaction = async (hashNumber) => {
  const transaction = await web3Instance.eth.getTransaction(hashNumber);

  return transaction;
};

export const getBlockTransactions = async (hashes) =>
  Promise.all(hashes.map(async (hashString) => getTransaction(hashString)));




export const getLastTenTransactions = async (hashes) => {
  const lastTenBlocks = await getLastTenBlocks();
  const lastBLock = lastTenBlocks[9];
  const tranasctionsList = [];
  const firstOfTen = lastBLock.transactions.length - 10;

  for (let i = firstOfTen; i < lastBLock.transactions.length; i++) {
    tranasctionsList.push(lastBLock.transactions[i]);
  }

  const txs = await getBlockTransactions(tranasctionsList);

  return txs;
}