import * as S from './styles'

interface LoadingProps {
  isLoading: boolean,
  children: JSX.Element
}

export function Loading({isLoading, children}: LoadingProps) {
  return(
    <S.Container>
      {isLoading ? <S.LoadIndicator /> : children}
    </S.Container>
  )
}