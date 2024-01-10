
export const JavaScriptIcon = ({ className,...rest }) => (
<svg className={className} {...rest} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237l.034.049zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635l.003-.042z" /></svg>
);

export const TypeScriptIcon = ({ className,...rest }) => (
  <svg className={className} {...rest} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19.24 3H4.76A1.76 1.76 0 0 0 3 4.76v14.48A1.76 1.76 0 0 0 4.76 21h14.48A1.76 1.76 0 0 0 21 19.24V4.76A1.76 1.76 0 0 0 19.24 3zm-5.8 10h-2.25v6.44H9.4V13H7.15v-1.46h6.29zm5.8 5.28a1.71 1.71 0 0 1-.67.74 3 3 0 0 1-1 .39 5.81 5.81 0 0 1-1.2.12 7 7 0 0 1-1.23-.11 4.52 4.52 0 0 1-1-.33v-1.71l-.06-.06h.06v.07a3.41 3.41 0 0 0 1 .54 3.06 3.06 0 0 0 1.13.2 2.58 2.58 0 0 0 .6-.06 1.47 1.47 0 0 0 .42-.17.75.75 0 0 0 .25-.25.69.69 0 0 0-.06-.74 1.24 1.24 0 0 0-.35-.33 3.12 3.12 0 0 0-.53-.3l-.67-.28a3.57 3.57 0 0 1-1.37-1 2 2 0 0 1-.46-1.33 2.16 2.16 0 0 1 .24-1.06 2.09 2.09 0 0 1 .66-.71 2.88 2.88 0 0 1 1-.42 5.11 5.11 0 0 1 1.19-.13 7 7 0 0 1 1.09.07 4.53 4.53 0 0 1 .88.23v1.65a2.42 2.42 0 0 0-.42-.24 3.58 3.58 0 0 0-.49-.17 3 3 0 0 0-.49-.1 2.45 2.45 0 0 0-.46 0 2.29 2.29 0 0 0-.56.06 1.54 1.54 0 0 0-.43.16.78.78 0 0 0-.26.25.63.63 0 0 0-.09.33.62.62 0 0 0 .1.35 1.19 1.19 0 0 0 .3.29 2.15 2.15 0 0 0 .46.28l.63.28a6.56 6.56 0 0 1 .84.42 2.65 2.65 0 0 1 .64.49 1.79 1.79 0 0 1 .42.63 2.48 2.48 0 0 1 .14.85 2.68 2.68 0 0 1-.25 1.08z" /></svg>
);

export const CopyIcon = ({ className, ...rest }) => (
  <svg className={className} {...rest} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z" /><path d="M6 12h6v2H6zm0 4h6v2H6z" /></svg>
);

export const CopiedIcon = ({ className, ...rest }) => (
 <svg className={className} {...rest} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z" /><path d="M20.13 5.41L18.72 4l-9.19 9.19-4.25-4.24-1.41 1.41 5.66 5.66zM5 18h14v2H5z" /></svg>
);

