import {Checkbox, Grid, Paper, Typography} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import {useDispatch} from "react-redux";
import {removeTodo, toggleTodoComplete} from "../store/todoSlice";

const TodoItem = ({id, text, completed}) => {
    const dispatch = useDispatch()

    return (
        <Paper elevation={3} key={id} sx={{width: 450, margin: '10px auto'}}>
            <Grid
                container
                alignItems='center'
                sx={{margin: '0 auto'}}
            >
                <Grid
                    item xs={2}
                >
                    <Checkbox
                        checked={completed}
                        onChange={() => dispatch(toggleTodoComplete({id}))}
                        className='checkbox_on'
                    />
                </Grid>
                <Grid
                    item
                    xs={8}
                >
                    <Typography
                        variant="h6"
                        gutterBottom
                        component="span"
                        className={completed ? 'checkbox_on' : ''}
                    >
                        {text}
                    </Typography>
                </Grid>
                <Grid
                    item xs={2}
                >
                    <IconButton
                        aria-label="Clear"
                        size="small"
                        onClick={() => dispatch(removeTodo({id}))}
                    >
                        <ClearIcon
                            fontSize="small"
                            color='primary'
                        />
                    </IconButton>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default TodoItem