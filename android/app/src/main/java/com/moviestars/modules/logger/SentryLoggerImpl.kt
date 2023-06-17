package com.moviestars.modules.logger

import io.sentry.Sentry
import io.sentry.SentryLevel

class SentryLoggerImpl: SentryLogger {
    override fun log(message: String) {
        Sentry.setLevel(SentryLevel.DEBUG)
        Sentry.captureMessage(message)
    }

    override fun error(message: String, error: Throwable) {
        Sentry.setLevel(SentryLevel.ERROR)
        Sentry.captureException(error, )
    }


}