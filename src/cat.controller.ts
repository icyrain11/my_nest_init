import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatController {
  @Get()
  findAll(): String {
    return 'this is a cat';
  }
}
