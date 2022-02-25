import { Button, Form, Input, message } from 'antd'
import React from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import CommentList from '../component/CommentList'
import commentAPI from 'api/commentAPI'
import { useRef } from 'react'

function CommentTab({ songId }) {
  const inputRef = useRef(null)

  const queryClient = useQueryClient()

  const { data, isLoading, isError } = useQuery(
    ['comment', songId],
    () =>
      commentAPI.getAll({
        songId,
      }),
    {
      select: (value) => value?.data,
    }
  )

  const { mutate: createComment, isLoading: createLoading } = useMutation((data) => commentAPI.add(data), {
    onSuccess: () => {
      queryClient.invalidateQueries('comment')
    },
  })

  const { mutate: deleteComment, isLoading: deleteLoading } = useMutation((id) => commentAPI.delete(id), {
    onSuccess: () => {
      queryClient.invalidateQueries('comment')
    },
  })

  const handleSubmit = (values) => {
    createComment({
      ...values,
      songId,
    })
    form.resetFields()
    inputRef.current?.focus()
  }

  const handleDelete = (id) => {
    deleteComment(id)
  }

  const [form] = Form.useForm()

  return (
    <div>
      <Form form={form} initialValues={{ message: '' }} onFinish={handleSubmit}>
        <Input.Group size="large" style={{ marginBottom: 10 }} name="message">
          <Form.Item name="message" style={{ width: 'calc(100% - 101px)', display: 'inline-block', marginBottom: 0 }}>
            <Input placeholder="Nhập bình luận..." ref={inputRef}/>
          </Form.Item>
          <Button type="primary" size="large" htmlType="submit">
            Bình luận
          </Button>
        </Input.Group>
      </Form>
      <CommentList data={data} loading={isLoading} onDelete={handleDelete} />
    </div>
  )
}

CommentTab.propTypes = {}

export default CommentTab
