// import { NextPage } from 'next'
import { FC, ReactNode } from "react"
import axios from "axios";

import {
  TransactionMessage,
  VersionedTransaction,
  SystemProgram,
  Transaction,
  PublicKey,
  Keypair,
  sendAndConfirmTransaction,
  Connection,
  clusterApiUrl,
} from "@solana/web3.js";
import { FlatList, ImageBackground } from "react-native";
import tw from "twrnc";
import { useMemo } from "react";
import { BackpackWalletAdapter } from "@solana/wallet-adapter-backpack";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import { Screen } from "../components/Screen";
import ReactXnft, { Button,  Image,  Text, TextField, View, usePublicKey } from "react-xnft";

import { useEffect, useState } from "react";
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import * as buffer from "buffer";
window.Buffer = buffer.Buffer;
// ==================================
import {
  Metaplex,
  keypairIdentity,
  bundlrStorage,
  toMetaplexFile,
  NftWithToken,
  BigNumber,
} from "@metaplex-foundation/js"
import * as fs from "fs"


ReactXnft.events.on("connect", () => {
  
});


// /=========================================================/
/getBalance/
// export function App() {
//   useEffect(() => {
//     (async () => {
//       console.log(
//         "Solana balance",
//         await window.xnft.solana.connection.getBalance(
//           window.xnft.solana.publicKey
//         )
//       );
//       console.log(
//         "Ethereum balance",
//         (
//           await window.xnft.ethereum.provider.getBalance(
//             window.xnft.ethereum.publicKey
//           )
//         ).toString()
//       );
//     })();
//   }, [])};

// ===============================================================
//Sign transfer tx

// export function HomeScreen () {
//   const solanaSignAndConfirmTx = async () => {
//     const transaction = new Transaction().add(
//       SystemProgram.transfer({
//         fromPubkey: window.xnft.solana.publicKey,
//         toPubkey: new PublicKey("3VHwVfYVibgWasVAAGX71DwTMnj3Zxn6ATir3ohsCGqP"),
//         lamports:1_000_000_000,
//       })
//     );
//     try {
//       const result = await window.xnft.solana.sendAndConfirm(transaction);
//       console.log("Solana sign and confirm tx" , result);
//     } catch (e) {
//       console.log(`Error while signing ${e}`);
//     }
//   };
//   return (
//     <View style={{ margin: "24px"}}>
//       <Text >Hi Blockchain Guyes. Please Sign your message </Text>
//       <Button style={{ width: "75%" }} onClick={solanaSignAndConfirmTx}>Sign Message</Button>
//     </View>
//   );
// }

// ===============================================================


// import { BN } from "@project-serum/anchor";
// import { atom } from "recoil";
// import getAllxNFTs from "../_utils/getAllXnfts";
// import { XnftWithMetadata } from "../_types/XnftWithMetadata";
// import solanaConnectionAtom from "./solanaConnectionAtom";

// const xnftAtom = atom<XnftWithMetadata[]>({
//   key: "xnftAtom",
//   effects: [
//     ({ setSelf, getPromise }) => {
//       const fetchAllXnfts = async () => {
//         const xnfts = await getAllxNFTs(
//           window.xnft.solana.connection,
//           window.xnft.solana.publicKey
//         );
//         window.xnft.setStorage("xnfts", JSON.stringify(xnfts));
//         setSelf(xnfts);
//       };

//       window.xnft
//         .getStorage("xnfts")
//         .then((cache) => {
//           if (cache) {
//             const xnfts: XnftWithMetadata[] = JSON.parse(cache);
//             setSelf(rehydrate(xnfts));
//           }
//         })
//         .then(() => getPromise(solanaConnectionAtom))
//         .then(async () => {
//           await fetchAllXnfts();
//         });
//     },
//   ],
// });

// function rehydrate(xnfts: XnftWithMetadata[]): XnftWithMetadata[] {
//   xnfts.forEach((xnft) => {
//     xnft.account.createdTs = new BN(xnft.account.createdTs, 16);
//     xnft.account.updatedTs = new BN(xnft.account.updatedTs, 16);
//     xnft.account.totalInstalls = new BN(xnft.account.totalInstalls, 16);
//     xnft.account.installPrice = new BN(xnft.account.installPrice, 16);
//     xnft.account.totalRating = new BN(xnft.account.totalRating, 16);
//   });
//   return xnfts;
// }

// export default xnftAtom;