export const LinkArrowIcon = ({ className,...rest }) => {
  return (<svg className={className} {...rest} fill="currentColor" width="20" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" ><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>);
};

export const ResumeIcon = ({ className,...rest }) => {
  return (<svg className={className} {...rest} xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="24" fillRule="evenodd" clipRule="evenodd"><path d="M3 24h19v-23h-1v22h-18v1zm17-24h-18v22h18v-22zm-1 1h-16v20h16v-20zm-2 16h-12v1h12v-1zm0-3h-12v1h12v-1zm0-3h-12v1h12v-1zm-7.348-3.863l.948.3c-.145.529-.387.922-.725 1.178-.338.257-.767.385-1.287.385-.643 0-1.171-.22-1.585-.659-.414-.439-.621-1.04-.621-1.802 0-.806.208-1.432.624-1.878.416-.446.963-.669 1.642-.669.592 0 1.073.175 1.443.525.221.207.386.505.496.892l-.968.231c-.057-.251-.177-.449-.358-.594-.182-.146-.403-.218-.663-.218-.359 0-.65.129-.874.386-.223.258-.335.675-.335 1.252 0 .613.11 1.049.331 1.308.22.26.506.39.858.39.26 0 .484-.082.671-.248.187-.165.322-.425.403-.779zm3.023 1.78l-1.731-4.842h1.06l1.226 3.584 1.186-3.584h1.037l-1.734 4.842h-1.044z"/></svg>);
};

export const SunIcon = ({ className, ...rest }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    {...rest}
    className={className}
  >
    <rect x='0' y='0' width='24' height='24' fill='rgba(255, 255, 255, 0)' />
    <g
      fill='none'
      stroke='currentColor'
      strokeDasharray='2'
      strokeDashoffset='2'
      strokeLinecap='round'
      strokeWidth='2'
    >
      <path d='M0 0'>
        <animate
          fill='freeze'
          attributeName='d'
          begin='1.2s'
          dur='0.2s'
          values='M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1'
        />
        <animate
          fill='freeze'
          attributeName='stroke-dashoffset'
          begin='1.2s'
          dur='0.2s'
          values='2;0'
        />
      </path>
      <path d='M0 0'>
        <animate
          fill='freeze'
          attributeName='d'
          begin='1.5s'
          dur='0.2s'
          values='M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5'
        />
        <animate
          fill='freeze'
          attributeName='stroke-dashoffset'
          begin='1.5s'
          dur='1.2s'
          values='2;0'
        />
      </path>
      <animate
        attributeName='transform'
        dur='30s'
        repeatCount='indefinite'
        type='rotate'
        values='0 12 12;360 12 12'
      />
    </g>
    <g fill='currentColor'>
      <path d='M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z'>
        <animate fill='freeze' attributeName='fill-opacity' dur='0.4s' values='1;0' />
      </path>
      <path d='M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z'>
        <animate fill='freeze' attributeName='fill-opacity' begin='0.2s' dur='0.4s' values='1;0' />
      </path>
    </g>
    <g
      fill='currentColor'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
    >
      <path d='M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z' />
      <set attributeName='opacity' begin='0.6s' to='0' />
    </g>
    <mask id='lineMdMoonFilledToSunnyFilledLoopTransition0'>
      <circle cx='12' cy='12' r='12' fill='#fff' />
      <circle cx='18' cy='6' r='12' fill='#fff'>
        <animate fill='freeze' attributeName='cx' begin='0.6s' dur='0.4s' values='18;22' />
        <animate fill='freeze' attributeName='cy' begin='0.6s' dur='0.4s' values='6;2' />
        <animate fill='freeze' attributeName='r' begin='0.6s' dur='0.4s' values='12;3' />
      </circle>
      <circle cx='18' cy='6' r='10'>
        <animate fill='freeze' attributeName='cx' begin='0.6s' dur='0.4s' values='18;22' />
        <animate fill='freeze' attributeName='cy' begin='0.6s' dur='0.4s' values='6;2' />
        <animate fill='freeze' attributeName='r' begin='0.6s' dur='0.4s' values='10;1' />
      </circle>
    </mask>
    <circle
      cx='12'
      cy='12'
      r='10'
      fill='currentColor'
      mask='url(#lineMdMoonFilledToSunnyFilledLoopTransition0)'
      opacity='0'
    >
      <set attributeName='opacity' begin='0.6s' to='1' />
      <animate fill='freeze' attributeName='r' begin='0.6s' dur='0.4s' values='10;6' />
    </circle>
  </svg>
);

export const MoonIcon = ({ className, ...rest }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    {...rest}
    className={className}
  >
    <g
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
    >
      <g strokeDasharray='2'>
        <path d='M12 21v1M21 12h1M12 3v-1M3 12h-1'>
          <animate fill='freeze' attributeName='stroke-dashoffset' dur='0.2s' values='4;2' />
        </path>
        <path d='M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5'>
          <animate
            fill='freeze'
            attributeName='stroke-dashoffset'
            begin='0.2s'
            dur='0.2s'
            values='4;2'
          />
        </path>
      </g>
      <path
        fill='currentColor'
        d='M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z'
        opacity='0'
      >
        <set attributeName='opacity' begin='0.5s' to='1' />
      </path>
    </g>
    <g fill='currentColor' fillOpacity='0'>
      <path d='m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z'>
        <animate
          id='lineMdSunnyFilledLoopToMoonFilledLoopTransition0'
          fill='freeze'
          attributeName='fill-opacity'
          begin='0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s'
          dur='0.4s'
          values='0;1'
        />
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          begin='lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s'
          dur='0.4s'
          values='1;0'
        />
      </path>
      <path d='M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z'>
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          begin='lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s'
          dur='0.4s'
          values='0;1'
        />
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          begin='lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s'
          dur='0.4s'
          values='1;0'
        />
      </path>
      <path d='M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z'>
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          begin='lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s'
          dur='0.4s'
          values='0;1'
        />
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          begin='lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s'
          dur='0.4s'
          values='1;0'
        />
      </path>
      <path d='m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z'>
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          begin='lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s'
          dur='0.4s'
          values='0;1'
        />
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          begin='lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s'
          dur='0.4s'
          values='1;0'
        />
      </path>
    </g>
    <mask id='lineMdSunnyFilledLoopToMoonFilledLoopTransition1'>
      <circle cx='12' cy='12' r='12' fill='#fff' />
      <circle cx='22' cy='2' r='3' fill='#fff'>
        <animate fill='freeze' attributeName='cx' begin='0.1s' dur='0.4s' values='22;18' />
        <animate fill='freeze' attributeName='cy' begin='0.1s' dur='0.4s' values='2;6' />
        <animate fill='freeze' attributeName='r' begin='0.1s' dur='0.4s' values='3;12' />
      </circle>
      <circle cx='22' cy='2' r='1'>
        <animate fill='freeze' attributeName='cx' begin='0.1s' dur='0.4s' values='22;18' />
        <animate fill='freeze' attributeName='cy' begin='0.1s' dur='0.4s' values='2;6' />
        <animate fill='freeze' attributeName='r' begin='0.1s' dur='0.4s' values='1;10' />
      </circle>
    </mask>
    <circle
      cx='12'
      cy='12'
      r='6'
      fill='currentColor'
      mask='url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)'
    >
      <set attributeName='opacity' begin='0.5s' to='0' />
      <animate fill='freeze' attributeName='r' begin='0.1s' dur='0.4s' values='6;10' />
    </circle>
  </svg>
);

export const LinkedinIcon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={42}
      height={43}
      viewBox='0 0 42 43'
      className={className}
      {...rest}
    >
      <g clipPath='url(#a)'>
        <path
          fill='#0076B2'
          d='M38.063 1.792H3.937A2.924 2.924 0 0 0 .985 4.679v34.263a2.924 2.924 0 0 0 2.954 2.881h34.124a2.93 2.93 0 0 0 2.954-2.89V4.67a2.93 2.93 0 0 0-2.953-2.878Z'
        />
        <path
          fill='#fff'
          d='M6.91 16.797h5.943v19.12H6.91v-19.12Zm2.973-9.516a3.445 3.445 0 1 1 0 6.891 3.445 3.445 0 0 1 0-6.89Zm6.697 9.516h5.696v2.625h.08c.793-1.503 2.73-3.088 5.62-3.088 6.018-.013 7.133 3.948 7.133 9.083v10.5h-5.942v-9.302c0-2.215-.04-5.067-3.088-5.067s-3.566 2.415-3.566 4.922v9.447H16.58v-19.12Z'
        />
      </g>
      <defs>
        <clipPath id='a'>
          <path fill='#fff' d='M0 .808h42v42H0z' />
        </clipPath>
      </defs>
    </svg>
  );
};

