import AppError from '@shared/errors/appError';
import { getCustomRepository } from 'typeorm';
import News from '../typeorm/entities/News';
import { NewsRepository } from '../typeorm/repositories/newsRepository';

interface IRequest {
  id: string;
}

export default class ShowNewsService {
  public async execute({ id }: IRequest): Promise<News | undefined> {
    const newsRepository = getCustomRepository(NewsRepository);

    const news = await newsRepository.findOne(id);

    if (!news) {
      throw new AppError('Notícia não encontrada');
    }

    return news;
  }
}
