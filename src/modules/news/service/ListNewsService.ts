import { getCustomRepository } from 'typeorm';
import News from '../typeorm/entities/News';
import { NewsRepository } from '../typeorm/repositories/newsRepository';

export default class ListNewsService {
  public async execute(): Promise<News[]> {
    const newsRepository = getCustomRepository(NewsRepository);

    const news = await newsRepository.find({});

    return news;
  }
}
