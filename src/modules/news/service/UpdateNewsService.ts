import AppError from '@shared/errors/appError';
import { getCustomRepository } from 'typeorm';
import News from '../typeorm/entities/News';
import { NewsRepository } from '../typeorm/repositories/newsRepository';

interface IRequest {
  id: string;
  hat: string;
  title: string;
  text: string;
  author: string;
  image: string;
  link: string;
  isActive: boolean;
}

export default class UpdateNewsService {
  public async execute({
    id,
    hat,
    title,
    text,
    author,
    image,
    link,
    isActive,
  }: IRequest): Promise<News> {
    const newsRepository = getCustomRepository(NewsRepository);

    const news = await newsRepository.findOne(id);

    if (!news) {
      throw new AppError('Notícia não encontrada');
    }

    const newsExists = await newsRepository.findByName(hat);

    if (newsExists && hat !== news.hat) {
      throw new AppError('Já existe uma notícia com esse nome');
    }

    news.title = title;
    news.hat = hat;
    news.text = text;
    news.author = author;
    news.image = image;
    news.link = link;
    news.isActive = isActive;

    await newsRepository.save(news);

    return news;
  }
}
