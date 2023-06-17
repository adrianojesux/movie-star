package com.moviestars.modules.logger.di

import com.moviestars.modules.logger.SentryLogger
import com.moviestars.modules.logger.SentryLoggerImpl
import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.components.SingletonComponent
import javax.inject.Singleton

@Module
@InstallIn(SingletonComponent::class)
object SentryLoggerModule  {

    @Provides
    @Singleton
    fun provideLogger(logger: SentryLogger): SentryLogger = SentryLoggerImpl()
}