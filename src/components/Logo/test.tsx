import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import 'jest-styled-components'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    //renderizar componente
    //selecionar o elemento a ser testado
    //expect - assertion - comparação
    //parentElement seleciona o pai do elemento
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })
  it('should render a black label when color is passed', () => {
    //renderizar componente
    //selecionar o elemento a ser testado
    //expect - assertion - comparação

    renderWithTheme(<Logo color="black" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })
  it('should render a normal logo when size is default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '11rem'
    })
  })
  it('should render a bigger logo', () => {
    //renderizar componente
    //selecionar o elemento a ser testado
    //expect - assertion - comparação

    renderWithTheme(<Logo size="large" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })

  it('should render a bigger logo without text if hideOnMobile', () => {
    renderWithTheme(<Logo hideOnMobile />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      {
        media: '(max-width: 768px)'
      }
    )
  })
})
