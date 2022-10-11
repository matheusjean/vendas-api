import { Request, Response } from 'express';
import CreateNewsService from '../service/CreateNewsService';
import DeleteNewsService from '../service/DeleteNewsService';
import ListNewsService from '../service/ListNewsService';
import ShowNewsService from '../service/ShowNewsService';
import UpdateNewsService from '../service/UpdateNewsService';

export default class NewsController {
  public async index(req: Request, res: Response): Promise<Response> {
    const listNews = new ListNewsService();

    const news = await listNews.execute();

    return res.json(news);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const showNews = new ShowNewsService();

    const news = await showNews.execute({ id });

    return res.json(news);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { hat, title, text, author, image, link, isActive } = req.body;

    const createNews = new CreateNewsService();

    const news = await createNews.execute({
      hat,
      title,
      text,
      author,
      image,
      link,
      isActive,
    });

    return res.json(news);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { hat, title, text, author, image, link, isActive } = req.body;
    const { id } = req.params;

    const updateNews = new UpdateNewsService();

    const news = await updateNews.execute({
      id,
      hat,
      title,
      text,
      author,
      image,
      link,
      isActive,
    });
    return res.json(news);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deleteNews = new DeleteNewsService();

    const news = await deleteNews.execute({
      id,
    });

    return res.json({
      message: 'Notícia deletada com sucesso!',
    });
  }
}
