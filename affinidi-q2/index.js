//  1. Import required Libraries
const express = require('express');
const passport = require('passport');
const session = require('express-session');
const { Issuer, Strategy } = require('openid-client');
const http = require("http");
require("dotenv").config();