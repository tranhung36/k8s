import { Injectable } from '@nestjs/common';
import * as os from 'os';
@Injectable()
export class AppService {
  getHello(): string {
    const helloMessage = `Hello from the ${os.hostname()}`;
    return helloMessage;
  }

  getHi(): string {
    return 'Hi World!';
  }

  async getNginx(): Promise<string> {
    const url = 'http://nginx';
    const response = await fetch(url);

    return response.text();
  }
}
