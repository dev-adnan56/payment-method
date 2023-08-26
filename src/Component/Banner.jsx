import React, { useEffect, useState } from 'react'
import { ConnectWalletBtn, FlexCol, FlexRow, GradientButton } from './Elements'
import { useDebounce } from 'use-debounce'
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import {
    useAccount,
    useConnect,
    useContractRead,
    useContractReads,
    useNetwork,
    usePrepareSendTransaction,
    useSendTransaction,
    useWaitForTransaction,
} from 'wagmi'

import { ethers } from 'ethers';
// import { parseEther } from 'viem'
import PAYMENT from '../../ABI/payment.json'
import { PaymentCard } from './PaymentCard';
import SwapingCard from './SwapingCard';
import { paymentAddress } from '../Assets/data/valure';
import PaymentABI from '../../ABI/payment.json'



const Banner = () => {
    const [userBounce, setUserBounce] = useState({
        0: "",
        1: "",
        2: "",
        3: "",
        4: "",
    })

    const tabsData = [
        {
            label: "Buy",
            value: "swap",
            desc: <PaymentCard
                userBounce={userBounce}
                setUserBounce={setUserBounce}
            />
        },
        {
            label: "Claim Tokens",
            value: "claim",
            desc: <SwapingCard
                userBounce={userBounce}
                setUserBounce={setUserBounce}
            />
        },
    ]
    // const provider = new ethers.providers.Web3Provider(window.ethereum);


    // // get end user's account

    // const signer = provider.getSigner()

    // const contract = new ethers.Contract(PAYMENT_CONTRACT_ADDRESS, signer);



    // const { data, isError, error, isLoading } = useContractRead({
    //     address: "0x4e37ADeEDc0480b3f3687Dc50FAa58504d17C643",
    //     abi: PAYMENT,
    //     functionName: 'EthToToken',
    //     args: [(amount * 1e18).toString()]
    // })

    // console.log("🚀 ~ file: Banner.jsx:32 ~ Banner ~ data:", data,)
    // console.log("🚀 ~ file: Banner.jsx:32 ~ Banner ~ isError:", isError, error)
    // console.log("🚀 ~ file: Banner.jsx:32 ~ Banner ~ isLoading:", isLoading)


    const { activeConnector, isConnected, connector } = useAccount()
    const { chain, chains } = useNetwork()


    const [tokenSold, setTokenSold] = useState(0)
    const [supply, setSupply] = useState(0)
    // const [to, setTo] = React.useState('')
    // const [amount, setAmount] = React.useState('')

    // console.log("🚀 ~ file: Banner.jsx:18 ~ Banner ~ debouncedTo:", (Number(amount) * 1e18).toString())
    // const { config } = usePrepareSendTransaction({
    //     to: address,
    //     value: (Number(amount) * 1e18).toString(),
    //     // value: ethers.utils.parseEther('0.1'),

    // })
    const preSaleContract = {
        address: paymentAddress,
        abi: PaymentABI,
    }

    const { data, isError, isLoading } = useContractReads({
        contracts: [
            {
                ...preSaleContract,
                functionName: 'totalSupply',
            },
            {
                ...preSaleContract,
                functionName: 'soldToken',
            },

        ]
    })

    useEffect(() => {
        const obj = Object.assign({}, data)

        if (obj?.[0]?.status == "success") {
            setSupply(obj?.[0]?.result.toString())
        }
        if (obj?.[1]?.status == "success") {
            setTokenSold(obj?.[1]?.result)
        }
    }, [data])

    // const { sendTransaction } = useSendTransaction({
    //     request: {
    //         to: to,
    //         value: (Number(amount) * 1e18).toString()
    //     },
    //     onSuccess: () => console.log("Send transaction"),
    //     onError: (err) => console.log("Error sending transaction", err)

    // })

    // const { isLoading, isSuccess } = useWaitForTransaction({
    //     hash: data?.hash,
    // })

    // console.log("🚀 ~ file: Banner.jsx:7 ~ Banner ~ isConnected:", useAccount())

    return (
        <FlexCol className={'w-11/12 max-w-[1480px] mx-auto flex-wrap gap-3 justify-between my-[7rem] xl:flex-row'}>
            <FlexCol className={'w-full xl:w-[47%]'}>
                <h1 className='font-inter font-black text-[3.75rem] text-white'>
                    Buy and sell with the lowest fees in the industry
                </h1>
                <p className='font-inter font-normal text-[1.25rem]  text-white/70 mt-[1rem]'>
                    Buy and sell with the lowest fees in the industry
                    Buy and sell with the lowest fees in the industry
                    Buy and sell with the lowest fees in the industry
                    Buy and sell with the lowest fees in the industry
                </p>

                <GradientButton className=' rounded-[20px] p-[2rem] cursor-default items-center justify-between gap-4 my-16'>
                    <FlexRow className={"justify-between w-full"}>
                        <div className='font-inter text-2xl py-3 px-2 text-center text-white font-semibold my-3'>
                            Token Sold:
                        </div>

                        <div className='font-inter text-2xl py-3 px-2 text-center text-white font-semibold my-3'>
                            {tokenSold ? ethers.formatEther(tokenSold).split('.')[0] : 0}
                        </div>
                    </FlexRow>
                    <FlexRow className={"justify-between w-full"}>
                        <div className='font-inter text-2xl py-3 px-2 text-center text-white font-semibold my-3'>
                            Total Supply:
                        </div>
                        <div className='font-inter text-2xl py-3 px-2 text-center text-white font-semibold my-3'>
                            {tokenSold ? ethers.formatEther(supply).split('.')[0] : 0}

                        </div>
                    </FlexRow>
                </GradientButton>

                {/* <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        sendTransaction()
                    }}
                > */}
                {/* <input
                    className='my-2 p-3'
                    aria-label="Recipient"
                    onChange={(e) => setTo(e.target.value)}
                    placeholder="0xA0Cf…251e"
                    value={to}
                /> */}
                {/* <input
                    className='my-2 p-3'
                    aria-label="Amount (ether)"
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.05"
                    value={amount}
                /> */}
                {/* <button
                    className='my-2 p-3 bg-blue-500 cursor-pointer'
                    onClick={sendTransaction}
                disabled={isLoading || !sendTransaction || !to || !amount}
                >
                    {isLoading ? 'Sending...' : 'Send'}
                </button> 
                 */}
                {/* {isSuccess && (
                    <div>
                        Successfully sent {amount} ether to {to}
                        <div>
                            <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
                        </div>
                    </div>
                )} */}
                {/* </form> */}

                {/* <div className="mt-[4rem]">
                    <ConnectWalletBtn className="text-[1.5rem] font-inter  w-fit px-[2.25rem] py-[1.5rem]" />
                </div> */}
            </FlexCol>


            <FlexCol className={'w-full xl:w-[47%] justify-center items-center my-4 md:my-8 xl:my-0'}>
                <Tabs value="swap" className="flex w-full flex-col mb-8">
                    <TabsHeader className="flex w-full">
                        {tabsData.map(({ label, value }) => (
                            <Tab key={value} value={value} className='font-inter text-xl font-semibold'>
                                {label}
                            </Tab>
                        ))}
                    </TabsHeader>
                    <TabsBody>
                        {tabsData.map(({ desc, value }) => (
                            <TabPanel key={value} value={value}>
                                <FlexCol className={'w-full justify-center items-center  my-4 md:my-8  xl:my-0'}>
                                    <FlexCol className={'w-full relative my-20'}>
                                        <FlexCol className={'w-full'}>
                                            <GradientButton
                                                className={"w-full h-[14.4rem] max-w-[660px] !rounded-[20px] mx-auto"}
                                            />
                                            <div className="border-2 border-[#5684fe]  w-full max-w-[660px] h-[19.75rem] mx-auto bg-[#5684fe]/10 backdrop-blur-xl mt-[10rem] !rounded-[20px]">
                                            </div>
                                        </FlexCol>
                                        {desc}

                                    </FlexCol>
                                </FlexCol>
                            </TabPanel>
                        ))}
                    </TabsBody>
                </Tabs >
            </FlexCol>
        </FlexCol>
    )
}

export default Banner