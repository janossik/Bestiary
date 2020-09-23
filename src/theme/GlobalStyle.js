import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,*::after,*::before {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    
}

h1{
    font-size:${({ theme }) => theme.size.xll};
    font-weight: ${({ weight, theme }) =>
      weight ? theme.weight[weight] : theme.weight.black};
      margin-top:0;
      margin-bottom: 27px;
}
h2{
    font-size:${({ theme }) => theme.size.xl};
    font-weight: ${({ weight, theme }) =>
      weight ? theme.weight[weight] : theme.weight.bold};
      margin-top:0;
      margin-bottom: 18px;
}
h3{
    font-size:${({ theme }) => theme.size.l};
    font-weight: ${({ weight, theme }) =>
      weight ? theme.weight[weight] : theme.weight.bold};
      margin-top:0;
      margin-bottom: 18px;
}
h4{
    font-size:${({ theme }) => theme.size.m};
    font-weight: ${({ weight, theme }) =>
      weight ? theme.weight[weight] : theme.weight.bold};
      margin-top:0;
      margin-bottom: 12px;
}
h5{
    font-size:${({ theme }) => theme.size.s};
    font-weight: ${({ weight, theme }) =>
      weight ? theme.weight[weight] : theme.weight.bold};
      margin-top:0;
      margin-bottom: 8px;
}
h6{
    font-size:${({ theme }) => theme.size.s};
    font-weight: ${({ weight, theme }) =>
      weight ? theme.weight[weight] : theme.weight.regular};
      margin-top:0;
      margin-bottom: 8px;
}

body{
    margin:0;
    padding:0;
    color:${({ theme }) => theme.color.text}
}
`;

export default GlobalStyle;