export const TwitterIcon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={42}
      height={43}
      viewBox='0 0 42 43'
      className={className}
      {...rest}
    >
      <g clipPath='url(#a)'>
        <path
          fill='#1D9BF0'
          d='M37.7 13.24c.026.37.026.74.026 1.114 0 11.386-8.668 24.517-24.518 24.517v-.006A24.394 24.394 0 0 1 0 35.002a17.303 17.303 0 0 0 12.753-3.571 8.627 8.627 0 0 1-8.05-5.984 8.584 8.584 0 0 0 3.89-.149 8.617 8.617 0 0 1-6.912-8.446v-.11a8.562 8.562 0 0 0 3.91 1.08A8.627 8.627 0 0 1 2.926 6.315a24.457 24.457 0 0 0 17.758 9.002 8.622 8.622 0 0 1 2.494-8.233 8.626 8.626 0 0 1 12.19.374 17.29 17.29 0 0 0 5.473-2.092 8.649 8.649 0 0 1-3.788 4.766A17.135 17.135 0 0 0 42 8.776a17.504 17.504 0 0 1-4.3 4.464Z'
        />
      </g>
      <defs>
        <clipPath id='a'>
          <path fill='#fff' d='M0 .808h42v42H0z' />
        </clipPath>
      </defs>
    </svg>
  );
};

