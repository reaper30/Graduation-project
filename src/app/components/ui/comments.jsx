import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import api from "../../api"
import _ from "lodash"
import CommentsList from "../common/comments/commentList"
import AddCommentForm from "../common/comments/addCommentsForm"

const Comments = () => {
  const { userId } = useParams()
  const [comments, setComments] = useState([])

  const sortedComments = _.orderBy(comments, ["created_at"], ["desc"])

  useEffect(() => {
    api.comments.fetchCommentsForUser(userId).then((data) => setComments(data))
  }, [])
  console.log(comments)

  const handleRemoveComment = (id) => {
    api.comments.remove(id).then((id) => {
      setComments(comments.filter((c) => c._id !== id))
    })
  }

  const handleSubmit = (data) => {
    api.comments
      .add({ ...data, pageId: userId })
      .then((data) => setComments([...comments, data]))
  }

  return (
    <>
      <div className="card mb-2">
        {" "}
        <div className="card-body ">
          <AddCommentForm onSubmit={handleSubmit} />
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-body ">
          <h2>Comments</h2>
          <hr />
          <CommentsList
            comments={sortedComments}
            onRemove={handleRemoveComment}
          />
        </div>
      </div>
    </>
  )
}

export default Comments
