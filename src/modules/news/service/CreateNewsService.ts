import AppError from '@shared/errors/appError';
import { getCustomRepository } from 'typeorm';
import News from '../typeorm/entities/News';
import { NewsRepository } from '../typeorm/repositories/newsRepository';

interface IRequest {
  hat: string;
  title: string;
  text: string;
  author: string;
  image: string;
  link: string;
  isActive: boolean;
}

export default class CreateNewsService {
  public async execute({
    hat,
    title,
    text,
    author,
    image,
    link,
    isActive,
  }: IRequest): Promise<News> {
    const newsRepository = getCustomRepository(NewsRepository);
    const newsExists = await newsRepository.findByName(hat);

    if (newsExists) {
      throw new AppError('Já existe uma notícia com esse nome');
    }

    const news = newsRepository.create({
      hat,
      title,
      text,
      author,
      image,
      link,
      isActive,
    });

    await newsRepository.save(news);

    return news;
  }
}
