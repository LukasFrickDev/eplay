import Product from '../Product'
import * as S from './styles'
import Game from '../../models/Game'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

const ProductList = ({ title, background, games }: Props) => (
  <S.Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <S.List>
        {games.map((game) => (
          <Product
            key={game.id}
            category={game.category}
            description={game.description}
            image={game.image}
            infos={game.infos}
            system={game.system}
            title={game.title}
          />
        ))}
      </S.List>
    </div>
  </S.Container>
)

export default ProductList
