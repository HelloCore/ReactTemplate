---
sh: cd <%= cwd %> && yarn prettier-eslint --write src/redux/rootSaga.ts src/redux/rootReducer.ts src/features/<%= h.changeCase.camel(name)  %>/*
---