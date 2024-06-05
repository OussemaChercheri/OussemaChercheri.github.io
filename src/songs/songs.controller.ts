import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
    constructor(private songsService: SongsService) {}

    @Get()
    findAll(){
        return this.songsService.findAll();
    }

    @Get(':id')
    findOne(){
        return 'find one song'
    }

    @Post()
    create(){
        return this.songsService.create('Animals by Martin Garrix');
    }

    @Patch(':id')
    update(){
        return 'update song'
    }

    @Delete(':id')
    remove(){
        return 'remove song'
    }
}
