## Movie Stars

App escrito em React Natie para listagem de filmes e criação de lista de favoritos.

### Store

- **Zustand**: Utilizei como ferramenta de armazendo local de dados do app. No momento utilizado para criar a lista de filmes favorites. Os dados são armazenados em forma JSON e persistidos no AsynStorage (SQLite)

- **React Query**: Gerenciar de estado que está sendo utilizado no app para armazenar os dados provenientes da api.

### Integrations

- **Analytics**: Integração com o Amplitude para uso da ferramente de Analitics

- **Sentry**: Integração com [Sentry](sentry.io) para para fazer captura de logs e erros do app. Integração foi feita na camada nativa do app para possibilitar a uso em possível módulos nativos que possam ser integrados no app.

### Native Modules

- **LoggerModule**: Modulo nativo para fazer a captura de Logs e envia-los para o Sentry.
  **Android**: Modulo foi escrito em Kotlin, utilizando o Hilt e Dagger para fazer a injeção de denpendência dentro do projeto Android. Faz a integração com o SDK Android do Sentry para fazer o envio do logs e erros capturados.
  **iOS**: Modulo nativo escrito em Swift, faz a integração com a versão iOS do SDK do Sentry para fazer o envio de logs e erros capturados.

### Links úteis

- [Zustand](https://github.com/pmndrs/zustand)
- [ReactQuery](https://tanstack.com/)
- [Sentry - iOS](https://docs.sentry.io/platforms/apple/guides/ios/)
- [Sentry - Android](https://docs.sentry.io/platforms/android/)
- [Amplitude](https://www.docs.developers.amplitude.com/data/sdks/typescript-react-native/)
- [The Movie DB](https://developer.themoviedb.org/)
