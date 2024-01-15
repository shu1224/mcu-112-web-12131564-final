import { FavoriteButtonComponent } from './../favorite-button/favorite-button.component';
export class Article {
  constructor(initData?: Partial<Article>) {
    Object.assign(this, initData);
  }

  id!: number;

  title!: string;

  content!: string;

  favoriteCount!: number;

  author!: string;

  createDate!: Date;

  tags!: string[];
}