//===========================================================================================


// export function HomeScreen() {
//   const onClick = () => {
//     const degodsXnft = "AM8TpkQaKnoiofQZrnBWhhbmUfrDo2kWJLLoNm2kybAW";
//     window.backpack.openXnft(degodsXnft);
//   };
//   return <button onClick={onClick}>Open xNFT</button>;
// }


// ============================================================================================




// const ListAll = () => {
  
//   const xKey = "";//enter your x api key here
//   const [wallID, setWallID] = useState("");
//   const [network, setNetwork] = useState("devnet");

//   const [isLoaded, setLoaded] = useState(false);
//   const [dataFetched, setDataFetched] = useState();

//   const [connStatus,setConnStatus] = useState(false);
  
//   const solanaConnect = async () => {
//     console.log('clicked solana connect');
//     const { solana } = window;
//         if(!solana)
//         {
//             alert("Please Install Solana");
//         }

//         try{  
//             //const network = "devnet";
//             const phantom = new PhantomWalletAdapter();
//             await phantom.connect();
//             const rpcUrl = clusterApiUrl(network);
//             const connection = new Connection(rpcUrl,"confirmed");
//             const wallet = {
//                 address: backpack.publicKey.toString(),
//             };

//             if(wallet.address)
//             {
//                 console.log(wallet.address);
//                 setWallID(wallet.address);
//                 const accountInfo = await connection.getAccountInfo(new PublicKey(wallet.address),"confirmed");
//                 console.log(accountInfo);
//                 setConnStatus(true);  
//             }
//         }
//         catch(err)
//         {
//             console.log(err);
//         }

//   }

//   const fetchNFTs = (e) => {
//     e.preventDefault();
//     //const val = ReadAllNFts.callNft(xKey,wallID,network,updAuth); // This is the code which is not working
    
//     let nftUrl = `https://api.shyft.to/sol/v1/nft/read_all?network=${network}&address=${wallID}`;
//     axios({
//       // Endpoint to send files
//       url: nftUrl,
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         "x-api-key": xKey,
//       },
//       // Attaching the form data
//     })
//       // Handle the response from backend here
//       .then((res) => {
//         console.log(res.data);
//         setDataFetched(res.data);
//         setLoaded(true);
//       })

//       // Catch errors if any
//       .catch((err) => {
//         console.warn(err);
//       });
//   };
//   return (
//     <div className="grd-back">
      
//       <div className="container-lg">
//         <div className="py-4 text-center">
//           <h1>List All Your NFTs</h1>
//           <p>
//             This is a sample project which will list all your NFTs associated
//             with your wallet
//           </p>
//         </div>
//       </div>
      
//       <div className="container-lg">
//       {!connStatus && (<div className="card border border-light rounded py-3 px-5 w-50 bg-dark text-light mx-auto">
//           <div className="card-body text-center">
//             <h2 className="card-title p-2">Connect Your Wallet</h2>
//             <p className="card-text p-1">You need to connect your wallet to deploy and interact with your contracts.</p>
//             <button className="btn btn-light rounded-pill mt-5 px-3" onClick={solanaConnect}>Connect Phantom Wallet</button>
//             {/* <select className="form-select" onChange={(e) => {
//               console.log(e.target.value);
//               (e.target.value === 'mtmsk') ? mtmskConnect() : solanaConnect();
//             }}>
//               <option value="none">Connect</option>
//               <option value="phntm">Phantom</option>
//             </select> */}
//           </div>
//         </div>)}
//         {connStatus && (<div className="w-50 border border-light rounded-3 mx-auto bg-dark">
//           <div className="form-container p-3">
//             <form>
//               <div className="row d-flex justify-content-center">
                
//                 <div className="col-12 p-2">
//                   <select
//                     name="network"
//                     className="form-control form-select"
//                     id=""
//                     onChange={(e) => setNetwork(e.target.value)}
//                   >
//                     <option value="devnet">Devnet</option>
//                     <option value="testnet">Testnet</option>
//                     <option value="mainnet-beta">Mainnet Beta</option>
//                   </select>
//                 </div>
//                 <div className="col-12 p-2">
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Enter Wallet Id"
//                     value={wallID}
//                   />
//                 </div>
                
//               </div>
//               <div className="text-center p-3">
//                 <button
//                   className="button-24"
//                   onClick={fetchNFTs}
//                 >
//                   Get
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>)}
//       </div>

