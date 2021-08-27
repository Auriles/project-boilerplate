import { ThemeProvider } from 'styled-components';

import theme from "../base/Typography";
import GlobalStyles from '../base/Base';

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
    </ThemeProvider>
);

export default Theme;