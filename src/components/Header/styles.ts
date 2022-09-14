import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  width: ${RFPercentage(100)}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const Logo = styled.Image`
  width: 46px;
  height: 55px;
`
