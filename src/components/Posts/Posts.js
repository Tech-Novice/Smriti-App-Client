import React from 'react';
import Post from './Post/Post.js';
import useStyles from './styles';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

const Posts = () => {

    const posts = useSelector((state) => state.posts);
    console.log("post data ===", posts);
    const classes = useStyles();
    
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.mainContainer} container alignItems='stretch' spacing={3}>
                {
                    posts.map((post, index) => (
                        <Grid item key={posts._id} xs={12} sm={6}>
                            <Post post={post} />
                        </Grid>
                    ))
                }
            </Grid>
        )
    );
}

export default Posts;