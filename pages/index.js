import React from 'react'
import { Typography, Container, makeStyles, TextField, Button, Grid, Backdrop, CircularProgress, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Paper } from "@material-ui/core";
import Link from '../src/Link'
import Head from 'next/head';
import { isEmail } from 'validator'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: { margin: theme.spacing(1), height: "10vw", padding: theme.spacing(2, 0), [theme.breakpoints.down('sm')]: { height: 100 } },
  form: { width: '100%', marginTop: theme.spacing(1), padding: theme.spacing(3), background: "#E6F4FF", borderRadius: 20 },
  submit: { margin: theme.spacing(3, 0, 2) },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}))
export default function Home() {
  const classes = useStyles()
  const [values, setValues] = React.useState({
    email: "",
    password: ""
  })
  const [errors, setErrors] = React.useState({
    email: false,
    password: false,
    email_err: "",
    password_err: "",
  })
  const [forgotPass, setForgotPass] = React.useState({
    open: false,
    email: ""
  })
  const [loading, setLoading] = React.useState(false)
  const handleChange = (e) => {
    setErrors({ ...errors, [e.target.name]: false, [e.target.name + '_err']: "" })
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!values.email) return setErrors({ ...errors, email: true, email_err: `Email is required` })
    if (!values.password) return setErrors({ ...errors, password: true, password_err: `Password is required` })
    if (!isEmail(values.email)) return setErrors({ ...errors, email: true, email_err: `Please enter a valid email` })
    // handle login logic here
    setLoading(true)
    setTimeout(() => {
      window.location.replace('/app')
    }, 2000);

  }
  const handleClose = () => {
    setForgotPass({ ...forgotPass, open: false })
  }
  const handleForgotPass = (e) => {
    setForgotPass({ ...forgotPass, email: e.target.value })
  }
  return (
    <>
      <Head>
        <title>MBDO Cargo Express Forwarding Services Inc.</title>
      </Head>
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Container component="main" maxWidth="sm">
        <div className={classes.paper}>
          <img src="/images/mbdo_logo.png" alt="mbdo_logo" className={classes.image} />

          <Paper component="form" className={classes.form} onSubmit={handleSubmit} elevation={0}>
            <Typography component="h1" variant="h6">
              Sign in to your MBDO Account
              </Typography>
            <TextField
              value={values.email}
              onChange={handleChange}
              error={errors.email}
              helperText={errors.email ? errors.email_err : null}
              variant="outlined"
              margin="normal"
              type="email"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              value={values.password}
              onChange={handleChange}
              error={errors.password}
              helperText={errors.password ? errors.password_err : null}
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              size="large"
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              className={classes.submit}
            >
              Sign In
          </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/" onClick={() => setForgotPass({ ...forgotPass, open: true })} variant="body2">
                  Forgot password?
              </Link>
              </Grid>
            </Grid>
          </Paper>
        </div>
        <ForgotPass {...forgotPass} handleClose={handleClose} handleForgotPass={handleForgotPass} />
      </Container>
    </>
  )
}

const ForgotPass = ({ open, email, handleClose, handleForgotPass }) => {
  const dialogForm = {
    title: "Forgot Your Password?",
    text: "Don't worry resetting your password is easy. Just tell as the email address you registered with MBDO.",
    textfield: true,
    subtext: ``,
    subtext2: `Didn't receive the email yet? Please check your spam folder.`
  }
  const [dialog, setDialog] = React.useState(dialogForm)
  const handleSubmit = () => {
    setDialog({ ...dialog, title: "Reset Your Password", textfield: false, subtext: `We have sent a reset password email to ${email}. Please click the reset password link to set your new password.` })
  }
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{dialog.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {dialog.textfield ? dialog.text : dialog.subtext}
        </DialogContentText>
        {dialog.textfield && <TextField
          autoFocus
          margin="dense"
          label="Email Address"
          name="email"
          type="email"
          value={email}
          onChange={handleForgotPass}
          fullWidth
        />}
        {!dialog.textfield && (
          <div>
            <Typography>{dialog.subtext2}</Typography>
          </div>
        )}
      </DialogContent>
      <DialogActions>
        {dialog.textfield ? <> <Button onClick={handleClose} color="primary" variant="outlined">Cancel</Button>
          <Button onClick={handleSubmit} color="primary" variant="contained">Submit</Button> </> : null}
      </DialogActions>
    </Dialog>
  )
} 