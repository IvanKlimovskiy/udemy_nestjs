import { Body, Controller, HttpCode, Post, Req, Res } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
  @Post('register')
  async register(@Req() req: Request, @Body() dto: AuthDto, @Res() res: Response) {
    const data = req.body;
    return res.json({ data });
  }

  @HttpCode(200)
  @Post('login')
  async login(@Body() dto: AuthDto) {}
}
