import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const LogIn = (props) => {
    return (
        <div className="login">
            <form className="form" id='login'>
            <span>Username: </span><TextField
                variant="outlined"
                labelText="Email"
                id="email"
                formControlProps={{
                fullWidth: true
                }}
                handleChange={null}
                type="text"
            /><br/><br/>
            <span>Password: </span> <TextField
                variant="outlined"
                labelText="Password"
                id="password"
                handleChange={null}
                type="password"
            /><br/><br/>

            <Button type="Submit" variant="outlined" form='login' color="primary" >
                Log in
            </Button>
            </form>
        </div>
    )
}

export default LogIn