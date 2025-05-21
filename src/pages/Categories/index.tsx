import ProductList from '../../components/ProductList'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRPGGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportsGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: sportsGames } = useGetSportsGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: rpgGames } = useGetRPGGamesQuery()

  if (actionGames && fightGames && sportsGames && simulationGames && rpgGames) {
    return (
      <>
        <ProductList
          games={actionGames}
          title="Ação"
          background="black"
          id="action"
        />
        <ProductList
          games={sportsGames}
          title="Esportes"
          background="gray"
          id="sports"
        />
        <ProductList
          games={simulationGames}
          title="Simulação"
          background="black"
          id="simulation"
        />
        <ProductList
          games={fightGames}
          title="Luta"
          background="gray"
          id="fight"
        />
        <ProductList games={rpgGames} title="RPG" background="black" id="rpg" />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categories
