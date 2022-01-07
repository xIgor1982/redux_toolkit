import {Button, Grid, TextField} from "@mui/material";

const InputField = ({text, handleInput, handleSubmit, nameBtn}) => {
    return (
        <Grid
            container
            sx={{width: 450, margin: '0 auto'}}
        >
            <Grid
                item
                xs={9}
            >
                <TextField
                    id="outlined-basic"
                    label="Todo"
                    variant="outlined"
                    value={text}
                    onChange={(e) => handleInput(e.target.value)}
                    sx={{width: '100%'}}
                />
            </Grid>
            <Grid item xs={3}>
                <Button
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{width: '100%', height: '100%'}}
                >
                    {nameBtn}
                </Button>
            </Grid>
        </Grid>
    )
}

export default InputField