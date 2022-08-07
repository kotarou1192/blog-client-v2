import { Grid } from "@mui/material"
import React from "react"
import { UserProps } from "@/@types/global"
import { useGetAPI } from "@/lib/hooks/useApi"
import { Info } from "@/components/users/info"
import { UserPosts } from "@/components/users/userPosts"
import { UserCard } from "@/components/users/userCard"
import { useRouter } from "next/router"

type UserPageProps = {
  match: {
    params: UserProps
  }
}

const UserPage: React.FC<UserPageProps> = (props) => {
  const router = useRouter()
  const name = router.query.name

  const userData: undefined | UserProps = useGetAPI("/users/" + name)

  if (!userData) return <div></div>
  return (
    <Grid container padding={10} spacing={2} sx={{ pt: 3 }}>
      <Grid item xs={4}>
        <UserCard data={userData} />
      </Grid>
      <Grid item xs={8}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Info />
          </Grid>
          <Grid item xs={12}>
            <UserPosts data={userData} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default UserPage
