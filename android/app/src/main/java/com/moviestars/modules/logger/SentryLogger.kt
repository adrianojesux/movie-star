package com.moviestars.modules.logger

import java.lang.Exception

interface SentryLogger {
    fun log(message: String)
    fun error(message: String, error: Throwable)
}