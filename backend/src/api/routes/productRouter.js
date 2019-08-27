import { Router } from 'express';

import { getProduct } from '../controllers';

const productRouter = Router();

productRouter.get('/', getProduct);

export default productRouter;
