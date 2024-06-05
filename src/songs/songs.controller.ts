import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSOngDTO } from './dto/create-song-dto';

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
    create(@Body() createSongDTO: CreateSOngDTO){
        return this.songsService.create(createSongDTO);
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