//       <div className="container-lg">
//         <div className="cards-section py-4">
//           <div className="row">
//             {isLoaded &&
//               dataFetched.result.map((item) => (
//                 <div className="col-xs-12 col-sm-3 p-3" key={item.mint}>
//                   <div className="card nft-card bg-dark">
//                     <div className="card-body">
//                       <a href={`/get-details?token_address=${item.mint}&network=${network}`} target="_blank" rel="noreferrer">
//                         <img className="card-image img-fluid" src={item.image_uri} alt="img" />
//                       </a>
//                       <a href={`/get-details?token_address=${item.mint}&network=${network}`} target="_blank" rel="noreferrer">
//                         <h5>{item.name}</h5>
//                       </a>
                      
//                     </div>
//                   </div>
//                 </div>
//               ))}
            
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ListAll;


// =========================================================


// import { Metaplex, keypairIdentity } from "@metaplex-foundation/js";
// import { Connection, clusterApiUrl, Keypair, PublicKey } from "@solana/web3.js";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import React, { useCallback } from "react";
import { walletAdapterIdentity } from '@metaplex-foundation/js';
import { createContext, useContext } from 'react';
import { TextInput } from "react-native-gesture-handler";



//gpt snippet


// export const HomeScreen: FC = () => {
//   const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
//   const keypair = Keypair.fromSecretKey(
//     Uint8Array.from([76,136,189,77,118,217,252,31,90,170,9,127,109,163,161,210,167,247,16,201,199,166,211,239,158,170,35,184,84,215,133,141,245,87,98,122,163,187,139,227,236,74,116,161,179,154,157,101,62,146,104,163,216,106,241,247,6,197,163,221,57,96,207,22])
//   );
//   const metaplex = new Metaplex(connection);
//   metaplex.use(keypairIdentity(keypair));
//   const owner = new PublicKey("HWiApthq473nmMRhkuQGWQhMztvR5oZnXazWWn2Hoksf");
  
//   const [nft, setNft] = useState<any[]>([]);
  
//   const fetchAllNFTs = async () => {
//     const dataArray: any = await metaplex.nfts().findAllByOwner({ owner });
    
//     console.log('Find all nfts object ByOwner in an array fetchAllNfts func', dataArray);
//     let loadedNfts: any[] = [];

//     for(let i = 0; i < dataArray.length; i++) {
//       const loadnft = await metaplex.nfts().load({ metadata: dataArray[i] });
//       console.log("Each nft obj loaded", loadnft);
//       loadedNfts.push(loadnft);
//     };
//     console.log("Each object nft pushed in an array", loadedNfts);
//     setNft(loadedNfts);
//     console.log('setNft used and mapping occured in fetchAllNfts func');
//   };

//   return (
//     <View style={{ margin: "24px"}}>
//       <Text >If you want to see your NFTs please Click on</Text>
//       <Button style={{ width: "75%" }} onClick={fetchAllNFTs}>My NFTs</Button>
//       {nft.map((nft: any) => (
//         <View key={nft.pubkey.toString()}>
//           <Text> {nft.json.name} </Text>
//           <Text> {nft.json.model} </Text>
//           <Image
//             style={{
//               borderRadius: "6px",
//               width: "157.5px",
//               height: "157.5px",
//             }}
//             src={{ uri: nft.json.image.uri }}
//           />
//         </View>
//       ))}
//     </View>
//   );
// };

// export default HomeScreen;









// ==========================================================================================


//  my snippet code


