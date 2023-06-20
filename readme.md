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

```js
export const Logger = {
  log: (...args: any) => {
    if (__DEV__) {
      console.log(...args);
    }
    LoggerModule.log(JSON.stringify(args));
  },

  error: (...args: any) => {
    if (__DEV__) {
      console.error(...args);
    }
    LoggerModule.error('ERROR ::', args);
  },
};
```

**Android**: Modulo foi escrito em Kotlin, utilizando o Hilt e Dagger para fazer a injeção de denpendência dentro do projeto Android. Faz a integração com o SDK Android do Sentry para fazer o envio do logs e erros capturados.

Implementação:

```kotlin
class SentryLoggerImpl: SentryLogger {
  override fun log(message: String) {
      Sentry.setLevel(SentryLevel.DEBUG)
      Sentry.captureMessage(message)
  }

  override fun error(message: String, error: Throwable) {
      Sentry.setLevel(SentryLevel.ERROR)
      Sentry.captureMessage(message)
      Sentry.captureException(error)
  }
}
```

Bridge Module:

```kt
class LoggerModule(reactContext: ReactApplicationContext?) :
    ReactContextBaseJavaModule(reactContext)  {

    var TAG = "LoggerModule"

    @Inject lateinit var sentryLogger: SentryLogger

    override fun getName(): String = "LoggerModule"

    @ReactMethod
    fun log(message: String) {
        Log.d(TAG, message);
        sentryLogger.log(message)
    }

    @ReactMethod
    fun error(message: String, error: Throwable) {
        Log.d(TAG, message, error);
        sentryLogger.error(message, error)
    }
}
```

**iOS**: Modulo nativo escrito em Swift, faz a integração com a versão iOS do SDK do Sentry para fazer o envio de logs e erros capturados.

Implementação:

```swift
import Foundation
import Sentry

class SentryLogger {
  func log(message: String) {
    SentrySDK.capture(message: message)
  }

  func error(message: String, error: Error) {
    SentrySDK.capture(message: message)
    SentrySDK.capture(error: error)
  }
}
```

Bridge Module:

```swift
import Foundation

@objc(LoggerModule)
class LoggerModule: NSObject {

  let sentryLogger = SentryLogger();

  @objc(log:)
  func log(_ message: String) {
    self.sentryLogger.log(message: message)
  }

  @objc(error:error:)
  func error(_ message: String, error: Error) {
    self.sentryLogger.error(message: message, error: error)
  }
}
```

- **Análise de cenário**:
  Caso houvesse a nescessidade da criação de features escritas na camada nativa do app, partiriamos para um abordagem diferente, transformando essa e outras implementaçãoes em módulos do Android e Package do Swift ([Swift Package](https://developer.apple.com/documentation/xcode/swift-packages)), armazenado em repositório distintos tornand-os assim portáveis e reutilizáveis em qualquer camada do app.
  Para o iOS o Swift Package possibilita a utilização do Github deretamente dispensando a utilização de um Artifactory próprio para distribuir o pacote.
  No Android, para seguir a linha do não uso de Artfactory, usaría o [Git Submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules) para para importar os pacotes direto do repositório para a paste do projeto, ficando versionandos com base em Git Tags.
  Esse modelo possibilitaria também o uso do [JetPack Compose](https://developer.android.com/jetpack/compose?hl=pt-br) e o do [SwiftUI](https://developer.apple.com/xcode/swiftui/) para criação de telas nativas do app, sem que causasse grandes conflitos dentro do app principal.

### Links úteis

- [Zustand](https://github.com/pmndrs/zustand)
- [ReactQuery](https://tanstack.com/)
- [Sentry - iOS](https://docs.sentry.io/platforms/apple/guides/ios/)
- [Sentry - Android](https://docs.sentry.io/platforms/android/)
- [Amplitude](https://www.docs.developers.amplitude.com/data/sdks/typescript-react-native/)
- [The Movie DB](https://developer.themoviedb.org/)
