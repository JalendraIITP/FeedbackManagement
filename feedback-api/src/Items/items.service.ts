import { Injectable } from '@nestjs/common';
export interface Item {
    id: number;
    name: string;
    feedback: string;
    CreatedAt: Date;
}

@Injectable()
export class ItemsService {
    private readonly items: Item[] = [];

    findAll(): Item[] {
        return this.items;
    }

    findOne(id: number): Item {
        return this.items.find(item => item.id === id);
    }

    create(item: Item) {
        this.items.push(item);
    }
}
