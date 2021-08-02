export enum AppEnvironments {
  Production = 'PRODUCTION',
  Staging = 'STAGING',
  Dev = 'DEV',
  Local = 'LOCAL',
}

export const getAppEnvironment = (): AppEnvironments =>
  // @ts-ignore string to enum
  process.env.APP_ENV || AppEnvironments.Local;

export const isProductionAppEnvironment = () => getAppEnvironment() === AppEnvironments.Production;

export const isNodeEnvProduction = () => process.env.NODE_ENV === 'production';

export const getDevEnvironments = () => [AppEnvironments.Dev, AppEnvironments.Local];
