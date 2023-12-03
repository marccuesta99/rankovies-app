export default function TVShowPage ({ params }: {params: {id: string}}) {
  const { id } = params
  return <div>Esto es el TV Show {id}</div>
}
