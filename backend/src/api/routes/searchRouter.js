import { Router } from 'express';

import { getSearch } from '../controllers/searchController';

const searchRouter = Router();

searchRouter.get('/', getSearch);

export default searchRouter;
