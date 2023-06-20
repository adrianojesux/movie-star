//
//  LoggerBridgingHeader.m
//  moviestars
//
//  Created by Adriano Jesus on 19/06/23.
//

#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(LoggerModule, NSObject)

RCT_EXTERN_METHOD(log: (NSString *)message)

RCT_EXTERN_METHOD(error: (NSString *)message erro:(NSError *)error)

+ (BOOL) requiresMainQueueSetup {
  return  false;
}
  
@end
