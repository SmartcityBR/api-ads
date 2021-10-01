"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Validator_1 = __importDefault(require("../services/Validator"));
var Announcement_1 = __importDefault(require("../models/Announcement"));
var Advertiser_1 = __importDefault(require("../models/Advertiser"));
var typeorm_1 = require("typeorm");
var AnnouncementController = /** @class */ (function () {
    function AnnouncementController() {
    }
    AnnouncementController.prototype.get = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, announcements, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        repository = typeorm_1.getRepository(Announcement_1.default);
                        return [4 /*yield*/, repository.find()];
                    case 1:
                        announcements = _a.sent();
                        return [2 /*return*/, res.status(200).json(announcements)];
                    case 2:
                        error_1 = _a.sent();
                        next(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AnnouncementController.prototype.store = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var advertiserRepository, announcementRepository, validator, hasNullValues, hasAllValuesInObject, error, hasAdvertiser, error, announcement, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        advertiserRepository = typeorm_1.getRepository(Advertiser_1.default);
                        announcementRepository = typeorm_1.getRepository(Announcement_1.default);
                        validator = new Validator_1.default(req.body, 'announcement');
                        hasNullValues = validator.checkNullValues();
                        hasAllValuesInObject = validator.checkValuesIsInObject();
                        if (hasNullValues || !hasAllValuesInObject) {
                            error = new Error('Null values!');
                            error.status = 400;
                            throw error;
                        }
                        return [4 /*yield*/, advertiserRepository.findOne({ where: { id: req.body.id_advertiser } })];
                    case 1:
                        hasAdvertiser = _a.sent();
                        if (!hasAdvertiser) {
                            error = new Error('We don\'t have advertiser with this id!');
                            error.status = 400;
                            throw error;
                        }
                        return [4 /*yield*/, announcementRepository.create(req.body)];
                    case 2:
                        announcement = _a.sent();
                        return [4 /*yield*/, announcementRepository.save(announcement)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, res.status(201).json(announcement)];
                    case 4:
                        error_2 = _a.sent();
                        next(error_2);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    AnnouncementController.prototype.update = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, id, validator, hasNullValues, hasAllValuesInObject, error, announcement, error, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        repository = typeorm_1.getRepository(Announcement_1.default);
                        id = req.params.id;
                        validator = new Validator_1.default(req.body, 'announcement');
                        hasNullValues = validator.checkNullValues();
                        hasAllValuesInObject = validator.checkValuesIsInObject();
                        if (hasNullValues || !hasAllValuesInObject) {
                            error = new Error('Null values!');
                            error.status = 400;
                            throw error;
                        }
                        return [4 /*yield*/, repository.findOne({ where: { id: id } })];
                    case 1:
                        announcement = _a.sent();
                        if (!announcement) {
                            error = new Error('The announcement doesn\'t exist!');
                            error.status = 400;
                            throw error;
                        }
                        return [4 /*yield*/, repository.update(id, req.body)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, res.status(200).json(announcement)];
                    case 3:
                        error_3 = _a.sent();
                        next(error_3);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AnnouncementController.prototype.delete = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, id, announcement, error, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        repository = typeorm_1.getRepository(Announcement_1.default);
                        id = req.params.id;
                        return [4 /*yield*/, repository.findByIds([id])];
                    case 1:
                        announcement = _a.sent();
                        if (!announcement) {
                            error = new Error('The announcement doesn\'t exist!');
                            error.status = 400;
                            throw error;
                        }
                        return [4 /*yield*/, repository.delete(id)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, res.status(200).json(announcement)];
                    case 3:
                        error_4 = _a.sent();
                        next(error_4);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return AnnouncementController;
}());
exports.default = AnnouncementController;
