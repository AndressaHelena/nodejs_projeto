import { Injectable } from '@nestjs/common';

@Injectable()
export class RegisterService {
  async createRegister(name: string, req) {
    return `Cliente ${name} cadastrado com sucesso`;
  }
}
