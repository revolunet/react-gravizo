import React, {Component} from 'react'
import {render} from 'react-dom'
import GithubCorner from 'react-github-corner';

import Gravizo from '../../src'

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

class Demo extends Component {
  render() {
    return <div>
      <h1>react-gravizo Demo</h1>
      <GithubCorner href="https://github.com/revolunet/react-gravizo" />
      <Gravizo uml={uml} width={400}/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
