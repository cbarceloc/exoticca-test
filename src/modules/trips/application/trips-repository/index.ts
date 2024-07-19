export * from './queries/useGetTripsQuery';
import { createRepositoryProviderAndHook } from 'src/shared/lib/context/RepositoryContext';
import { TripsRepository } from '../../domain/Trips.Repository';

// Trips repository
export const [TripsRepositoryProvider, useTripsRepository] =
  createRepositoryProviderAndHook<TripsRepository>('TripsRepository');
