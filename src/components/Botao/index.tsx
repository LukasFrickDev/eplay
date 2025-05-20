import * as S from './styles'

export type Props = {
  type: 'button' | 'link' // tipo de dado
  title: string // titulo do dado
  to?: string // caminho
  onClick?: () => void // isso permite o recebeimneto de uma função que nao tem argumento e devolver nada
  children: string // texto do botao
  variant?: 'primary' | 'secondary'
}

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  variant = 'primary'
}: Props) => {
  if (type === 'button') {
    return (
      <S.ButtonContainer
        type="button"
        title={title}
        onClick={onClick}
        variant={variant}
      >
        {children}
      </S.ButtonContainer>
    )
  }

  return (
    <S.ButtonLink to={to as string} title={title}>
      {children}
    </S.ButtonLink>
  )
}

export default Button
