import * as React from 'react';
import Svg, { Circle, Path, SvgProps } from 'react-native-svg';

export default function CastleRiverIcon(props: SvgProps) {
  return (
    <Svg width="63" height="80" viewBox="0 0 63 80" fill="none">
      <Path
        d="M53.9519 63.8128C55.2449 64.1313 56.5379 64.4499 57.9241 64.8298C58.0735 65.1033 58.1298 65.3155 58.2198 65.6592C58.2241 65.9458 58.1946 66.1008 58.1652 66.2558C58.1652 66.2558 58.0963 66.3149 57.9924 66.4147C57.3547 66.6156 56.821 66.8039 56.2871 66.8045C49.8927 66.8117 43.4982 66.7989 37.1039 66.7643C36.5185 66.7611 35.9342 66.5718 35.3493 66.4689C35.3202 63.8158 35.2861 61.1628 35.2635 58.5097C35.2466 56.5223 35.0113 54.6063 33.4851 52.9102C33.2606 52.6717 33.1405 52.5751 33.0203 52.4784C32.9771 52.5237 32.9339 52.5691 32.8955 52.4641C30.007 50.0285 28.5091 50.0949 25.3042 52.6924C25.1618 52.8489 25.1039 52.9601 25.0459 53.0713C25.049 53.1584 25.0264 53.2382 24.8936 53.4222C24.6121 53.8497 24.415 54.1658 24.0965 54.4892C23.0052 55.9092 22.9091 57.4141 23.5273 59.1311C23.5307 60.8965 23.507 62.5224 23.4192 64.1945C23.3968 64.4121 23.4384 64.5835 23.5072 64.879C23.528 65.4269 23.5215 65.8507 23.515 66.2744C23.515 66.2744 23.4343 66.3331 23.3678 66.4003C23.3013 66.4676 23.1678 66.4929 23.0633 66.4266C20.4179 66.3309 17.8771 66.2872 15.3361 66.2756C12.0861 66.2608 8.83581 66.2556 5.58606 66.2886C5.07268 66.2938 4.56155 66.5213 3.93341 66.6833C3.41219 66.7249 3.00693 66.729 2.5504 66.6457C2.29296 66.615 2.08679 66.6718 1.77117 66.716C1.26604 66.5389 0.870354 66.3744 0.474674 66.2099C0.474674 66.2099 0.449887 66.2411 0.46602 66.1661C0.48215 66.091 0.408388 65.976 0.408388 65.976C0.515909 65.6777 0.623429 65.3794 0.8423 64.938C1.29556 64.5128 1.63747 64.2307 2.0493 63.9366C2.11923 63.9246 2.24506 63.8589 2.34669 63.8798C2.58221 63.8675 2.71609 63.8344 2.92649 63.8205C3.05304 63.8234 3.10306 63.8072 3.23706 63.8144C3.55111 63.8278 3.78118 63.8178 4.09742 63.8359C4.24289 63.8523 4.30217 63.8406 4.45247 63.8467C4.6485 63.5914 4.75351 63.318 4.89875 63.136C4.99811 63.3014 5.05399 63.3786 5.11953 63.4466C5.13085 63.4583 5.21277 63.4287 5.21233 63.4212C5.12389 61.9419 5.03096 60.4629 4.89689 58.8528C4.88897 57.9009 4.92233 57.0802 5.03878 56.1844C5.0694 55.5521 5.01694 54.9949 4.93233 54.3186C4.92536 53.8733 4.95053 53.5471 5.05797 53.1368C5.08171 52.3006 5.02319 51.5483 4.93434 50.6965C4.9216 50.4615 4.93919 50.3261 5.04622 50.1005C5.17736 48.0664 5.23556 46.1225 5.23954 44.1785C5.24003 43.9398 4.95054 43.7005 4.75072 43.3949C4.50642 43.1669 4.30684 43.0055 4.10726 42.8441C4.10726 42.8441 4.08396 42.8873 4.05192 42.7869C3.63796 42.4428 3.25604 42.199 2.87411 41.9552C2.87411 41.9552 2.86188 41.9865 2.80791 41.8661C2.65878 39.8959 2.56362 38.046 2.46741 36.1754C3.72331 36.1754 4.65029 36.1754 5.57992 36.1754C5.68919 37.3933 5.79002 38.517 5.92288 39.7416C6.53442 39.779 7.11391 39.7155 7.73069 39.5998C7.76798 39.5476 7.8955 39.5332 8.0009 39.4692C8.17928 38.7727 8.15819 38.1082 8.35902 37.5194C8.4883 37.1404 8.9312 36.634 9.25602 36.6172C9.63497 36.5975 10.064 37.0173 10.4222 37.3071C10.6582 37.498 10.8075 37.7961 11.0208 38.156C11.046 38.7077 11.046 39.1497 11.046 39.566C11.8121 39.566 12.4405 39.566 13.0811 39.566C13.0811 38.0181 13.0811 36.5643 13.0811 35.0109C11.3277 34.9093 10.5753 34.0845 11.1163 32.3355C11.1589 32.1976 10.8684 31.9566 10.7328 31.7635C10.7328 31.7635 10.604 31.6928 10.5162 31.6007C10.2291 31.2509 10.0299 30.9932 9.83068 30.7354C9.70568 30.4321 9.58068 30.1289 9.45184 29.6191C9.68504 28.7549 9.9221 28.0972 10.1592 27.4395C10.2598 27.2971 10.3604 27.1547 10.4627 26.9221C11.7557 24.1564 13.0472 21.481 14.5223 18.4251C15.7154 20.9653 16.7431 23.1532 17.8742 25.5213C18.2333 26.3047 18.4394 26.9355 18.7543 27.5062C19.5515 28.9504 19.5 30.1824 18.0616 31.2139C17.8274 31.3818 17.6435 31.7897 17.6423 32.0875C17.6179 37.8861 17.6242 43.6848 17.6242 49.5189C18.5959 49.5189 19.3647 49.5189 20.2323 49.5189C20.2323 46.2154 20.2323 43.0075 20.2323 39.7806C21.1633 39.7806 21.9908 39.7806 22.9341 39.7806C22.9341 40.6881 22.9341 41.4935 22.9341 42.2989C23.3628 42.4223 23.7915 42.5457 24.4449 42.5988C24.7814 42.0478 24.8933 41.567 25.1224 41.0827C26.6152 40.9235 27.6132 40.0977 27.7791 38.8333C27.9009 37.9047 28.2459 36.4045 26.3383 36.3666C26.6095 35.8389 26.8098 35.4493 27.0053 35.0688C26.7357 34.7534 26.4823 34.4569 26.2213 34.1516C27.5688 33.0945 27.5604 34.7399 28.2721 34.9277C28.31 34.9255 28.3383 34.996 28.3423 35.1115C28.7217 35.6167 29.097 36.0063 29.4723 36.3959C29.3368 36.396 29.2012 36.3961 29.0657 36.3962C29.0261 37.3359 28.9865 38.2755 28.8516 39.262C28.3704 39.9115 27.7085 40.4894 27.6516 41.1217C27.497 42.8403 27.5985 44.582 27.5985 46.3934C28.0923 46.4701 28.5195 46.5364 28.9785 46.7093C29.4938 46.7507 29.9774 46.6855 30.5354 46.5959C30.8262 46.4635 31.0426 46.3555 31.3644 46.1715C31.5393 44.7086 31.6448 43.3224 31.6697 41.9347C31.7063 39.8932 31.6818 39.8927 33.508 40.1638C33.8032 41.0377 34.0704 41.8289 34.3376 42.6201C34.774 42.6201 35.2103 42.6201 35.7742 42.6201C35.7742 41.8019 35.7742 41.1181 35.81 40.2007C36.7287 39.8806 37.6116 39.7941 38.6862 39.6888C38.6862 43.1093 38.6862 46.3624 38.6862 49.565C39.6119 49.565 40.3563 49.565 41.1516 49.565C41.1516 45.0597 41.1458 40.6246 41.154 36.1895C41.1584 33.8108 41.5881 31.3284 39.4235 29.5147C39.7801 28.3227 40.0001 27.0667 40.5216 25.9519C41.6372 23.5674 42.9088 21.2559 44.2247 18.7048C44.5111 19.1244 44.8191 19.4701 45.0096 19.8716C46.2385 22.4612 47.3708 25.0996 48.6812 27.6466C49.4113 29.0657 49.1881 30.1022 48.0251 31.0734C47.7999 31.2615 47.6546 31.5452 47.3717 31.979C47.3035 33.3333 46.9599 34.3096 45.9158 34.9433C45.9158 34.9433 45.9187 34.9945 45.7834 35.0395C45.6517 36.5757 45.6553 38.067 45.6589 39.5583C45.6589 39.5583 45.6375 39.5616 45.668 39.6684C47.5334 40.7369 48.5519 40.117 48.5153 37.8863C48.4984 36.8563 48.8215 36.5524 49.7657 36.5224C50.8596 36.4877 50.7335 37.1998 50.8195 37.9177C50.8874 38.4841 51.1844 39.023 51.3797 39.5741C51.7108 39.5764 52.0419 39.5787 52.4944 39.5541C52.8412 39.3142 53.2307 39.1231 53.2625 38.8845C53.3798 38.0021 53.379 37.1041 53.428 36.1018C54.4496 36.1018 55.3717 36.1018 56.5258 36.1018C56.5258 37.6996 56.5791 39.3355 56.4866 40.9631C56.4647 41.3483 55.98 41.7314 55.6599 42.0697C55.1565 42.6017 54.6121 43.0949 53.917 43.763C53.6765 44.1565 53.5413 44.3913 53.5408 44.6264C53.5281 50.6753 53.5226 56.7242 53.5467 62.7729C53.5481 63.1201 53.8108 63.4662 53.9519 63.8128ZM43.4179 29.155C43.5505 29.1836 43.6832 29.2122 44.0506 29.2637C44.6939 29.0462 45.3371 28.8288 46.154 28.5527C45.6775 27.664 45.2854 26.9327 44.8781 25.9617C44.792 25.5601 44.7058 25.1585 44.6197 24.7568C43.7395 25.7114 43.134 26.7083 42.6585 27.7638C42.3327 28.4871 42.6145 28.9942 43.5042 28.9567C43.5042 28.9567 43.4731 28.9544 43.4179 29.155ZM15.0081 25.9783C14.8802 25.5412 14.7522 25.1042 14.5122 24.2847C13.7854 26.0226 13.1955 27.3663 12.6842 28.7393C12.6199 28.912 12.9695 29.2388 13.2919 29.6576C14.0979 29.373 15.1338 29.3069 15.6585 28.7549C16.5499 27.8169 15.4439 27.0219 15.0081 25.9783ZM47.9875 50.2452C48.6798 50.2452 49.3721 50.2452 50.2198 50.2452C50.2198 49.2599 50.3578 48.3377 50.1673 47.4893C50.0555 46.991 49.3711 46.2219 49.0332 46.2654C48.4971 46.3345 47.7166 46.9132 47.6119 47.3996C47.4225 48.2796 47.6551 49.2504 47.9875 50.2452ZM8.62073 47.2045C8.62073 48.1823 8.62073 49.1602 8.62073 50.1005C9.57591 50.1005 10.3411 50.1005 11.1896 50.1005C11.1896 49.2858 11.2964 48.5689 11.1569 47.9038C11.038 47.3373 10.7491 46.5503 10.3254 46.3785C9.92868 46.2177 9.2564 46.7364 8.62073 47.2045ZM49.3558 60.5326C49.6186 59.5761 48.9536 59.5463 48.3597 59.6448C48.0603 59.6944 47.8133 60.0601 47.5426 60.2828C47.9511 60.4637 48.3531 60.6633 48.7728 60.8128C48.8825 60.8519 49.0476 60.7355 49.3558 60.5326Z"
        fill="#052F46"
      />
      <Path
        d="M28.9469 39.2151C28.9865 38.2755 29.0261 37.3359 29.0657 36.3962C29.2012 36.3961 29.3368 36.396 29.4723 36.3959C29.097 36.0063 28.7217 35.6167 28.473 35.1089C30.753 34.9335 30.9475 34.697 30.7021 32.5101C30.6535 32.0769 30.6726 31.6361 30.751 31.1604C30.9571 30.9888 31.0726 30.8557 31.1881 30.7225C31.1201 30.6741 31.052 30.6257 30.9839 30.5773C30.8643 30.7704 30.7447 30.9636 30.6258 31.2765C28.3188 31.1809 28.0584 31.4369 28.1263 33.8893C28.1359 34.2369 28.1969 34.5831 28.2342 34.9299C27.5604 34.7399 27.5688 33.0945 26.2213 34.1516C26.4823 34.4569 26.7357 34.7534 27.0053 35.0688C26.8098 35.4493 26.6095 35.8389 26.3383 36.3666C28.2459 36.4045 27.9009 37.9047 27.7791 38.8333C27.6132 40.0977 26.6152 40.9235 25.1204 40.9608C25.0032 40.5172 25.0052 40.1921 25.0514 39.8392C25.1119 39.781 25.1495 39.7365 25.1404 39.7224C25.1045 39.6673 25.0539 39.6217 25.0069 39.4953C25.0043 39.3665 25.0034 39.3149 25.0896 39.2498C25.2689 39.1394 25.361 39.0425 25.4532 38.9456C25.3022 38.8494 25.1512 38.7532 25 38.5304C25.0028 37.9817 25.0058 37.5596 25.1156 37.1351C25.9481 36.6091 25.8825 35.9646 25.0052 34.8962C25.004 34.4496 25.0047 34.1248 25.0923 33.7867C25.2709 33.6764 25.3626 33.5795 25.4543 33.4826C25.3034 33.3867 25.1525 33.2909 25.0013 33.0935C25.0027 32.8567 25.0043 32.7214 25.0926 32.5727C25.2712 32.4626 25.3631 32.366 25.4549 32.2694C25.3044 32.1735 25.1538 32.0777 25.0021 31.8801C25.0024 31.6426 25.0037 31.507 25.0498 31.3433C25.1111 31.2845 25.1493 31.2394 25.1401 31.2254C25.1035 31.1697 25.0522 31.1238 25.0047 30.9522C25.0034 30.505 25.0038 30.1797 25.0492 29.8263C25.1108 29.7673 25.1491 29.722 25.1399 29.708C25.1032 29.6522 25.0517 29.6061 25.0037 29.455C25.0004 29.2181 24.9989 29.0828 25.115 28.947C26.4087 28.3725 27.5986 27.8232 28.7419 27.1897C28.8704 27.1185 28.7347 26.5707 28.8456 26.2046C29.5439 26.1653 30.1183 26.1653 30.7462 26.1653C30.7462 25.0854 30.8812 24.2074 30.6938 23.4047C30.5874 22.9486 30.0013 22.3983 29.5417 22.297C29.1856 22.2185 28.3366 22.7509 28.32 23.0462C28.257 24.1695 28.4428 25.3068 28.382 26.4512C27.5749 26.7342 26.9212 27.0049 26.2676 27.2757C26.3008 27.4164 26.334 27.5572 26.3673 27.6979C25.9137 27.5078 25.4601 27.3177 25.0047 27.0128C25.004 26.6687 25.0052 26.4393 25.0864 26.125C25.1115 25.2895 25.0566 24.5389 25.0009 23.6867C25.0012 23.4496 25.0022 23.314 25.0667 23.1328C25.0891 22.9175 25.0481 22.7479 25.0057 22.4495C24.7992 21.6981 24.594 21.0754 24.3888 20.4528C20.8659 20.2171 20.8145 20.1913 22.4675 16.9045C24.6379 12.5891 26.8994 8.31951 29.2552 3.77262C29.7243 4.39419 30.1421 4.80572 30.3923 5.30184C32.482 9.44697 34.5498 13.6032 36.6054 17.7655C37.6603 19.9017 37.4656 20.203 35.0378 20.3696C34.8451 20.3828 34.6542 20.4221 34.296 20.4729C34.296 22.3217 34.2961 24.1301 34.1574 26.0202C33.8814 25.2914 33.744 24.4807 33.6067 23.6701C32.8166 25.8108 33.0283 27.9891 32.8761 30.3257C32.9473 30.4046 33.2177 30.7041 33.5287 31.0486C33.0632 31.2978 32.7375 31.4723 32.4306 31.6366C32.7039 32.1136 32.9221 32.4943 33.1375 32.8701C30.8784 34.3567 30.8784 34.3567 31.6658 35.7358C32.1616 35.303 32.6639 34.8646 33.1399 34.4491C33.2209 35.474 33.285 36.2857 33.3492 37.0975C33.4428 37.0844 33.5364 37.0714 33.63 37.0584C33.8124 36.1698 33.9948 35.2813 34.1772 34.3927C34.2226 37.0399 34.268 39.6871 34.3255 42.4772C34.0704 41.8289 33.8032 41.0377 33.508 40.1638C31.6818 39.8927 31.7063 39.8932 31.6697 41.9347C31.6448 43.3224 31.5393 44.7086 31.3369 46.0458C31.1848 44.6009 31.1561 43.2056 31.1493 41.8103C31.1421 40.3199 30.5384 39.3526 28.9469 39.2151ZM27.6418 16.4759C28.4059 17.1983 29.1619 17.9897 30.2626 16.8844C30.5258 16.8714 30.9735 16.7626 31.024 16.86C31.6321 18.0323 32.4895 17.5288 33.5059 17.2967C32.4842 15.9372 32.6391 13.9513 31.2838 13.5359C30.8072 12.5564 30.5043 11.9337 30.1124 11.1036C29.8961 10.5433 29.6798 9.98302 29.2862 8.96363C28.6615 10.4246 28.2119 11.476 27.7651 12.751C27.7508 12.8993 27.7365 13.0476 27.5038 13.1648C26.6859 14.5149 25.8679 15.8649 25.0499 17.2149C25.2189 17.386 25.3878 17.557 25.5568 17.7281C26.1762 17.3197 26.7956 16.9112 27.6418 16.4759ZM29.7366 29.7327C29.7267 29.3114 29.7168 28.8901 29.7069 28.4688C29.4278 28.5921 29.1487 28.7155 28.8696 28.8388C29.0908 29.1204 29.312 29.4019 29.7366 29.7327ZM33.491 22.2587C33.5667 22.3344 33.6424 22.4102 33.7181 22.486C33.7388 22.4427 33.786 22.3919 33.7761 22.3574C33.6225 21.8193 33.4616 21.2833 33.3023 20.7469C32.9801 20.8806 32.6578 21.0143 32.1922 21.2075C32.7731 21.6049 33.1129 21.8375 33.491 22.2587ZM31.456 21.5072C31.3771 21.5821 31.2974 21.6564 31.2234 21.7359C31.2215 21.7379 31.2813 21.7974 31.3123 21.83C31.3913 21.755 31.4702 21.68 31.456 21.5072ZM26.3706 31.1531C26.2956 31.0742 26.2213 30.9946 26.1418 30.9205C26.1398 30.9187 26.0803 30.9784 26.0477 31.0095C26.1227 31.0884 26.1977 31.1673 26.3706 31.1531ZM30.8489 28.1835C30.7701 28.2584 30.6905 28.3326 30.6166 28.412C30.6147 28.4141 30.6744 28.4735 30.7054 28.5061C30.7843 28.4312 30.8631 28.3562 30.8489 28.1835Z"
        fill="#052F46"
      />
      <Path
        d="M17.814 13.8758C16.2247 14.6255 14.7505 15.3527 13.2134 16.1108C13.2134 14.2299 13.2134 12.389 13.2134 10.1654C15.0981 11.0934 16.7771 11.9161 18.429 12.79C18.4453 12.7986 18.1037 13.4838 17.814 13.8758Z"
        fill="#052F46"
      />
      <Path
        d="M34.2204 34.2788C33.9948 35.2813 33.8124 36.1698 33.63 37.0584C33.5364 37.0714 33.4428 37.0844 33.3492 37.0975C33.285 36.2857 33.2209 35.474 33.1399 34.4491C32.6639 34.8646 32.1616 35.303 31.6658 35.7358C30.8784 34.3567 30.8784 34.3567 33.1375 32.8701C32.9221 32.4943 32.7039 32.1136 32.4306 31.6366C32.7375 31.4723 33.0632 31.2978 33.5287 31.0486C33.2177 30.7041 32.9473 30.4046 32.8761 30.3257C33.0283 27.9891 32.8166 25.8108 33.6067 23.6701C33.744 24.4807 33.8814 25.2914 34.1141 26.1534C34.229 26.3451 34.2484 26.4855 34.1304 26.7857C34.0547 29.0334 34.1165 31.1213 34.1784 33.2092C34.2068 33.5278 34.2352 33.8464 34.2204 34.2788Z"
        fill="#052F46"
      />
      <Path
        d="M27.1399 1.66204C26.6958 1.34552 26.3476 1.08424 25.8572 0.716278C28.3553 -0.213441 30.6906 -0.183882 33.0632 0.493233C31.1555 2.52309 29.4695 2.87381 27.1399 1.66204Z"
        fill="#052F46"
      />
      <Path
        d="M25.0032 23.1785C25.0022 23.314 25.0012 23.4496 24.9995 23.8213C25.0013 24.775 25.0038 25.4924 25.0063 26.2099C25.0052 26.4393 25.004 26.6687 25.0027 27.1427C25.0008 27.9073 24.9991 28.4274 24.9974 28.9475C24.9989 29.0828 25.0004 29.2181 25.0023 29.5294C25.0027 29.7053 25.0042 29.8544 25.0042 29.8544C25.0038 30.1797 25.0034 30.505 25.003 31.0265C25.003 31.2227 25.005 31.3713 25.005 31.3713C25.0037 31.507 25.0024 31.6426 25.0014 31.9808C25.0031 32.3175 25.0045 32.4518 25.0058 32.586C25.0043 32.7214 25.0027 32.8567 25.0001 33.1944C25.0012 33.5312 25.0033 33.6656 25.0055 33.8C25.0047 34.1248 25.004 34.4496 25.0033 35.0286C25.0051 35.901 25.0069 36.5192 25.0088 37.1375C25.0058 37.5596 25.0028 37.9817 24.9986 38.6315C24.9992 38.9939 25.0009 39.1287 25.0026 39.2634C25.0034 39.3149 25.0043 39.3665 25.0053 39.5689C25.0054 39.7197 25.0071 39.8669 25.0071 39.8669C25.0052 40.1921 25.0032 40.5172 25.0032 40.9643C24.8933 41.567 24.7814 42.0478 24.5702 42.5736C24.447 35.3245 24.423 28.0304 24.3939 20.5945C24.594 21.0754 24.7992 21.6981 25.0033 22.5495C25.0025 22.9116 25.0028 23.0451 25.0032 23.1785Z"
        fill="#052F46"
      />
      <Path
        d="M51.366 39.4355C51.1844 39.023 50.8874 38.4841 50.8195 37.9177C50.7335 37.1998 50.8596 36.4877 49.7657 36.5224C48.8215 36.5524 48.4984 36.8563 48.5153 37.8863C48.5519 40.117 47.5334 40.7369 45.6743 39.6595C46.324 39.5893 46.9981 39.6348 47.7454 39.6852C47.7454 38.6675 47.7454 37.7861 47.7183 36.7295C47.6912 36.5541 47.7054 36.4492 47.7054 36.4492C48.8179 36.3375 49.9294 36.2038 51.0445 36.1556C51.1333 36.1518 51.3172 36.7348 51.3361 37.0523C51.3805 37.7982 51.3516 38.5484 51.366 39.4355Z"
        fill="#052F46"
      />
      <Path
        d="M34.2129 33.0873C34.1165 31.1213 34.0547 29.0334 34.0857 26.8849C34.2015 28.8713 34.2244 30.9183 34.2129 33.0873Z"
        fill="#052F46"
      />
      <Path
        d="M45.652 39.4264C45.6553 38.067 45.6517 36.5757 45.7578 35.038C45.7933 36.4259 45.7192 37.8603 45.652 39.4264Z"
        fill="#052F46"
      />
      <Path
        d="M46.0347 34.943C46.9599 34.3096 47.3035 33.3333 47.3448 32.0848C48.0946 33.8867 47.9056 34.3271 46.0347 34.943Z"
        fill="#052F46"
      />
      <Path
        d="M33.0182 52.5645C33.1405 52.5751 33.2606 52.6717 33.3998 52.8435C33.2845 52.8294 33.1503 52.74 33.0182 52.5645Z"
        fill="#F5F2E5"
      />
      <Path
        d="M25.3042 52.6924C25.3743 52.7001 25.36 52.7531 25.3286 52.8868C25.3115 52.9674 25.178 53.0173 25.1119 53.0443C25.1039 52.9601 25.1618 52.8489 25.3042 52.6924Z"
        fill="#052F46"
      />
      <Path
        d="M0.366931 66.0086C0.408388 65.976 0.48215 66.091 0.484773 66.1593C0.433423 66.1655 0.379448 66.1034 0.366931 66.0086Z"
        fill="#E7E5DF"
      />
      <Path
        d="M2.8816 42.0679C3.25604 42.199 3.63796 42.4428 4.07017 42.7705C3.71 42.6298 3.29954 42.4052 2.8816 42.0679Z"
        fill="#F2ECD8"
      />
      <Path
        d="M7.2779 39.5849C7.44467 39.5848 7.49167 39.6073 7.61603 39.641C7.11391 39.7155 6.53442 39.779 5.92288 39.7416C5.94227 39.6333 5.9937 39.626 6.11643 39.5871C6.51119 39.573 6.83467 39.5903 7.2779 39.5849Z"
        fill="#052F46"
      />
      <Path
        d="M58.2522 66.3049C58.1946 66.1008 58.2241 65.9458 58.2799 65.7162C58.3173 65.8791 58.3282 66.1165 58.2522 66.3049Z"
        fill="#FFFEF0"
      />
      <Path
        d="M53.9352 63.6735C53.8108 63.4662 53.5481 63.1201 53.5467 62.7729C53.5226 56.7242 53.5281 50.6753 53.5408 44.6264C53.5413 44.3913 53.6765 44.1565 53.8532 43.8319C53.9446 50.3397 53.9316 56.9369 53.9352 63.6735Z"
        fill="#052F46"
      />
      <Path
        d="M28.8516 39.262C30.5384 39.3526 31.1421 40.3199 31.1493 41.8103C31.1561 43.2056 31.1848 44.6009 31.2314 46.1219C31.0426 46.3555 30.8262 46.4635 30.4293 46.5723C29.8147 46.583 29.3807 46.5929 28.9467 46.6028C28.5195 46.5364 28.0923 46.4701 27.5985 46.3934C27.5985 44.582 27.497 42.8403 27.6516 41.1217C27.7085 40.4894 28.3704 39.9115 28.8516 39.262Z"
        fill="#F2ECD8"
      />
      <Path
        d="M30.6604 31.1988C30.6726 31.6361 30.6535 32.0769 30.7021 32.5101C30.9475 34.697 30.753 34.9335 28.469 34.9934C28.3383 34.996 28.31 34.9255 28.2721 34.9277C28.1969 34.5831 28.1359 34.2369 28.1263 33.8893C28.0584 31.4369 28.3188 31.1809 30.6413 31.2813C30.6562 31.1665 30.6604 31.1988 30.6604 31.1988Z"
        fill="#EBE7D3"
      />
      <Path
        d="M47.8495 50.2143C47.6551 49.2504 47.4225 48.2796 47.6119 47.3996C47.7166 46.9132 48.4971 46.3345 49.0332 46.2654C49.3711 46.2219 50.0555 46.991 50.1673 47.4893C50.3578 48.3377 50.2198 49.2599 50.2198 50.2452C49.3721 50.2452 48.6798 50.2452 47.8495 50.2143Z"
        fill="#F2ECD8"
      />
      <Path
        d="M23.0633 66.4266C21.2751 66.5823 19.3828 66.7368 17.4897 66.748C13.1028 66.7741 8.7155 66.731 4.18886 66.681C4.56155 66.5213 5.07268 66.2938 5.58606 66.2886C8.83581 66.2556 12.0861 66.2608 15.3361 66.2756C17.8771 66.2872 20.4179 66.3309 23.0633 66.4266Z"
        fill="#052F46"
      />
      <Path
        d="M15.0148 26.2104C15.4439 27.0219 16.5499 27.8169 15.6585 28.7549C15.1338 29.3069 14.0979 29.373 13.2466 29.4765C13.8058 28.267 14.4103 27.2387 15.0148 26.2104Z"
        fill="#937B67"
      />
      <Path
        d="M44.8932 26.2014C45.2854 26.9327 45.6775 27.664 46.154 28.5527C45.3371 28.8288 44.6939 29.0462 43.9087 29.174C43.6689 29.0411 43.571 28.9977 43.4731 28.9544C43.4731 28.9544 43.5042 28.9567 43.4946 28.8525C43.9543 27.8993 44.4238 27.0504 44.8932 26.2014Z"
        fill="#9A6B60"
      />
      <Path
        d="M44.8857 26.0816C44.4238 27.0504 43.9543 27.8993 43.4921 28.8679C42.6145 28.9942 42.3327 28.4871 42.6585 27.7638C43.134 26.7083 43.7395 25.7114 44.6197 24.7568C44.7058 25.1585 44.792 25.5601 44.8857 26.0816Z"
        fill="#E9DDD3"
      />
      <Path
        d="M15.0115 26.0943C14.4103 27.2387 13.8058 28.267 13.1643 29.3948C12.9695 29.2388 12.6199 28.912 12.6842 28.7393C13.1955 27.3663 13.7854 26.0226 14.5122 24.2847C14.7522 25.1042 14.8801 25.5412 15.0115 26.0943Z"
        fill="#EDE9D5"
      />
      <Path
        d="M8.0009 39.4692C7.8955 38.4859 7.8955 37.4386 7.8955 36.2933C8.99175 36.2933 9.96405 36.2933 11.0385 36.2933C11.0385 36.7989 11.0385 37.2867 11.0171 37.9103C10.8075 37.7961 10.6582 37.498 10.4222 37.3071C10.064 37.0173 9.63497 36.5975 9.25602 36.6172C8.9312 36.634 8.4883 37.1404 8.35902 37.5194C8.15819 38.1082 8.17928 38.7727 8.0009 39.4692Z"
        fill="#052F46"
      />
      <Path
        d="M49.2715 60.6116C49.0476 60.7355 48.8825 60.8519 48.7728 60.8128C48.3531 60.6633 47.9511 60.4637 47.5426 60.2828C47.8133 60.0601 48.0603 59.6944 48.3597 59.6448C48.9536 59.5463 49.6186 59.5761 49.2715 60.6116Z"
        fill="#68474E"
      />
      <Path
        d="M24.0965 54.4892C24.0007 55.9007 23.7835 57.3196 23.5332 58.865C22.9091 57.4141 23.0052 55.9092 24.0965 54.4892Z"
        fill="#052F46"
      />
      <Path
        d="M5.04622 50.1005C4.89809 48.045 4.83939 45.8994 4.78806 43.6076C4.95054 43.7005 5.24003 43.9398 5.23954 44.1785C5.23556 46.1225 5.17736 48.0664 5.04622 50.1005Z"
        fill="#052F46"
      />
      <Path
        d="M4.89875 63.136C4.86388 61.7826 4.86922 60.5206 4.90637 59.1212C5.03096 60.4629 5.12389 61.9419 5.21233 63.4212C5.21277 63.4287 5.13085 63.4583 5.11953 63.4466C5.05399 63.3786 4.99811 63.3014 4.89875 63.136Z"
        fill="#052F46"
      />
      <Path
        d="M5.05797 53.1368C4.95536 52.5011 4.93501 51.7814 4.93967 50.9288C5.02319 51.5483 5.08171 52.3006 5.05797 53.1368Z"
        fill="#052F46"
      />
      <Path
        d="M28.9785 46.7093C29.3807 46.5929 29.8147 46.583 30.3548 46.5968C29.9774 46.6855 29.4938 46.7507 28.9785 46.7093Z"
        fill="#052F46"
      />
      <Path
        d="M5.03878 56.1844C4.94207 55.7379 4.92846 55.2163 4.93966 54.5662C5.01694 54.9949 5.0694 55.5521 5.03878 56.1844Z"
        fill="#052F46"
      />
      <Path
        d="M2.5504 66.6457C2.40111 66.768 2.20054 66.8027 1.9403 66.783C2.08679 66.6718 2.29296 66.615 2.5504 66.6457Z"
        fill="#052F46"
      />
      <Path
        d="M23.4192 64.1945C23.5002 64.284 23.5172 64.4197 23.507 64.6551C23.4384 64.5835 23.3968 64.4121 23.4192 64.1945Z"
        fill="#052F46"
      />
      <Path
        d="M43.4455 29.0547C43.571 28.9977 43.6689 29.0411 43.7913 29.1626C43.6832 29.2122 43.5506 29.1836 43.4455 29.0547Z"
        fill="#E9DDD3"
      />
      <Path
        d="M30.2014 11.311C30.5043 11.9337 30.8072 12.5564 31.2838 13.5359C32.6391 13.9513 32.4842 15.9372 33.5059 17.2967C32.4895 17.5288 31.6321 18.0323 31.024 16.86C30.9735 16.7626 30.5258 16.8714 30.2531 16.7189C30.67 14.2568 30.4005 13.8501 28.3288 13.6497C28.0983 13.4462 27.9102 13.321 27.7221 13.1958C27.7365 13.0476 27.7508 12.8993 27.8755 12.6364C28.7243 12.1183 29.4628 11.7147 30.2014 11.311Z"
        fill="#89645B"
      />
      <Path
        d="M28.5356 26.4389C28.4428 25.3068 28.257 24.1695 28.32 23.0462C28.3366 22.7509 29.1856 22.2185 29.5417 22.297C30.0013 22.3983 30.5874 22.9486 30.6938 23.4047C30.8812 24.2074 30.7462 25.0854 30.7462 26.1653C30.1183 26.1653 29.5439 26.1653 28.8043 26.2342C28.5693 26.3426 28.5398 26.4021 28.5482 26.4703C28.546 26.4589 28.5384 26.4801 28.5396 26.4697C28.5408 26.4592 28.5356 26.4389 28.5356 26.4389Z"
        fill="#EBE7D3"
      />
      <Path
        d="M28.3712 13.728C30.4005 13.8501 30.67 14.2568 30.1983 16.6612C29.1619 17.9897 28.4059 17.1983 27.5302 16.3732C27.7361 15.423 28.0536 14.5755 28.3712 13.728Z"
        fill="#DCBB9C"
      />
      <Path
        d="M28.3288 13.6497C28.0536 14.5755 27.7361 15.423 27.4168 16.3866C26.7956 16.9112 26.1762 17.3197 25.5568 17.7281C25.3878 17.557 25.2189 17.386 25.0499 17.2149C25.8679 15.8649 26.6859 14.5149 27.613 13.1803C27.9102 13.321 28.0983 13.4462 28.3288 13.6497Z"
        fill="#EDE9D5"
      />
      <Path
        d="M28.5504 26.4817C28.5398 26.4021 28.5693 26.3426 28.6803 26.2735C28.7347 26.5707 28.8704 27.1185 28.7419 27.1897C27.5986 27.8232 26.4087 28.3725 25.115 28.947C24.9991 28.4274 25.0008 27.9073 25.0045 27.2574C25.4601 27.3177 25.9137 27.5078 26.3673 27.6979C26.334 27.5572 26.3008 27.4164 26.2676 27.2757C26.9212 27.0049 27.5749 26.7342 28.382 26.4512C28.5356 26.4389 28.5408 26.4592 28.4647 26.4557C28.4425 26.462 28.4964 26.4718 28.5504 26.4817Z"
        fill="#052F46"
      />
      <Path
        d="M30.1569 11.2073C29.4628 11.7147 28.7243 12.1183 27.8741 12.5246C28.2119 11.476 28.6615 10.4246 29.2862 8.96363C29.6798 9.98302 29.8961 10.5433 30.1569 11.2073Z"
        fill="#EDE9D5"
      />
      <Path
        d="M29.6349 29.7081C29.312 29.4019 29.0908 29.1204 28.8696 28.8388C29.1487 28.7155 29.4278 28.5921 29.7069 28.4688C29.7168 28.8901 29.7267 29.3114 29.6349 29.7081Z"
        fill="#052F46"
      />
      <Path
        d="M33.4719 22.1644C33.1129 21.8375 32.7731 21.6049 32.1922 21.2075C32.6578 21.0143 32.9801 20.8806 33.3023 20.7469C33.4616 21.2833 33.6225 21.8193 33.7761 22.3574C33.786 22.3919 33.7388 22.4427 33.7181 22.486C33.6424 22.4102 33.5667 22.3344 33.4719 22.1644Z"
        fill="#052F46"
      />
      <Path
        d="M25.1156 37.1351C25.0069 36.5192 25.0051 35.901 25.0052 35.1504C25.8825 35.9646 25.9481 36.6091 25.1156 37.1351Z"
        fill="#052F46"
      />
      <Path
        d="M25.0864 26.125C25.0038 25.4924 25.0013 24.775 25.0002 23.9229C25.0566 24.5389 25.1115 25.2895 25.0864 26.125Z"
        fill="#052F46"
      />
      <Path
        d="M31.5025 21.5561C31.4702 21.68 31.3913 21.755 31.3123 21.83C31.2813 21.7974 31.2215 21.7379 31.2234 21.7359C31.2974 21.6564 31.3771 21.5821 31.5025 21.5561Z"
        fill="#052F46"
      />
      <Path
        d="M26.3217 31.1997C26.1977 31.1673 26.1227 31.0884 26.0477 31.0095C26.0803 30.9784 26.1398 30.9187 26.1418 30.9205C26.2213 30.9946 26.2956 31.0742 26.3217 31.1997Z"
        fill="#052F46"
      />
      <Path
        d="M25.0926 32.5727C25.0045 32.4518 25.0031 32.3175 25.0025 32.0826C25.1538 32.0777 25.3044 32.1735 25.4549 32.2694C25.3631 32.366 25.2712 32.4626 25.0926 32.5727Z"
        fill="#052F46"
      />
      <Path
        d="M25.0923 33.7867C25.0033 33.6656 25.0012 33.5312 25.0003 33.2959C25.1525 33.2909 25.3034 33.3867 25.4543 33.4826C25.3626 33.5795 25.2709 33.6764 25.0923 33.7867Z"
        fill="#052F46"
      />
      <Path
        d="M30.6407 31.1616C30.7447 30.9636 30.8643 30.7704 30.9839 30.5773C31.052 30.6257 31.1201 30.6741 31.1881 30.7225C31.0726 30.8557 30.9571 30.9888 30.751 31.1604C30.6604 31.1988 30.6562 31.1665 30.6407 31.1616Z"
        fill="#052F46"
      />
      <Path
        d="M30.8955 28.2323C30.8631 28.3562 30.7843 28.4312 30.7054 28.5061C30.6744 28.4735 30.6147 28.4141 30.6166 28.412C30.6905 28.3326 30.7701 28.2584 30.8955 28.2323Z"
        fill="#052F46"
      />
      <Path
        d="M25.0896 39.2498C25.0009 39.1287 24.9992 38.9939 24.9988 38.7581C25.1512 38.7532 25.3022 38.8494 25.4532 38.9456C25.361 39.0425 25.2689 39.1394 25.0896 39.2498Z"
        fill="#052F46"
      />
      <Path
        d="M25.0667 23.1328C25.0028 23.0451 25.0025 22.9116 25.0047 22.6782C25.0481 22.7479 25.0891 22.9175 25.0667 23.1328Z"
        fill="#052F46"
      />
      <Path
        d="M25.0514 39.8392C25.0071 39.8669 25.0054 39.7197 25.0071 39.6462C25.0539 39.6217 25.1045 39.6673 25.1404 39.7224C25.1495 39.7365 25.1119 39.781 25.0514 39.8392Z"
        fill="#052F46"
      />
      <Path
        d="M25.0498 31.3433C25.005 31.3713 25.003 31.2227 25.0047 31.1484C25.0522 31.1238 25.1035 31.1697 25.1401 31.2254C25.1493 31.2394 25.1111 31.2845 25.0498 31.3433Z"
        fill="#052F46"
      />
      <Path
        d="M25.0492 29.8263C25.0042 29.8544 25.0027 29.7053 25.0042 29.6309C25.0517 29.6061 25.1032 29.6522 25.1399 29.708C25.1491 29.722 25.1108 29.7673 25.0492 29.8263Z"
        fill="#052F46"
      />
      <Path
        d="M28.5482 26.4703C28.4964 26.4718 28.4425 26.462 28.4635 26.4662C28.5384 26.4801 28.546 26.4589 28.5482 26.4703Z"
        fill="#052F46"
      />
      <Path
        d="M6.28041 71.2115L1.38605 73.1692C0.774476 73.4139 0.304864 73.9199 0.106512 74.548C-0.469799 76.373 1.39991 78.0115 3.13347 77.2006L6.34871 75.6967C7.39511 75.2073 8.60851 75.2266 9.63884 75.749L16.7936 79.3767C18.0715 80.0247 19.545 80.1736 20.9268 79.7945L37.1274 75.3491C38.147 75.0693 39.2238 75.0752 40.2403 75.3663L50.6147 78.3368C51.8152 78.6805 53.0947 78.6253 54.2611 78.1793L60.6454 75.7382C61.8367 75.2827 62.4521 73.9645 62.0363 72.7588C61.6103 71.5233 60.2628 70.8677 59.0277 71.2951L54.0302 73.0243C53.0259 73.3718 51.9451 73.435 50.9072 73.2069L39.7673 70.7586C39.0531 70.6017 38.3156 70.582 37.5941 70.7007L21.4042 73.363C20.631 73.4901 19.84 73.4584 19.0796 73.2696L9.81082 70.9689C8.63768 70.6777 7.40269 70.7626 6.28041 71.2115Z"
        fill="#F5F2E5"
      />
      <Path
        d="M6.28041 68.4803L1.38605 70.438C0.774476 70.6827 0.304864 71.1887 0.106512 71.8168C-0.469799 73.6418 1.39991 75.2803 3.13347 74.4694L6.34871 72.9655C6.54625 72.8731 6.74975 72.7989 6.95683 72.7427C8.7218 72.2639 10.5524 73.185 12.3513 73.5142L15.2876 74.0516C17.0864 74.3808 18.8307 75.1875 20.6593 75.1711C21.1537 75.1666 21.6491 75.0986 22.1332 74.9658L37.1274 72.6179C38.147 72.3381 39.2238 72.344 40.2403 72.6351L50.6147 75.6056C51.8152 75.9493 53.0947 75.8941 54.2611 75.4481L60.6454 73.007C61.8367 72.5516 62.4521 71.2334 62.0363 70.0276C61.6103 68.7921 60.2628 68.1365 59.0277 68.5639L54.0302 70.2931C53.0259 70.6406 51.9451 70.7038 50.9072 70.4757L39.7673 68.0275C39.0531 67.8705 38.3156 67.8508 37.5941 67.9695L21.4042 70.6318C20.631 70.7589 19.84 70.7272 19.0796 70.5384L9.81082 68.2377C8.63768 67.9465 7.40269 68.0314 6.28041 68.4803Z"
        fill="#FBEDD3"
      />
      <Path
        d="M6.28041 69.9976L1.38605 71.9554C0.774476 72.2 0.304864 72.706 0.106512 73.3342C-0.469799 75.1591 1.39991 76.7976 3.13347 75.9868L6.34871 74.4829C6.55169 74.3879 6.76095 74.3121 6.97394 74.2554C8.72992 73.788 10.5461 74.7029 12.333 75.0333L14.7956 75.4886C16.5824 75.819 18.3143 76.6207 20.1314 76.6099C20.6316 76.607 21.133 76.5389 21.623 76.4045L37.1274 74.1352C38.147 73.8554 39.2239 73.8614 40.2403 74.1524L50.6147 76.5C51.8152 76.8437 53.0947 76.7885 54.2611 76.3425L60.6454 74.5244C61.8367 74.0689 62.4521 72.7507 62.0363 71.5449C61.6103 70.3095 60.2628 69.6539 59.0277 70.0812L54.0302 71.8104C53.0259 72.1579 51.9451 72.2211 50.9072 71.993L39.7673 69.5448C39.0531 69.3878 38.3156 69.3681 37.5941 69.4868L21.4042 72.1491C20.631 72.2763 19.8401 72.2445 19.0796 72.0557L9.81082 69.7551C8.63768 69.4639 7.40269 69.5487 6.28041 69.9976Z"
        fill="#3B7488"
      />
    </Svg>
  );
}
