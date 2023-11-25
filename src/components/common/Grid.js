import React, { useContext, useState } from "react";
import "../../style/grid.css";
import Dropdown from "./Dropdown";
import DetailsContex from "../../contex/DetailsContex";

const Grid = ({ film, people, planet, specie, ship, vehicle }) => {
  // context to set the aside and a details page if the user click the paticular movie
  const { setAsideDisplay, setDetils } = useContext(DetailsContex);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="grid-container">
      <img
        src="https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"
        alt="img"
        onClick={() => {
          setIsOpen(false);
          setAsideDisplay(true);
          if (film) {
            setDetils(film);
          }
          if (people) {
            setDetils(people);
          }
          if (planet) {
            setDetils(planet);
          }
          if (specie) {
            setDetils(specie);
          }
          if (ship) {
            setDetils(ship);
          }
          if (vehicle) {
            setDetils(vehicle);
          }
        }}
      />
      <div className="details">
        {film && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M20.9999 20.25H17.1899C19.1767 18.9982 20.6448 17.0711 21.3239 14.8232C22.0031 12.5752 21.8477 10.1576 20.8863 8.0151C19.925 5.8726 18.2223 4.14928 16.0916 3.16217C13.9608 2.17505 11.5452 1.99053 9.28927 2.64255C7.0333 3.29456 5.08863 4.73926 3.81299 6.71089C2.53736 8.68251 2.01655 11.0484 2.34638 13.3735C2.67622 15.6985 3.8345 17.8262 5.60817 19.3653C7.38183 20.9043 9.65159 21.7512 11.9999 21.75H20.9999C21.1988 21.75 21.3896 21.671 21.5302 21.5303C21.6709 21.3897 21.7499 21.1989 21.7499 21C21.7499 20.8011 21.6709 20.6103 21.5302 20.4697C21.3896 20.329 21.1988 20.25 20.9999 20.25ZM3.74989 12C3.74989 10.3683 4.23375 8.77325 5.14027 7.41654C6.04679 6.05984 7.33526 5.00242 8.84275 4.37799C10.3502 3.75357 12.009 3.59019 13.6094 3.90852C15.2097 4.22685 16.6797 5.01259 17.8335 6.16637C18.9873 7.32015 19.773 8.79016 20.0914 10.3905C20.4097 11.9908 20.2463 13.6496 19.6219 15.1571C18.9975 16.6646 17.9401 17.9531 16.5833 18.8596C15.2266 19.7661 13.6316 20.25 11.9999 20.25C9.81262 20.2475 7.71564 19.3775 6.169 17.8309C4.62236 16.2843 3.75237 14.1873 3.74989 12ZM11.9999 9.75C12.4449 9.75 12.8799 9.61804 13.2499 9.37081C13.6199 9.12357 13.9083 8.77217 14.0786 8.36104C14.2489 7.9499 14.2935 7.4975 14.2067 7.06105C14.1198 6.62459 13.9056 6.22368 13.5909 5.90901C13.2762 5.59434 12.8753 5.38005 12.4388 5.29323C12.0024 5.20642 11.55 5.25097 11.1389 5.42127C10.7277 5.59157 10.3763 5.87996 10.1291 6.24997C9.88185 6.61998 9.74989 7.05499 9.74989 7.5C9.74989 8.09674 9.98695 8.66903 10.4089 9.09099C10.8309 9.51295 11.4032 9.75 11.9999 9.75ZM11.9999 6.75C12.1482 6.75 12.2932 6.79399 12.4166 6.8764C12.5399 6.95881 12.636 7.07594 12.6928 7.21299C12.7496 7.35003 12.7644 7.50083 12.7355 7.64632C12.7065 7.7918 12.6351 7.92544 12.5302 8.03033C12.4253 8.13522 12.2917 8.20665 12.1462 8.23559C12.0007 8.26453 11.8499 8.24967 11.7129 8.19291C11.5758 8.13614 11.4587 8.04001 11.3763 7.91668C11.2939 7.79334 11.2499 7.64834 11.2499 7.5C11.2499 7.30109 11.3289 7.11032 11.4696 6.96967C11.6102 6.82902 11.801 6.75 11.9999 6.75ZM14.2499 16.5C14.2499 16.055 14.1179 15.62 13.8707 15.25C13.6235 14.88 13.2721 14.5916 12.8609 14.4213C12.4498 14.251 11.9974 14.2064 11.5609 14.2932C11.1245 14.38 10.7236 14.5943 10.4089 14.909C10.0942 15.2237 9.87994 15.6246 9.79313 16.061C9.70631 16.4975 9.75087 16.9499 9.92116 17.361C10.0915 17.7722 10.3798 18.1236 10.7499 18.3708C11.1199 18.618 11.5549 18.75 11.9999 18.75C12.5966 18.75 13.1689 18.5129 13.5909 18.091C14.0128 17.669 14.2499 17.0967 14.2499 16.5ZM11.2499 16.5C11.2499 16.3517 11.2939 16.2067 11.3763 16.0833C11.4587 15.96 11.5758 15.8639 11.7129 15.8071C11.8499 15.7503 12.0007 15.7355 12.1462 15.7644C12.2917 15.7933 12.4253 15.8648 12.5302 15.9697C12.6351 16.0746 12.7065 16.2082 12.7355 16.3537C12.7644 16.4992 12.7496 16.65 12.6928 16.787C12.636 16.9241 12.5399 17.0412 12.4166 17.1236C12.2932 17.206 12.1482 17.25 11.9999 17.25C11.801 17.25 11.6102 17.171 11.4696 17.0303C11.3289 16.8897 11.2499 16.6989 11.2499 16.5ZM16.4999 14.25C16.9449 14.25 17.3799 14.118 17.7499 13.8708C18.1199 13.6236 18.4083 13.2722 18.5786 12.861C18.7489 12.4499 18.7935 11.9975 18.7067 11.561C18.6198 11.1246 18.4056 10.7237 18.0909 10.409C17.7762 10.0943 17.3753 9.88005 16.9388 9.79323C16.5024 9.70642 16.05 9.75097 15.6389 9.92127C15.2277 10.0916 14.8763 10.38 14.6291 10.75C14.3819 11.12 14.2499 11.555 14.2499 12C14.2499 12.5967 14.4869 13.169 14.9089 13.591C15.3309 14.0129 15.9032 14.25 16.4999 14.25ZM16.4999 11.25C16.6482 11.25 16.7932 11.294 16.9166 11.3764C17.0399 11.4588 17.136 11.5759 17.1928 11.713C17.2496 11.85 17.2644 12.0008 17.2355 12.1463C17.2065 12.2918 17.1351 12.4254 17.0302 12.5303C16.9253 12.6352 16.7917 12.7066 16.6462 12.7356C16.5007 12.7645 16.3499 12.7497 16.2129 12.6929C16.0758 12.6361 15.9587 12.54 15.8763 12.4167C15.7939 12.2933 15.7499 12.1483 15.7499 12C15.7499 11.8011 15.8289 11.6103 15.9696 11.4697C16.1102 11.329 16.301 11.25 16.4999 11.25ZM7.49989 9.75C7.05488 9.75 6.61987 9.88196 6.24986 10.1292C5.87985 10.3764 5.59146 10.7278 5.42116 11.139C5.25087 11.5501 5.20631 12.0025 5.29313 12.439C5.37994 12.8754 5.59423 13.2763 5.9089 13.591C6.22357 13.9057 6.62448 14.1199 7.06094 14.2068C7.4974 14.2936 7.9498 14.249 8.36093 14.0787C8.77206 13.9084 9.12347 13.62 9.3707 13.25C9.61793 12.88 9.74989 12.445 9.74989 12C9.74989 11.4033 9.51284 10.831 9.09088 10.409C8.66893 9.98705 8.09663 9.75 7.49989 9.75ZM7.49989 12.75C7.35156 12.75 7.20655 12.706 7.08321 12.6236C6.95988 12.5412 6.86375 12.4241 6.80698 12.287C6.75022 12.15 6.73536 11.9992 6.7643 11.8537C6.79324 11.7082 6.86467 11.5746 6.96956 11.4697C7.07445 11.3648 7.20809 11.2933 7.35357 11.2644C7.49906 11.2355 7.64986 11.2503 7.78691 11.3071C7.92395 11.3639 8.04108 11.46 8.12349 11.5833C8.20591 11.7067 8.24989 11.8517 8.24989 12C8.24989 12.1989 8.17087 12.3897 8.03022 12.5303C7.88957 12.671 7.6988 12.75 7.49989 12.75Z"
              fill="white"
            />
          </svg>
        )}
        {people && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <g clip-path="url(#clip0_14_1639)">
              <path
                d="M15.0358 19.29C16.3761 18.3978 17.3936 17.0979 17.938 15.5826C18.4823 14.0673 18.5246 12.4171 18.0585 10.8759C17.5924 9.33476 16.6427 7.9845 15.3499 7.02483C14.057 6.06515 12.4897 5.547 10.8796 5.547C9.26948 5.547 7.70213 6.06515 6.40929 7.02483C5.11646 7.9845 4.16678 9.33476 3.70069 10.8759C3.23461 12.4171 3.27686 14.0673 3.8212 15.5826C4.36554 17.0979 5.38308 18.3978 6.72333 19.29C4.29894 20.1836 2.22846 21.8371 0.820829 24.0038C0.746848 24.1137 0.695462 24.2373 0.669655 24.3673C0.643849 24.4973 0.644138 24.6311 0.670505 24.761C0.696873 24.8909 0.748792 25.0142 0.823247 25.1238C0.897701 25.2335 0.993205 25.3272 1.10421 25.3996C1.21521 25.472 1.33949 25.5216 1.46984 25.5456C1.60018 25.5695 1.73399 25.5673 1.86347 25.5391C1.99296 25.5109 2.11554 25.4572 2.2241 25.3812C2.33266 25.3052 2.42502 25.2083 2.49583 25.0963C3.40382 23.6998 4.64627 22.5522 6.11037 21.7578C7.57448 20.9633 9.21383 20.5472 10.8796 20.5472C12.5453 20.5472 14.1847 20.9633 15.6488 21.7578C17.1129 22.5522 18.3553 23.6998 19.2633 25.0963C19.41 25.3143 19.6366 25.4658 19.8941 25.5181C20.1515 25.5703 20.4193 25.5192 20.6393 25.3756C20.8594 25.2321 21.0141 25.0077 21.0701 24.751C21.126 24.4943 21.0787 24.2259 20.9383 24.0038C19.5307 21.8371 17.4602 20.1836 15.0358 19.29ZM5.37958 13.05C5.37958 11.9622 5.70215 10.8989 6.3065 9.9944C6.91084 9.08993 7.76983 8.38499 8.77482 7.9687C9.77981 7.55242 10.8857 7.4435 11.9526 7.65572C13.0195 7.86794 13.9995 8.39176 14.7687 9.16095C15.5379 9.93014 16.0617 10.9101 16.2739 11.977C16.4861 13.0439 16.3772 14.1498 15.9609 15.1548C15.5446 16.1598 14.8397 17.0188 13.9352 17.6231C13.0307 18.2275 11.9674 18.55 10.8796 18.55C9.4214 18.5484 8.02341 17.9684 6.99232 16.9373C5.96123 15.9062 5.38123 14.5082 5.37958 13.05ZM31.6471 25.3875C31.425 25.5324 31.1544 25.5831 30.8949 25.5285C30.6354 25.4738 30.4082 25.3184 30.2633 25.0963C29.3564 23.6989 28.1141 22.5509 26.6497 21.7568C25.1853 20.9627 23.5454 20.5478 21.8796 20.55C21.6144 20.55 21.36 20.4447 21.1725 20.2571C20.9849 20.0696 20.8796 19.8153 20.8796 19.55C20.8796 19.2848 20.9849 19.0305 21.1725 18.8429C21.36 18.6554 21.6144 18.55 21.8796 18.55C22.6895 18.5493 23.4893 18.3696 24.2218 18.0239C24.9543 17.6782 25.6014 17.175 26.1169 16.5503C26.6323 15.9255 27.0034 15.1946 27.2037 14.4098C27.4039 13.6249 27.4283 12.8056 27.2752 12.0102C27.1221 11.2149 26.7952 10.4632 26.3178 9.80879C25.8405 9.15442 25.2246 8.61355 24.514 8.22483C23.8034 7.83611 23.0157 7.60914 22.2072 7.56012C21.3987 7.51111 20.5894 7.64126 19.8371 7.94129C19.7144 7.99432 19.5824 8.02222 19.4487 8.02335C19.3151 8.02448 19.1826 7.99881 19.059 7.94787C18.9355 7.89692 18.8234 7.82172 18.7294 7.72673C18.6354 7.63173 18.5614 7.51886 18.5118 7.39478C18.4622 7.2707 18.4379 7.13793 18.4405 7.00431C18.443 6.8707 18.4723 6.73895 18.5266 6.61686C18.581 6.49476 18.6592 6.38479 18.7568 6.29345C18.8543 6.2021 18.9692 6.13124 19.0946 6.08504C20.8164 5.39835 22.7315 5.37364 24.4705 6.01567C26.2095 6.6577 27.6491 7.92099 28.5116 9.56181C29.3741 11.2026 29.5984 13.1047 29.1412 14.9012C28.684 16.6976 27.5778 18.2611 26.0358 19.29C28.4602 20.1836 30.5307 21.8371 31.9383 24.0038C32.0832 24.2259 32.1339 24.4965 32.0792 24.756C32.0246 25.0155 31.8692 25.2426 31.6471 25.3875Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_14_1639">
                <rect width="32" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>
        )}
        {specie && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M16.3796 1.55005C13.1982 1.55369 10.148 2.81914 7.89838 5.06879C5.64873 7.31844 4.38328 10.3686 4.37964 13.55C4.37964 16.55 5.94964 20.4325 8.58089 23.925C11.2284 27.4438 14.1434 29.55 16.3796 29.55C18.6159 29.55 21.5309 27.4488 24.1784 23.925C26.8096 20.425 28.3796 16.55 28.3796 13.55C28.376 10.3686 27.1105 7.31844 24.8609 5.06879C22.6113 2.81914 19.5611 1.55369 16.3796 1.55005ZM22.5809 22.7275C20.4096 25.6113 17.9184 27.55 16.3796 27.55C14.8409 27.55 12.3496 25.6113 10.1784 22.7275C7.83589 19.6125 6.37964 16.0963 6.37964 13.55C6.37964 10.8979 7.43321 8.35434 9.30857 6.47898C11.1839 4.60362 13.7275 3.55005 16.3796 3.55005C19.0318 3.55005 21.5753 4.60362 23.4507 6.47898C25.3261 8.35434 26.3796 10.8979 26.3796 13.55C26.3796 16.0963 24.9234 19.6125 22.5809 22.7275ZM15.3796 16.55C15.3796 15.224 14.8529 13.9522 13.9152 13.0145C12.9775 12.0768 11.7057 11.55 10.3796 11.55C9.84921 11.55 9.3405 11.7608 8.96543 12.1358C8.59035 12.5109 8.37964 13.0196 8.37964 13.55C8.37964 14.8761 8.90642 16.1479 9.8441 17.0856C10.7818 18.0233 12.0536 18.55 13.3796 18.55C13.9101 18.55 14.4188 18.3393 14.7939 17.9643C15.1689 17.5892 15.3796 17.0805 15.3796 16.55ZM10.3796 13.55C11.1753 13.55 11.9384 13.8661 12.501 14.4287C13.0636 14.9913 13.3796 15.7544 13.3796 16.55C12.584 16.55 11.8209 16.234 11.2583 15.6714C10.6957 15.1088 10.3796 14.3457 10.3796 13.55ZM22.3796 11.55C21.0536 11.55 19.7818 12.0768 18.8441 13.0145C17.9064 13.9522 17.3796 15.224 17.3796 16.55C17.3796 17.0805 17.5904 17.5892 17.9654 17.9643C18.3405 18.3393 18.8492 18.55 19.3796 18.55C20.0362 18.55 20.6864 18.4207 21.2931 18.1694C21.8997 17.9182 22.4509 17.5499 22.9152 17.0856C23.3795 16.6213 23.7478 16.0701 23.999 15.4635C24.2503 14.8568 24.3796 14.2067 24.3796 13.55C24.3796 13.0196 24.1689 12.5109 23.7939 12.1358C23.4188 11.7608 22.9101 11.55 22.3796 11.55ZM19.3796 16.55C19.3796 15.7544 19.6957 14.9913 20.2583 14.4287C20.8209 13.8661 21.584 13.55 22.3796 13.55C22.3796 14.3457 22.0636 15.1088 21.501 15.6714C20.9384 16.234 20.1753 16.55 19.3796 16.55ZM19.3796 22.55C19.3796 22.8153 19.2743 23.0696 19.0867 23.2572C18.8992 23.4447 18.6449 23.55 18.3796 23.55H14.3796C14.1144 23.55 13.8601 23.4447 13.6725 23.2572C13.485 23.0696 13.3796 22.8153 13.3796 22.55C13.3796 22.2848 13.485 22.0305 13.6725 21.8429C13.8601 21.6554 14.1144 21.55 14.3796 21.55H18.3796C18.6449 21.55 18.8992 21.6554 19.0867 21.8429C19.2743 22.0305 19.3796 22.2848 19.3796 22.55Z"
              fill="white"
            />
          </svg>
        )}
        {planet && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M31.0184 7.13505C30.0621 5.4863 27.5384 5.11505 23.7059 6.05255C21.9316 4.6806 19.808 3.83377 17.5765 3.60826C15.3451 3.38275 13.095 3.78759 11.0821 4.7768C9.06919 5.76602 7.37404 7.29994 6.18925 9.20432C5.00445 11.1087 4.3775 13.3072 4.37961 15.5501C4.37977 16.0645 4.41233 16.5784 4.47711 17.0888C1.01586 20.6751 1.06586 22.8001 1.74211 23.9651C2.37961 25.0701 3.70961 25.5501 5.45961 25.5501C6.67464 25.5249 7.8825 25.3571 9.05836 25.0501C10.8329 26.4207 12.9561 27.2663 15.1871 27.4909C17.418 27.7156 19.6672 27.3102 21.6793 26.3208C23.6915 25.3315 25.3859 23.7978 26.5703 21.8939C27.7546 19.9901 28.3815 17.7923 28.3796 15.5501C28.3799 15.0381 28.3477 14.5267 28.2834 14.0188C29.8459 12.3938 30.8859 10.8501 31.2396 9.5288C31.4834 8.6138 31.4096 7.8088 31.0184 7.13505ZM16.3796 5.55005C18.6445 5.55238 20.8418 6.32247 22.6126 7.73459C24.3834 9.14671 25.6232 11.1174 26.1296 13.3251C23.9971 15.3326 21.1109 17.3913 18.3709 18.9663C14.9271 20.9426 11.9396 22.1751 9.55711 22.8501C8.0897 21.4815 7.06832 19.7028 6.62594 17.7456C6.18356 15.7884 6.34067 13.7433 7.07681 11.8766C7.81296 10.01 9.09404 8.40817 10.7533 7.27977C12.4125 6.15137 14.373 5.54864 16.3796 5.55005ZM3.47211 22.9613C3.28961 22.6476 3.39086 22.0563 3.74961 21.3363C4.10437 20.6617 4.53599 20.0304 5.03586 19.4551C5.53136 20.8907 6.29488 22.2192 7.28586 23.3701C5.12961 23.7326 3.78461 23.5013 3.47211 22.9613ZM16.3796 25.5501C14.6935 25.5518 13.0348 25.1242 11.5596 24.3076C14.2672 23.35 16.8798 22.1422 19.3634 20.7001C22.0609 19.1513 24.4484 17.4726 26.3721 15.8151C26.3009 18.419 25.2172 20.8926 23.3514 22.7103C21.4855 24.5281 18.9845 25.5468 16.3796 25.5501ZM29.3071 9.0113C29.0946 9.80005 28.5334 10.7026 27.7284 11.6526C27.2342 10.2152 26.4705 8.88523 25.4784 7.7338C27.2546 7.44005 28.8996 7.46255 29.2909 8.1388C29.4034 8.33505 29.4096 8.6288 29.3071 9.0113Z"
              fill="white"
            />
          </svg>
        )}
        {vehicle && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <g clip-path="url(#clip0_14_1647)">
              <path
                d="M30.3796 13.5501H26.7934L21.3796 8.13631C21.1946 7.94978 20.9743 7.8019 20.7316 7.70126C20.4889 7.60062 20.2286 7.54922 19.9659 7.55006H5.91464C5.58613 7.55067 5.26283 7.63219 4.97331 7.78741C4.68379 7.94264 4.43696 8.16679 4.25464 8.44006L0.547139 13.9951C0.438204 14.1597 0.379965 14.3527 0.379639 14.5501L0.379639 20.5501C0.379639 21.0805 0.590352 21.5892 0.965425 21.9643C1.3405 22.3393 1.84921 22.5501 2.37964 22.5501H4.50464C4.72494 23.4105 5.22534 24.1731 5.92695 24.7177C6.62856 25.2623 7.49147 25.5579 8.37964 25.5579C9.26781 25.5579 10.1307 25.2623 10.8323 24.7177C11.5339 24.1731 12.0343 23.4105 12.2546 22.5501H20.5046C20.7249 23.4105 21.2253 24.1731 21.9269 24.7177C22.6286 25.2623 23.4915 25.5579 24.3796 25.5579C25.2678 25.5579 26.1307 25.2623 26.8323 24.7177C27.5339 24.1731 28.0343 23.4105 28.2546 22.5501H30.3796C30.9101 22.5501 31.4188 22.3393 31.7939 21.9643C32.1689 21.5892 32.3796 21.0805 32.3796 20.5501V15.5501C32.3796 15.0196 32.1689 14.5109 31.7939 14.1358C31.4188 13.7608 30.9101 13.5501 30.3796 13.5501ZM5.91464 9.55006H19.9659L23.9659 13.5501H3.25464L5.91464 9.55006ZM8.37964 23.5501C7.98408 23.5501 7.5974 23.4328 7.2685 23.213C6.9396 22.9932 6.68325 22.6809 6.53188 22.3154C6.3805 21.95 6.3409 21.5478 6.41807 21.1599C6.49524 20.7719 6.68572 20.4156 6.96543 20.1358C7.24513 19.8561 7.6015 19.6657 7.98946 19.5885C8.37742 19.5113 8.77955 19.5509 9.14501 19.7023C9.51046 19.8537 9.82281 20.11 10.0426 20.4389C10.2623 20.7678 10.3796 21.1545 10.3796 21.5501C10.3796 22.0805 10.1689 22.5892 9.79385 22.9643C9.41878 23.3393 8.91007 23.5501 8.37964 23.5501ZM24.3796 23.5501C23.9841 23.5501 23.5974 23.4328 23.2685 23.213C22.9396 22.9932 22.6833 22.6809 22.5319 22.3154C22.3805 21.95 22.3409 21.5478 22.4181 21.1599C22.4952 20.7719 22.6857 20.4156 22.9654 20.1358C23.2451 19.8561 23.6015 19.6657 23.9895 19.5885C24.3774 19.5113 24.7796 19.5509 25.145 19.7023C25.5105 19.8537 25.8228 20.11 26.0426 20.4389C26.2623 20.7678 26.3796 21.1545 26.3796 21.5501C26.3796 22.0805 26.1689 22.5892 25.7939 22.9643C25.4188 23.3393 24.9101 23.5501 24.3796 23.5501ZM30.3796 20.5501H28.2546C28.0343 19.6896 27.5339 18.927 26.8323 18.3824C26.1307 17.8378 25.2678 17.5422 24.3796 17.5422C23.4915 17.5422 22.6286 17.8378 21.9269 18.3824C21.2253 18.927 20.7249 19.6896 20.5046 20.5501H12.2546C12.0343 19.6896 11.5339 18.927 10.8323 18.3824C10.1307 17.8378 9.26781 17.5422 8.37964 17.5422C7.49147 17.5422 6.62856 17.8378 5.92695 18.3824C5.22534 18.927 4.72494 19.6896 4.50464 20.5501H2.37964V15.5501H30.3796V20.5501Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_14_1647">
                <rect width="32" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>
        )}
        {ship && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M13.3509 22.7925C13.3021 22.9863 12.0834 27.55 5.37963 27.55C5.11441 27.55 4.86006 27.4447 4.67252 27.2571C4.48498 27.0696 4.37963 26.8153 4.37963 26.55C4.37963 19.8463 8.94338 18.6275 9.13713 18.5788C9.39455 18.5145 9.66698 18.5551 9.89449 18.6916C10.122 18.8282 10.2859 19.0495 10.3503 19.3069C10.4146 19.5643 10.374 19.8368 10.2374 20.0643C10.1009 20.2918 9.87955 20.4557 9.62213 20.52C9.50963 20.5513 6.81963 21.3375 6.42713 25.5025C10.5921 25.11 11.3796 22.425 11.4121 22.3C11.4784 22.0429 11.6441 21.8227 11.8728 21.6878C12.1015 21.5529 12.3744 21.5144 12.6315 21.5807C12.8886 21.647 13.1088 21.8127 13.2437 22.0414C13.3786 22.27 13.4172 22.5429 13.3509 22.8V22.7925ZM24.9759 14.3675L24.3796 14.9638V22.255C24.3811 22.5187 24.3302 22.78 24.2297 23.0238C24.1293 23.2676 23.9814 23.4889 23.7946 23.675L19.5046 27.9625C19.3196 28.1489 19.0996 28.2967 18.8571 28.3975C18.6147 28.4984 18.3547 28.5502 18.0921 28.55C17.8754 28.55 17.6602 28.5149 17.4546 28.4463C17.1017 28.3296 16.7885 28.1165 16.5504 27.8311C16.3123 27.5457 16.1587 27.1994 16.1071 26.8313L15.4359 22.02L9.90963 16.4938L5.10088 15.8225C4.7323 15.7708 4.38547 15.6173 4.09938 15.3793C3.8133 15.1412 3.59932 14.828 3.48151 14.475C3.36369 14.122 3.34673 13.7431 3.43252 13.3809C3.51831 13.0187 3.70346 12.6877 3.96713 12.425L8.25463 8.13504C8.44072 7.94827 8.6621 7.80036 8.90588 7.69993C9.14966 7.5995 9.41097 7.54855 9.67463 7.55004H16.9659L17.5621 6.95379C20.8971 3.62004 24.9159 3.47629 26.4884 3.57004C26.976 3.59967 27.4359 3.80672 27.7813 4.15214C28.1267 4.49756 28.3337 4.95744 28.3634 5.44504C28.4546 7.01379 28.3109 11.0325 24.9771 14.3675H24.9759ZM5.37963 13.8425L10.0234 14.49L14.9659 9.55004H9.67463L5.37963 13.8425ZM11.7946 15.55L16.3796 20.135L23.5609 12.9538C24.5287 11.9925 25.2795 10.8353 25.7629 9.55974C26.2462 8.28422 26.451 6.92001 26.3634 5.55879C25.0029 5.47442 23.64 5.68132 22.3658 6.16568C21.0917 6.65004 19.9355 7.40071 18.9746 8.36754L11.7946 15.55ZM22.3796 16.9638L17.4384 21.905L18.0884 26.55L22.3796 22.255V16.9638Z"
              fill="white"
            />
          </svg>
        )}
        <p style={{ flexGrow: 3 }}>
          {people && people.name}
          {planet && planet.name}
          {specie && specie.name}
          {vehicle && vehicle.name}
          {ship && ship.name}
          {film && film.title}
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          className="three-dot"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.3333 17C11.2287 17 10.3333 17.8954 10.3333 19C10.3333 20.1046 11.2287 21 12.3333 21C13.4378 21 14.3333 20.1046 14.3333 19C14.3333 17.8954 13.4378 17 12.3333 17Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.3333 10C11.2287 10 10.3333 10.8954 10.3333 12C10.3333 13.1046 11.2287 14 12.3333 14C13.4378 14 14.3333 13.1046 14.3333 12C14.3333 10.8954 13.4378 10 12.3333 10Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.3333 3C11.2287 3 10.3333 3.89543 10.3333 5C10.3333 6.10457 11.2287 7 12.3333 7C13.4378 7 14.3333 6.10457 14.3333 5C14.3333 3.89543 13.4378 3 12.3333 3Z"
            fill="white"
          />
        </svg>
      </div>
      {isOpen && (
        <Dropdown sty="grid-pos" setIsOpen={setIsOpen} isOpen={isOpen} />
      )}
    </div>
  );
};

export default Grid;