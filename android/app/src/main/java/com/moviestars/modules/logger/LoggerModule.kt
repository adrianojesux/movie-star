package com.moviestars.modules.logger

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.module.annotations.ReactModule
import javax.inject.Inject

class LoggerModule(reactContext: ReactApplicationContext?) :
    ReactContextBaseJavaModule(reactContext) {

    @Inject lateinit var sentryLogger: SentryLogger

    override fun getName(): String = "LoggerModule"

    @ReactMethod
    fun log(message: String) {
        sentryLogger.log(message)
    }

    @ReactMethod
    fun error(message: String, error: Throwable) {
        sentryLogger.error(message, error)
    }

}