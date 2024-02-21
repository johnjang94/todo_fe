import React from "react";
import { Col, Row } from "react-bootstrap";

const TodoItem = ({ item, updateTask }) => {
  const handleUpdateClick = async () => {
    updateTask(item.id);
  };
  return (
    <Row>
      <Col xs={12}>
        <div className={`todo-item`}>
          <div className="todo-content">{item.task}</div>

          <div>
            <button className="button-delete" onClick={handleUpdateClick}>
              수정
            </button>
            <button className="button-delete">끝남</button>
            <button className="button-delete">삭제</button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default TodoItem;
