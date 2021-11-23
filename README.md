A repository showcasing navigation bug in Visual Studio Code
=======
# Angular13Vscode

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.6.

The purpose of the repo is to demonstrate the Angular Language Extensions for Visual Studio code that is tracked [here](https://github.com/angular/vscode-ng-language-service/issues/1574).

In brief the description of the issue:

If a project is setup to use Angular 13 and you have a custom component that defines `@Input` of type `Observable<XX>` the navigation in VSCode to this component does not work. Further, one can not open the component via right click -> Go to definition either.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
