---
sh: cd <%= cwd %> && yarn eslint --fix src/components/<%= h.changeCase.camel(group)  %>/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.tsx src/components/<%= h.changeCase.camel(group) %>/<%= h.changeCase.pascal(name) %>/__stories__/<%= h.changeCase.pascal(name) %>.story.tsx src/components/<%= h.changeCase.camel(group)  %>/<%= h.changeCase.pascal(name) %>/index.ts
---