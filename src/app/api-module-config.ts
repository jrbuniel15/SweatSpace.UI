import { Configuration } from "./configuration";

export class ApiModuleConfig {

  static SetupConfig(): Configuration {
    let config = new Configuration()

    config.basePath = 'https://localhost:5001';

    return config
  }

}
