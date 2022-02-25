import { DeleteOutlined } from '@ant-design/icons'
import { Avatar, Button, Empty, List, Menu } from 'antd'
import moment from 'moment'
import React from 'react'

function CommentList({ data, onDelete, loading }) {

  return (
    <div
      id="scrollableDiv"
      style={{
        height: 600,
        overflow: 'auto',
        padding: '0 16px',
        border: '1px solid rgba(140, 140, 140, 0.35)',
        background: '#f5f5f5',
      }}
    >
      <List
        dataSource={data}
        loading={loading}
        locale={{
          emptyText: <Empty description="Không có bình luận nào" image={Empty.PRESENTED_IMAGE_SIMPLE} />,
        }}
        renderItem={(item) => (
          <List.Item key={item._id}>
            <List.Item.Meta
              avatar={<Avatar src={item.user.avatarURL} />}
              title={<span>{item.user.fullName}</span>}
              description={moment(item.createdAt).fromNow()}
            />
            <div>{item.message}</div>
            <Button style={{marginLeft: 8}}danger icon={<DeleteOutlined />} size="small" onClick={() => onDelete(item._id)} />
          </List.Item>
        )}
      />
    </div>
  )
}

CommentList.propTypes = {}

export default CommentList
