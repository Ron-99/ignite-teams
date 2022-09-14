import * as S from './styles'
import { CaretLeft } from 'phosphor-react-native';
import logoImg from '@assets/logo.png'

export function Header(){
  return (
    <S.Container>
      <CaretLeft />
      <S.Logo source={logoImg}/>
    </S.Container>
  )
}