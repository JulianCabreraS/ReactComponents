import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

if (module.hot) {
  module.hot.accept();
}

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Sam"
          timeAgo="Today at 4:45pm"
          content="Nice blog post"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Alex"
          timeAgo="Today at 2:00am"
          content="I like the subject"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Jane"
          timeAgo="Yesterday at 5:00pm"
          content="I like the writing"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
