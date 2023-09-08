import { Router } from 'express';
import { createAccountController } from '../userCases/CreateAccount/';
import { getAccountController } from '../userCases/GetAccount/';
import { deleteAccountController } from '../userCases/DeleteAccount/';

import { createUserController } from '../userCases/CreateUser';
import { getUserController } from '../userCases/GetUser';
import { deleteUserController } from '../userCases/DeleteUser';


import { depositController } from '../userCases/Deposit';
import { withdrawController } from '../userCases/Withdraw';
import { transferController } from '../userCases/Transfer';

const accountRoutes = Router();

accountRoutes.post('/account/create', (request, response) => {
    return createAccountController.handle(request, response);
});


accountRoutes.get('/account/:id', (request, response) => {
    return getAccountController.handle(request, response);
});


accountRoutes.delete('/account/:id', (request, response) => {
    return deleteAccountController.handle(request, response);
});

accountRoutes.get('/account', (request, response) => {
    return getAccountController.handleList(request, response);
});

accountRoutes.post('/user/create', (request, response) => {
    return createUserController.handle(request, response);
});


accountRoutes.get('/user/:id', (request, response) => {
    return getUserController.handle(request, response);
});


accountRoutes.get('/user', (request, response) => {
    return getUserController.handleList(request, response);
});



accountRoutes.delete('/user/:id', (request, response) => {
    return deleteUserController.handle(request, response);
});


accountRoutes.post('/deposit', (request, response) => {
    return depositController.handle(request, response);
});

accountRoutes.post('/withdraw', (request, response) => {
    return withdrawController.handle(request, response);
});


accountRoutes.post('/transfer', (request, response) => {
    return transferController.handle(request, response);

});




export { accountRoutes };