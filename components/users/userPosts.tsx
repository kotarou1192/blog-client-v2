import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen } from "@fortawesome/free-solid-svg-icons"
import { Button, Grid } from "@mui/material"
import React from "react"
import { useGetAPI } from "@/lib/hooks/useApi"
import { SmallPostItemCard } from "@/components/postItems/SmallPostItemCard"
import Link from "next/link"
import { useRouter } from "next/router"

type PostsProps = {
  name: string
  is_my_page: boolean
}

export const UserPosts: React.FC<{ data: PostsProps }> = (props) => {
  const name = props.data.name
  const router = useRouter()

  const links: undefined | any[] = useGetAPI(
    "/users/" + name + "/" + "posts" //selected
  )

  if (!links) return <div></div>

  const linkComponents = links.map((post: any, index) => {
    return (
      <SmallPostItemCard
        key={index}
        userName={post.user_name}
        avatarURL={post.user_avatar}
        postID={post.id}
        title={post.title}
        categories={post.categories}
        body={post.body}
        created_at={post.created_at}
      />
    )
  })

  return (
    <div style={{ height: "70vh" }}>
      {props.data.is_my_page ? (
        <div style={{ textAlign: "center", height: "10vh" }}>
          <Link href={"/users/" + name + "/posts/new"}>
            <Button
              startIcon={<FontAwesomeIcon icon={faPen} />}
              component="span"
              variant="outlined"
              sx={{ mt: "5px", mb: "5px" }}
            >
              新規投稿
            </Button>
          </Link>
        </div>
      ) : (
        <div style={{ height: "10vh" }}></div>
      )}
      <Grid
        container
        spacing={2}
        sx={{
          overflowY: "scroll",
          mr: "2px",
          borderRadius: "4px",
          scrollbarWidth: "none",
          border: "inherit 1",
          boxShadow: "0px 0px 1px 0px gray",
          height: "60vh"
        }}
      >
        {linkComponents}
      </Grid>
    </div>
  )
}
