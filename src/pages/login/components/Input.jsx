import { useState } from 'react'
// eslint-disable-next-line react/prop-types
export default function Input ({ placeholder, img, imgStyle, type }) {
  const [click, setClick] = useState(true)
  return (
    <div className="relative">
      <input className="border border-border_color rounded-lg w-[300px] h-[38px] pl-10 py-2  placeholder:text-sm"
        placeholder={placeholder} type={`${type === 'password' && click ? 'password' : 'text'}`} />
      <img className="absolute top-2 left-2" src={`src/assets/${img}.png`} />
      <img className={`absolute top-2 right-2 ${imgStyle}`} src={`src/assets/${click ? 'ri_eye-line' : 'eye-line'}.png`}
        onClick={() => setClick(!click)}/>
    </div>
  )
}
