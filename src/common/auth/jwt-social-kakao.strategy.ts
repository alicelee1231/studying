import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-kakao';
import 'dotenv/config';

@Injectable()
export class JwtKakaoStrategy extends PassportStrategy(Strategy, 'kakaotalk') {
  constructor() {
    super({
      clientID: process.env.KAKAO_CLIENT_ID,
      callbackURL: 'http://localhost:3000/login/kakao',
    });
  }
  validate(_, __, profile) {
    console.log(profile, 'kakaotalk');
    return {
      email: profile._json.kakao_account.email,
      nickname: profile.displayName,
    };
  }
}
