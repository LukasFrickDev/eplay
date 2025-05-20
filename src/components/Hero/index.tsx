import { Game } from '../../pages/Home'
import Button from '../Botao'
import { formataPreco } from '../ProductList'
import Tag from '../Tag'
import * as S from './styles'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => (
  <S.Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
    <div className="container">
      <div>
        <Tag>{game.details.category}</Tag>
        <Tag>{game.details.system}</Tag>
      </div>
      <S.Infos>
        <h2>{game.name}</h2>
        <p>
          {game.prices.discount && (
            <span>De {formataPreco(game.prices.old)}</span>
          )}
          {game.prices.current && <>Por {formataPreco(game.prices.current)}</>}
        </p>
        {game.prices.current && (
          <Button
            type="button"
            title="Clique aqui para adcionar esse jogo ao carrinho"
            variant="primary"
          >
            Adicionar ao Carrinho
          </Button>
        )}
      </S.Infos>
    </div>
  </S.Banner>
)

export default Hero