export const GithubIcon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={42}
      height={44}
      viewBox='0 0 42 44'
      className={className}
      {...rest}
    >
      <path
        fillRule='evenodd'
        d='M21 1.739c-10.942 0-19.815 9.212-19.815 20.577 0 9.091 5.678 16.804 13.55 19.525.99.191 1.354-.446 1.354-.99 0-.49-.018-2.111-.027-3.83-5.512 1.244-6.675-2.428-6.675-2.428-.902-2.379-2.2-3.011-2.2-3.011-1.799-1.277.135-1.25.135-1.25 1.99.144 3.038 2.12 3.038 2.12 1.767 3.145 4.635 2.236 5.766 1.71.177-1.33.691-2.238 1.258-2.752-4.401-.52-9.028-2.284-9.028-10.168 0-2.247.774-4.082 2.042-5.524-.206-.518-.885-2.61.191-5.445 0 0 1.664-.553 5.45 2.11A18.325 18.325 0 0 1 21 11.688c1.683.008 3.38.236 4.963.693 3.782-2.663 5.444-2.11 5.444-2.11 1.079 2.834.4 4.928.195 5.445 1.27 1.442 2.039 3.277 2.039 5.524 0 7.903-4.635 9.643-9.048 10.153.711.638 1.345 1.891 1.345 3.81 0 2.754-.023 4.97-.023 5.647 0 .548.357 1.19 1.36.987 7.87-2.724 13.54-10.434 13.54-19.522 0-11.364-8.872-20.577-19.815-20.577Z'
        clipRule='evenodd'
      />
      <path d='M8.69 31.282c-.044.103-.198.133-.34.063-.144-.066-.224-.206-.178-.308.043-.106.198-.135.342-.064.144.067.226.207.176.31Zm.803.93c-.095.091-.28.049-.405-.095-.13-.143-.154-.335-.058-.427.098-.091.277-.048.407.095.13.145.155.335.056.428Zm.781 1.185c-.121.088-.32.006-.443-.177-.121-.183-.121-.403.004-.49.122-.089.318-.01.442.172.121.186.121.406-.003.495Zm1.07 1.145c-.108.125-.34.091-.509-.078-.173-.166-.221-.402-.113-.526.11-.125.343-.09.514.078.173.166.225.402.109.526Zm1.477.665c-.048.161-.27.234-.496.166-.224-.07-.37-.26-.324-.422.045-.163.27-.239.496-.165.224.07.37.257.324.421Zm1.622.123c.005.17-.185.31-.42.314-.237.005-.43-.132-.432-.3 0-.17.187-.31.424-.314.235-.005.428.132.428.3Zm1.508-.266c.029.165-.135.335-.369.38-.23.045-.443-.058-.473-.222-.028-.17.139-.34.369-.384.234-.042.444.058.473.226Z' />
    </svg>
  );
};

export const GmailIcon = ({ className, ...rest }) => {
  return (
    <svg
      width={42}
      height={43}
      {...rest}
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='52 42 88 66'
    >
      <path fill='#4285f4' d='M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6' />
      <path fill='#34a853' d='M120 108h14c3.32 0 6-2.69 6-6V59l-20 15' />
      <path fill='#fbbc04' d='M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2' />
      <path fill='#ea4335' d='M72 74V48l24 18 24-18v26L96 92' />
      <path fill='#c5221f' d='M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2' />
    </svg>
  );
};

