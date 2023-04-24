import React from 'react'
import { Collapse } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';


const { Panel } = Collapse;

export const TodoItem = ({todo, onDelete}) => {
  const genExtra = () => (
    <DeleteOutlined
      onClick={(event) => {
        // If you don't want click extra trigger collapse, you can prevent this:
        onDelete(todo)
        event.stopPropagation();
      }}
    />
  );
  return (
    // <div>
    //   <h4>{todo.title}</h4>
    //   <p>{todo.desc}</p>
    // </div>
  <Collapse accordion>
    <Panel header={todo.title} extra={genExtra()}>
      <p>{todo.desc}</p>
    </Panel>
  </Collapse>
  )
}
