import React from "react";

const Page = props => {
  

  const id = props.match.params.id;


  return (
    <div class="container mt-4">
      <h4>id is: {id}</h4>
      <p>Try <a href="/page?id=123">/page?id=123</a> which should work</p>
      <p>Try <a href="/page/123">/page/123</a> which should does not work</p>
      <p><a href="https://route-app.iwanether.now.sh/_src" target="_blank">Now public _src</a></p>



    </div>
  );
};

export default Page;
