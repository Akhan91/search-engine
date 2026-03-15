import { Router } from 'express';
import { type Service } from '../types.js';
import { search } from '../services/searchService.js';

export function createSearchRouter(services: Service[]): Router {
  const router = Router();

  router.get('/', (req, res) => {
    const { name, lat: latStr, lng: lngStr } = req.query;

    if (typeof name !== 'string' || name.trim() === '') {
      res.status(400).json({ error: 'Query parameter "name" must be a non-empty string.' });
      return;
    }

    const lat = Number(latStr);
    const lng = Number(lngStr);

    if (!isFinite(lat) || !isFinite(lng)) {
      res.status(400).json({ error: 'Query parameters "lat" and "lng" must be finite numbers.' });
      return;
    }

    res.json(search(services, name.trim(), lat, lng));
  });

  return router;
}
