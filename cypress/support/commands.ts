/// <reference types="cypress" />

import * as commonCommands from './commands/common';
import * as articleCommands from './commands/article';

Cypress.Commands.addAll(commonCommands);
Cypress.Commands.addAll(articleCommands);

export { };
