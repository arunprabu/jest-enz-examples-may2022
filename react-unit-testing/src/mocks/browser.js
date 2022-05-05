// to describe what API Endpoints should be mocked

import {  setupWorker } from 'msw';
import { handlers } from './handlers';

const worker = setupWorker(
  ...handlers,
);

worker.start();
