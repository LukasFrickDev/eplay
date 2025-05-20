import { useEffect, useState } from 'react'
import ProductList from '../../components/ProductList'
import { Game } from '../Home'

const Categories = () => {
  const [gamesAcao, setGameAcao] = useState<Game[]>([])
  const [gameEsportes, setGameEsportes] = useState<Game[]>([])
  const [gamesSimulacao, setGameSimulacao] = useState<Game[]>([])
  const [gamesLuta, setGameLuta] = useState<Game[]>([])
  const [gamesRPG, setGameRPG] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setGameAcao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setGameEsportes(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setGameSimulacao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setGameLuta(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setGameRPG(res))
  }, [])
  return (
    <>
      <ProductList games={gamesAcao} title="Ação" background="black" />
      <ProductList games={gameEsportes} title="Esportes" background="gray" />
      <ProductList
        games={gamesSimulacao}
        title="Simulação"
        background="black"
      />
      <ProductList games={gamesLuta} title="Luta" background="gray" />
      <ProductList games={gamesRPG} title="RPG" background="black" />
    </>
  )
}

export default Categories
