export default function item ({ code, nombre, marca, modelo, stock }) {
  return (

      <ul className="w-full h-10 border border-border_color rounded-lg2 px-5 text-sm text-black  flex justify-between items-center gap-4">
        <li>{code}</li>
        <li>{nombre}</li>
        <li>{marca}</li>
        <li>{modelo}</li>
        <li>{stock}</li>
      <button><img src="src/assets/ri_external-link-line.png" alt="link to inventory" /></button>
      </ul>

  )
}
