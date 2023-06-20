//
//  LoggerModule.swift
//  moviestars
//
//  Created by Adriano Jesus on 19/06/23.
//

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
