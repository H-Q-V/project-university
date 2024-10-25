import { Injectable } from '@nestjs/common';

@Injectable()
export class Helper {
  static random(length: number): string {
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counnter = 0;
    while (counnter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counnter += 1;
    }
    return result;
  }

  static generateOrderCode(): number {
    const timestamp = Date.now().toString();
    const randomNumber = Math.floor(Math.random() * 100);
    const orderCode = timestamp + randomNumber.toString();
    return parseInt(orderCode);
  }
}
