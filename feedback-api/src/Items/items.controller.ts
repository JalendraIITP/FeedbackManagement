import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './items.service';
@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) { }

    @Get()
    findAll(): Item[] {
        return this.itemsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.itemsService.findOne(+id);
    }

    @Post()
    create(@Body() createItemDto: { id: number; name: string; feedback: string; CreatedAt: Date }) {
        this.itemsService.create(createItemDto);
    }
}
