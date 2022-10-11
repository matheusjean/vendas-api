import AppError from '@shared/errors/appError';
import { getCustomRepository } from 'typeorm';
import { NewsRepository } from '../typeorm/repositories/newsRepository';

interface IRequest {
  id: string;
}

export default class DeleteNewsService {
  public async execute({ id }: IRequest): Promise<void> {
    const newsRepository = getCustomRepository(NewsRepository);

    const news = await newsRepository.findOne(id);

    if (!news) {
      throw new AppError('Notícia não encontrada');
    }

    await newsRepository.remove(news);
  }
}
