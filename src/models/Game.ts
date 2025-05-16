class Game {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  id: number // incluimos esse dado aqui já pensando que ele vem la do backend

  constructor(
    id: number,
    title: string,
    category: string,
    system: string,
    description: string,
    infos: string[],
    image: string
  ) {
    this.title = title
    this.category = category
    this.system = system
    this.description = description
    this.infos = infos
    this.image = image
    this.id = id
  }
}

export default Game

// aqui estamos criando um tipo que represente um produto entao com tudo que um produto tem. Para isso usamos models
