import { type Service, type SearchResponse } from '../types.js';
import { score } from '../utils/scoring.js';
import { haversineMeters, formatDistance } from '../utils/distance.js';

const SCORE_THRESHOLD = 4; // anything with a score greater than 4 is filtered out as "not close enough" to the search.

export function search(services: Service[], name: string, lat: number, lng: number): SearchResponse {
  const results = services
    .map((service) => ({
      id: service.id,
      name: service.name,
      position: service.position,
      distance: formatDistance(haversineMeters(lat, lng, service.position.lat, service.position.lng)),
      score: score(name, service.name),
    }))
    .filter((r) => r.score <= SCORE_THRESHOLD)
    .sort((a, b) => a.score - b.score);

  return {
    totalHits: results.length,
    totalDocuments: services.length,
    results,
  };
}
