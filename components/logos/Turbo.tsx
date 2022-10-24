type LogoProps = {
  className?: string;
  height?: number;
};

export const TurboLogoCondensed = ({
  height = 32,
  className = "",
}: LogoProps) => (
  <svg
    className={className}
    width="32"
    height={height}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Turborepo</title>
    <path
      d="M15.9309 7.33936C11.1933 7.33936 7.33887 11.1938 7.33887 15.9314C7.33887 20.669 11.1933 24.5234 15.9309 24.5234C20.6685 24.5234 24.5229 20.669 24.5229 15.9314C24.5229 11.1938 20.6685 7.33936 15.9309 7.33936ZM15.9309 20.3778C13.4749 20.3778 11.4845 18.3874 11.4845 15.9314C11.4845 13.4754 13.4749 11.485 15.9309 11.485C18.3869 11.485 20.3773 13.4754 20.3773 15.9314C20.3773 18.3874 18.3869 20.3778 15.9309 20.3778Z"
      className="dark:fill-white fill-black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.6509 5.92821V2.72021C23.6237 3.09301 29.1629 8.86581 29.1629 15.9314C29.1629 22.997 23.6237 28.7682 16.6509 29.1426V25.9346C21.8477 25.5634 25.9629 21.221 25.9629 15.9314C25.9629 10.6418 21.8477 6.29941 16.6509 5.92821ZM8.35333 22.4914C6.97573 20.901 6.08773 18.8754 5.92933 16.6514H2.71973C2.88613 19.7634 4.13093 22.5874 6.08133 24.7618L8.35173 22.4914H8.35333ZM15.2109 29.1426V25.9346C12.9853 25.7762 10.9597 24.8898 9.36935 23.5106L7.09895 25.781C9.27495 27.733 12.0989 28.9762 15.2093 29.1426H15.2109Z"
      fill="url(#paint0_linear_967_9283)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_967_9283"
        x1="17.1694"
        y1="4.578"
        x2="4.16465"
        y2="17.5828"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0096FF" />
        <stop offset="1" stopColor="#FF1E56" />
      </linearGradient>
    </defs>
  </svg>
);

const Turbo = ({ height = 32, className = "" }: LogoProps) => (
  <svg
    className={className}
    width="112"
    height={height}
    viewBox="0 0 112 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Turborepo</title>
    <path
      d="M48.2623 11.2944V8.24418H33.5623V11.2944H39.1115V21.4374H42.713V11.2944H48.2623Z"
      className="dark:fill-white fill-black"
    />
    <path
      d="M56.5679 21.6396C61.0882 21.6396 63.5688 19.3427 63.5688 15.5574V8.24418H59.9673V15.2083C59.9673 17.3214 58.8648 18.5158 56.5679 18.5158C54.271 18.5158 53.1685 17.3214 53.1685 15.2083V8.24418H49.567V15.5574C49.567 19.3427 52.0476 21.6396 56.5679 21.6396Z"
      className="dark:fill-white fill-black"
    />
    <path
      d="M69.0819 17.0642H72.665L75.4947 21.4374H79.6291L76.4319 16.6783C78.2326 16.0352 79.3351 14.6019 79.3351 12.6542C79.3351 9.82443 77.222 8.24418 74.0064 8.24418H65.4804V21.4374H69.0819V17.0642ZM69.0819 14.2161V11.2577H73.8226C75.0905 11.2577 75.7887 11.8089 75.7887 12.7461C75.7887 13.6281 75.0905 14.2161 73.8226 14.2161H69.0819Z"
      className="dark:fill-white fill-black"
    />
    <path
      d="M81.0108 21.4374H90.4372C93.3772 21.4374 95.0677 20.0409 95.0677 17.7073C95.0677 16.1454 94.0754 15.0797 92.8994 14.6019C93.7079 14.2161 94.7002 13.2973 94.7002 11.8457C94.7002 9.51206 93.0464 8.24418 90.1248 8.24418H81.0108V21.4374ZM84.4653 13.4076V11.1658H89.7573C90.7496 11.1658 91.3008 11.5517 91.3008 12.2867C91.3008 13.0217 90.7496 13.4076 89.7573 13.4076H84.4653ZM84.4653 16.1087H90.0881C91.0619 16.1087 91.5948 16.5864 91.5948 17.3031C91.5948 18.0197 91.0619 18.4974 90.0881 18.4974H84.4653V16.1087Z"
      className="dark:fill-white fill-black"
    />
    <path
      d="M103.873 8.02368C99.2612 8.02368 95.9353 10.9086 95.9353 14.8408C95.9353 18.7731 99.2612 21.6579 103.873 21.6579C108.485 21.6579 111.793 18.7731 111.793 14.8408C111.793 10.9086 108.485 8.02368 103.873 8.02368ZM103.873 11.1474C106.299 11.1474 108.118 12.5807 108.118 14.8408C108.118 17.1009 106.299 18.5342 103.873 18.5342C101.448 18.5342 99.6287 17.1009 99.6287 14.8408C99.6287 12.5807 101.448 11.1474 103.873 11.1474Z"
      className="dark:fill-white fill-black"
    />
    <path
      d="M13.9396 6.42181C9.79423 6.42181 6.42163 9.79441 6.42163 13.9398C6.42163 18.0852 9.79423 21.4578 13.9396 21.4578C18.085 21.4578 21.4576 18.0852 21.4576 13.9398C21.4576 9.79441 18.085 6.42181 13.9396 6.42181ZM13.9396 17.8304C11.7906 17.8304 10.049 16.0888 10.049 13.9398C10.049 11.7908 11.7906 10.0492 13.9396 10.0492C16.0886 10.0492 17.8302 11.7908 17.8302 13.9398C17.8302 16.0888 16.0886 17.8304 13.9396 17.8304Z"
      className="dark:fill-white fill-black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.5697 5.187V2.38C20.6709 2.7062 25.5177 7.7574 25.5177 13.9398C25.5177 20.1222 20.6709 25.172 14.5697 25.4996V22.6926C19.1169 22.3678 22.7177 18.5682 22.7177 13.9398C22.7177 9.3114 19.1169 5.5118 14.5697 5.187ZM7.30928 19.6798C6.10388 18.2882 5.32688 16.5158 5.18828 14.5698H2.37988C2.52548 17.2928 3.61468 19.7638 5.32128 21.6664L7.30788 19.6798H7.30928ZM13.3097 25.4996V22.6926C11.3623 22.554 9.5899 21.7784 8.1983 20.5716L6.2117 22.5582C8.1157 24.2662 10.5867 25.354 13.3083 25.4996H13.3097Z"
      fill="url(#paint0_linear_531_5968)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_531_5968"
        x1="15.0234"
        y1="4.00556"
        x2="3.64419"
        y2="15.3847"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0096FF" />
        <stop offset="1" stopColor="#FF1E56" />
      </linearGradient>
    </defs>
  </svg>
);

export default Turbo;