export const HomeScreen: FC = () => {
  // const { connection } = useConnection();
  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
  // const keypair = window.xnft.solana.publicKey;
  // const wallet = useWallet();
  const bh =  window.backpack.connection.getLatestBlockhash();
  console.log("step1: got latest blockhash ", bh);
  const keypair = Keypair.fromSecretKey(
    Uint8Array.from([76,136,189,77,118,217,252,31,90,170,9,127,109,163,161,210,167,247,16,201,199,166,211,239,158,170,35,184,84,215,133,141,245,87,98,122,163,187,139,227,236,74,116,161,179,154,157,101,62,146,104,163,216,106,241,247,6,197,163,221,57,96,207,22]));

  
  // const { metaplex } = useMetaplex();

  
  const metaplex = new Metaplex(connection);
  metaplex.use(keypairIdentity(keypair));
  console.log("step2 keypair has set up ");
  // const owner = window.xnft.solana.publicKey;
  const owner = new PublicKey("HWiApthq473nmMRhkuQGWQhMztvR5oZnXazWWn2Hoksf");

      
  console.log("step3: before invoke fetchAllNFTs");

  const [ nft , setNft] = useState<any[]>([]);
  
  const fetchAllNFTs = async () => {
    const dataArray:any = await metaplex.nfts().findAllByOwner({owner});
    
    console.log('find All nfts object ByOwner in an array fetchAllNfts func', dataArray);
    let loadedNfts: any[] = [];

    for(let i = 0; i < dataArray.length; i++) {
      const loadnft = await metaplex.nfts().load({ metadata: dataArray[i] });
      console.log("each nft obj loaded", loadnft);
      loadedNfts.push(loadnft);
    };
    console.log("each object nft pushed in an array", loadedNfts);
    
    const imageUrl = "https://reactnative.dev/img/tiny_logo.png";
    setNft(loadedNfts.map((nft: any) => {
      return (
      <>
        <Text> {nft.json.name} </Text>
        <Image src={"https://reactnative.dev/img/tiny_logo.png"}> </Image>

        {/* <Image src={'https://reactnative.dev/img/tiny_logo.png'} /> */}

        {/* <Image
          style={{width: '100%', height: '50%'}}
          source={{uri:'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg'}}
      /> */}

      <Image src="https://reactnative.dev/img/tiny_logo.png" ></Image>

      <Image src={"https://reactnative.dev/img/tiny_logo.png"} ></Image>

      <Image src={imageUrl} ></Image>

      {/* <Image
          source={require("../../assets/icon.png")}
          style={{ width: 50, height: 50 }}
        /> */}

      <Image
        src={imageUrl}
        style={{
        borderRadius: "6px",
        width: "157.5px",
        }}
        />
      </>
      )
    }));
    console.log('setNft used and mapping occured in fetchAllNfts func');
  };

  const imageUrl = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Fbutterfly&psig=AOvVaw3O5GsCaJpU1QzSKJpU6sju&ust=1683472889253000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOjJmrL_4P4CFQAAAAAdAAAAABAE";
  return (
    <View style={{ margin: "24px"}}>
      <Text >If you want to see your NFTs please Click on</Text>

      <Image
        src={imageUrl}
        style={{
        borderRadius: "0px",
        width: "40px",
        height: "40px"
        }}
      />

      {/* <Image
          source={require("../../assets/icon.png")}
          style={{ width: 50, height: 50 }}
        /> */}

      {/* <Image src="https://reactnative.dev/img/tiny_logo.png" ></Image> */}

      {/* <Image src={"https://reactnative.dev/img/tiny_logo.png"} ></Image> */}
      
      <Image src={imageUrl} ></Image>
      
      {/* <Image src={'https://reactnative.dev/img/tiny_logo.png'} /> */}

      {/* <Image source={{uri: imageUrl}} /> */}

      {/* <Image
          style={{width: '100%', height: '50%'}}
          source={{uri:'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg'}}
      /> */}

    <Button style={{ width: "75%" }} onClick={fetchAllNFTs}>My NFTs</Button>
    {nft[0]}
    {nft[1]}
    {nft[2]}
    {nft[3]}
    {nft[4]}
    {nft[5]}
    {nft[6]}
    {nft[7]}
    {nft[8]}
    {nft[9]}
    {nft[10]}

    {/* <Image src={""}> {'https://storage.googleapis.com/fractal-launchpad-public-assets/honeyland/passes/Platinum_Pass.gif'} </Image> */}
    {/* <Image src={"https://reactnative.dev/img/tiny_logo.png"}> </Image> */}
    <Image
        src={imageUrl}
        style={{
        borderRadius: "0px",
        width: "40px",
        height: "40px"
        }}
      />

    </View>
  );
};
export default HomeScreen;



// return (
//     <View style={{ margin: "24px"}}>
//       <Text>If you want to see your NFTs please Click on</Text>
//       <Button style={{ width: "75%" }} onClick={fetchAllNFTs}>My NFTs</Button>
//       {nft.map((item, index) => (
//         <View key={index}>
//           <Text>{item.json.name}</Text>
//           <Text>{item.json.model}</Text>
//           <Image
//             src={"https://storage.googleapis.com/fractal-launchpad-public-assets/honeyland/passes/Platinum_Pass.gif"}
//             style={{
//               borderRadius: "6px",
//               width: "157.5px",
//             }}
//           />
//         </View>
//       ))}
//     </View>
//   );





