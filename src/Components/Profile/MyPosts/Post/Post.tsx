import React from "react";
import userDef from "../../../../DefaultItems/Img/userDef.png"
import {Avatar, Checkbox, Grid, Paper, Typography} from "@mui/material";
import {Favorite, FavoriteBorder} from "@mui/icons-material";

type PostPropsType = {
    message: string
    likeCount: number
}

export const Post = (props: PostPropsType) => {
    return (
        <Paper elevation={3}
               sx={{mt: "10px"}}
        >
            <Grid container
                  sx={{
                      padding: "15px",
                      width: '500px'
                  }}
            >
                <Grid item>
                    <Avatar src={userDef}
                            alt="avatar"
                            sx={{ height: '60px', width: '60px' }}
                    />
                </Grid>
                <Grid item>
                        <Typography variant={"body1"}
                                    sx={{ml: "15px"}}
                        >
                            NAME
                        </Typography>

                        <Typography variant={"body1"}
                                    sx={{ml: "15px"}}
                        >
                            {props.message}
                        </Typography>
                </Grid>

                <Grid container
                      sx={{
                          position: "relative",
                          left: "-15px",
                          top: "18px"
                      }}
                >
                    <Checkbox icon={<FavoriteBorder/>}
                              checkedIcon={<Favorite/>}
                              sx={{
                                  color: "gray",
                                  "&.Mui-checked": {
                                      color: "red"
                                  }
                              }}
                    />
                    <Typography sx={{
                        position: "relative",
                        left: "-8px",
                        top: "8px"
                    }}>
                        {props.likeCount}
                    </Typography>

                </Grid>
            </Grid>
        </Paper>

    )
}

