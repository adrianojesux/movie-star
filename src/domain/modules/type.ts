export interface ISentryLogger {
  log(message: string): void;
  error(message: string, error: Error | unknown): void;
}
