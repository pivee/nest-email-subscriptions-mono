import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Inject,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('subscribers')
@UseInterceptors(ClassSerializerInterceptor)
export class SubscribersController {
  constructor(
    @Inject('SUBSCRIBERS_SERVICE')
    private subscribersService: ClientProxy,
  ) {}

  @Get()
  async getSubscribers() {
    return this.subscribersService.send('findAllSubscribers', '');
  }

  @Post()
  async createPost(@Body() subscriber) {
    return this.subscribersService.send('createSubscriber', subscriber);
  }
}
