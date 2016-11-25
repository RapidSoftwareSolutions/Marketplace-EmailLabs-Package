/*

{
    "dima.shirokoff@rapidapi.com": {
        "vars": {
            "var": "World"
        }
    }
}

*/

"use strict";

global.PACKAGE_NAME = "EmailLabs";

const express       = require('express'),
    bodyParser      = require('body-parser'),
    API             = require('rapi-js-package'),
    fs              = require('fs'),
    lib             = require('./lib'),
    _               = lib.callback;

const PORT          = process.env.PORT || 8080;
const app           = express();

let mfile = fs.readFileSync('./metadata.json', 'utf-8'),
    cfile = fs.readFileSync('./control.json',  'utf-8');

let metadata = JSON.parse(mfile),
    control  = JSON.parse(cfile);

app.use(bodyParser.json(({limit: '50mb'})));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.all(`/api/${PACKAGE_NAME}`, (req, res) => { res.send(metadata); });

for(let func in control) {
    let options = {
        parseUri: true,
        debug:    true,
        hasSkip:  true
    };
    let {
        method, 
        args,
        url
    } = control[func];

    app.post(`/api/${PACKAGE_NAME}/${func}`, _(function* (req, res) {
        let api      = new API(url);
        let opts     = {};
        let authopts = {};
        let r = {
            callback     : "",
            contextWrites: {}
        };
        let response;

        req.body.args = lib.clearArgs(req.body.args);

        authopts = {
            type:     'basic',
            username: req.body.args['appKey'],
            password: req.body.args['secretKey']
        }

        try {
            for(let arg in args) {
                let argarr      = arg.split('|');
                opts[args[arg] + '|' + argarr[0]] = req.body.args[argarr[1]];
            }

            // filter markdown
            // field_1::string_to_find_1|field_2::string_to_find_2

            if(opts['filter|JSON']) {
                let filter = '',
                    filterObj;

                try {
                    if(typeof opts['filter|JSON'] !== 'object') filterObj = JSON.parse(opts['filter|JSON']);
                    else filterObj = opts['filter|JSON'];
                } catch(e) {
                    throw new API.Error('JSON_VALIDATION'); 
                }

                for(let key in filterObj) filter += `|${key}::${filterObj[key]}`

                opts['filter|String'] = filter.slice(1);
                delete opts['filter|JSON'];
            }

            options.method    = method;
            options.isRawBody = method == 'POST';
            method == 'GET' ? options.query = opts : options.body = opts;

            response              = yield api.auth(authopts).request(options);
            r.callback            = 'success';
            r.contextWrites['to'] = response;
        } catch(e) {
            console.log(e)
            r.callback            = 'error';
            r.contextWrites['to'] = e.status_code ? e : { status_code: "API_ERROR", status_msg:  e.message ? e.message : e };
        }

        res.status(200).send(r);
    }))
}

//app.post(`/api/${PACKAGE_NAME}/startSslSession`, require('./api/startSslSession.js'))

app.listen(PORT);
module.exports = app;