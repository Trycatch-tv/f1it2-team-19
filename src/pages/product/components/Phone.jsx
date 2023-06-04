// eslint-disable-next-line react/prop-types
export default function Phone ({ marca, nombre }) {
  return (
    <div className="flex gap-3 text-xl ">
      <strong>{marca}</strong>
      <p>{nombre}</p>
    </div>
  )
}
