/**
 * TODO: fix jwt token expiry, token reset issue
 */

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var device = require('express-device');
var breadcrumbs = require('express-breadcrumbs');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var adminRouter = require('./routes/admin');
var designerRouter = require('./routes/designer');

var config  = require('./config')
var DB = require("./database/db.connector");

var cloth_api = require("./routes/api/cloth.api")
var cloth_vector_api = require("./routes/api/cloth.vector.api")

var helper = require("./routes/api/helper.api")()
const auth = require('./routes/auth');

const AnonymousAuthenticated = require("./auth/middleware.auth").AnonymousAuthenticated

const RouteLogMiddleware =  require("./routes/middleware/route.middleware").RouteLog
const {UserMetaMiddleware, ViewVariablesMiddleware} = require("./routes/middleware/route.middleware")

var swaggerUi = require('swagger-ui-express')
swaggerDocument = require('./apidocs/swagger.json');

DB({connection:config.database.connection})
.then(()=>{
  console.log("db connected");
  //var seeder = require("./database/seed");
  //seeder.start()

})
.catch((err)=>console.log(err))

require('./auth/passport');


var app = express();
swig = require('swig')


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('view cache', false);
//app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(device.capture({parseUserAgent:true}));

app.enable('trust proxy')


app.use(express.static(path.join(__dirname, 'public')));
app.use(RouteLogMiddleware)
app.use(UserMetaMiddleware)

app.use(breadcrumbs.init());
 
// Set Breadcrumbs home information
app.use(breadcrumbs.setHome());

app.use('/', indexRouter);
app.use('/users',[AnonymousAuthenticated], usersRouter);
app.use('/admin',[ViewVariablesMiddleware], adminRouter);
app.use('/designer',[ViewVariablesMiddleware], designerRouter)

app.use('/api/cloth', cloth_api);
app.use('/api/clothvector', cloth_vector_api);


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use('/auth', auth);

 
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  // res.render('notFound');
  // createError(404);
  res.render('notFound')
  // next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  // res.status(err.status || 500);
  // res.render('error');

  res.status(500).json(helper.make_api_response(err,null))
});

module.exports = app;
