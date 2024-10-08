import { Module } from '@nestjs/common';
import { ColumnService } from './column.service';
import { ColumnController } from './column.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [ColumnService, PrismaService],
  controllers: [ColumnController]
})
export class ColumnModule {}
