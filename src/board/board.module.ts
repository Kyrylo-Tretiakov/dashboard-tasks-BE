import { Module } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardController } from './board.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [BoardService, PrismaService],
  controllers: [BoardController]
})
export class BoardModule {}
