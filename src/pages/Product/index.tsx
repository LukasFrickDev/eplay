import { useParams } from 'react-router-dom'

import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'
import Loader from '../../components/Loader'

import { useGetGameQuery } from '../../services/api'

type GameParams = {
  id: string
}

const Product = () => {
  const { id } = useParams() as GameParams

  const { data: game } = useGetGameQuery(id)
  // Para resolver o warning que dava no id! passamod o useParams() como uma propriedade que criamos chamada GameParams que so tem o tio id: string
  if (!game) {
    return <Loader />
  }
  return (
    <>
      <Hero game={game} />
      <Section background="black" title="Sobre o Jogo">
        <p>{game.description}</p>
      </Section>
      <Section background="gray" title="Mais Detalhes">
        <p>
          <b>Plataforma:</b> {game.details.system} <br />
          <b>Desenvolvedor:</b> {game.details.developer} <br /> <b>Editora:</b>{' '}
          {game.details.publisher} <br /> <b>Idiomas:</b>O jogo oferece suporte
          a diversos idiomas, incluindo {game.details.languages.join(', ')}
        </p>
      </Section>
      <Gallery
        defaultCover={game.media.cover}
        name={game.name}
        items={game.media.gallery}
      />
    </>
  )
}

export default Product
