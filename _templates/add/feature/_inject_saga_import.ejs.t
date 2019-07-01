---
inject: true
to: src/redux/rootSaga.ts
after: from "redux-saga/effects"
skip_if: ../features/<%= h.changeCase.camel(name)  %>/<%= h.changeCase.camel(name)  %>.saga
---
import <%= h.changeCase.camel(name)  %>Saga from "../features/<%= h.changeCase.camel(name)  %>/<%= h.changeCase.camel(name)  %>.saga";