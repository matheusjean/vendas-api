import { Request, response, Response } from 'express';
import CreateProductService from '../service/CreateProductService';
import DeleteProductService from '../service/DeleteProductService';
import ListProductService from '../service/ListProductService';
import ShowProductService from '../service/ShowProductService';
import UpdateProductService from '../service/UpdateProductService';

export default class ProductsController {
  public async index(req: Request, res: Response): Promise<Response> {
    const listProducts = new ListProductService();

    const products = await listProducts.execute();

    return res.json(products);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const showProduct = new ShowProductService();

    const product = await showProduct.execute({ id });

    return res.json(product);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { name, price, quantity } = req.body;

    const createProduct = new CreateProductService();

    const product = await createProduct.execute({
      name,
      price,
      quantity,
    });

    return res.json(product);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { name, price, quantity } = req.body;
    const { id } = req.params;

    const updateProduct = new UpdateProductService();

    const product = await updateProduct.execute({
      id,
      name,
      price,
      quantity,
    });
    return res.json(product);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deleteProduct = new DeleteProductService();

    const product = await deleteProduct.execute({
      id,
    });

    return res.json({
      message: 'Produto deletado com sucesso!',
    });
  }
}
