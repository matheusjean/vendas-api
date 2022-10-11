import { EntityRepository, Repository } from 'typeorm';
import News from '../entities/News';

@EntityRepository(News)
export class NewsRepository extends Repository<News> {
  public async findByName(hat: string): Promise<News | undefined> {
    const news = this.findOne({
      where: {
        hat,
      },
    });
    return news;
  }
}
