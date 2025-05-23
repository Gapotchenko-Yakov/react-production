/// <reference types="cypress" />

import { login } from './commands/common';

Cypress.Commands.add('login', login);

export { };
