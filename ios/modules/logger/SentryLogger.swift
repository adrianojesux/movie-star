//
//  SentryLogger.swift
//  moviestars
//
//  Created by Adriano Jesus on 19/06/23.
//

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