// export default HomeScreen;

// =========================================


// import { useState } from "react";
// import { Connection, Keypair, PublicKey } from "@solana/web3.js";
// import { Metaplex, keypairIdentity } from "@metaplex/js";
// import { Button, Text, View } from "react-native";

// const HomeScreen = () => {
//   const [allNFTs, setAllNFTs] = useState([]);
//   const connection = new Connection("https://devnet.solana.com", "confirmed");
//   const keypair = Keypair.fromSecretKey(Uint8Array.from([my-secret]));

//   const metaplex = new Metaplex(connection);
//   metaplex.use(keypairIdentity(keypair));

//   const owner = new PublicKey("HWiApthq473nmMRhkuQGWQhMztvR5oZnXazWWn2Hoksf");

//   const fetchAllNFTs = async () => {
//     const data = await metaplex.nfts().findAllByOwner({ owner });
//     setAllNFTs(data);
//   };




// =========================================



// import type { FC } from "react";
// import React, { useCallback } from "react";
// import {
//   createTransferCheckedInstruction,
//   getAssociatedTokenAddress,
// } from "@solana/spl-token";
// import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
// import { useConnection, useWallet } from "@solana/wallet-adapter-react";
// import {
//   Keypair,
//   PublicKey,
//   SystemProgram,
//   Transaction,
// } from "@solana/web3.js";

// const USDC_MINT = new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v");

// export const SendAllButton: FC = () => {
//   const { connection } = useConnection();
//   const wallet = useWallet();
//   const onClick = useCallback(async () => {
//     if (!wallet.publicKey) throw new WalletNotConnectedError();
//     //
//     // Test the pass through connection works.
//     //
//     // @ts-ignore
//     const bh = await window.backpack.connection.getLatestBlockhash();
//     console.log("got latest blockhash", bh);

//     const toAccount = "AqP1ABfSsRUBcgY3bwiDRB4kiBxgESUqCdcdDLMVSrWS";
//     const fromTokenAccount = await getAssociatedTokenAddress(
//       USDC_MINT,
//       new PublicKey(wallet.publicKey)
//     );
//     const toTokenAccount = await getAssociatedTokenAddress(
//       USDC_MINT,
//       new PublicKey(toAccount)
//     );

//     const transaction1 = new Transaction().add(
//       SystemProgram.transfer({
//         fromPubkey: wallet.publicKey,
//         toPubkey: Keypair.generate().publicKey,
//         lamports: 1000000,
//       })
//     );
//     const transaction2 = new Transaction().add(
//       SystemProgram.transfer({
//         fromPubkey: wallet.publicKey,
//         toPubkey: Keypair.generate().publicKey,
//         lamports: 2000000,
//       })
//     );
//     const transaction3 = new Transaction().add(
//       createTransferCheckedInstruction(
//         fromTokenAccount,
//         USDC_MINT,
//         toTokenAccount,
//         wallet.publicKey,
//         1,
//         6
//       )
//     );

//     console.log("sending transactions", transaction1, transaction2);

//     // @ts-ignore
//     const { blockhash } = await window.backpack.connection.getLatestBlockhash();
//     transaction1.recentBlockhash = blockhash;
//     transaction2.recentBlockhash = blockhash;
//     transaction3.recentBlockhash = blockhash;
//     transaction1.feePayer = wallet.publicKey;
//     transaction2.feePayer = wallet.publicKey;
//     transaction3.feePayer = wallet.publicKey;

//     const signedTxs = await wallet.signAllTransactions([
//       transaction1,
//       transaction2,
//       transaction3,
//     ]);

//     console.log("signed", signedTxs);
//     /*
//     await connection.confirmTransaction(
//       {
//         signature,
//         blockhash,
//         lastValidBlockHeight,
//       },
//       "processed"
//     );
//     */
//   }, [wallet.publicKey, wallet.sendTransaction, connection]);

//   return (
//     <button onClick={onClick} disabled={!wallet.publicKey}>
//       Send multiple transactions
//     </button>
//   );
// };
// ===================================================



// import { walletAdapterIdentity } from '@metaplex-foundation/js';
// // import { MetaplexContext } from './useMetaplex';
// // import { useConnection, useWallet } from '@solana/wallet-adapter-react';
// // import { useMemo } from 'react';


