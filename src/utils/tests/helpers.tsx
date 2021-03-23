import { ThemeProvider } from 'styled-components'
import { render, RenderResult } from '@testing-library/react'

import theme from 'styles/theme'

export const rendetWithTheme = (children: React.ReactNode): RenderResult =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)
