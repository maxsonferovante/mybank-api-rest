import { Router } from 'express';
import { createAccountController } from '../userCases/CreateAccount/';
import { getAccountController } from '../userCases/GetAccount/';

const accountRoutes = Router();

accountRoutes.post('/account/create', (request, response) => {
    return createAccountController.handle(request, response);
});

accountRoutes.get('/account/:id', (request, response) => {
    return getAccountController.handle(request, response);
});

export { accountRoutes };