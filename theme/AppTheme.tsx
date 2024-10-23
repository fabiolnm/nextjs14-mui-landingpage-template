'use client'

import { createTheme, ThemeProvider } from '@mui/material/styles'

import { dataDisplayCustomizations } from './customizations/dataDisplay'
import { feedbackCustomizations } from './customizations/feedback'
import { inputsCustomizations } from './customizations/inputs'
import { navigationCustomizations } from './customizations/navigation'
import { surfacesCustomizations } from './customizations/surfaces'
import {
  colorSchemes, shadows, shape, typography,
} from './themePrimitives'

interface AppThemeProps {
  children: React.ReactNode;
}

export default function AppTheme({ children }: AppThemeProps) {
  const theme = createTheme({
    // For more details about CSS variables configuration, see https://mui.com/material-ui/customization/css-theme-variables/configuration/
    cssVariables: {
      colorSchemeSelector: 'data-mui-color-scheme',
      cssVarPrefix: 'template',
    },
    colorSchemes, // Recently added in v6 for building light & dark mode app, see https://mui.com/material-ui/customization/palette/#color-schemes
    typography,
    shadows,
    shape,
    components: {
      ...inputsCustomizations,
      ...dataDisplayCustomizations,
      ...feedbackCustomizations,
      ...navigationCustomizations,
      ...surfacesCustomizations,
    },
  })

  return (
    <ThemeProvider theme={theme} disableTransitionOnChange>
      {children}
    </ThemeProvider>
  )
}