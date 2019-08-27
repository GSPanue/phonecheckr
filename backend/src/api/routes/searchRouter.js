import { Router } from 'express';

import { getSearch } from '../controllers';

const searchRouter = Router();

searchRouter.get('/', getSearch);

export default searchRouter;
