---
to: src/features/<%= h.changeCase.camel(name)  %>/<%= h.changeCase.camel(name) %>.actions.ts
---
<%
 CamelCaseName = h.changeCase.camel(name)
 PascalCaseName = h.changeCase.pascal(name)
 UpperCaseName = h.changeCase.upper(name)
%>
import { createStandardAction } from 'typesafe-actions';

export const sample<%= PascalCaseName %>Action = createStandardAction('SAMPLE_<%= UpperCaseName %>_ACTION')<void>();