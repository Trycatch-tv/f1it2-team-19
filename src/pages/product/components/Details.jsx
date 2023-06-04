// eslint-disable-next-line react/prop-types
export default function Detail ({ head, body }) {
  return (
    <div className="flex flex-col  text-xl ">
      <strong>{head}</strong>
      <p>{body}</p>
    </div>
  )
}
