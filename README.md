# react-gravizo

[![npm package][npm-badge]][npm]

Generates Graphviz schemas from source code with [gravizo.com](http://gravizo.com/)

This renders static images, generated via gravizo.com

Demo : http://revolunet.github.io/react-gravizo

## Usage

```js
const Gravizo = require('react-gravizo');

const uml=`
@startuml;
(*) -->[bookeo payment] "webhook endpoint";

--> if "Client.getList(email) exist" then;
-->[true] "create document";
else;
->[false] "Client.create";
--> "create document";
endif;

--> if "Document.getList(bookeoref) exist" then;
-->[true] "SKIP (duplicate)";
else;
-->[false] "Document.create(bookeoref)";
--> "set bookeoref with CustomFields.recordValues";
--> "mark invoice as paid with Document.updateStep";
--> "add payment info with Payments.create";
endif;

@enduml
`

const Demo = () => <Gravizo uml={uml} width={400}/>
```

See also [demo](http://revolunet.github.io/react-gravizo)

[npm-badge]: https://img.shields.io/npm/v/react-gravizo.png?style=flat-square
[npm]: https://www.npmjs.org/package/react-gravizo

