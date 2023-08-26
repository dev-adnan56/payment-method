import React from 'react'
import { FlexRow } from './Elements'

const SocialBar = () => {
    const social = [
        // Facebook
        {
            icon:
                <>
                    <svg width={54} height={54} viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_197_152)">
                            <path d="M54 27C54 12.0883 41.9117 0 27 0C12.0883 0 0 12.0883 0 27C0 40.4763 9.87346 51.6465 22.7812 53.672V34.8047H15.9258V27H22.7812V21.0516C22.7812 14.2847 26.8123 10.5469 32.9796 10.5469C35.9327 10.5469 39.0234 11.0742 39.0234 11.0742V17.7188H35.6189C32.265 17.7188 31.2188 19.8002 31.2188 21.9375V27H38.707L37.51 34.8047H31.2188V53.672C44.1265 51.6465 54 40.4763 54 27Z" fill="#1877F2" />
                            <path d="M37.51 34.8047L38.707 27H31.2188V21.9375C31.2188 19.8023 32.265 17.7188 35.6189 17.7188H39.0234V11.0742C39.0234 11.0742 35.9337 10.5469 32.9796 10.5469C26.8123 10.5469 22.7812 14.2847 22.7812 21.0516V27H15.9258V34.8047H22.7812V53.672C25.5767 54.1093 28.4233 54.1093 31.2188 53.672V34.8047H37.51Z" fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_197_152">
                                <rect width={54} height={54} fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </>,
            link: ""
        },

        // X
        {
            icon:
                <>
                    <svg width={54} height={54} viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M41.2342 4.28381H48.8245L32.2419 23.2367L51.75 49.0272H36.4753L24.5116 33.3854L10.8224 49.0272H3.22747L20.9642 28.755L2.25 4.28381H17.9125L28.7266 18.5811L41.2342 4.28381ZM38.5702 44.4841H42.7761L15.6271 8.58836H11.1138L38.5702 44.4841Z" fill="black" />
                    </svg>
                </>,
            link: "https://twitter.com/BabyCongOfficia"
        },

        // LinkedIn
        {
            icon: <>
                <svg width={54} height={54} viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_197_148)">
                        <path d="M50.0137 0H3.98625C2.92903 0 1.91511 0.419979 1.16755 1.16755C0.419979 1.91511 0 2.92903 0 3.98625V50.0137C0 51.071 0.419979 52.0849 1.16755 52.8325C1.91511 53.58 2.92903 54 3.98625 54H50.0137C51.071 54 52.0849 53.58 52.8325 52.8325C53.58 52.0849 54 51.071 54 50.0137V3.98625C54 2.92903 53.58 1.91511 52.8325 1.16755C52.0849 0.419979 51.071 0 50.0137 0ZM16.095 46.0013H7.97625V20.2125H16.095V46.0013ZM12.03 16.6388C11.1091 16.6336 10.2103 16.3557 9.44715 15.8402C8.68399 15.3247 8.09064 14.5947 7.74197 13.7423C7.39331 12.8899 7.30496 11.9533 7.48807 11.0508C7.67118 10.1482 8.11755 9.32012 8.77085 8.67101C9.42414 8.02189 10.2551 7.58085 11.1588 7.40354C12.0625 7.22622 12.9985 7.32059 13.8486 7.67472C14.6988 8.02885 15.425 8.62688 15.9355 9.39333C16.4461 10.1598 16.7182 11.0603 16.7175 11.9813C16.7262 12.5978 16.6107 13.2098 16.3778 13.7808C16.1449 14.3518 15.7995 14.87 15.362 15.3047C14.9246 15.7393 14.4042 16.0814 13.8317 16.3106C13.2592 16.5398 12.6465 16.6514 12.03 16.6388ZM46.02 46.0238H37.905V31.935C37.905 27.78 36.1388 26.4975 33.8588 26.4975C31.4513 26.4975 29.0887 28.3125 29.0887 32.04V46.0238H20.97V20.2313H28.7775V23.805H28.8825C29.6663 22.2188 32.4113 19.5075 36.6 19.5075C41.13 19.5075 46.0238 22.1963 46.0238 30.0713L46.02 46.0238Z" fill="#0A66C2" />
                    </g>
                    <defs>
                        <clipPath id="clip0_197_148">
                            <rect width={54} height={54} fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </>,
            link: ''
        },

        //  Google
        {
            icon:
                <>
                    <svg width={54} height={54} viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.9995 22.0908V32.5472H41.5304C40.8923 35.9099 38.9775 38.7573 36.1058 40.6718L44.8684 47.471C49.9739 42.7584 52.9194 35.8365 52.9194 27.6138C52.9194 25.6993 52.7476 23.8582 52.4284 22.0911L26.9995 22.0908Z" fill="#4285F4" />
                        <path d="M11.8681 32.139L9.89181 33.6519L2.89624 39.1009C7.33896 47.9126 16.4446 54 26.9991 54C34.2889 54 40.4007 51.5945 44.868 47.471L36.1054 40.6718C33.6999 42.2918 30.6317 43.2738 26.9991 43.2738C19.9791 43.2738 14.0148 38.5365 11.8792 32.1546L11.8681 32.139Z" fill="#34A853" />
                        <path d="M2.89615 14.899C1.05534 18.5316 0 22.6308 0 26.9998C0 31.3688 1.05534 35.468 2.89615 39.1005C2.89615 39.1249 11.8799 32.1296 11.8799 32.1296C11.3399 30.5096 11.0208 28.7916 11.0208 26.9995C11.0208 25.2075 11.3399 23.4894 11.8799 21.8694L2.89615 14.899Z" fill="#FBBC05" />
                        <path d="M26.9997 10.7509C30.9761 10.7509 34.5106 12.1254 37.3333 14.7764L45.065 7.04464C40.3768 2.67562 34.2898 0 26.9997 0C16.4452 0 7.33896 6.06272 2.89624 14.8991L11.8798 21.87C14.0151 15.4881 19.9797 10.7509 26.9997 10.7509Z" fill="#EA4335" />
                    </svg>
                </>,
            link: ""
        }

    ]
    return (
        <div>
            <FlexRow className={"bg-white w-full justify-between py-10 my-10 md:my-0"}>
                <FlexRow className={"w-[95%] max-w-3xl justify-between flex-wrap mx-auto"}>
                    {social.map(itm => {
                        return (
                            <>
                                <a href={itm?.link ? itm?.link : "#"} target='_blank'>
                                    {itm.icon}
                                </a>
                            </>
                        )
                    })}
                </FlexRow>
            </FlexRow>

        </div>
    )
}

export default SocialBar