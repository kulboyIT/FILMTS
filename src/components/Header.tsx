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
            <span className='sr-only'>GoogleChrome</span>
           <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50"
style="fill:#FFFFFF;">
<path d="M 25 2 C 12.309288 2 2 12.309297 2 25 C 2 37.690703 12.309288 48 25 48 C 37.690712 48 48 37.690703 48 25 C 48 12.309297 37.690712 2 25 2 z M 25 4 C 32.987982 4 39.925647 8.4450299 43.476562 15 L 25 15 A 1.0001 1.0001 0 0 0 24.589844 15.082031 C 19.542813 15.298848 15.546629 19.247899 15.152344 24.248047 L 8.0351562 12.650391 C 11.851591 7.4136919 18.014801 4 25 4 z M 6.8242188 14.501953 L 16.476562 30.230469 A 1.0001 1.0001 0 0 0 16.978516 30.652344 C 18.791674 33.2146 21.631687 35 25 35 C 26.423665 35 27.7647 34.680002 28.992188 34.140625 L 22.320312 45.824219 C 11.979962 44.509804 4 35.701109 4 25 C 4 21.169738 5.0375752 17.591533 6.8242188 14.501953 z M 25 17 C 29.430126 17 33 20.569877 33 25 C 33 29.430123 29.430126 33 25 33 C 20.569874 33 17 29.430123 17 25 C 17 20.569877 20.569874 17 25 17 z M 30.683594 17 L 44.421875 17 C 45.436789 19.465341 46 22.165771 46 25 C 46 36.609825 36.609833 46 25 46 C 24.842174 46 24.686285 45.991734 24.529297 45.988281 L 33.683594 29.958984 A 1.0001 1.0001 0 0 0 33.822266 29.466797 C 34.517087 28.105991 35 26.628903 35 25 C 35 21.645308 33.228346 18.815267 30.683594 17 z"></path>
</svg>
          </a>
      </div>
    </header>
  )
}
export default Header
