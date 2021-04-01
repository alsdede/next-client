import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    //renderizar componente
    //selecionar o elemento a ser testado
    //expect - assertion - comparação

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
})
