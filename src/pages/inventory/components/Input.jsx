// eslint-disable-next-line react/prop-types
export default function Form ({ style, placeholder, label, id, value, onChange, onBlur }) {
  return (
      <div className="h-auto w-full flex flex-col gap-3 ">
      <label className="FormLabel"
          htmlFor={label} >{label}</label>
      <input className={`FormInput ${style}`}
            placeholder={placeholder}
            type="text"
            id={id}
            value={value}
            onChange={onChange}
            onBlur={onBlur} />
      </div>
  )
}
