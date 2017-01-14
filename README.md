# typescript-template

    npm run dev-server

Runs `ts-node` on `index.ts` and watches for changes. Routes that work are

* [http://localhost:3000/](http://localhost:3000/)
* [http://localhost:3000/hello-world](http://localhost:3000/hello-world)

<!-- markdown fix: codeblock after list -->

    npm run build
    npm run build:watch

Compiles typescript under `src/` and `test/` to javascript under `build/`.

    npm run test
    npm run test:watch

Runs tests from under `test/`.

    npm run lint
    npm run lint:watch

Runs `tslint` on files under `src/` and `test/`.

