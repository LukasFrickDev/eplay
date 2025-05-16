import Banner from '../../components/Banner'
import ProductList from '../../components/ProductList'
import Game from '../../models/Game'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import star_wars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  // o :Game[] foi incluido apenas para ajudar no autocomplete das arrays
  {
    id: 1,
    category: 'Ação',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime accusantium neque quo officiis qui magnam velit similique dolorem, quaerat iure, reprehenderit rerum rem? Quam libero dignissimos, accusantium nesciunt aliquam repellat!',
    system: 'Windows',
    title: 'Resident Evil 4',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime accusantium neque quo officiis qui magnam velit similique dolorem, quaerat iure, reprehenderit rerum rem? Quam libero dignissimos, accusantium nesciunt aliquam repellat!',
    system: 'Windows',
    title: 'Diablo',
    infos: ['5%', 'R$ 290,00'],
    image: diablo
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime accusantium neque quo officiis qui magnam velit similique dolorem, quaerat iure, reprehenderit rerum rem? Quam libero dignissimos, accusantium nesciunt aliquam repellat!',
    system: 'Windows',
    title: 'Zelda',
    infos: ['10%', 'R$ 250,00'],
    image: zelda
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime accusantium neque quo officiis qui magnam velit similique dolorem, quaerat iure, reprehenderit rerum rem? Quam libero dignissimos, accusantium nesciunt aliquam repellat!',
    system: 'Windows',
    title: 'Star Wars',
    infos: ['10%', 'R$ 250,00'],
    image: star_wars
  }
]

const emBreve: Game[] = [
  // o :Game[] foi incluido apenas para ajudar no autocomplete das arrays
  {
    id: 5,
    category: 'Ação',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime accusantium neque quo officiis qui magnam velit similique dolorem, quaerat iure, reprehenderit rerum rem? Quam libero dignissimos, accusantium nesciunt aliquam repellat!',
    system: 'Windows',
    title: 'Resident Evil 4',
    infos: ['17/05'],
    image: resident
  },
  {
    id: 6,
    category: 'RPG',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime accusantium neque quo officiis qui magnam velit similique dolorem, quaerat iure, reprehenderit rerum rem? Quam libero dignissimos, accusantium nesciunt aliquam repellat!',
    system: 'Windows',
    title: 'Diablo',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 7,
    category: 'Ação',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime accusantium neque quo officiis qui magnam velit similique dolorem, quaerat iure, reprehenderit rerum rem? Quam libero dignissimos, accusantium nesciunt aliquam repellat!',
    system: 'Windows',
    title: 'Zelda',
    infos: ['18/05'],
    image: zelda
  },
  {
    id: 8,
    category: 'Ação',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime accusantium neque quo officiis qui magnam velit similique dolorem, quaerat iure, reprehenderit rerum rem? Quam libero dignissimos, accusantium nesciunt aliquam repellat!',
    system: 'Windows',
    title: 'Star Wars',
    infos: ['18/05'],
    image: star_wars
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductList games={promocoes} title="Promoções" background="gray" />
    <ProductList games={emBreve} title="Em Breve" background="black" />
  </>
)

export default Home
