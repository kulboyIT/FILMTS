import { Link, NavLink, createSearchParams, useLocation } from 'react-router-dom'
import PATH from '../utils/path'
import { useEffect, useState } from 'react'
import classNames from 'classnames'
import { Navbar } from '.'

const Header = () => {
  const { pathname } = useLocation()
  const [OpenNav, setOpenNav] = useState<boolean>(false)
  const [header, setHeader] = useState<boolean>(false)

  useEffect(() => {
    document.body.style.overflow = OpenNav ? 'hidden' : 'unset'
  }, [OpenNav])

  useEffect(() => {
    setOpenNav(false)
  }, [pathname])

  const handleChangeHeader = () => {
    if (window.scrollY >= 80) {
      setHeader(true)
    } else {
      setHeader(false)
    }
  }

  window.addEventListener('scroll', handleChangeHeader)

  return (
    <header
      className={`text-white sticky top-0 z-20 left-0 right-0 transition-all duration-300 ${
        header ? 'bg-black/95' : 'bg-transparent'
      }`}
    >
      <div className='px-4 h-[56px] overflow-hidden flex items-center justify-between'>
        <div className='h-full flex items-center gap-4'>
          <Link
            to={PATH.home}
            title='KulFlix'
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              })
            }
          >
            <h1 title='Web xem phim miễn phí lớn nhất Việt Nam' className='font-bold text-4xl text-rose-600'>
              KulFlix
            </h1>
          </Link>
          <div className='hidden md:block'>
            <Navbar />
          </div>
        </div>
        {/* hamburger button */}
        <div className='flex md:hidden items-center gap-1'>
          <NavLink
            title='Tìm phim miễn phí tại KulFlix'
            to={{
              pathname: PATH.search,
              search: createSearchParams({
                keyword: ' ',
                page: '1'
              }).toString()
            }}
            className={({ isActive }) =>
              `hover:text-blue-600 hover:bg-blue-600/20 text-lg flex items-center justify-center gap-2 px-2 py-4 ${
                isActive && ' text-blue-600'
              }`
            }
          >
            <svg className='w-4 h-4 fill-current' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
              <path d='M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z' />
            </svg>
            Tìm Kiếm
          </NavLink>
          <button
            title='Menu phim KulFlix'
            onClick={() => setOpenNav((prev) => !prev)}
            className='flex flex-col gap-[5px] p-2'
          >
            <span
              className={classNames('block w-6 h-[3px] rounded-full bg-gray-400 transition-all duration-300', {
                'rotate-45 translate-y-2': OpenNav,
                'rotate-0': !OpenNav
              })}
            />
            <span
              className={classNames('block w-6 h-[3px] rounded-full bg-gray-400 transition-all duration-300', {
                'opacity-0': OpenNav,
                'opacity-100': !OpenNav
              })}
            />
            <span
              className={classNames('block w-6 h-[3px] rounded-full bg-gray-400 transition-all duration-300', {
                '-rotate-45 -translate-y-2': OpenNav,
                'rotate-0': !OpenNav
              })}
            />
          </button>
        </div>
        {/* hamburger open */}
        <div
          className={`${
            OpenNav ? 'translate-x-0' : 'translate-x-full'
          } duration-200 transition-all bg-[#06121e] h-full block md:hidden p-4 pt-10 fixed z-50 inset-0 overflow-y-auto top-[56px]`}
        >
          <ul className='flex flex-col text-2xl'>
            <li>
              <NavLink
                title='Xem phim hot nhất tại KulFlix'
                to={PATH.hot}
                className={({ isActive }) =>
                  `hover:text-blue-600 hover:bg-blue-600/20 block text-center p-4 ${isActive && ' text-blue-600'}`
                }
              >
                Phim Hot
              </NavLink>
            </li>
            <li>
              <NavLink
                title='Xem phim mới nhất tại KulFlix'
                to={{
                  pathname: `${PATH.list}/${PATH.new}`,
                  search: createSearchParams({
                    page: '1',
                    sort_field: '',
                    category: '',
                    country: '',
                    year: ''
                  }).toString()
                }}
                className={({ isActive }) =>
                  `hover:text-blue-600 hover:bg-blue-600/20 block text-center p-4 ${isActive && ' text-blue-600'}`
                }
              >
                Phim Mới
              </NavLink>
            </li>
            <li>
              <NavLink
                title='Xem phim bộ hay nhất tại KulFlix'
                to={{
                  pathname: `${PATH.list}/${PATH.series}`,
                  search: createSearchParams({
                    page: '1',
                    sort_field: '',
                    category: '',
                    country: '',
                    year: ''
                  }).toString()
                }}
                className={({ isActive }) =>
                  `hover:text-blue-600 hover:bg-blue-600/20 block text-center p-4 ${isActive && ' text-blue-600'}`
                }
              >
                Phim Bộ
              </NavLink>
            </li>
            <li>
              <NavLink
                title='Xem phim lẻ hay nhất tại KulFlix'
                to={{
                  pathname: `${PATH.list}/${PATH.odd}`,
                  search: createSearchParams({
                    page: '1',
                    sort_field: '',
                    category: '',
                    country: '',
                    year: ''
                  }).toString()
                }}
                className={({ isActive }) =>
                  `hover:text-blue-600 hover:bg-blue-600/20 block text-center p-4 ${isActive && ' text-blue-600'}`
                }
              >
                Phim Lẻ
              </NavLink>
            </li>
            <li>
              <NavLink
                title='Xem tv shows hay nhất tại KulFlix'
                to={{
                  pathname: `${PATH.list}/${PATH.tvShows}`,
                  search: createSearchParams({
                    page: '1',
                    sort_field: '',
                    category: '',
                    country: '',
                    year: ''
                  }).toString()
                }}
                className={({ isActive }) =>
                  `hover:text-blue-600 hover:bg-blue-600/20 block text-center p-4 ${isActive && ' text-blue-600'}`
                }
              >
                TV Shows
              </NavLink>
            </li>
            <li>
              <NavLink
                title='Xem phim hoạt hình hay nhất tại KulFlix'
                to={{
                  pathname: `${PATH.list}/${PATH.anime}`,
                  search: createSearchParams({
                    page: '1',
                    sort_field: '',
                    category: '',
                    country: '',
                    year: ''
                  }).toString()
                }}
                className={({ isActive }) =>
                  `hover:text-blue-600 hover:bg-blue-600/20 block text-center p-4 ${isActive && ' text-blue-600'}`
                }
              >
                Hoạt Hình
              </NavLink>
            </li>
          </ul>
          </div>
         </div> 
      <p className='mt-8 text-2xl leading-6 text-center text-gray-500 dark:text-gray-300'>
     Khán giả không xem được ảnh poster phim vui lòng cài đặt vpn ip nước ngoài theo link dưới đây!Xin cảm ơn!
        </p>    
        <div className='flex justify-center mt-8 space-x-4'>
          <a
            href='https://chromewebstore.google.com/detail/vpn-super-unlimited-proxy/cppljodbhecoilefippjhdbekghdigae?hl=vi&utm_source=ext_sidebar'
            rel='noopener noreferrer'
            target='_blank'
            className='text-gray-300 hover:text-gray-100'
          >
            <span className='sr-only'>VPN GoogleChrome</span>
           <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      version="1.1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      <path
        fill="#82D889"
        d="M256 386.648c-25.6 0-49.434-7.062-70.621-21.186-21.186-14.124-37.076-31.779-47.669-53.848L31.779 128C9.71 167.724 0 210.979 0 256c0 64.441 21.186 120.055 62.676 167.724s93.572 75.917 155.366 85.628l74.152-128.883c-7.063 2.648-20.304 6.179-36.194 6.179"
      ></path>
      <path
        fill="#E86438"
        d="M175.669 150.069c23.834-18.538 50.317-26.483 80.331-26.483h219.807c-22.952-38.841-53.848-67.09-92.69-89.159C344.276 11.476 301.903 0 256 0c-39.724 0-77.683 8.828-112.11 25.6S76.8 67.09 53.848 98.869L128 220.69c7.062-28.249 23.834-52.083 47.669-70.621"
      ></path>
      <path
        fill="#FCE056"
        d="M492.579 159.779H344.276c25.6 25.6 43.255 59.145 43.255 96.221 0 27.366-7.945 52.083-22.952 75.034L258.648 512c69.738-.883 129.766-25.6 179.2-75.917S512 325.738 512 256c0-32.662-5.297-67.09-19.421-96.221"
      ></path>
      <path
        fill="#25B9E1"
        d="M256 158.897c52.966 0 97.103 44.138 97.103 97.103S308.966 353.103 256 353.103 158.897 308.966 158.897 256s44.137-97.103 97.103-97.103"
      ></path>
    </svg>
          </a>
           <a
            href='https://play.google.com/store/search?q=vpn+super+unlimited+proxy&c=apps'
            rel='noopener noreferrer'
            target='_blank'
            className='text-gray-300 hover:text-gray-100'
          >
            <span className='sr-only'>VPN Google Play</span>
           <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      fill="none"
      viewBox="0 0 32 32"
    >
      <g>
        <mask
          id="mask0_87_8320"
          style={{ maskType: "alpha" }}
          width="24"
          height="26"
          x="7"
          y="3"
          maskUnits="userSpaceOnUse"
        >
          <path
            fill="#C4C4C4"
            d="M30.048 14.4a1.82 1.82 0 010 3.2L9.756 28.766c-1.235.68-2.756-.203-2.756-1.6V4.834c0-1.397 1.52-2.28 2.756-1.6L30.048 14.4z"
          ></path>
        </mask>
        <g mask="url(#mask0_87_8320)">
          <path
            fill="url(#paint0_linear_87_8320)"
            d="M7.635 28.547l12.657-12.73L7.843 3.3A1.807 1.807 0 007 4.834v22.332c0 .57.252 1.053.635 1.38z"
          ></path>
          <path
            fill="url(#paint1_linear_87_8320)"
            d="M30.048 14.4a1.82 1.82 0 010 3.2l-5.12 2.816-4.636-4.598 4.4-4.365 5.356 2.947z"
          ></path>
          <path
            fill="url(#paint2_linear_87_8320)"
            d="M24.93 20.417l-4.638-4.6-12.657 12.73c.556.476 1.389.622 2.121.219l15.173-8.35z"
          ></path>
          <path
            fill="url(#paint3_linear_87_8320)"
            d="M7.843 3.299l12.449 12.519 4.4-4.365L9.756 3.234a1.859 1.859 0 00-1.913.065z"
          ></path>
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_87_8320"
            x1="15.677"
            x2="7.071"
            y1="10.874"
            y2="19.551"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00C3FF"></stop>
            <stop offset="1" stopColor="#1BE2FA"></stop>
          </linearGradient>
          <linearGradient
            id="paint1_linear_87_8320"
            x1="20.292"
            x2="31.738"
            y1="15.818"
            y2="15.818"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFCE00"></stop>
            <stop offset="1" stopColor="#FFEA00"></stop>
          </linearGradient>
          <linearGradient
            id="paint2_linear_87_8320"
            x1="7.369"
            x2="22.595"
            y1="30.1"
            y2="17.894"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DE2453"></stop>
            <stop offset="1" stopColor="#FE3944"></stop>
          </linearGradient>
          <linearGradient
            id="paint3_linear_87_8320"
            x1="8.107"
            x2="22.597"
            y1="1.901"
            y2="13.736"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#11D574"></stop>
            <stop offset="1" stopColor="#01F176"></stop>
          </linearGradient>
        </defs>
      </g>
    </svg>
          </a>
           <a
            href='https://apps.apple.com/vn/app/vpn-super-unlimited-proxy/id1370293473?l=vi'
            rel='noopener noreferrer'
            target='_blank'
            className='text-gray-300 hover:text-gray-100'
          >
            <span className='sr-only'>VPN APP STORE</span>
             <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      fill="none"
      viewBox="0 0 32 32"
    >
      <g>
        <circle
          cx="16"
          cy="16"
          r="14"
          fill="url(#paint0_linear_87_8317)"
        ></circle>
        <path
          fill="#fff"
          d="M18.447 8.654a1.106 1.106 0 00-.404-1.507 1.096 1.096 0 00-1.5.406l-.528.921-.527-.92a1.096 1.096 0 00-1.5-.407 1.106 1.106 0 00-.404 1.507l1.164 2.032-3.683 6.429H8.098A1.1 1.1 0 007 18.218a1.1 1.1 0 001.098 1.104h10.334c.091-.24.186-.65.085-1.027-.153-.567-.717-1.18-1.663-1.18H13.6l4.847-8.461zM11.636 20.542c-.187-.21-.607-.543-.975-.653-.561-.168-.987-.063-1.202.029l-.818 1.428a1.106 1.106 0 00.404 1.507 1.095 1.095 0 001.5-.406l1.091-1.905z"
        ></path>
        <path
          fill="#fff"
          d="M22.23 19.322h1.672A1.1 1.1 0 0025 18.218a1.1 1.1 0 00-1.098-1.103h-2.937l-3.308-5.774c-.245.235-.716.834-.788 1.514-.091.873.046 1.609.458 2.329 1.385 2.422 2.772 4.842 4.158 7.263.303.528.974.71 1.5.406.526-.304.707-.979.404-1.507l-1.16-2.024z"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_87_8317"
            x1="16"
            x2="16"
            y1="2"
            y2="30"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2AC9FA"></stop>
            <stop offset="1" stopColor="#1F65EB"></stop>
          </linearGradient>
        </defs>
      </g>
    </svg>
          </a>
      </div>
    </header>
  )
}
export default Header
