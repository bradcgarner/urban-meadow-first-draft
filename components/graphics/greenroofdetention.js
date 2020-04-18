import { green } from "../../helpers/common-styles";

export default function GRDetLogo(props) {

  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1800 190">
    <defs>
      <linearGradient id='water' x1='1500' y1='0' x2='1500' y2='0' gradientUnits='userSpaceOnUse'>
        <stop offset='0'  stopColor='white'/>
        <stop offset='1'  stopColor='white'/>
        <stop offset='2'  stopColor='white'/>
        <stop offset='3'  stopColor='white'/>
        <stop offset='4'  stopColor='white'/>
        <stop offset='5'  stopColor='#4c4cff'/>
        <stop offset='6'  stopColor='#4c4cff'/>
        <stop offset='7'  stopColor='#4c4cff'/>
        <stop offset='8'  stopColor='#4c4cff'/>
        <stop offset='9'  stopColor='#4c4cff'/>
        <stop offset='10' stopColor='#4c4cff'/>
        <animate id='y2-start' attributeName='y2' begin='0s; y2-end.end' dur='5000ms' from='0' to='400' fill='freeze' repeatCount='indefinite' />
        <animate id='y2-end'   attributeName='y2' begin='y2-start.end'   dur='5000ms' from='400' to='0' fill='freeze' repeatCount='indefinite' />
      </linearGradient>
    </defs>
    <title>greenroofdetention</title>
    <polygon className='logo-detention' points='1769 150.01 1743.54 150.01 1704.66 90.3 1704.66 150.01 1677.83 150.01 1677.83 37.94 1703.15 37.94 1742.04 97.56 1742.04 37.94 1769 37.94 1769 150.01'/>
    <path className='logo-detention' d='M1618.16,151.32c-16.47,0-29.51-5.28-38.76-15.69-9-10.12-13.56-24.22-13.56-41.92s4.58-31.6,13.61-41.68c9.27-10.35,22.34-15.6,38.84-15.6,16.13,0,29,5.34,38.34,15.86,9.06,10.23,13.65,24.21,13.65,41.55s-4.6,31.27-13.67,41.55C1647.27,146,1634.33,151.32,1618.16,151.32Zm.13-88.38c-8,0-13.85,2.29-17.74,7-4.23,5.13-6.37,13.17-6.37,23.89,0,10.9,2.14,19,6.37,24.16,3.89,4.71,9.65,7,17.61,7s13.75-2.27,17.53-6.93c4.15-5.12,6.25-13.27,6.25-24.24s-2.09-18.91-6.22-24C1632,65.19,1626.26,62.94,1618.29,62.94Z'/>
    <rect className='logo-detention' x='1528.92' y='37.94' width='27.68' height='112.07'/>
    <polygon className='logo-detention' points='1490.73 150.01 1463.05 150.01 1463.05 64.38 1432.8 64.38 1432.8 37.94 1520.97 37.94 1520.97 64.38 1490.73 64.38 1490.73 150.01'/>
    <polygon className='logo-detention' points='1424.98 150.01 1399.53 150.01 1360.64 90.3 1360.64 150.01 1333.81 150.01 1333.81 37.94 1359.13 37.94 1398.02 97.56 1398.02 37.94 1424.98 37.94 1424.98 150.01'/>
    <polygon className='logo-detention' points='1319.46 150.01 1249.64 150.01 1249.64 37.94 1319.46 37.94 1319.46 64.38 1277.33 64.38 1277.33 78.56 1316.91 78.56 1316.91 104.94 1277.33 104.94 1277.33 123.5 1319.46 123.5 1319.46 150.01'/>
    <polygon className='logo-detention' points='1211.45 150.01 1183.76 150.01 1183.76 64.38 1153.52 64.38 1153.52 37.94 1241.69 37.94 1241.69 64.38 1211.45 64.38 1211.45 150.01'/>
    <polygon className='logo-detention' points='1145.66 150.01 1075.85 150.01 1075.85 37.94 1145.66 37.94 1145.66 64.38 1103.53 64.38 1103.53 78.56 1143.11 78.56 1143.11 104.94 1103.53 104.94 1103.53 123.5 1145.66 123.5 1145.66 150.01'/>
    <path className='logo-detention' d='M1007.58,150H972.84V37.94h37.55c17.06,0,30.68,5,40.49,14.77s14.77,23.38,14.77,40.35c0,18-5.16,32.17-15.34,42.09S1025.82,150,1007.58,150Zm-7.06-26.18h5.24c10.93,0,19-2.49,24-7.4s7.5-12.59,7.5-23c0-10.13-2.35-17.64-7-22.32s-12-7-22-7h-7.85Z'/>
    <polygon className='logo-roof' points='918.92 150.01 891.24 150.01 891.24 37.94 961.05 37.94 961.05 64.38 918.92 64.38 918.92 82.75 958.51 82.75 958.51 109.19 918.92 109.19 918.92 150.01'/>
    <path className='logo-roof' d='M828.9,151.32c-16.47,0-29.51-5.28-38.76-15.69-9-10.12-13.56-24.22-13.56-41.92s4.58-31.6,13.61-41.68c9.27-10.35,22.33-15.6,38.84-15.6,16.13,0,29,5.34,38.34,15.86C876.42,62.52,881,76.5,881,93.84s-4.6,31.27-13.67,41.55C858,146,845.07,151.32,828.9,151.32ZM829,62.94c-8,0-13.86,2.29-17.74,7-4.23,5.13-6.37,13.17-6.37,23.89,0,10.9,2.14,19,6.37,24.16,3.88,4.71,9.64,7,17.61,7s13.75-2.27,17.53-6.93c4.15-5.12,6.25-13.27,6.25-24.24s-2.09-18.91-6.22-24C842.7,65.19,837,62.94,829,62.94Z'/>
    <path className='logo-roof' d='M715.4,151.32c-16.47,0-29.51-5.28-38.76-15.69-9-10.12-13.56-24.22-13.56-41.92S667.66,62.11,676.7,52C686,41.68,699,36.43,715.53,36.43c16.13,0,29,5.34,38.34,15.86,9.06,10.23,13.65,24.21,13.65,41.55s-4.6,31.27-13.67,41.55C744.51,146,731.57,151.32,715.4,151.32Zm.13-88.38c-8,0-13.85,2.29-17.74,7-4.23,5.13-6.37,13.17-6.37,23.89,0,10.9,2.14,19,6.37,24.16,3.89,4.71,9.65,7,17.61,7s13.75-2.27,17.53-6.93c4.15-5.12,6.25-13.27,6.25-24.24s-2.09-18.91-6.22-24C729.21,65.19,723.5,62.94,715.53,62.94Z'/>
    <path className='logo-roof' d='M665.8,150H633.21L610.09,110.3h-6.87V150H575.54V37.94H610c13.78,0,24,2.79,31.15,8.54,7.63,6.12,11.49,15.11,11.49,26.72,0,12.87-5.37,22.8-15.65,29.17ZM603.22,84.18h6.93c7.57,0,10.69-1.69,11.87-2.69.64-.54,2.57-2.19,2.57-7.7,0-3.53-.76-5.89-2.26-7-1.26-.94-4.62-2.52-13-2.52h-6.14Z'/>
    <polygon className='logo-green' points='557.69 150.01 532.23 150.01 493.35 90.3 493.35 150.01 466.51 150.01 466.51 37.94 491.83 37.94 530.72 97.56 530.72 37.94 557.69 37.94 557.69 150.01'/>
    <polygon className='logo-green' points='367.99 150.01 298.18 150.01 298.18 37.94 367.99 37.94 367.99 64.38 325.86 64.38 325.86 78.56 365.45 78.56 365.45 104.94 325.86 104.94 325.86 123.5 367.99 123.5 367.99 150.01'/>
    <polygon className='logo-green' points='452.16 150.01 382.35 150.01 382.35 37.94 452.16 37.94 452.16 64.38 410.03 64.38 410.03 78.56 449.61 78.56 449.61 104.94 410.03 104.94 410.03 123.5 452.16 123.5 452.16 150.01'/>
    <path className='logo-green' d='M295.35,150H262.76L239.64,110.3h-6.87V150H205.09V37.94h34.48c13.78,0,24,2.79,31.15,8.54,7.63,6.12,11.5,15.11,11.5,26.72,0,12.87-5.38,22.8-15.66,29.17ZM232.77,84.18h6.93c7.58,0,10.69-1.69,11.87-2.69.64-.54,2.57-2.19,2.57-7.7,0-3.53-.76-5.89-2.26-7-1.26-.94-4.62-2.52-13-2.52h-6.15Z'/>
    <path className='logo-green' d='M147.14,151.32c-16.77,0-30.17-5.23-39.82-15.53C97.82,125.65,93,111.58,93,94c0-11.25,2.34-21.35,7-30a48.73,48.73,0,0,1,20.67-20.55c8.66-4.56,18.81-6.86,30.18-6.86a80.63,80.63,0,0,1,31.73,6.27l7.72,3.29-11,25-7.53-3.2a55.76,55.76,0,0,0-21.65-4.83c-9.33,0-16.26,2.55-21.21,7.79S121.34,83.79,121.34,94c0,10.65,2.41,18.6,7.17,23.64s11.8,7.4,21.7,7.4a75.88,75.88,0,0,0,11.11-.82V109.91H140V83.4h49v60.79L183.24,146A113,113,0,0,1,166.6,150,125.15,125.15,0,0,1,147.14,151.32Z'/>

    <style jsx>{`
      .logo-detention {
        fill: url(#water);
        stroke: #4c4cff;
        stroke-width: 3px;
      }
      .logo-roof {
        fill: #4c414c;
        stroke: #4c414c;
        stroke-width: 3px;
      }
      .logo-green {
        fill: ${green};
        stroke: ${green};
        stroke-width: 3px;
      }
  `}</style>
  </svg>
};