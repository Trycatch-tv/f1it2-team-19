// eslint-disable-next-line react/prop-types
export default function Item ({ id, title }) {
  return (
    <section className="h-9 border border-border_color rounded-lg2 bg-soft_color text-black flex items-center justify-around gap-4">
      <h3>{id}</h3>
      <p>{title}</p>
      <div className="flex gap-2">
        <button>
          <img src="src/assets/ri_delete-bin-2-line.png" alt="delete option" />
        </button>
        <button>
          <img src="src/assets/Vector.png" alt="edit option" />
        </button>
      </div>
    </section>
  )
}
