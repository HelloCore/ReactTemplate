---
inject: true
to: src/redux/rootReducer.ts
after: from "redux"
skip_if: ../features/<%= h.changeCase.camel(name)  %>/<%= h.changeCase.camel(name)  %>.reducer
---
import <%= h.changeCase.camel(name)  %>Reducer from "../features/<%= h.changeCase.camel(name)  %>/<%= h.changeCase.camel(name)  %>.reducer";