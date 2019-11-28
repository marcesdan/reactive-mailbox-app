import React from 'react'
import PropTypes from 'prop-types'
import {ThemeProvider, withStyles} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Navigator from './Navigator'
import Content from './Content'
import Header from './Header'
import PaperTheme from './Styles/PaperTheme'
import CustomTheme from './Styles/CustomTheme'
import Metrics from './Styles/Metrics'
import PaperStyles from './Styles/PaperStyles'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

let theme = PaperTheme
theme = {
  ...theme,
  overrides: CustomTheme(theme),
}

function Paperbase(props) {
  const {classes} = props
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline/>
        <nav className={classes.drawer}>
          <Hidden smUp implementation="js">
            <Navigator
              PaperProps={{style: {width: Metrics.drawerWidth}}}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
            />
          </Hidden>
          <Hidden xsDown implementation="css">
            <Navigator PaperProps={{style: {width: Metrics.drawerWidth}}}/>
          </Hidden>
        </nav>
        <div className={classes.app}>
          <Header onDrawerToggle={handleDrawerToggle}/>
          <main className={classes.main}>
            <Content/>
          </main>
          <footer className={classes.footer}>
            <Copyright/>
          </footer>
        </div>
      </div>
    </ThemeProvider>
  )
}

Paperbase.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(PaperStyles(theme))(Paperbase)
