package com.moviestars.modules.logger

import android.util.Log
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import javax.inject.Inject

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