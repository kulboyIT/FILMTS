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
        <div className='flex justify-center mt-8 space-x-4'>
          <a
            href='https://chromewebstore.google.com/detail/free-vpn-for-chrome-vpn-p/majdfhpaihoncoakbjgbdhglocklcgno'
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
            href='https://play.google.com/store/apps/dev?id=8778413552898986115&hl=vi&gl=US'
            rel='noopener noreferrer'
            target='_blank'
            className='text-gray-300 hover:text-gray-100'
          >
            <span className='sr-only'>VPN Google Play</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              aria-hidden='true'
              role='img'
              className='w-10 h-10'
              viewBox='0 0 24 24'
            >
              <path
                fill='currentColor'
                d='M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475c0-.237-.012-1.025-.012-1.862c-2.513.462-3.163-.613-3.363-1.175a3.636 3.636 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2.001 2.001 0 0 1 1.538 1.025a2.137 2.137 0 0 0 2.912.825a2.104 2.104 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.892 3.892 0 0 1 1.025-2.688a3.594 3.594 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.427 9.427 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.593 3.593 0 0 1 .1 2.65a3.869 3.869 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.563 4.937a2.368 2.368 0 0 1 .675 1.85c0 1.338-.012 2.413-.012 2.75c0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247Z'
              />
            </svg>
          </a>
           <a
            href='https://ophim9.cc/'
            rel='noopener noreferrer'
            target='_blank'
            className='text-gray-300 hover:text-gray-100'
          >
            <span className='sr-only'>VPN APP STORE</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient
          id="a"
          x1="-1315.782"
          x2="-1195.782"
          y1="529.793"
          y2="529.793"
          gradientTransform="rotate(-90 -832.788 -362.994)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#1d6ff2"></stop>
          <stop offset="1" stopColor="#1ac8fc"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#a)"
        fillRule="evenodd"
        d="M120 26v68a25.948 25.948 0 01-26 26H26A25.948 25.948 0 010 94V26A25.948 25.948 0 0126 0h68a25.948 25.948 0 0126 26z"
      ></path>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M82.6 69h14.9a5.5 5.5 0 010 11H82.6z"
      ></path>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M64.3 69a7.853 7.853 0 017.9 7.9 8.149 8.149 0 01-.6 3.1H22.5a5.5 5.5 0 010-11zm-1.4-36.2v9.6h-6.4L48.7 29a5.197 5.197 0 119-5.2zm5.5 9.3l27.3 47.3a5.489 5.489 0 01-9.5 5.5L69.7 66.2c-1.5-2.8-2.6-5-3.3-6.2a15.039 15.039 0 012-17.9z"
      ></path>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M46 74H33.3L62 24.3a5.489 5.489 0 019.5 5.5zm-6.7 11.5L34 94.8a5.489 5.489 0 11-9.5-5.5l3.9-6.8a8.598 8.598 0 013.9-.9 7.778 7.778 0 017 3.9z"
      ></path>
    </svg>
          </a>
      </div>
    </header>
  )
}
export default Header
