import { useQuery } from 'react-query'
import filmApis from 'src/apis/filmApis'
import { useParams, useNavigate, createSearchParams } from 'react-router-dom'
import PATH from 'src/utils/path'
import { useQueryConfig } from 'src/hooks'

const Filter = () => {
  const { type } = useParams()
  const navigate = useNavigate()
  const queryConfig = useQueryConfig()
  const { data: dataGenre } = useQuery({
    queryKey: ['the-loai'],
    queryFn: filmApis.getGenres,
    staleTime: 3 * 60 * 1000
  })
  const { data: dataCountry } = useQuery({
    queryKey: ['quoc-gia'],
    queryFn: filmApis.getCountry,
    staleTime: 3 * 60 * 1000
  })
  const dataGenres = dataGenre?.data.data.items
  const dataCountries = dataCountry?.data.data.items

  const handleChangeType = (value: React.ChangeEvent<HTMLSelectElement>) => {
    navigate({
      pathname: `${PATH.list}/${value.target.value}`,
      search: createSearchParams({
        ...queryConfig,
        page: '1'
      }).toString()
    })
  }

  const handleChangeCategory = (value: React.ChangeEvent<HTMLSelectElement>) => {
    navigate({
      pathname: `${PATH.list}/${type ? type : 'phim-moi'}`,
      search: createSearchParams({
        ...queryConfig,
        page: '1',
        category: value.target.value
      }).toString()
    })
  }

  const handleChangeCountry = (value: React.ChangeEvent<HTMLSelectElement>) => {
    navigate({
      pathname: `${PATH.list}/${type ? type : 'phim-moi'}`,
      search: createSearchParams({
        ...queryConfig,
        page: '1',
        country: value.target.value
      }).toString()
    })
  }

  const handleChangeYear = (value: React.ChangeEvent<HTMLSelectElement>) => {
    navigate({
      pathname: `${PATH.list}/${type ? type : 'phim-moi'}`,
      search: createSearchParams({
        ...queryConfig,
        page: '1',
        year: value.target.value
      }).toString()
    })
  }

  const handleChangeSort = (value: React.ChangeEvent<HTMLSelectElement>) => {
    navigate({
      pathname: `${PATH.list}/${type ? type : 'phim-moi'}`,
      search: createSearchParams({
        ...queryConfig,
        page: '1',
        sort_field: value.target.value
      }).toString()
    })
  }

  return (
    <div className='bg-[#0e274073] py-4 px-[22px] grid grid-cols-2 md:grid-cols-5 items-center gap-[22px] rounded-md'>
      <div className='text-lg flex flex-col'>
        <label htmlFor='typeFilm' className='mb-2 text-white'>
          Loại phim:
        </label>
        <div className='relative w-full before:content-[""] before:absolute before:border-[3px] before:rounded-sm before:rotate-45 before:w-3 before:h-3 before:top-[25%] before:right-4 before:border-t-transparent before:border-l-transparent before:border-blue-600 before:z-[4]'>
          <select
            onChange={(value) => handleChangeType(value)}
            name='type of film'
            id='typeFilm'
            className='cursor-pointer appearance-none w-full rounded-md outline-none py-[7px] pl-[11px] pr-[40px]'
            value={type}
          >
            <option value='phim-moi'>- Tất cả -</option>
            <option value='phim-le'>Phim lẻ</option>
            <option value='phim-bo'>Phim bộ</option>
            <option value='hoat-hinh'>Hoạt hình</option>
            <option value='tv-shows'>TV shows</option>
          </select>
        </div>
      </div>
      <div className='text-lg flex flex-col'>
        <label htmlFor='genreFilm' className='mb-2 text-white'>
          Thể loại:
        </label>
        <div className='relative w-full before:content-[""] before:absolute before:border-[3px] before:rounded-sm before:rotate-45 before:w-3 before:h-3 before:top-[25%] before:right-4 before:border-t-transparent before:border-l-transparent before:border-blue-600 before:z-[4]'>
          <select
            onChange={(value) => handleChangeCategory(value)}
            name='genre of film'
            id='genreFilm'
            className='cursor-pointer appearance-none w-full rounded-md outline-none py-[7px] pl-[11px] pr-[40px]'
            value={queryConfig.category}
          >
            <option value=''>- Tất cả -</option>
            <option value='hanh-dong'>Hành Động</option>
            <option value='tinh-cam'>Tình Cảm</option>
            <option value='hai-huoc'>Hài Hước</option>
            <option value='co-trang'>Cổ Trang</option>
            <option value='tam-ly'>Tâm Lý</option>
            <option value='hinh-su'>Hình Sự</option>
            <option value='chien-tranh'>Chiến Tranh</option>
            <option value='the-thao'>Thể Thao</option>
            <option value='vo-thuat'>Võ Thuật</option>
            <option value='vien-tuong'>Viễn Tưởng</option>
            <option value='phieu-luu'>Phiêu Lưu</option>
            <option value='khoa-hoc'>Khoa Học</option>
            <option value='kinh-di'>Kinh Dị</option>
            <option value='am-nhac'>Âm Nhạc</option>
            <option value='than-thoai'>Thần Thoại</option>
            <option value='tai-lieu'>Tài Liệu</option>
            <option value='gia-dinh'>Gia Đình</option>
            <option value='chinh-kich'>Chính kịch</option>
            <option value='bi-an'>Bí ẩn</option>
            <option value='hoc-duong'>Học Đường</option>
            <option value='kinh-dien'>Kinh Điển</option>
            <option value='phim-18'>Phim 18+</option>
            {dataGenres &&
              dataGenres.map((item) => (
                <option key={item._id} value={item.slug}>
                  {item.name}
                </option>
              ))}
          </select>
        </div>
      </div>
      <div className='text-lg flex flex-col'>
        <label htmlFor='countryFilm' className='mb-2 text-white'>
          Quốc gia:
        </label>
        <div className='relative w-full before:content-[""] before:absolute before:border-[3px] before:rounded-sm before:rotate-45 before:w-3 before:h-3 before:top-[25%] before:right-4 before:border-t-transparent before:border-l-transparent before:border-blue-600 before:z-[4]'>
          <select
            onChange={(value) => handleChangeCountry(value)}
            value={queryConfig.country}
            name='country of film'
            id='countryFilm'
            className='cursor-pointer appearance-none w-full rounded-md outline-none py-[7px] pl-[11px] pr-[40px]'
          >
            <option value=''>- Tất cả -</option>
            <option value='trung-quoc'>Trung Quốc</option>
            <option value='han-quoc'>Hàn Quốc</option>
            <option value='nhat-ban'>Nhật Bản</option>
            <option value='thai-lan'>Thái Lan</option>
            <option value='au-my'>Âu Mỹ</option>
            <option value='dai-loan'>Đài Loan</option>
            <option value='hong-kong'>Hồng Kông</option>
            <option value='an-do'>Ấn Độ</option>
            <option value='anh'>Anh</option>
            <option value='phap'>Pháp</option>
            <option value='canada'>Canada</option>
            <option value='quoc-gia-khac'>Quốc Gia Khác</option>
            <option value='duc'>Đức</option>
            <option value='tay-ban-nha'>Tây Ban Nha</option>
            <option value='tho-nhi-ky'>Thổ Nhĩ Kỳ</option>
            <option value='ha-lan'>Hà Lan</option>
            <option value='indonesia'>Indonesia</option>
            <option value='nga'>Nga</option>
            <option value='mexico'>Mexico</option>
            <option value='ba-lan'>Ba lan</option>
            <option value='uc'>Úc</option>
            <option value='thuy-dien'>Thụy Điển</option>
            <option value='malaysia'>Malaysia</option>
            <option value='brazil'>Brazil</option>
            <option value='philippines'>Philippines</option>
            <option value='bo-dao-nha'>Bồ Đào Nha</option>
            <option value='y'>Ý</option>
            <option value='dan-mach'>Đan Mạch</option>
            <option value='uae'>UAE</option>
            <option value='na-uy'>Na Uy</option>
            <option value='thuy-si'>Thụy Sĩ</option>
            <option value='chau-phi'>Châu Phi</option>
            <option value='nam-phi'>Nam Phi</option>
            <option value='ukraina'>Ukraina</option>
            <option value='a-rap-xe-ut'>Ả Rập Xê Út</option>
            <option value='bi'>Bỉ</option>
            <option value='ireland'>Ireland</option>
            <option value='colombia'>Colombia</option>
            <option value='phan-lan'>Phần Lan</option>
            <option value='viet-nam'>Việt Nam</option>
            <option value='chile'>Chile</option>
            <option value='hy-lap'>Hy Lạp</option>
            <option value='nigeria'>Nigeria</option>
            <option value='argentina'>Argentina</option>
            <option value='singapore'>Singapore</option>
            {dataCountries &&
              dataCountries.map((item) => (
                <option key={item._id} value={item.slug}>
                  {item.name}
                </option>
              ))}
          </select>
        </div>
      </div>
      <div className='text-lg flex flex-col'>
        <label htmlFor='yearFilm' className='mb-2 text-white'>
          Năm:
        </label>
        <div className='relative w-full before:content-[""] before:absolute before:border-[3px] before:rounded-sm before:rotate-45 before:w-3 before:h-3 before:top-[25%] before:right-4 before:border-t-transparent before:border-l-transparent before:border-blue-600 before:z-[4]'>
          <select
            onChange={(value) => handleChangeYear(value)}
            value={queryConfig.year}
            name='year of film'
            id='yearFilm'
            className='cursor-pointer appearance-none w-full rounded-md outline-none py-[7px] pl-[11px] pr-[40px]'
          >
            <option value=''>- Tất cả -</option>
            {Array(14)
              .fill(0)
              .map((_, i) => (
                <option key={i} value={2024 - i}>
                  {2024 - i}
                </option>
              ))}
          </select>
        </div>
      </div>
      <div className='text-lg flex flex-col'>
        <label htmlFor='sortFilm' className='mb-2 text-white'>
          Sắp xếp:
        </label>
        <div className='relative w-full before:content-[""] before:absolute before:border-[3px] before:rounded-sm before:rotate-45 before:w-3 before:h-3 before:top-[25%] before:right-4 before:border-t-transparent before:border-l-transparent before:border-blue-600 before:z-[4]'>
          <select
            onChange={(value) => handleChangeSort(value)}
            value={queryConfig.sort_field}
            name='sort film'
            id='sortFilm'
            className='cursor-pointer appearance-none w-full rounded-md outline-none py-[7px] pl-[11px] pr-[40px]'
          >
            <option value='modified.time'>Ngày cập nhật</option>
            <option value='year'>Ngày phát hành</option>
            <option value='view'>Lượt xem</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Filter
