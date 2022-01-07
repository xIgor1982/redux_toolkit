import {Checkbox, Grid, Paper, Typography} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";

const label = {inputProps: {'aria-label': 'Checkbox demo'}};

const TodoItem = ({id, text, completed, toggleTodoComplete, removeTodo}) => {
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
                        {...label}
                        checked={completed}
                        onChange={() => toggleTodoComplete(id)}
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
                        onClick={() => removeTodo(id)}
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