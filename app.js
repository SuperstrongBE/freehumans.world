"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const token_1 = require("./core/utils/token");
const userController_1 = require("./core/controllers/userController");
const emailController_1 = require("./core/controllers/emailController");
const transfer_1 = require("./core/controllers/transfer");
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const port = 5000;
(0, token_1.generateToken)(app);
(0, userController_1.login)(app);
(0, emailController_1.location)(app);
(0, emailController_1.sendCode)(app);
(0, emailController_1.verifyCode)(app);
(0, userController_1.checkUsernameAvailability)(app);
(0, userController_1.registerAccount)(app);
(0, userController_1.checkInviter)(app);
(0, emailController_1.checkEmail)(app);
(0, transfer_1.transfer)(app);
app.listen(port, () => console.log(`Server running on port ${port}`));
