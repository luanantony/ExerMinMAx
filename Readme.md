# Aplicativo MaxMin React Native

📱 Este é um aplicativo simples em React Native que exibe se um conjunto de dois valores `x` e `y` são iguais ou qual deles é maior. Ele utiliza componentes React Native e estilos básicos.

## Instalação

Para executar este aplicativo, certifique-se de ter o [Node.js](https://nodejs.org/), o [Expo CLI](https://docs.expo.dev/get-started/installation/) e o [React Native](https://reactnative.dev/docs/environment-setup) configurados em seu ambiente de desenvolvimento.

1. Clone este repositório em sua máquina local:

   ```bash
   git clone <repository-url>
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd maxmin-react-native
   ```

3. Instale as dependências do projeto:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   expo start
   ```

5. Use o aplicativo Expo Go em seu dispositivo móvel para escanear o código QR do Metro Bundler que é aberto em seu navegador.

## Uso

O aplicativo consiste em uma tela simples que exibe duas instâncias do componente `MaxMin`, cada uma com valores diferentes para `x` e `y`. Ele exibirá se `x` é maior que `y`, se `y` é maior que `x` ou se eles são iguais.

## Componentes

### Componente MaxMin

O componente `MaxMin` é responsável por determinar se `x` é maior que `y`, se `y` é maior que `x` ou se eles são iguais, e exibe o resultado em um componente de texto estilizado.

### Componente App

O componente `App` é o ponto de entrada principal do aplicativo. Ele renderiza duas instâncias do componente `MaxMin` com valores diferentes para `x` e `y`.

## Estilização

A estilização é aplicada usando o módulo StyleSheet do React Native, com os seguintes estilos:

- O texto no componente `MaxMin` é estilizado com um tamanho de fonte de 24 e uma cor de texto amarelo claro.
- O contêiner do componente `App` possui um layout flexível, um fundo cinza e está centralizado tanto na horizontal quanto na vertical.