// import { createContext, useContext } from 'react';

// const DEFAULT_CONTEXT = {
//   metaplex: null,
// };

// const MetaplexContext = createContext(DEFAULT_CONTEXT);

// function useMetaplex() {
//   return useContext(MetaplexContext);
// }


// export const MetaplexProvider = ({ children:any }) => {
//   const { connection } = useConnection();
//   const wallet = useWallet();

//   const metaplex = useMemo(
//     () => Metaplex.make(connection).use(walletAdapterIdentity(wallet)),
//     [connection, wallet]
//   );

//   return (
//     <MetaplexContext.Provider value={{ metaplex }}>
//       {children}
//     </MetaplexContext.Provider>
//   )
// }

// ============================================================


// gpt2 snippet



// export const HomeScreen: FC = () => {
//   const [nft, setNft] = useState<any[]>([]);

//   const fetchAllNFTs = async () => {
//     const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
//     const keypair = Keypair.fromSecretKey(Uint8Array.from([76, 136, 189, 77, 118, 217, 252, 31, 90, 170, 9, 127, 109, 163, 161, 210, 167, 247, 16, 201, 199, 166, 211, 239, 158, 170, 35, 184, 84, 215, 133, 141, 245, 87, 98, 122, 163, 187, 139, 227, 236, 74, 116, 161, 179, 154, 157, 101, 62, 146, 104, 163, 216, 106, 241, 247, 6, 197, 163, 221, 57, 96, 207, 22]));
//     const metaplex = new Metaplex(connection);
//     metaplex.use(keypairIdentity(keypair));

//     const owner = new PublicKey(
//       "HWiApthq473nmMRhkuQGWQhMztvR5oZnXazWWn2Hoksf"
//     );

//     const dataArray: any = await metaplex.nfts().findAllByOwner({ owner });

//     const loadedNfts: any[] = [];

//     for (let i = 0; i < dataArray.length; i++) {
//       const loadnft = await metaplex.nfts().load({ metadata: dataArray[i] });
//       loadedNfts.push(loadnft);
//     }

//     setNft(loadedNfts);
//   };

//   useEffect(() => {
//     fetchAllNFTs();
//   }, []);

//   return (
//     <View style={{ margin: 24 }}>
//       <Text>If you want to see your NFTs please Click on</Text>
//       <Button style={{ width: "75%" }} onClick={fetchAllNFTs}>
//         My NFTs
//       </Button>
//       {nft.map((nftItem: any, index: number) => (
//         <View key={index}>
//           <Text>{nftItem.json.name}</Text>
//           <ImageBackground
//             source={{ uri: nftItem.json.animation_url }}
//             style={{
//               borderRadius: 6,
//               width: 157.5,
//               height: 157.5,
//             }}
//           />
//         </View>
//       ))}
//     </View>
//   );
// };

// export default HomeScreen;








// ===================================================================
// const endpoint = web3.clusterApiUrl('devnet')
// const wallets = [new walletAdapterWallets.PhantomWalletAdapter()]

// // export const Home: NextPage = (props) => {
// //   const endpoint = web3.clusterApiUrl('devnet')
// //   const wallet = new PhantomWalletAdapter()

// //   return (
// //       <ConnectionProvider endpoint={endpoint}>
// //           <WalletProvider wallets={[wallet]}>
// //               <p>Put the rest of your app here</p>
// //           </WalletProvider>
// //       </ConnectionProvider>
// //   )
// // }




// const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

// ReactXnft.events.on("connect", () => {
  
// });





// export function HomeScreen() {
//   const publicKey = usePublicKey()
//   const toPubkey = new PublicKey("3VHwVfYVibgWasVAAGX71DwTMnj3Zxn6ATir3ohsCGqP")
//   const lamportsToSend = 1_000_000;

//   const onClick = async () => {

//     const tx = new Transaction().add(
//       SystemProgram.transfer({
//         fromPubkey: publicKey,
//         toPubkey: toPubkey,
//         lamports:lamportsToSend,
//       })
//     );
//     await sendAndConfirmTransaction(connection, tx, [
//       // publicKey,
//     ]);
//     console.log(sendAndConfirmTransaction);

//   window.xnft.solana.signTransaction(

//   )
// };
  
// return (
//   <View>
//     <Text >Hi Blockchain Guyes.</Text>
//     <Button onClick={onClick}>Sign your Message</Button>
//   </View>
//   );
// }
