import { Card } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import { FlexCol, FlexRow } from './Elements'
import Bar from '../Assets/Images/Bar.png'
import { useContractRead } from 'wagmi'
import PaymentABI from '../../ABI/payment.json'
import moment from 'moment/moment'
import timestamp from 'unix-timestamp';


const CountDownCard = () => {
    // const [data, setData] = useState()
    // const [error, setError] = useState()


    const { data, isError, error, isLoading } = useContractRead({
        address: '0xB329bDad74861Ef1692d5a56E96c9C1Bb30F2776',
        abi: PaymentABI,
        functionName: 'preSaleStartTime',
    }, [])
    // const preSaleTimer = () => {
    //     setData(data)
    //     setError(error)
    // }
    // useEffect(() => {
    //     preSaleTimer()
    // }, [])


    // const date = data ? new Date(data.toString().split('n').join('')) : ''
    // console.log("date", Date.now(), moment.(data));

    // console.log("🚀 ~ file: CountDownCard.jsx:16 ~ CountDownCard ~ data:",
    //     date
    // data.toString().split('n').join(''),
    // data && moment(data.toString().split('n').join(''), "YYYYMMDD").fromNow()
    // )



    return (
        <>
            <Card className="w-11/12 max-w-3xl flex my-32 mx-auto bg-white/80 mb-48" id='pre_sale_card'>
                <h1 className='font-semibold font-inter text-4xl text-black mx-auto mt-8'>Per Sale Starts</h1>
                {isLoading ?
                    <div className="w-fit text-center mx-auto my-5 font-semibold font-inter text-xl">
                        Loading...
                    </div> :
                    isError ?
                        <h1 className='font-normal font-inter text-xl text-red-500 mx-auto mb-12 mt-3'>No records found.</h1>
                        :
                        <>
                            <h1 className='font-normal font-inter text-xl text-black mx-auto mb-12'>
                                {data && moment(Number(data.toString().split('n').join()) * 1000).format("DD MMMM")}
                            </h1>
                            <FlexRow className="justify-between gap-5 text-center w-8/12 mx-auto flex-wrap items-center">
                                <FlexCol className={"mx-auto"}>
                                    <h1 className="text-5xl font-normal text-black bg-white px-5 py-1 mb-3 font-inter capitalize">
                                        {data && moment(Number(data.toString().split('n').join()) * 1000).fromNow("D").split(' ')[0]}
                                    </h1>
                                    <h1 className="text-base font-normal text-black capitalize">days</h1>
                                </FlexCol>

                                <FlexCol className={"mx-auto"}>
                                    <h1 className="text-5xl font-normal text-black bg-white px-5 py-1 mb-3 font-inter">
                                        {data && console.log(moment(Number(data.toString().split('n').join()) * 1000).fromNow("").split(' '))}
                                    </h1>
                                    <h1 className="text-base font-normal text-black capitalize">hours</h1>
                                </FlexCol>
                                <FlexCol className={"mx-auto"}>
                                    <h1 className="text-5xl font-normal text-black bg-white px-5 py-1 mb-3 font-inter">40</h1>
                                    <h1 className="text-base font-normal text-black capitalize">Minutes</h1>
                                </FlexCol>
                                <FlexCol className={"mx-auto"}>
                                    <h1 className="text-5xl font-normal text-black bg-white px-5 py-1 mb-3 font-inter">40</h1>
                                    <h1 className="text-base font-normal text-black capitalize">Secondss</h1>
                                </FlexCol>
                            </FlexRow>
                        </>
                }
                <FlexRow className={'mx-auto mt-12 mb-16'}>
                    <img src={Bar} />
                </FlexRow>
            </Card >
        </>
    )
}

export default CountDownCard