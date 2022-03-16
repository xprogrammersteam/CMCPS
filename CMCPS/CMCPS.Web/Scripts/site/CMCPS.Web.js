var CMCPS;
(function (CMCPS) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LanguageForm.init) {
                    LanguageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LanguageForm, [
                        'LanguageId', w0,
                        'LanguageName', w0
                    ]);
                }
                return _this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
    })(Administration = CMCPS.Administration || (CMCPS.Administration = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = CMCPS.Administration || (CMCPS.Administration = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = CMCPS.Administration || (CMCPS.Administration = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RoleForm.init) {
                    RoleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RoleForm, [
                        'RoleName', w0
                    ]);
                }
                return _this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
    })(Administration = CMCPS.Administration || (CMCPS.Administration = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = CMCPS.Administration || (CMCPS.Administration = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = CMCPS.Administration || (CMCPS.Administration = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = CMCPS.Administration || (CMCPS.Administration = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = CMCPS.Administration || (CMCPS.Administration = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = CMCPS.Administration || (CMCPS.Administration = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserForm.init) {
                    UserForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.EmailEditor;
                    var w3 = s.ImageUploadEditor;
                    var w4 = s.PasswordEditor;
                    Q.initFormType(UserForm, [
                        'Username', w0,
                        'DisplayName', w0,
                        'DesignationId', w1,
                        'Email', w2,
                        'UserImage', w3,
                        'Password', w4,
                        'PasswordConfirm', w4,
                        'Source', w0
                    ]);
                }
                return _this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
    })(Administration = CMCPS.Administration || (CMCPS.Administration = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = CMCPS.Administration || (CMCPS.Administration = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = CMCPS.Administration || (CMCPS.Administration = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = CMCPS.Administration || (CMCPS.Administration = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = CMCPS.Administration || (CMCPS.Administration = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = CMCPS.Administration || (CMCPS.Administration = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = CMCPS.Administration || (CMCPS.Administration = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        var BasicSamplesService;
        (function (BasicSamplesService) {
            BasicSamplesService.baseUrl = 'BasicSamples/BasicSamples';
            [
                'OrdersByShipper',
                'OrderBulkAction'
            ].forEach(function (x) {
                BasicSamplesService[x] = function (r, s, o) {
                    return Q.serviceRequest(BasicSamplesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BasicSamplesService = BasicSamples.BasicSamplesService || (BasicSamples.BasicSamplesService = {}));
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        var ChangingLookupTextForm = /** @class */ (function (_super) {
            __extends(ChangingLookupTextForm, _super);
            function ChangingLookupTextForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangingLookupTextForm.init) {
                    ChangingLookupTextForm.init = true;
                    var s = Serenity;
                    var w0 = BasicSamples.ChangingLookupTextEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.IntegerEditor;
                    Q.initFormType(ChangingLookupTextForm, [
                        'ProductID', w0,
                        'UnitPrice', w1,
                        'Quantity', w2,
                        'Discount', w1
                    ]);
                }
                return _this;
            }
            ChangingLookupTextForm.formKey = 'BasicSamples.ChangingLookupText';
            return ChangingLookupTextForm;
        }(Serenity.PrefixedContext));
        BasicSamples.ChangingLookupTextForm = ChangingLookupTextForm;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        var CustomerGrossSalesService;
        (function (CustomerGrossSalesService) {
            CustomerGrossSalesService.baseUrl = 'BasicSamples/CustomerGrossSales';
            [
                'List'
            ].forEach(function (x) {
                CustomerGrossSalesService[x] = function (r, s, o) {
                    return Q.serviceRequest(CustomerGrossSalesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CustomerGrossSalesService = BasicSamples.CustomerGrossSalesService || (BasicSamples.CustomerGrossSalesService = {}));
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        var DragDropSampleForm = /** @class */ (function (_super) {
            __extends(DragDropSampleForm, _super);
            function DragDropSampleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DragDropSampleForm.init) {
                    DragDropSampleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(DragDropSampleForm, [
                        'Title', w0
                    ]);
                }
                return _this;
            }
            DragDropSampleForm.formKey = 'BasicSamples.DragDropSample';
            return DragDropSampleForm;
        }(Serenity.PrefixedContext));
        BasicSamples.DragDropSampleForm = DragDropSampleForm;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        var DragDropSampleRow;
        (function (DragDropSampleRow) {
            DragDropSampleRow.idProperty = 'Id';
            DragDropSampleRow.nameProperty = 'Title';
            DragDropSampleRow.localTextPrefix = 'Northwind.DragDropSample';
        })(DragDropSampleRow = BasicSamples.DragDropSampleRow || (BasicSamples.DragDropSampleRow = {}));
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        var DragDropSampleService;
        (function (DragDropSampleService) {
            DragDropSampleService.baseUrl = 'BasicSamples/DragDropSample';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DragDropSampleService[x] = function (r, s, o) {
                    return Q.serviceRequest(DragDropSampleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DragDropSampleService = BasicSamples.DragDropSampleService || (BasicSamples.DragDropSampleService = {}));
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        var FilteredLookupInDetailForm = /** @class */ (function (_super) {
            __extends(FilteredLookupInDetailForm, _super);
            function FilteredLookupInDetailForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!FilteredLookupInDetailForm.init) {
                    FilteredLookupInDetailForm.init = true;
                    var s = Serenity;
                    var w0 = CMCPS.Northwind.CustomerEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.LookupEditor;
                    var w3 = BasicSamples.FilteredLookupDetailEditor;
                    Q.initFormType(FilteredLookupInDetailForm, [
                        'CustomerID', w0,
                        'OrderDate', w1,
                        'CategoryID', w2,
                        'DetailList', w3
                    ]);
                }
                return _this;
            }
            FilteredLookupInDetailForm.formKey = 'BasicSamples.FilteredLookupInDetail';
            return FilteredLookupInDetailForm;
        }(Serenity.PrefixedContext));
        BasicSamples.FilteredLookupInDetailForm = FilteredLookupInDetailForm;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        var HardcodedValuesForm = /** @class */ (function (_super) {
            __extends(HardcodedValuesForm, _super);
            function HardcodedValuesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!HardcodedValuesForm.init) {
                    HardcodedValuesForm.init = true;
                    var s = Serenity;
                    var w0 = BasicSamples.HardcodedValuesEditor;
                    Q.initFormType(HardcodedValuesForm, [
                        'SomeValue', w0
                    ]);
                }
                return _this;
            }
            HardcodedValuesForm.formKey = 'BasicSamples.HarcodedValues';
            return HardcodedValuesForm;
        }(Serenity.PrefixedContext));
        BasicSamples.HardcodedValuesForm = HardcodedValuesForm;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        var LookupFilterByMultipleForm = /** @class */ (function (_super) {
            __extends(LookupFilterByMultipleForm, _super);
            function LookupFilterByMultipleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LookupFilterByMultipleForm.init) {
                    LookupFilterByMultipleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.ImageUploadEditor;
                    var w2 = s.BooleanEditor;
                    var w3 = s.LookupEditor;
                    var w4 = BasicSamples.ProduceSeafoodCategoryEditor;
                    var w5 = s.DecimalEditor;
                    var w6 = s.IntegerEditor;
                    Q.initFormType(LookupFilterByMultipleForm, [
                        'ProductName', w0,
                        'ProductImage', w1,
                        'Discontinued', w2,
                        'SupplierID', w3,
                        'CategoryID', w4,
                        'QuantityPerUnit', w0,
                        'UnitPrice', w5,
                        'UnitsInStock', w6,
                        'UnitsOnOrder', w6,
                        'ReorderLevel', w6
                    ]);
                }
                return _this;
            }
            LookupFilterByMultipleForm.formKey = 'BasicSamples.LookupFilterByMultiple';
            return LookupFilterByMultipleForm;
        }(Serenity.PrefixedContext));
        BasicSamples.LookupFilterByMultipleForm = LookupFilterByMultipleForm;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        var PopulateLinkedDataForm = /** @class */ (function (_super) {
            __extends(PopulateLinkedDataForm, _super);
            function PopulateLinkedDataForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PopulateLinkedDataForm.init) {
                    PopulateLinkedDataForm.init = true;
                    var s = Serenity;
                    var w0 = CMCPS.Northwind.CustomerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.LookupEditor;
                    var w4 = CMCPS.Northwind.OrderDetailsEditor;
                    Q.initFormType(PopulateLinkedDataForm, [
                        'CustomerID', w0,
                        'CustomerContactName', w1,
                        'CustomerContactTitle', w1,
                        'CustomerCity', w1,
                        'CustomerRegion', w1,
                        'CustomerCountry', w1,
                        'CustomerPhone', w1,
                        'CustomerFax', w1,
                        'OrderDate', w2,
                        'RequiredDate', w2,
                        'EmployeeID', w3,
                        'DetailList', w4
                    ]);
                }
                return _this;
            }
            PopulateLinkedDataForm.formKey = 'BasicSamples.PopulateLinkedData';
            return PopulateLinkedDataForm;
        }(Serenity.PrefixedContext));
        BasicSamples.PopulateLinkedDataForm = PopulateLinkedDataForm;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        var ProductExcelImportForm = /** @class */ (function (_super) {
            __extends(ProductExcelImportForm, _super);
            function ProductExcelImportForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProductExcelImportForm.init) {
                    ProductExcelImportForm.init = true;
                    var s = Serenity;
                    var w0 = s.ImageUploadEditor;
                    Q.initFormType(ProductExcelImportForm, [
                        'FileName', w0
                    ]);
                }
                return _this;
            }
            ProductExcelImportForm.formKey = 'BasicSamples.ProductExcelImport';
            return ProductExcelImportForm;
        }(Serenity.PrefixedContext));
        BasicSamples.ProductExcelImportForm = ProductExcelImportForm;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        var ProductExcelImportService;
        (function (ProductExcelImportService) {
            ProductExcelImportService.baseUrl = 'BasicSamples/ProductExcelImport';
            [
                'ExcelImport'
            ].forEach(function (x) {
                ProductExcelImportService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductExcelImportService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProductExcelImportService = BasicSamples.ProductExcelImportService || (BasicSamples.ProductExcelImportService = {}));
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        var StaticTextBlockForm = /** @class */ (function (_super) {
            __extends(StaticTextBlockForm, _super);
            function StaticTextBlockForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!StaticTextBlockForm.init) {
                    StaticTextBlockForm.init = true;
                    var s = Serenity;
                    var w0 = CMCPS.StaticTextBlock;
                    var w1 = s.StringEditor;
                    Q.initFormType(StaticTextBlockForm, [
                        'StaticText', w0,
                        'SomeInput', w1,
                        'HtmlList', w0,
                        'FromLocalText', w0,
                        'DisplayFieldValue', w0
                    ]);
                }
                return _this;
            }
            StaticTextBlockForm.formKey = 'BasicSamples.StaticTextBlock';
            return StaticTextBlockForm;
        }(Serenity.PrefixedContext));
        BasicSamples.StaticTextBlockForm = StaticTextBlockForm;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        var VSGalleryQAService;
        (function (VSGalleryQAService) {
            VSGalleryQAService.baseUrl = 'BasicSamples/VSGalleryQA';
            [
                'List'
            ].forEach(function (x) {
                VSGalleryQAService[x] = function (r, s, o) {
                    return Q.serviceRequest(VSGalleryQAService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(VSGalleryQAService = BasicSamples.VSGalleryQAService || (BasicSamples.VSGalleryQAService = {}));
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
var CMC;
(function (CMC) {
    var Default;
    (function (Default) {
        var IllnessHistoryForm = /** @class */ (function (_super) {
            __extends(IllnessHistoryForm, _super);
            function IllnessHistoryForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!IllnessHistoryForm.init) {
                    IllnessHistoryForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    Q.initFormType(IllnessHistoryForm, [
                        'AdmissionId', w0,
                        'IllnessId', w0
                    ]);
                }
                return _this;
            }
            IllnessHistoryForm.formKey = 'Default.IllnessHistory';
            return IllnessHistoryForm;
        }(Serenity.PrefixedContext));
        Default.IllnessHistoryForm = IllnessHistoryForm;
    })(Default = CMC.Default || (CMC.Default = {}));
})(CMC || (CMC = {}));
var CMC;
(function (CMC) {
    var Default;
    (function (Default) {
        var IllnessHistoryRow;
        (function (IllnessHistoryRow) {
            IllnessHistoryRow.idProperty = 'IllnessHistoryId';
            IllnessHistoryRow.localTextPrefix = 'Default.IllnessHistory';
            IllnessHistoryRow.lookupKey = 'Default.IllnessHistory';
            function getLookup() {
                return Q.getLookup('Default.IllnessHistory');
            }
            IllnessHistoryRow.getLookup = getLookup;
        })(IllnessHistoryRow = Default.IllnessHistoryRow || (Default.IllnessHistoryRow = {}));
    })(Default = CMC.Default || (CMC.Default = {}));
})(CMC || (CMC = {}));
var CMC;
(function (CMC) {
    var Default;
    (function (Default) {
        var IllnessHistoryService;
        (function (IllnessHistoryService) {
            IllnessHistoryService.baseUrl = 'Default/IllnessHistory';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                IllnessHistoryService[x] = function (r, s, o) {
                    return Q.serviceRequest(IllnessHistoryService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(IllnessHistoryService = Default.IllnessHistoryService || (Default.IllnessHistoryService = {}));
    })(Default = CMC.Default || (CMC.Default = {}));
})(CMC || (CMC = {}));
var CMCPS;
(function (CMCPS) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = CMCPS.Common || (CMCPS.Common = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            [
                'Update',
                'Retrieve'
            ].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = CMCPS.Common || (CMCPS.Common = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var AdmissionCcDetailsForm = /** @class */ (function (_super) {
            __extends(AdmissionCcDetailsForm, _super);
            function AdmissionCcDetailsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AdmissionCcDetailsForm.init) {
                    AdmissionCcDetailsForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(AdmissionCcDetailsForm, [
                        'PrComplaintsId', w0,
                        'Days', w1
                    ]);
                }
                return _this;
            }
            AdmissionCcDetailsForm.formKey = 'Default.AdmissionCcDetails';
            return AdmissionCcDetailsForm;
        }(Serenity.PrefixedContext));
        Default.AdmissionCcDetailsForm = AdmissionCcDetailsForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var AdmissionCcDetailsRow;
        (function (AdmissionCcDetailsRow) {
            AdmissionCcDetailsRow.idProperty = 'ComplaintId';
            AdmissionCcDetailsRow.nameProperty = 'Days';
            AdmissionCcDetailsRow.localTextPrefix = 'Default.AdmissionCcDetails';
        })(AdmissionCcDetailsRow = Default.AdmissionCcDetailsRow || (Default.AdmissionCcDetailsRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var AdmissionCcDetailsService;
        (function (AdmissionCcDetailsService) {
            AdmissionCcDetailsService.baseUrl = 'Default/AdmissionCcDetails';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AdmissionCcDetailsService[x] = function (r, s, o) {
                    return Q.serviceRequest(AdmissionCcDetailsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AdmissionCcDetailsService = Default.AdmissionCcDetailsService || (Default.AdmissionCcDetailsService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var AdmissionForm = /** @class */ (function (_super) {
            __extends(AdmissionForm, _super);
            function AdmissionForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AdmissionForm.init) {
                    AdmissionForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = CMCPS.EditTimeEditor;
                    var w3 = s.LookupEditor;
                    var w4 = s.EnumEditor;
                    var w5 = s.TextAreaEditor;
                    var w6 = Default.AdmissionCcDetailEditor;
                    var w7 = Default.AdmissionPpDetailEditor;
                    var w8 = s.BooleanEditor;
                    var w9 = s.IntegerEditor;
                    var w10 = Default.DDiagnosisDetailEditor;
                    Q.initFormType(AdmissionForm, [
                        'Name', w0,
                        'Date', w1,
                        'Time', w2,
                        'Age', w0,
                        'DateOfBirth', w1,
                        'SexId', w3,
                        'Religion', w4,
                        'MaritalStatus', w4,
                        'WardId', w3,
                        'BedId', w3,
                        'BloodGroupId', w3,
                        'FatherName', w0,
                        'FatherNID', w0,
                        'MotherName', w0,
                        'MotherNID', w0,
                        'DistrictId', w3,
                        'UpazilaId', w3,
                        'House', w0,
                        'PostOffice', w0,
                        'Mobile', w0,
                        'EmergencyPerson', w0,
                        'EmergencyRelation', w4,
                        'EmergencyPerMobile', w0,
                        'EmergencyPerAddress', w5,
                        'DetailList', w6,
                        'HistoryOfPresentIllness', w5,
                        'IllnessList', w3,
                        'MajorSurgeryId', w3,
                        'AddtoMajorSurgery', w0,
                        'MajorSurgery', w5,
                        'RegularMedicationId', w3,
                        'BloodTransfusion', w4,
                        'ImmunizationList', w3,
                        'FamilyHistoryDiseaseId', w4,
                        'AgeAtMenarche', w0,
                        'AgeAtMenarcheLabel', w0,
                        'MenarcheCycle', w4,
                        'AgeOfMenopause', w0,
                        'AgeAtMenarcheLabel1', w0,
                        'AgeOfLastChild', w0,
                        'AgeAtMenarcheLabel2', w0,
                        'LMP', w1,
                        'PPDetailList', w7,
                        'Socioeconomichistory', w5,
                        'Travelhistory', w5,
                        'AntenatalList', w3,
                        'NatalList', w3,
                        'PostNatalList', w3,
                        'Milestone', w5,
                        'HoPastIllness', w5,
                        'Immunization', w4,
                        'Feedinghistory', w4,
                        'DrugHistory', w5,
                        'FamilyHistoryId', w3,
                        'ConsanguinityId', w3,
                        'AllergicHistory', w5,
                        'SocialPersonalHistory', w5,
                        'Conditions', w5,
                        'Appearance', w4,
                        'Decubitus', w4,
                        'Behaviour', w4,
                        'BodyBuild', w4,
                        'BMI', w0,
                        'AnemiaId', w3,
                        'JaundiceId', w3,
                        'Cyanosis', w4,
                        'DehydrationId', w4,
                        'OedemaId', w3,
                        'Clubbing', w4,
                        'Koilonychia', w4,
                        'Leukonychia', w4,
                        'Edema', w4,
                        'NeckVeins', w4,
                        'JVP', w4,
                        'BonyTenderness', w4,
                        'LymphNode', w4,
                        'Site', w4,
                        'Size', w0,
                        'Tenderness', w4,
                        'Consistency', w4,
                        'Fixation', w4,
                        'LocalTemperature', w4,
                        'DischargingSinus', w4,
                        'ThyroidGland', w4,
                        'Pulse', w0,
                        'RespRate', w0,
                        'BP', w0,
                        'Temperature', w0,
                        'GEOther', w5,
                        'ExaminationRegion', w4,
                        'Inspection', w5,
                        'Palpation', w5,
                        'Percussion', w5,
                        'Auscultation', w5,
                        'Other', w5,
                        'IsNAD', w8,
                        'RR', w9,
                        'Muscles', w4,
                        'Stridor', w4,
                        'CyanosisReSelect', w4,
                        'ClubbingReSelect', w4,
                        'NicotineStain', w4,
                        'Asterixis', w4,
                        'JVPReSelect', w4,
                        'LymphReSelect', w4,
                        'ScarMark', w4,
                        'Swelling', w4,
                        'ShapeChest', w4,
                        'VisibleVein', w4,
                        'ApexBeat', w4,
                        'SupraclavicularIndrawing', w4,
                        'TrachealTag', w4,
                        'ICTSitu', w4,
                        'RadiationMark', w4,
                        'PositionTrachea', w4,
                        'PositionApexBeat', w4,
                        'VocalFremitus', w4,
                        'ChestExpansibility', w4,
                        'PercussionList', w3,
                        'AuscultationList', w3,
                        'BreathSoundList', w3,
                        'VocalResonanceList', w3,
                        'AddedSound', w4,
                        'Rhonchi', w4,
                        'Crepitation', w4,
                        'Rub', w4,
                        'Skin', w4,
                        'SkinText', w0,
                        'PulseRate', w9,
                        'Rhythm', w4,
                        'Volume', w4,
                        'Character', w4,
                        'RedioFemoralDelay', w4,
                        'ConditionOf', w4,
                        'ScarMarkPrecordium', w4,
                        'SwellingPrecordium', w4,
                        'VisibleApexBeatPrecordium', w4,
                        'VisibleImpulsePrecordium', w4,
                        'Alimentary', w5,
                        'Respiratory', w5,
                        'Cardiovascular', w5,
                        'Genitourinary', w5,
                        'Locomotor', w5,
                        'Haemopoetic', w5,
                        'SalientFeatures', w5,
                        'ProvisionalDiagnosis', w5,
                        'DiagnosisDetails', w10,
                        'Investigations', w5,
                        'FinalDiagnosis', w5,
                        'Plandischarge', w5,
                        'Summary', w5
                    ]);
                }
                return _this;
            }
            AdmissionForm.formKey = 'Default.Admission';
            return AdmissionForm;
        }(Serenity.PrefixedContext));
        Default.AdmissionForm = AdmissionForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var AdmissionPpDetailsForm = /** @class */ (function (_super) {
            __extends(AdmissionPpDetailsForm, _super);
            function AdmissionPpDetailsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AdmissionPpDetailsForm.init) {
                    AdmissionPpDetailsForm.init = true;
                    var s = Serenity;
                    var w0 = s.EnumEditor;
                    var w1 = s.IntegerEditor;
                    Q.initFormType(AdmissionPpDetailsForm, [
                        'ActivityId', w0,
                        'SmokingId', w1,
                        'AlcoholismId', w1,
                        'DrugAddictionId', w0,
                        'ExposureHistoryId', w0
                    ]);
                }
                return _this;
            }
            AdmissionPpDetailsForm.formKey = 'Default.AdmissionPpDetails';
            return AdmissionPpDetailsForm;
        }(Serenity.PrefixedContext));
        Default.AdmissionPpDetailsForm = AdmissionPpDetailsForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var AdmissionPpDetailsRow;
        (function (AdmissionPpDetailsRow) {
            AdmissionPpDetailsRow.idProperty = 'HistoryId';
            AdmissionPpDetailsRow.nameProperty = 'SmokingId';
            AdmissionPpDetailsRow.localTextPrefix = 'Default.AdmissionPpDetails';
        })(AdmissionPpDetailsRow = Default.AdmissionPpDetailsRow || (Default.AdmissionPpDetailsRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var AdmissionPpDetailsService;
        (function (AdmissionPpDetailsService) {
            AdmissionPpDetailsService.baseUrl = 'Default/AdmissionPpDetails';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AdmissionPpDetailsService[x] = function (r, s, o) {
                    return Q.serviceRequest(AdmissionPpDetailsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AdmissionPpDetailsService = Default.AdmissionPpDetailsService || (Default.AdmissionPpDetailsService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var AdmissionRow;
        (function (AdmissionRow) {
            AdmissionRow.idProperty = 'AdmissionId';
            AdmissionRow.nameProperty = 'Name';
            AdmissionRow.localTextPrefix = 'Default.Admission';
            AdmissionRow.lookupKey = 'Default.Admission';
            function getLookup() {
                return Q.getLookup('Default.Admission');
            }
            AdmissionRow.getLookup = getLookup;
        })(AdmissionRow = Default.AdmissionRow || (Default.AdmissionRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var AdmissionService;
        (function (AdmissionService) {
            AdmissionService.baseUrl = 'Default/Admission';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AdmissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(AdmissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AdmissionService = Default.AdmissionService || (Default.AdmissionService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var AnemiaAndJaundiceRow;
        (function (AnemiaAndJaundiceRow) {
            AnemiaAndJaundiceRow.idProperty = 'AnemiaAndJaundiceId';
            AnemiaAndJaundiceRow.nameProperty = 'Name';
            AnemiaAndJaundiceRow.localTextPrefix = 'Default.AnemiaAndJaundice';
            AnemiaAndJaundiceRow.lookupKey = 'Default.AnemiaAndJaundice';
            function getLookup() {
                return Q.getLookup('Default.AnemiaAndJaundice');
            }
            AnemiaAndJaundiceRow.getLookup = getLookup;
        })(AnemiaAndJaundiceRow = Default.AnemiaAndJaundiceRow || (Default.AnemiaAndJaundiceRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var AnemiaAndJaundiceService;
        (function (AnemiaAndJaundiceService) {
            AnemiaAndJaundiceService.baseUrl = 'Default/AnemiaAndJaundice';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AnemiaAndJaundiceService[x] = function (r, s, o) {
                    return Q.serviceRequest(AnemiaAndJaundiceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AnemiaAndJaundiceService = Default.AnemiaAndJaundiceService || (Default.AnemiaAndJaundiceService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var AnesthesiaForm = /** @class */ (function (_super) {
            __extends(AnesthesiaForm, _super);
            function AnesthesiaForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AnesthesiaForm.init) {
                    AnesthesiaForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(AnesthesiaForm, [
                        'AnesthesiaName', w0
                    ]);
                }
                return _this;
            }
            AnesthesiaForm.formKey = 'Default.Anesthesia';
            return AnesthesiaForm;
        }(Serenity.PrefixedContext));
        Default.AnesthesiaForm = AnesthesiaForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var AnesthesiaRow;
        (function (AnesthesiaRow) {
            AnesthesiaRow.idProperty = 'AnesthesiaId';
            AnesthesiaRow.nameProperty = 'AnesthesiaName';
            AnesthesiaRow.localTextPrefix = 'Default.Anesthesia';
            AnesthesiaRow.lookupKey = 'Default.Anesthesia';
            function getLookup() {
                return Q.getLookup('Default.Anesthesia');
            }
            AnesthesiaRow.getLookup = getLookup;
        })(AnesthesiaRow = Default.AnesthesiaRow || (Default.AnesthesiaRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var AnesthesiaService;
        (function (AnesthesiaService) {
            AnesthesiaService.baseUrl = 'Default/Anesthesia';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AnesthesiaService[x] = function (r, s, o) {
                    return Q.serviceRequest(AnesthesiaService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AnesthesiaService = Default.AnesthesiaService || (Default.AnesthesiaService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var AnesthetistForm = /** @class */ (function (_super) {
            __extends(AnesthetistForm, _super);
            function AnesthetistForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AnesthetistForm.init) {
                    AnesthetistForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(AnesthetistForm, [
                        'AnesthetistName', w0
                    ]);
                }
                return _this;
            }
            AnesthetistForm.formKey = 'Default.Anesthetist';
            return AnesthetistForm;
        }(Serenity.PrefixedContext));
        Default.AnesthetistForm = AnesthetistForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var AnesthetistRow;
        (function (AnesthetistRow) {
            AnesthetistRow.idProperty = 'AnesthetistId';
            AnesthetistRow.nameProperty = 'AnesthetistName';
            AnesthetistRow.localTextPrefix = 'Default.Anesthetist';
            AnesthetistRow.lookupKey = 'Default.Anesthetist';
            function getLookup() {
                return Q.getLookup('Default.Anesthetist');
            }
            AnesthetistRow.getLookup = getLookup;
        })(AnesthetistRow = Default.AnesthetistRow || (Default.AnesthetistRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var AnesthetistService;
        (function (AnesthetistService) {
            AnesthetistService.baseUrl = 'Default/Anesthetist';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AnesthetistService[x] = function (r, s, o) {
                    return Q.serviceRequest(AnesthetistService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AnesthetistService = Default.AnesthetistService || (Default.AnesthetistService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var AntenatalForm = /** @class */ (function (_super) {
            __extends(AntenatalForm, _super);
            function AntenatalForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AntenatalForm.init) {
                    AntenatalForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(AntenatalForm, [
                        'AntenatalName', w0
                    ]);
                }
                return _this;
            }
            AntenatalForm.formKey = 'Default.Antenatal';
            return AntenatalForm;
        }(Serenity.PrefixedContext));
        Default.AntenatalForm = AntenatalForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var AntenatalRow;
        (function (AntenatalRow) {
            AntenatalRow.idProperty = 'AntenatalId';
            AntenatalRow.nameProperty = 'AntenatalName';
            AntenatalRow.localTextPrefix = 'Default.Antenatal';
            AntenatalRow.lookupKey = 'Default.Antenatal';
            function getLookup() {
                return Q.getLookup('Default.Antenatal');
            }
            AntenatalRow.getLookup = getLookup;
        })(AntenatalRow = Default.AntenatalRow || (Default.AntenatalRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var AntenatalService;
        (function (AntenatalService) {
            AntenatalService.baseUrl = 'Default/Antenatal';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AntenatalService[x] = function (r, s, o) {
                    return Q.serviceRequest(AntenatalService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AntenatalService = Default.AntenatalService || (Default.AntenatalService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var AssistantSurgeonForm = /** @class */ (function (_super) {
            __extends(AssistantSurgeonForm, _super);
            function AssistantSurgeonForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AssistantSurgeonForm.init) {
                    AssistantSurgeonForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(AssistantSurgeonForm, [
                        'AssistantSurgeonName', w0
                    ]);
                }
                return _this;
            }
            AssistantSurgeonForm.formKey = 'Default.AssistantSurgeon';
            return AssistantSurgeonForm;
        }(Serenity.PrefixedContext));
        Default.AssistantSurgeonForm = AssistantSurgeonForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var AssistantSurgeonRow;
        (function (AssistantSurgeonRow) {
            AssistantSurgeonRow.idProperty = 'AssistantSurgeonId';
            AssistantSurgeonRow.nameProperty = 'AssistantSurgeonName';
            AssistantSurgeonRow.localTextPrefix = 'Default.AssistantSurgeon';
            AssistantSurgeonRow.lookupKey = 'Default.AssistantSurgeon';
            function getLookup() {
                return Q.getLookup('Default.AssistantSurgeon');
            }
            AssistantSurgeonRow.getLookup = getLookup;
        })(AssistantSurgeonRow = Default.AssistantSurgeonRow || (Default.AssistantSurgeonRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var AssistantSurgeonService;
        (function (AssistantSurgeonService) {
            AssistantSurgeonService.baseUrl = 'Default/AssistantSurgeon';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AssistantSurgeonService[x] = function (r, s, o) {
                    return Q.serviceRequest(AssistantSurgeonService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AssistantSurgeonService = Default.AssistantSurgeonService || (Default.AssistantSurgeonService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var AuscultationForm = /** @class */ (function (_super) {
            __extends(AuscultationForm, _super);
            function AuscultationForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AuscultationForm.init) {
                    AuscultationForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(AuscultationForm, [
                        'AuscultationName', w0
                    ]);
                }
                return _this;
            }
            AuscultationForm.formKey = 'Default.Auscultation';
            return AuscultationForm;
        }(Serenity.PrefixedContext));
        Default.AuscultationForm = AuscultationForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var AuscultationHistoryForm = /** @class */ (function (_super) {
            __extends(AuscultationHistoryForm, _super);
            function AuscultationHistoryForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AuscultationHistoryForm.init) {
                    AuscultationHistoryForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    Q.initFormType(AuscultationHistoryForm, [
                        'AdmissionId', w0,
                        'AuscultationId', w0
                    ]);
                }
                return _this;
            }
            AuscultationHistoryForm.formKey = 'Default.AuscultationHistory';
            return AuscultationHistoryForm;
        }(Serenity.PrefixedContext));
        Default.AuscultationHistoryForm = AuscultationHistoryForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var AuscultationHistoryRow;
        (function (AuscultationHistoryRow) {
            AuscultationHistoryRow.idProperty = 'AuscultationHistoryId';
            AuscultationHistoryRow.localTextPrefix = 'Default.AuscultationHistory';
            AuscultationHistoryRow.lookupKey = 'Default.AuscultationHistory';
            function getLookup() {
                return Q.getLookup('Default.AuscultationHistory');
            }
            AuscultationHistoryRow.getLookup = getLookup;
        })(AuscultationHistoryRow = Default.AuscultationHistoryRow || (Default.AuscultationHistoryRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var AuscultationHistoryService;
        (function (AuscultationHistoryService) {
            AuscultationHistoryService.baseUrl = 'Default/AuscultationHistory';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AuscultationHistoryService[x] = function (r, s, o) {
                    return Q.serviceRequest(AuscultationHistoryService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AuscultationHistoryService = Default.AuscultationHistoryService || (Default.AuscultationHistoryService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var AuscultationRow;
        (function (AuscultationRow) {
            AuscultationRow.idProperty = 'AuscultationId';
            AuscultationRow.nameProperty = 'AuscultationName';
            AuscultationRow.localTextPrefix = 'Default.Auscultation';
            AuscultationRow.lookupKey = 'Default.Auscultation';
            function getLookup() {
                return Q.getLookup('Default.Auscultation');
            }
            AuscultationRow.getLookup = getLookup;
        })(AuscultationRow = Default.AuscultationRow || (Default.AuscultationRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var AuscultationService;
        (function (AuscultationService) {
            AuscultationService.baseUrl = 'Default/Auscultation';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AuscultationService[x] = function (r, s, o) {
                    return Q.serviceRequest(AuscultationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AuscultationService = Default.AuscultationService || (Default.AuscultationService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var BedForm = /** @class */ (function (_super) {
            __extends(BedForm, _super);
            function BedForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BedForm.init) {
                    BedForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(BedForm, [
                        'BedNumber', w0,
                        'Note', w0
                    ]);
                }
                return _this;
            }
            BedForm.formKey = 'Default.Bed';
            return BedForm;
        }(Serenity.PrefixedContext));
        Default.BedForm = BedForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var BedRow;
        (function (BedRow) {
            BedRow.idProperty = 'BedId';
            BedRow.nameProperty = 'BedNumber';
            BedRow.localTextPrefix = 'Default.Bed';
            BedRow.lookupKey = 'Default.Bed';
            function getLookup() {
                return Q.getLookup('Default.Bed');
            }
            BedRow.getLookup = getLookup;
        })(BedRow = Default.BedRow || (Default.BedRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var BedService;
        (function (BedService) {
            BedService.baseUrl = 'Default/Bed';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BedService[x] = function (r, s, o) {
                    return Q.serviceRequest(BedService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BedService = Default.BedService || (Default.BedService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var BirthHistoryForm = /** @class */ (function (_super) {
            __extends(BirthHistoryForm, _super);
            function BirthHistoryForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BirthHistoryForm.init) {
                    BirthHistoryForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(BirthHistoryForm, [
                        'BirthHistory', w0,
                        'Note', w0
                    ]);
                }
                return _this;
            }
            BirthHistoryForm.formKey = 'Default.BirthHistory';
            return BirthHistoryForm;
        }(Serenity.PrefixedContext));
        Default.BirthHistoryForm = BirthHistoryForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var BirthHistoryRow;
        (function (BirthHistoryRow) {
            BirthHistoryRow.idProperty = 'BirthHistoryId';
            BirthHistoryRow.nameProperty = 'BirthHistory';
            BirthHistoryRow.localTextPrefix = 'Default.BirthHistory';
            BirthHistoryRow.lookupKey = 'Default.BirthHistory';
            function getLookup() {
                return Q.getLookup('Default.BirthHistory');
            }
            BirthHistoryRow.getLookup = getLookup;
        })(BirthHistoryRow = Default.BirthHistoryRow || (Default.BirthHistoryRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var BirthHistoryService;
        (function (BirthHistoryService) {
            BirthHistoryService.baseUrl = 'Default/BirthHistory';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BirthHistoryService[x] = function (r, s, o) {
                    return Q.serviceRequest(BirthHistoryService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BirthHistoryService = Default.BirthHistoryService || (Default.BirthHistoryService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var BloodGroupsForm = /** @class */ (function (_super) {
            __extends(BloodGroupsForm, _super);
            function BloodGroupsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BloodGroupsForm.init) {
                    BloodGroupsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(BloodGroupsForm, [
                        'BloodGroup', w0
                    ]);
                }
                return _this;
            }
            BloodGroupsForm.formKey = 'Default.BloodGroups';
            return BloodGroupsForm;
        }(Serenity.PrefixedContext));
        Default.BloodGroupsForm = BloodGroupsForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var BloodGroupsRow;
        (function (BloodGroupsRow) {
            BloodGroupsRow.idProperty = 'BloodGroupId';
            BloodGroupsRow.nameProperty = 'BloodGroup';
            BloodGroupsRow.localTextPrefix = 'Default.BloodGroups';
            BloodGroupsRow.lookupKey = 'Default.BloodGroups';
            function getLookup() {
                return Q.getLookup('Default.BloodGroups');
            }
            BloodGroupsRow.getLookup = getLookup;
        })(BloodGroupsRow = Default.BloodGroupsRow || (Default.BloodGroupsRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var BloodGroupsService;
        (function (BloodGroupsService) {
            BloodGroupsService.baseUrl = 'Default/BloodGroups';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BloodGroupsService[x] = function (r, s, o) {
                    return Q.serviceRequest(BloodGroupsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BloodGroupsService = Default.BloodGroupsService || (Default.BloodGroupsService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var BreathSoundForm = /** @class */ (function (_super) {
            __extends(BreathSoundForm, _super);
            function BreathSoundForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BreathSoundForm.init) {
                    BreathSoundForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(BreathSoundForm, [
                        'BreathSoundName', w0
                    ]);
                }
                return _this;
            }
            BreathSoundForm.formKey = 'Default.BreathSound';
            return BreathSoundForm;
        }(Serenity.PrefixedContext));
        Default.BreathSoundForm = BreathSoundForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var BreathSoundHistoryForm = /** @class */ (function (_super) {
            __extends(BreathSoundHistoryForm, _super);
            function BreathSoundHistoryForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BreathSoundHistoryForm.init) {
                    BreathSoundHistoryForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    Q.initFormType(BreathSoundHistoryForm, [
                        'AdmissionId', w0,
                        'BreathSoundId', w0
                    ]);
                }
                return _this;
            }
            BreathSoundHistoryForm.formKey = 'Default.BreathSoundHistory';
            return BreathSoundHistoryForm;
        }(Serenity.PrefixedContext));
        Default.BreathSoundHistoryForm = BreathSoundHistoryForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var BreathSoundHistoryRow;
        (function (BreathSoundHistoryRow) {
            BreathSoundHistoryRow.idProperty = 'BreathSoundHistoryId';
            BreathSoundHistoryRow.localTextPrefix = 'Default.BreathSoundHistory';
            BreathSoundHistoryRow.lookupKey = 'Default.BreathSoundHistory';
            function getLookup() {
                return Q.getLookup('Default.BreathSoundHistory');
            }
            BreathSoundHistoryRow.getLookup = getLookup;
        })(BreathSoundHistoryRow = Default.BreathSoundHistoryRow || (Default.BreathSoundHistoryRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var BreathSoundHistoryService;
        (function (BreathSoundHistoryService) {
            BreathSoundHistoryService.baseUrl = 'Default/BreathSoundHistory';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BreathSoundHistoryService[x] = function (r, s, o) {
                    return Q.serviceRequest(BreathSoundHistoryService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BreathSoundHistoryService = Default.BreathSoundHistoryService || (Default.BreathSoundHistoryService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var BreathSoundRow;
        (function (BreathSoundRow) {
            BreathSoundRow.idProperty = 'BreathSoundId';
            BreathSoundRow.nameProperty = 'BreathSoundName';
            BreathSoundRow.localTextPrefix = 'Default.BreathSound';
            BreathSoundRow.lookupKey = 'Default.BreathSound';
            function getLookup() {
                return Q.getLookup('Default.BreathSound');
            }
            BreathSoundRow.getLookup = getLookup;
        })(BreathSoundRow = Default.BreathSoundRow || (Default.BreathSoundRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var BreathSoundService;
        (function (BreathSoundService) {
            BreathSoundService.baseUrl = 'Default/BreathSound';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BreathSoundService[x] = function (r, s, o) {
                    return Q.serviceRequest(BreathSoundService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BreathSoundService = Default.BreathSoundService || (Default.BreathSoundService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var ComplicationForm = /** @class */ (function (_super) {
            __extends(ComplicationForm, _super);
            function ComplicationForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ComplicationForm.init) {
                    ComplicationForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.StringEditor;
                    var w3 = s.TextAreaEditor;
                    Q.initFormType(ComplicationForm, [
                        'AdmissionId', w0,
                        'EntryDate', w1,
                        'Age', w2,
                        'Sex', w2,
                        'AdmissionDate', w1,
                        'Weight', w2,
                        'BloodGroup', w2,
                        'PinNumber', w2,
                        'UnitNumber', w2,
                        'UnitRegNo', w2,
                        'BedNumber', w2,
                        'HospitalRegNo', w2,
                        'FinalDiagnosis', w3,
                        'ComplicationNoteId', w0,
                        'AddtoComplication', w2,
                        'ComplicationName', w3
                    ]);
                }
                return _this;
            }
            ComplicationForm.formKey = 'Default.Complication';
            return ComplicationForm;
        }(Serenity.PrefixedContext));
        Default.ComplicationForm = ComplicationForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var ComplicationNoteForm = /** @class */ (function (_super) {
            __extends(ComplicationNoteForm, _super);
            function ComplicationNoteForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ComplicationNoteForm.init) {
                    ComplicationNoteForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(ComplicationNoteForm, [
                        'ComplicationNote', w0
                    ]);
                }
                return _this;
            }
            ComplicationNoteForm.formKey = 'Default.ComplicationNote';
            return ComplicationNoteForm;
        }(Serenity.PrefixedContext));
        Default.ComplicationNoteForm = ComplicationNoteForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var ComplicationNoteRow;
        (function (ComplicationNoteRow) {
            ComplicationNoteRow.idProperty = 'ComplicationNoteId';
            ComplicationNoteRow.nameProperty = 'ComplicationNote';
            ComplicationNoteRow.localTextPrefix = 'Default.ComplicationNote';
            ComplicationNoteRow.lookupKey = 'Default.ComplicationNote';
            function getLookup() {
                return Q.getLookup('Default.ComplicationNote');
            }
            ComplicationNoteRow.getLookup = getLookup;
        })(ComplicationNoteRow = Default.ComplicationNoteRow || (Default.ComplicationNoteRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var ComplicationNoteService;
        (function (ComplicationNoteService) {
            ComplicationNoteService.baseUrl = 'Default/ComplicationNote';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ComplicationNoteService[x] = function (r, s, o) {
                    return Q.serviceRequest(ComplicationNoteService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ComplicationNoteService = Default.ComplicationNoteService || (Default.ComplicationNoteService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var ComplicationRow;
        (function (ComplicationRow) {
            ComplicationRow.idProperty = 'ComplicationId';
            ComplicationRow.nameProperty = 'Name';
            ComplicationRow.localTextPrefix = 'Default.Complication';
        })(ComplicationRow = Default.ComplicationRow || (Default.ComplicationRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var ComplicationService;
        (function (ComplicationService) {
            ComplicationService.baseUrl = 'Default/Complication';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ComplicationService[x] = function (r, s, o) {
                    return Q.serviceRequest(ComplicationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ComplicationService = Default.ComplicationService || (Default.ComplicationService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var ConsanguinityRow;
        (function (ConsanguinityRow) {
            ConsanguinityRow.idProperty = 'ConsanguinityId';
            ConsanguinityRow.nameProperty = 'Consanguinity';
            ConsanguinityRow.localTextPrefix = 'Default.Consanguinity';
            ConsanguinityRow.lookupKey = 'Default.Consanguinity';
            function getLookup() {
                return Q.getLookup('Default.Consanguinity');
            }
            ConsanguinityRow.getLookup = getLookup;
        })(ConsanguinityRow = Default.ConsanguinityRow || (Default.ConsanguinityRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var ConsanguinityService;
        (function (ConsanguinityService) {
            ConsanguinityService.baseUrl = 'Default/Consanguinity';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ConsanguinityService[x] = function (r, s, o) {
                    return Q.serviceRequest(ConsanguinityService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ConsanguinityService = Default.ConsanguinityService || (Default.ConsanguinityService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var DDiagnosisDetailsForm = /** @class */ (function (_super) {
            __extends(DDiagnosisDetailsForm, _super);
            function DDiagnosisDetailsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DDiagnosisDetailsForm.init) {
                    DDiagnosisDetailsForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    Q.initFormType(DDiagnosisDetailsForm, [
                        'DiagnosisId', w0
                    ]);
                }
                return _this;
            }
            DDiagnosisDetailsForm.formKey = 'Default.DDiagnosisDetails';
            return DDiagnosisDetailsForm;
        }(Serenity.PrefixedContext));
        Default.DDiagnosisDetailsForm = DDiagnosisDetailsForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var DDiagnosisDetailsRow;
        (function (DDiagnosisDetailsRow) {
            DDiagnosisDetailsRow.idProperty = 'DId';
            DDiagnosisDetailsRow.nameProperty = 'Diagnosis';
            DDiagnosisDetailsRow.localTextPrefix = 'Default.DDiagnosisDetails';
        })(DDiagnosisDetailsRow = Default.DDiagnosisDetailsRow || (Default.DDiagnosisDetailsRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var DDiagnosisDetailsService;
        (function (DDiagnosisDetailsService) {
            DDiagnosisDetailsService.baseUrl = 'Default/DDiagnosisDetails';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DDiagnosisDetailsService[x] = function (r, s, o) {
                    return Q.serviceRequest(DDiagnosisDetailsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DDiagnosisDetailsService = Default.DDiagnosisDetailsService || (Default.DDiagnosisDetailsService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var DehydrationRow;
        (function (DehydrationRow) {
            DehydrationRow.idProperty = 'DehydrationId';
            DehydrationRow.nameProperty = 'Dehydration';
            DehydrationRow.localTextPrefix = 'Default.Dehydration';
            DehydrationRow.lookupKey = 'Default.Dehydration';
            function getLookup() {
                return Q.getLookup('Default.Dehydration');
            }
            DehydrationRow.getLookup = getLookup;
        })(DehydrationRow = Default.DehydrationRow || (Default.DehydrationRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var DehydrationService;
        (function (DehydrationService) {
            DehydrationService.baseUrl = 'Default/Dehydration';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DehydrationService[x] = function (r, s, o) {
                    return Q.serviceRequest(DehydrationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DehydrationService = Default.DehydrationService || (Default.DehydrationService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var DesignationForm = /** @class */ (function (_super) {
            __extends(DesignationForm, _super);
            function DesignationForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DesignationForm.init) {
                    DesignationForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(DesignationForm, [
                        'DesignationName', w0
                    ]);
                }
                return _this;
            }
            DesignationForm.formKey = 'Default.Designation';
            return DesignationForm;
        }(Serenity.PrefixedContext));
        Default.DesignationForm = DesignationForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var DesignationRow;
        (function (DesignationRow) {
            DesignationRow.idProperty = 'DesignationId';
            DesignationRow.nameProperty = 'DesignationName';
            DesignationRow.localTextPrefix = 'Default.Designation';
            DesignationRow.lookupKey = 'Default.Designation';
            function getLookup() {
                return Q.getLookup('Default.Designation');
            }
            DesignationRow.getLookup = getLookup;
        })(DesignationRow = Default.DesignationRow || (Default.DesignationRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var DesignationService;
        (function (DesignationService) {
            DesignationService.baseUrl = 'Default/Designation';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DesignationService[x] = function (r, s, o) {
                    return Q.serviceRequest(DesignationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DesignationService = Default.DesignationService || (Default.DesignationService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var DiagnosisForm = /** @class */ (function (_super) {
            __extends(DiagnosisForm, _super);
            function DiagnosisForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DiagnosisForm.init) {
                    DiagnosisForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(DiagnosisForm, [
                        'DiagnosisName', w0,
                        'Note', w0
                    ]);
                }
                return _this;
            }
            DiagnosisForm.formKey = 'Default.Diagnosis';
            return DiagnosisForm;
        }(Serenity.PrefixedContext));
        Default.DiagnosisForm = DiagnosisForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var DiagnosisRow;
        (function (DiagnosisRow) {
            DiagnosisRow.idProperty = 'DiagnosisId';
            DiagnosisRow.nameProperty = 'DiagnosisName';
            DiagnosisRow.localTextPrefix = 'Default.Diagnosis';
            DiagnosisRow.lookupKey = 'Default.Diagnosis';
            function getLookup() {
                return Q.getLookup('Default.Diagnosis');
            }
            DiagnosisRow.getLookup = getLookup;
        })(DiagnosisRow = Default.DiagnosisRow || (Default.DiagnosisRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var DiagnosisService;
        (function (DiagnosisService) {
            DiagnosisService.baseUrl = 'Default/Diagnosis';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DiagnosisService[x] = function (r, s, o) {
                    return Q.serviceRequest(DiagnosisService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DiagnosisService = Default.DiagnosisService || (Default.DiagnosisService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var DiagramForm = /** @class */ (function (_super) {
            __extends(DiagramForm, _super);
            function DiagramForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DiagramForm.init) {
                    DiagramForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(DiagramForm, [
                        'DiagramName', w0
                    ]);
                }
                return _this;
            }
            DiagramForm.formKey = 'Default.Diagram';
            return DiagramForm;
        }(Serenity.PrefixedContext));
        Default.DiagramForm = DiagramForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var DiagramRow;
        (function (DiagramRow) {
            DiagramRow.idProperty = 'DiagramId';
            DiagramRow.nameProperty = 'DiagramName';
            DiagramRow.localTextPrefix = 'Default.Diagram';
            DiagramRow.lookupKey = 'Default.Diagram';
            function getLookup() {
                return Q.getLookup('Default.Diagram');
            }
            DiagramRow.getLookup = getLookup;
        })(DiagramRow = Default.DiagramRow || (Default.DiagramRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var DiagramService;
        (function (DiagramService) {
            DiagramService.baseUrl = 'Default/Diagram';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DiagramService[x] = function (r, s, o) {
                    return Q.serviceRequest(DiagramService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DiagramService = Default.DiagramService || (Default.DiagramService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var DischargeForm = /** @class */ (function (_super) {
            __extends(DischargeForm, _super);
            function DischargeForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DischargeForm.init) {
                    DischargeForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.StringEditor;
                    var w3 = s.TextAreaEditor;
                    Q.initFormType(DischargeForm, [
                        'AdmissionId', w0,
                        'Date', w1,
                        'Age', w2,
                        'Sex', w2,
                        'AdmissionDate', w1,
                        'Weight', w2,
                        'BloodGroup', w2,
                        'PinNumber', w2,
                        'UnitNumber', w2,
                        'UnitRegNo', w2,
                        'BedNumber', w2,
                        'HospitalRegNo', w2,
                        'Cbc', w2,
                        'Creatinine', w2,
                        'Urea', w2,
                        'Sugar', w2,
                        'Albumin', w2,
                        'Calcium', w2,
                        'BloodCulture', w2,
                        'Crp', w2,
                        'Bt', w2,
                        'Ct', w2,
                        'ProthrombinTime', w2,
                        'Aptt', w2,
                        'OptionToAddHematology', w2,
                        'Na', w2,
                        'K', w2,
                        'Cl', w2,
                        'HCO3', w2,
                        'Cxr', w2,
                        'Axr', w2,
                        'XrayKub', w2,
                        'Usg', w2,
                        'BaEnema', w2,
                        'BaMealFollowThrough', w2,
                        'Mcu', w2,
                        'Rgu', w2,
                        'Ivu', w2,
                        'CtScan', w2,
                        'Mri', w2,
                        'OptionToAddImaging', w2,
                        'OperationId', w0,
                        'OperationDate', w1,
                        'Findings', w3,
                        'Procedures', w3,
                        'Diagnosis', w3,
                        'Indication', w3,
                        'Anesthesia', w3,
                        'Position', w3,
                        'Incision', w3,
                        'Histopathology', w3,
                        'SpecialNote', w3,
                        'Instructions', w3,
                        'FurtherPlan', w3,
                        'TreatmentContinues', w3,
                        'MedicineId', w0,
                        'DoaseId', w0,
                        'DurationId', w0,
                        'Meal', w0,
                        'AddToArea', w2,
                        'Advice', w3
                    ]);
                }
                return _this;
            }
            DischargeForm.formKey = 'Default.Discharge';
            return DischargeForm;
        }(Serenity.PrefixedContext));
        Default.DischargeForm = DischargeForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var DischargeRow;
        (function (DischargeRow) {
            DischargeRow.idProperty = 'DischargeId';
            DischargeRow.nameProperty = 'Name';
            DischargeRow.localTextPrefix = 'Default.Discharge';
            DischargeRow.lookupKey = 'Default.Discharge';
            function getLookup() {
                return Q.getLookup('Default.Discharge');
            }
            DischargeRow.getLookup = getLookup;
        })(DischargeRow = Default.DischargeRow || (Default.DischargeRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var DischargeService;
        (function (DischargeService) {
            DischargeService.baseUrl = 'Default/Discharge';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DischargeService[x] = function (r, s, o) {
                    return Q.serviceRequest(DischargeService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DischargeService = Default.DischargeService || (Default.DischargeService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var DistrictForm = /** @class */ (function (_super) {
            __extends(DistrictForm, _super);
            function DistrictForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DistrictForm.init) {
                    DistrictForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(DistrictForm, [
                        'DistrictName', w0
                    ]);
                }
                return _this;
            }
            DistrictForm.formKey = 'Default.District';
            return DistrictForm;
        }(Serenity.PrefixedContext));
        Default.DistrictForm = DistrictForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var DistrictRow;
        (function (DistrictRow) {
            DistrictRow.idProperty = 'DistrictId';
            DistrictRow.nameProperty = 'DistrictName';
            DistrictRow.localTextPrefix = 'Default.District';
            DistrictRow.lookupKey = 'Default.District';
            function getLookup() {
                return Q.getLookup('Default.District');
            }
            DistrictRow.getLookup = getLookup;
        })(DistrictRow = Default.DistrictRow || (Default.DistrictRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var DistrictService;
        (function (DistrictService) {
            DistrictService.baseUrl = 'Default/District';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DistrictService[x] = function (r, s, o) {
                    return Q.serviceRequest(DistrictService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DistrictService = Default.DistrictService || (Default.DistrictService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var DoaseForm = /** @class */ (function (_super) {
            __extends(DoaseForm, _super);
            function DoaseForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DoaseForm.init) {
                    DoaseForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(DoaseForm, [
                        'DoaseName', w0
                    ]);
                }
                return _this;
            }
            DoaseForm.formKey = 'Default.Doase';
            return DoaseForm;
        }(Serenity.PrefixedContext));
        Default.DoaseForm = DoaseForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var DoaseRow;
        (function (DoaseRow) {
            DoaseRow.idProperty = 'Id';
            DoaseRow.nameProperty = 'DoaseName';
            DoaseRow.localTextPrefix = 'Default.Doase';
            DoaseRow.lookupKey = 'Default.Doase';
            function getLookup() {
                return Q.getLookup('Default.Doase');
            }
            DoaseRow.getLookup = getLookup;
        })(DoaseRow = Default.DoaseRow || (Default.DoaseRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var DoaseService;
        (function (DoaseService) {
            DoaseService.baseUrl = 'Default/Doase';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DoaseService[x] = function (r, s, o) {
                    return Q.serviceRequest(DoaseService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DoaseService = Default.DoaseService || (Default.DoaseService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var DurationForm = /** @class */ (function (_super) {
            __extends(DurationForm, _super);
            function DurationForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DurationForm.init) {
                    DurationForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(DurationForm, [
                        'DurationName', w0
                    ]);
                }
                return _this;
            }
            DurationForm.formKey = 'Default.Duration';
            return DurationForm;
        }(Serenity.PrefixedContext));
        Default.DurationForm = DurationForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var DurationRow;
        (function (DurationRow) {
            DurationRow.idProperty = 'Id';
            DurationRow.nameProperty = 'DurationName';
            DurationRow.localTextPrefix = 'Default.Duration';
            DurationRow.lookupKey = 'Default.Duration';
            function getLookup() {
                return Q.getLookup('Default.Duration');
            }
            DurationRow.getLookup = getLookup;
        })(DurationRow = Default.DurationRow || (Default.DurationRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var DurationService;
        (function (DurationService) {
            DurationService.baseUrl = 'Default/Duration';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DurationService[x] = function (r, s, o) {
                    return Q.serviceRequest(DurationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DurationService = Default.DurationService || (Default.DurationService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var FamilyHistoryForm = /** @class */ (function (_super) {
            __extends(FamilyHistoryForm, _super);
            function FamilyHistoryForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!FamilyHistoryForm.init) {
                    FamilyHistoryForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(FamilyHistoryForm, [
                        'FamilyHistory', w0,
                        'Note', w0
                    ]);
                }
                return _this;
            }
            FamilyHistoryForm.formKey = 'Default.FamilyHistory';
            return FamilyHistoryForm;
        }(Serenity.PrefixedContext));
        Default.FamilyHistoryForm = FamilyHistoryForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var FamilyHistoryRow;
        (function (FamilyHistoryRow) {
            FamilyHistoryRow.idProperty = 'FamilyHistoryId';
            FamilyHistoryRow.nameProperty = 'FamilyHistory';
            FamilyHistoryRow.localTextPrefix = 'Default.FamilyHistory';
            FamilyHistoryRow.lookupKey = 'Default.FamilyHistory';
            function getLookup() {
                return Q.getLookup('Default.FamilyHistory');
            }
            FamilyHistoryRow.getLookup = getLookup;
        })(FamilyHistoryRow = Default.FamilyHistoryRow || (Default.FamilyHistoryRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var FamilyHistoryService;
        (function (FamilyHistoryService) {
            FamilyHistoryService.baseUrl = 'Default/FamilyHistory';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                FamilyHistoryService[x] = function (r, s, o) {
                    return Q.serviceRequest(FamilyHistoryService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(FamilyHistoryService = Default.FamilyHistoryService || (Default.FamilyHistoryService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var FollowUpForm = /** @class */ (function (_super) {
            __extends(FollowUpForm, _super);
            function FollowUpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!FollowUpForm.init) {
                    FollowUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.StringEditor;
                    var w3 = s.TextAreaEditor;
                    Q.initFormType(FollowUpForm, [
                        'AdmissionId', w0,
                        'Date', w1,
                        'Age', w2,
                        'Sex', w2,
                        'Weight', w2,
                        'BloodGroup', w2,
                        'AdmissionDate', w1,
                        'PinNumber', w2,
                        'UnitNumber', w2,
                        'UnitRegNo', w2,
                        'BedNumber', w2,
                        'HospitalRegNo', w2,
                        'DiagnosisId', w0,
                        'AddtoDiagnosis', w2,
                        'ChiefComplaintId', w0,
                        'AddtoComplaint', w2,
                        'Diagnosis', w3,
                        'ChiefComplaint', w3,
                        'Exam', w3,
                        'Advice', w3,
                        'Note', w3,
                        'Plan', w3
                    ]);
                }
                return _this;
            }
            FollowUpForm.formKey = 'Default.FollowUp';
            return FollowUpForm;
        }(Serenity.PrefixedContext));
        Default.FollowUpForm = FollowUpForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var FollowUpRow;
        (function (FollowUpRow) {
            FollowUpRow.idProperty = 'FollowUpId';
            FollowUpRow.nameProperty = 'PatientName';
            FollowUpRow.localTextPrefix = 'Default.FollowUp';
        })(FollowUpRow = Default.FollowUpRow || (Default.FollowUpRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var FollowUpService;
        (function (FollowUpService) {
            FollowUpService.baseUrl = 'Default/FollowUp';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                FollowUpService[x] = function (r, s, o) {
                    return Q.serviceRequest(FollowUpService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(FollowUpService = Default.FollowUpService || (Default.FollowUpService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var FurtherPlanForm = /** @class */ (function (_super) {
            __extends(FurtherPlanForm, _super);
            function FurtherPlanForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!FurtherPlanForm.init) {
                    FurtherPlanForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(FurtherPlanForm, [
                        'FurtherPlanName', w0
                    ]);
                }
                return _this;
            }
            FurtherPlanForm.formKey = 'Default.FurtherPlan';
            return FurtherPlanForm;
        }(Serenity.PrefixedContext));
        Default.FurtherPlanForm = FurtherPlanForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var FurtherPlanRow;
        (function (FurtherPlanRow) {
            FurtherPlanRow.idProperty = 'FurtherPlanId';
            FurtherPlanRow.nameProperty = 'FurtherPlanName';
            FurtherPlanRow.localTextPrefix = 'Default.FurtherPlan';
            FurtherPlanRow.lookupKey = 'Default.FurtherPlan';
            function getLookup() {
                return Q.getLookup('Default.FurtherPlan');
            }
            FurtherPlanRow.getLookup = getLookup;
        })(FurtherPlanRow = Default.FurtherPlanRow || (Default.FurtherPlanRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var FurtherPlanService;
        (function (FurtherPlanService) {
            FurtherPlanService.baseUrl = 'Default/FurtherPlan';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                FurtherPlanService[x] = function (r, s, o) {
                    return Q.serviceRequest(FurtherPlanService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(FurtherPlanService = Default.FurtherPlanService || (Default.FurtherPlanService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var HistopathologyForm = /** @class */ (function (_super) {
            __extends(HistopathologyForm, _super);
            function HistopathologyForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!HistopathologyForm.init) {
                    HistopathologyForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(HistopathologyForm, [
                        'HistopathologyName', w0
                    ]);
                }
                return _this;
            }
            HistopathologyForm.formKey = 'Default.Histopathology';
            return HistopathologyForm;
        }(Serenity.PrefixedContext));
        Default.HistopathologyForm = HistopathologyForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var HistopathologyRow;
        (function (HistopathologyRow) {
            HistopathologyRow.idProperty = 'HistopathologyId';
            HistopathologyRow.nameProperty = 'HistopathologyName';
            HistopathologyRow.localTextPrefix = 'Default.Histopathology';
            HistopathologyRow.lookupKey = 'Default.Histopathology';
            function getLookup() {
                return Q.getLookup('Default.Histopathology');
            }
            HistopathologyRow.getLookup = getLookup;
        })(HistopathologyRow = Default.HistopathologyRow || (Default.HistopathologyRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var HistopathologyService;
        (function (HistopathologyService) {
            HistopathologyService.baseUrl = 'Default/Histopathology';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                HistopathologyService[x] = function (r, s, o) {
                    return Q.serviceRequest(HistopathologyService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(HistopathologyService = Default.HistopathologyService || (Default.HistopathologyService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var IllNessForm = /** @class */ (function (_super) {
            __extends(IllNessForm, _super);
            function IllNessForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!IllNessForm.init) {
                    IllNessForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(IllNessForm, [
                        'IllnessName', w0
                    ]);
                }
                return _this;
            }
            IllNessForm.formKey = 'Default.IllNess';
            return IllNessForm;
        }(Serenity.PrefixedContext));
        Default.IllNessForm = IllNessForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var IllNessRow;
        (function (IllNessRow) {
            IllNessRow.idProperty = 'IllnessId';
            IllNessRow.nameProperty = 'IllnessName';
            IllNessRow.localTextPrefix = 'Default.IllNess';
            IllNessRow.lookupKey = 'Default.IllNess';
            function getLookup() {
                return Q.getLookup('Default.IllNess');
            }
            IllNessRow.getLookup = getLookup;
        })(IllNessRow = Default.IllNessRow || (Default.IllNessRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var IllNessService;
        (function (IllNessService) {
            IllNessService.baseUrl = 'Default/IllNess';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                IllNessService[x] = function (r, s, o) {
                    return Q.serviceRequest(IllNessService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(IllNessService = Default.IllNessService || (Default.IllNessService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var ImagesForm = /** @class */ (function (_super) {
            __extends(ImagesForm, _super);
            function ImagesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ImagesForm.init) {
                    ImagesForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.StringEditor;
                    var w3 = s.MultipleImageUploadEditor;
                    Q.initFormType(ImagesForm, [
                        'AdmissionId', w0,
                        'EntryDate', w1,
                        'Age', w2,
                        'Sex', w2,
                        'AdmissionDate', w1,
                        'Weight', w2,
                        'BloodGroup', w2,
                        'PinNumber', w2,
                        'UnitNumber', w2,
                        'UnitRegNo', w2,
                        'BedNumber', w2,
                        'HospitalRegNo', w2,
                        'Image', w3
                    ]);
                }
                return _this;
            }
            ImagesForm.formKey = 'Default.Images';
            return ImagesForm;
        }(Serenity.PrefixedContext));
        Default.ImagesForm = ImagesForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var ImagesRow;
        (function (ImagesRow) {
            ImagesRow.idProperty = 'ImageId';
            ImagesRow.nameProperty = 'PatientName';
            ImagesRow.localTextPrefix = 'Default.Images';
        })(ImagesRow = Default.ImagesRow || (Default.ImagesRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var ImagesService;
        (function (ImagesService) {
            ImagesService.baseUrl = 'Default/Images';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ImagesService[x] = function (r, s, o) {
                    return Q.serviceRequest(ImagesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ImagesService = Default.ImagesService || (Default.ImagesService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var ImmunizationForm = /** @class */ (function (_super) {
            __extends(ImmunizationForm, _super);
            function ImmunizationForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ImmunizationForm.init) {
                    ImmunizationForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(ImmunizationForm, [
                        'ImmunizationName', w0
                    ]);
                }
                return _this;
            }
            ImmunizationForm.formKey = 'Default.Immunization';
            return ImmunizationForm;
        }(Serenity.PrefixedContext));
        Default.ImmunizationForm = ImmunizationForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var ImmunizationHistoryForm = /** @class */ (function (_super) {
            __extends(ImmunizationHistoryForm, _super);
            function ImmunizationHistoryForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ImmunizationHistoryForm.init) {
                    ImmunizationHistoryForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    Q.initFormType(ImmunizationHistoryForm, [
                        'AdmissionId', w0,
                        'ImmunizationId', w0
                    ]);
                }
                return _this;
            }
            ImmunizationHistoryForm.formKey = 'Default.ImmunizationHistory';
            return ImmunizationHistoryForm;
        }(Serenity.PrefixedContext));
        Default.ImmunizationHistoryForm = ImmunizationHistoryForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var ImmunizationHistoryRow;
        (function (ImmunizationHistoryRow) {
            ImmunizationHistoryRow.idProperty = 'ImmunizationHistoryId';
            ImmunizationHistoryRow.localTextPrefix = 'Default.ImmunizationHistory';
            ImmunizationHistoryRow.lookupKey = 'Default.ImmunizationHistory';
            function getLookup() {
                return Q.getLookup('Default.ImmunizationHistory');
            }
            ImmunizationHistoryRow.getLookup = getLookup;
        })(ImmunizationHistoryRow = Default.ImmunizationHistoryRow || (Default.ImmunizationHistoryRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var ImmunizationHistoryService;
        (function (ImmunizationHistoryService) {
            ImmunizationHistoryService.baseUrl = 'Default/ImmunizationHistory';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ImmunizationHistoryService[x] = function (r, s, o) {
                    return Q.serviceRequest(ImmunizationHistoryService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ImmunizationHistoryService = Default.ImmunizationHistoryService || (Default.ImmunizationHistoryService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var ImmunizationRow;
        (function (ImmunizationRow) {
            ImmunizationRow.idProperty = 'ImmunizationId';
            ImmunizationRow.nameProperty = 'ImmunizationName';
            ImmunizationRow.localTextPrefix = 'Default.Immunization';
            ImmunizationRow.lookupKey = 'Default.Immunization';
            function getLookup() {
                return Q.getLookup('Default.Immunization');
            }
            ImmunizationRow.getLookup = getLookup;
        })(ImmunizationRow = Default.ImmunizationRow || (Default.ImmunizationRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var ImmunizationService;
        (function (ImmunizationService) {
            ImmunizationService.baseUrl = 'Default/Immunization';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ImmunizationService[x] = function (r, s, o) {
                    return Q.serviceRequest(ImmunizationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ImmunizationService = Default.ImmunizationService || (Default.ImmunizationService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var IncisionForm = /** @class */ (function (_super) {
            __extends(IncisionForm, _super);
            function IncisionForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!IncisionForm.init) {
                    IncisionForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(IncisionForm, [
                        'IncisionName', w0
                    ]);
                }
                return _this;
            }
            IncisionForm.formKey = 'Default.Incision';
            return IncisionForm;
        }(Serenity.PrefixedContext));
        Default.IncisionForm = IncisionForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var IncisionRow;
        (function (IncisionRow) {
            IncisionRow.idProperty = 'IncisionId';
            IncisionRow.nameProperty = 'IncisionName';
            IncisionRow.localTextPrefix = 'Default.Incision';
            IncisionRow.lookupKey = 'Default.Incision';
            function getLookup() {
                return Q.getLookup('Default.Incision');
            }
            IncisionRow.getLookup = getLookup;
        })(IncisionRow = Default.IncisionRow || (Default.IncisionRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var IncisionService;
        (function (IncisionService) {
            IncisionService.baseUrl = 'Default/Incision';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                IncisionService[x] = function (r, s, o) {
                    return Q.serviceRequest(IncisionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(IncisionService = Default.IncisionService || (Default.IncisionService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var IndicationForm = /** @class */ (function (_super) {
            __extends(IndicationForm, _super);
            function IndicationForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!IndicationForm.init) {
                    IndicationForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(IndicationForm, [
                        'IndicationName', w0
                    ]);
                }
                return _this;
            }
            IndicationForm.formKey = 'Default.Indication';
            return IndicationForm;
        }(Serenity.PrefixedContext));
        Default.IndicationForm = IndicationForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var IndicationRow;
        (function (IndicationRow) {
            IndicationRow.idProperty = 'IndicationId';
            IndicationRow.nameProperty = 'IndicationName';
            IndicationRow.localTextPrefix = 'Default.Indication';
            IndicationRow.lookupKey = 'Default.Indication';
            function getLookup() {
                return Q.getLookup('Default.Indication');
            }
            IndicationRow.getLookup = getLookup;
        })(IndicationRow = Default.IndicationRow || (Default.IndicationRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var IndicationService;
        (function (IndicationService) {
            IndicationService.baseUrl = 'Default/Indication';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                IndicationService[x] = function (r, s, o) {
                    return Q.serviceRequest(IndicationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(IndicationService = Default.IndicationService || (Default.IndicationService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var InstructionsForm = /** @class */ (function (_super) {
            __extends(InstructionsForm, _super);
            function InstructionsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!InstructionsForm.init) {
                    InstructionsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(InstructionsForm, [
                        'InstructionsName', w0
                    ]);
                }
                return _this;
            }
            InstructionsForm.formKey = 'Default.Instructions';
            return InstructionsForm;
        }(Serenity.PrefixedContext));
        Default.InstructionsForm = InstructionsForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var InstructionsRow;
        (function (InstructionsRow) {
            InstructionsRow.idProperty = 'InstructionsId';
            InstructionsRow.nameProperty = 'InstructionsName';
            InstructionsRow.localTextPrefix = 'Default.Instructions';
            InstructionsRow.lookupKey = 'Default.Instructions';
            function getLookup() {
                return Q.getLookup('Default.Instructions');
            }
            InstructionsRow.getLookup = getLookup;
        })(InstructionsRow = Default.InstructionsRow || (Default.InstructionsRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var InstructionsService;
        (function (InstructionsService) {
            InstructionsService.baseUrl = 'Default/Instructions';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                InstructionsService[x] = function (r, s, o) {
                    return Q.serviceRequest(InstructionsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(InstructionsService = Default.InstructionsService || (Default.InstructionsService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var InvestigationForm = /** @class */ (function (_super) {
            __extends(InvestigationForm, _super);
            function InvestigationForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!InvestigationForm.init) {
                    InvestigationForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.StringEditor;
                    var w3 = Default.OtherLabWithInvestigationEditor;
                    var w4 = Default.PathologyAndInvestigationDetailsEditor;
                    Q.initFormType(InvestigationForm, [
                        'AdmissionId', w0,
                        'EntryDate', w1,
                        'Age', w2,
                        'Sex', w2,
                        'AdmissionDate', w1,
                        'Weight', w2,
                        'BloodGroup', w2,
                        'PinNumber', w2,
                        'UnitNumber', w2,
                        'UnitRegNo', w2,
                        'BedNumber', w2,
                        'HospitalRegNo', w2,
                        'Cbc', w2,
                        'Creatinine', w2,
                        'Urea', w2,
                        'Sugar', w2,
                        'Albumin', w2,
                        'Calcium', w2,
                        'BloodCulture', w2,
                        'Crp', w2,
                        'Bt', w2,
                        'Ct', w2,
                        'ProthrombinTime', w2,
                        'Aptt', w2,
                        'OptionToAddHematology', w2,
                        'Na', w2,
                        'K', w2,
                        'Cl', w2,
                        'HCO3', w2,
                        'OtherLab', w3,
                        'Cxr', w2,
                        'Axr', w2,
                        'XrayKub', w2,
                        'Usg', w2,
                        'BaEnema', w2,
                        'BaMealFollowThrough', w2,
                        'Mcu', w2,
                        'Rgu', w2,
                        'Ivu', w2,
                        'CtScan', w2,
                        'Mri', w2,
                        'OptionToAddImaging', w2,
                        'Pathology', w4
                    ]);
                }
                return _this;
            }
            InvestigationForm.formKey = 'Default.Investigation';
            return InvestigationForm;
        }(Serenity.PrefixedContext));
        Default.InvestigationForm = InvestigationForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var InvestigationRow;
        (function (InvestigationRow) {
            InvestigationRow.idProperty = 'InvestigationId';
            InvestigationRow.nameProperty = 'Name';
            InvestigationRow.localTextPrefix = 'Default.Investigation';
            InvestigationRow.lookupKey = 'Default.Investigation';
            function getLookup() {
                return Q.getLookup('Default.Investigation');
            }
            InvestigationRow.getLookup = getLookup;
        })(InvestigationRow = Default.InvestigationRow || (Default.InvestigationRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var InvestigationService;
        (function (InvestigationService) {
            InvestigationService.baseUrl = 'Default/Investigation';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                InvestigationService[x] = function (r, s, o) {
                    return Q.serviceRequest(InvestigationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(InvestigationService = Default.InvestigationService || (Default.InvestigationService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var MajorSurgeryForm = /** @class */ (function (_super) {
            __extends(MajorSurgeryForm, _super);
            function MajorSurgeryForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MajorSurgeryForm.init) {
                    MajorSurgeryForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(MajorSurgeryForm, [
                        'MajorSurgeryName', w0
                    ]);
                }
                return _this;
            }
            MajorSurgeryForm.formKey = 'Default.MajorSurgery';
            return MajorSurgeryForm;
        }(Serenity.PrefixedContext));
        Default.MajorSurgeryForm = MajorSurgeryForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var MajorSurgeryRow;
        (function (MajorSurgeryRow) {
            MajorSurgeryRow.idProperty = 'MajorSurgeryId';
            MajorSurgeryRow.nameProperty = 'MajorSurgeryName';
            MajorSurgeryRow.localTextPrefix = 'Default.MajorSurgery';
            MajorSurgeryRow.lookupKey = 'Default.MajorSurgery';
            function getLookup() {
                return Q.getLookup('Default.MajorSurgery');
            }
            MajorSurgeryRow.getLookup = getLookup;
        })(MajorSurgeryRow = Default.MajorSurgeryRow || (Default.MajorSurgeryRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var MajorSurgeryService;
        (function (MajorSurgeryService) {
            MajorSurgeryService.baseUrl = 'Default/MajorSurgery';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MajorSurgeryService[x] = function (r, s, o) {
                    return Q.serviceRequest(MajorSurgeryService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MajorSurgeryService = Default.MajorSurgeryService || (Default.MajorSurgeryService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var MealsForm = /** @class */ (function (_super) {
            __extends(MealsForm, _super);
            function MealsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MealsForm.init) {
                    MealsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(MealsForm, [
                        'MealName', w0
                    ]);
                }
                return _this;
            }
            MealsForm.formKey = 'Default.Meals';
            return MealsForm;
        }(Serenity.PrefixedContext));
        Default.MealsForm = MealsForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var MealsRow;
        (function (MealsRow) {
            MealsRow.idProperty = 'MealId';
            MealsRow.nameProperty = 'MealName';
            MealsRow.localTextPrefix = 'Default.Meals';
            MealsRow.lookupKey = 'Default.Meals';
            function getLookup() {
                return Q.getLookup('Default.Meals');
            }
            MealsRow.getLookup = getLookup;
        })(MealsRow = Default.MealsRow || (Default.MealsRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var MealsService;
        (function (MealsService) {
            MealsService.baseUrl = 'Default/Meals';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MealsService[x] = function (r, s, o) {
                    return Q.serviceRequest(MealsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MealsService = Default.MealsService || (Default.MealsService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var MedicineForm = /** @class */ (function (_super) {
            __extends(MedicineForm, _super);
            function MedicineForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MedicineForm.init) {
                    MedicineForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(MedicineForm, [
                        'MedicineName', w0
                    ]);
                }
                return _this;
            }
            MedicineForm.formKey = 'Default.Medicine';
            return MedicineForm;
        }(Serenity.PrefixedContext));
        Default.MedicineForm = MedicineForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var MedicineRow;
        (function (MedicineRow) {
            MedicineRow.idProperty = 'MedicineId';
            MedicineRow.nameProperty = 'MedicineName';
            MedicineRow.localTextPrefix = 'Default.Medicine';
            MedicineRow.lookupKey = 'Default.Medicine';
            function getLookup() {
                return Q.getLookup('Default.Medicine');
            }
            MedicineRow.getLookup = getLookup;
        })(MedicineRow = Default.MedicineRow || (Default.MedicineRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var MedicineService;
        (function (MedicineService) {
            MedicineService.baseUrl = 'Default/Medicine';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MedicineService[x] = function (r, s, o) {
                    return Q.serviceRequest(MedicineService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MedicineService = Default.MedicineService || (Default.MedicineService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var NatalForm = /** @class */ (function (_super) {
            __extends(NatalForm, _super);
            function NatalForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!NatalForm.init) {
                    NatalForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(NatalForm, [
                        'NatalName', w0
                    ]);
                }
                return _this;
            }
            NatalForm.formKey = 'Default.Natal';
            return NatalForm;
        }(Serenity.PrefixedContext));
        Default.NatalForm = NatalForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var NatalRow;
        (function (NatalRow) {
            NatalRow.idProperty = 'NatalId';
            NatalRow.nameProperty = 'NatalName';
            NatalRow.localTextPrefix = 'Default.Natal';
            NatalRow.lookupKey = 'Default.Natal';
            function getLookup() {
                return Q.getLookup('Default.Natal');
            }
            NatalRow.getLookup = getLookup;
        })(NatalRow = Default.NatalRow || (Default.NatalRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var NatalService;
        (function (NatalService) {
            NatalService.baseUrl = 'Default/Natal';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                NatalService[x] = function (r, s, o) {
                    return Q.serviceRequest(NatalService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(NatalService = Default.NatalService || (Default.NatalService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var NoteForm = /** @class */ (function (_super) {
            __extends(NoteForm, _super);
            function NoteForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!NoteForm.init) {
                    NoteForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.StringEditor;
                    var w3 = s.TextAreaEditor;
                    Q.initFormType(NoteForm, [
                        'AdmissionId', w0,
                        'EntryDate', w1,
                        'Age', w2,
                        'Sex', w2,
                        'AdmissionDate', w1,
                        'Weight', w2,
                        'BloodGroup', w2,
                        'PinNumber', w2,
                        'UnitNumber', w2,
                        'UnitRegNo', w2,
                        'BedNumber', w2,
                        'HospitalRegNo', w2,
                        'FinalDiagnosis', w3,
                        'PNoteId', w0,
                        'AddtoNote', w2,
                        'Note', w3
                    ]);
                }
                return _this;
            }
            NoteForm.formKey = 'Default.Note';
            return NoteForm;
        }(Serenity.PrefixedContext));
        Default.NoteForm = NoteForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var NoteRow;
        (function (NoteRow) {
            NoteRow.idProperty = 'NoteId';
            NoteRow.nameProperty = 'Name';
            NoteRow.localTextPrefix = 'Default.Note';
        })(NoteRow = Default.NoteRow || (Default.NoteRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var NoteService;
        (function (NoteService) {
            NoteService.baseUrl = 'Default/Note';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                NoteService[x] = function (r, s, o) {
                    return Q.serviceRequest(NoteService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(NoteService = Default.NoteService || (Default.NoteService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var OedemaRow;
        (function (OedemaRow) {
            OedemaRow.idProperty = 'OedemaId';
            OedemaRow.nameProperty = 'Oedema';
            OedemaRow.localTextPrefix = 'Default.Oedema';
            OedemaRow.lookupKey = 'Default.Oedema';
            function getLookup() {
                return Q.getLookup('Default.Oedema');
            }
            OedemaRow.getLookup = getLookup;
        })(OedemaRow = Default.OedemaRow || (Default.OedemaRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var OedemaService;
        (function (OedemaService) {
            OedemaService.baseUrl = 'Default/Oedema';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OedemaService[x] = function (r, s, o) {
                    return Q.serviceRequest(OedemaService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OedemaService = Default.OedemaService || (Default.OedemaService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var OpdForm = /** @class */ (function (_super) {
            __extends(OpdForm, _super);
            function OpdForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OpdForm.init) {
                    OpdForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.LookupEditor;
                    var w3 = s.EnumEditor;
                    var w4 = Default.OpdWithDiagnosisDetailsEditor;
                    var w5 = s.TextAreaEditor;
                    Q.initFormType(OpdForm, [
                        'Name', w0,
                        'Date', w1,
                        'Age', w0,
                        'SexId', w2,
                        'BodyWt', w0,
                        'RegNo', w0,
                        'UnitId', w2,
                        'PatientType', w3,
                        'DistrictId', w2,
                        'UpazilaId', w2,
                        'House', w0,
                        'PostOffice', w0,
                        'Mobile', w0,
                        'DiagnosisDetails', w4,
                        'History', w5,
                        'Examination', w5,
                        'Investigation', w5,
                        'Advice', w5,
                        'Remarks', w5
                    ]);
                }
                return _this;
            }
            OpdForm.formKey = 'Default.Opd';
            return OpdForm;
        }(Serenity.PrefixedContext));
        Default.OpdForm = OpdForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var OpdRow;
        (function (OpdRow) {
            OpdRow.idProperty = 'OpdId';
            OpdRow.nameProperty = 'Name';
            OpdRow.localTextPrefix = 'Default.Opd';
        })(OpdRow = Default.OpdRow || (Default.OpdRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var OpdService;
        (function (OpdService) {
            OpdService.baseUrl = 'Default/Opd';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OpdService[x] = function (r, s, o) {
                    return Q.serviceRequest(OpdService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OpdService = Default.OpdService || (Default.OpdService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var OpdWithDiagnosisDetailsForm = /** @class */ (function (_super) {
            __extends(OpdWithDiagnosisDetailsForm, _super);
            function OpdWithDiagnosisDetailsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OpdWithDiagnosisDetailsForm.init) {
                    OpdWithDiagnosisDetailsForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    Q.initFormType(OpdWithDiagnosisDetailsForm, [
                        'DiagnosisId', w0
                    ]);
                }
                return _this;
            }
            OpdWithDiagnosisDetailsForm.formKey = 'Default.OpdWithDiagnosisDetails';
            return OpdWithDiagnosisDetailsForm;
        }(Serenity.PrefixedContext));
        Default.OpdWithDiagnosisDetailsForm = OpdWithDiagnosisDetailsForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var OpdWithDiagnosisDetailsRow;
        (function (OpdWithDiagnosisDetailsRow) {
            OpdWithDiagnosisDetailsRow.idProperty = 'Id';
            OpdWithDiagnosisDetailsRow.localTextPrefix = 'Default.OpdWithDiagnosisDetails';
        })(OpdWithDiagnosisDetailsRow = Default.OpdWithDiagnosisDetailsRow || (Default.OpdWithDiagnosisDetailsRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var OpdWithDiagnosisDetailsService;
        (function (OpdWithDiagnosisDetailsService) {
            OpdWithDiagnosisDetailsService.baseUrl = 'Default/OpdWithDiagnosisDetails';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OpdWithDiagnosisDetailsService[x] = function (r, s, o) {
                    return Q.serviceRequest(OpdWithDiagnosisDetailsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OpdWithDiagnosisDetailsService = Default.OpdWithDiagnosisDetailsService || (Default.OpdWithDiagnosisDetailsService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var OperationForm = /** @class */ (function (_super) {
            __extends(OperationForm, _super);
            function OperationForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OperationForm.init) {
                    OperationForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    Q.initFormType(OperationForm, [
                        'OperationName', w0,
                        'Findings', w1,
                        'Procedures', w1
                    ]);
                }
                return _this;
            }
            OperationForm.formKey = 'Default.Operation';
            return OperationForm;
        }(Serenity.PrefixedContext));
        Default.OperationForm = OperationForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var OperationNoteForm = /** @class */ (function (_super) {
            __extends(OperationNoteForm, _super);
            function OperationNoteForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OperationNoteForm.init) {
                    OperationNoteForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.StringEditor;
                    var w3 = s.EnumEditor;
                    var w4 = CMCPS.EditTimeEditor;
                    var w5 = s.BooleanEditor;
                    var w6 = s.TextAreaEditor;
                    var w7 = s.ImageUploadEditor;
                    Q.initFormType(OperationNoteForm, [
                        'AdmissionId', w0,
                        'Date', w1,
                        'Age', w2,
                        'AdmissionDate', w1,
                        'Sex', w2,
                        'PinNumber', w2,
                        'UnitNumber', w2,
                        'UnitRegNo', w2,
                        'BedNumber', w2,
                        'HospitalRegNo', w2,
                        'Weight', w2,
                        'BloodGroup', w2,
                        'Type', w3,
                        'StartTime', w4,
                        'EndTime', w4,
                        'IsView', w5,
                        'DiagnosisId', w0,
                        'AddtoDiagnosis', w2,
                        'IndicationId', w0,
                        'AddtoIndication', w2,
                        'Diagnosis', w6,
                        'Indication', w6,
                        'AnesthesiaId', w0,
                        'AddtoAnesthesia', w2,
                        'PositionId', w0,
                        'AddtoPosition', w2,
                        'Anesthesia', w6,
                        'Position', w6,
                        'IncisionId', w0,
                        'AddtoIncision', w2,
                        'Incision', w6,
                        'Diagram', w7,
                        'OperationId', w0,
                        'Findings', w6,
                        'Procedures', w6,
                        'HistopathologyId', w0,
                        'AddtoHistopathology', w2,
                        'SpecialNoteId', w0,
                        'AddtoSpecialNote', w2,
                        'Histopathology', w6,
                        'SpecialNote', w6,
                        'InstructionsId', w0,
                        'AddtoInstructions', w2,
                        'FurtherPlanId', w0,
                        'AddtoFurtherPlan', w2,
                        'Instructions', w6,
                        'FurtherPlan', w6,
                        'PhotoUrl', w7,
                        'SurgeonId', w0,
                        'AddtoSurgeon', w2,
                        'AssistantSurgeonId', w0,
                        'AddtoAssistantSurgeon', w2,
                        'Surgeon', w6,
                        'AssistantSurgeon', w6,
                        'AnesthetistId', w0,
                        'AddtoAnesthetist', w2,
                        'OtSisterId', w0,
                        'AddtoOtSister', w2,
                        'Anesthetist', w6,
                        'OtSister', w6,
                        'OtAttendantId', w0,
                        'AddtoOtAttendant', w2,
                        'OtAttendant', w6
                    ]);
                }
                return _this;
            }
            OperationNoteForm.formKey = 'Default.OperationNote';
            return OperationNoteForm;
        }(Serenity.PrefixedContext));
        Default.OperationNoteForm = OperationNoteForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var OperationNoteRow;
        (function (OperationNoteRow) {
            OperationNoteRow.idProperty = 'Id';
            OperationNoteRow.nameProperty = 'PatientName';
            OperationNoteRow.localTextPrefix = 'Default.OperationNote';
            OperationNoteRow.lookupKey = 'Default.OperationNote';
            function getLookup() {
                return Q.getLookup('Default.OperationNote');
            }
            OperationNoteRow.getLookup = getLookup;
        })(OperationNoteRow = Default.OperationNoteRow || (Default.OperationNoteRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var OperationNoteService;
        (function (OperationNoteService) {
            OperationNoteService.baseUrl = 'Default/OperationNote';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OperationNoteService[x] = function (r, s, o) {
                    return Q.serviceRequest(OperationNoteService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OperationNoteService = Default.OperationNoteService || (Default.OperationNoteService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var OperationRow;
        (function (OperationRow) {
            OperationRow.idProperty = 'OperationId';
            OperationRow.nameProperty = 'OperationName';
            OperationRow.localTextPrefix = 'Default.Operation';
            OperationRow.lookupKey = 'Default.Operation';
            function getLookup() {
                return Q.getLookup('Default.Operation');
            }
            OperationRow.getLookup = getLookup;
        })(OperationRow = Default.OperationRow || (Default.OperationRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var OperationService;
        (function (OperationService) {
            OperationService.baseUrl = 'Default/Operation';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OperationService[x] = function (r, s, o) {
                    return Q.serviceRequest(OperationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OperationService = Default.OperationService || (Default.OperationService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var OtAttendantForm = /** @class */ (function (_super) {
            __extends(OtAttendantForm, _super);
            function OtAttendantForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OtAttendantForm.init) {
                    OtAttendantForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(OtAttendantForm, [
                        'OtAttendantName', w0
                    ]);
                }
                return _this;
            }
            OtAttendantForm.formKey = 'Default.OtAttendant';
            return OtAttendantForm;
        }(Serenity.PrefixedContext));
        Default.OtAttendantForm = OtAttendantForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var OtAttendantRow;
        (function (OtAttendantRow) {
            OtAttendantRow.idProperty = 'OtAttendantId';
            OtAttendantRow.nameProperty = 'OtAttendantName';
            OtAttendantRow.localTextPrefix = 'Default.OtAttendant';
            OtAttendantRow.lookupKey = 'Default.OtAttendant';
            function getLookup() {
                return Q.getLookup('Default.OtAttendant');
            }
            OtAttendantRow.getLookup = getLookup;
        })(OtAttendantRow = Default.OtAttendantRow || (Default.OtAttendantRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var OtAttendantService;
        (function (OtAttendantService) {
            OtAttendantService.baseUrl = 'Default/OtAttendant';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OtAttendantService[x] = function (r, s, o) {
                    return Q.serviceRequest(OtAttendantService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OtAttendantService = Default.OtAttendantService || (Default.OtAttendantService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var OtSisterForm = /** @class */ (function (_super) {
            __extends(OtSisterForm, _super);
            function OtSisterForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OtSisterForm.init) {
                    OtSisterForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(OtSisterForm, [
                        'OtSisterName', w0
                    ]);
                }
                return _this;
            }
            OtSisterForm.formKey = 'Default.OtSister';
            return OtSisterForm;
        }(Serenity.PrefixedContext));
        Default.OtSisterForm = OtSisterForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var OtSisterRow;
        (function (OtSisterRow) {
            OtSisterRow.idProperty = 'OtSisterId';
            OtSisterRow.nameProperty = 'OtSisterName';
            OtSisterRow.localTextPrefix = 'Default.OtSister';
            OtSisterRow.lookupKey = 'Default.OTSister';
            function getLookup() {
                return Q.getLookup('Default.OTSister');
            }
            OtSisterRow.getLookup = getLookup;
        })(OtSisterRow = Default.OtSisterRow || (Default.OtSisterRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var OtSisterService;
        (function (OtSisterService) {
            OtSisterService.baseUrl = 'Default/OtSister';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OtSisterService[x] = function (r, s, o) {
                    return Q.serviceRequest(OtSisterService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OtSisterService = Default.OtSisterService || (Default.OtSisterService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var OtherLabForm = /** @class */ (function (_super) {
            __extends(OtherLabForm, _super);
            function OtherLabForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OtherLabForm.init) {
                    OtherLabForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(OtherLabForm, [
                        'Name', w0
                    ]);
                }
                return _this;
            }
            OtherLabForm.formKey = 'Default.OtherLab';
            return OtherLabForm;
        }(Serenity.PrefixedContext));
        Default.OtherLabForm = OtherLabForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var OtherLabRow;
        (function (OtherLabRow) {
            OtherLabRow.idProperty = 'LabId';
            OtherLabRow.nameProperty = 'Name';
            OtherLabRow.localTextPrefix = 'Default.OtherLab';
            OtherLabRow.lookupKey = 'Default.OtherLab';
            function getLookup() {
                return Q.getLookup('Default.OtherLab');
            }
            OtherLabRow.getLookup = getLookup;
        })(OtherLabRow = Default.OtherLabRow || (Default.OtherLabRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var OtherLabService;
        (function (OtherLabService) {
            OtherLabService.baseUrl = 'Default/OtherLab';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OtherLabService[x] = function (r, s, o) {
                    return Q.serviceRequest(OtherLabService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OtherLabService = Default.OtherLabService || (Default.OtherLabService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var OtherLabWithInvestigationForm = /** @class */ (function (_super) {
            __extends(OtherLabWithInvestigationForm, _super);
            function OtherLabWithInvestigationForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OtherLabWithInvestigationForm.init) {
                    OtherLabWithInvestigationForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(OtherLabWithInvestigationForm, [
                        'OtherLabId', w0,
                        'Value', w1
                    ]);
                }
                return _this;
            }
            OtherLabWithInvestigationForm.formKey = 'Default.OtherLabWithInvestigation';
            return OtherLabWithInvestigationForm;
        }(Serenity.PrefixedContext));
        Default.OtherLabWithInvestigationForm = OtherLabWithInvestigationForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var OtherLabWithInvestigationRow;
        (function (OtherLabWithInvestigationRow) {
            OtherLabWithInvestigationRow.idProperty = 'Id';
            OtherLabWithInvestigationRow.nameProperty = 'Value';
            OtherLabWithInvestigationRow.localTextPrefix = 'Default.OtherLabWithInvestigation';
        })(OtherLabWithInvestigationRow = Default.OtherLabWithInvestigationRow || (Default.OtherLabWithInvestigationRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var OtherLabWithInvestigationService;
        (function (OtherLabWithInvestigationService) {
            OtherLabWithInvestigationService.baseUrl = 'Default/OtherLabWithInvestigation';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OtherLabWithInvestigationService[x] = function (r, s, o) {
                    return Q.serviceRequest(OtherLabWithInvestigationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OtherLabWithInvestigationService = Default.OtherLabWithInvestigationService || (Default.OtherLabWithInvestigationService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var OutcomeForm = /** @class */ (function (_super) {
            __extends(OutcomeForm, _super);
            function OutcomeForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OutcomeForm.init) {
                    OutcomeForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.StringEditor;
                    var w3 = s.TextAreaEditor;
                    Q.initFormType(OutcomeForm, [
                        'AdmissionId', w0,
                        'EntryDate', w1,
                        'Age', w2,
                        'Sex', w2,
                        'AdmissionDate', w1,
                        'Weight', w2,
                        'BloodGroup', w2,
                        'PinNumber', w2,
                        'UnitNumber', w2,
                        'UnitRegNo', w2,
                        'BedNumber', w2,
                        'HospitalRegNo', w2,
                        'FinalDiagnosis', w3,
                        'OutcomeNoteId', w0,
                        'AddtoOutCome', w2,
                        'OutcomeName', w3
                    ]);
                }
                return _this;
            }
            OutcomeForm.formKey = 'Default.Outcome';
            return OutcomeForm;
        }(Serenity.PrefixedContext));
        Default.OutcomeForm = OutcomeForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var OutcomeNoteForm = /** @class */ (function (_super) {
            __extends(OutcomeNoteForm, _super);
            function OutcomeNoteForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OutcomeNoteForm.init) {
                    OutcomeNoteForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(OutcomeNoteForm, [
                        'Outcome', w0
                    ]);
                }
                return _this;
            }
            OutcomeNoteForm.formKey = 'Default.OutcomeNote';
            return OutcomeNoteForm;
        }(Serenity.PrefixedContext));
        Default.OutcomeNoteForm = OutcomeNoteForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var OutcomeNoteRow;
        (function (OutcomeNoteRow) {
            OutcomeNoteRow.idProperty = 'OutcomeNoteId';
            OutcomeNoteRow.nameProperty = 'Outcome';
            OutcomeNoteRow.localTextPrefix = 'Default.OutcomeNote';
            OutcomeNoteRow.lookupKey = 'Default.OutcomeNote';
            function getLookup() {
                return Q.getLookup('Default.OutcomeNote');
            }
            OutcomeNoteRow.getLookup = getLookup;
        })(OutcomeNoteRow = Default.OutcomeNoteRow || (Default.OutcomeNoteRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var OutcomeNoteService;
        (function (OutcomeNoteService) {
            OutcomeNoteService.baseUrl = 'Default/OutcomeNote';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OutcomeNoteService[x] = function (r, s, o) {
                    return Q.serviceRequest(OutcomeNoteService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OutcomeNoteService = Default.OutcomeNoteService || (Default.OutcomeNoteService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var OutcomeRow;
        (function (OutcomeRow) {
            OutcomeRow.idProperty = 'OutcomeId';
            OutcomeRow.nameProperty = 'Name';
            OutcomeRow.localTextPrefix = 'Default.Outcome';
        })(OutcomeRow = Default.OutcomeRow || (Default.OutcomeRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var OutcomeService;
        (function (OutcomeService) {
            OutcomeService.baseUrl = 'Default/Outcome';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OutcomeService[x] = function (r, s, o) {
                    return Q.serviceRequest(OutcomeService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OutcomeService = Default.OutcomeService || (Default.OutcomeService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var PNoteForm = /** @class */ (function (_super) {
            __extends(PNoteForm, _super);
            function PNoteForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PNoteForm.init) {
                    PNoteForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(PNoteForm, [
                        'NoteName', w0
                    ]);
                }
                return _this;
            }
            PNoteForm.formKey = 'Default.PNote';
            return PNoteForm;
        }(Serenity.PrefixedContext));
        Default.PNoteForm = PNoteForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var PNoteRow;
        (function (PNoteRow) {
            PNoteRow.idProperty = 'Id';
            PNoteRow.nameProperty = 'NoteName';
            PNoteRow.localTextPrefix = 'Default.PNote';
            PNoteRow.lookupKey = 'Default.PNote';
            function getLookup() {
                return Q.getLookup('Default.PNote');
            }
            PNoteRow.getLookup = getLookup;
        })(PNoteRow = Default.PNoteRow || (Default.PNoteRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var PNoteService;
        (function (PNoteService) {
            PNoteService.baseUrl = 'Default/PNote';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PNoteService[x] = function (r, s, o) {
                    return Q.serviceRequest(PNoteService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PNoteService = Default.PNoteService || (Default.PNoteService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var PathologyAndInvestigationDetailsForm = /** @class */ (function (_super) {
            __extends(PathologyAndInvestigationDetailsForm, _super);
            function PathologyAndInvestigationDetailsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PathologyAndInvestigationDetailsForm.init) {
                    PathologyAndInvestigationDetailsForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(PathologyAndInvestigationDetailsForm, [
                        'PathologyId', w0,
                        'Value', w1
                    ]);
                }
                return _this;
            }
            PathologyAndInvestigationDetailsForm.formKey = 'Default.PathologyAndInvestigationDetails';
            return PathologyAndInvestigationDetailsForm;
        }(Serenity.PrefixedContext));
        Default.PathologyAndInvestigationDetailsForm = PathologyAndInvestigationDetailsForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var PathologyAndInvestigationDetailsRow;
        (function (PathologyAndInvestigationDetailsRow) {
            PathologyAndInvestigationDetailsRow.idProperty = 'Id';
            PathologyAndInvestigationDetailsRow.nameProperty = 'Value';
            PathologyAndInvestigationDetailsRow.localTextPrefix = 'Default.PathologyAndInvestigationDetails';
        })(PathologyAndInvestigationDetailsRow = Default.PathologyAndInvestigationDetailsRow || (Default.PathologyAndInvestigationDetailsRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var PathologyAndInvestigationDetailsService;
        (function (PathologyAndInvestigationDetailsService) {
            PathologyAndInvestigationDetailsService.baseUrl = 'Default/PathologyAndInvestigationDetails';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PathologyAndInvestigationDetailsService[x] = function (r, s, o) {
                    return Q.serviceRequest(PathologyAndInvestigationDetailsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PathologyAndInvestigationDetailsService = Default.PathologyAndInvestigationDetailsService || (Default.PathologyAndInvestigationDetailsService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var PathologyForm = /** @class */ (function (_super) {
            __extends(PathologyForm, _super);
            function PathologyForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PathologyForm.init) {
                    PathologyForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(PathologyForm, [
                        'PathologyName', w0
                    ]);
                }
                return _this;
            }
            PathologyForm.formKey = 'Default.Pathology';
            return PathologyForm;
        }(Serenity.PrefixedContext));
        Default.PathologyForm = PathologyForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var PathologyRow;
        (function (PathologyRow) {
            PathologyRow.idProperty = 'PathologyId';
            PathologyRow.nameProperty = 'PathologyName';
            PathologyRow.localTextPrefix = 'Default.Pathology';
            PathologyRow.lookupKey = 'Default.Pathology';
            function getLookup() {
                return Q.getLookup('Default.Pathology');
            }
            PathologyRow.getLookup = getLookup;
        })(PathologyRow = Default.PathologyRow || (Default.PathologyRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var PathologyService;
        (function (PathologyService) {
            PathologyService.baseUrl = 'Default/Pathology';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PathologyService[x] = function (r, s, o) {
                    return Q.serviceRequest(PathologyService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PathologyService = Default.PathologyService || (Default.PathologyService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var PatientBirthHistoryRow;
        (function (PatientBirthHistoryRow) {
            PatientBirthHistoryRow.idProperty = 'PbHistoryId';
            PatientBirthHistoryRow.localTextPrefix = 'Default.PatientBirthHistory';
        })(PatientBirthHistoryRow = Default.PatientBirthHistoryRow || (Default.PatientBirthHistoryRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var PatientTypeRow;
        (function (PatientTypeRow) {
            PatientTypeRow.idProperty = 'PatientTypeId';
            PatientTypeRow.nameProperty = 'PatientType';
            PatientTypeRow.localTextPrefix = 'Default.PatientType';
            PatientTypeRow.lookupKey = 'Default.PatientType';
            function getLookup() {
                return Q.getLookup('Default.PatientType');
            }
            PatientTypeRow.getLookup = getLookup;
        })(PatientTypeRow = Default.PatientTypeRow || (Default.PatientTypeRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var PatientTypeService;
        (function (PatientTypeService) {
            PatientTypeService.baseUrl = 'Default/PatientType';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PatientTypeService[x] = function (r, s, o) {
                    return Q.serviceRequest(PatientTypeService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PatientTypeService = Default.PatientTypeService || (Default.PatientTypeService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var PercussionForm = /** @class */ (function (_super) {
            __extends(PercussionForm, _super);
            function PercussionForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PercussionForm.init) {
                    PercussionForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(PercussionForm, [
                        'PercussionName', w0
                    ]);
                }
                return _this;
            }
            PercussionForm.formKey = 'Default.Percussion';
            return PercussionForm;
        }(Serenity.PrefixedContext));
        Default.PercussionForm = PercussionForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var PercussionHistoryForm = /** @class */ (function (_super) {
            __extends(PercussionHistoryForm, _super);
            function PercussionHistoryForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PercussionHistoryForm.init) {
                    PercussionHistoryForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    Q.initFormType(PercussionHistoryForm, [
                        'AdmissionId', w0,
                        'PercussionId', w0
                    ]);
                }
                return _this;
            }
            PercussionHistoryForm.formKey = 'Default.PercussionHistory';
            return PercussionHistoryForm;
        }(Serenity.PrefixedContext));
        Default.PercussionHistoryForm = PercussionHistoryForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var PercussionHistoryRow;
        (function (PercussionHistoryRow) {
            PercussionHistoryRow.idProperty = 'PercussionHistoryId';
            PercussionHistoryRow.localTextPrefix = 'Default.PercussionHistory';
            PercussionHistoryRow.lookupKey = 'Default.PercussionHistory';
            function getLookup() {
                return Q.getLookup('Default.PercussionHistory');
            }
            PercussionHistoryRow.getLookup = getLookup;
        })(PercussionHistoryRow = Default.PercussionHistoryRow || (Default.PercussionHistoryRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var PercussionHistoryService;
        (function (PercussionHistoryService) {
            PercussionHistoryService.baseUrl = 'Default/PercussionHistory';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PercussionHistoryService[x] = function (r, s, o) {
                    return Q.serviceRequest(PercussionHistoryService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PercussionHistoryService = Default.PercussionHistoryService || (Default.PercussionHistoryService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var PercussionRow;
        (function (PercussionRow) {
            PercussionRow.idProperty = 'PercussionId';
            PercussionRow.nameProperty = 'PercussionName';
            PercussionRow.localTextPrefix = 'Default.Percussion';
            PercussionRow.lookupKey = 'Default.Percussion';
            function getLookup() {
                return Q.getLookup('Default.Percussion');
            }
            PercussionRow.getLookup = getLookup;
        })(PercussionRow = Default.PercussionRow || (Default.PercussionRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var PercussionService;
        (function (PercussionService) {
            PercussionService.baseUrl = 'Default/Percussion';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PercussionService[x] = function (r, s, o) {
                    return Q.serviceRequest(PercussionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PercussionService = Default.PercussionService || (Default.PercussionService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var PositionForm = /** @class */ (function (_super) {
            __extends(PositionForm, _super);
            function PositionForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PositionForm.init) {
                    PositionForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(PositionForm, [
                        'PositionName', w0
                    ]);
                }
                return _this;
            }
            PositionForm.formKey = 'Default.Position';
            return PositionForm;
        }(Serenity.PrefixedContext));
        Default.PositionForm = PositionForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var PositionRow;
        (function (PositionRow) {
            PositionRow.idProperty = 'PositionId';
            PositionRow.nameProperty = 'PositionName';
            PositionRow.localTextPrefix = 'Default.Position';
            PositionRow.lookupKey = 'Default.Position';
            function getLookup() {
                return Q.getLookup('Default.Position');
            }
            PositionRow.getLookup = getLookup;
        })(PositionRow = Default.PositionRow || (Default.PositionRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var PositionService;
        (function (PositionService) {
            PositionService.baseUrl = 'Default/Position';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PositionService[x] = function (r, s, o) {
                    return Q.serviceRequest(PositionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PositionService = Default.PositionService || (Default.PositionService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var PostNatalForm = /** @class */ (function (_super) {
            __extends(PostNatalForm, _super);
            function PostNatalForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PostNatalForm.init) {
                    PostNatalForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(PostNatalForm, [
                        'PostNatalName', w0
                    ]);
                }
                return _this;
            }
            PostNatalForm.formKey = 'Default.PostNatal';
            return PostNatalForm;
        }(Serenity.PrefixedContext));
        Default.PostNatalForm = PostNatalForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var PostNatalRow;
        (function (PostNatalRow) {
            PostNatalRow.idProperty = 'PostNatalId';
            PostNatalRow.nameProperty = 'PostNatalName';
            PostNatalRow.localTextPrefix = 'Default.PostNatal';
            PostNatalRow.lookupKey = 'Default.PostNatal';
            function getLookup() {
                return Q.getLookup('Default.PostNatal');
            }
            PostNatalRow.getLookup = getLookup;
        })(PostNatalRow = Default.PostNatalRow || (Default.PostNatalRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var PostNatalService;
        (function (PostNatalService) {
            PostNatalService.baseUrl = 'Default/PostNatal';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PostNatalService[x] = function (r, s, o) {
                    return Q.serviceRequest(PostNatalService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PostNatalService = Default.PostNatalService || (Default.PostNatalService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var PresentingComplaintsForm = /** @class */ (function (_super) {
            __extends(PresentingComplaintsForm, _super);
            function PresentingComplaintsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PresentingComplaintsForm.init) {
                    PresentingComplaintsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(PresentingComplaintsForm, [
                        'PComplaints', w0,
                        'Note', w0
                    ]);
                }
                return _this;
            }
            PresentingComplaintsForm.formKey = 'Default.PresentingComplaints';
            return PresentingComplaintsForm;
        }(Serenity.PrefixedContext));
        Default.PresentingComplaintsForm = PresentingComplaintsForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var PresentingComplaintsRow;
        (function (PresentingComplaintsRow) {
            PresentingComplaintsRow.idProperty = 'PComplaintsId';
            PresentingComplaintsRow.nameProperty = 'PComplaints';
            PresentingComplaintsRow.localTextPrefix = 'Default.PresentingComplaints';
            PresentingComplaintsRow.lookupKey = 'Default.PresentingComplaints';
            function getLookup() {
                return Q.getLookup('Default.PresentingComplaints');
            }
            PresentingComplaintsRow.getLookup = getLookup;
        })(PresentingComplaintsRow = Default.PresentingComplaintsRow || (Default.PresentingComplaintsRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var PresentingComplaintsService;
        (function (PresentingComplaintsService) {
            PresentingComplaintsService.baseUrl = 'Default/PresentingComplaints';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PresentingComplaintsService[x] = function (r, s, o) {
                    return Q.serviceRequest(PresentingComplaintsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PresentingComplaintsService = Default.PresentingComplaintsService || (Default.PresentingComplaintsService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var RegularMedicationForm = /** @class */ (function (_super) {
            __extends(RegularMedicationForm, _super);
            function RegularMedicationForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RegularMedicationForm.init) {
                    RegularMedicationForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RegularMedicationForm, [
                        'RegularMedicationName', w0
                    ]);
                }
                return _this;
            }
            RegularMedicationForm.formKey = 'Default.RegularMedication';
            return RegularMedicationForm;
        }(Serenity.PrefixedContext));
        Default.RegularMedicationForm = RegularMedicationForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var RegularMedicationRow;
        (function (RegularMedicationRow) {
            RegularMedicationRow.idProperty = 'RegularMedicationId';
            RegularMedicationRow.nameProperty = 'RegularMedicationName';
            RegularMedicationRow.localTextPrefix = 'Default.RegularMedication';
            RegularMedicationRow.lookupKey = 'Default.RegularMedication';
            function getLookup() {
                return Q.getLookup('Default.RegularMedication');
            }
            RegularMedicationRow.getLookup = getLookup;
        })(RegularMedicationRow = Default.RegularMedicationRow || (Default.RegularMedicationRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var RegularMedicationService;
        (function (RegularMedicationService) {
            RegularMedicationService.baseUrl = 'Default/RegularMedication';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RegularMedicationService[x] = function (r, s, o) {
                    return Q.serviceRequest(RegularMedicationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RegularMedicationService = Default.RegularMedicationService || (Default.RegularMedicationService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var SexForm = /** @class */ (function (_super) {
            __extends(SexForm, _super);
            function SexForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SexForm.init) {
                    SexForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(SexForm, [
                        'Sex', w0,
                        'Note', w0
                    ]);
                }
                return _this;
            }
            SexForm.formKey = 'Default.Sex';
            return SexForm;
        }(Serenity.PrefixedContext));
        Default.SexForm = SexForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var SexRow;
        (function (SexRow) {
            SexRow.idProperty = 'SexId';
            SexRow.nameProperty = 'Sex';
            SexRow.localTextPrefix = 'Default.Sex';
            SexRow.lookupKey = 'Default.Sex';
            function getLookup() {
                return Q.getLookup('Default.Sex');
            }
            SexRow.getLookup = getLookup;
        })(SexRow = Default.SexRow || (Default.SexRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var SexService;
        (function (SexService) {
            SexService.baseUrl = 'Default/Sex';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SexService[x] = function (r, s, o) {
                    return Q.serviceRequest(SexService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SexService = Default.SexService || (Default.SexService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var SpecialNoteForm = /** @class */ (function (_super) {
            __extends(SpecialNoteForm, _super);
            function SpecialNoteForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SpecialNoteForm.init) {
                    SpecialNoteForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(SpecialNoteForm, [
                        'SpecialNoteName', w0
                    ]);
                }
                return _this;
            }
            SpecialNoteForm.formKey = 'Default.SpecialNote';
            return SpecialNoteForm;
        }(Serenity.PrefixedContext));
        Default.SpecialNoteForm = SpecialNoteForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var SpecialNoteRow;
        (function (SpecialNoteRow) {
            SpecialNoteRow.idProperty = 'SpecialNoteId';
            SpecialNoteRow.nameProperty = 'SpecialNoteName';
            SpecialNoteRow.localTextPrefix = 'Default.SpecialNote';
            SpecialNoteRow.lookupKey = 'Default.SpecialNote';
            function getLookup() {
                return Q.getLookup('Default.SpecialNote');
            }
            SpecialNoteRow.getLookup = getLookup;
        })(SpecialNoteRow = Default.SpecialNoteRow || (Default.SpecialNoteRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var SpecialNoteService;
        (function (SpecialNoteService) {
            SpecialNoteService.baseUrl = 'Default/SpecialNote';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SpecialNoteService[x] = function (r, s, o) {
                    return Q.serviceRequest(SpecialNoteService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SpecialNoteService = Default.SpecialNoteService || (Default.SpecialNoteService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var SurgeonForm = /** @class */ (function (_super) {
            __extends(SurgeonForm, _super);
            function SurgeonForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SurgeonForm.init) {
                    SurgeonForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(SurgeonForm, [
                        'SurgeonName', w0
                    ]);
                }
                return _this;
            }
            SurgeonForm.formKey = 'Default.Surgeon';
            return SurgeonForm;
        }(Serenity.PrefixedContext));
        Default.SurgeonForm = SurgeonForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var SurgeonRow;
        (function (SurgeonRow) {
            SurgeonRow.idProperty = 'SurgeonId';
            SurgeonRow.nameProperty = 'SurgeonName';
            SurgeonRow.localTextPrefix = 'Default.Surgeon';
            SurgeonRow.lookupKey = 'Default.Surgeon';
            function getLookup() {
                return Q.getLookup('Default.Surgeon');
            }
            SurgeonRow.getLookup = getLookup;
        })(SurgeonRow = Default.SurgeonRow || (Default.SurgeonRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var SurgeonService;
        (function (SurgeonService) {
            SurgeonService.baseUrl = 'Default/Surgeon';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SurgeonService[x] = function (r, s, o) {
                    return Q.serviceRequest(SurgeonService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SurgeonService = Default.SurgeonService || (Default.SurgeonService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var TreatmentForm = /** @class */ (function (_super) {
            __extends(TreatmentForm, _super);
            function TreatmentForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TreatmentForm.init) {
                    TreatmentForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.StringEditor;
                    var w3 = s.TextAreaEditor;
                    Q.initFormType(TreatmentForm, [
                        'AdmissionId', w0,
                        'EntryDate', w1,
                        'Age', w2,
                        'Sex', w2,
                        'AdmissionDate', w1,
                        'Weight', w2,
                        'BloodGroup', w2,
                        'PinNumber', w2,
                        'UnitNumber', w2,
                        'UnitRegNo', w2,
                        'BedNumber', w2,
                        'HospitalRegNo', w2,
                        'MedicineId', w0,
                        'DoaseId', w0,
                        'DurationId', w0,
                        'AddToArea', w2,
                        'Treatment', w3
                    ]);
                }
                return _this;
            }
            TreatmentForm.formKey = 'Default.Treatment';
            return TreatmentForm;
        }(Serenity.PrefixedContext));
        Default.TreatmentForm = TreatmentForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var TreatmentRow;
        (function (TreatmentRow) {
            TreatmentRow.idProperty = 'TreatmentId';
            TreatmentRow.nameProperty = 'Name';
            TreatmentRow.localTextPrefix = 'Default.Treatment';
        })(TreatmentRow = Default.TreatmentRow || (Default.TreatmentRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var TreatmentService;
        (function (TreatmentService) {
            TreatmentService.baseUrl = 'Default/Treatment';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TreatmentService[x] = function (r, s, o) {
                    return Q.serviceRequest(TreatmentService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TreatmentService = Default.TreatmentService || (Default.TreatmentService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var UnitForm = /** @class */ (function (_super) {
            __extends(UnitForm, _super);
            function UnitForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UnitForm.init) {
                    UnitForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(UnitForm, [
                        'UnitNumber', w0,
                        'Note', w0
                    ]);
                }
                return _this;
            }
            UnitForm.formKey = 'Default.Unit';
            return UnitForm;
        }(Serenity.PrefixedContext));
        Default.UnitForm = UnitForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var UnitRow;
        (function (UnitRow) {
            UnitRow.idProperty = 'UnitId';
            UnitRow.nameProperty = 'UnitNumber';
            UnitRow.localTextPrefix = 'Default.Unit';
            UnitRow.lookupKey = 'Default.Unit';
            function getLookup() {
                return Q.getLookup('Default.Unit');
            }
            UnitRow.getLookup = getLookup;
        })(UnitRow = Default.UnitRow || (Default.UnitRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var UnitService;
        (function (UnitService) {
            UnitService.baseUrl = 'Default/Unit';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UnitService[x] = function (r, s, o) {
                    return Q.serviceRequest(UnitService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UnitService = Default.UnitService || (Default.UnitService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var UpazilaForm = /** @class */ (function (_super) {
            __extends(UpazilaForm, _super);
            function UpazilaForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UpazilaForm.init) {
                    UpazilaForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(UpazilaForm, [
                        'DistrictId', w0,
                        'UpazilaName', w1
                    ]);
                }
                return _this;
            }
            UpazilaForm.formKey = 'Default.Upazila';
            return UpazilaForm;
        }(Serenity.PrefixedContext));
        Default.UpazilaForm = UpazilaForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var UpazilaRow;
        (function (UpazilaRow) {
            UpazilaRow.idProperty = 'UpazilaId';
            UpazilaRow.nameProperty = 'UpazilaName';
            UpazilaRow.localTextPrefix = 'Default.Upazila';
            UpazilaRow.lookupKey = 'Default.Upazila';
            function getLookup() {
                return Q.getLookup('Default.Upazila');
            }
            UpazilaRow.getLookup = getLookup;
        })(UpazilaRow = Default.UpazilaRow || (Default.UpazilaRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var UpazilaService;
        (function (UpazilaService) {
            UpazilaService.baseUrl = 'Default/Upazila';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UpazilaService[x] = function (r, s, o) {
                    return Q.serviceRequest(UpazilaService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UpazilaService = Default.UpazilaService || (Default.UpazilaService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var VocalResonanceForm = /** @class */ (function (_super) {
            __extends(VocalResonanceForm, _super);
            function VocalResonanceForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!VocalResonanceForm.init) {
                    VocalResonanceForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(VocalResonanceForm, [
                        'VocalResonanceName', w0
                    ]);
                }
                return _this;
            }
            VocalResonanceForm.formKey = 'Default.VocalResonance';
            return VocalResonanceForm;
        }(Serenity.PrefixedContext));
        Default.VocalResonanceForm = VocalResonanceForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var VocalResonanceHistoryForm = /** @class */ (function (_super) {
            __extends(VocalResonanceHistoryForm, _super);
            function VocalResonanceHistoryForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!VocalResonanceHistoryForm.init) {
                    VocalResonanceHistoryForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    Q.initFormType(VocalResonanceHistoryForm, [
                        'AdmissionId', w0,
                        'VocalResonanceId', w0
                    ]);
                }
                return _this;
            }
            VocalResonanceHistoryForm.formKey = 'Default.VocalResonanceHistory';
            return VocalResonanceHistoryForm;
        }(Serenity.PrefixedContext));
        Default.VocalResonanceHistoryForm = VocalResonanceHistoryForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var VocalResonanceHistoryRow;
        (function (VocalResonanceHistoryRow) {
            VocalResonanceHistoryRow.idProperty = 'VocalResonanceHistoryId';
            VocalResonanceHistoryRow.localTextPrefix = 'Default.VocalResonanceHistory';
            VocalResonanceHistoryRow.lookupKey = 'Default.VocalResonanceHistory';
            function getLookup() {
                return Q.getLookup('Default.VocalResonanceHistory');
            }
            VocalResonanceHistoryRow.getLookup = getLookup;
        })(VocalResonanceHistoryRow = Default.VocalResonanceHistoryRow || (Default.VocalResonanceHistoryRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var VocalResonanceHistoryService;
        (function (VocalResonanceHistoryService) {
            VocalResonanceHistoryService.baseUrl = 'Default/VocalResonanceHistory';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                VocalResonanceHistoryService[x] = function (r, s, o) {
                    return Q.serviceRequest(VocalResonanceHistoryService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(VocalResonanceHistoryService = Default.VocalResonanceHistoryService || (Default.VocalResonanceHistoryService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var VocalResonanceRow;
        (function (VocalResonanceRow) {
            VocalResonanceRow.idProperty = 'VocalResonanceId';
            VocalResonanceRow.nameProperty = 'VocalResonanceName';
            VocalResonanceRow.localTextPrefix = 'Default.VocalResonance';
            VocalResonanceRow.lookupKey = 'Default.VocalResonance';
            function getLookup() {
                return Q.getLookup('Default.VocalResonance');
            }
            VocalResonanceRow.getLookup = getLookup;
        })(VocalResonanceRow = Default.VocalResonanceRow || (Default.VocalResonanceRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var VocalResonanceService;
        (function (VocalResonanceService) {
            VocalResonanceService.baseUrl = 'Default/VocalResonance';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                VocalResonanceService[x] = function (r, s, o) {
                    return Q.serviceRequest(VocalResonanceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(VocalResonanceService = Default.VocalResonanceService || (Default.VocalResonanceService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var WardForm = /** @class */ (function (_super) {
            __extends(WardForm, _super);
            function WardForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!WardForm.init) {
                    WardForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(WardForm, [
                        'WardNo', w0
                    ]);
                }
                return _this;
            }
            WardForm.formKey = 'Default.Ward';
            return WardForm;
        }(Serenity.PrefixedContext));
        Default.WardForm = WardForm;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var WardRow;
        (function (WardRow) {
            WardRow.idProperty = 'Id';
            WardRow.nameProperty = 'WardNo';
            WardRow.localTextPrefix = 'Default.Ward';
            WardRow.lookupKey = 'Default.Ward';
            function getLookup() {
                return Q.getLookup('Default.Ward');
            }
            WardRow.getLookup = getLookup;
        })(WardRow = Default.WardRow || (Default.WardRow = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var WardService;
        (function (WardService) {
            WardService.baseUrl = 'Default/Ward';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                WardService[x] = function (r, s, o) {
                    return Q.serviceRequest(WardService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(WardService = Default.WardService || (Default.WardService = {}));
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangePasswordForm.init) {
                    ChangePasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ChangePasswordForm, [
                        'OldPassword', w0,
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
    })(Membership = CMCPS.Membership || (CMCPS.Membership = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailEditor;
                    Q.initFormType(ForgotPasswordForm, [
                        'Email', w0
                    ]);
                }
                return _this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
    })(Membership = CMCPS.Membership || (CMCPS.Membership = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LoginForm.init) {
                    LoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.PasswordEditor;
                    Q.initFormType(LoginForm, [
                        'Username', w0,
                        'Password', w1
                    ]);
                }
                return _this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
    })(Membership = CMCPS.Membership || (CMCPS.Membership = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ResetPasswordForm.init) {
                    ResetPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ResetPasswordForm, [
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
    })(Membership = CMCPS.Membership || (CMCPS.Membership = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SignUpForm.init) {
                    SignUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.PasswordEditor;
                    Q.initFormType(SignUpForm, [
                        'DisplayName', w0,
                        'Email', w1,
                        'ConfirmEmail', w1,
                        'Password', w2,
                        'ConfirmPassword', w2
                    ]);
                }
                return _this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
    })(Membership = CMCPS.Membership || (CMCPS.Membership = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Modules;
    (function (Modules) {
        var Common;
        (function (Common) {
            var Reporting;
            (function (Reporting) {
                var ReportHeadingRow;
                (function (ReportHeadingRow) {
                    ReportHeadingRow.idProperty = 'Id';
                    ReportHeadingRow.nameProperty = 'CompanyName';
                    ReportHeadingRow.localTextPrefix = 'Common.ReportHeading';
                    ReportHeadingRow.lookupKey = 'Common.Reporting';
                    function getLookup() {
                        return Q.getLookup('Common.Reporting');
                    }
                    ReportHeadingRow.getLookup = getLookup;
                })(ReportHeadingRow = Reporting.ReportHeadingRow || (Reporting.ReportHeadingRow = {}));
            })(Reporting = Common.Reporting || (Common.Reporting = {}));
        })(Common = Modules.Common || (Modules.Common = {}));
    })(Modules = CMCPS.Modules || (CMCPS.Modules = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Admission;
            (function (Admission) {
                var AppearanceEnum;
                (function (AppearanceEnum) {
                    AppearanceEnum[AppearanceEnum["Normal"] = 1] = "Normal";
                    AppearanceEnum[AppearanceEnum["ill"] = 2] = "ill";
                })(AppearanceEnum = Admission.AppearanceEnum || (Admission.AppearanceEnum = {}));
                Serenity.Decorators.registerEnumType(AppearanceEnum, 'CMCPS.Modules.Default.Admission.AppearanceEnum');
            })(Admission = Default.Admission || (Default.Admission = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CMCPS.Modules || (CMCPS.Modules = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Admission;
            (function (Admission) {
                var Behaviour;
                (function (Behaviour) {
                    Behaviour[Behaviour["Cooperative"] = 1] = "Cooperative";
                    Behaviour[Behaviour["Noncooperative"] = 2] = "Noncooperative";
                })(Behaviour = Admission.Behaviour || (Admission.Behaviour = {}));
                Serenity.Decorators.registerEnumType(Behaviour, 'CMCPS.Modules.Default.Admission.Behaviour');
            })(Admission = Default.Admission || (Default.Admission = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CMCPS.Modules || (CMCPS.Modules = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Admission;
            (function (Admission) {
                var BloodTransfusion;
                (function (BloodTransfusion) {
                    BloodTransfusion[BloodTransfusion["Yes"] = 1] = "Yes";
                    BloodTransfusion[BloodTransfusion["No"] = 2] = "No";
                })(BloodTransfusion = Admission.BloodTransfusion || (Admission.BloodTransfusion = {}));
                Serenity.Decorators.registerEnumType(BloodTransfusion, 'CMCPS.Modules.Default.Admission.BloodTransfusion');
            })(Admission = Default.Admission || (Default.Admission = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CMCPS.Modules || (CMCPS.Modules = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Admission;
            (function (Admission) {
                var Bodybuilt;
                (function (Bodybuilt) {
                    Bodybuilt[Bodybuilt["Average"] = 1] = "Average";
                    Bodybuilt[Bodybuilt["shortstature"] = 2] = "shortstature";
                    Bodybuilt[Bodybuilt["Tall"] = 3] = "Tall";
                })(Bodybuilt = Admission.Bodybuilt || (Admission.Bodybuilt = {}));
                Serenity.Decorators.registerEnumType(Bodybuilt, 'CMCPS.Modules.Default.Admission.Bodybuilt');
            })(Admission = Default.Admission || (Default.Admission = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CMCPS.Modules || (CMCPS.Modules = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Admission;
            (function (Admission) {
                var CharacterEnum;
                (function (CharacterEnum) {
                    CharacterEnum[CharacterEnum["Normal"] = 1] = "Normal";
                    CharacterEnum[CharacterEnum["Slow"] = 2] = "Slow";
                    CharacterEnum[CharacterEnum["Collapsing"] = 3] = "Collapsing";
                    CharacterEnum[CharacterEnum["bigeminal"] = 4] = "bigeminal";
                    CharacterEnum[CharacterEnum["Bisferiens"] = 5] = "Bisferiens";
                    CharacterEnum[CharacterEnum["Pulsus"] = 6] = "Pulsus";
                    CharacterEnum[CharacterEnum["PulsusAlt"] = 7] = "PulsusAlt";
                })(CharacterEnum = Admission.CharacterEnum || (Admission.CharacterEnum = {}));
                Serenity.Decorators.registerEnumType(CharacterEnum, 'CMCPS.Modules.Default.Admission.CharacterEnum');
            })(Admission = Default.Admission || (Default.Admission = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CMCPS.Modules || (CMCPS.Modules = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Admission;
            (function (Admission) {
                var ClubbingEnum;
                (function (ClubbingEnum) {
                    ClubbingEnum[ClubbingEnum["Absent"] = 1] = "Absent";
                    ClubbingEnum[ClubbingEnum["Selected"] = 2] = "Selected";
                    ClubbingEnum[ClubbingEnum["Generalized"] = 3] = "Generalized";
                })(ClubbingEnum = Admission.ClubbingEnum || (Admission.ClubbingEnum = {}));
                Serenity.Decorators.registerEnumType(ClubbingEnum, 'CMCPS.Modules.Default.Admission.ClubbingEnum');
            })(Admission = Default.Admission || (Default.Admission = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CMCPS.Modules || (CMCPS.Modules = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Admission;
            (function (Admission) {
                var ConditionEnum;
                (function (ConditionEnum) {
                    ConditionEnum[ConditionEnum["Normal"] = 1] = "Normal";
                    ConditionEnum[ConditionEnum["Thickened"] = 2] = "Thickened";
                })(ConditionEnum = Admission.ConditionEnum || (Admission.ConditionEnum = {}));
                Serenity.Decorators.registerEnumType(ConditionEnum, 'CMCPS.Modules.Default.Admission.ConditionEnum');
            })(Admission = Default.Admission || (Default.Admission = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CMCPS.Modules || (CMCPS.Modules = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Admission;
            (function (Admission) {
                var ConsistencyEnum;
                (function (ConsistencyEnum) {
                    ConsistencyEnum[ConsistencyEnum["Soft"] = 1] = "Soft";
                    ConsistencyEnum[ConsistencyEnum["Firm"] = 2] = "Firm";
                    ConsistencyEnum[ConsistencyEnum["Hard"] = 2] = "Hard";
                })(ConsistencyEnum = Admission.ConsistencyEnum || (Admission.ConsistencyEnum = {}));
                Serenity.Decorators.registerEnumType(ConsistencyEnum, 'CMCPS.Modules.Default.Admission.ConsistencyEnum');
            })(Admission = Default.Admission || (Default.Admission = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CMCPS.Modules || (CMCPS.Modules = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Admission;
            (function (Admission) {
                var CyanosisEnum;
                (function (CyanosisEnum) {
                    CyanosisEnum[CyanosisEnum["Absent"] = 1] = "Absent";
                    CyanosisEnum[CyanosisEnum["central"] = 2] = "central";
                    CyanosisEnum[CyanosisEnum["peripheral"] = 3] = "peripheral";
                })(CyanosisEnum = Admission.CyanosisEnum || (Admission.CyanosisEnum = {}));
                Serenity.Decorators.registerEnumType(CyanosisEnum, 'CMCPS.Modules.Default.Admission.CyanosisEnum');
            })(Admission = Default.Admission || (Default.Admission = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CMCPS.Modules || (CMCPS.Modules = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Admission;
            (function (Admission) {
                var DecuibitusEnum;
                (function (DecuibitusEnum) {
                    DecuibitusEnum[DecuibitusEnum["Onchoice"] = 1] = "Onchoice";
                    DecuibitusEnum[DecuibitusEnum["Supine"] = 2] = "Supine";
                    DecuibitusEnum[DecuibitusEnum["Proppedup"] = 3] = "Proppedup";
                    DecuibitusEnum[DecuibitusEnum["ill"] = 4] = "ill";
                })(DecuibitusEnum = Admission.DecuibitusEnum || (Admission.DecuibitusEnum = {}));
                Serenity.Decorators.registerEnumType(DecuibitusEnum, 'CMCPS.Modules.Default.Admission.DecuibitusEnum');
            })(Admission = Default.Admission || (Default.Admission = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CMCPS.Modules || (CMCPS.Modules = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Admission;
            (function (Admission) {
                var EmergencyContactRelation;
                (function (EmergencyContactRelation) {
                    EmergencyContactRelation[EmergencyContactRelation["Married"] = 1] = "Married";
                    EmergencyContactRelation[EmergencyContactRelation["Unmarried"] = 2] = "Unmarried";
                    EmergencyContactRelation[EmergencyContactRelation["Brother"] = 3] = "Brother";
                    EmergencyContactRelation[EmergencyContactRelation["Sister"] = 4] = "Sister";
                    EmergencyContactRelation[EmergencyContactRelation["Others"] = 5] = "Others";
                })(EmergencyContactRelation = Admission.EmergencyContactRelation || (Admission.EmergencyContactRelation = {}));
                Serenity.Decorators.registerEnumType(EmergencyContactRelation, 'CMCPS.Modules.Default.Admission.EmergencyContactRelation');
            })(Admission = Default.Admission || (Default.Admission = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CMCPS.Modules || (CMCPS.Modules = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Admission;
            (function (Admission) {
                var ExaminationRegion;
                (function (ExaminationRegion) {
                    ExaminationRegion[ExaminationRegion["Abdomen"] = 1] = "Abdomen";
                    ExaminationRegion[ExaminationRegion["Chest"] = 2] = "Chest";
                    ExaminationRegion[ExaminationRegion["Limb"] = 3] = "Limb";
                    ExaminationRegion[ExaminationRegion["HeadNeck"] = 4] = "HeadNeck";
                    ExaminationRegion[ExaminationRegion["Back"] = 5] = "Back";
                    ExaminationRegion[ExaminationRegion["Perineum"] = 6] = "Perineum";
                })(ExaminationRegion = Admission.ExaminationRegion || (Admission.ExaminationRegion = {}));
                Serenity.Decorators.registerEnumType(ExaminationRegion, 'CMCPS.Modules.Default.Admission.ExaminationRegion');
            })(Admission = Default.Admission || (Default.Admission = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CMCPS.Modules || (CMCPS.Modules = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Admission;
            (function (Admission) {
                var FamilyHistoryDisease;
                (function (FamilyHistoryDisease) {
                    FamilyHistoryDisease[FamilyHistoryDisease["Yes"] = 1] = "Yes";
                    FamilyHistoryDisease[FamilyHistoryDisease["No"] = 2] = "No";
                })(FamilyHistoryDisease = Admission.FamilyHistoryDisease || (Admission.FamilyHistoryDisease = {}));
                Serenity.Decorators.registerEnumType(FamilyHistoryDisease, 'CMCPS.Modules.Default.Admission.FamilyHistoryDisease');
            })(Admission = Default.Admission || (Default.Admission = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CMCPS.Modules || (CMCPS.Modules = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Admission;
            (function (Admission) {
                var FeedingHistory;
                (function (FeedingHistory) {
                    FeedingHistory[FeedingHistory["Breastfed"] = 1] = "Breastfed";
                    FeedingHistory[FeedingHistory["Artficialfeeding"] = 2] = "Artficialfeeding";
                })(FeedingHistory = Admission.FeedingHistory || (Admission.FeedingHistory = {}));
                Serenity.Decorators.registerEnumType(FeedingHistory, 'CMCPS.Modules.Default.Admission.FeedingHistory');
            })(Admission = Default.Admission || (Default.Admission = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CMCPS.Modules || (CMCPS.Modules = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Admission;
            (function (Admission) {
                var FixationEnum;
                (function (FixationEnum) {
                    FixationEnum[FixationEnum["NotFixed"] = 1] = "NotFixed";
                    FixationEnum[FixationEnum["Fixed"] = 2] = "Fixed";
                })(FixationEnum = Admission.FixationEnum || (Admission.FixationEnum = {}));
                Serenity.Decorators.registerEnumType(FixationEnum, 'CMCPS.Modules.Default.Admission.FixationEnum');
            })(Admission = Default.Admission || (Default.Admission = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CMCPS.Modules || (CMCPS.Modules = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Admission;
            (function (Admission) {
                var GeneralEnum;
                (function (GeneralEnum) {
                    GeneralEnum[GeneralEnum["Absent"] = 1] = "Absent";
                    GeneralEnum[GeneralEnum["Mild"] = 2] = "Mild";
                    GeneralEnum[GeneralEnum["Moderate"] = 3] = "Moderate";
                    GeneralEnum[GeneralEnum["Severe"] = 4] = "Severe";
                })(GeneralEnum = Admission.GeneralEnum || (Admission.GeneralEnum = {}));
                Serenity.Decorators.registerEnumType(GeneralEnum, 'CMCPS.Modules.Default.Admission.GeneralEnum');
            })(Admission = Default.Admission || (Default.Admission = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CMCPS.Modules || (CMCPS.Modules = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Admission;
            (function (Admission) {
                var GeneralPartEnum;
                (function (GeneralPartEnum) {
                    GeneralPartEnum[GeneralPartEnum["Absent"] = 1] = "Absent";
                    GeneralPartEnum[GeneralPartEnum["Present"] = 2] = "Present";
                })(GeneralPartEnum = Admission.GeneralPartEnum || (Admission.GeneralPartEnum = {}));
                Serenity.Decorators.registerEnumType(GeneralPartEnum, 'CMCPS.Modules.Default.Admission.GeneralPartEnum');
            })(Admission = Default.Admission || (Default.Admission = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CMCPS.Modules || (CMCPS.Modules = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Admission;
            (function (Admission) {
                var Immunization;
                (function (Immunization) {
                    Immunization[Immunization["Immunized"] = 1] = "Immunized";
                    Immunization[Immunization["NotImmunized"] = 2] = "NotImmunized";
                })(Immunization = Admission.Immunization || (Admission.Immunization = {}));
                Serenity.Decorators.registerEnumType(Immunization, 'CMCPS.Modules.Default.Admission.Immunization');
            })(Admission = Default.Admission || (Default.Admission = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CMCPS.Modules || (CMCPS.Modules = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Admission;
            (function (Admission) {
                var LymphEnum;
                (function (LymphEnum) {
                    LymphEnum[LymphEnum["Notpalpable"] = 1] = "Notpalpable";
                    LymphEnum[LymphEnum["Palpable"] = 2] = "Palpable";
                })(LymphEnum = Admission.LymphEnum || (Admission.LymphEnum = {}));
                Serenity.Decorators.registerEnumType(LymphEnum, 'CMCPS.Modules.Default.Admission.LymphEnum');
            })(Admission = Default.Admission || (Default.Admission = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CMCPS.Modules || (CMCPS.Modules = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Admission;
            (function (Admission) {
                var LymphNode;
                (function (LymphNode) {
                    LymphNode[LymphNode["Palpable"] = 1] = "Palpable";
                    LymphNode[LymphNode["NotPalpable"] = 2] = "NotPalpable";
                })(LymphNode = Admission.LymphNode || (Admission.LymphNode = {}));
                Serenity.Decorators.registerEnumType(LymphNode, 'CMCPS.Modules.Default.Admission.LymphNode');
            })(Admission = Default.Admission || (Default.Admission = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CMCPS.Modules || (CMCPS.Modules = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Admission;
            (function (Admission) {
                var MaritalStatus;
                (function (MaritalStatus) {
                    MaritalStatus[MaritalStatus["Married"] = 1] = "Married";
                    MaritalStatus[MaritalStatus["Unmarried"] = 2] = "Unmarried";
                    MaritalStatus[MaritalStatus["Others"] = 3] = "Others";
                })(MaritalStatus = Admission.MaritalStatus || (Admission.MaritalStatus = {}));
                Serenity.Decorators.registerEnumType(MaritalStatus, 'CMCPS.Modules.Default.Admission.MaritalStatus');
            })(Admission = Default.Admission || (Default.Admission = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CMCPS.Modules || (CMCPS.Modules = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Admission;
            (function (Admission) {
                var MenarcheCycle;
                (function (MenarcheCycle) {
                    MenarcheCycle[MenarcheCycle["Regular"] = 1] = "Regular";
                    MenarcheCycle[MenarcheCycle["Irregular"] = 2] = "Irregular";
                })(MenarcheCycle = Admission.MenarcheCycle || (Admission.MenarcheCycle = {}));
                Serenity.Decorators.registerEnumType(MenarcheCycle, 'CMCPS.Modules.Default.Admission.MenarcheCycle');
            })(Admission = Default.Admission || (Default.Admission = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CMCPS.Modules || (CMCPS.Modules = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Admission;
            (function (Admission) {
                var MusclesEnum;
                (function (MusclesEnum) {
                    MusclesEnum[MusclesEnum["Wasted"] = 1] = "Wasted";
                    MusclesEnum[MusclesEnum["Normal"] = 2] = "Normal";
                    MusclesEnum[MusclesEnum["Working"] = 3] = "Working";
                })(MusclesEnum = Admission.MusclesEnum || (Admission.MusclesEnum = {}));
                Serenity.Decorators.registerEnumType(MusclesEnum, 'CMCPS.Modules.Default.Admission.MusclesEnum');
            })(Admission = Default.Admission || (Default.Admission = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CMCPS.Modules || (CMCPS.Modules = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Admission;
            (function (Admission) {
                var NeckVenisEnum;
                (function (NeckVenisEnum) {
                    NeckVenisEnum[NeckVenisEnum["Engorged"] = 1] = "Engorged";
                    NeckVenisEnum[NeckVenisEnum["Notengorged"] = 2] = "Notengorged";
                })(NeckVenisEnum = Admission.NeckVenisEnum || (Admission.NeckVenisEnum = {}));
                Serenity.Decorators.registerEnumType(NeckVenisEnum, 'CMCPS.Modules.Default.Admission.NeckVenisEnum');
            })(Admission = Default.Admission || (Default.Admission = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CMCPS.Modules || (CMCPS.Modules = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Admission;
            (function (Admission) {
                var NeckveinsEnum;
                (function (NeckveinsEnum) {
                    NeckveinsEnum[NeckveinsEnum["Engorged"] = 1] = "Engorged";
                    NeckveinsEnum[NeckveinsEnum["Notengorged"] = 2] = "Notengorged";
                })(NeckveinsEnum = Admission.NeckveinsEnum || (Admission.NeckveinsEnum = {}));
                Serenity.Decorators.registerEnumType(NeckveinsEnum, 'CMCPS.Modules.Default.Admission.NeckveinsEnum');
            })(Admission = Default.Admission || (Default.Admission = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CMCPS.Modules || (CMCPS.Modules = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Admission;
            (function (Admission) {
                var NoneDate;
                (function (NoneDate) {
                    NoneDate[NoneDate["None"] = 1] = "None";
                })(NoneDate = Admission.NoneDate || (Admission.NoneDate = {}));
                Serenity.Decorators.registerEnumType(NoneDate, 'CMCPS.Modules.Default.Admission.NoneDate');
            })(Admission = Default.Admission || (Default.Admission = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CMCPS.Modules || (CMCPS.Modules = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Admission;
            (function (Admission) {
                var OperationType;
                (function (OperationType) {
                    OperationType[OperationType["Routine"] = 1] = "Routine";
                    OperationType[OperationType["Emergency"] = 2] = "Emergency";
                })(OperationType = Admission.OperationType || (Admission.OperationType = {}));
                Serenity.Decorators.registerEnumType(OperationType, 'CMCPS.Modules.Default.Admission.OperationType');
            })(Admission = Default.Admission || (Default.Admission = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CMCPS.Modules || (CMCPS.Modules = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Admission;
            (function (Admission) {
                var PPActivity;
                (function (PPActivity) {
                    PPActivity[PPActivity["Yes"] = 1] = "Yes";
                    PPActivity[PPActivity["No"] = 2] = "No";
                })(PPActivity = Admission.PPActivity || (Admission.PPActivity = {}));
                Serenity.Decorators.registerEnumType(PPActivity, 'CMCPS.Modules.Default.Admission.PPActivity');
            })(Admission = Default.Admission || (Default.Admission = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CMCPS.Modules || (CMCPS.Modules = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Admission;
            (function (Admission) {
                var Percussion;
                (function (Percussion) {
                    Percussion[Percussion["Resonant"] = 1] = "Resonant";
                    Percussion[Percussion["Hyper"] = 2] = "Hyper";
                    Percussion[Percussion["Dull"] = 3] = "Dull";
                })(Percussion = Admission.Percussion || (Admission.Percussion = {}));
                Serenity.Decorators.registerEnumType(Percussion, 'CMCPS.Modules.Default.Admission.Percussion');
            })(Admission = Default.Admission || (Default.Admission = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CMCPS.Modules || (CMCPS.Modules = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Admission;
            (function (Admission) {
                var PositionApexBeat;
                (function (PositionApexBeat) {
                    PositionApexBeat[PositionApexBeat["Normal"] = 1] = "Normal";
                    PositionApexBeat[PositionApexBeat["Shifted"] = 2] = "Shifted";
                })(PositionApexBeat = Admission.PositionApexBeat || (Admission.PositionApexBeat = {}));
                Serenity.Decorators.registerEnumType(PositionApexBeat, 'CMCPS.Modules.Default.Admission.PositionApexBeat');
            })(Admission = Default.Admission || (Default.Admission = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CMCPS.Modules || (CMCPS.Modules = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Admission;
            (function (Admission) {
                var PositionTrachea;
                (function (PositionTrachea) {
                    PositionTrachea[PositionTrachea["Central"] = 1] = "Central";
                    PositionTrachea[PositionTrachea["DeviatedL"] = 2] = "DeviatedL";
                    PositionTrachea[PositionTrachea["DeviatedR"] = 3] = "DeviatedR";
                })(PositionTrachea = Admission.PositionTrachea || (Admission.PositionTrachea = {}));
                Serenity.Decorators.registerEnumType(PositionTrachea, 'CMCPS.Modules.Default.Admission.PositionTrachea');
            })(Admission = Default.Admission || (Default.Admission = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CMCPS.Modules || (CMCPS.Modules = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Admission;
            (function (Admission) {
                var Precordium;
                (function (Precordium) {
                    Precordium[Precordium["No"] = 1] = "No";
                    Precordium[Precordium["ApexBeat"] = 2] = "ApexBeat";
                    Precordium[Precordium["parasternal"] = 3] = "parasternal";
                    Precordium[Precordium["RootNeck"] = 4] = "RootNeck";
                    Precordium[Precordium["Epigastric"] = 5] = "Epigastric";
                })(Precordium = Admission.Precordium || (Admission.Precordium = {}));
                Serenity.Decorators.registerEnumType(Precordium, 'CMCPS.Modules.Default.Admission.Precordium');
            })(Admission = Default.Admission || (Default.Admission = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CMCPS.Modules || (CMCPS.Modules = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Admission;
            (function (Admission) {
                var Religion;
                (function (Religion) {
                    Religion[Religion["Islam"] = 1] = "Islam";
                    Religion[Religion["Hinduism"] = 2] = "Hinduism";
                    Religion[Religion["Buddhists"] = 3] = "Buddhists";
                    Religion[Religion["Christians"] = 4] = "Christians";
                    Religion[Religion["Animists"] = 5] = "Animists";
                })(Religion = Admission.Religion || (Admission.Religion = {}));
                Serenity.Decorators.registerEnumType(Religion, 'CMCPS.Modules.Default.Admission.Religion', 'Default.CommonFixedValue');
            })(Admission = Default.Admission || (Default.Admission = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CMCPS.Modules || (CMCPS.Modules = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Admission;
            (function (Admission) {
                var Result;
                (function (Result) {
                    Result[Result["Cured"] = 1] = "Cured";
                    Result[Result["Improved"] = 2] = "Improved";
                    Result[Result["Expired"] = 3] = "Expired";
                    Result[Result["DORB"] = 4] = "DORB";
                })(Result = Admission.Result || (Admission.Result = {}));
                Serenity.Decorators.registerEnumType(Result, 'CMCPS.Modules.Default.Admission.Result');
            })(Admission = Default.Admission || (Default.Admission = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CMCPS.Modules || (CMCPS.Modules = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Admission;
            (function (Admission) {
                var ShapeChest;
                (function (ShapeChest) {
                    ShapeChest[ShapeChest["Normal"] = 1] = "Normal";
                    ShapeChest[ShapeChest["Barrel"] = 2] = "Barrel";
                    ShapeChest[ShapeChest["Pigeon"] = 3] = "Pigeon";
                    ShapeChest[ShapeChest["Pectus"] = 4] = "Pectus";
                })(ShapeChest = Admission.ShapeChest || (Admission.ShapeChest = {}));
                Serenity.Decorators.registerEnumType(ShapeChest, 'CMCPS.Modules.Default.Admission.ShapeChest');
            })(Admission = Default.Admission || (Default.Admission = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CMCPS.Modules || (CMCPS.Modules = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Admission;
            (function (Admission) {
                var SignMeningeal;
                (function (SignMeningeal) {
                    SignMeningeal[SignMeningeal["Yes"] = 1] = "Yes";
                    SignMeningeal[SignMeningeal["No"] = 2] = "No";
                })(SignMeningeal = Admission.SignMeningeal || (Admission.SignMeningeal = {}));
                Serenity.Decorators.registerEnumType(SignMeningeal, 'CMCPS.Modules.Default.Admission.SignMeningeal');
            })(Admission = Default.Admission || (Default.Admission = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CMCPS.Modules || (CMCPS.Modules = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Admission;
            (function (Admission) {
                var Site;
                (function (Site) {
                    Site[Site["Cervical"] = 1] = "Cervical";
                    Site[Site["Axillary"] = 2] = "Axillary";
                    Site[Site["Inguinal"] = 3] = "Inguinal";
                    Site[Site["Other"] = 4] = "Other";
                })(Site = Admission.Site || (Admission.Site = {}));
                Serenity.Decorators.registerEnumType(Site, 'CMCPS.Modules.Default.Admission.Site');
            })(Admission = Default.Admission || (Default.Admission = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CMCPS.Modules || (CMCPS.Modules = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Admission;
            (function (Admission) {
                var SkinEnum;
                (function (SkinEnum) {
                    SkinEnum[SkinEnum["Normal"] = 1] = "Normal";
                    SkinEnum[SkinEnum["Abnormal"] = 2] = "Abnormal";
                })(SkinEnum = Admission.SkinEnum || (Admission.SkinEnum = {}));
                Serenity.Decorators.registerEnumType(SkinEnum, 'CMCPS.Modules.Default.Admission.SkinEnum');
            })(Admission = Default.Admission || (Default.Admission = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CMCPS.Modules || (CMCPS.Modules = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Admission;
            (function (Admission) {
                var TypeOfPatient;
                (function (TypeOfPatient) {
                    TypeOfPatient[TypeOfPatient["Old"] = 1] = "Old";
                    TypeOfPatient[TypeOfPatient["New"] = 2] = "New";
                })(TypeOfPatient = Admission.TypeOfPatient || (Admission.TypeOfPatient = {}));
                Serenity.Decorators.registerEnumType(TypeOfPatient, 'CMCPS.Modules.Default.Admission.TypeOfPatient');
            })(Admission = Default.Admission || (Default.Admission = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CMCPS.Modules || (CMCPS.Modules = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Admission;
            (function (Admission) {
                var VocalFremitus;
                (function (VocalFremitus) {
                    VocalFremitus[VocalFremitus["Normal"] = 1] = "Normal";
                    VocalFremitus[VocalFremitus["Increased"] = 2] = "Increased";
                    VocalFremitus[VocalFremitus["Decreased"] = 3] = "Decreased";
                })(VocalFremitus = Admission.VocalFremitus || (Admission.VocalFremitus = {}));
                Serenity.Decorators.registerEnumType(VocalFremitus, 'CMCPS.Modules.Default.Admission.VocalFremitus');
            })(Admission = Default.Admission || (Default.Admission = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CMCPS.Modules || (CMCPS.Modules = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Admission;
            (function (Admission) {
                var VolumeEnum;
                (function (VolumeEnum) {
                    VolumeEnum[VolumeEnum["Normal"] = 1] = "Normal";
                    VolumeEnum[VolumeEnum["High"] = 2] = "High";
                    VolumeEnum[VolumeEnum["Low"] = 3] = "Low";
                })(VolumeEnum = Admission.VolumeEnum || (Admission.VolumeEnum = {}));
                Serenity.Decorators.registerEnumType(VolumeEnum, 'CMCPS.Modules.Default.Admission.VolumeEnum');
            })(Admission = Default.Admission || (Default.Admission = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CMCPS.Modules || (CMCPS.Modules = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Admission;
            (function (Admission) {
                var temperatureEnum;
                (function (temperatureEnum) {
                    temperatureEnum[temperatureEnum["Notraied"] = 1] = "Notraied";
                    temperatureEnum[temperatureEnum["raised"] = 2] = "raised";
                })(temperatureEnum = Admission.temperatureEnum || (Admission.temperatureEnum = {}));
                Serenity.Decorators.registerEnumType(temperatureEnum, 'CMCPS.Modules.Default.Admission.temperatureEnum');
            })(Admission = Default.Admission || (Default.Admission = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CMCPS.Modules || (CMCPS.Modules = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var History;
            (function (History) {
                var AntenatalHistoryRow;
                (function (AntenatalHistoryRow) {
                    AntenatalHistoryRow.idProperty = 'PbAntenatalHistoryId';
                    AntenatalHistoryRow.localTextPrefix = 'Default.AntenatalHistory';
                    AntenatalHistoryRow.lookupKey = 'Default.History';
                    function getLookup() {
                        return Q.getLookup('Default.History');
                    }
                    AntenatalHistoryRow.getLookup = getLookup;
                })(AntenatalHistoryRow = History.AntenatalHistoryRow || (History.AntenatalHistoryRow = {}));
            })(History = Default.History || (Default.History = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CMCPS.Modules || (CMCPS.Modules = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var History;
            (function (History) {
                var NatalHistoryRow;
                (function (NatalHistoryRow) {
                    NatalHistoryRow.idProperty = 'PbNatalHistoryId';
                    NatalHistoryRow.localTextPrefix = 'Default.NatalHistory';
                    NatalHistoryRow.lookupKey = 'Default.Historuy';
                    function getLookup() {
                        return Q.getLookup('Default.Historuy');
                    }
                    NatalHistoryRow.getLookup = getLookup;
                })(NatalHistoryRow = History.NatalHistoryRow || (History.NatalHistoryRow = {}));
            })(History = Default.History || (Default.History = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CMCPS.Modules || (CMCPS.Modules = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var History;
            (function (History) {
                var PostNatalHistoryRow;
                (function (PostNatalHistoryRow) {
                    PostNatalHistoryRow.idProperty = 'PBPostNatalHistoryId';
                    PostNatalHistoryRow.localTextPrefix = 'Default.PostNatalHistory';
                    PostNatalHistoryRow.lookupKey = 'Default.Historyy';
                    function getLookup() {
                        return Q.getLookup('Default.Historyy');
                    }
                    PostNatalHistoryRow.getLookup = getLookup;
                })(PostNatalHistoryRow = History.PostNatalHistoryRow || (History.PostNatalHistoryRow = {}));
            })(History = Default.History || (Default.History = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CMCPS.Modules || (CMCPS.Modules = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var CategoryForm = /** @class */ (function (_super) {
            __extends(CategoryForm, _super);
            function CategoryForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CategoryForm.init) {
                    CategoryForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(CategoryForm, [
                        'CategoryName', w0,
                        'Description', w0
                    ]);
                }
                return _this;
            }
            CategoryForm.formKey = 'Northwind.Category';
            return CategoryForm;
        }(Serenity.PrefixedContext));
        Northwind.CategoryForm = CategoryForm;
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var CategoryLangRow;
        (function (CategoryLangRow) {
            CategoryLangRow.idProperty = 'Id';
            CategoryLangRow.nameProperty = 'CategoryName';
            CategoryLangRow.localTextPrefix = 'Northwind.CategoryLang';
        })(CategoryLangRow = Northwind.CategoryLangRow || (Northwind.CategoryLangRow = {}));
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var CategoryLangService;
        (function (CategoryLangService) {
            CategoryLangService.baseUrl = 'Northwind/CategoryLang';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CategoryLangService[x] = function (r, s, o) {
                    return Q.serviceRequest(CategoryLangService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CategoryLangService = Northwind.CategoryLangService || (Northwind.CategoryLangService = {}));
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var CategoryRow;
        (function (CategoryRow) {
            CategoryRow.idProperty = 'CategoryID';
            CategoryRow.nameProperty = 'CategoryName';
            CategoryRow.localTextPrefix = 'Northwind.Category';
            CategoryRow.lookupKey = 'Northwind.Category';
            function getLookup() {
                return Q.getLookup('Northwind.Category');
            }
            CategoryRow.getLookup = getLookup;
        })(CategoryRow = Northwind.CategoryRow || (Northwind.CategoryRow = {}));
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var CategoryService;
        (function (CategoryService) {
            CategoryService.baseUrl = 'Northwind/Category';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CategoryService[x] = function (r, s, o) {
                    return Q.serviceRequest(CategoryService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CategoryService = Northwind.CategoryService || (Northwind.CategoryService = {}));
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var CustomerCustomerDemoRow;
        (function (CustomerCustomerDemoRow) {
            CustomerCustomerDemoRow.idProperty = 'ID';
            CustomerCustomerDemoRow.nameProperty = 'CustomerID';
            CustomerCustomerDemoRow.localTextPrefix = 'Northwind.CustomerCustomerDemo';
        })(CustomerCustomerDemoRow = Northwind.CustomerCustomerDemoRow || (Northwind.CustomerCustomerDemoRow = {}));
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var CustomerDemographicRow;
        (function (CustomerDemographicRow) {
            CustomerDemographicRow.idProperty = 'ID';
            CustomerDemographicRow.nameProperty = 'CustomerTypeID';
            CustomerDemographicRow.localTextPrefix = 'Northwind.CustomerDemographic';
        })(CustomerDemographicRow = Northwind.CustomerDemographicRow || (Northwind.CustomerDemographicRow = {}));
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var CustomerDetailsRow;
        (function (CustomerDetailsRow) {
            CustomerDetailsRow.idProperty = 'Id';
            CustomerDetailsRow.nameProperty = 'Email';
            CustomerDetailsRow.localTextPrefix = 'Northwind.CustomerDetails';
        })(CustomerDetailsRow = Northwind.CustomerDetailsRow || (Northwind.CustomerDetailsRow = {}));
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var CustomerForm = /** @class */ (function (_super) {
            __extends(CustomerForm, _super);
            function CustomerForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CustomerForm.init) {
                    CustomerForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = Northwind.NotesEditor;
                    var w3 = s.DateEditor;
                    var w4 = s.EmailEditor;
                    var w5 = s.BooleanEditor;
                    Q.initFormType(CustomerForm, [
                        'CustomerID', w0,
                        'CompanyName', w0,
                        'ContactName', w0,
                        'ContactTitle', w0,
                        'Representatives', w1,
                        'Address', w0,
                        'Country', w1,
                        'City', w1,
                        'Region', w0,
                        'PostalCode', w0,
                        'Phone', w0,
                        'Fax', w0,
                        'NoteList', w2,
                        'LastContactDate', w3,
                        'LastContactedBy', w1,
                        'Email', w4,
                        'SendBulletin', w5
                    ]);
                }
                return _this;
            }
            CustomerForm.formKey = 'Northwind.Customer';
            return CustomerForm;
        }(Serenity.PrefixedContext));
        Northwind.CustomerForm = CustomerForm;
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var CustomerGrossSalesRow;
        (function (CustomerGrossSalesRow) {
            CustomerGrossSalesRow.nameProperty = 'ContactName';
            CustomerGrossSalesRow.localTextPrefix = 'Northwind.CustomerGrossSales';
        })(CustomerGrossSalesRow = Northwind.CustomerGrossSalesRow || (Northwind.CustomerGrossSalesRow = {}));
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var CustomerRepresentativesRow;
        (function (CustomerRepresentativesRow) {
            CustomerRepresentativesRow.idProperty = 'RepresentativeId';
            CustomerRepresentativesRow.localTextPrefix = 'Northwind.CustomerRepresentatives';
        })(CustomerRepresentativesRow = Northwind.CustomerRepresentativesRow || (Northwind.CustomerRepresentativesRow = {}));
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var CustomerRow;
        (function (CustomerRow) {
            CustomerRow.idProperty = 'ID';
            CustomerRow.nameProperty = 'CompanyName';
            CustomerRow.localTextPrefix = 'Northwind.Customer';
            CustomerRow.lookupKey = 'Northwind.Customer';
            function getLookup() {
                return Q.getLookup('Northwind.Customer');
            }
            CustomerRow.getLookup = getLookup;
        })(CustomerRow = Northwind.CustomerRow || (Northwind.CustomerRow = {}));
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var CustomerService;
        (function (CustomerService) {
            CustomerService.baseUrl = 'Northwind/Customer';
            [
                'Create',
                'Update',
                'Delete',
                'GetNextNumber',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CustomerService[x] = function (r, s, o) {
                    return Q.serviceRequest(CustomerService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CustomerService = Northwind.CustomerService || (Northwind.CustomerService = {}));
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var EmployeeRow;
        (function (EmployeeRow) {
            EmployeeRow.idProperty = 'EmployeeID';
            EmployeeRow.nameProperty = 'FullName';
            EmployeeRow.localTextPrefix = 'Northwind.Employee';
            EmployeeRow.lookupKey = 'Northwind.Employee';
            function getLookup() {
                return Q.getLookup('Northwind.Employee');
            }
            EmployeeRow.getLookup = getLookup;
        })(EmployeeRow = Northwind.EmployeeRow || (Northwind.EmployeeRow = {}));
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var EmployeeTerritoryRow;
        (function (EmployeeTerritoryRow) {
            EmployeeTerritoryRow.idProperty = 'EmployeeID';
            EmployeeTerritoryRow.nameProperty = 'TerritoryID';
            EmployeeTerritoryRow.localTextPrefix = 'Northwind.EmployeeTerritory';
        })(EmployeeTerritoryRow = Northwind.EmployeeTerritoryRow || (Northwind.EmployeeTerritoryRow = {}));
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var Gender;
        (function (Gender) {
            Gender[Gender["Male"] = 1] = "Male";
            Gender[Gender["Female"] = 2] = "Female";
        })(Gender = Northwind.Gender || (Northwind.Gender = {}));
        Serenity.Decorators.registerEnumType(Gender, 'CMCPS.Northwind.Gender', 'CMCPS.Northwind.Entities.Gender');
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var NoteRow;
        (function (NoteRow) {
            NoteRow.idProperty = 'NoteId';
            NoteRow.nameProperty = 'EntityType';
            NoteRow.localTextPrefix = 'Northwind.Note';
        })(NoteRow = Northwind.NoteRow || (Northwind.NoteRow = {}));
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailForm = /** @class */ (function (_super) {
            __extends(OrderDetailForm, _super);
            function OrderDetailForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OrderDetailForm.init) {
                    OrderDetailForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.IntegerEditor;
                    Q.initFormType(OrderDetailForm, [
                        'ProductID', w0,
                        'UnitPrice', w1,
                        'Quantity', w2,
                        'Discount', w1
                    ]);
                }
                return _this;
            }
            OrderDetailForm.formKey = 'Northwind.OrderDetail';
            return OrderDetailForm;
        }(Serenity.PrefixedContext));
        Northwind.OrderDetailForm = OrderDetailForm;
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailRow;
        (function (OrderDetailRow) {
            OrderDetailRow.idProperty = 'DetailID';
            OrderDetailRow.localTextPrefix = 'Northwind.OrderDetail';
        })(OrderDetailRow = Northwind.OrderDetailRow || (Northwind.OrderDetailRow = {}));
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailService;
        (function (OrderDetailService) {
            OrderDetailService.baseUrl = 'Northwind/OrderDetail';
            [
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OrderDetailService[x] = function (r, s, o) {
                    return Q.serviceRequest(OrderDetailService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OrderDetailService = Northwind.OrderDetailService || (Northwind.OrderDetailService = {}));
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var OrderForm = /** @class */ (function (_super) {
            __extends(OrderForm, _super);
            function OrderForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OrderForm.init) {
                    OrderForm.init = true;
                    var s = Serenity;
                    var w0 = Northwind.CustomerEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.LookupEditor;
                    var w3 = Northwind.OrderDetailsEditor;
                    var w4 = s.DecimalEditor;
                    var w5 = s.StringEditor;
                    Q.initFormType(OrderForm, [
                        'CustomerID', w0,
                        'OrderDate', w1,
                        'RequiredDate', w1,
                        'EmployeeID', w2,
                        'DetailList', w3,
                        'ShippedDate', w1,
                        'ShipVia', w2,
                        'Freight', w4,
                        'ShipName', w5,
                        'ShipAddress', w5,
                        'ShipCity', w5,
                        'ShipRegion', w5,
                        'ShipPostalCode', w5,
                        'ShipCountry', w5
                    ]);
                }
                return _this;
            }
            OrderForm.formKey = 'Northwind.Order';
            return OrderForm;
        }(Serenity.PrefixedContext));
        Northwind.OrderForm = OrderForm;
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var OrderRow;
        (function (OrderRow) {
            OrderRow.idProperty = 'OrderID';
            OrderRow.nameProperty = 'CustomerID';
            OrderRow.localTextPrefix = 'Northwind.Order';
        })(OrderRow = Northwind.OrderRow || (Northwind.OrderRow = {}));
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var OrderService;
        (function (OrderService) {
            OrderService.baseUrl = 'Northwind/Order';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OrderService[x] = function (r, s, o) {
                    return Q.serviceRequest(OrderService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OrderService = Northwind.OrderService || (Northwind.OrderService = {}));
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var OrderShippingState;
        (function (OrderShippingState) {
            OrderShippingState[OrderShippingState["NotShipped"] = 0] = "NotShipped";
            OrderShippingState[OrderShippingState["Shipped"] = 1] = "Shipped";
        })(OrderShippingState = Northwind.OrderShippingState || (Northwind.OrderShippingState = {}));
        Serenity.Decorators.registerEnumType(OrderShippingState, 'CMCPS.Northwind.OrderShippingState', 'Northwind.OrderShippingState');
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var ProductForm = /** @class */ (function (_super) {
            __extends(ProductForm, _super);
            function ProductForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProductForm.init) {
                    ProductForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.ImageUploadEditor;
                    var w2 = s.BooleanEditor;
                    var w3 = s.LookupEditor;
                    var w4 = s.DecimalEditor;
                    var w5 = s.IntegerEditor;
                    Q.initFormType(ProductForm, [
                        'ProductName', w0,
                        'ProductImage', w1,
                        'Discontinued', w2,
                        'SupplierID', w3,
                        'CategoryID', w3,
                        'QuantityPerUnit', w0,
                        'UnitPrice', w4,
                        'UnitsInStock', w5,
                        'UnitsOnOrder', w5,
                        'ReorderLevel', w5
                    ]);
                }
                return _this;
            }
            ProductForm.formKey = 'Northwind.Product';
            return ProductForm;
        }(Serenity.PrefixedContext));
        Northwind.ProductForm = ProductForm;
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var ProductLangRow;
        (function (ProductLangRow) {
            ProductLangRow.idProperty = 'Id';
            ProductLangRow.nameProperty = 'ProductName';
            ProductLangRow.localTextPrefix = 'Northwind.ProductLang';
        })(ProductLangRow = Northwind.ProductLangRow || (Northwind.ProductLangRow = {}));
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var ProductLangService;
        (function (ProductLangService) {
            ProductLangService.baseUrl = 'Northwind/ProductLang';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProductLangService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductLangService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProductLangService = Northwind.ProductLangService || (Northwind.ProductLangService = {}));
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var ProductLogRow;
        (function (ProductLogRow) {
            ProductLogRow.idProperty = 'ProductLogID';
            ProductLogRow.localTextPrefix = 'Northwind.ProductLog';
        })(ProductLogRow = Northwind.ProductLogRow || (Northwind.ProductLogRow = {}));
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var ProductRow;
        (function (ProductRow) {
            ProductRow.idProperty = 'ProductID';
            ProductRow.nameProperty = 'ProductName';
            ProductRow.localTextPrefix = 'Northwind.Product';
            ProductRow.lookupKey = 'Northwind.Product';
            function getLookup() {
                return Q.getLookup('Northwind.Product');
            }
            ProductRow.getLookup = getLookup;
        })(ProductRow = Northwind.ProductRow || (Northwind.ProductRow = {}));
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var ProductService;
        (function (ProductService) {
            ProductService.baseUrl = 'Northwind/Product';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProductService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProductService = Northwind.ProductService || (Northwind.ProductService = {}));
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var RegionForm = /** @class */ (function (_super) {
            __extends(RegionForm, _super);
            function RegionForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RegionForm.init) {
                    RegionForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(RegionForm, [
                        'RegionID', w0,
                        'RegionDescription', w1
                    ]);
                }
                return _this;
            }
            RegionForm.formKey = 'Northwind.Region';
            return RegionForm;
        }(Serenity.PrefixedContext));
        Northwind.RegionForm = RegionForm;
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var RegionRow;
        (function (RegionRow) {
            RegionRow.idProperty = 'RegionID';
            RegionRow.nameProperty = 'RegionDescription';
            RegionRow.localTextPrefix = 'Northwind.Region';
            RegionRow.lookupKey = 'Northwind.Region';
            function getLookup() {
                return Q.getLookup('Northwind.Region');
            }
            RegionRow.getLookup = getLookup;
        })(RegionRow = Northwind.RegionRow || (Northwind.RegionRow = {}));
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var RegionService;
        (function (RegionService) {
            RegionService.baseUrl = 'Northwind/Region';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RegionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RegionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RegionService = Northwind.RegionService || (Northwind.RegionService = {}));
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var SalesByCategoryRow;
        (function (SalesByCategoryRow) {
            SalesByCategoryRow.nameProperty = 'CategoryName';
            SalesByCategoryRow.localTextPrefix = 'Northwind.SalesByCategory';
        })(SalesByCategoryRow = Northwind.SalesByCategoryRow || (Northwind.SalesByCategoryRow = {}));
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var SalesByCategoryService;
        (function (SalesByCategoryService) {
            SalesByCategoryService.baseUrl = 'Northwind/SalesByCategory';
            [
                'List'
            ].forEach(function (x) {
                SalesByCategoryService[x] = function (r, s, o) {
                    return Q.serviceRequest(SalesByCategoryService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SalesByCategoryService = Northwind.SalesByCategoryService || (Northwind.SalesByCategoryService = {}));
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var ShipperForm = /** @class */ (function (_super) {
            __extends(ShipperForm, _super);
            function ShipperForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ShipperForm.init) {
                    ShipperForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = Northwind.PhoneEditor;
                    Q.initFormType(ShipperForm, [
                        'CompanyName', w0,
                        'Phone', w1
                    ]);
                }
                return _this;
            }
            ShipperForm.formKey = 'Northwind.Shipper';
            return ShipperForm;
        }(Serenity.PrefixedContext));
        Northwind.ShipperForm = ShipperForm;
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var ShipperRow;
        (function (ShipperRow) {
            ShipperRow.idProperty = 'ShipperID';
            ShipperRow.nameProperty = 'CompanyName';
            ShipperRow.localTextPrefix = 'Northwind.Shipper';
            ShipperRow.lookupKey = 'Northwind.Shipper';
            function getLookup() {
                return Q.getLookup('Northwind.Shipper');
            }
            ShipperRow.getLookup = getLookup;
        })(ShipperRow = Northwind.ShipperRow || (Northwind.ShipperRow = {}));
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var ShipperService;
        (function (ShipperService) {
            ShipperService.baseUrl = 'Northwind/Shipper';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ShipperService[x] = function (r, s, o) {
                    return Q.serviceRequest(ShipperService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ShipperService = Northwind.ShipperService || (Northwind.ShipperService = {}));
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var SupplierForm = /** @class */ (function (_super) {
            __extends(SupplierForm, _super);
            function SupplierForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SupplierForm.init) {
                    SupplierForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(SupplierForm, [
                        'CompanyName', w0,
                        'ContactName', w0,
                        'ContactTitle', w0,
                        'Address', w0,
                        'Region', w0,
                        'PostalCode', w0,
                        'Country', w0,
                        'City', w0,
                        'Phone', w0,
                        'Fax', w0,
                        'HomePage', w0
                    ]);
                }
                return _this;
            }
            SupplierForm.formKey = 'Northwind.Supplier';
            return SupplierForm;
        }(Serenity.PrefixedContext));
        Northwind.SupplierForm = SupplierForm;
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var SupplierRow;
        (function (SupplierRow) {
            SupplierRow.idProperty = 'SupplierID';
            SupplierRow.nameProperty = 'CompanyName';
            SupplierRow.localTextPrefix = 'Northwind.Supplier';
            SupplierRow.lookupKey = 'Northwind.Supplier';
            function getLookup() {
                return Q.getLookup('Northwind.Supplier');
            }
            SupplierRow.getLookup = getLookup;
        })(SupplierRow = Northwind.SupplierRow || (Northwind.SupplierRow = {}));
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var SupplierService;
        (function (SupplierService) {
            SupplierService.baseUrl = 'Northwind/Supplier';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SupplierService[x] = function (r, s, o) {
                    return Q.serviceRequest(SupplierService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SupplierService = Northwind.SupplierService || (Northwind.SupplierService = {}));
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var TerritoryForm = /** @class */ (function (_super) {
            __extends(TerritoryForm, _super);
            function TerritoryForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TerritoryForm.init) {
                    TerritoryForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    Q.initFormType(TerritoryForm, [
                        'TerritoryID', w0,
                        'TerritoryDescription', w0,
                        'RegionID', w1
                    ]);
                }
                return _this;
            }
            TerritoryForm.formKey = 'Northwind.Territory';
            return TerritoryForm;
        }(Serenity.PrefixedContext));
        Northwind.TerritoryForm = TerritoryForm;
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var TerritoryRow;
        (function (TerritoryRow) {
            TerritoryRow.idProperty = 'ID';
            TerritoryRow.nameProperty = 'TerritoryID';
            TerritoryRow.localTextPrefix = 'Northwind.Territory';
            TerritoryRow.lookupKey = 'Northwind.Territory';
            function getLookup() {
                return Q.getLookup('Northwind.Territory');
            }
            TerritoryRow.getLookup = getLookup;
        })(TerritoryRow = Northwind.TerritoryRow || (Northwind.TerritoryRow = {}));
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var TerritoryService;
        (function (TerritoryService) {
            TerritoryService.baseUrl = 'Northwind/Territory';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TerritoryService[x] = function (r, s, o) {
                    return Q.serviceRequest(TerritoryService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TerritoryService = Northwind.TerritoryService || (Northwind.TerritoryService = {}));
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Texts;
    (function (Texts) {
        CMCPS['Texts'] = Q.proxyTexts(Texts, '', { Db: { Administration: { Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, Role: { RoleId: 1, RoleName: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { Designation: 1, DesignationId: 1, DisplayName: 1, Email: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Source: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 } }, Common: { ReportHeading: { CompanyName: 1, Department: 1, Id: 1, LogoLeft: 1, LogoRight: 1 }, UserPreference: { Name: 1, PreferenceType: 1, UserId: 1, UserPreferenceId: 1, Value: 1 } }, Default: { Admission: { AddedSound: 1, AddtoMajorSurgery: 1, AdmissionId: 1, Age: 1, AgeAtMenarche: 1, AgeAtMenarcheLabel: 1, AgeAtMenarcheLabel1: 1, AgeAtMenarcheLabel2: 1, AgeOfLastChild: 1, AgeOfMenopause: 1, Alimentary: 1, AllergicHistory: 1, Anaemia: 1, AnemiaId: 1, AntenatalList: 1, ApexBeat: 1, Appearance: 1, Asterixis: 1, Auscultation: 1, AuscultationList: 1, BMI: 1, BP: 1, BedId: 1, BedNumber: 1, Behaviour: 1, BloodGroup: 1, BloodGroupId: 1, BloodPressure: 1, BloodTransfusion: 1, BodyBuild: 1, BonyTenderness: 1, BreathSoundList: 1, Cardiovascular: 1, Character: 1, ChestExpansibility: 1, Circumference: 1, Clubbing: 1, ClubbingReSelect: 1, CoOperation: 1, ConditionOf: 1, Conditions: 1, Consanguinity: 1, ConsanguinityId: 1, Consistency: 1, Crepitation: 1, Cyanosis: 1, CyanosisReSelect: 1, Date: 1, DateOfBirth: 1, Decubitus: 1, Dehydration: 1, DehydrationId: 1, DetailList: 1, DiagnosisDetails: 1, DischargeDate: 1, DischargeId: 1, DischargingSinus: 1, DistrictId: 1, DistrictName: 1, Doctor: 1, DrugHistory: 1, Edema: 1, EmergencyPerAddress: 1, EmergencyPerMobile: 1, EmergencyPerson: 1, EmergencyRelation: 1, ExaminationRegion: 1, FamilyHistory: 1, FamilyHistoryDiseaseId: 1, FamilyHistoryId: 1, FatherNID: 1, FatherName: 1, Feedinghistory: 1, FinalDiagnosis: 1, Fixation: 1, GEOther: 1, Genitourinary: 1, Haemopoetic: 1, Height: 1, HistoryOfPresentIllness: 1, HoPastIllness: 1, HospitalRegNumber: 1, House: 1, ICTSitu: 1, IllnessList: 1, Immunization: 1, ImmunizationList: 1, InsertDate: 1, InsertUserId: 1, Inspection: 1, Investigations: 1, IsNAD: 1, JVP: 1, JVPReSelect: 1, JVPReSelectCardiovascular: 1, Jaundice: 1, JaundiceId: 1, Koilonychia: 1, LMP: 1, Leukonychia: 1, LocalTemperature: 1, Locomotor: 1, LymphNode: 1, LymphReSelect: 1, MajorSurgery: 1, MajorSurgeryId: 1, MaritalStatus: 1, MenarcheCycle: 1, Milestone: 1, Mobile: 1, MotherNID: 1, MotherName: 1, Muscles: 1, Name: 1, NameAndPin: 1, NatalList: 1, NeckVeins: 1, NeckVenis: 1, NicotineStain: 1, Nutrition: 1, Oedema: 1, OedemaId: 1, OperationId: 1, OperationNoteId: 1, Other: 1, PPDetailList: 1, Palpation: 1, PatientType: 1, Percussion: 1, PercussionList: 1, PercussionNote: 1, PinNumber: 1, Plandischarge: 1, PositionApexBeat: 1, PositionTrachea: 1, PostNatalList: 1, PostOffice: 1, ProvisionalDiagnosis: 1, Pulse: 1, PulseRate: 1, RR: 1, RadiationMark: 1, RedioFemoralDelay: 1, RegularMedicationId: 1, RegularMedicationName: 1, Religion: 1, RespRate: 1, Respiratory: 1, Result: 1, Rhonchi: 1, Rhythm: 1, Rub: 1, SalientFeatures: 1, ScarMark: 1, ScarMarkPrecordium: 1, Sex: 1, SexId: 1, ShapeChest: 1, SignMeningeal: 1, Site: 1, Size: 1, Skin: 1, SkinText: 1, SocialPersonalHistory: 1, Socioeconomichistory: 1, Stridor: 1, Summary: 1, SupraclavicularIndrawing: 1, Swelling: 1, SwellingPrecordium: 1, Temperature: 1, Tenderness: 1, Thyroid: 1, ThyroidGland: 1, Time: 1, TrachealTag: 1, Travelhistory: 1, UnitId: 1, UnitNumber: 1, UnitRegNumber: 1, UpazilaId: 1, UpazilaName: 1, UpdateDate: 1, UpdateUserId: 1, VisibleApexBeatPrecordium: 1, VisibleImpulsePrecordium: 1, VisibleVein: 1, VocalFremitus: 1, VocalResonanceList: 1, Volume: 1, Ward: 1, WardId: 1, Weight: 1 }, AdmissionCcDetails: { AdmissionId: 1, ComplaintId: 1, Days: 1, PComplaints: 1, PrComplaintsId: 1 }, AdmissionPpDetails: { ActivityId: 1, AdmissionId: 1, AlcoholismId: 1, DrugAddictionId: 1, ExposureHistoryId: 1, HistoryId: 1, SmokingId: 1 }, AnemiaAndJaundice: { AnemiaAndJaundiceId: 1, Name: 1 }, Anesthesia: { AnesthesiaId: 1, AnesthesiaName: 1 }, Anesthetist: { AnesthetistId: 1, AnesthetistName: 1 }, Antenatal: { AntenatalId: 1, AntenatalName: 1 }, AntenatalHistory: { AdmissionId: 1, AntenatalId: 1, PbAntenatalHistoryId: 1 }, AssistantSurgeon: { AssistantSurgeonId: 1, AssistantSurgeonName: 1 }, Auscultation: { AuscultationId: 1, AuscultationName: 1 }, AuscultationHistory: { AdmissionId: 1, AuscultationHistoryId: 1, AuscultationId: 1 }, Bed: { BedId: 1, BedNumber: 1, Note: 1 }, BirthHistory: { BirthHistory: 1, BirthHistoryId: 1, Note: 1 }, BloodGroups: { BloodGroup: 1, BloodGroupId: 1 }, BreathSound: { BreathSoundId: 1, BreathSoundName: 1 }, BreathSoundHistory: { AdmissionId: 1, BreathSoundHistoryId: 1, BreathSoundId: 1 }, Complication: { AddtoComplication: 1, AdmissionDate: 1, AdmissionId: 1, Age: 1, BedNumber: 1, BloodGroup: 1, ComplicationId: 1, ComplicationName: 1, ComplicationNoteId: 1, Doctor: 1, EntryDate: 1, FinalDiagnosis: 1, HospitalRegNo: 1, Name: 1, OperationId: 1, OperationName: 1, PinNumber: 1, Sex: 1, SexId: 1, UnitId: 1, UnitNumber: 1, UnitRegNo: 1, Weight: 1 }, ComplicationNote: { ComplicationNote: 1, ComplicationNoteId: 1 }, Consanguinity: { Consanguinity: 1, ConsanguinityId: 1 }, DDiagnosisDetails: { AdmissionId: 1, DId: 1, Diagnosis: 1, DiagnosisId: 1 }, Dehydration: { Dehydration: 1, DehydrationId: 1 }, Designation: { DesignationId: 1, DesignationName: 1 }, Diagnosis: { DiagnosisId: 1, DiagnosisName: 1, Note: 1 }, Diagram: { DiagramId: 1, DiagramName: 1 }, Discharge: { AddtoArea: 1, AdmissionDate: 1, AdmissionId: 1, Advice: 1, Age: 1, Albumin: 1, Anesthesia: 1, Aptt: 1, Axr: 1, BaEnema: 1, BaMealFollowThrough: 1, BedNumber: 1, BloodCulture: 1, BloodGroup: 1, Bt: 1, Calcium: 1, Cbc: 1, Cl: 1, Creatinine: 1, Crp: 1, Ct: 1, CtScan: 1, Cxr: 1, Date: 1, Diagnosis: 1, Diagram: 1, DischargeId: 1, DoaseId: 1, DurationId: 1, Findings: 1, FurtherPlan: 1, HCO3: 1, Histopathology: 1, HospitalRegNo: 1, Incision: 1, Indication: 1, Instructions: 1, Ivu: 1, K: 1, Mcu: 1, Meal: 1, MedicineId: 1, Mri: 1, Na: 1, Name: 1, OperationDate: 1, OperationId: 1, OperationName: 1, OptionToAddHematology: 1, OptionToAddImaging: 1, PinNumber: 1, Position: 1, Procedures: 1, ProthrombinTime: 1, Rgu: 1, Sex: 1, SexId: 1, SpecialNote: 1, Sugar: 1, TreatmentContinues: 1, UnitId: 1, UnitNumber: 1, UnitRegNo: 1, Urea: 1, Usg: 1, Weight: 1, XrayKub: 1 }, District: { DistrictId: 1, DistrictName: 1 }, Doase: { DoaseName: 1, Id: 1 }, Duration: { DurationName: 1, Id: 1 }, FamilyHistory: { FamilyHistory: 1, FamilyHistoryId: 1, Note: 1 }, FollowUp: { AddtoComplaint: 1, AddtoDiagnosis: 1, AdmissionDate: 1, AdmissionId: 1, Advice: 1, Age: 1, BedNumber: 1, BloodGroup: 1, ChiefComplaint: 1, ChiefComplaintId: 1, Date: 1, Diagnosis: 1, DiagnosisId: 1, DiagnosisName: 1, Doctor: 1, Exam: 1, FollowUpId: 1, HospitalRegNo: 1, Note: 1, PComplaints: 1, PatientName: 1, PinNumber: 1, Plan: 1, Sex: 1, SexId: 1, UnitId: 1, UnitNumber: 1, UnitRegNo: 1, Weight: 1 }, FurtherPlan: { FurtherPlanId: 1, FurtherPlanName: 1 }, Histopathology: { HistopathologyId: 1, HistopathologyName: 1 }, IllNess: { IllnessId: 1, IllnessName: 1 }, IllnessHistory: { AdmissionId: 1, IllnessHistoryId: 1, IllnessId: 1 }, Images: { AdmissionDate: 1, AdmissionId: 1, Age: 1, BedNumber: 1, BloodGroup: 1, EntryDate: 1, HospitalRegNo: 1, Image: 1, ImageId: 1, PatientName: 1, PinNumber: 1, Sex: 1, SexId: 1, UnitId: 1, UnitNumber: 1, UnitRegNo: 1, Weight: 1 }, Immunization: { ImmunizationId: 1, ImmunizationName: 1 }, ImmunizationHistory: { AdmissionId: 1, ImmunizationHistoryId: 1, ImmunizationId: 1 }, Incision: { IncisionId: 1, IncisionName: 1 }, Indication: { IndicationId: 1, IndicationName: 1 }, Instructions: { InstructionsId: 1, InstructionsName: 1 }, Investigation: { AdmissionDate: 1, AdmissionId: 1, Age: 1, Albumin: 1, Aptt: 1, Axr: 1, BaEnema: 1, BaMealFollowThrough: 1, BedNumber: 1, BloodCulture: 1, BloodGroup: 1, Bt: 1, Calcium: 1, Cbc: 1, Cl: 1, Creatinine: 1, Crp: 1, Ct: 1, CtScan: 1, Cxr: 1, EntryDate: 1, HCO3: 1, HospitalRegNo: 1, InvestigationId: 1, Ivu: 1, K: 1, Mcu: 1, Mri: 1, Na: 1, Name: 1, OptionToAddHematology: 1, OptionToAddImaging: 1, OtherLab: 1, Pathology: 1, PinNumber: 1, ProthrombinTime: 1, Rgu: 1, Sex: 1, SexId: 1, Sugar: 1, UnitId: 1, UnitNumber: 1, UnitRegNo: 1, Urea: 1, Usg: 1, Weight: 1, XrayKub: 1 }, MajorSurgery: { MajorSurgeryId: 1, MajorSurgeryName: 1 }, Meals: { MealId: 1, MealName: 1 }, Medicine: { MedicineId: 1, MedicineName: 1 }, Natal: { NatalId: 1, NatalName: 1 }, NatalHistory: { AdmissionId: 1, NatalId: 1, PbNatalHistoryId: 1 }, Note: { AddtoNote: 1, AdmissionDate: 1, AdmissionId: 1, Age: 1, BedNumber: 1, BloodGroup: 1, Doctor: 1, EntryDate: 1, FinalDiagnosis: 1, HospitalRegNo: 1, Name: 1, Note: 1, NoteId: 1, PNoteId: 1, PinNumber: 1, Sex: 1, SexId: 1, UnitId: 1, UnitNumber: 1, UnitRegNo: 1, Weight: 1 }, Oedema: { Oedema: 1, OedemaId: 1 }, Opd: { Address: 1, Advice: 1, Age: 1, BodyWt: 1, Date: 1, DiagnosisDetails: 1, DistrictId: 1, DistrictName: 1, Doctor: 1, Examination: 1, History: 1, House: 1, Investigation: 1, Mobile: 1, Name: 1, OpdId: 1, PatientType: 1, PinNo: 1, PostOffice: 1, RegNo: 1, Remarks: 1, Sex: 1, SexId: 1, UniNo: 1, UnitId: 1, UpazilaId: 1, UpazilaName: 1 }, OpdWithDiagnosisDetails: { Diagnosis: 1, DiagnosisId: 1, Id: 1, OpdId: 1 }, Operation: { Findings: 1, OperationId: 1, OperationName: 1, Procedures: 1 }, OperationNote: { AddtoAnesthesia: 1, AddtoAnesthetist: 1, AddtoAssistantSurgeon: 1, AddtoDiagnosis: 1, AddtoFurtherPlan: 1, AddtoHistopathology: 1, AddtoIncision: 1, AddtoIndication: 1, AddtoInstructions: 1, AddtoOtAttendant: 1, AddtoOtSister: 1, AddtoPosition: 1, AddtoSpecialNote: 1, AddtoSurgeon: 1, AdmissionDate: 1, AdmissionId: 1, Age: 1, Anesthesia: 1, AnesthesiaId: 1, AnesthesiaName: 1, Anesthetist: 1, AnesthetistId: 1, AssistantSurgeon: 1, AssistantSurgeonId: 1, BedNumber: 1, BloodGroup: 1, Date: 1, Diagnosis: 1, DiagnosisId: 1, DiagnosisName: 1, Diagram: 1, Doctor: 1, EndTime: 1, Findings: 1, FurtherPlan: 1, FurtherPlanId: 1, Histopathology: 1, HistopathologyId: 1, HospitalRegNo: 1, Id: 1, Incision: 1, IncisionId: 1, IncisionName: 1, Indication: 1, IndicationId: 1, IndicationName: 1, Instructions: 1, InstructionsId: 1, IsView: 1, OperationId: 1, OperationName: 1, OtAttendant: 1, OtAttendantId: 1, OtSister: 1, OtSisterId: 1, PatientName: 1, PhotoUrl: 1, PinNumber: 1, Position: 1, PositionId: 1, PositionName: 1, Procedures: 1, Sex: 1, SexId: 1, SpecialNote: 1, SpecialNoteId: 1, StartTime: 1, Surgeon: 1, SurgeonId: 1, Type: 1, UnitId: 1, UnitNumber: 1, UnitRegNo: 1, Weight: 1 }, OtAttendant: { OtAttendantId: 1, OtAttendantName: 1 }, OtSister: { OtSisterId: 1, OtSisterName: 1 }, OtherLab: { LabId: 1, Name: 1 }, OtherLabWithInvestigation: { Id: 1, InvestigationId: 1, OtherLabId: 1, OtherLabName: 1, Value: 1 }, Outcome: { AddtoOutCome: 1, AdmissionDate: 1, AdmissionId: 1, Age: 1, BedNumber: 1, BloodGroup: 1, Doctor: 1, EntryDate: 1, FinalDiagnosis: 1, HospitalRegNo: 1, Name: 1, OutcomeId: 1, OutcomeName: 1, OutcomeNoteId: 1, PinNumber: 1, Sex: 1, SexId: 1, UnitId: 1, UnitNumber: 1, UnitRegNo: 1, Weight: 1 }, OutcomeNote: { Outcome: 1, OutcomeNoteId: 1 }, PNote: { Id: 1, NoteName: 1 }, Pathology: { PathologyId: 1, PathologyName: 1 }, PathologyAndInvestigationDetails: { Id: 1, InvestigationId: 1, PathologyId: 1, PathologyName: 1, Value: 1 }, PatientBirthHistory: { AdmissionBedId: 1, AdmissionDate: 1, AdmissionDrugHistory: 1, AdmissionFamilyHistoryId: 1, AdmissionHistoryOfPresentIllness: 1, AdmissionHoPastIllness: 1, AdmissionId: 1, AdmissionImmunization: 1, AdmissionInsertDate: 1, AdmissionInsertUserId: 1, AdmissionPComplaintsId: 1, AdmissionTime: 1, AdmissionUpdateDate: 1, AdmissionUpdateUserId: 1, BirthHistory: 1, BirthHistoryId: 1, BirthHistoryNote: 1, PbHistoryId: 1 }, PatientType: { PatientType: 1, PatientTypeId: 1 }, Percussion: { PercussionId: 1, PercussionName: 1 }, PercussionHistory: { AdmissionId: 1, PercussionHistoryId: 1, PercussionId: 1 }, Position: { PositionId: 1, PositionName: 1 }, PostNatal: { PostNatalId: 1, PostNatalName: 1 }, PostNatalHistory: { AdmissionId: 1, PBPostNatalHistoryId: 1, PostNatalId: 1 }, PresentingComplaints: { Note: 1, PComplaints: 1, PComplaintsId: 1 }, RegularMedication: { RegularMedicationId: 1, RegularMedicationName: 1 }, Sex: { Note: 1, Sex: 1, SexId: 1 }, SpecialNote: { SpecialNoteId: 1, SpecialNoteName: 1 }, Surgeon: { SurgeonId: 1, SurgeonName: 1 }, Treatment: { AddtoArea: 1, AdmissionDate: 1, AdmissionId: 1, Age: 1, BedNumber: 1, BloodGroup: 1, DoaseId: 1, Doctor: 1, DurationId: 1, EntryDate: 1, HospitalRegNo: 1, MedicineId: 1, Name: 1, PinNumber: 1, Sex: 1, SexId: 1, Treatment: 1, TreatmentId: 1, UnitId: 1, UnitNumber: 1, UnitRegNo: 1, Weight: 1 }, Unit: { Note: 1, UnitId: 1, UnitNumber: 1 }, Upazila: { DistrictId: 1, DistrictName: 1, UpazilaId: 1, UpazilaName: 1 }, VocalResonance: { VocalResonanceId: 1, VocalResonanceName: 1 }, VocalResonanceHistory: { AdmissionId: 1, VocalResonanceHistoryId: 1, VocalResonanceId: 1 }, Ward: { Id: 1, WardNo: 1 } }, Northwind: { Category: { CategoryID: 1, CategoryName: 1, Description: 1, Picture: 1 }, CategoryLang: { CategoryId: 1, CategoryName: 1, Description: 1, Id: 1, LanguageId: 1 }, Customer: { Address: 1, City: 1, CompanyName: 1, ContactName: 1, ContactTitle: 1, Country: 1, CustomerID: 1, Email: 1, Fax: 1, ID: 1, LastContactDate: 1, LastContactedBy: 1, NoteList: 1, Phone: 1, PostalCode: 1, Region: 1, Representatives: 1, SendBulletin: 1 }, CustomerCustomerDemo: { CustomerAddress: 1, CustomerCity: 1, CustomerCompanyName: 1, CustomerContactName: 1, CustomerContactTitle: 1, CustomerCountry: 1, CustomerFax: 1, CustomerID: 1, CustomerPhone: 1, CustomerPostalCode: 1, CustomerRegion: 1, CustomerTypeCustomerDesc: 1, CustomerTypeID: 1, ID: 1 }, CustomerDemographic: { CustomerDesc: 1, CustomerTypeID: 1, ID: 1 }, CustomerDetails: { Email: 1, Id: 1, LastContactDate: 1, LastContactedBy: 1, LastContactedByAddress: 1, LastContactedByBirthDate: 1, LastContactedByCity: 1, LastContactedByCountry: 1, LastContactedByExtension: 1, LastContactedByFirstName: 1, LastContactedByHireDate: 1, LastContactedByHomePhone: 1, LastContactedByLastName: 1, LastContactedByNotes: 1, LastContactedByPhoto: 1, LastContactedByPhotoPath: 1, LastContactedByPostalCode: 1, LastContactedByRegion: 1, LastContactedByReportsTo: 1, LastContactedByTitle: 1, LastContactedByTitleOfCourtesy: 1, SendBulletin: 1 }, CustomerGrossSales: { ContactName: 1, CustomerId: 1, GrossAmount: 1, ProductId: 1, ProductName: 1 }, CustomerRepresentatives: { CustomerId: 1, EmployeeId: 1, RepresentativeId: 1 }, DragDropSample: { Id: 1, ParentId: 1, Title: 1 }, Employee: { Address: 1, BirthDate: 1, City: 1, Country: 1, EmployeeID: 1, Extension: 1, FirstName: 1, FullName: 1, Gender: 1, HireDate: 1, HomePhone: 1, LastName: 1, Notes: 1, Photo: 1, PhotoPath: 1, PostalCode: 1, Region: 1, ReportsTo: 1, ReportsToAddress: 1, ReportsToBirthDate: 1, ReportsToCity: 1, ReportsToCountry: 1, ReportsToExtension: 1, ReportsToFirstName: 1, ReportsToFullName: 1, ReportsToHireDate: 1, ReportsToHomePhone: 1, ReportsToLastName: 1, ReportsToNotes: 1, ReportsToPhoto: 1, ReportsToPhotoPath: 1, ReportsToPostalCode: 1, ReportsToRegion: 1, ReportsToReportsTo: 1, ReportsToTitle: 1, ReportsToTitleOfCourtesy: 1, Title: 1, TitleOfCourtesy: 1 }, EmployeeTerritory: { EmployeeAddress: 1, EmployeeBirthDate: 1, EmployeeCity: 1, EmployeeCountry: 1, EmployeeExtension: 1, EmployeeFirstName: 1, EmployeeHireDate: 1, EmployeeHomePhone: 1, EmployeeID: 1, EmployeeLastName: 1, EmployeeNotes: 1, EmployeePhoto: 1, EmployeePhotoPath: 1, EmployeePostalCode: 1, EmployeeRegion: 1, EmployeeReportsTo: 1, EmployeeTitle: 1, EmployeeTitleOfCourtesy: 1, TerritoryID: 1, TerritoryRegionID: 1, TerritoryTerritoryDescription: 1 }, Note: { EntityId: 1, EntityType: 1, InsertDate: 1, InsertUserDisplayName: 1, InsertUserId: 1, NoteId: 1, Text: 1 }, Order: { CustomerCity: 1, CustomerCompanyName: 1, CustomerContactName: 1, CustomerContactTitle: 1, CustomerCountry: 1, CustomerFax: 1, CustomerID: 1, CustomerPhone: 1, CustomerRegion: 1, DetailList: 1, EmployeeFullName: 1, EmployeeGender: 1, EmployeeID: 1, EmployeeReportsToFullName: 1, Freight: 1, OrderDate: 1, OrderID: 1, RequiredDate: 1, ShipAddress: 1, ShipCity: 1, ShipCountry: 1, ShipName: 1, ShipPostalCode: 1, ShipRegion: 1, ShipVia: 1, ShipViaCompanyName: 1, ShipViaPhone: 1, ShippedDate: 1, ShippingState: 1 }, OrderDetail: { DetailID: 1, Discount: 1, LineTotal: 1, OrderCustomerID: 1, OrderDate: 1, OrderEmployeeID: 1, OrderID: 1, OrderShipCity: 1, OrderShipCountry: 1, OrderShipVia: 1, OrderShippedDate: 1, ProductDiscontinued: 1, ProductID: 1, ProductName: 1, ProductQuantityPerUnit: 1, ProductSupplierID: 1, ProductUnitPrice: 1, Quantity: 1, UnitPrice: 1 }, Product: { CategoryDescription: 1, CategoryID: 1, CategoryName: 1, CategoryPicture: 1, Discontinued: 1, ProductID: 1, ProductImage: 1, ProductName: 1, QuantityPerUnit: 1, ReorderLevel: 1, SupplierAddress: 1, SupplierCity: 1, SupplierCompanyName: 1, SupplierContactName: 1, SupplierContactTitle: 1, SupplierCountry: 1, SupplierFax: 1, SupplierHomePage: 1, SupplierID: 1, SupplierPhone: 1, SupplierPostalCode: 1, SupplierRegion: 1, UnitPrice: 1, UnitsInStock: 1, UnitsOnOrder: 1 }, ProductLang: { Id: 1, LanguageId: 1, ProductId: 1, ProductName: 1 }, ProductLog: { CategoryID: 1, ChangingUserId: 1, Discontinued: 1, OperationType: 1, ProductID: 1, ProductImage: 1, ProductLogID: 1, ProductName: 1, QuantityPerUnit: 1, ReorderLevel: 1, SupplierID: 1, UnitPrice: 1, UnitsInStock: 1, UnitsOnOrder: 1, ValidFrom: 1, ValidUntil: 1 }, Region: { RegionDescription: 1, RegionID: 1 }, SalesByCategory: { CategoryId: 1, CategoryName: 1, ProductName: 1, ProductSales: 1 }, Shipper: { CompanyName: 1, Phone: 1, ShipperID: 1 }, Supplier: { Address: 1, City: 1, CompanyName: 1, ContactName: 1, ContactTitle: 1, Country: 1, Fax: 1, HomePage: 1, Phone: 1, PostalCode: 1, Region: 1, SupplierID: 1 }, Territory: { ID: 1, RegionDescription: 1, RegionID: 1, TerritoryDescription: 1, TerritoryID: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, FormTitle: 1, GoogleButton: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, Dashboard: { ContentDescription: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, NorthwindPhone: 1, NorthwindPhoneMultiple: 1, SavePrimaryKeyError: 1 } });
    })(Texts = CMCPS.Texts || (CMCPS.Texts = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = CMCPS.Administration || (CMCPS.Administration = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return ["LanguageName" /* LanguageName */];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = CMCPS.Administration || (CMCPS.Administration = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Administration;
    (function (Administration) {
        var RoleDialog = /** @class */ (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = CMCPS.Administration || (CMCPS.Administration = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Administration;
    (function (Administration) {
        var RoleGrid = /** @class */ (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return ["RoleName" /* RoleName */];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = CMCPS.Administration || (CMCPS.Administration = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = /** @class */ (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = CMCPS.Administration || (CMCPS.Administration = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = /** @class */ (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = CMCPS.Administration || (CMCPS.Administration = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Administration;
    (function (Administration) {
        var UserDialog = /** @class */ (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'fa-users text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = CMCPS.Administration || (CMCPS.Administration = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Administration;
    (function (Administration) {
        var UserGrid = /** @class */ (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return ["Username" /* Username */];
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = CMCPS.Administration || (CMCPS.Administration = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = CMCPS.Authorization || (CMCPS.Authorization = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = /** @class */ (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                            var row = value_1[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                            var k = value_2[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = CMCPS.Administration || (CMCPS.Administration = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = /** @class */ (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = CMCPS.Administration || (CMCPS.Administration = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = /** @class */ (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = CMCPS.Administration || (CMCPS.Administration = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = /** @class */ (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = CMCPS.Administration || (CMCPS.Administration = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        var ChartInDialog = /** @class */ (function (_super) {
            __extends(ChartInDialog, _super);
            function ChartInDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ChartInDialog_1 = ChartInDialog;
            ChartInDialog.initializePage = function () {
                $(function () {
                    $('#LaunchDialogButton').click(function (e) {
                        (new ChartInDialog_1()).dialogOpen();
                    });
                });
            };
            ChartInDialog.prototype.onDialogOpen = function () {
                var _this = this;
                _super.prototype.onDialogOpen.call(this);
                BasicSamples.BasicSamplesService.OrdersByShipper({}, function (response) {
                    _this.areaChart = new Morris.Area({
                        element: _this.idPrefix + 'Chart',
                        resize: true, parseTime: false,
                        data: response.Values,
                        xkey: 'Month',
                        ykeys: response.ShipperKeys, labels: response.ShipperLabels, hideHover: 'auto'
                    });
                });
            };
            ChartInDialog.prototype.arrange = function () {
                _super.prototype.arrange.call(this);
                this.areaChart && this.areaChart.redraw();
            };
            ChartInDialog.prototype.getTemplate = function () {
                // you could also put this in a ChartInDialog.Template.html file. it's here for simplicity.
                return "<div id='~_Chart'></div>";
            };
            ChartInDialog.prototype.getDialogOptions = function () {
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.title = 'Orders by Shipper';
                return opt;
            };
            var ChartInDialog_1;
            ChartInDialog = ChartInDialog_1 = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.resizable(),
                Serenity.Decorators.maximizable()
            ], ChartInDialog);
            return ChartInDialog;
        }(Serenity.TemplatedDialog));
        BasicSamples.ChartInDialog = ChartInDialog;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var ProductDialog = /** @class */ (function (_super) {
            __extends(ProductDialog, _super);
            function ProductDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.ProductForm(_this.idPrefix);
                return _this;
            }
            ProductDialog.prototype.getFormKey = function () { return Northwind.ProductForm.formKey; };
            ProductDialog.prototype.getIdProperty = function () { return Northwind.ProductRow.idProperty; };
            ProductDialog.prototype.getLocalTextPrefix = function () { return Northwind.ProductRow.localTextPrefix; };
            ProductDialog.prototype.getNameProperty = function () { return Northwind.ProductRow.nameProperty; };
            ProductDialog.prototype.getService = function () { return Northwind.ProductService.baseUrl; };
            ProductDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.maximizable()
            ], ProductDialog);
            return ProductDialog;
        }(Serenity.EntityDialog));
        Northwind.ProductDialog = ProductDialog;
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
/// <reference path="../../../Northwind/Product/ProductDialog.ts" />
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        var CloneableEntityDialog = /** @class */ (function (_super) {
            __extends(CloneableEntityDialog, _super);
            function CloneableEntityDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CloneableEntityDialog.prototype.updateInterface = function () {
                // by default cloneButton is hidden in base UpdateInterface method
                _super.prototype.updateInterface.call(this);
                // here we show it if it is edit mode (not new)
                this.cloneButton.toggle(this.isEditMode());
            };
            /**
             * Overriding this method is optional to customize cloned entity
             */
            CloneableEntityDialog.prototype.getCloningEntity = function () {
                var clone = _super.prototype.getCloningEntity.call(this);
                // add (Clone) suffix if it's not already added
                var suffix = ' (Clone)';
                if (!Q.endsWith(clone.ProductName || '', suffix)) {
                    clone.ProductName = (clone.ProductName || '') + suffix;
                }
                // it's better to clear image for this sample
                // otherwise we would have to create a temporary copy of it
                // and upload
                clone.ProductImage = null;
                // let's clear fields not logical to be cloned
                clone.UnitsInStock = 0;
                clone.UnitsOnOrder = 0;
                return clone;
            };
            CloneableEntityDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.maximizable()
            ], CloneableEntityDialog);
            return CloneableEntityDialog;
        }(CMCPS.Northwind.ProductDialog));
        BasicSamples.CloneableEntityDialog = CloneableEntityDialog;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var ProductGrid = /** @class */ (function (_super) {
            __extends(ProductGrid, _super);
            function ProductGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.pendingChanges = {};
                _this.slickContainer.on('change', '.edit:input', function (e) { return _this.inputsChange(e); });
                return _this;
            }
            ProductGrid.prototype.getColumnsKey = function () { return "Northwind.Product"; };
            ProductGrid.prototype.getDialogType = function () { return Northwind.ProductDialog; };
            ProductGrid.prototype.getIdProperty = function () { return Northwind.ProductRow.idProperty; };
            ProductGrid.prototype.getLocalTextPrefix = function () { return Northwind.ProductRow.localTextPrefix; };
            ProductGrid.prototype.getService = function () { return Northwind.ProductService.baseUrl; };
            ProductGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(CMCPS.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: Northwind.ProductService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(CMCPS.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    reportTitle: 'Product List',
                    columnTitles: {
                        'Discontinued': 'Dis.',
                    },
                    tableOptions: {
                        columnStyles: {
                            ProductID: {
                                columnWidth: 25,
                                halign: 'right'
                            },
                            Discountinued: {
                                columnWidth: 25
                            }
                        }
                    }
                }));
                buttons.push({
                    title: 'Save Changes',
                    cssClass: 'apply-changes-button disabled',
                    onClick: function (e) { return _this.saveClick(); },
                    separator: true
                });
                return buttons;
            };
            ProductGrid.prototype.onViewProcessData = function (response) {
                this.pendingChanges = {};
                this.setSaveButtonState();
                return _super.prototype.onViewProcessData.call(this, response);
            };
            // PLEASE NOTE! Inline editing in grids is not something Serenity supports nor recommends.
            // SlickGrid has some set of limitations, UI is very hard to use on some devices like mobile, 
            // custom widgets and validations are not possible, and as a bonus the code can become a mess.
            // 
            // This was just a sample how-to after much requests, and is not supported. 
            // This is all we can offer, please don't ask us to Guide you...
            /**
             * It would be nice if we could use autonumeric, Serenity editors etc. here, to control input validation,
             * but it's not supported by SlickGrid as we are only allowed to return a string, and should attach
             * no event handlers to rendered cell contents
             */
            ProductGrid.prototype.numericInputFormatter = function (ctx) {
                var klass = 'edit numeric';
                var item = ctx.item;
                var pending = this.pendingChanges[item.ProductID];
                if (pending && pending[ctx.column.field] !== undefined) {
                    klass += ' dirty';
                }
                var value = this.getEffectiveValue(item, ctx.column.field);
                return "<input type='text' class='" + klass +
                    "' data-field='" + ctx.column.field +
                    "' value='" + Q.formatNumber(value, '0.##') + "'/>";
            };
            ProductGrid.prototype.stringInputFormatter = function (ctx) {
                var klass = 'edit string';
                var item = ctx.item;
                var pending = this.pendingChanges[item.ProductID];
                var column = ctx.column;
                if (pending && pending[column.field] !== undefined) {
                    klass += ' dirty';
                }
                var value = this.getEffectiveValue(item, column.field);
                return "<input type='text' class='" + klass +
                    "' data-field='" + column.field +
                    "' value='" + Q.attrEncode(value) +
                    "' maxlength='" + column.sourceItem.maxLength + "'/>";
            };
            /**
             * Sorry but you cannot use LookupEditor, e.g. Select2 here, only possible is a SELECT element
             */
            ProductGrid.prototype.selectFormatter = function (ctx, idField, lookup) {
                var klass = 'edit';
                var item = ctx.item;
                var pending = this.pendingChanges[item.ProductID];
                var column = ctx.column;
                if (pending && pending[idField] !== undefined) {
                    klass += ' dirty';
                }
                var value = this.getEffectiveValue(item, idField);
                var markup = "<select class='" + klass +
                    "' data-field='" + idField +
                    "' style='width: 100%; max-width: 100%'>";
                for (var _i = 0, _a = lookup.items; _i < _a.length; _i++) {
                    var c = _a[_i];
                    var id = c[lookup.idField];
                    markup += "<option value='" + Q.attrEncode(id) + "'";
                    if (id == value) {
                        markup += " selected";
                    }
                    markup += ">" + Q.htmlEncode(c[lookup.textField]) + "</option>";
                }
                return markup + "</select>";
            };
            ProductGrid.prototype.getEffectiveValue = function (item, field) {
                var pending = this.pendingChanges[item.ProductID];
                if (pending && pending[field] !== undefined) {
                    return pending[field];
                }
                return item[field];
            };
            ProductGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                var num = function (ctx) { return _this.numericInputFormatter(ctx); };
                var str = function (ctx) { return _this.stringInputFormatter(ctx); };
                Q.first(columns, function (x) { return x.field === 'QuantityPerUnit'; }).format = str;
                var category = Q.first(columns, function (x) { return x.field === "CategoryName" /* CategoryName */; });
                category.referencedFields = ["CategoryID" /* CategoryID */];
                category.format = function (ctx) { return _this.selectFormatter(ctx, "CategoryID" /* CategoryID */, Northwind.CategoryRow.getLookup()); };
                var supplier = Q.first(columns, function (x) { return x.field === "SupplierCompanyName" /* SupplierCompanyName */; });
                supplier.referencedFields = ["SupplierID" /* SupplierID */];
                supplier.format = function (ctx) { return _this.selectFormatter(ctx, "SupplierID" /* SupplierID */, Northwind.SupplierRow.getLookup()); };
                Q.first(columns, function (x) { return x.field === "UnitPrice" /* UnitPrice */; }).format = num;
                Q.first(columns, function (x) { return x.field === "UnitsInStock" /* UnitsInStock */; }).format = num;
                Q.first(columns, function (x) { return x.field === "UnitsOnOrder" /* UnitsOnOrder */; }).format = num;
                Q.first(columns, function (x) { return x.field === "ReorderLevel" /* ReorderLevel */; }).format = num;
                return columns;
            };
            ProductGrid.prototype.inputsChange = function (e) {
                var cell = this.slickGrid.getCellFromEvent(e);
                var item = this.itemAt(cell.row);
                var input = $(e.target);
                var field = input.data('field');
                var text = Q.coalesce(Q.trimToNull(input.val()), '0');
                var pending = this.pendingChanges[item.ProductID];
                var effective = this.getEffectiveValue(item, field);
                var oldText;
                if (input.hasClass("numeric"))
                    oldText = Q.formatNumber(effective, '0.##');
                else
                    oldText = effective;
                var value;
                if (field === 'UnitPrice') {
                    value = Q.parseDecimal(text);
                    if (value == null || isNaN(value)) {
                        Q.notifyError(Q.text('Validation.Decimal'), '', null);
                        input.val(oldText);
                        input.focus();
                        return;
                    }
                }
                else if (input.hasClass("numeric")) {
                    var i = Q.parseInteger(text);
                    if (isNaN(i) || i > 32767 || i < 0) {
                        Q.notifyError(Q.text('Validation.Integer'), '', null);
                        input.val(oldText);
                        input.focus();
                        return;
                    }
                    value = i;
                }
                else
                    value = text;
                if (!pending) {
                    this.pendingChanges[item.ProductID] = pending = {};
                }
                pending[field] = value;
                item[field] = value;
                this.view.refresh();
                if (input.hasClass("numeric"))
                    value = Q.formatNumber(value, '0.##');
                input.val(value).addClass('dirty');
                this.setSaveButtonState();
            };
            ProductGrid.prototype.setSaveButtonState = function () {
                this.toolbar.findButton('apply-changes-button').toggleClass('disabled', Object.keys(this.pendingChanges).length === 0);
            };
            ProductGrid.prototype.saveClick = function () {
                if (Object.keys(this.pendingChanges).length === 0) {
                    return;
                }
                // this calls save service for all modified rows, one by one
                // you could write a batch update service
                var keys = Object.keys(this.pendingChanges);
                var current = -1;
                var self = this;
                (function saveNext() {
                    if (++current >= keys.length) {
                        self.refresh();
                        return;
                    }
                    var key = keys[current];
                    var entity = Q.deepClone(self.pendingChanges[key]);
                    entity.ProductID = key;
                    Q.serviceRequest('Northwind/Product/Update', {
                        EntityId: key,
                        Entity: entity
                    }, function (response) {
                        delete self.pendingChanges[key];
                        saveNext();
                    });
                })();
            };
            ProductGrid.prototype.getQuickFilters = function () {
                var flt = _super.prototype.getQuickFilters.call(this);
                var q = Q.parseQueryString();
                if (q["cat"]) {
                    var category = Q.tryFirst(flt, function (x) { return x.field == "CategoryID"; });
                    category.init = function (e) {
                        e.element.getWidget(Serenity.LookupEditor).value = q["cat"];
                    };
                }
                return flt;
            };
            ProductGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], ProductGrid);
            return ProductGrid;
        }(Serenity.EntityGrid));
        Northwind.ProductGrid = ProductGrid;
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
/// <reference path="../../../Northwind/Product/ProductGrid.ts" />
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of ProductGrid to override dialog type to CloneableEntityDialog
         */
        var CloneableEntityGrid = /** @class */ (function (_super) {
            __extends(CloneableEntityGrid, _super);
            function CloneableEntityGrid(container) {
                return _super.call(this, container) || this;
            }
            CloneableEntityGrid.prototype.getDialogType = function () { return BasicSamples.CloneableEntityDialog; };
            CloneableEntityGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CloneableEntityGrid);
            return CloneableEntityGrid;
        }(CMCPS.Northwind.ProductGrid));
        BasicSamples.CloneableEntityGrid = CloneableEntityGrid;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var OrderGrid = /** @class */ (function (_super) {
            __extends(OrderGrid, _super);
            function OrderGrid(container) {
                return _super.call(this, container) || this;
            }
            OrderGrid.prototype.getColumnsKey = function () { return "Northwind.Order"; };
            OrderGrid.prototype.getDialogType = function () { return Northwind.OrderDialog; };
            OrderGrid.prototype.getIdProperty = function () { return Northwind.OrderRow.idProperty; };
            OrderGrid.prototype.getLocalTextPrefix = function () { return Northwind.OrderRow.localTextPrefix; };
            OrderGrid.prototype.getService = function () { return Northwind.OrderService.baseUrl; };
            OrderGrid.prototype.getQuickFilters = function () {
                var _this = this;
                var filters = _super.prototype.getQuickFilters.call(this);
                filters.push({
                    type: Serenity.LookupEditor,
                    options: {
                        lookupKey: Northwind.ProductRow.lookupKey
                    },
                    field: 'ProductID',
                    title: 'Contains Product in Details',
                    handler: function (w) {
                        _this.view.params.ProductID = Q.toId(w.value);
                    },
                    cssClass: 'hidden-xs'
                });
                return filters;
            };
            OrderGrid.prototype.createQuickFilters = function () {
                _super.prototype.createQuickFilters.call(this);
                this.shippingStateFilter = this.findQuickFilter(Serenity.EnumEditor, "ShippingState" /* ShippingState */);
            };
            OrderGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(CMCPS.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: Northwind.OrderService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(CMCPS.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            OrderGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(1, 0, {
                    field: 'Print Invoice',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action print-invoice" title="invoice">' +
                        '<i class="fa fa-file-pdf-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return columns;
            };
            OrderGrid.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('print-invoice')) {
                        CMCPS.Common.ReportHelper.execute({
                            reportKey: 'Northwind.OrderDetail',
                            params: {
                                OrderID: item.OrderID
                            }
                        });
                    }
                }
            };
            OrderGrid.prototype.set_shippingState = function (value) {
                this.shippingStateFilter.value = value == null ? '' : value.toString();
            };
            OrderGrid.prototype.addButtonClick = function () {
                var eq = this.view.params.EqualityFilter;
                this.editItem({
                    CustomerID: eq ? eq.CustomerID : null
                });
            };
            OrderGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], OrderGrid);
            return OrderGrid;
        }(Serenity.EntityGrid));
        Northwind.OrderGrid = OrderGrid;
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        var DefaultValuesInNewGrid = /** @class */ (function (_super) {
            __extends(DefaultValuesInNewGrid, _super);
            function DefaultValuesInNewGrid(container) {
                return _super.call(this, container) || this;
            }
            /**
             * This method is called when New Item button is clicked.
             * By default, it calls EditItem with an empty entity.
             * This is a good place to fill in default values for New Item button.
             */
            DefaultValuesInNewGrid.prototype.addButtonClick = function () {
                this.editItem({
                    CustomerID: 'ANTON',
                    RequiredDate: Q.formatDate(new Date(), 'yyyy-MM-dd'),
                    EmployeeID: CMCPS.Northwind.EmployeeRow.getLookup().items
                        .filter(function (x) { return x.FullName === 'Robert King'; })[0].EmployeeID,
                    ShipVia: CMCPS.Northwind.ShipperRow.getLookup().items
                        .filter(function (x) { return x.CompanyName === 'Speedy Express'; })[0].ShipperID
                });
            };
            DefaultValuesInNewGrid.prototype.getButtons = function () {
                var _this = this;
                // preserving default New Item button
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push({
                    title: 'Add Order from the Queen',
                    cssClass: 'add-button',
                    onClick: function () {
                        // using EditItem method as a shortcut to create a new Order dialog,
                        // bind to its events, load our order row, and open dialog
                        _this.editItem({
                            CustomerID: 'QUEEN',
                            EmployeeID: CMCPS.Northwind.EmployeeRow.getLookup().items
                                .filter(function (x) { return x.FullName === 'Nancy Davolio'; })[0].EmployeeID,
                            ShipVia: CMCPS.Northwind.ShipperRow.getLookup().items
                                .filter(function (x) { return x.CompanyName === 'United Package'; })[0].ShipperID
                        });
                    }
                });
                buttons.push({
                    title: 'Add Order with 5 Chai by Laura', cssClass: 'add-note-button',
                    onClick: function () {
                        // we could use EditItem here too, but for demonstration
                        // purposes we are manually creating dialog this time
                        var dlg = new CMCPS.Northwind.OrderDialog();
                        // let grid watch for changes to manually created dialog, 
                        // so when a new item is saved, grid can refresh itself
                        _this.initDialog(dlg);
                        // get a reference to product Chai
                        var chai = CMCPS.Northwind.ProductRow.getLookup().items
                            .filter(function (x) { return x.ProductName === 'Chai'; })[0];
                        // LoadEntityAndOpenDialog, loads an OrderRow 
                        // to dialog and opens it
                        var lauraCallahanID = CMCPS.Northwind.EmployeeRow.getLookup().items
                            .filter(function (x) { return x.FullName === 'Laura Callahan'; })[0].EmployeeID;
                        dlg.loadEntityAndOpenDialog({
                            CustomerID: 'GOURL',
                            EmployeeID: lauraCallahanID,
                            DetailList: [{
                                    ProductID: chai.ProductID,
                                    ProductName: chai.ProductName,
                                    UnitPrice: chai.UnitPrice,
                                    Quantity: 5,
                                    LineTotal: chai.UnitPrice * 5
                                }]
                        });
                    }
                });
                return buttons;
            };
            DefaultValuesInNewGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DefaultValuesInNewGrid);
            return DefaultValuesInNewGrid;
        }(CMCPS.Northwind.OrderGrid));
        BasicSamples.DefaultValuesInNewGrid = DefaultValuesInNewGrid;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        var DialogBoxes;
        (function (DialogBoxes) {
            function initializePage() {
                confirmDialogButtons();
                confirmWithCustomTitle();
                information();
                warning();
                alert();
                alertWithHtmlContent();
            }
            DialogBoxes.initializePage = initializePage;
            function confirmDialogButtons() {
                // here we demonstrate how you can detect which button user has clicked
                // second parameter is Yes handler and it is called only when user clicks Yes.
                // third parameter has some additional options, that you should only use when needed
                $('#ConfirmDialogButtons').click(function () {
                    Q.confirm("Click one of buttons, or close dialog with [x] on top right, i'll tell you what you did!", function () {
                        Q.notifySuccess("You clicked YES. Great!");
                    }, {
                        onNo: function () {
                            Q.notifyInfo("You clicked NO. Why?");
                        },
                        onCancel: function () {
                            Q.notifyError("You clicked X. Operation is cancelled. Will try again?");
                        }
                    });
                });
            }
            function confirmWithCustomTitle() {
                $('#ConfirmWithCustomTitle').click(function () {
                    Q.confirm("This confirmation has a custom title", function () {
                        Q.notifySuccess("Allright!");
                    }, {
                        title: 'Some Custom Confirmation Title'
                    });
                });
            }
            function information() {
                $('#Information').click(function () {
                    Q.information("What a nice day", function () {
                        Q.notifySuccess("No problem!");
                    });
                });
            }
            function warning() {
                $('#Warning').click(function () {
                    Q.warning("Hey, be careful!");
                });
            }
            function alert() {
                $('#Alert').click(function () {
                    Q.alert("Houston, we got a problem!");
                });
            }
            function alertWithHtmlContent() {
                $('#AlertWithHtmlContent').click(function () {
                    Q.alert("<h4>Here is some HTML content!</h4>" +
                        "<ul><li>Item 1</li><li>Item 2</li >" +
                        "<li>Visit <a href='http://serenity.is/' target='_blank' style='color: #ddf'>http://serenity.is/</a>!</li></ul>", {
                        htmlEncode: false
                    });
                });
            }
        })(DialogBoxes = BasicSamples.DialogBoxes || (BasicSamples.DialogBoxes = {}));
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var OrderDialog = /** @class */ (function (_super) {
            __extends(OrderDialog, _super);
            function OrderDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Northwind.OrderForm(_this.idPrefix);
                return _this;
            }
            OrderDialog.prototype.getFormKey = function () { return Northwind.OrderForm.formKey; };
            OrderDialog.prototype.getIdProperty = function () { return Northwind.OrderRow.idProperty; };
            OrderDialog.prototype.getLocalTextPrefix = function () { return Northwind.OrderRow.localTextPrefix; };
            OrderDialog.prototype.getNameProperty = function () { return Northwind.OrderRow.nameProperty; };
            OrderDialog.prototype.getService = function () { return Northwind.OrderService.baseUrl; };
            OrderDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push(CMCPS.Common.ReportHelper.createToolButton({
                    title: 'Invoice',
                    cssClass: 'export-pdf-button',
                    reportKey: 'Northwind.OrderDetail',
                    getParams: function () { return ({
                        OrderID: _this.get_entityId()
                    }); }
                }));
                return buttons;
            };
            OrderDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('export-pdf-button').toggle(this.isEditMode());
            };
            OrderDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], OrderDialog);
            return OrderDialog;
        }(Serenity.EntityDialog));
        Northwind.OrderDialog = OrderDialog;
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
/// <reference path="../../../Northwind/Order/OrderDialog.ts" />
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * A version of order dialog converted to a panel by adding Serenity.Decorators.panel decorator.
         */
        var EntityDialogAsPanel = /** @class */ (function (_super) {
            __extends(EntityDialogAsPanel, _super);
            function EntityDialogAsPanel() {
                return _super.call(this) || this;
            }
            EntityDialogAsPanel.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.deleteButton.hide();
                this.applyChangesButton.hide();
            };
            EntityDialogAsPanel.prototype.onSaveSuccess = function (response) {
                this.showSaveSuccessMessage(response);
            };
            EntityDialogAsPanel = __decorate([
                Serenity.Decorators.panel()
            ], EntityDialogAsPanel);
            return EntityDialogAsPanel;
        }(CMCPS.Northwind.OrderDialog));
        BasicSamples.EntityDialogAsPanel = EntityDialogAsPanel;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var CategoryDialog = /** @class */ (function (_super) {
            __extends(CategoryDialog, _super);
            function CategoryDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.CategoryForm(_this.idPrefix);
                return _this;
            }
            CategoryDialog.prototype.getFormKey = function () { return Northwind.CategoryForm.formKey; };
            CategoryDialog.prototype.getIdProperty = function () { return Northwind.CategoryRow.idProperty; };
            CategoryDialog.prototype.getLocalTextPrefix = function () { return Northwind.CategoryRow.localTextPrefix; };
            CategoryDialog.prototype.getNameProperty = function () { return Northwind.CategoryRow.nameProperty; };
            CategoryDialog.prototype.getService = function () { return Northwind.CategoryService.baseUrl; };
            CategoryDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoryDialog);
            return CategoryDialog;
        }(Serenity.EntityDialog));
        Northwind.CategoryDialog = CategoryDialog;
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
/// <reference path="../../../Northwind/Category/CategoryDialog.ts" />
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        var GetInsertedRecordIdDialog = /** @class */ (function (_super) {
            __extends(GetInsertedRecordIdDialog, _super);
            function GetInsertedRecordIdDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
             * This method is called after the save request to service
             * is completed succesfully. This can be an insert or update.
             *
             * @param response Response that is returned from server
             */
            GetInsertedRecordIdDialog.prototype.onSaveSuccess = function (response) {
                // check that this is an insert
                if (this.isNew()) {
                    Q.notifySuccess("Just inserted a category with ID: " + response.EntityId);
                    // you could also open a new dialog
                    // new Northwind.CategoryDialog().loadByIdAndOpenDialog(response.EntityId);
                    // but let's better load inserted record using Retrieve service
                    CMCPS.Northwind.CategoryService.Retrieve({
                        EntityId: response.EntityId
                    }, function (resp) {
                        Q.notifyInfo("Looks like the category you added has name: " + resp.Entity.CategoryName);
                    });
                }
            };
            GetInsertedRecordIdDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GetInsertedRecordIdDialog);
            return GetInsertedRecordIdDialog;
        }(CMCPS.Northwind.CategoryDialog));
        BasicSamples.GetInsertedRecordIdDialog = GetInsertedRecordIdDialog;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var CategoryGrid = /** @class */ (function (_super) {
            __extends(CategoryGrid, _super);
            function CategoryGrid(container) {
                return _super.call(this, container) || this;
            }
            CategoryGrid.prototype.getColumnsKey = function () { return "Northwind.Category"; };
            CategoryGrid.prototype.getDialogType = function () { return Northwind.CategoryDialog; };
            CategoryGrid.prototype.getIdProperty = function () { return Northwind.CategoryRow.idProperty; };
            CategoryGrid.prototype.getLocalTextPrefix = function () { return Northwind.CategoryRow.localTextPrefix; };
            CategoryGrid.prototype.getService = function () { return Northwind.CategoryService.baseUrl; };
            CategoryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoryGrid);
            return CategoryGrid;
        }(Serenity.EntityGrid));
        Northwind.CategoryGrid = CategoryGrid;
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
/// <reference path="../../../Northwind/Category/CategoryGrid.ts" />
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of CategoryGrid to override dialog type to GetInsertedRecordIdDialog
         */
        var GetInsertedRecordIdGrid = /** @class */ (function (_super) {
            __extends(GetInsertedRecordIdGrid, _super);
            function GetInsertedRecordIdGrid(container) {
                return _super.call(this, container) || this;
            }
            GetInsertedRecordIdGrid.prototype.getDialogType = function () { return BasicSamples.GetInsertedRecordIdDialog; };
            GetInsertedRecordIdGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], GetInsertedRecordIdGrid);
            return GetInsertedRecordIdGrid;
        }(CMCPS.Northwind.CategoryGrid));
        BasicSamples.GetInsertedRecordIdGrid = GetInsertedRecordIdGrid;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
/// <reference path="../../../Northwind/Order/OrderDialog.ts" />
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Our custom order dialog subclass that will have a tab to display and edit selected customer details.
         */
        var OtherFormInTabDialog = /** @class */ (function (_super) {
            __extends(OtherFormInTabDialog, _super);
            function OtherFormInTabDialog() {
                var _this = _super.call(this) || this;
                // entity dialogs by default creates a property grid on element with ID "PropertyGrid".
                // here we explicitly create another, the customer property grid (vertical form) on element with ID "CustomerPropertyGrid".
                _this.customerPropertyGrid = new Serenity.PropertyGrid(_this.byId("CustomerPropertyGrid"), {
                    idPrefix: _this.idPrefix + "_Customer_",
                    items: Q.getForm(CMCPS.Northwind.CustomerForm.formKey).filter(function (x) { return x.name != 'CustomerID'; }),
                    useCategories: true
                });
                // this is just a helper to access editors if needed
                _this.customerForm = new CMCPS.Northwind.CustomerForm(_this.customerPropertyGrid.idPrefix);
                // initialize validator for customer form
                _this.customerValidator = _this.byId("CustomerForm").validate(Q.validateOptions({}));
                var selfChange = 0;
                // creating another toolbar for customer tab that will only save Customer
                new Serenity.Toolbar(_this.byId("CustomerToolbar"), {
                    buttons: [{
                            cssClass: "apply-changes-button",
                            title: Q.text("Controls.EntityDialog.SaveButton"),
                            onClick: function () {
                                var id = _this.getCustomerID();
                                if (!id)
                                    return;
                                if (!_this.customerValidator.form())
                                    return;
                                // prepare an empty entity to serialize customer details into
                                var c = {};
                                _this.customerPropertyGrid.save(c);
                                CMCPS.Northwind.CustomerService.Update({
                                    EntityId: id,
                                    Entity: c
                                }, function (response) {
                                    // reload customer list just in case
                                    Q.reloadLookup(CMCPS.Northwind.CustomerRow.lookupKey);
                                    // set flag that we are triggering customer select change event
                                    // otherwise active tab will change to first one
                                    selfChange++;
                                    try {
                                        // trigger change so that customer select updates its text
                                        // in case if Company Name is changed
                                        _this.form.CustomerID.element.change();
                                    }
                                    finally {
                                        selfChange--;
                                    }
                                    Q.notifySuccess("Saved customer details");
                                });
                            }
                        }]
                });
                _this.form.CustomerID.change(function (e) {
                    if (selfChange)
                        return;
                    var customerID = _this.getCustomerID();
                    Serenity.TabsExtensions.setDisabled(_this.tabs, 'Customer', !customerID);
                    if (!customerID) {
                        // no customer is selected, just load an empty entity
                        _this.customerPropertyGrid.load({});
                        return;
                    }
                    // load selected customer into customer form by calling CustomerService
                    CMCPS.Northwind.CustomerService.Retrieve({
                        EntityId: customerID
                    }, function (response) {
                        _this.customerPropertyGrid.load(response.Entity);
                    });
                });
                return _this;
            }
            OtherFormInTabDialog.prototype.getCustomerID = function () {
                var customerID = this.form.CustomerID.value;
                if (Q.isEmptyOrNull(customerID))
                    return null;
                // unfortunately, CustomerID (a string) used in this form and 
                // the ID (auto increment ID) are different, so we need to 
                // find numeric ID from customer lookups. 
                // you'll probably won't need this step.
                return Q.first(CMCPS.Northwind.CustomerRow.getLookup().items, function (x) { return x.CustomerID == customerID; }).ID;
            };
            OtherFormInTabDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Customer', !this.getCustomerID());
            };
            OtherFormInTabDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OtherFormInTabDialog);
            return OtherFormInTabDialog;
        }(CMCPS.Northwind.OrderDialog));
        BasicSamples.OtherFormInTabDialog = OtherFormInTabDialog;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of OrderGrid to override dialog type to OtherFormInTabDialog
         */
        var OtherFormInTabGrid = /** @class */ (function (_super) {
            __extends(OtherFormInTabGrid, _super);
            function OtherFormInTabGrid(container) {
                return _super.call(this, container) || this;
            }
            OtherFormInTabGrid.prototype.getDialogType = function () { return BasicSamples.OtherFormInTabDialog; };
            OtherFormInTabGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OtherFormInTabGrid);
            return OtherFormInTabGrid;
        }(CMCPS.Northwind.OrderGrid));
        BasicSamples.OtherFormInTabGrid = OtherFormInTabGrid;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
/// <reference path="../../../Northwind/Order/OrderDialog.ts" />
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Our custom order dialog subclass that will have a tab to display and edit selected customer details.
         * With single toolbar for all forms
         */
        var OtherFormOneBarDialog = /** @class */ (function (_super) {
            __extends(OtherFormOneBarDialog, _super);
            function OtherFormOneBarDialog() {
                var _this = _super.call(this) || this;
                _this.selfChange = 0;
                // entity dialogs by default creates a property grid on element with ID "PropertyGrid".
                // here we explicitly create another, the customer property grid (vertical form) on element with ID "CustomerPropertyGrid".
                _this.customerPropertyGrid = new Serenity.PropertyGrid(_this.byId("CustomerPropertyGrid"), {
                    items: Q.getForm(CMCPS.Northwind.CustomerForm.formKey).filter(function (x) { return x.name != 'CustomerID'; }),
                    idPrefix: _this.idPrefix + "_Customer_",
                    useCategories: true
                });
                // this is just a helper to access editors if needed
                _this.customerForm = new CMCPS.Northwind.CustomerForm(_this.customerPropertyGrid.idPrefix);
                // initialize validator for customer form
                _this.customerValidator = _this.byId("CustomerForm").validate(Q.validateOptions({}));
                _this.form.CustomerID.change(function (e) {
                    if (_this.selfChange)
                        return;
                    var customerID = _this.getCustomerID();
                    Serenity.TabsExtensions.setDisabled(_this.tabs, 'Customer', !customerID);
                    if (!customerID) {
                        // no customer is selected, just load an empty entity
                        _this.customerPropertyGrid.load({});
                        return;
                    }
                    // load selected customer into customer form by calling CustomerService
                    CMCPS.Northwind.CustomerService.Retrieve({
                        EntityId: customerID
                    }, function (response) {
                        _this.customerPropertyGrid.load(response.Entity);
                    });
                });
                return _this;
            }
            OtherFormOneBarDialog.prototype.getCustomerID = function () {
                var customerID = this.form.CustomerID.value;
                if (Q.isEmptyOrNull(customerID))
                    return null;
                // unfortunately, CustomerID (a string) used in this form and 
                // the ID (auto increment ID) are different, so we need to 
                // find numeric ID from customer lookups. 
                // you'll probably won't need this step.
                return Q.first(CMCPS.Northwind.CustomerRow.getLookup().items, function (x) { return x.CustomerID == customerID; }).ID;
            };
            OtherFormOneBarDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Customer', !this.getCustomerID());
            };
            // Save the customer and the order 
            OtherFormOneBarDialog.prototype.saveCustomer = function (callback, onSuccess) {
                var _this = this;
                var id = this.getCustomerID();
                if (!id) {
                    // If id of Customer isn't present, we save only Order entity
                    onSuccess(null);
                }
                else {
                    // Get current tab
                    var currTab = Serenity.TabsExtensions.activeTabKey(this.tabs);
                    // Select the correct tab and validate to see the error message in tab
                    Serenity.TabsExtensions.selectTab(this.tabs, "Customer");
                    if (!this.customerValidator.form()) {
                        return false;
                    }
                    // Re-select initial tab
                    Serenity.TabsExtensions.selectTab(this.tabs, currTab);
                    // prepare an empty entity to serialize customer details into
                    var c = {};
                    this.customerPropertyGrid.save(c);
                    CMCPS.Northwind.CustomerService.Update({
                        EntityId: id,
                        Entity: c
                    }, function (response) {
                        // reload customer list just in case
                        Q.reloadLookup(CMCPS.Northwind.CustomerRow.lookupKey);
                        // set flag that we are triggering customer select change event
                        // otherwise active tab will change to first one
                        _this.selfChange++;
                        try {
                            // trigger change so that customer select updates its text
                            // in case if Company Name is changed
                            _this.form.CustomerID.element.change();
                        }
                        finally {
                            _this.selfChange--;
                        }
                        onSuccess(response);
                    });
                }
                return true;
            };
            // Call super.save to save Order entity
            OtherFormOneBarDialog.prototype.saveOrder = function (callback) {
                _super.prototype.save.call(this, callback);
            };
            OtherFormOneBarDialog.prototype.saveAll = function (callback) {
                var _this = this;
                this.saveCustomer(callback, 
                // If customer successa, save Order entity
                function (resp) { return _this.saveOrder(callback); });
            };
            // This is called when save/update button is pressed
            OtherFormOneBarDialog.prototype.save = function (callback) {
                this.saveAll(callback);
            };
            OtherFormOneBarDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OtherFormOneBarDialog);
            return OtherFormOneBarDialog;
        }(CMCPS.Northwind.OrderDialog));
        BasicSamples.OtherFormOneBarDialog = OtherFormOneBarDialog;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of OrderGrid to override dialog type to OtherFormInTabOneBarDialog
         */
        var OtherFormInTabOneBarGrid = /** @class */ (function (_super) {
            __extends(OtherFormInTabOneBarGrid, _super);
            function OtherFormInTabOneBarGrid(container) {
                return _super.call(this, container) || this;
            }
            OtherFormInTabOneBarGrid.prototype.getDialogType = function () { return BasicSamples.OtherFormOneBarDialog; };
            OtherFormInTabOneBarGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OtherFormInTabOneBarGrid);
            return OtherFormInTabOneBarGrid;
        }(CMCPS.Northwind.OrderGrid));
        BasicSamples.OtherFormInTabOneBarGrid = OtherFormInTabOneBarGrid;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        var PopulateLinkedDataDialog = /** @class */ (function (_super) {
            __extends(PopulateLinkedDataDialog, _super);
            function PopulateLinkedDataDialog() {
                var _this = _super.call(this) || this;
                _this.form = new BasicSamples.PopulateLinkedDataForm(_this.idPrefix);
                // "changeSelect2" is only fired when user changes the selection
                // but "change" is fired when dialog sets customer on load too
                // so we prefer "changeSelect2", as initial customer details 
                // will get populated by initial load, we don't want extra call
                _this.form.CustomerID.changeSelect2(function (e) {
                    var customerID = _this.form.CustomerID.value;
                    if (Q.isEmptyOrNull(customerID)) {
                        _this.setCustomerDetails({});
                        return;
                    }
                    // in northwind CustomerID is a string like "ALFKI", 
                    // while its actual integer ID value is 1.
                    // so we need to convert customer ID to ID.
                    // you won't have to do this conversion with your tables
                    var id = Q.first(CMCPS.Northwind.CustomerRow.getLookup().items, function (x) { return x.CustomerID == customerID; }).ID;
                    CMCPS.Northwind.CustomerService.Retrieve({
                        EntityId: id
                    }, function (response) {
                        _this.setCustomerDetails(response.Entity);
                    });
                });
                return _this;
            }
            PopulateLinkedDataDialog.prototype.getFormKey = function () { return BasicSamples.PopulateLinkedDataForm.formKey; };
            PopulateLinkedDataDialog.prototype.getIdProperty = function () { return CMCPS.Northwind.OrderRow.idProperty; };
            PopulateLinkedDataDialog.prototype.getLocalTextPrefix = function () { return CMCPS.Northwind.OrderRow.localTextPrefix; };
            PopulateLinkedDataDialog.prototype.getNameProperty = function () { return CMCPS.Northwind.OrderRow.nameProperty; };
            PopulateLinkedDataDialog.prototype.getService = function () { return CMCPS.Northwind.OrderService.baseUrl; };
            PopulateLinkedDataDialog.prototype.setCustomerDetails = function (details) {
                this.form.CustomerCity.value = details.City;
                this.form.CustomerContactName.value = details.ContactName;
                this.form.CustomerContactTitle.value = details.ContactTitle;
                this.form.CustomerCountry.value = details.Country;
                this.form.CustomerFax.value = details.Fax;
                this.form.CustomerPhone.value = details.Phone;
                this.form.CustomerRegion.value = details.Region;
            };
            /**
             * This dialog will have CSS class "s-PopulateLinkedDataDialog"
             * We are changing it here to "s-OrderDialog", to make it use default OrderDialog styles
             * This has no effect other than looks on populate linked data demonstration
             */
            PopulateLinkedDataDialog.prototype.getCssClass = function () {
                return _super.prototype.getCssClass.call(this) + " s-OrderDialog s-Northwind-OrderDialog";
            };
            PopulateLinkedDataDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PopulateLinkedDataDialog);
            return PopulateLinkedDataDialog;
        }(Serenity.EntityDialog));
        BasicSamples.PopulateLinkedDataDialog = PopulateLinkedDataDialog;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * A subclass of OrderGrid that launches PopulateLinkedDataDialog
         */
        var PopulateLinkedDataGrid = /** @class */ (function (_super) {
            __extends(PopulateLinkedDataGrid, _super);
            function PopulateLinkedDataGrid(container) {
                return _super.call(this, container) || this;
            }
            PopulateLinkedDataGrid.prototype.getDialogType = function () { return BasicSamples.PopulateLinkedDataDialog; };
            PopulateLinkedDataGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PopulateLinkedDataGrid);
            return PopulateLinkedDataGrid;
        }(CMCPS.Northwind.OrderGrid));
        BasicSamples.PopulateLinkedDataGrid = PopulateLinkedDataGrid;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var SupplierDialog = /** @class */ (function (_super) {
            __extends(SupplierDialog, _super);
            function SupplierDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.SupplierForm(_this.idPrefix);
                return _this;
            }
            SupplierDialog.prototype.getFormKey = function () { return Northwind.SupplierForm.formKey; };
            SupplierDialog.prototype.getIdProperty = function () { return Northwind.SupplierRow.idProperty; };
            SupplierDialog.prototype.getLocalTextPrefix = function () { return Northwind.SupplierRow.localTextPrefix; };
            SupplierDialog.prototype.getNameProperty = function () { return Northwind.SupplierRow.nameProperty; };
            SupplierDialog.prototype.getService = function () { return Northwind.SupplierService.baseUrl; };
            SupplierDialog.prototype.getLanguages = function () {
                return CMCPS.LanguageList.getValue();
            };
            SupplierDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SupplierDialog);
            return SupplierDialog;
        }(Serenity.EntityDialog));
        Northwind.SupplierDialog = SupplierDialog;
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
/// <reference path="../../../Northwind/Supplier/SupplierDialog.ts" />
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        var ReadOnlyDialog = /** @class */ (function (_super) {
            __extends(ReadOnlyDialog, _super);
            function ReadOnlyDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
             * This is the method that gets list of tool
             * buttons to be created in a dialog.
             *
             * Here we'll remove save and close button, and
             * apply changes buttons.
             */
            ReadOnlyDialog.prototype.getToolbarButtons = function () {
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "save-and-close-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "apply-changes-button"; }), 1);
                // We could also remove delete button here, but for demonstration 
                // purposes we'll hide it in another method (updateInterface)
                // buttons.splice(Q.indexOf(buttons, x => x.cssClass == "delete-button"), 1);
                return buttons;
            };
            /**
             * This method is a good place to update states of
             * interface elements. It is called after dialog
             * is initialized and an entity is loaded into dialog.
             * This is also called in new item mode.
             */
            ReadOnlyDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // finding all editor elements and setting their readonly attribute
                // note that this helper method only works with basic inputs, 
                // some editors require widget based set readonly overload (setReadOnly)
                Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
                // remove required asterisk (*)
                this.element.find('sup').hide();
                // here is a way to locate a button by its css class
                // note that this method is not available in 
                // getToolbarButtons() because buttons are not 
                // created there yet!
                // 
                // this.toolbar.findButton('delete-button').hide();
                // entity dialog also has reference variables to
                // its default buttons, lets use them to hide delete button
                this.deleteButton.hide();
                // we could also hide save buttons just like delete button,
                // but they are null now as we removed them in getToolbarButtons()
                // if we didn't we could write like this:
                // 
                // this.applyChangesButton.hide();
                // this.saveAndCloseButton.hide();
                // instead of hiding, we could disable a button
                // 
                // this.deleteButton.toggleClass('disabled', true);
            };
            /**
             * This method is called when dialog title needs to be updated.
             * Base class returns something like 'Edit xyz' for edit mode,
             * and 'New xyz' for new record mode.
             *
             * But our dialog is readonly, so we should change it to 'View xyz'
             */
            ReadOnlyDialog.prototype.getEntityTitle = function () {
                if (!this.isEditMode()) {
                    // we shouldn't hit here, but anyway for demo...
                    return "How did you manage to open this dialog in new record mode?";
                }
                else {
                    // entitySingular is type of record this dialog edits. something like 'Supplier'.
                    // you could hardcode it, but this is for demonstration
                    var entityType = _super.prototype.getEntitySingular.call(this);
                    // get name field value of record this dialog edits
                    var name_1 = this.getEntityNameFieldValue() || "";
                    // you could use Q.format with a local text, but again demo...
                    return 'View ' + entityType + " (" + name_1 + ")";
                }
            };
            /**
             * This method is actually the one that calls getEntityTitle()
             * and updates the dialog title. We could do it here too...
             */
            ReadOnlyDialog.prototype.updateTitle = function () {
                _super.prototype.updateTitle.call(this);
                // remove super.updateTitle() call above and uncomment 
                // below line if you'd like to use this version
                // 
                // this.dialogTitle = 'View Supplier (' + this.getEntityNameFieldValue() + ')';
            };
            ReadOnlyDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ReadOnlyDialog);
            return ReadOnlyDialog;
        }(CMCPS.Northwind.SupplierDialog));
        BasicSamples.ReadOnlyDialog = ReadOnlyDialog;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var SupplierGrid = /** @class */ (function (_super) {
            __extends(SupplierGrid, _super);
            function SupplierGrid(container) {
                return _super.call(this, container) || this;
            }
            SupplierGrid.prototype.getColumnsKey = function () { return "Northwind.Supplier"; };
            SupplierGrid.prototype.getDialogType = function () { return Northwind.SupplierDialog; };
            SupplierGrid.prototype.getIdProperty = function () { return Northwind.SupplierRow.idProperty; };
            SupplierGrid.prototype.getLocalTextPrefix = function () { return Northwind.SupplierRow.localTextPrefix; };
            SupplierGrid.prototype.getService = function () { return Northwind.SupplierService.baseUrl; };
            SupplierGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SupplierGrid);
            return SupplierGrid;
        }(Serenity.EntityGrid));
        Northwind.SupplierGrid = SupplierGrid;
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
/// <reference path="../../../Northwind/Supplier/SupplierGrid.ts" />
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * A readonly grid that launches ReadOnlyDialog
         */
        var ReadOnlyGrid = /** @class */ (function (_super) {
            __extends(ReadOnlyGrid, _super);
            function ReadOnlyGrid(container) {
                return _super.call(this, container) || this;
            }
            ReadOnlyGrid.prototype.getDialogType = function () { return BasicSamples.ReadOnlyDialog; };
            /**
             * Removing add button from grid using its css class
             */
            ReadOnlyGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            ReadOnlyGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ReadOnlyGrid);
            return ReadOnlyGrid;
        }(CMCPS.Northwind.SupplierGrid));
        BasicSamples.ReadOnlyGrid = ReadOnlyGrid;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var CustomerDialog = /** @class */ (function (_super) {
            __extends(CustomerDialog, _super);
            function CustomerDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Northwind.CustomerForm(_this.idPrefix);
                _this.ordersGrid = new Northwind.CustomerOrdersGrid(_this.byId('OrdersGrid'));
                // force order dialog to open in Dialog mode instead of Panel mode
                // which is set as default on OrderDialog with @panelAttribute
                _this.ordersGrid.openDialogsAsPanel = false;
                _this.byId('NoteList').closest('.field').hide().end().appendTo(_this.byId('TabNotes'));
                CMCPS.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                return _this;
            }
            CustomerDialog.prototype.getFormKey = function () { return Northwind.CustomerForm.formKey; };
            CustomerDialog.prototype.getIdProperty = function () { return Northwind.CustomerRow.idProperty; };
            CustomerDialog.prototype.getLocalTextPrefix = function () { return Northwind.CustomerRow.localTextPrefix; };
            CustomerDialog.prototype.getNameProperty = function () { return Northwind.CustomerRow.nameProperty; };
            CustomerDialog.prototype.getService = function () { return Northwind.CustomerService.baseUrl; };
            CustomerDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            CustomerDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            CustomerDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Orders', this.isNewOrDeleted());
                this.ordersGrid.customerID = entity.CustomerID;
            };
            CustomerDialog.prototype.onSaveSuccess = function (response) {
                _super.prototype.onSaveSuccess.call(this, response);
                Q.reloadLookup('Northwind.Customer');
            };
            CustomerDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], CustomerDialog);
            return CustomerDialog;
        }(Serenity.EntityDialog));
        Northwind.CustomerDialog = CustomerDialog;
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
/// <reference path="../../../Northwind/Customer/CustomerDialog.ts" />
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        var SerialAutoNumberDialog = /** @class */ (function (_super) {
            __extends(SerialAutoNumberDialog, _super);
            function SerialAutoNumberDialog() {
                var _this = _super.call(this) || this;
                _this.form.CustomerID.element.on('keyup', function (e) {
                    // only auto number when a key between 'A' and 'Z' is pressed
                    if (e.which >= 65 && e.which <= 90)
                        _this.getNextNumber();
                });
                return _this;
            }
            SerialAutoNumberDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // fill next number in new record mode
                if (this.isNew())
                    this.getNextNumber();
            };
            SerialAutoNumberDialog.prototype.getNextNumber = function () {
                var _this = this;
                var val = Q.trimToNull(this.form.CustomerID.value);
                // we will only get next number when customer ID is empty or 1 character in length
                if (!val || val.length <= 1) {
                    // if no customer ID yet (new record mode probably) use 'C' as a prefix
                    var prefix = (val || 'C').toUpperCase();
                    // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                    CMCPS.Northwind.CustomerService.GetNextNumber({
                        Prefix: prefix,
                        Length: 5 // we want service to search for and return serials of 5 in length
                    }, function (response) {
                        _this.form.CustomerID.value = response.Serial;
                        // this is to mark numerical part after prefix
                        _this.form.CustomerID.element[0].setSelectionRange(prefix.length, response.Serial.length);
                    });
                }
            };
            SerialAutoNumberDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SerialAutoNumberDialog);
            return SerialAutoNumberDialog;
        }(CMCPS.Northwind.CustomerDialog));
        BasicSamples.SerialAutoNumberDialog = SerialAutoNumberDialog;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var CustomerGrid = /** @class */ (function (_super) {
            __extends(CustomerGrid, _super);
            function CustomerGrid(container) {
                return _super.call(this, container) || this;
            }
            CustomerGrid.prototype.getColumnsKey = function () { return "Northwind.Customer"; };
            CustomerGrid.prototype.getDialogType = function () { return Northwind.CustomerDialog; };
            CustomerGrid.prototype.getIdProperty = function () { return Northwind.CustomerRow.idProperty; };
            CustomerGrid.prototype.getLocalTextPrefix = function () { return Northwind.CustomerRow.localTextPrefix; };
            CustomerGrid.prototype.getService = function () { return Northwind.CustomerService.baseUrl; };
            CustomerGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(CMCPS.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Northwind/Customer/ListExcel',
                    separator: true
                }));
                buttons.push(CMCPS.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            CustomerGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], CustomerGrid);
            return CustomerGrid;
        }(Serenity.EntityGrid));
        Northwind.CustomerGrid = CustomerGrid;
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
/// <reference path="../../../Northwind/Customer/CustomerGrid.ts" />
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of CustomerGrid to override dialog type to SerialAutoNumberDialog
         */
        var SerialAutoNumberGrid = /** @class */ (function (_super) {
            __extends(SerialAutoNumberGrid, _super);
            function SerialAutoNumberGrid(container) {
                return _super.call(this, container) || this;
            }
            SerialAutoNumberGrid.prototype.getDialogType = function () { return BasicSamples.SerialAutoNumberDialog; };
            SerialAutoNumberGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SerialAutoNumberGrid);
            return SerialAutoNumberGrid;
        }(CMCPS.Northwind.CustomerGrid));
        BasicSamples.SerialAutoNumberGrid = SerialAutoNumberGrid;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Common;
    (function (Common) {
        var GridEditorDialog = /** @class */ (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = CMCPS.Common || (CMCPS.Common = {}));
})(CMCPS || (CMCPS = {}));
/// <reference path="../../../Common/Helpers/GridEditorDialog.ts" />
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        var ChangingLookupTextDialog = /** @class */ (function (_super) {
            __extends(ChangingLookupTextDialog, _super);
            function ChangingLookupTextDialog() {
                var _this = _super.call(this) || this;
                _this.form = new BasicSamples.ChangingLookupTextForm(_this.idPrefix);
                _this.form.ProductID.changeSelect2(function (e) {
                    var productID = Q.toId(_this.form.ProductID.value);
                    if (productID != null) {
                        _this.form.UnitPrice.value = CMCPS.Northwind.ProductRow.getLookup().itemById[productID].UnitPrice;
                    }
                });
                _this.form.Discount.addValidationRule(_this.uniqueName, function (e) {
                    var price = _this.form.UnitPrice.value;
                    var quantity = _this.form.Quantity.value;
                    var discount = _this.form.Discount.value;
                    if (price != null && quantity != null && discount != null &&
                        discount > 0 && discount >= price * quantity) {
                        return "Discount can't be higher than total price!";
                    }
                });
                return _this;
            }
            ChangingLookupTextDialog.prototype.getFormKey = function () { return BasicSamples.ChangingLookupTextForm.formKey; };
            ChangingLookupTextDialog.prototype.getLocalTextPrefix = function () { return CMCPS.Northwind.OrderDetailRow.localTextPrefix; };
            ChangingLookupTextDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('apply-changes-button').hide();
                this.toolbar.findButton('save-and-close-button').hide();
            };
            ChangingLookupTextDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangingLookupTextDialog);
            return ChangingLookupTextDialog;
        }(CMCPS.Common.GridEditorDialog));
        BasicSamples.ChangingLookupTextDialog = ChangingLookupTextDialog;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Our custom product editor type
         */
        var ChangingLookupTextEditor = /** @class */ (function (_super) {
            __extends(ChangingLookupTextEditor, _super);
            function ChangingLookupTextEditor(container, options) {
                return _super.call(this, container, options) || this;
            }
            ChangingLookupTextEditor.prototype.getLookupKey = function () {
                return CMCPS.Northwind.ProductRow.lookupKey;
            };
            ChangingLookupTextEditor.prototype.getItemText = function (item, lookup) {
                return _super.prototype.getItemText.call(this, item, lookup) +
                    ' (' +
                    '$' + Q.formatNumber(item.UnitPrice, '#,##0.00') +
                    ', ' + (item.UnitsInStock > 0 ? (item.UnitsInStock + ' in stock') : 'out of stock') +
                    ', ' + (item.SupplierCompanyName || 'Unknown') +
                    ')';
            };
            ChangingLookupTextEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], ChangingLookupTextEditor);
            return ChangingLookupTextEditor;
        }(Serenity.LookupEditorBase));
        BasicSamples.ChangingLookupTextEditor = ChangingLookupTextEditor;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailDialog = /** @class */ (function (_super) {
            __extends(OrderDetailDialog, _super);
            function OrderDetailDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Northwind.OrderDetailForm(_this.idPrefix);
                _this.form.ProductID.changeSelect2(function (e) {
                    var productID = Q.toId(_this.form.ProductID.value);
                    if (productID != null) {
                        _this.form.UnitPrice.value = Northwind.ProductRow.getLookup().itemById[productID].UnitPrice;
                    }
                });
                _this.form.Discount.addValidationRule(_this.uniqueName, function (e) {
                    var price = _this.form.UnitPrice.value;
                    var quantity = _this.form.Quantity.value;
                    var discount = _this.form.Discount.value;
                    if (price != null && quantity != null && discount != null &&
                        discount > 0 && discount >= price * quantity) {
                        return "Discount can't be higher than total price!";
                    }
                });
                return _this;
            }
            OrderDetailDialog.prototype.getFormKey = function () { return Northwind.OrderDetailForm.formKey; };
            OrderDetailDialog.prototype.getLocalTextPrefix = function () { return Northwind.OrderDetailRow.localTextPrefix; };
            OrderDetailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderDetailDialog);
            return OrderDetailDialog;
        }(CMCPS.Common.GridEditorDialog));
        Northwind.OrderDetailDialog = OrderDetailDialog;
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
/// <reference path="../../../Northwind/OrderDetail/OrderDetailDialog.ts" />
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Our subclass of order detail dialog with a CategoryID property
         * that will be used to set CascadeValue of product editor
         */
        var FilteredLookupOrderDetailDialog = /** @class */ (function (_super) {
            __extends(FilteredLookupOrderDetailDialog, _super);
            function FilteredLookupOrderDetailDialog() {
                var _this = _super.call(this) || this;
                _this.form = new CMCPS.Northwind.OrderDetailForm(_this.idPrefix);
                // we can set cascade field in constructor
                // we could also use FilterField but in this case, when CategoryID is null
                // lookup editor would show all products in any category
                _this.form.ProductID.cascadeField = "CategoryID" /* CategoryID */;
                return _this;
                // but CategoryID value is not yet available here as detail editor will set it 
                // after calling constructor (creating a detail dialog) so we'll use BeforeLoadEntity
            }
            /**
             * This method is called just before an entity is loaded to dialog
             * This is also called for new record mode with an empty entity
             */
            FilteredLookupOrderDetailDialog.prototype.beforeLoadEntity = function (entity) {
                _super.prototype.beforeLoadEntity.call(this, entity);
                // setting cascade value here
                // make sure you have [LookupInclude] on CategoryID property of ProductRow
                // otherwise this field won't be available in lookup script (will always be null),
                // so can't be filtered and you'll end up with an empty product list.
                this.form.ProductID.cascadeValue = this.categoryID;
            };
            FilteredLookupOrderDetailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], FilteredLookupOrderDetailDialog);
            return FilteredLookupOrderDetailDialog;
        }(CMCPS.Northwind.OrderDetailDialog));
        BasicSamples.FilteredLookupOrderDetailDialog = FilteredLookupOrderDetailDialog;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Common;
    (function (Common) {
        var GridEditorBase = /** @class */ (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = CMCPS.Common || (CMCPS.Common = {}));
})(CMCPS || (CMCPS = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailsEditor = /** @class */ (function (_super) {
            __extends(OrderDetailsEditor, _super);
            function OrderDetailsEditor(container) {
                return _super.call(this, container) || this;
            }
            OrderDetailsEditor.prototype.getColumnsKey = function () { return "Northwind.OrderDetail"; };
            OrderDetailsEditor.prototype.getDialogType = function () { return Northwind.OrderDetailDialog; };
            OrderDetailsEditor.prototype.getLocalTextPrefix = function () { return Northwind.OrderDetailRow.localTextPrefix; };
            OrderDetailsEditor.prototype.validateEntity = function (row, id) {
                row.ProductID = Q.toId(row.ProductID);
                var sameProduct = Q.tryFirst(this.view.getItems(), function (x) { return x.ProductID === row.ProductID; });
                if (sameProduct && this.id(sameProduct) !== id) {
                    Q.alert('This product is already in order details!');
                    return false;
                }
                row.ProductName = Northwind.ProductRow.getLookup().itemById[row.ProductID].ProductName;
                row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
                return true;
            };
            OrderDetailsEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderDetailsEditor);
            return OrderDetailsEditor;
        }(CMCPS.Common.GridEditorBase));
        Northwind.OrderDetailsEditor = OrderDetailsEditor;
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
/// <reference path="../../../Northwind/OrderDetail/OrderDetailsEditor.ts" />
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Our subclass of Order Details editor with a CategoryID property
         */
        var FilteredLookupDetailEditor = /** @class */ (function (_super) {
            __extends(FilteredLookupDetailEditor, _super);
            function FilteredLookupDetailEditor(container) {
                return _super.call(this, container) || this;
            }
            FilteredLookupDetailEditor.prototype.getDialogType = function () { return BasicSamples.FilteredLookupOrderDetailDialog; };
            /**
             * This method is called to initialize an edit dialog created by
             * grid editor when Add button or an edit link is clicked
             * We have an opportunity here to pass CategoryID to edit dialog
             */
            FilteredLookupDetailEditor.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                // passing category ID from grid editor to detail dialog
                dialog.categoryID = this.categoryID;
            };
            FilteredLookupDetailEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], FilteredLookupDetailEditor);
            return FilteredLookupDetailEditor;
        }(CMCPS.Northwind.OrderDetailsEditor));
        BasicSamples.FilteredLookupDetailEditor = FilteredLookupDetailEditor;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Basic order dialog with a category selection
         */
        var FilteredLookupInDetailDialog = /** @class */ (function (_super) {
            __extends(FilteredLookupInDetailDialog, _super);
            function FilteredLookupInDetailDialog() {
                var _this = _super.call(this) || this;
                _this.form = new BasicSamples.FilteredLookupInDetailForm(_this.idPrefix);
                _this.form.CategoryID.change(function (e) {
                    _this.form.DetailList.categoryID = Q.toId(_this.form.CategoryID.value);
                });
                return _this;
            }
            FilteredLookupInDetailDialog.prototype.getFormKey = function () { return BasicSamples.FilteredLookupInDetailForm.formKey; };
            FilteredLookupInDetailDialog.prototype.getIdProperty = function () { return CMCPS.Northwind.OrderRow.idProperty; };
            FilteredLookupInDetailDialog.prototype.getLocalTextPrefix = function () { return CMCPS.Northwind.OrderRow.localTextPrefix; };
            FilteredLookupInDetailDialog.prototype.getNameProperty = function () { return CMCPS.Northwind.OrderRow.nameProperty; };
            FilteredLookupInDetailDialog.prototype.getService = function () { return CMCPS.Northwind.OrderService.baseUrl; };
            FilteredLookupInDetailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], FilteredLookupInDetailDialog);
            return FilteredLookupInDetailDialog;
        }(Serenity.EntityDialog));
        BasicSamples.FilteredLookupInDetailDialog = FilteredLookupInDetailDialog;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of OrderGrid to override dialog type to FilteredLookupInDetailDialog
         */
        var FilteredLookupInDetailGrid = /** @class */ (function (_super) {
            __extends(FilteredLookupInDetailGrid, _super);
            function FilteredLookupInDetailGrid(container) {
                return _super.call(this, container) || this;
            }
            FilteredLookupInDetailGrid.prototype.getDialogType = function () { return BasicSamples.FilteredLookupInDetailDialog; };
            FilteredLookupInDetailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], FilteredLookupInDetailGrid);
            return FilteredLookupInDetailGrid;
        }(CMCPS.Northwind.OrderGrid));
        BasicSamples.FilteredLookupInDetailGrid = FilteredLookupInDetailGrid;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
/// <reference path="../../../Northwind/Product/ProductDialog.ts" />
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * This is our custom product dialog that uses a different product form
         * (LookupFilterByMultipleForm) with our special category editor.
         */
        var LookupFilterByMultipleDialog = /** @class */ (function (_super) {
            __extends(LookupFilterByMultipleDialog, _super);
            function LookupFilterByMultipleDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            LookupFilterByMultipleDialog.prototype.getFormKey = function () { return BasicSamples.LookupFilterByMultipleForm.formKey; };
            LookupFilterByMultipleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LookupFilterByMultipleDialog);
            return LookupFilterByMultipleDialog;
        }(CMCPS.Northwind.ProductDialog));
        BasicSamples.LookupFilterByMultipleDialog = LookupFilterByMultipleDialog;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
/// <reference path="../../../Northwind/Product/ProductGrid.ts" />
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of ProductGrid to override dialog type to CloneableEntityDialog
         */
        var LookupFilterByMultipleGrid = /** @class */ (function (_super) {
            __extends(LookupFilterByMultipleGrid, _super);
            function LookupFilterByMultipleGrid(container) {
                return _super.call(this, container) || this;
            }
            LookupFilterByMultipleGrid.prototype.getDialogType = function () { return BasicSamples.LookupFilterByMultipleDialog; };
            /**
             * This method is called just before List request is sent to service.
             * You have an opportunity here to cancel request or modify it.
             * Here we'll add a custom criteria to list request.
             */
            LookupFilterByMultipleGrid.prototype.onViewSubmit = function () {
                if (!_super.prototype.onViewSubmit.call(this)) {
                    return false;
                }
                // this has no relation to our lookup editor but as we'll allow picking only 
                // categories of Produce and Seafood in product dialog, it's better to show
                // only products from these categories in grid too
                var request = this.view.params;
                request.Criteria = Serenity.Criteria.and(request.Criteria, [['CategoryName'], 'in', [['Produce', 'Seafood']]]);
                // brackets used are important above, NOT ['CategoryName', 'in', ['Produce', 'Seafood']]
                return true;
            };
            LookupFilterByMultipleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LookupFilterByMultipleGrid);
            return LookupFilterByMultipleGrid;
        }(CMCPS.Northwind.ProductGrid));
        BasicSamples.LookupFilterByMultipleGrid = LookupFilterByMultipleGrid;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * This is our category editor that will show only categories of Produce and
         * Seafood. We are subclassing LookupEditorBase which also LookupEditor
         * derives from.
         *
         * After compiling and transforming templates, this editor type will be
         * available in server side to use in our LookupFilterByMultipleForm,
         * which is a version of ProductForm that uses our custom editor.
         */
        var ProduceSeafoodCategoryEditor = /** @class */ (function (_super) {
            __extends(ProduceSeafoodCategoryEditor, _super);
            function ProduceSeafoodCategoryEditor(container, opt) {
                return _super.call(this, container, opt) || this;
            }
            /**
             * Normally LookupEditor requires a lookup key to determine which set of
             * lookup data to show in editor. As our editor will only show category
             * data, we lock it to category lookup key.
             */
            ProduceSeafoodCategoryEditor.prototype.getLookupKey = function () {
                return CMCPS.Northwind.CategoryRow.lookupKey;
            };
            /**
             * Here we are filtering by category name but you could filter by any field.
             * Just make sure the fields you filter on has [LookupInclude] attribute on them,
             * otherwise their value will be null in client side as they are not sent back
             * from server in lookup script.
             */
            ProduceSeafoodCategoryEditor.prototype.getItems = function (lookup) {
                return _super.prototype.getItems.call(this, lookup).filter(function (x) {
                    return x.CategoryName === 'Produce' || x.CategoryName === 'Seafood';
                });
            };
            ProduceSeafoodCategoryEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], ProduceSeafoodCategoryEditor);
            return ProduceSeafoodCategoryEditor;
        }(Serenity.LookupEditorBase));
        BasicSamples.ProduceSeafoodCategoryEditor = ProduceSeafoodCategoryEditor;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        var HardcodedValuesDialog = /** @class */ (function (_super) {
            __extends(HardcodedValuesDialog, _super);
            function HardcodedValuesDialog() {
                var _this = _super.call(this) || this;
                _this.form = new BasicSamples.HardcodedValuesForm(_this.idPrefix);
                _this.dialogTitle = "Please select some value";
                _this.form.SomeValue.changeSelect2(function (e) {
                    Q.notifySuccess("You selected item with key: " + _this.form.SomeValue.value);
                });
                return _this;
            }
            HardcodedValuesDialog.prototype.getFormKey = function () { return BasicSamples.HardcodedValuesForm.formKey; };
            HardcodedValuesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], HardcodedValuesDialog);
            return HardcodedValuesDialog;
        }(Serenity.PropertyDialog));
        BasicSamples.HardcodedValuesDialog = HardcodedValuesDialog;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Our select editor with hardcoded values.
         *
         * When you define a new editor type, make sure you build
         * and transform templates for it to be available
         * in server side forms, e.g. [HardCodedValuesEditor]
         */
        var HardcodedValuesEditor = /** @class */ (function (_super) {
            __extends(HardcodedValuesEditor, _super);
            function HardcodedValuesEditor(container) {
                var _this = _super.call(this, container, null) || this;
                // add option accepts a key (id) value and display text value
                _this.addOption("key1", "Text 1");
                _this.addOption("key2", "Text 2");
                // you may also use addItem which accepts a Select2Item parameter
                _this.addItem({
                    id: "key3",
                    text: "Text 3"
                });
                // don't let selecting this one (disabled)
                _this.addItem({
                    id: "key4",
                    text: "Text 4",
                    disabled: true
                });
                return _this;
            }
            HardcodedValuesEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], HardcodedValuesEditor);
            return HardcodedValuesEditor;
        }(Serenity.Select2Editor));
        BasicSamples.HardcodedValuesEditor = HardcodedValuesEditor;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        var StaticTextBlockDialog = /** @class */ (function (_super) {
            __extends(StaticTextBlockDialog, _super);
            function StaticTextBlockDialog() {
                var _this = _super.call(this) || this;
                _this.form = new BasicSamples.StaticTextBlockForm(_this.idPrefix);
                _this.dialogTitle = "A form with static text blocks";
                return _this;
            }
            StaticTextBlockDialog.prototype.getFormKey = function () { return BasicSamples.StaticTextBlockForm.formKey; };
            /**
             * Here we override loadInitialEntity method to set value for "DisplayFieldValue" field.
             * If this was an EntityDialog, your field value would be originating from server side entity.
             */
            StaticTextBlockDialog.prototype.loadInitialEntity = function () {
                this.propertyGrid.load({
                    DisplayFieldValue: 'This content comes from <b>the value</b> of <em>DisplayFieldValue</em> field.'
                });
            };
            StaticTextBlockDialog.prototype.getDialogOptions = function () {
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.width = 650;
                return opt;
            };
            StaticTextBlockDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], StaticTextBlockDialog);
            return StaticTextBlockDialog;
        }(Serenity.PropertyDialog));
        BasicSamples.StaticTextBlockDialog = StaticTextBlockDialog;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Common;
    (function (Common) {
        var BulkServiceAction = /** @class */ (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new CMCPS.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = CMCPS.Common || (CMCPS.Common = {}));
})(CMCPS || (CMCPS = {}));
/// <reference path="../../../Common/Helpers/BulkServiceAction.ts" />
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        var OrderBulkAction = /** @class */ (function (_super) {
            __extends(OrderBulkAction, _super);
            function OrderBulkAction() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
             * This controls how many service requests will be used in parallel.
             * Determine this number based on how many requests your server
             * might be able to handle, and amount of wait on external resources.
             */
            OrderBulkAction.prototype.getParallelRequests = function () {
                return 10;
            };
            /**
             * These number of records IDs will be sent to your service in one
             * service call. If your service is designed to handle one record only,
             * set it to 1. But note that, if you have 5000 records, this will
             * result in 5000 service calls / requests.
             */
            OrderBulkAction.prototype.getBatchSize = function () {
                return 5;
            };
            /**
             * This is where you should call your service.
             * Batch parameter contains the selected order IDs
             * that should be processed in this service call.
             */
            OrderBulkAction.prototype.executeForBatch = function (batch) {
                var _this = this;
                BasicSamples.BasicSamplesService.OrderBulkAction({
                    OrderIDs: batch.map(function (x) { return Q.parseInteger(x); })
                }, function (response) { return _this.set_successCount(_this.get_successCount() + batch.length); }, {
                    blockUI: false,
                    onError: function (response) { return _this.set_errorCount(_this.get_errorCount() + batch.length); },
                    onCleanup: function () { return _this.serviceCallCleanup(); }
                });
            };
            return OrderBulkAction;
        }(CMCPS.Common.BulkServiceAction));
        BasicSamples.OrderBulkAction = OrderBulkAction;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
/// <reference path="OrderBulkAction.ts" />
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        var CancellableBulkActionGrid = /** @class */ (function (_super) {
            __extends(CancellableBulkActionGrid, _super);
            function CancellableBulkActionGrid(container) {
                return _super.call(this, container) || this;
            }
            CancellableBulkActionGrid.prototype.createToolbarExtensions = function () {
                _super.prototype.createToolbarExtensions.call(this);
                this.rowSelection = new Serenity.GridRowSelectionMixin(this);
            };
            CancellableBulkActionGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: 'Perform Bulk Action on Selected Orders',
                        cssClass: 'send-button',
                        onClick: function () {
                            if (!_this.onViewSubmit()) {
                                return;
                            }
                            var action = new BasicSamples.OrderBulkAction();
                            action.done = function () { return _this.rowSelection.resetCheckedAndRefresh(); };
                            action.execute(_this.rowSelection.getSelectedKeys());
                        }
                    }];
            };
            CancellableBulkActionGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(function () { return _this.rowSelection; }));
                return columns;
            };
            CancellableBulkActionGrid.prototype.getViewOptions = function () {
                var opt = _super.prototype.getViewOptions.call(this);
                opt.rowsPerPage = 2500;
                return opt;
            };
            CancellableBulkActionGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CancellableBulkActionGrid);
            return CancellableBulkActionGrid;
        }(CMCPS.Northwind.OrderGrid));
        BasicSamples.CancellableBulkActionGrid = CancellableBulkActionGrid;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        var ConditionalFormattingGrid = /** @class */ (function (_super) {
            __extends(ConditionalFormattingGrid, _super);
            function ConditionalFormattingGrid(container) {
                return _super.call(this, container) || this;
            }
            ConditionalFormattingGrid.prototype.getColumnsKey = function () { return "Northwind.Product"; };
            ConditionalFormattingGrid.prototype.getDialogType = function () { return CMCPS.Northwind.ProductDialog; };
            ConditionalFormattingGrid.prototype.getIdProperty = function () { return CMCPS.Northwind.ProductRow.idProperty; };
            ConditionalFormattingGrid.prototype.getLocalTextPrefix = function () { return CMCPS.Northwind.ProductRow.localTextPrefix; };
            ConditionalFormattingGrid.prototype.getService = function () { return CMCPS.Northwind.ProductService.baseUrl; };
            /**
             * We override getColumns() to be able to add a custom CSS class to UnitPrice
             * We could also add this class in ProductColumns.cs but didn't want to modify
             * it solely for this sample.
             */
            ConditionalFormattingGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                // adding a specific css class to UnitPrice column, 
                // to be able to format cell with a different background
                Q.first(columns, function (x) { return x.field == "UnitPrice" /* UnitPrice */; }).cssClass += " col-unit-price";
                return columns;
            };
            /**
             * This method is called for all rows
             * @param item Data item for current row
             * @param index Index of the row in grid
             */
            ConditionalFormattingGrid.prototype.getItemCssClass = function (item, index) {
                var klass = "";
                if (item.Discontinued == true)
                    klass += " discontinued";
                else if (item.UnitsInStock <= 0)
                    klass += " out-of-stock";
                else if (item.UnitsInStock < 20)
                    klass += " critical-stock";
                else if (item.UnitsInStock > 50)
                    klass += " needs-reorder";
                if (item.UnitPrice >= 50)
                    klass += " high-price";
                else if (item.UnitPrice >= 20)
                    klass += " medium-price";
                else
                    klass += " low-price";
                return Q.trimToNull(klass);
            };
            ConditionalFormattingGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ConditionalFormattingGrid);
            return ConditionalFormattingGrid;
        }(Serenity.EntityGrid));
        BasicSamples.ConditionalFormattingGrid = ConditionalFormattingGrid;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        var CustomLinksInGrid = /** @class */ (function (_super) {
            __extends(CustomLinksInGrid, _super);
            function CustomLinksInGrid(container) {
                return _super.call(this, container) || this;
            }
            /**
             * We override getColumns() to change format functions for some columns.
             * You could also write them as formatter classes, and use them at server side
             */
            CustomLinksInGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                Q.first(columns, function (x) { return x.field == "CustomerCompanyName" /* CustomerCompanyName */; }).format =
                    function (ctx) { return "<a href=\"javascript:;\" class=\"customer-link\">" + Q.htmlEncode(ctx.value) + "</a>"; };
                Q.first(columns, function (x) { return x.field == "OrderDate" /* OrderDate */; }).format =
                    function (ctx) { return "<a href=\"javascript:;\" class=\"date-link\">" + Q.formatDate(ctx.value) + "</a>"; };
                Q.first(columns, function (x) { return x.field == "EmployeeFullName" /* EmployeeFullName */; }).format =
                    function (ctx) { return "<a href=\"javascript:;\" class=\"employee-link\">" + Q.htmlEncode(ctx.value) + "</a>"; };
                Q.first(columns, function (x) { return x.field == "ShipCountry" /* ShipCountry */; }).format =
                    function (ctx) { return "<a href=\"javascript:;\" class=\"ship-country-link\">" + Q.htmlEncode(ctx.value) + "</a>"; };
                return columns;
            };
            CustomLinksInGrid.prototype.onClick = function (e, row, cell) {
                // let base grid handle clicks for its edit links
                _super.prototype.onClick.call(this, e, row, cell);
                // if base grid already handled, we shouldn"t handle it again
                if (e.isDefaultPrevented()) {
                    return;
                }
                // get reference to current item
                var item = this.itemAt(row);
                // get reference to clicked element
                var target = $(e.target);
                if (target.hasClass("customer-link")) {
                    e.preventDefault();
                    var message = Q.format("<p>You have clicked an order from customer: {0}.</p>" +
                        "<p>If you click Yes, i'll open Customer dialog.</p>" +
                        "<p>If you click No, i'll open Order dialog.</p>", Q.htmlEncode(item.CustomerCompanyName));
                    Q.confirm(message, function () {
                        // CustomerDialog doesn't use CustomerID but ID (identity)
                        // so need to find customer to get its actual ID
                        var customer = Q.first(CMCPS.Northwind.CustomerRow.getLookup().items, function (x) { return x.CustomerID == item.CustomerID; });
                        new CMCPS.Northwind.CustomerDialog().loadByIdAndOpenDialog(customer.ID);
                    }, {
                        htmlEncode: false,
                        onNo: function () {
                            new CMCPS.Northwind.OrderDialog().loadByIdAndOpenDialog(item.OrderID);
                        }
                    });
                }
                else if (target.hasClass("date-link")) {
                    e.preventDefault();
                    var ordersInSameDate = Q.count(this.view.getItems(), function (x) { return x.OrderDate == item.OrderDate; });
                    Q.notifyInfo("You clicked an order from date " +
                        Q.formatDate(item.OrderDate) + ". There are " +
                        ordersInSameDate + " orders from the same date that is loaded in grid at the moment");
                }
                else if (target.hasClass("employee-link")) {
                    e.preventDefault();
                    Q.notifySuccess("You clicked an employee name, " +
                        "so i've opened a new Order Dialog from same customer " +
                        "with that employee prepopulated!");
                    new CMCPS.Northwind.OrderDialog().loadEntityAndOpenDialog({
                        CustomerID: item.CustomerID,
                        EmployeeID: item.EmployeeID
                    });
                }
                else if (target.hasClass("ship-country-link")) {
                    e.preventDefault();
                    Q.notifySuccess("Let's filter the grid to orders from " + item.ShipCountry);
                    var countryFilter = this.findQuickFilter(Serenity.LookupEditor, "ShipCountry" /* ShipCountry */);
                    countryFilter.value = item.ShipCountry;
                    this.refresh();
                }
            };
            /**
             * This method is called for columns with [EditLink] attribute,
             * but only for edit links of this grid's own item type.
             * It is also called by Add Product button with a NULL entityOrId
             * parameter so we should check that entityOrId is a string
             * to be sure it is originating from a link.
             *
             * As we changed format for other columns, this will only be called
             * for links in remaining OrderID column
             */
            CustomLinksInGrid.prototype.editItem = function (entityOrId) {
                // check that this is an edit link click, not add button, ID is always a string
                if (typeof entityOrId == "string") {
                    // convert ID to an integer, and find order with that ID
                    var item = this.view.getItemById(Q.toId(entityOrId));
                    // date is a ISO string, so need to parse it first
                    var date = Q.formatDate(item.OrderDate);
                    // ask for confirmation
                    Q.confirm(Q.format("You clicked edit link for order with ID: {0} and Date: {1}. Should i open that order?", item.OrderID, date), function () {
                        new CMCPS.Northwind.OrderDialog().loadByIdAndOpenDialog(item.OrderID);
                    });
                }
                else {
                    _super.prototype.editItem.call(this, entityOrId);
                }
            };
            CustomLinksInGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomLinksInGrid);
            return CustomLinksInGrid;
        }(CMCPS.Northwind.OrderGrid));
        BasicSamples.CustomLinksInGrid = CustomLinksInGrid;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        var DragDropSampleDialog = /** @class */ (function (_super) {
            __extends(DragDropSampleDialog, _super);
            function DragDropSampleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new BasicSamples.DragDropSampleForm(_this.idPrefix);
                return _this;
            }
            DragDropSampleDialog.prototype.getFormKey = function () { return BasicSamples.DragDropSampleForm.formKey; };
            DragDropSampleDialog.prototype.getIdProperty = function () { return BasicSamples.DragDropSampleRow.idProperty; };
            DragDropSampleDialog.prototype.getLocalTextPrefix = function () { return BasicSamples.DragDropSampleRow.localTextPrefix; };
            DragDropSampleDialog.prototype.getNameProperty = function () { return BasicSamples.DragDropSampleRow.nameProperty; };
            DragDropSampleDialog.prototype.getService = function () { return BasicSamples.DragDropSampleService.baseUrl; };
            DragDropSampleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DragDropSampleDialog);
            return DragDropSampleDialog;
        }(Serenity.EntityDialog));
        BasicSamples.DragDropSampleDialog = DragDropSampleDialog;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        var DragDropSampleGrid = /** @class */ (function (_super) {
            __extends(DragDropSampleGrid, _super);
            function DragDropSampleGrid(container) {
                var _this = _super.call(this, container) || this;
                new Serenity.TreeGridMixin({
                    grid: _this,
                    toggleField: "Title" /* Title */,
                    getParentId: function (x) { return x.ParentId; },
                    initialCollapse: function () { return false; },
                });
                // save prior drag target to restore its color during drag
                var priorDragTarget;
                // prevent the grid from cancelling drag'n'drop by default
                _this.slickGrid.onDragInit.subscribe(function (e, dd) {
                    e.stopImmediatePropagation();
                });
                // this method is called when an item is about to be dragged
                _this.slickGrid.onDragStart.subscribe(function (e, dd) {
                    // only allow edit links to be dragged
                    if (!$(e.target).hasClass('s-EditLink'))
                        return;
                    // make sure there is a cell in source location
                    var cell = _this.slickGrid.getCellFromEvent(e);
                    if (!cell) {
                        return;
                    }
                    // notify that we'll handle drag
                    e.stopImmediatePropagation();
                    // save details about dragged item
                    dd.row = cell.row;
                    var item = _this.itemAt(cell.row);
                    dd.item = item;
                    // a unique name for our operation
                    dd.mode = "move";
                    // create an absolute position helper shown during dragging
                    var helper = $("<span></span>")
                        .addClass('drag-helper')
                        .text("Moving " + item.Title)
                        .appendTo(document.body);
                    dd.helper = helper;
                });
                // this method is periodically called during drag
                _this.slickGrid.onDrag.subscribe(function (e, dd) {
                    // only handle our operation
                    if (dd.mode != "move") {
                        return;
                    }
                    // if we changed color of some target before, reset it
                    if (priorDragTarget && priorDragTarget != e.target) {
                        $(priorDragTarget).css('background-color', '');
                        priorDragTarget = null;
                    }
                    // find target, the source will drag into
                    var cell = _this.slickGrid.getCellFromEvent(e);
                    var target = !cell ? null : _this.itemAt(cell.row);
                    // accept only edit links and valid items as drag target
                    var reject = !$(e.target).hasClass('s-EditLink') || !_this.canMoveUnder(dd.item, target);
                    if (reject) {
                        dd.helper.text("Can't move " + dd.item.Title + " here");
                    }
                    else {
                        dd.helper.text("Move " + dd.item.Title + " under " + $(e.target).text());
                        // change color of current drag target
                        $(e.target).css('background-color', '#ddeeee');
                        priorDragTarget = e.target;
                    }
                    // toggle class of helper to show relevant accept / reject icon
                    dd.helper.toggleClass('reject', reject);
                    // position helper next to current mouse position
                    dd.helper.css({ top: e.pageY + 5, left: e.pageX + 4 });
                });
                // this is called when drag is completed
                _this.slickGrid.onDragEnd.subscribe(function (e, dd) {
                    if (dd.mode != "move") {
                        return;
                    }
                    // prevent browser from changing url
                    e.preventDefault();
                    // clear indicator color and drag helper
                    priorDragTarget && $(priorDragTarget).css('background-color', '');
                    dd.helper.remove();
                    // determine target row
                    var cell = _this.slickGrid.getCellFromEvent(e);
                    var item = dd.item;
                    var target = !cell ? null : _this.itemAt(cell.row);
                    // check again that this is valid drag target
                    if ($(e.target).hasClass('s-EditLink') && _this.canMoveUnder(item, target)) {
                        // this will move our primary drag source under new parent
                        var moveItem = function (onSuccess) {
                            BasicSamples.DragDropSampleService.Update({
                                EntityId: item.Id,
                                Entity: {
                                    ParentId: target.Id
                                }
                            }, onSuccess);
                        };
                        // if drag source has some children, need some confirmation
                        var children = _this.getChildren(dd.item);
                        if (children.length > 0) {
                            Q.confirm('Move its children alongside the item?', function () {
                                // if responded yes, moving item under new parent should be enough
                                moveItem(function () { return _this.refresh(); });
                            }, {
                                onNo: function () {
                                    // if responded no, children should move under old parent of item
                                    var oldParentId = item.ParentId == null ? null : item.ParentId;
                                    var moveNextChild = function (onSuccess) {
                                        var _this = this;
                                        if (children.length) {
                                            var x = children.shift();
                                            BasicSamples.DragDropSampleService.Update({
                                                EntityId: x.Id,
                                                Entity: {
                                                    ParentId: oldParentId || null
                                                }
                                            }, function () { return moveNextChild(onSuccess); }, {
                                                onError: function () { return _this.refresh(); }
                                            });
                                        }
                                        else
                                            onSuccess();
                                    };
                                    // first move item itself under new parent, 
                                    // then move its children under old parent one by one
                                    moveItem(function () { return moveNextChild(function () { return _this.refresh(); }); });
                                }
                            });
                        }
                        else {
                            // item has no children, just move it under new parent
                            moveItem(function () { return _this.refresh(); });
                        }
                    }
                    return false;
                });
                return _this;
            }
            DragDropSampleGrid.prototype.getColumnsKey = function () { return 'BasicSamples.DragDropSample'; };
            DragDropSampleGrid.prototype.getDialogType = function () { return BasicSamples.DragDropSampleDialog; };
            DragDropSampleGrid.prototype.getIdProperty = function () { return BasicSamples.DragDropSampleRow.idProperty; };
            DragDropSampleGrid.prototype.getLocalTextPrefix = function () { return BasicSamples.DragDropSampleRow.localTextPrefix; };
            DragDropSampleGrid.prototype.getService = function () { return BasicSamples.DragDropSampleService.baseUrl; };
            /**
             * This method will determine if item can be moved under a given target
             * An item can't be moved under itself, under one of its children
             */
            DragDropSampleGrid.prototype.canMoveUnder = function (item, target) {
                if (!item || !target || item.Id == target.Id || item.ParentId == target.Id)
                    return false;
                if (Q.any(this.getParents(target), function (x) { return x.Id == item.Id; }))
                    return false;
                return true;
            };
            /**
             * Gets children list of an item
             */
            DragDropSampleGrid.prototype.getChildren = function (item) {
                return this.getItems().filter(function (x) { return x.ParentId == item.Id; });
            };
            /**
             * Gets all parents of an item
             */
            DragDropSampleGrid.prototype.getParents = function (item) {
                // use this to prevent infinite recursion
                var visited = {};
                var result = [];
                // while item has a parent and not visited yet
                while (item.ParentId && !visited[item.ParentId]) {
                    // find parent by its ID
                    item = this.view.getItemById(item.ParentId);
                    if (!item)
                        break;
                    result.push(item);
                    visited[item.Id] = true;
                }
                return result;
            };
            DragDropSampleGrid.prototype.getButtons = function () {
                return [];
            };
            DragDropSampleGrid.prototype.usePager = function () {
                return false;
            };
            DragDropSampleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DragDropSampleGrid);
            return DragDropSampleGrid;
        }(Serenity.EntityGrid));
        BasicSamples.DragDropSampleGrid = DragDropSampleGrid;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var SelectableEntityGrid = /** @class */ (function (_super) {
        __extends(SelectableEntityGrid, _super);
        function SelectableEntityGrid() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SelectableEntityGrid.prototype.getSlickOptions = function () {
            var opt = _super.prototype.getSlickOptions.call(this);
            opt.enableTextSelectionOnCells = true;
            opt.selectedCellCssClass = "slick-row-selected";
            opt.enableCellNavigation = true;
            return opt;
        };
        SelectableEntityGrid.prototype.createSlickGrid = function () {
            var grid = _super.prototype.createSlickGrid.call(this);
            grid.setSelectionModel(new Slick.RowSelectionModel());
            return grid;
        };
        SelectableEntityGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], SelectableEntityGrid);
        return SelectableEntityGrid;
    }(Serenity.EntityGrid));
    CMCPS.SelectableEntityGrid = SelectableEntityGrid;
})(CMCPS || (CMCPS = {}));
/// <reference path="SelectableEntityGrid.ts" />
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        var RowSelectionGrid = /** @class */ (function (_super) {
            __extends(RowSelectionGrid, _super);
            function RowSelectionGrid(container) {
                return _super.call(this, container) || this;
            }
            RowSelectionGrid.prototype.getColumnsKey = function () { return "Northwind.Supplier"; };
            RowSelectionGrid.prototype.getDialogType = function () { return CMCPS.Northwind.SupplierDialog; };
            RowSelectionGrid.prototype.getIdProperty = function () { return CMCPS.Northwind.SupplierRow.idProperty; };
            RowSelectionGrid.prototype.getLocalTextPrefix = function () { return CMCPS.Northwind.SupplierRow.localTextPrefix; };
            RowSelectionGrid.prototype.getService = function () { return CMCPS.Northwind.SupplierService.baseUrl; };
            RowSelectionGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RowSelectionGrid);
            return RowSelectionGrid;
        }(CMCPS.SelectableEntityGrid));
        BasicSamples.RowSelectionGrid = RowSelectionGrid;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
/// <reference path="../../../Northwind/Product/ProductGrid.ts" />
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        var GridFilteredByCriteria = /** @class */ (function (_super) {
            __extends(GridFilteredByCriteria, _super);
            function GridFilteredByCriteria(container) {
                return _super.call(this, container) || this;
            }
            GridFilteredByCriteria.prototype.onViewSubmit = function () {
                // only continue if base class returns true (didn't cancel request)
                if (!_super.prototype.onViewSubmit.call(this)) {
                    return false;
                }
                // view object is the data source for grid (SlickRemoteView)
                // this is an EntityGrid so its Params object is a ListRequest
                var request = this.view.params;
                // list request has a Criteria parameter
                // we AND criteria here to existing one because 
                // otherwise we might clear filter set by 
                // an edit filter dialog if any.
                request.Criteria = Serenity.Criteria.and(request.Criteria, [['UnitsInStock'], '>', 10], [['CategoryName'], '!=', 'Condiments'], [['Discontinued'], '=', 0]);
                // TypeScript doesn't support operator overloading
                // so we had to use array syntax above to build criteria.
                // Make sure you write
                // [['Field'], '>', 10] (which means field A is greater than 10)
                // not 
                // ['A', '>', 10] (which means string 'A' is greater than 10
                return true;
            };
            GridFilteredByCriteria = __decorate([
                Serenity.Decorators.registerClass()
            ], GridFilteredByCriteria);
            return GridFilteredByCriteria;
        }(CMCPS.Northwind.ProductGrid));
        BasicSamples.GridFilteredByCriteria = GridFilteredByCriteria;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
/// <reference path="../../../Northwind/Product/ProductGrid.ts" />
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        var GroupingAndSummariesInGrid = /** @class */ (function (_super) {
            __extends(GroupingAndSummariesInGrid, _super);
            function GroupingAndSummariesInGrid(container) {
                return _super.call(this, container) || this;
            }
            GroupingAndSummariesInGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                // need to register this plugin for grouping or you'll have errors
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                this.view.setSummaryOptions({
                    aggregators: [
                        new Slick.Aggregators.Avg("UnitPrice" /* UnitPrice */),
                        new Slick.Aggregators.Sum("UnitsInStock" /* UnitsInStock */),
                        new Slick.Aggregators.Max("UnitsOnOrder" /* UnitsOnOrder */),
                        new Slick.Aggregators.Avg("ReorderLevel" /* ReorderLevel */)
                    ]
                });
                return grid;
            };
            GroupingAndSummariesInGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                Q.first(columns, function (x) { return x.field === "UnitsOnOrder" /* UnitsOnOrder */; })
                    .groupTotalsFormatter = function (totals, col) {
                    return (totals.max ? ('max: ' + Q.coalesce(totals.max[col.field], '')) : '');
                };
                Q.first(columns, function (x) { return x.field === "ReorderLevel" /* ReorderLevel */; })
                    .groupTotalsFormatter = function (totals, col) {
                    return (totals.avg ? ('avg: ' + Q.coalesce(Q.formatNumber(totals.avg[col.field], '0.'), '')) : '');
                };
                return columns;
            };
            GroupingAndSummariesInGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.showFooterRow = true;
                return opt;
            };
            GroupingAndSummariesInGrid.prototype.usePager = function () {
                return false;
            };
            GroupingAndSummariesInGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: 'Group By Category',
                        cssClass: 'expand-all-button',
                        onClick: function () { return _this.view.setGrouping([{
                                getter: "CategoryName" /* CategoryName */
                            }]); }
                    },
                    {
                        title: 'Group By Category and Supplier',
                        cssClass: 'expand-all-button',
                        onClick: function () { return _this.view.setGrouping([{
                                formatter: function (x) { return 'Category: ' + x.value + ' (' + x.count + ' items)'; },
                                getter: "CategoryName" /* CategoryName */
                            }, {
                                formatter: function (x) { return 'Supplier: ' + x.value + ' (' + x.count + ' items)'; },
                                getter: "SupplierCompanyName" /* SupplierCompanyName */
                            }]); }
                    }, {
                        title: 'No Grouping',
                        cssClass: 'collapse-all-button',
                        onClick: function () { return _this.view.setGrouping([]); }
                    }];
            };
            GroupingAndSummariesInGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], GroupingAndSummariesInGrid);
            return GroupingAndSummariesInGrid;
        }(CMCPS.Northwind.ProductGrid));
        BasicSamples.GroupingAndSummariesInGrid = GroupingAndSummariesInGrid;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        var InitialValuesForQuickFilters = /** @class */ (function (_super) {
            __extends(InitialValuesForQuickFilters, _super);
            function InitialValuesForQuickFilters(container) {
                return _super.call(this, container) || this;
            }
            /**
             * This method is called to get list of quick filters to be created for this grid.
             * By default, it returns quick filter objects corresponding to properties that
             * have a [QuickFilter] attribute at server side OrderColumns.cs
             */
            InitialValuesForQuickFilters.prototype.getQuickFilters = function () {
                // get quick filter list from base class
                var filters = _super.prototype.getQuickFilters.call(this);
                // quick filter init method is a good place to set initial
                // value for a quick filter editor, just after it is created
                Q.first(filters, function (x) { return x.field == "OrderDate" /* OrderDate */; }).init = function (w) {
                    // w is a reference to the editor for this quick filter widget
                    // here we cast it to DateEditor, and set its value as date.
                    // note that in Javascript, months are 0 based, so date below
                    // is actually 2016-05-01
                    w.valueAsDate = new Date(2016, 4, 1);
                    // setting start date was simple. but this quick filter is actually
                    // a combination of two date editors. to get reference to second one,
                    // need to find its next sibling element by its class
                    var endDate = w.element.nextAll(".s-DateEditor").getWidget(Serenity.DateEditor);
                    endDate.valueAsDate = new Date(2016, 6, 1);
                };
                Q.first(filters, function (x) { return x.field == "ShippingState" /* ShippingState */; }).init = function (w) {
                    // enum editor has a string value, so need to call toString()
                    w.value = CMCPS.Northwind.OrderShippingState.NotShipped.toString();
                };
                return filters;
            };
            /**
             * This method is another possible place to modify quick filter widgets.
             * It is where the quick filter widgets are actually created.
             *
             * By default, it calls getQuickFilters() then renders UI for these
             * quick filters.
             *
             * We could use getQuickFilters() method for ShipVia too,
             * but this is for demonstration purposes
             */
            InitialValuesForQuickFilters.prototype.createQuickFilters = function () {
                // let base class to create quick filters first
                _super.prototype.createQuickFilters.call(this);
                // find a quick filter widget by its field name
                this.findQuickFilter(Serenity.LookupEditor, "ShipVia" /* ShipVia */).values = ["1", "2"];
            };
            InitialValuesForQuickFilters = __decorate([
                Serenity.Decorators.registerClass()
            ], InitialValuesForQuickFilters);
            return InitialValuesForQuickFilters;
        }(CMCPS.Northwind.OrderGrid));
        BasicSamples.InitialValuesForQuickFilters = InitialValuesForQuickFilters;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
/// <reference path="../../../Northwind/Customer/CustomerGrid.ts" />
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        var InlineActionGrid = /** @class */ (function (_super) {
            __extends(InlineActionGrid, _super);
            function InlineActionGrid(container) {
                return _super.call(this, container) || this;
            }
            InlineActionGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: 'Delete Row',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action delete-row" title="delete">' +
                        '<i class="fa fa-trash-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                columns.splice(1, 0, {
                    field: 'View Details',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action view-details" title="view details"></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                columns.splice(2, 0, {
                    field: 'New Order',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action new-order" title="new order"></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return columns;
            };
            InlineActionGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('delete-row')) {
                        Q.confirm('Delete record?', function () {
                            CMCPS.Northwind.CustomerService.Delete({
                                EntityId: item.ID,
                            }, function (response) {
                                _this.refresh();
                            });
                        });
                    }
                    else if (target.hasClass('view-details')) {
                        this.editItem(item.ID);
                    }
                    else if (target.hasClass('new-order')) {
                        var dlg = new CMCPS.Northwind.OrderDialog();
                        this.initDialog(dlg);
                        dlg.loadEntityAndOpenDialog({
                            CustomerID: item.CustomerID
                        });
                    }
                }
            };
            InlineActionGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], InlineActionGrid);
            return InlineActionGrid;
        }(CMCPS.Northwind.CustomerGrid));
        BasicSamples.InlineActionGrid = InlineActionGrid;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        var InlineImageFormatter = /** @class */ (function () {
            function InlineImageFormatter() {
            }
            InlineImageFormatter.prototype.format = function (ctx) {
                var file = (this.fileProperty ? ctx.item[this.fileProperty] : ctx.value);
                if (!file || !file.length)
                    return "";
                var href = Q.resolveUrl("~/upload/" + file);
                if (this.thumb) {
                    var parts = file.split('.');
                    file = parts.slice(0, parts.length - 1).join('.') + '_t.jpg';
                }
                var src = Q.resolveUrl('~/upload/' + file);
                return "<a class=\"inline-image\" target='_blank' href=\"" + href + "\">" +
                    ("<img src=\"" + src + "\" style='max-height: 145px; max-width: 100%;' /></a>");
            };
            InlineImageFormatter.prototype.initializeColumn = function (column) {
                if (this.fileProperty) {
                    column.referencedFields = column.referencedFields || [];
                    column.referencedFields.push(this.fileProperty);
                }
            };
            __decorate([
                Serenity.Decorators.option()
            ], InlineImageFormatter.prototype, "fileProperty", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], InlineImageFormatter.prototype, "thumb", void 0);
            InlineImageFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], InlineImageFormatter);
            return InlineImageFormatter;
        }());
        BasicSamples.InlineImageFormatter = InlineImageFormatter;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        var InlineImageInGrid = /** @class */ (function (_super) {
            __extends(InlineImageInGrid, _super);
            function InlineImageInGrid(container) {
                return _super.call(this, container) || this;
            }
            InlineImageInGrid.prototype.getColumnsKey = function () { return "BasicSamples.InlineImageInGrid"; };
            InlineImageInGrid.prototype.getDialogType = function () { return CMCPS.Northwind.ProductDialog; };
            InlineImageInGrid.prototype.getIdProperty = function () { return CMCPS.Northwind.ProductRow.idProperty; };
            InlineImageInGrid.prototype.getLocalTextPrefix = function () { return CMCPS.Northwind.ProductRow.localTextPrefix; };
            InlineImageInGrid.prototype.getService = function () { return CMCPS.Northwind.ProductService.baseUrl; };
            InlineImageInGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.rowHeight = 150;
                return opt;
            };
            InlineImageInGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], InlineImageInGrid);
            return InlineImageInGrid;
        }(Serenity.EntityGrid));
        BasicSamples.InlineImageInGrid = InlineImageInGrid;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        var ProductExcelImportDialog = /** @class */ (function (_super) {
            __extends(ProductExcelImportDialog, _super);
            function ProductExcelImportDialog() {
                var _this = _super.call(this) || this;
                _this.form = new BasicSamples.ProductExcelImportForm(_this.idPrefix);
                return _this;
            }
            ProductExcelImportDialog.prototype.getDialogTitle = function () {
                return "Excel Import";
            };
            ProductExcelImportDialog.prototype.getDialogButtons = function () {
                var _this = this;
                return [
                    {
                        text: 'Import',
                        click: function () {
                            if (!_this.validateBeforeSave())
                                return;
                            if (_this.form.FileName.value == null ||
                                Q.isEmptyOrNull(_this.form.FileName.value.Filename)) {
                                Q.notifyError("Please select a file!");
                                return;
                            }
                            BasicSamples.ProductExcelImportService.ExcelImport({
                                FileName: _this.form.FileName.value.Filename
                            }, function (response) {
                                Q.notifyInfo('Inserted: ' + (response.Inserted || 0) +
                                    ', Updated: ' + (response.Updated || 0));
                                if (response.ErrorList != null && response.ErrorList.length > 0) {
                                    Q.notifyError(response.ErrorList.join(',\r\n '));
                                }
                                _this.dialogClose();
                            });
                        },
                    },
                    {
                        text: 'Cancel',
                        click: function () { return _this.dialogClose(); }
                    }
                ];
            };
            ProductExcelImportDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductExcelImportDialog);
            return ProductExcelImportDialog;
        }(Serenity.PropertyDialog));
        BasicSamples.ProductExcelImportDialog = ProductExcelImportDialog;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
/// <reference path="../../../Northwind/Product/ProductGrid.ts" />
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        var ProductExcelImportGrid = /** @class */ (function (_super) {
            __extends(ProductExcelImportGrid, _super);
            function ProductExcelImportGrid(container) {
                return _super.call(this, container) || this;
            }
            /**
             * This method is called to get list of buttons to be created.
             */
            ProductExcelImportGrid.prototype.getButtons = function () {
                var _this = this;
                // call base method to get list of buttons
                var buttons = _super.prototype.getButtons.call(this);
                // add our import button
                buttons.push({
                    title: 'Import From Excel',
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        // open import dialog, let it handle rest
                        var dialog = new BasicSamples.ProductExcelImportDialog();
                        dialog.element.on('dialogclose', function () {
                            _this.refresh();
                            dialog = null;
                        });
                        dialog.dialogOpen();
                    }
                });
                return buttons;
            };
            ProductExcelImportGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductExcelImportGrid);
            return ProductExcelImportGrid;
        }(CMCPS.Northwind.ProductGrid));
        BasicSamples.ProductExcelImportGrid = ProductExcelImportGrid;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        var QuickFilterCustomization = /** @class */ (function (_super) {
            __extends(QuickFilterCustomization, _super);
            function QuickFilterCustomization(container) {
                return _super.call(this, container) || this;
            }
            QuickFilterCustomization.prototype.getColumnsKey = function () { return "Northwind.Order"; };
            QuickFilterCustomization.prototype.getDialogType = function () { return CMCPS.Northwind.OrderDialog; };
            QuickFilterCustomization.prototype.getIdProperty = function () { return CMCPS.Northwind.OrderRow.idProperty; };
            QuickFilterCustomization.prototype.getLocalTextPrefix = function () { return CMCPS.Northwind.OrderRow.localTextPrefix; };
            QuickFilterCustomization.prototype.getService = function () { return CMCPS.Northwind.OrderService.baseUrl; };
            /**
             * This method is called to get list of quick filters to be created for this grid.
             * By default, it returns quick filter objects corresponding to properties that
             * have a [QuickFilter] attribute at server side OrderColumns.cs
             */
            QuickFilterCustomization.prototype.getQuickFilters = function () {
                // get quick filter list from base class, e.g. columns
                var filters = _super.prototype.getQuickFilters.call(this);
                // we start by turning CustomerID filter to a Not Equal one
                var filter = Q.first(filters, function (x) { return x.field == "CustomerID" /* CustomerID */; });
                filter.title = "Customer Not Equal To";
                filter.handler = function (h) {
                    // if filter is active, e.g. editor has some value
                    if (h.active) {
                        h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, [["CustomerID" /* CustomerID */], '!=', h.value]);
                    }
                };
                // turn order date filter to exact match, not a range
                filter = Q.first(filters, function (x) { return x.field == "OrderDate" /* OrderDate */; });
                filter.title = "Order Date Is Exactly";
                // element method in DataGrid turns this into a range editor, clear it to prevent
                filter.element = function (e) { };
                // need to override handler too, otherwise default handler will try to handle a date range
                filter.handler = function (h) {
                    if (h.active) {
                        h.request.EqualityFilter["OrderDate" /* OrderDate */] = h.value;
                    }
                    else {
                        h.request.EqualityFilter["OrderDate" /* OrderDate */] = null;
                    }
                };
                // reset these as they also expect range editors
                filter.loadState = null;
                filter.saveState = null;
                filter.displayText = null;
                // make employee filter a textbox, instead of lookup, and search by starts with
                filter = Q.first(filters, function (x) { return x.field == "EmployeeID" /* EmployeeID */; });
                filter.title = "Employee Name Starts With";
                filter.type = Serenity.StringEditor;
                filter.handler = function (h) {
                    if (h.active) {
                        h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, [["EmployeeFullName" /* EmployeeFullName */], 'like', h.value + '%']);
                    }
                };
                // turn shipping state into a boolean filter
                filter = Q.first(filters, function (x) { return x.field == "ShippingState" /* ShippingState */; });
                filter.title = "Show Only Shipped";
                filter.type = Serenity.BooleanEditor;
                filter.handler = function (h) {
                    h.active = !!h.value;
                    if (h.active) {
                        h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, ['is not null', ["ShippedDate" /* ShippedDate */]]);
                    }
                };
                // ship via filters by NOT IN
                filter = Q.first(filters, function (x) { return x.field == "ShipVia" /* ShipVia */; });
                filter.title = "Ship Via Not IN";
                filter.handler = function (h) {
                    if (h.active) {
                        h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, [["ShipVia" /* ShipVia */], 'not in', [h.value]]);
                    }
                };
                // ship country filters by NOT contains
                filter = Q.first(filters, function (x) { return x.field == "ShipCountry" /* ShipCountry */; });
                filter.title = "Ship Country NOT Contains";
                filter.type = Serenity.StringEditor;
                filter.handler = function (h) {
                    if (h.active) {
                        h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, [["ShipCountry" /* ShipCountry */], 'not like', '%' + h.value + '%']);
                    }
                };
                // ship city filters by GREATER THAN (>)
                filter = Q.first(filters, function (x) { return x.field == "ShipCity" /* ShipCity */; });
                filter.title = "Ship City Greater Than";
                filter.type = Serenity.StringEditor;
                filter.handler = function (h) {
                    if (h.active) {
                        h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, [["ShipCity" /* ShipCity */], '>', h.value]);
                    }
                };
                // create a range editor for freight
                var endFreight = null;
                filters.push({
                    field: "Freight" /* Freight */,
                    type: Serenity.DecimalEditor,
                    title: 'Freight Between',
                    element: function (e1) {
                        e1.css("width", "80px");
                        endFreight = Serenity.Widget.create({
                            type: Serenity.DecimalEditor,
                            element: function (e2) { return e2.insertAfter(e1).css("width", "80px"); }
                        });
                        endFreight.element.change(function (x) { return e1.triggerHandler("change"); });
                        $("<span/>").addClass("range-separator").text("-").insertAfter(e1);
                    },
                    handler: function (h) {
                        var active1 = h.value != null && !isNaN(h.value);
                        var active2 = endFreight.value != null && !isNaN(endFreight.value);
                        h.active = active1 || active2;
                        if (active1)
                            h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, [["Freight" /* Freight */], '>=', h.value]);
                        if (active2)
                            h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, [["Freight" /* Freight */], '<=', endFreight.value]);
                    }
                });
                return filters;
            };
            QuickFilterCustomization = __decorate([
                Serenity.Decorators.registerClass()
            ], QuickFilterCustomization);
            return QuickFilterCustomization;
        }(Serenity.EntityGrid));
        BasicSamples.QuickFilterCustomization = QuickFilterCustomization;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
/// <reference path="../../../Northwind/Supplier/SupplierGrid.ts" />
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        var RemovingAddButton = /** @class */ (function (_super) {
            __extends(RemovingAddButton, _super);
            function RemovingAddButton(container) {
                return _super.call(this, container) || this;
            }
            /**
             * This method is called to get list of buttons to be created.
             */
            RemovingAddButton.prototype.getButtons = function () {
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                // here is several methods to remove add button
                // only one is enabled, others are commented
                // METHOD 1
                // we would be able to simply return an empty button list,
                // but this would also remove all other buttons
                // return [];
                // METHOD 2
                // remove by splicing (something like delete by index)
                // here we hard code add button index (not nice!)
                // buttons.splice(0, 1);
                // METHOD 3 - recommended
                // remove by splicing, but this time find button index
                // by its css class. it is the best and safer method
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            RemovingAddButton = __decorate([
                Serenity.Decorators.registerClass()
            ], RemovingAddButton);
            return RemovingAddButton;
        }(CMCPS.Northwind.SupplierGrid));
        BasicSamples.RemovingAddButton = RemovingAddButton;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        var CustomerGrossSalesGrid = /** @class */ (function (_super) {
            __extends(CustomerGrossSalesGrid, _super);
            function CustomerGrossSalesGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            CustomerGrossSalesGrid.prototype.getColumnsKey = function () { return "BasicSamples.CustomerGrossSales"; };
            CustomerGrossSalesGrid.prototype.getIdProperty = function () { return "__id"; };
            CustomerGrossSalesGrid.prototype.getNameProperty = function () { return CMCPS.Northwind.CustomerGrossSalesRow.nameProperty; };
            CustomerGrossSalesGrid.prototype.getLocalTextPrefix = function () { return CMCPS.Northwind.CustomerGrossSalesRow.localTextPrefix; };
            CustomerGrossSalesGrid.prototype.getService = function () { return BasicSamples.CustomerGrossSalesService.baseUrl; };
            /**
             * This method is called to preprocess data returned from the list service
             */
            CustomerGrossSalesGrid.prototype.onViewProcessData = function (response) {
                response = _super.prototype.onViewProcessData.call(this, response);
                // there is no __id property in CustomerGrossSalesRow but 
                // this is javascript and we can set any property of an object
                for (var _i = 0, _a = response.Entities; _i < _a.length; _i++) {
                    var x = _a[_i];
                    x.__id = this.nextId++;
                }
                return response;
            };
            CustomerGrossSalesGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = [];
                buttons.push(CMCPS.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: BasicSamples.CustomerGrossSalesService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(CMCPS.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            CustomerGrossSalesGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                // need to register this plugin for grouping or you'll have errors
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                this.view.setSummaryOptions({
                    aggregators: [
                        new Slick.Aggregators.Sum('GrossAmount')
                    ]
                });
                this.view.setGrouping([{
                        getter: 'ContactName'
                    }]);
                return grid;
            };
            CustomerGrossSalesGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.showFooterRow = true;
                return opt;
            };
            CustomerGrossSalesGrid.prototype.usePager = function () {
                return false;
            };
            CustomerGrossSalesGrid.prototype.getQuickFilters = function () {
                var filters = _super.prototype.getQuickFilters.call(this);
                // we create a date-range quick filter, which is a composite
                // filter with two date time editors
                var orderDate = this.dateRangeQuickFilter('OrderDate', 'Order Date');
                // need to override its handler, as default date-range filter will set Criteria parameter of list request.
                // we need to set StartDate and EndDate custom parameters of our CustomerGrossSalesListRequest
                orderDate.handler = function (args) {
                    // args.widget here is the start date editor. value of a date editor is a ISO date string
                    var start = args.widget.value;
                    // to find end date editor, need to search it by its css class among siblings
                    var end = args.widget.element.nextAll('.s-DateEditor')
                        .getWidget(Serenity.DateEditor).value;
                    args.request.StartDate = start;
                    args.request.EndDate = end;
                    // active option controls when a filter editor looks active, e.g. its label is blueish
                    args.active = !Q.isEmptyOrNull(start) || !Q.isEmptyOrNull(end);
                };
                filters.push(orderDate);
                return filters;
            };
            CustomerGrossSalesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerGrossSalesGrid);
            return CustomerGrossSalesGrid;
        }(Serenity.EntityGrid));
        BasicSamples.CustomerGrossSalesGrid = CustomerGrossSalesGrid;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        var TreeGrid = /** @class */ (function (_super) {
            __extends(TreeGrid, _super);
            function TreeGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.treeMixin = new Serenity.TreeGridMixin({
                    grid: _this,
                    // bring tree items initially collapsed
                    initialCollapse: function () { return true; },
                    // which column to place tree toggle / expand/collapse button
                    toggleField: "CustomerCompanyName" /* CustomerCompanyName */,
                    getParentId: function (x) {
                        // as we don't have parentId column here, we are cheating by using modulus 10 and 50
                        // e.g. order with ID 1605 will have parent 1600, order with ID 1613 will have parent 1610
                        var parentId = Math.floor(x.OrderID / 10) * 10;
                        if (parentId == x.OrderID) {
                            parentId = Math.floor(x.OrderID / 50) * 50;
                            // orders with ID 16050 and 17000 should have NULL parent
                            if (parentId == x.OrderID)
                                return null;
                        }
                        // if you had a ParentID column, you'd just return x.ParentID
                        return parentId;
                    }
                });
                return _this;
            }
            TreeGrid.prototype.usePager = function () {
                return false;
            };
            TreeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TreeGrid);
            return TreeGrid;
        }(CMCPS.Northwind.OrderGrid));
        BasicSamples.TreeGrid = TreeGrid;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        var VSGalleryQAGrid = /** @class */ (function (_super) {
            __extends(VSGalleryQAGrid, _super);
            function VSGalleryQAGrid(container) {
                return _super.call(this, container) || this;
            }
            VSGalleryQAGrid.prototype.getColumnsKey = function () { return "BasicSamples.VSGalleryQA"; };
            VSGalleryQAGrid.prototype.getIdProperty = function () { return "ThreadId"; };
            VSGalleryQAGrid.prototype.getService = function () { return BasicSamples.VSGalleryQAService.baseUrl; };
            VSGalleryQAGrid.prototype.getButtons = function () {
                return [];
            };
            VSGalleryQAGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.rowHeight = 250;
                return opt;
            };
            VSGalleryQAGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                Q.first(columns, function (x) { return x.field == 'Posts'; }).format = function (ctx) {
                    var posts = ctx.value;
                    if (!posts || !posts.length)
                        return "";
                    var i = 0;
                    var text = "<ul class='posts'>";
                    for (var _i = 0, posts_1 = posts; _i < posts_1.length; _i++) {
                        var post = posts_1[_i];
                        text += "<li class='" + (i++ % 2 == 0 ? 'even' : 'odd') + "'><h4>";
                        text += post.PostedByName + " - ";
                        text += Q.formatDate(post.PostedOn, 'g');
                        text += "</h4><pre>";
                        text += Q.htmlEncode(post.Message);
                        text += "</pre></li>";
                    }
                    text += "</ul>";
                    return text;
                };
                return columns;
            };
            VSGalleryQAGrid.prototype.getInitialTitle = function () {
                return null;
            };
            VSGalleryQAGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], VSGalleryQAGrid);
            return VSGalleryQAGrid;
        }(Serenity.EntityGrid));
        BasicSamples.VSGalleryQAGrid = VSGalleryQAGrid;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        var ViewWithoutIDGrid = /** @class */ (function (_super) {
            __extends(ViewWithoutIDGrid, _super);
            function ViewWithoutIDGrid(container) {
                var _this = _super.call(this, container) || this;
                // this is our autoincrementing counter
                _this.nextId = 1;
                return _this;
            }
            ViewWithoutIDGrid.prototype.getColumnsKey = function () { return "Northwind.SalesByCategory"; };
            ViewWithoutIDGrid.prototype.getIdProperty = function () { return "__id"; };
            ViewWithoutIDGrid.prototype.getNameProperty = function () { return CMCPS.Northwind.SalesByCategoryRow.nameProperty; };
            ViewWithoutIDGrid.prototype.getLocalTextPrefix = function () { return CMCPS.Northwind.SalesByCategoryRow.localTextPrefix; };
            ViewWithoutIDGrid.prototype.getService = function () { return CMCPS.Northwind.SalesByCategoryService.baseUrl; };
            /**
             * This method is called to preprocess data returned from the list service
             */
            ViewWithoutIDGrid.prototype.onViewProcessData = function (response) {
                response = _super.prototype.onViewProcessData.call(this, response);
                // there is no __id property in SalesByCategoryRow but 
                // this is javascript and we can set any property of an object
                for (var _i = 0, _a = response.Entities; _i < _a.length; _i++) {
                    var x = _a[_i];
                    x.__id = this.nextId++;
                }
                return response;
            };
            ViewWithoutIDGrid.prototype.getButtons = function () {
                return [];
            };
            ViewWithoutIDGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ViewWithoutIDGrid);
            return ViewWithoutIDGrid;
        }(Serenity.EntityGrid));
        BasicSamples.ViewWithoutIDGrid = ViewWithoutIDGrid;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var CMCPS;
(function (CMCPS) {
    var BasicSamples;
    (function (BasicSamples) {
        var WrappedHeadersGrid = /** @class */ (function (_super) {
            __extends(WrappedHeadersGrid, _super);
            function WrappedHeadersGrid(container) {
                return _super.call(this, container) || this;
            }
            WrappedHeadersGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], WrappedHeadersGrid);
            return WrappedHeadersGrid;
        }(CMCPS.Northwind.OrderGrid));
        BasicSamples.WrappedHeadersGrid = WrappedHeadersGrid;
    })(BasicSamples = CMCPS.BasicSamples || (CMCPS.BasicSamples = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = CMCPS.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = CMCPS.LanguageList || (CMCPS.LanguageList = {}));
})(CMCPS || (CMCPS = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var CMCPS;
(function (CMCPS) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('CMCPS');
        Serenity.EntityDialog.defaultLanguageList = CMCPS.LanguageList.getValue;
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
    })(ScriptInitialization = CMCPS.ScriptInitialization || (CMCPS.ScriptInitialization = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var BasicProgressDialog = /** @class */ (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    CMCPS.BasicProgressDialog = BasicProgressDialog;
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.on('dialogbeforeclose panelbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        if (element.hasClass('ui-dialog-content'))
                            element.dialog('close');
                        else if (element.hasClass('s-Panel'))
                            Serenity.TemplatedDialog.closePanel(element);
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = CMCPS.DialogUtils || (CMCPS.DialogUtils = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var EditTimeEditor = /** @class */ (function (_super) {
        __extends(EditTimeEditor, _super);
        function EditTimeEditor(input, opt) {
            var _this = _super.call(this, input, opt) || this;
            input.addClass('hours');
            var spanStyle = 'style="margin-left: 6px; min-width: 10px; max-width: 10px;"';
            var stdClass = 'editor s-EditTimeEditor ';
            var colon1 = $('<span ' + spanStyle + ' />').text(':').addClass(stdClass + 'colon1').insertAfter(input);
            var minutes = $('<input type="number" min="0" max="59"/>').addClass(stdClass + 'minutes').addClass('flexify').insertAfter(colon1);
            if (opt.showSeconds) {
                var colon2 = $('<span ' + spanStyle + ' />').text(':').addClass(stdClass + 'colon2').insertAfter(minutes);
                $('<input type="number" min="0" max="59"/>').addClass(stdClass + 'seconds').addClass('flexify').insertAfter(colon2);
            }
            return _this;
        }
        Object.defineProperty(EditTimeEditor.prototype, "value", {
            // Implement get and set
            get: function () {
                var hours = this.element.val();
                hours = ("0" + hours).slice(-2);
                var mins = this.element.siblings('.minutes').val();
                mins = ("0" + mins).slice(-2);
                var retVal = hours + ':' + mins;
                if (this.options.showSeconds) {
                    var secs = this.element.siblings('.seconds').val();
                    secs = ("0" + secs).slice(-2);
                    retVal += ':' + secs;
                }
                return retVal;
            },
            set: function (value) {
                if (!value)
                    return;
                var vals = value.split(':');
                this.element.val(vals[0]);
                this.element.siblings('.minutes').val(vals[1]);
                if (this.options.showSeconds)
                    this.element.siblings('.seconds').val(vals[2]);
            },
            enumerable: true,
            configurable: true
        });
        EditTimeEditor.prototype.getEditValue = function (property, target) {
            target[property.name] = this.value;
        };
        EditTimeEditor.prototype.setEditValue = function (source, property) {
            this.value = source[property.name];
        };
        // Implement get and set read-only
        EditTimeEditor.prototype.get_readOnly = function () {
            return !(this.element.attr('readonly') == null);
        };
        EditTimeEditor.prototype.set_readOnly = function (value) {
            if (value) {
                this.element.attr('readonly', 'readonly').addClass('readonly');
                this.element.nextAll('.s-EditTimeEditor:not(span)').attr('readonly', 'readonly').addClass('readonly');
            }
            else {
                this.element.removeAttr('readonly').removeClass('readonly');
                this.element.nextAll('.s-EditTimeEditor:not(span)').removeAttr('readonly').removeClass('readonly');
            }
        };
        EditTimeEditor = __decorate([
            Serenity.Decorators.element("<input type='number' min='0' max='23'/>"),
            Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue, Serenity.IReadOnly])
        ], EditTimeEditor);
        return EditTimeEditor;
    }(Serenity.Widget));
    CMCPS.EditTimeEditor = EditTimeEditor;
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = /** @class */ (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + Q.attrEncode(x) + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "enumKey", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "allowClear", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
            EnumSelectFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EnumSelectFormatter);
            return EnumSelectFormatter;
        }());
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = CMCPS.Common || (CMCPS.Common = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.hint, 'Excel'),
                    title: Q.coalesce(options.title, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = CMCPS.Common || (CMCPS.Common = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var LKNamePinNumber = /** @class */ (function (_super) {
        __extends(LKNamePinNumber, _super);
        function LKNamePinNumber(container, opt) {
            var _this = _super.call(this, container, opt) || this;
            container.data("patientName", opt.PatientName);
            container.data("pinNumber", opt.PinNumber);
            return _this;
        }
        LKNamePinNumber.prototype.getSelect2Options = function () {
            var selec2Options = _super.prototype.getSelect2Options.call(this);
            selec2Options.formatResult = this.myFormatResult;
            selec2Options.formatSelection = this.myFormatSelection;
            return selec2Options;
        };
        LKNamePinNumber.prototype.myFormatSelection = function (item) {
            if (item === undefined)
                return null;
            var name = item.source[this.element.data("patientName")];
            var pin = item.source[this.element.data("pinNumber")];
            var title = "Name: " + name;
            title += " - " + pin;
            return "<div title='" + title + "'><b>" + name + "</b>&nbsp;-&nbsp;" + pin + "</div>";
        };
        LKNamePinNumber.prototype.myFormatResult = function (item) {
            var name = item.source[this.element.data("patientName")];
            var pin = item.source[this.element.data("pinNumber")];
            var title = "Code: " + name;
            title += " - " + pin;
            var markup = '<div class="row">' +
                '<div class="col-xs-2" style="white-space: nowrap"><b>' + name + "</b>" + "</div>" +
                '<div class="col-xs-10"><small>' + pin + '</small></div>' +
                '</div>';
            // This for search on code and description
            item.text = name + " " + pin;
            return markup;
        };
        LKNamePinNumber = __decorate([
            Serenity.Decorators.registerEditor()
        ], LKNamePinNumber);
        return LKNamePinNumber;
    }(Serenity.LookupEditorBase));
    CMCPS.LKNamePinNumber = LKNamePinNumber;
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    var StaticTextBlock = /** @class */ (function (_super) {
        __extends(StaticTextBlock, _super);
        function StaticTextBlock(container, options) {
            var _this = _super.call(this, container, options) || this;
            // hide the caption label for this editor if in a form. ugly hack
            if (_this.options.hideLabel)
                _this.element.closest('.field').find('.caption').hide();
            _this.updateElementContent();
            return _this;
        }
        StaticTextBlock.prototype.updateElementContent = function () {
            var text = Q.coalesce(this.options.text, this.value);
            // if isLocalText is set, text is actually a local text key
            if (this.options.isLocalText)
                text = Q.text(text);
            // don't html encode if isHtml option is true
            if (this.options.isHtml)
                this.element.html(text);
            else
                this.element.text(text);
        };
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        StaticTextBlock.prototype.setEditValue = function (source, property) {
            if (this.options.text == null) {
                this.value = Q.coalesce(this.options.text, source[property.name]);
                this.updateElementContent();
            }
        };
        StaticTextBlock = __decorate([
            Serenity.Decorators.element("<div/>"),
            Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
        ], StaticTextBlock);
        return StaticTextBlock;
    }(Serenity.Widget));
    CMCPS.StaticTextBlock = StaticTextBlock;
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Common;
    (function (Common) {
        var LanguageSelection = /** @class */ (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    $.cookie('LanguagePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = CMCPS.Common || (CMCPS.Common = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Common;
    (function (Common) {
        var SidebarSearch = /** @class */ (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = CMCPS.Common || (CMCPS.Common = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Common;
    (function (Common) {
        var ThemeSelection = /** @class */ (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('ThemePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    var theme = select.val() || '';
                    var darkSidebar = theme.indexOf('light') < 0;
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + theme)
                        .toggleClass('dark-sidebar', darkSidebar)
                        .toggleClass('light-sidebar', !darkSidebar);
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = CMCPS.Common || (CMCPS.Common = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 20, left: 25, right: 25, bottom: pageNumbers ? 20 : 25 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        // Print header of page
                        if (options.printDateTimeHeader == null || options.printDateTimeHeader) {
                            var beforePage = function (data) {
                                doc.setFontStyle('normal');
                                doc.setFontSize(8);
                                // Date and time of the report
                                doc.autoTableText(Q.formatDate(new Date(), "dd-MM-yyyy HH:mm"), doc.internal.pageSize.width - autoOptions.margin.right, 13, {
                                    halign: 'right'
                                });
                            };
                            autoOptions.beforePageContent = beforePage;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.fileName || options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        if (output == 'datauri')
                            doc.output(output);
                        else {
                            var tmpOut = doc.output('datauristring');
                            if (output == 'dataurlnewwindow') {
                                var fileTmpName = options.reportTitle || g.getTitle();
                                var url_with_name = tmpOut.replace("data:application/pdf;", "data:application/pdf;name=" + fileTmpName + ".pdf;");
                                var html = '<html>' +
                                    '<style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style>' +
                                    '<body>' +
                                    '<p></p>' +
                                    '<iframe type="application/pdf" src="' + url_with_name + '"></iframe>' +
                                    '</body></html>';
                                var a = window.open("about:blank", "_blank");
                                a.document.write(html);
                                a.document.close();
                            }
                        }
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = CMCPS.Common || (CMCPS.Common = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Common;
    (function (Common) {
        var ReportDialog = /** @class */ (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = CMCPS.Common || (CMCPS.Common = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = CMCPS.Common || (CMCPS.Common = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Common;
    (function (Common) {
        var ReportPage = /** @class */ (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = CMCPS.Common || (CMCPS.Common = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = /** @class */ (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = CMCPS.Common || (CMCPS.Common = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var AdmissionDialog = /** @class */ (function (_super) {
            __extends(AdmissionDialog, _super);
            function AdmissionDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Default.AdmissionForm(_this.idPrefix);
                _this.form.LymphNode.changeSelect2(function (x) {
                    var lymphNode = Q.toId(_this.form.LymphNode.value);
                    if (lymphNode == 1) {
                        _this.form.Site.getGridField().toggle(true);
                        _this.form.Size.getGridField().toggle(true);
                        _this.form.Tenderness.getGridField().toggle(true);
                        _this.form.Consistency.getGridField().toggle(true);
                        _this.form.Fixation.getGridField().toggle(true);
                        _this.form.LocalTemperature.getGridField().toggle(true);
                        _this.form.DischargingSinus.getGridField().toggle(true);
                    }
                    else {
                        _this.form.Site.getGridField().toggle(false);
                        _this.form.Size.getGridField().toggle(false);
                        _this.form.Tenderness.getGridField().toggle(false);
                        _this.form.Consistency.getGridField().toggle(false);
                        _this.form.Fixation.getGridField().toggle(false);
                        _this.form.LocalTemperature.getGridField().toggle(false);
                        _this.form.DischargingSinus.getGridField().toggle(false);
                    }
                });
                _this.form.IsNAD.change(function (x) {
                    var rr = Q.toId(_this.form.IsNAD.value);
                    if (rr == "false") {
                        _this.form.RR.getGridField().toggle(true);
                        _this.form.Muscles.getGridField().toggle(true);
                        _this.form.Stridor.getGridField().toggle(true);
                        _this.form.CyanosisReSelect.getGridField().toggle(true);
                        _this.form.ClubbingReSelect.getGridField().toggle(true);
                        _this.form.NicotineStain.getGridField().toggle(true);
                        _this.form.Asterixis.getGridField().toggle(true);
                        _this.form.JVPReSelect.getGridField().toggle(true);
                        _this.form.LymphReSelect.getGridField().toggle(true);
                        _this.form.ScarMark.getGridField().toggle(true);
                        _this.form.Swelling.getGridField().toggle(true);
                        _this.form.ShapeChest.getGridField().toggle(true);
                        _this.form.VisibleVein.getGridField().toggle(true);
                        _this.form.ApexBeat.getGridField().toggle(true);
                        _this.form.SupraclavicularIndrawing.getGridField().toggle(true);
                        _this.form.TrachealTag.getGridField().toggle(true);
                        _this.form.ICTSitu.getGridField().toggle(true);
                        _this.form.RadiationMark.getGridField().toggle(true);
                        _this.form.PositionTrachea.getGridField().toggle(true);
                        _this.form.PositionApexBeat.getGridField().toggle(true);
                        _this.form.VocalFremitus.getGridField().toggle(true);
                        _this.form.ChestExpansibility.getGridField().toggle(true);
                        _this.form.PercussionList.getGridField().toggle(true);
                        _this.form.AuscultationList.getGridField().toggle(true);
                        _this.form.BreathSoundList.getGridField().toggle(true);
                        _this.form.VocalResonanceList.getGridField().toggle(true);
                        _this.form.AddedSound.getGridField().toggle(true);
                        _this.form.Rhonchi.getGridField().toggle(true);
                        _this.form.Crepitation.getGridField().toggle(true);
                        _this.form.Rub.getGridField().toggle(true);
                        _this.form.RR.value = _this.form.RespRate.value;
                        _this.form.CyanosisReSelect.value = _this.form.Cyanosis.value;
                        _this.form.ClubbingReSelect.value = _this.form.Clubbing.value;
                        _this.form.JVPReSelect.value = _this.form.JVP.value;
                        _this.form.LymphReSelect.value = _this.form.LymphNode.value;
                    }
                    else {
                        _this.form.RR.getGridField().toggle(false);
                        _this.form.Muscles.getGridField().toggle(false);
                        _this.form.Stridor.getGridField().toggle(false);
                        _this.form.CyanosisReSelect.getGridField().toggle(false);
                        _this.form.ClubbingReSelect.getGridField().toggle(false);
                        _this.form.NicotineStain.getGridField().toggle(false);
                        _this.form.Asterixis.getGridField().toggle(false);
                        _this.form.JVPReSelect.getGridField().toggle(false);
                        _this.form.LymphReSelect.getGridField().toggle(false);
                        _this.form.ScarMark.getGridField().toggle(false);
                        _this.form.Swelling.getGridField().toggle(false);
                        _this.form.ShapeChest.getGridField().toggle(false);
                        _this.form.VisibleVein.getGridField().toggle(false);
                        _this.form.ApexBeat.getGridField().toggle(false);
                        _this.form.SupraclavicularIndrawing.getGridField().toggle(false);
                        _this.form.TrachealTag.getGridField().toggle(false);
                        _this.form.ICTSitu.getGridField().toggle(false);
                        _this.form.RadiationMark.getGridField().toggle(false);
                        _this.form.PositionTrachea.getGridField().toggle(false);
                        _this.form.PositionApexBeat.getGridField().toggle(false);
                        _this.form.VocalFremitus.getGridField().toggle(false);
                        _this.form.ChestExpansibility.getGridField().toggle(false);
                        _this.form.PercussionList.getGridField().toggle(false);
                        _this.form.AuscultationList.getGridField().toggle(false);
                        _this.form.BreathSoundList.getGridField().toggle(false);
                        _this.form.VocalResonanceList.getGridField().toggle(false);
                        _this.form.AddedSound.getGridField().toggle(false);
                        _this.form.Rhonchi.getGridField().toggle(false);
                        _this.form.Crepitation.getGridField().toggle(false);
                        _this.form.Rub.getGridField().toggle(false);
                    }
                });
                _this.form.AddedSound.changeSelect2(function (x) {
                    var addedSound = Q.toId(_this.form.AddedSound.value);
                    if (addedSound == "1") {
                        _this.form.Rhonchi.getGridField().toggle(false);
                        _this.form.Crepitation.getGridField().toggle(false);
                        _this.form.Rub.getGridField().toggle(false);
                    }
                });
                _this.form.Skin.changeSelect2(function (x) {
                    var skin = Q.toId(_this.form.Skin.value);
                    if (skin == "2") {
                        _this.form.SkinText.getGridField().toggle(true);
                    }
                    else {
                        _this.form.SkinText.getGridField().toggle(false);
                    }
                });
                _this.form.AddedSound.change(function (x) {
                    var addedSound = Q.toId(_this.form.AddedSound.value);
                    if (addedSound == null) {
                        _this.form.Rhonchi.getGridField().toggle(true);
                        _this.form.Crepitation.getGridField().toggle(true);
                        _this.form.Rub.getGridField().toggle(true);
                    }
                });
                var btnMajorSurgery = $('.AddtoMajorSurgery')[0];
                var btnAgeAtMenarcheLabel = $('.AgeAtMenarcheLabel')[0];
                var btnAgeAtMenarcheLabel1 = $('.AgeAtMenarcheLabel1')[0];
                var btnAgeAtMenarcheLabel2 = $('.AgeAtMenarcheLabel2')[0];
                btnAgeAtMenarcheLabel.innerHTML = "\n                <span class=\"label label-default AgeAtMenarcheLabel\" style=\"font-size:15px\">years</span>";
                btnAgeAtMenarcheLabel1.innerHTML = "\n                <span class=\"label label-default AgeAtMenarcheLabel1\" style=\"font-size:15px\">years</span>";
                btnAgeAtMenarcheLabel2.innerHTML = "\n                <span class=\"label label-default AgeAtMenarcheLabel1\" style=\"font-size:15px\">years</span>";
                btnMajorSurgery.innerHTML = "\n                <a href= \"javascript:;\" class=\"btn btn-success AddMajorSurgery\"> <i class=\"fa fa-fw fa-plus-circle\"> </i>Add</a>";
                $('.AddtoMajorSurgery').click(function (e) { return _this.addtoMajorSurgeryArea(); });
                return _this;
            }
            AdmissionDialog.prototype.getFormKey = function () { return Default.AdmissionForm.formKey; };
            AdmissionDialog.prototype.getIdProperty = function () { return Default.AdmissionRow.idProperty; };
            AdmissionDialog.prototype.getLocalTextPrefix = function () { return Default.AdmissionRow.localTextPrefix; };
            AdmissionDialog.prototype.getNameProperty = function () { return Default.AdmissionRow.nameProperty; };
            AdmissionDialog.prototype.getService = function () { return Default.AdmissionService.baseUrl; };
            AdmissionDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                this.form.Site.getGridField().toggle(false);
                this.form.Size.getGridField().toggle(false);
                this.form.Tenderness.getGridField().toggle(false);
                this.form.Consistency.getGridField().toggle(false);
                this.form.Fixation.getGridField().toggle(false);
                this.form.LocalTemperature.getGridField().toggle(false);
                this.form.DischargingSinus.getGridField().toggle(false);
                this.form.RR.getGridField().toggle(false);
                this.form.Muscles.getGridField().toggle(false);
                this.form.Stridor.getGridField().toggle(false);
                this.form.CyanosisReSelect.getGridField().toggle(false);
                this.form.ClubbingReSelect.getGridField().toggle(false);
                this.form.NicotineStain.getGridField().toggle(false);
                this.form.Asterixis.getGridField().toggle(false);
                this.form.JVPReSelect.getGridField().toggle(false);
                this.form.LymphReSelect.getGridField().toggle(false);
                this.form.ScarMark.getGridField().toggle(false);
                this.form.Swelling.getGridField().toggle(false);
                this.form.ShapeChest.getGridField().toggle(false);
                this.form.VisibleVein.getGridField().toggle(false);
                this.form.ApexBeat.getGridField().toggle(false);
                this.form.SupraclavicularIndrawing.getGridField().toggle(false);
                this.form.TrachealTag.getGridField().toggle(false);
                this.form.ICTSitu.getGridField().toggle(false);
                this.form.RadiationMark.getGridField().toggle(false);
                this.form.PositionTrachea.getGridField().toggle(false);
                this.form.PositionApexBeat.getGridField().toggle(false);
                this.form.VocalFremitus.getGridField().toggle(false);
                this.form.ChestExpansibility.getGridField().toggle(false);
                this.form.PercussionList.getGridField().toggle(false);
                this.form.AuscultationList.getGridField().toggle(false);
                this.form.BreathSoundList.getGridField().toggle(false);
                this.form.VocalResonanceList.getGridField().toggle(false);
                this.form.AddedSound.getGridField().toggle(false);
                this.form.Rhonchi.getGridField().toggle(false);
                this.form.Crepitation.getGridField().toggle(false);
                this.form.Rub.getGridField().toggle(false);
                this.form.SkinText.getGridField().toggle(false);
                if (this.isNew())
                    this.form.Socioeconomichistory.value = "Lower Class\nMiddle Class\nUpper Class";
                this.form.IsNAD.value = true;
                this.form.Skin.value = "1";
            };
            AdmissionDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push(CMCPS.Common.ReportHelper.createToolButton({
                    title: 'Admission Details',
                    cssClass: 'export-pdf-button',
                    reportKey: 'Default.Admission',
                    getParams: function () { return ({
                        AdmissionID: _this.get_entityId()
                    }); }
                }));
                return buttons;
            };
            AdmissionDialog.prototype.addtoMajorSurgeryArea = function () {
                if (this.form.MajorSurgeryId.value != null) {
                    if (this.form.MajorSurgery.value == "") {
                        this.form.MajorSurgery.value = this.form.MajorSurgeryId.text;
                    }
                    else {
                        this.form.MajorSurgery.value = this.form.MajorSurgery.value + "\n" + this.form.MajorSurgeryId.text;
                    }
                }
            };
            AdmissionDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], AdmissionDialog);
            return AdmissionDialog;
        }(Serenity.EntityDialog));
        Default.AdmissionDialog = AdmissionDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var AdmissionGrid = /** @class */ (function (_super) {
            __extends(AdmissionGrid, _super);
            function AdmissionGrid(container) {
                return _super.call(this, container) || this;
            }
            AdmissionGrid.prototype.getColumnsKey = function () { return 'Default.Admission'; };
            AdmissionGrid.prototype.getDialogType = function () { return Default.AdmissionDialog; };
            AdmissionGrid.prototype.getIdProperty = function () { return Default.AdmissionRow.idProperty; };
            AdmissionGrid.prototype.getLocalTextPrefix = function () { return Default.AdmissionRow.localTextPrefix; };
            AdmissionGrid.prototype.getService = function () { return Default.AdmissionService.baseUrl; };
            //getSlickOptions() {
            //    var opt = super.getSlickOptions();
            //    //opt.rowHeight = 36;
            //    opt.defaultColumnWidth = 100;
            //    return opt;
            //}
            //Export To Excel & PDF
            AdmissionGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(CMCPS.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Default/Admission/ListExcel',
                    separator: true
                }));
                buttons.push(CMCPS.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    reportTitle: "Patient's Summary Report",
                    fileName: "Patient's_Summary_Report",
                    separator: true,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            AdmissionGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: 'Delete Row',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action delete-row" title="delete">' +
                        '<i class="fa fa-trash-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                columns.splice(1, 0, {
                    field: 'Print Admission',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action print-invoice" title="Admission Details">' +
                        '<i class="fa fa-file-pdf-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return columns;
            };
            AdmissionGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('print-invoice')) {
                        CMCPS.Common.ReportHelper.execute({
                            reportKey: 'Default.Admission',
                            params: {
                                AdmissionID: item.AdmissionId
                            }
                        });
                    }
                    else if (target.hasClass('delete-row')) {
                        Q.confirm('Delete record?', function () {
                            CMCPS.Default.AdmissionService.Delete({
                                EntityId: item.AdmissionId,
                            }, function (response) {
                                _this.refresh();
                            });
                        });
                    }
                }
            };
            AdmissionGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], AdmissionGrid);
            return AdmissionGrid;
        }(Serenity.EntityGrid));
        Default.AdmissionGrid = AdmissionGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var BirthHistoryListFormatter = /** @class */ (function () {
            function BirthHistoryListFormatter() {
            }
            BirthHistoryListFormatter.prototype.format = function (ctx) {
                var idList = ctx.value;
                if (!idList || !idList.length)
                    return "";
                var byId = Default.BirthHistoryRow.getLookup().itemById;
                return idList.map(function (x) {
                    var g = byId[x];
                    if (!g)
                        return x.toString();
                    return Q.htmlEncode(g.BirthHistory);
                }).join(", ");
            };
            BirthHistoryListFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], BirthHistoryListFormatter);
            return BirthHistoryListFormatter;
        }());
        Default.BirthHistoryListFormatter = BirthHistoryListFormatter;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var PatientListFormatter = /** @class */ (function () {
            function PatientListFormatter() {
            }
            PatientListFormatter.prototype.format = function (ctx) {
                var idList2 = ctx.value;
                if (!idList2)
                    return "";
                var byId = Default.AdmissionRow.getLookup().itemById;
                var z;
                return idList2 = byId[idList2] ? byId[idList2].Name + ' ' + byId[idList2].UnitRegNumber : idList2;
            };
            PatientListFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], PatientListFormatter);
            return PatientListFormatter;
        }());
        Default.PatientListFormatter = PatientListFormatter;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var AdmissionCcDetailEditor = /** @class */ (function (_super) {
            __extends(AdmissionCcDetailEditor, _super);
            function AdmissionCcDetailEditor(container) {
                return _super.call(this, container) || this;
            }
            AdmissionCcDetailEditor.prototype.getColumnsKey = function () { return "Default.AdmissionCcDetails"; };
            AdmissionCcDetailEditor.prototype.getDialogType = function () { return Default.AdmissionCcDetailsDialog; };
            AdmissionCcDetailEditor.prototype.getLocalTextPrefix = function () { return Default.AdmissionCcDetailsRow.localTextPrefix; };
            AdmissionCcDetailEditor.prototype.getAddButtonCaption = function () {
                return "Add";
            };
            AdmissionCcDetailEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                row.PComplaints = Default.PresentingComplaintsRow.getLookup().itemById[row.PrComplaintsId].PComplaints;
                return true;
            };
            AdmissionCcDetailEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], AdmissionCcDetailEditor);
            return AdmissionCcDetailEditor;
        }(CMCPS.Common.GridEditorBase));
        Default.AdmissionCcDetailEditor = AdmissionCcDetailEditor;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var AdmissionCcDetailsDialog = /** @class */ (function (_super) {
            __extends(AdmissionCcDetailsDialog, _super);
            function AdmissionCcDetailsDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Default.AdmissionCcDetailsForm(_this.idPrefix);
                return _this;
            }
            AdmissionCcDetailsDialog.prototype.getFormKey = function () { return Default.AdmissionCcDetailsForm.formKey; };
            AdmissionCcDetailsDialog.prototype.getNameProperty = function () { return Default.AdmissionCcDetailsRow.nameProperty; };
            AdmissionCcDetailsDialog.prototype.getLocalTextPrefix = function () { return Default.AdmissionCcDetailsRow.localTextPrefix; };
            AdmissionCcDetailsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AdmissionCcDetailsDialog);
            return AdmissionCcDetailsDialog;
        }(CMCPS.Common.GridEditorDialog));
        Default.AdmissionCcDetailsDialog = AdmissionCcDetailsDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var AdmissionPpDetailEditor = /** @class */ (function (_super) {
            __extends(AdmissionPpDetailEditor, _super);
            function AdmissionPpDetailEditor(container) {
                return _super.call(this, container) || this;
            }
            AdmissionPpDetailEditor.prototype.getColumnsKey = function () { return "Default.AdmissionPpDetails"; };
            AdmissionPpDetailEditor.prototype.getDialogType = function () { return Default.AdmissionPpDetailsDialog; };
            AdmissionPpDetailEditor.prototype.getLocalTextPrefix = function () { return Default.AdmissionPpDetailsRow.localTextPrefix; };
            AdmissionPpDetailEditor.prototype.getAddButtonCaption = function () {
                return "Add";
            };
            AdmissionPpDetailEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                row.SmokingId = Default.AdmissionPpDetailsRow.getLookup().itemById[row.SmokingId].SmokingId;
                return true;
            };
            AdmissionPpDetailEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], AdmissionPpDetailEditor);
            return AdmissionPpDetailEditor;
        }(CMCPS.Common.GridEditorBase));
        Default.AdmissionPpDetailEditor = AdmissionPpDetailEditor;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var AdmissionPpDetailsDialog = /** @class */ (function (_super) {
            __extends(AdmissionPpDetailsDialog, _super);
            function AdmissionPpDetailsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.AdmissionPpDetailsForm(_this.idPrefix);
                return _this;
            }
            AdmissionPpDetailsDialog.prototype.getFormKey = function () { return Default.AdmissionPpDetailsForm.formKey; };
            AdmissionPpDetailsDialog.prototype.getIdProperty = function () { return Default.AdmissionPpDetailsRow.idProperty; };
            AdmissionPpDetailsDialog.prototype.getLocalTextPrefix = function () { return Default.AdmissionPpDetailsRow.localTextPrefix; };
            AdmissionPpDetailsDialog.prototype.getService = function () { return Default.AdmissionPpDetailsService.baseUrl; };
            AdmissionPpDetailsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AdmissionPpDetailsDialog);
            return AdmissionPpDetailsDialog;
        }(Serenity.EntityDialog));
        Default.AdmissionPpDetailsDialog = AdmissionPpDetailsDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var AdmissionPpDetailsGrid = /** @class */ (function (_super) {
            __extends(AdmissionPpDetailsGrid, _super);
            function AdmissionPpDetailsGrid(container) {
                return _super.call(this, container) || this;
            }
            AdmissionPpDetailsGrid.prototype.getColumnsKey = function () { return 'Default.AdmissionPpDetails'; };
            AdmissionPpDetailsGrid.prototype.getDialogType = function () { return Default.AdmissionPpDetailsDialog; };
            AdmissionPpDetailsGrid.prototype.getIdProperty = function () { return Default.AdmissionPpDetailsRow.idProperty; };
            AdmissionPpDetailsGrid.prototype.getLocalTextPrefix = function () { return Default.AdmissionPpDetailsRow.localTextPrefix; };
            AdmissionPpDetailsGrid.prototype.getService = function () { return Default.AdmissionPpDetailsService.baseUrl; };
            AdmissionPpDetailsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AdmissionPpDetailsGrid);
            return AdmissionPpDetailsGrid;
        }(Serenity.EntityGrid));
        Default.AdmissionPpDetailsGrid = AdmissionPpDetailsGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var AnesthesiaDialog = /** @class */ (function (_super) {
            __extends(AnesthesiaDialog, _super);
            function AnesthesiaDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.AnesthesiaForm(_this.idPrefix);
                return _this;
            }
            AnesthesiaDialog.prototype.getFormKey = function () { return Default.AnesthesiaForm.formKey; };
            AnesthesiaDialog.prototype.getIdProperty = function () { return Default.AnesthesiaRow.idProperty; };
            AnesthesiaDialog.prototype.getLocalTextPrefix = function () { return Default.AnesthesiaRow.localTextPrefix; };
            AnesthesiaDialog.prototype.getNameProperty = function () { return Default.AnesthesiaRow.nameProperty; };
            AnesthesiaDialog.prototype.getService = function () { return Default.AnesthesiaService.baseUrl; };
            AnesthesiaDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AnesthesiaDialog);
            return AnesthesiaDialog;
        }(Serenity.EntityDialog));
        Default.AnesthesiaDialog = AnesthesiaDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var AnesthesiaGrid = /** @class */ (function (_super) {
            __extends(AnesthesiaGrid, _super);
            function AnesthesiaGrid(container) {
                return _super.call(this, container) || this;
            }
            AnesthesiaGrid.prototype.getColumnsKey = function () { return 'Default.Anesthesia'; };
            AnesthesiaGrid.prototype.getDialogType = function () { return Default.AnesthesiaDialog; };
            AnesthesiaGrid.prototype.getIdProperty = function () { return Default.AnesthesiaRow.idProperty; };
            AnesthesiaGrid.prototype.getLocalTextPrefix = function () { return Default.AnesthesiaRow.localTextPrefix; };
            AnesthesiaGrid.prototype.getService = function () { return Default.AnesthesiaService.baseUrl; };
            AnesthesiaGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AnesthesiaGrid);
            return AnesthesiaGrid;
        }(Serenity.EntityGrid));
        Default.AnesthesiaGrid = AnesthesiaGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var AnesthetistDialog = /** @class */ (function (_super) {
            __extends(AnesthetistDialog, _super);
            function AnesthetistDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.AnesthetistForm(_this.idPrefix);
                return _this;
            }
            AnesthetistDialog.prototype.getFormKey = function () { return Default.AnesthetistForm.formKey; };
            AnesthetistDialog.prototype.getIdProperty = function () { return Default.AnesthetistRow.idProperty; };
            AnesthetistDialog.prototype.getLocalTextPrefix = function () { return Default.AnesthetistRow.localTextPrefix; };
            AnesthetistDialog.prototype.getNameProperty = function () { return Default.AnesthetistRow.nameProperty; };
            AnesthetistDialog.prototype.getService = function () { return Default.AnesthetistService.baseUrl; };
            AnesthetistDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AnesthetistDialog);
            return AnesthetistDialog;
        }(Serenity.EntityDialog));
        Default.AnesthetistDialog = AnesthetistDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var AnesthetistGrid = /** @class */ (function (_super) {
            __extends(AnesthetistGrid, _super);
            function AnesthetistGrid(container) {
                return _super.call(this, container) || this;
            }
            AnesthetistGrid.prototype.getColumnsKey = function () { return 'Default.Anesthetist'; };
            AnesthetistGrid.prototype.getDialogType = function () { return Default.AnesthetistDialog; };
            AnesthetistGrid.prototype.getIdProperty = function () { return Default.AnesthetistRow.idProperty; };
            AnesthetistGrid.prototype.getLocalTextPrefix = function () { return Default.AnesthetistRow.localTextPrefix; };
            AnesthetistGrid.prototype.getService = function () { return Default.AnesthetistService.baseUrl; };
            AnesthetistGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AnesthetistGrid);
            return AnesthetistGrid;
        }(Serenity.EntityGrid));
        Default.AnesthetistGrid = AnesthetistGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var AntenatalDialog = /** @class */ (function (_super) {
            __extends(AntenatalDialog, _super);
            function AntenatalDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.AntenatalForm(_this.idPrefix);
                return _this;
            }
            AntenatalDialog.prototype.getFormKey = function () { return Default.AntenatalForm.formKey; };
            AntenatalDialog.prototype.getIdProperty = function () { return Default.AntenatalRow.idProperty; };
            AntenatalDialog.prototype.getLocalTextPrefix = function () { return Default.AntenatalRow.localTextPrefix; };
            AntenatalDialog.prototype.getNameProperty = function () { return Default.AntenatalRow.nameProperty; };
            AntenatalDialog.prototype.getService = function () { return Default.AntenatalService.baseUrl; };
            AntenatalDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AntenatalDialog);
            return AntenatalDialog;
        }(Serenity.EntityDialog));
        Default.AntenatalDialog = AntenatalDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var AntenatalGrid = /** @class */ (function (_super) {
            __extends(AntenatalGrid, _super);
            function AntenatalGrid(container) {
                return _super.call(this, container) || this;
            }
            AntenatalGrid.prototype.getColumnsKey = function () { return 'Default.Antenatal'; };
            AntenatalGrid.prototype.getDialogType = function () { return Default.AntenatalDialog; };
            AntenatalGrid.prototype.getIdProperty = function () { return Default.AntenatalRow.idProperty; };
            AntenatalGrid.prototype.getLocalTextPrefix = function () { return Default.AntenatalRow.localTextPrefix; };
            AntenatalGrid.prototype.getService = function () { return Default.AntenatalService.baseUrl; };
            AntenatalGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AntenatalGrid);
            return AntenatalGrid;
        }(Serenity.EntityGrid));
        Default.AntenatalGrid = AntenatalGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var AssistantSurgeonDialog = /** @class */ (function (_super) {
            __extends(AssistantSurgeonDialog, _super);
            function AssistantSurgeonDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.AssistantSurgeonForm(_this.idPrefix);
                return _this;
            }
            AssistantSurgeonDialog.prototype.getFormKey = function () { return Default.AssistantSurgeonForm.formKey; };
            AssistantSurgeonDialog.prototype.getIdProperty = function () { return Default.AssistantSurgeonRow.idProperty; };
            AssistantSurgeonDialog.prototype.getLocalTextPrefix = function () { return Default.AssistantSurgeonRow.localTextPrefix; };
            AssistantSurgeonDialog.prototype.getNameProperty = function () { return Default.AssistantSurgeonRow.nameProperty; };
            AssistantSurgeonDialog.prototype.getService = function () { return Default.AssistantSurgeonService.baseUrl; };
            AssistantSurgeonDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AssistantSurgeonDialog);
            return AssistantSurgeonDialog;
        }(Serenity.EntityDialog));
        Default.AssistantSurgeonDialog = AssistantSurgeonDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var AssistantSurgeonGrid = /** @class */ (function (_super) {
            __extends(AssistantSurgeonGrid, _super);
            function AssistantSurgeonGrid(container) {
                return _super.call(this, container) || this;
            }
            AssistantSurgeonGrid.prototype.getColumnsKey = function () { return 'Default.AssistantSurgeon'; };
            AssistantSurgeonGrid.prototype.getDialogType = function () { return Default.AssistantSurgeonDialog; };
            AssistantSurgeonGrid.prototype.getIdProperty = function () { return Default.AssistantSurgeonRow.idProperty; };
            AssistantSurgeonGrid.prototype.getLocalTextPrefix = function () { return Default.AssistantSurgeonRow.localTextPrefix; };
            AssistantSurgeonGrid.prototype.getService = function () { return Default.AssistantSurgeonService.baseUrl; };
            AssistantSurgeonGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AssistantSurgeonGrid);
            return AssistantSurgeonGrid;
        }(Serenity.EntityGrid));
        Default.AssistantSurgeonGrid = AssistantSurgeonGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var AuscultationDialog = /** @class */ (function (_super) {
            __extends(AuscultationDialog, _super);
            function AuscultationDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.AuscultationForm(_this.idPrefix);
                return _this;
            }
            AuscultationDialog.prototype.getFormKey = function () { return Default.AuscultationForm.formKey; };
            AuscultationDialog.prototype.getIdProperty = function () { return Default.AuscultationRow.idProperty; };
            AuscultationDialog.prototype.getLocalTextPrefix = function () { return Default.AuscultationRow.localTextPrefix; };
            AuscultationDialog.prototype.getNameProperty = function () { return Default.AuscultationRow.nameProperty; };
            AuscultationDialog.prototype.getService = function () { return Default.AuscultationService.baseUrl; };
            AuscultationDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AuscultationDialog);
            return AuscultationDialog;
        }(Serenity.EntityDialog));
        Default.AuscultationDialog = AuscultationDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var AuscultationGrid = /** @class */ (function (_super) {
            __extends(AuscultationGrid, _super);
            function AuscultationGrid(container) {
                return _super.call(this, container) || this;
            }
            AuscultationGrid.prototype.getColumnsKey = function () { return 'Default.Auscultation'; };
            AuscultationGrid.prototype.getDialogType = function () { return Default.AuscultationDialog; };
            AuscultationGrid.prototype.getIdProperty = function () { return Default.AuscultationRow.idProperty; };
            AuscultationGrid.prototype.getLocalTextPrefix = function () { return Default.AuscultationRow.localTextPrefix; };
            AuscultationGrid.prototype.getService = function () { return Default.AuscultationService.baseUrl; };
            AuscultationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AuscultationGrid);
            return AuscultationGrid;
        }(Serenity.EntityGrid));
        Default.AuscultationGrid = AuscultationGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var AuscultationHistoryDialog = /** @class */ (function (_super) {
            __extends(AuscultationHistoryDialog, _super);
            function AuscultationHistoryDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.AuscultationHistoryForm(_this.idPrefix);
                return _this;
            }
            AuscultationHistoryDialog.prototype.getFormKey = function () { return Default.AuscultationHistoryForm.formKey; };
            AuscultationHistoryDialog.prototype.getIdProperty = function () { return Default.AuscultationHistoryRow.idProperty; };
            AuscultationHistoryDialog.prototype.getLocalTextPrefix = function () { return Default.AuscultationHistoryRow.localTextPrefix; };
            AuscultationHistoryDialog.prototype.getService = function () { return Default.AuscultationHistoryService.baseUrl; };
            AuscultationHistoryDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AuscultationHistoryDialog);
            return AuscultationHistoryDialog;
        }(Serenity.EntityDialog));
        Default.AuscultationHistoryDialog = AuscultationHistoryDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var AuscultationHistoryGrid = /** @class */ (function (_super) {
            __extends(AuscultationHistoryGrid, _super);
            function AuscultationHistoryGrid(container) {
                return _super.call(this, container) || this;
            }
            AuscultationHistoryGrid.prototype.getColumnsKey = function () { return 'Default.AuscultationHistory'; };
            AuscultationHistoryGrid.prototype.getDialogType = function () { return Default.AuscultationHistoryDialog; };
            AuscultationHistoryGrid.prototype.getIdProperty = function () { return Default.AuscultationHistoryRow.idProperty; };
            AuscultationHistoryGrid.prototype.getLocalTextPrefix = function () { return Default.AuscultationHistoryRow.localTextPrefix; };
            AuscultationHistoryGrid.prototype.getService = function () { return Default.AuscultationHistoryService.baseUrl; };
            AuscultationHistoryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AuscultationHistoryGrid);
            return AuscultationHistoryGrid;
        }(Serenity.EntityGrid));
        Default.AuscultationHistoryGrid = AuscultationHistoryGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var BedDialog = /** @class */ (function (_super) {
            __extends(BedDialog, _super);
            function BedDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.BedForm(_this.idPrefix);
                return _this;
            }
            BedDialog.prototype.getFormKey = function () { return Default.BedForm.formKey; };
            BedDialog.prototype.getIdProperty = function () { return Default.BedRow.idProperty; };
            BedDialog.prototype.getLocalTextPrefix = function () { return Default.BedRow.localTextPrefix; };
            BedDialog.prototype.getNameProperty = function () { return Default.BedRow.nameProperty; };
            BedDialog.prototype.getService = function () { return Default.BedService.baseUrl; };
            BedDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BedDialog);
            return BedDialog;
        }(Serenity.EntityDialog));
        Default.BedDialog = BedDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var BedGrid = /** @class */ (function (_super) {
            __extends(BedGrid, _super);
            function BedGrid(container) {
                return _super.call(this, container) || this;
            }
            BedGrid.prototype.getColumnsKey = function () { return 'Default.Bed'; };
            BedGrid.prototype.getDialogType = function () { return Default.BedDialog; };
            BedGrid.prototype.getIdProperty = function () { return Default.BedRow.idProperty; };
            BedGrid.prototype.getLocalTextPrefix = function () { return Default.BedRow.localTextPrefix; };
            BedGrid.prototype.getService = function () { return Default.BedService.baseUrl; };
            BedGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BedGrid);
            return BedGrid;
        }(Serenity.EntityGrid));
        Default.BedGrid = BedGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var BirthHistoryDialog = /** @class */ (function (_super) {
            __extends(BirthHistoryDialog, _super);
            function BirthHistoryDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.BirthHistoryForm(_this.idPrefix);
                return _this;
            }
            BirthHistoryDialog.prototype.getFormKey = function () { return Default.BirthHistoryForm.formKey; };
            BirthHistoryDialog.prototype.getIdProperty = function () { return Default.BirthHistoryRow.idProperty; };
            BirthHistoryDialog.prototype.getLocalTextPrefix = function () { return Default.BirthHistoryRow.localTextPrefix; };
            BirthHistoryDialog.prototype.getNameProperty = function () { return Default.BirthHistoryRow.nameProperty; };
            BirthHistoryDialog.prototype.getService = function () { return Default.BirthHistoryService.baseUrl; };
            BirthHistoryDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BirthHistoryDialog);
            return BirthHistoryDialog;
        }(Serenity.EntityDialog));
        Default.BirthHistoryDialog = BirthHistoryDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var BirthHistoryGrid = /** @class */ (function (_super) {
            __extends(BirthHistoryGrid, _super);
            function BirthHistoryGrid(container) {
                return _super.call(this, container) || this;
            }
            BirthHistoryGrid.prototype.getColumnsKey = function () { return 'Default.BirthHistory'; };
            BirthHistoryGrid.prototype.getDialogType = function () { return Default.BirthHistoryDialog; };
            BirthHistoryGrid.prototype.getIdProperty = function () { return Default.BirthHistoryRow.idProperty; };
            BirthHistoryGrid.prototype.getLocalTextPrefix = function () { return Default.BirthHistoryRow.localTextPrefix; };
            BirthHistoryGrid.prototype.getService = function () { return Default.BirthHistoryService.baseUrl; };
            BirthHistoryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BirthHistoryGrid);
            return BirthHistoryGrid;
        }(Serenity.EntityGrid));
        Default.BirthHistoryGrid = BirthHistoryGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var BloodGroupsDialog = /** @class */ (function (_super) {
            __extends(BloodGroupsDialog, _super);
            function BloodGroupsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.BloodGroupsForm(_this.idPrefix);
                return _this;
            }
            BloodGroupsDialog.prototype.getFormKey = function () { return Default.BloodGroupsForm.formKey; };
            BloodGroupsDialog.prototype.getIdProperty = function () { return Default.BloodGroupsRow.idProperty; };
            BloodGroupsDialog.prototype.getLocalTextPrefix = function () { return Default.BloodGroupsRow.localTextPrefix; };
            BloodGroupsDialog.prototype.getNameProperty = function () { return Default.BloodGroupsRow.nameProperty; };
            BloodGroupsDialog.prototype.getService = function () { return Default.BloodGroupsService.baseUrl; };
            BloodGroupsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BloodGroupsDialog);
            return BloodGroupsDialog;
        }(Serenity.EntityDialog));
        Default.BloodGroupsDialog = BloodGroupsDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var BloodGroupsGrid = /** @class */ (function (_super) {
            __extends(BloodGroupsGrid, _super);
            function BloodGroupsGrid(container) {
                return _super.call(this, container) || this;
            }
            BloodGroupsGrid.prototype.getColumnsKey = function () { return 'Default.BloodGroups'; };
            BloodGroupsGrid.prototype.getDialogType = function () { return Default.BloodGroupsDialog; };
            BloodGroupsGrid.prototype.getIdProperty = function () { return Default.BloodGroupsRow.idProperty; };
            BloodGroupsGrid.prototype.getLocalTextPrefix = function () { return Default.BloodGroupsRow.localTextPrefix; };
            BloodGroupsGrid.prototype.getService = function () { return Default.BloodGroupsService.baseUrl; };
            BloodGroupsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BloodGroupsGrid);
            return BloodGroupsGrid;
        }(Serenity.EntityGrid));
        Default.BloodGroupsGrid = BloodGroupsGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var BreathSoundDialog = /** @class */ (function (_super) {
            __extends(BreathSoundDialog, _super);
            function BreathSoundDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.BreathSoundForm(_this.idPrefix);
                return _this;
            }
            BreathSoundDialog.prototype.getFormKey = function () { return Default.BreathSoundForm.formKey; };
            BreathSoundDialog.prototype.getIdProperty = function () { return Default.BreathSoundRow.idProperty; };
            BreathSoundDialog.prototype.getLocalTextPrefix = function () { return Default.BreathSoundRow.localTextPrefix; };
            BreathSoundDialog.prototype.getNameProperty = function () { return Default.BreathSoundRow.nameProperty; };
            BreathSoundDialog.prototype.getService = function () { return Default.BreathSoundService.baseUrl; };
            BreathSoundDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BreathSoundDialog);
            return BreathSoundDialog;
        }(Serenity.EntityDialog));
        Default.BreathSoundDialog = BreathSoundDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var BreathSoundGrid = /** @class */ (function (_super) {
            __extends(BreathSoundGrid, _super);
            function BreathSoundGrid(container) {
                return _super.call(this, container) || this;
            }
            BreathSoundGrid.prototype.getColumnsKey = function () { return 'Default.BreathSound'; };
            BreathSoundGrid.prototype.getDialogType = function () { return Default.BreathSoundDialog; };
            BreathSoundGrid.prototype.getIdProperty = function () { return Default.BreathSoundRow.idProperty; };
            BreathSoundGrid.prototype.getLocalTextPrefix = function () { return Default.BreathSoundRow.localTextPrefix; };
            BreathSoundGrid.prototype.getService = function () { return Default.BreathSoundService.baseUrl; };
            BreathSoundGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BreathSoundGrid);
            return BreathSoundGrid;
        }(Serenity.EntityGrid));
        Default.BreathSoundGrid = BreathSoundGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var BreathSoundHistoryDialog = /** @class */ (function (_super) {
            __extends(BreathSoundHistoryDialog, _super);
            function BreathSoundHistoryDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.BreathSoundHistoryForm(_this.idPrefix);
                return _this;
            }
            BreathSoundHistoryDialog.prototype.getFormKey = function () { return Default.BreathSoundHistoryForm.formKey; };
            BreathSoundHistoryDialog.prototype.getIdProperty = function () { return Default.BreathSoundHistoryRow.idProperty; };
            BreathSoundHistoryDialog.prototype.getLocalTextPrefix = function () { return Default.BreathSoundHistoryRow.localTextPrefix; };
            BreathSoundHistoryDialog.prototype.getService = function () { return Default.BreathSoundHistoryService.baseUrl; };
            BreathSoundHistoryDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BreathSoundHistoryDialog);
            return BreathSoundHistoryDialog;
        }(Serenity.EntityDialog));
        Default.BreathSoundHistoryDialog = BreathSoundHistoryDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var BreathSoundHistoryGrid = /** @class */ (function (_super) {
            __extends(BreathSoundHistoryGrid, _super);
            function BreathSoundHistoryGrid(container) {
                return _super.call(this, container) || this;
            }
            BreathSoundHistoryGrid.prototype.getColumnsKey = function () { return 'Default.BreathSoundHistory'; };
            BreathSoundHistoryGrid.prototype.getDialogType = function () { return Default.BreathSoundHistoryDialog; };
            BreathSoundHistoryGrid.prototype.getIdProperty = function () { return Default.BreathSoundHistoryRow.idProperty; };
            BreathSoundHistoryGrid.prototype.getLocalTextPrefix = function () { return Default.BreathSoundHistoryRow.localTextPrefix; };
            BreathSoundHistoryGrid.prototype.getService = function () { return Default.BreathSoundHistoryService.baseUrl; };
            BreathSoundHistoryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BreathSoundHistoryGrid);
            return BreathSoundHistoryGrid;
        }(Serenity.EntityGrid));
        Default.BreathSoundHistoryGrid = BreathSoundHistoryGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var ComplicationDialog = /** @class */ (function (_super) {
            __extends(ComplicationDialog, _super);
            function ComplicationDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Default.ComplicationForm(_this.idPrefix);
                _this.form.AdmissionId.changeSelect2(function (x) {
                    var admissionId = Q.toId(_this.form.AdmissionId.value);
                    if (admissionId != "") {
                        Default.AdmissionService.Retrieve({ EntityId: admissionId }, function (response) {
                            _this.form.Age.value = response.Entity.Age;
                            _this.form.Sex.value = response.Entity.Sex;
                            _this.form.AdmissionDate.value = response.Entity.Date;
                            _this.form.PinNumber.value = response.Entity.PinNumber;
                            _this.form.UnitNumber.value = response.Entity.UnitNumber;
                            _this.form.UnitRegNo.value = response.Entity.UnitRegNumber;
                            _this.form.BedNumber.value = response.Entity.BedNumber;
                            _this.form.Weight.value = response.Entity.Weight;
                            _this.form.BloodGroup.value = response.Entity.BloodGroup;
                            _this.form.HospitalRegNo.value = response.Entity.HospitalRegNumber;
                            _this.form.FinalDiagnosis.value = response.Entity.FinalDiagnosis;
                        });
                    }
                });
                var fieldButton = $('.AddtoComplication')[0];
                fieldButton.innerHTML = "\n                <a href= \"javascript:;\" class=\"btn btn-success DetailAdd\"> <i class=\"fa fa-fw fa-plus-circle\"> </i>Add</a>";
                $('.DetailAdd').click(function (e) { return _this.addtoComplication(); });
                return _this;
            }
            ComplicationDialog.prototype.getFormKey = function () { return Default.ComplicationForm.formKey; };
            ComplicationDialog.prototype.getIdProperty = function () { return Default.ComplicationRow.idProperty; };
            ComplicationDialog.prototype.getLocalTextPrefix = function () { return Default.ComplicationRow.localTextPrefix; };
            ComplicationDialog.prototype.getNameProperty = function () { return Default.ComplicationRow.nameProperty; };
            ComplicationDialog.prototype.getService = function () { return Default.ComplicationService.baseUrl; };
            ComplicationDialog.prototype.addtoComplication = function () {
                if (this.form.ComplicationNoteId.value != null) {
                    if (this.form.ComplicationName.value == "") {
                        this.form.ComplicationName.value = this.form.ComplicationNoteId.text;
                    }
                    else {
                        this.form.ComplicationName.value = this.form.ComplicationName.value + "\n" + this.form.ComplicationNoteId.text;
                    }
                }
            };
            ComplicationDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push(CMCPS.Common.ReportHelper.createToolButton({
                    title: 'Complication Details',
                    cssClass: 'export-pdf-button',
                    reportKey: 'Default.Complication',
                    getParams: function () { return ({
                        ComplicationId: _this.get_entityId()
                    }); }
                }));
                return buttons;
            };
            ComplicationDialog.prototype.updateInterface = function () {
                var _this = this;
                _super.prototype.updateInterface.call(this);
                if (this.isEditMode()) {
                    Serenity.EditorUtils.setReadOnly(this.form.AdmissionId, true);
                    var admissionId = Q.toId(this.form.AdmissionId.value);
                    if (admissionId != "") {
                        Default.AdmissionService.Retrieve({ EntityId: admissionId }, function (response) {
                            _this.form.Age.value = response.Entity.Age;
                            _this.form.Sex.value = response.Entity.Sex;
                            _this.form.AdmissionDate.value = response.Entity.Date;
                            _this.form.PinNumber.value = response.Entity.PinNumber;
                            _this.form.UnitNumber.value = response.Entity.UnitNumber;
                            _this.form.UnitRegNo.value = response.Entity.UnitRegNumber;
                            _this.form.BedNumber.value = response.Entity.BedNumber;
                            _this.form.HospitalRegNo.value = response.Entity.HospitalRegNumber;
                            _this.form.Weight.value = response.Entity.Weight;
                            _this.form.BloodGroup.value = response.Entity.BloodGroup;
                            _this.form.FinalDiagnosis.value = response.Entity.FinalDiagnosis;
                        });
                    }
                }
                this.toolbar.findButton('export-pdf-button').toggle(this.isEditMode());
            };
            ComplicationDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], ComplicationDialog);
            return ComplicationDialog;
        }(Serenity.EntityDialog));
        Default.ComplicationDialog = ComplicationDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var ComplicationGrid = /** @class */ (function (_super) {
            __extends(ComplicationGrid, _super);
            function ComplicationGrid(container) {
                return _super.call(this, container) || this;
            }
            ComplicationGrid.prototype.getColumnsKey = function () { return 'Default.Complication'; };
            ComplicationGrid.prototype.getDialogType = function () { return Default.ComplicationDialog; };
            ComplicationGrid.prototype.getIdProperty = function () { return Default.ComplicationRow.idProperty; };
            ComplicationGrid.prototype.getLocalTextPrefix = function () { return Default.ComplicationRow.localTextPrefix; };
            ComplicationGrid.prototype.getService = function () { return Default.ComplicationService.baseUrl; };
            ComplicationGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(CMCPS.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Default/Complication/ListExcel',
                    separator: true
                }));
                buttons.push(CMCPS.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    reportTitle: "Patient's Complication Summary Report",
                    fileName: "Patient's_Complication_Summary_Report",
                    separator: true,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            ComplicationGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: 'Delete Row',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action delete-row" title="delete">' +
                        '<i class="fa fa-trash-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                columns.splice(1, 0, {
                    field: 'Print Complication',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action print-invoice" title="Treatment Details">' +
                        '<i class="fa fa-file-pdf-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return columns;
            };
            ComplicationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('print-invoice')) {
                        CMCPS.Common.ReportHelper.execute({
                            reportKey: 'Default.Complication',
                            params: {
                                ComplicationId: item.ComplicationId
                            }
                        });
                    }
                    else if (target.hasClass('delete-row')) {
                        Q.confirm('Delete record?', function () {
                            CMCPS.Default.ComplicationService.Delete({
                                EntityId: item.ComplicationId,
                            }, function (response) {
                                _this.refresh();
                            });
                        });
                    }
                }
            };
            ComplicationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ComplicationGrid);
            return ComplicationGrid;
        }(Serenity.EntityGrid));
        Default.ComplicationGrid = ComplicationGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var ComplicationNoteDialog = /** @class */ (function (_super) {
            __extends(ComplicationNoteDialog, _super);
            function ComplicationNoteDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.ComplicationNoteForm(_this.idPrefix);
                return _this;
            }
            ComplicationNoteDialog.prototype.getFormKey = function () { return Default.ComplicationNoteForm.formKey; };
            ComplicationNoteDialog.prototype.getIdProperty = function () { return Default.ComplicationNoteRow.idProperty; };
            ComplicationNoteDialog.prototype.getLocalTextPrefix = function () { return Default.ComplicationNoteRow.localTextPrefix; };
            ComplicationNoteDialog.prototype.getNameProperty = function () { return Default.ComplicationNoteRow.nameProperty; };
            ComplicationNoteDialog.prototype.getService = function () { return Default.ComplicationNoteService.baseUrl; };
            ComplicationNoteDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ComplicationNoteDialog);
            return ComplicationNoteDialog;
        }(Serenity.EntityDialog));
        Default.ComplicationNoteDialog = ComplicationNoteDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var ComplicationNoteGrid = /** @class */ (function (_super) {
            __extends(ComplicationNoteGrid, _super);
            function ComplicationNoteGrid(container) {
                return _super.call(this, container) || this;
            }
            ComplicationNoteGrid.prototype.getColumnsKey = function () { return 'Default.ComplicationNote'; };
            ComplicationNoteGrid.prototype.getDialogType = function () { return Default.ComplicationNoteDialog; };
            ComplicationNoteGrid.prototype.getIdProperty = function () { return Default.ComplicationNoteRow.idProperty; };
            ComplicationNoteGrid.prototype.getLocalTextPrefix = function () { return Default.ComplicationNoteRow.localTextPrefix; };
            ComplicationNoteGrid.prototype.getService = function () { return Default.ComplicationNoteService.baseUrl; };
            ComplicationNoteGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ComplicationNoteGrid);
            return ComplicationNoteGrid;
        }(Serenity.EntityGrid));
        Default.ComplicationNoteGrid = ComplicationNoteGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var DDiagnosisDetailEditor = /** @class */ (function (_super) {
            __extends(DDiagnosisDetailEditor, _super);
            function DDiagnosisDetailEditor(container) {
                return _super.call(this, container) || this;
            }
            DDiagnosisDetailEditor.prototype.getColumnsKey = function () { return "Default.DDiagnosisDetails"; };
            DDiagnosisDetailEditor.prototype.getDialogType = function () { return Default.DDiagnosisDetailsDialog; };
            DDiagnosisDetailEditor.prototype.getLocalTextPrefix = function () { return Default.DDiagnosisDetailsRow.localTextPrefix; };
            DDiagnosisDetailEditor.prototype.getAddButtonCaption = function () {
                return "Add";
            };
            DDiagnosisDetailEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                row.Diagnosis = Default.DiagnosisRow.getLookup().itemById[row.DiagnosisId].DiagnosisName;
                return true;
            };
            DDiagnosisDetailEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], DDiagnosisDetailEditor);
            return DDiagnosisDetailEditor;
        }(CMCPS.Common.GridEditorBase));
        Default.DDiagnosisDetailEditor = DDiagnosisDetailEditor;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var DDiagnosisDetailsDialog = /** @class */ (function (_super) {
            __extends(DDiagnosisDetailsDialog, _super);
            function DDiagnosisDetailsDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Default.DDiagnosisDetailsForm(_this.idPrefix);
                return _this;
            }
            DDiagnosisDetailsDialog.prototype.getFormKey = function () { return Default.DDiagnosisDetailsForm.formKey; };
            DDiagnosisDetailsDialog.prototype.getNameProperty = function () { return Default.DDiagnosisDetailsRow.nameProperty; };
            DDiagnosisDetailsDialog.prototype.getLocalTextPrefix = function () { return Default.DDiagnosisDetailsRow.localTextPrefix; };
            DDiagnosisDetailsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DDiagnosisDetailsDialog);
            return DDiagnosisDetailsDialog;
        }(CMCPS.Common.GridEditorDialog));
        Default.DDiagnosisDetailsDialog = DDiagnosisDetailsDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var DesignationDialog = /** @class */ (function (_super) {
            __extends(DesignationDialog, _super);
            function DesignationDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.DesignationForm(_this.idPrefix);
                return _this;
            }
            DesignationDialog.prototype.getFormKey = function () { return Default.DesignationForm.formKey; };
            DesignationDialog.prototype.getIdProperty = function () { return Default.DesignationRow.idProperty; };
            DesignationDialog.prototype.getLocalTextPrefix = function () { return Default.DesignationRow.localTextPrefix; };
            DesignationDialog.prototype.getNameProperty = function () { return Default.DesignationRow.nameProperty; };
            DesignationDialog.prototype.getService = function () { return Default.DesignationService.baseUrl; };
            DesignationDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DesignationDialog);
            return DesignationDialog;
        }(Serenity.EntityDialog));
        Default.DesignationDialog = DesignationDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var DesignationGrid = /** @class */ (function (_super) {
            __extends(DesignationGrid, _super);
            function DesignationGrid(container) {
                return _super.call(this, container) || this;
            }
            DesignationGrid.prototype.getColumnsKey = function () { return 'Default.Designation'; };
            DesignationGrid.prototype.getDialogType = function () { return Default.DesignationDialog; };
            DesignationGrid.prototype.getIdProperty = function () { return Default.DesignationRow.idProperty; };
            DesignationGrid.prototype.getLocalTextPrefix = function () { return Default.DesignationRow.localTextPrefix; };
            DesignationGrid.prototype.getService = function () { return Default.DesignationService.baseUrl; };
            DesignationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DesignationGrid);
            return DesignationGrid;
        }(Serenity.EntityGrid));
        Default.DesignationGrid = DesignationGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var DiagnosisDialog = /** @class */ (function (_super) {
            __extends(DiagnosisDialog, _super);
            function DiagnosisDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.DiagnosisForm(_this.idPrefix);
                return _this;
            }
            DiagnosisDialog.prototype.getFormKey = function () { return Default.DiagnosisForm.formKey; };
            DiagnosisDialog.prototype.getIdProperty = function () { return Default.DiagnosisRow.idProperty; };
            DiagnosisDialog.prototype.getLocalTextPrefix = function () { return Default.DiagnosisRow.localTextPrefix; };
            DiagnosisDialog.prototype.getNameProperty = function () { return Default.DiagnosisRow.nameProperty; };
            DiagnosisDialog.prototype.getService = function () { return Default.DiagnosisService.baseUrl; };
            DiagnosisDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DiagnosisDialog);
            return DiagnosisDialog;
        }(Serenity.EntityDialog));
        Default.DiagnosisDialog = DiagnosisDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var DiagnosisGrid = /** @class */ (function (_super) {
            __extends(DiagnosisGrid, _super);
            function DiagnosisGrid(container) {
                return _super.call(this, container) || this;
            }
            DiagnosisGrid.prototype.getColumnsKey = function () { return 'Default.Diagnosis'; };
            DiagnosisGrid.prototype.getDialogType = function () { return Default.DiagnosisDialog; };
            DiagnosisGrid.prototype.getIdProperty = function () { return Default.DiagnosisRow.idProperty; };
            DiagnosisGrid.prototype.getLocalTextPrefix = function () { return Default.DiagnosisRow.localTextPrefix; };
            DiagnosisGrid.prototype.getService = function () { return Default.DiagnosisService.baseUrl; };
            DiagnosisGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DiagnosisGrid);
            return DiagnosisGrid;
        }(Serenity.EntityGrid));
        Default.DiagnosisGrid = DiagnosisGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var DiagramDialog = /** @class */ (function (_super) {
            __extends(DiagramDialog, _super);
            function DiagramDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.DiagramForm(_this.idPrefix);
                return _this;
            }
            DiagramDialog.prototype.getFormKey = function () { return Default.DiagramForm.formKey; };
            DiagramDialog.prototype.getIdProperty = function () { return Default.DiagramRow.idProperty; };
            DiagramDialog.prototype.getLocalTextPrefix = function () { return Default.DiagramRow.localTextPrefix; };
            DiagramDialog.prototype.getNameProperty = function () { return Default.DiagramRow.nameProperty; };
            DiagramDialog.prototype.getService = function () { return Default.DiagramService.baseUrl; };
            DiagramDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DiagramDialog);
            return DiagramDialog;
        }(Serenity.EntityDialog));
        Default.DiagramDialog = DiagramDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var DiagramGrid = /** @class */ (function (_super) {
            __extends(DiagramGrid, _super);
            function DiagramGrid(container) {
                return _super.call(this, container) || this;
            }
            DiagramGrid.prototype.getColumnsKey = function () { return 'Default.Diagram'; };
            DiagramGrid.prototype.getDialogType = function () { return Default.DiagramDialog; };
            DiagramGrid.prototype.getIdProperty = function () { return Default.DiagramRow.idProperty; };
            DiagramGrid.prototype.getLocalTextPrefix = function () { return Default.DiagramRow.localTextPrefix; };
            DiagramGrid.prototype.getService = function () { return Default.DiagramService.baseUrl; };
            DiagramGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DiagramGrid);
            return DiagramGrid;
        }(Serenity.EntityGrid));
        Default.DiagramGrid = DiagramGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var DischargeDialog = /** @class */ (function (_super) {
            __extends(DischargeDialog, _super);
            function DischargeDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Default.DischargeForm(_this.idPrefix);
                //this.form.Meal.ca
                $('.Meal .caption').hide();
                _this.form.AdmissionId.changeSelect2(function (x) {
                    var admissionId = Q.toId(_this.form.AdmissionId.value);
                    if (admissionId != "") {
                        Default.AdmissionService.Retrieve({ EntityId: admissionId }, function (response) {
                            _this.form.Age.value = response.Entity.Age;
                            _this.form.AdmissionDate.value = response.Entity.Date;
                            _this.form.Sex.value = response.Entity.Sex;
                            _this.form.PinNumber.value = response.Entity.PinNumber;
                            _this.form.UnitNumber.value = response.Entity.UnitNumber;
                            _this.form.UnitRegNo.value = response.Entity.UnitRegNumber;
                            _this.form.BedNumber.value = response.Entity.BedNumber;
                            _this.form.HospitalRegNo.value = response.Entity.HospitalRegNumber;
                            _this.form.Weight.value = response.Entity.Weight;
                            _this.form.BloodGroup.value = response.Entity.BloodGroup;
                            var opId = Q.toId(response.Entity.OperationNoteId);
                            if (opId != null) {
                                Default.OperationNoteService.Retrieve({ EntityId: opId }, function (response) {
                                    _this.form.OperationId.value = response.Entity.OperationId;
                                    _this.form.OperationDate.value = response.Entity.Date;
                                    _this.form.Findings.value = response.Entity.Findings;
                                    _this.form.Procedures.value = response.Entity.Procedures;
                                    if (response.Entity.Diagnosis == null) {
                                        _this.form.Diagnosis.getGridField().toggle(false);
                                    }
                                    else {
                                        _this.form.Diagnosis.getGridField().toggle(true);
                                        _this.form.Diagnosis.value = response.Entity.Diagnosis;
                                    }
                                    if (response.Entity.Indication == null) {
                                        _this.form.Indication.getGridField().toggle(false);
                                    }
                                    else {
                                        _this.form.Indication.getGridField().show();
                                        _this.form.Indication.value = response.Entity.Indication;
                                    }
                                    if (response.Entity.Anesthesia == null) {
                                        _this.form.Anesthesia.getGridField().toggle(true);
                                    }
                                    else {
                                        _this.form.Anesthesia.getGridField().show();
                                        _this.form.Anesthesia.value = response.Entity.Anesthesia;
                                    }
                                    if (response.Entity.Position == null) {
                                        _this.form.Position.getGridField().hide();
                                    }
                                    else {
                                        _this.form.Position.getGridField().show();
                                        _this.form.Position.value = response.Entity.Position;
                                    }
                                    if (response.Entity.Incision == null) {
                                        _this.form.Incision.getGridField().hide();
                                    }
                                    else {
                                        _this.form.Incision.getGridField().show();
                                        _this.form.Incision.value = response.Entity.Incision;
                                    }
                                    if (response.Entity.Histopathology == null) {
                                        _this.form.Histopathology.getGridField().hide();
                                    }
                                    else {
                                        _this.form.Histopathology.getGridField().show();
                                        _this.form.Histopathology.value = response.Entity.Histopathology;
                                    }
                                    if (response.Entity.SpecialNote == null) {
                                        _this.form.SpecialNote.getGridField().hide();
                                    }
                                    else {
                                        _this.form.SpecialNote.getGridField().show();
                                        _this.form.SpecialNote.value = response.Entity.SpecialNote;
                                    }
                                    if (response.Entity.Instructions == null) {
                                        _this.form.Instructions.getGridField().hide();
                                    }
                                    else {
                                        _this.form.Instructions.getGridField().show();
                                        _this.form.Instructions.value = response.Entity.Instructions;
                                    }
                                    if (response.Entity.FurtherPlan == null) {
                                        _this.form.FurtherPlan.getGridField().hide();
                                    }
                                    else {
                                        _this.form.FurtherPlan.getGridField().show();
                                        _this.form.FurtherPlan.value = response.Entity.FurtherPlan;
                                    }
                                });
                            }
                            else {
                                _this.form.Diagnosis.value = "";
                                _this.form.Indication.value = "";
                                _this.form.Anesthesia.value = "";
                                _this.form.Position.value = "";
                                _this.form.Incision.value = "";
                                _this.form.Histopathology.value = "";
                                _this.form.SpecialNote.value = "";
                                _this.form.Instructions.value = "";
                                _this.form.FurtherPlan.value = "";
                                _this.form.OperationDate.value = "";
                                _this.form.Findings.value = "";
                                _this.form.Procedures.value = "";
                                _this.form.OperationId.value = "";
                            }
                        });
                        var criteria;
                        Default.InvestigationService.List({
                            Criteria: Serenity.Criteria.and(criteria, [["AdmissionId" /* AdmissionId */], '=', admissionId])
                        }, function (response) {
                            var en = response.Entities;
                            if (response.Entities.length == 0) {
                                _this.form.Cbc.value = "";
                                _this.form.Creatinine.value = "";
                                _this.form.Urea.value = "";
                                _this.form.Sugar.value = "";
                                _this.form.Albumin.value = "";
                                _this.form.Calcium.value = "";
                                _this.form.BloodCulture.value = "";
                                _this.form.Crp.value = "";
                                _this.form.Bt.value = "";
                                _this.form.Ct.value = "";
                                _this.form.ProthrombinTime.value = "";
                                _this.form.Aptt.value = "";
                                _this.form.OptionToAddHematology.value = "";
                                _this.form.Na.value = "";
                                _this.form.K.value = "";
                                _this.form.Cl.value = "";
                                _this.form.HCO3.value = "";
                                _this.form.Cxr.value = "";
                                _this.form.Axr.value = "";
                                _this.form.XrayKub.value = "";
                                _this.form.Axr.value = "";
                                _this.form.Usg.value = "";
                                _this.form.BaEnema.value = "";
                                _this.form.BaMealFollowThrough.value = "";
                                _this.form.Mcu.value = "";
                                _this.form.Rgu.value = "";
                                _this.form.Ivu.value = "";
                                _this.form.CtScan.value = "";
                                _this.form.Mri.value = "";
                                _this.form.OptionToAddImaging.value = "";
                            }
                            for (var _i = 0, en_1 = en; _i < en_1.length; _i++) {
                                var entity = en_1[_i];
                                if (entity.Cbc == null) {
                                    _this.form.Cbc.getGridField().hide();
                                }
                                else {
                                    _this.form.Cbc.getGridField().show();
                                    _this.form.Cbc.value = entity.Cbc;
                                }
                                if (entity.Creatinine == null) {
                                    _this.form.Creatinine.getGridField().hide();
                                }
                                else {
                                    _this.form.Creatinine.getGridField().show();
                                    _this.form.Creatinine.value = entity.Creatinine;
                                }
                                if (entity.Urea == null) {
                                    _this.form.Urea.getGridField().hide();
                                }
                                else {
                                    _this.form.Urea.getGridField().show();
                                    _this.form.Urea.value = entity.Urea;
                                }
                                if (entity.Sugar == null) {
                                    _this.form.Sugar.getGridField().hide();
                                }
                                else {
                                    _this.form.Sugar.getGridField().show();
                                    _this.form.Sugar.value = entity.Sugar;
                                }
                                if (entity.Albumin == null) {
                                    _this.form.Albumin.getGridField().hide();
                                }
                                else {
                                    _this.form.Albumin.getGridField().show();
                                    _this.form.Albumin.value = entity.Albumin;
                                }
                                if (entity.Calcium == null) {
                                    _this.form.Calcium.getGridField().hide();
                                }
                                else {
                                    _this.form.Calcium.getGridField().show();
                                    _this.form.Calcium.value = entity.Calcium;
                                }
                                if (entity.BloodCulture == null) {
                                    _this.form.BloodCulture.getGridField().hide();
                                }
                                else {
                                    _this.form.BloodCulture.getGridField().show();
                                    _this.form.BloodCulture.value = entity.BloodCulture;
                                }
                                if (entity.Crp == null) {
                                    _this.form.Crp.getGridField().hide();
                                }
                                else {
                                    _this.form.Crp.getGridField().show();
                                    _this.form.Crp.value = entity.Crp;
                                }
                                if (entity.Bt == null) {
                                    _this.form.Bt.getGridField().hide();
                                }
                                else {
                                    _this.form.Bt.getGridField().show();
                                    _this.form.Bt.value = entity.Bt;
                                }
                                if (entity.Ct == null) {
                                    _this.form.Ct.getGridField().hide();
                                }
                                else {
                                    _this.form.Ct.getGridField().show();
                                    _this.form.Ct.value = entity.Ct;
                                }
                                if (entity.ProthrombinTime == null) {
                                    _this.form.ProthrombinTime.getGridField().hide();
                                }
                                else {
                                    _this.form.ProthrombinTime.getGridField().show();
                                    _this.form.ProthrombinTime.value = entity.ProthrombinTime;
                                }
                                if (entity.Aptt == null) {
                                    _this.form.Aptt.getGridField().hide();
                                }
                                else {
                                    _this.form.Aptt.getGridField().show();
                                    _this.form.Aptt.value = entity.Aptt;
                                }
                                if (entity.OptionToAddHematology == null) {
                                    _this.form.OptionToAddHematology.getGridField().hide();
                                }
                                else {
                                    _this.form.OptionToAddHematology.getGridField().show();
                                    _this.form.OptionToAddHematology.value = entity.OptionToAddHematology;
                                }
                                if (entity.Na == null) {
                                    _this.form.Na.getGridField().hide();
                                }
                                else {
                                    _this.form.Na.getGridField().show();
                                    _this.form.Na.value = entity.Na;
                                }
                                if (entity.K == null) {
                                    _this.form.K.getGridField().hide();
                                }
                                else {
                                    _this.form.K.getGridField().show();
                                    _this.form.K.value = entity.K;
                                }
                                if (entity.Cl == null) {
                                    _this.form.Cl.getGridField().hide();
                                }
                                else {
                                    _this.form.Cl.getGridField().show();
                                    _this.form.Cl.value = entity.Cl;
                                }
                                if (entity.HCO3 == null) {
                                    _this.form.HCO3.getGridField().hide();
                                }
                                else {
                                    _this.form.HCO3.getGridField().show();
                                    _this.form.HCO3.value = entity.HCO3;
                                }
                                if (entity.Cxr == null) {
                                    _this.form.Cxr.getGridField().hide();
                                }
                                else {
                                    _this.form.Cxr.getGridField().show();
                                    _this.form.Cxr.value = entity.Cxr;
                                }
                                if (entity.Axr == null) {
                                    _this.form.Axr.getGridField().hide();
                                }
                                else {
                                    _this.form.Axr.getGridField().show();
                                    _this.form.Axr.value = entity.Axr;
                                }
                                if (entity.XrayKub == null) {
                                    _this.form.XrayKub.getGridField().hide();
                                }
                                else {
                                    _this.form.XrayKub.getGridField().show();
                                    _this.form.XrayKub.value = entity.XrayKub;
                                }
                                if (entity.Usg == null) {
                                    _this.form.Usg.getGridField().hide();
                                }
                                else {
                                    _this.form.Usg.getGridField().show();
                                    _this.form.Usg.value = entity.Usg;
                                }
                                if (entity.BaEnema == null) {
                                    _this.form.BaEnema.getGridField().hide();
                                }
                                else {
                                    _this.form.BaEnema.getGridField().show();
                                    _this.form.BaEnema.value = entity.BaEnema;
                                }
                                if (entity.BaMealFollowThrough == null) {
                                    _this.form.BaMealFollowThrough.getGridField().hide();
                                }
                                else {
                                    _this.form.BaMealFollowThrough.getGridField().show();
                                    _this.form.BaMealFollowThrough.value = entity.BaMealFollowThrough;
                                }
                                if (entity.Mcu == null) {
                                    _this.form.Mcu.getGridField().hide();
                                }
                                else {
                                    _this.form.Mcu.getGridField().show();
                                    _this.form.Mcu.value = entity.Mcu;
                                }
                                if (entity.Rgu == null) {
                                    _this.form.Rgu.getGridField().hide();
                                }
                                else {
                                    _this.form.Rgu.getGridField().show();
                                    _this.form.Rgu.value = entity.Rgu;
                                }
                                if (entity.Ivu == null) {
                                    _this.form.Ivu.getGridField().hide();
                                }
                                else {
                                    _this.form.Ivu.getGridField().show();
                                    _this.form.Ivu.value = entity.Ivu;
                                }
                                if (entity.CtScan == null) {
                                    _this.form.CtScan.getGridField().hide();
                                }
                                else {
                                    _this.form.CtScan.getGridField().show();
                                    _this.form.CtScan.value = entity.CtScan;
                                }
                                if (entity.Mri == null) {
                                    _this.form.Mri.getGridField().hide();
                                }
                                else {
                                    _this.form.Mri.getGridField().show();
                                    _this.form.Mri.value = entity.Mri;
                                }
                                if (entity.OptionToAddImaging == null) {
                                    _this.form.OptionToAddImaging.getGridField().hide();
                                }
                                else {
                                    _this.form.OptionToAddImaging.getGridField().show();
                                    _this.form.OptionToAddImaging.value = entity.OptionToAddImaging;
                                }
                            }
                        });
                        //OperationNoteService.List({
                        //    Criteria: Serenity.Criteria.and(criteria, [[OperationNoteRow.Fields.AdmissionId], '=', admissionId])
                        //},
                        //    (response) => {
                        //        var en = response.Entities;
                        //        if (en.length==0) {
                        //            this.form.Diagnosis.value = "";
                        //            this.form.Indication.value = "";
                        //            this.form.Anesthesia.value = "";
                        //            this.form.Position.value = "";
                        //            this.form.Incision.value = "";
                        //            this.form.Histopathology.value = "";
                        //            this.form.SpecialNote.value = "";
                        //            this.form.Instructions.value = "";
                        //            this.form.FurtherPlan.value = "";
                        //            this.form.OperationDate.value = "";
                        //            this.form.Findings.value = "";
                        //            this.form.Procedures.value = "";
                        //            this.form.OperationId.value = "";
                        //        }
                        //        for (var entity of en) {
                        //            this.form.OperationId.value = entity.OperationId;
                        //            this.form.OperationDate.value = entity.Date;
                        //            this.form.Findings.value = entity.Findings;
                        //            this.form.Procedures.value = entity.Procedures;
                        //            if (entity.Diagnosis == null) {
                        //                this.form.Diagnosis.getGridField().toggle(false);
                        //            }
                        //            else {
                        //                this.form.Diagnosis.getGridField().toggle(true);
                        //                this.form.Diagnosis.value = entity.Diagnosis;
                        //            }
                        //            if (entity.Indication == null) {
                        //                this.form.Indication.getGridField().toggle(false);
                        //            }
                        //            else {
                        //                this.form.Indication.getGridField().show();
                        //                this.form.Indication.value = entity.Indication;
                        //            }
                        //            if (entity.Anesthesia == null) {
                        //                this.form.Anesthesia.getGridField().toggle(true);
                        //            }
                        //            else {
                        //                this.form.Anesthesia.getGridField().show();
                        //                this.form.Anesthesia.value = entity.Anesthesia;
                        //            }
                        //            if (entity.Position == null) {
                        //                this.form.Position.getGridField().hide();
                        //            }
                        //            else {
                        //                this.form.Position.getGridField().show();
                        //                this.form.Position.value = entity.Position;
                        //            }
                        //            if (entity.Incision == null) {
                        //                this.form.Incision.getGridField().hide();
                        //            }
                        //            else {
                        //                this.form.Incision.getGridField().show();
                        //                this.form.Incision.value = entity.Incision;
                        //            }
                        //            if (entity.Histopathology == null) {
                        //                this.form.Histopathology.getGridField().hide();
                        //            }
                        //            else {
                        //                this.form.Histopathology.getGridField().show();
                        //                this.form.Histopathology.value = entity.Histopathology;
                        //            }
                        //            if (entity.SpecialNote == null) {
                        //                this.form.SpecialNote.getGridField().hide();
                        //            }
                        //            else {
                        //                this.form.SpecialNote.getGridField().show();
                        //                this.form.SpecialNote.value = entity.SpecialNote;
                        //            }
                        //            if (entity.Instructions == null) {
                        //                this.form.Instructions.getGridField().hide();
                        //            }
                        //            else {
                        //                this.form.Instructions.getGridField().show();
                        //                this.form.Instructions.value = entity.Instructions;
                        //            }
                        //            if (entity.FurtherPlan == null) {
                        //                this.form.FurtherPlan.getGridField().hide();
                        //            }
                        //            else {
                        //                this.form.FurtherPlan.getGridField().show();
                        //                this.form.FurtherPlan.value = entity.FurtherPlan;
                        //            }
                        //        }
                        //    });
                    }
                });
                _this.form.MedicineId.changeSelect2(function (a) {
                    var medicineId = Q.toId(_this.form.MedicineId.value);
                    if (medicineId != "") {
                        _this.form.DoaseId.value = "13";
                        _this.form.DurationId.value = "25";
                    }
                });
                var btnAdd = $('.AddToArea')[0];
                btnAdd.innerHTML = "\n                <a href= \"javascript:;\" class=\"btn btn-success DetailAdd\"> <i class=\"fa fa-fw fa-plus-circle\"> </i>Add</a>";
                $('.DetailAdd').click(function (e) { return _this.addtoArea(); });
                return _this;
            }
            DischargeDialog.prototype.getFormKey = function () { return Default.DischargeForm.formKey; };
            DischargeDialog.prototype.getIdProperty = function () { return Default.DischargeRow.idProperty; };
            DischargeDialog.prototype.getLocalTextPrefix = function () { return Default.DischargeRow.localTextPrefix; };
            DischargeDialog.prototype.getNameProperty = function () { return Default.DischargeRow.nameProperty; };
            DischargeDialog.prototype.getService = function () { return Default.DischargeService.baseUrl; };
            DischargeDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push(CMCPS.Common.ReportHelper.createToolButton({
                    title: 'Discharge Details',
                    cssClass: 'export-pdf-button',
                    reportKey: 'Default.Discharge',
                    getParams: function () { return ({
                        DischargeID: _this.get_entityId()
                    }); }
                }));
                return buttons;
            };
            DischargeDialog.prototype.addtoArea = function () {
                //var meal = "খাওয়ার পরে";
                //if (this.form.Meal.value == true) {
                //    meal = "খাওয়ার আগে";
                //}
                if (this.form.MedicineId.value != "") {
                    if (this.form.DoaseId.value != "") {
                        if (this.form.DurationId.value != "") {
                            var meal = "";
                            if (this.form.Meal.value != "") {
                                meal = " (" + this.form.Meal.text + ") ------ ";
                            }
                            if (this.form.Advice.value == "") {
                                this.form.Advice.value = this.form.MedicineId.text + "\n              " + this.form.DoaseId.text + " ------" + meal + this.form.DurationId.text + ",";
                            }
                            else {
                                this.form.Advice.value = this.form.Advice.value + "\n" + this.form.MedicineId.text + "\n              " + this.form.DoaseId.text + " ------" + meal + this.form.DurationId.text + ",";
                            }
                            this.form.MedicineId.value = "";
                            this.form.DoaseId.value = "";
                            this.form.DurationId.value = "";
                            this.form.Meal.value = "";
                        }
                        else {
                            Q.alert("Please select duration");
                        }
                    }
                    else {
                        Q.alert("Please select dose");
                    }
                }
                else {
                    Q.alert("Please select medicine");
                }
            };
            DischargeDialog.prototype.updateInterface = function () {
                var _this = this;
                _super.prototype.updateInterface.call(this);
                if (this.isEditMode()) {
                    Serenity.EditorUtils.setReadOnly(this.form.AdmissionId, true);
                    var admissionId = Q.toId(this.form.AdmissionId.value);
                    if (admissionId != "") {
                        Default.AdmissionService.Retrieve({ EntityId: admissionId }, function (response) {
                            _this.form.Age.value = response.Entity.Age;
                            _this.form.Sex.value = response.Entity.Sex;
                            _this.form.AdmissionDate.value = response.Entity.Date;
                            _this.form.PinNumber.value = response.Entity.PinNumber;
                            _this.form.UnitNumber.value = response.Entity.UnitNumber;
                            _this.form.UnitRegNo.value = response.Entity.UnitRegNumber;
                            _this.form.BedNumber.value = response.Entity.BedNumber;
                            _this.form.HospitalRegNo.value = response.Entity.HospitalRegNumber;
                            _this.form.Weight.value = response.Entity.Weight;
                            _this.form.BloodGroup.value = response.Entity.BloodGroup;
                            var opId = Q.toId(response.Entity.OperationNoteId);
                            if (opId != null) {
                                Default.OperationNoteService.Retrieve({ EntityId: opId }, function (response) {
                                    _this.form.OperationId.value = response.Entity.OperationId;
                                    _this.form.OperationDate.value = response.Entity.Date;
                                    _this.form.Findings.value = response.Entity.Findings;
                                    _this.form.Procedures.value = response.Entity.Procedures;
                                    if (response.Entity.Diagnosis == null) {
                                        _this.form.Diagnosis.getGridField().toggle(false);
                                    }
                                    else {
                                        _this.form.Diagnosis.getGridField().toggle(true);
                                        _this.form.Diagnosis.value = response.Entity.Diagnosis;
                                    }
                                    if (response.Entity.Indication == null) {
                                        _this.form.Indication.getGridField().toggle(false);
                                    }
                                    else {
                                        _this.form.Indication.getGridField().show();
                                        _this.form.Indication.value = response.Entity.Indication;
                                    }
                                    if (response.Entity.Anesthesia == null) {
                                        _this.form.Anesthesia.getGridField().toggle(true);
                                    }
                                    else {
                                        _this.form.Anesthesia.getGridField().show();
                                        _this.form.Anesthesia.value = response.Entity.Anesthesia;
                                    }
                                    if (response.Entity.Position == null) {
                                        _this.form.Position.getGridField().hide();
                                    }
                                    else {
                                        _this.form.Position.getGridField().show();
                                        _this.form.Position.value = response.Entity.Position;
                                    }
                                    if (response.Entity.Incision == null) {
                                        _this.form.Incision.getGridField().hide();
                                    }
                                    else {
                                        _this.form.Incision.getGridField().show();
                                        _this.form.Incision.value = response.Entity.Incision;
                                    }
                                    if (response.Entity.Histopathology == null) {
                                        _this.form.Histopathology.getGridField().hide();
                                    }
                                    else {
                                        _this.form.Histopathology.getGridField().show();
                                        _this.form.Histopathology.value = response.Entity.Histopathology;
                                    }
                                    if (response.Entity.SpecialNote == null) {
                                        _this.form.SpecialNote.getGridField().hide();
                                    }
                                    else {
                                        _this.form.SpecialNote.getGridField().show();
                                        _this.form.SpecialNote.value = response.Entity.SpecialNote;
                                    }
                                    if (response.Entity.Instructions == null) {
                                        _this.form.Instructions.getGridField().hide();
                                    }
                                    else {
                                        _this.form.Instructions.getGridField().show();
                                        _this.form.Instructions.value = response.Entity.Instructions;
                                    }
                                    if (response.Entity.FurtherPlan == null) {
                                        _this.form.FurtherPlan.getGridField().hide();
                                    }
                                    else {
                                        _this.form.FurtherPlan.getGridField().show();
                                        _this.form.FurtherPlan.value = response.Entity.FurtherPlan;
                                    }
                                });
                            }
                            else {
                                _this.form.Diagnosis.value = "";
                                _this.form.Indication.value = "";
                                _this.form.Anesthesia.value = "";
                                _this.form.Position.value = "";
                                _this.form.Incision.value = "";
                                _this.form.Histopathology.value = "";
                                _this.form.SpecialNote.value = "";
                                _this.form.Instructions.value = "";
                                _this.form.FurtherPlan.value = "";
                                _this.form.OperationDate.value = "";
                                _this.form.Findings.value = "";
                                _this.form.Procedures.value = "";
                                _this.form.OperationId.value = "";
                            }
                        });
                        var criteria;
                        Default.InvestigationService.List({
                            Criteria: Serenity.Criteria.and(criteria, [["AdmissionId" /* AdmissionId */], '=', admissionId])
                        }, function (response) {
                            var en = response.Entities;
                            for (var _i = 0, en_2 = en; _i < en_2.length; _i++) {
                                var entity = en_2[_i];
                                if (entity.Cbc == null) {
                                    _this.form.Cbc.getGridField().hide();
                                }
                                else {
                                    _this.form.Cbc.getGridField().show();
                                    _this.form.Cbc.value = entity.Cbc;
                                }
                                if (entity.Creatinine == null) {
                                    _this.form.Creatinine.getGridField().hide();
                                }
                                else {
                                    _this.form.Creatinine.getGridField().show();
                                    _this.form.Creatinine.value = entity.Creatinine;
                                }
                                if (entity.Urea == null) {
                                    _this.form.Urea.getGridField().hide();
                                }
                                else {
                                    _this.form.Urea.getGridField().show();
                                    _this.form.Urea.value = entity.Urea;
                                }
                                if (entity.Sugar == null) {
                                    _this.form.Sugar.getGridField().hide();
                                }
                                else {
                                    _this.form.Sugar.getGridField().show();
                                    _this.form.Sugar.value = entity.Sugar;
                                }
                                if (entity.Albumin == null) {
                                    _this.form.Albumin.getGridField().hide();
                                }
                                else {
                                    _this.form.Albumin.getGridField().show();
                                    _this.form.Albumin.value = entity.Albumin;
                                }
                                if (entity.Calcium == null) {
                                    _this.form.Calcium.getGridField().hide();
                                }
                                else {
                                    _this.form.Calcium.getGridField().show();
                                    _this.form.Calcium.value = entity.Calcium;
                                }
                                if (entity.BloodCulture == null) {
                                    _this.form.BloodCulture.getGridField().hide();
                                }
                                else {
                                    _this.form.BloodCulture.getGridField().show();
                                    _this.form.BloodCulture.value = entity.BloodCulture;
                                }
                                if (entity.Crp == null) {
                                    _this.form.Crp.getGridField().hide();
                                }
                                else {
                                    _this.form.Crp.getGridField().show();
                                    _this.form.Crp.value = entity.Crp;
                                }
                                if (entity.Bt == null) {
                                    _this.form.Bt.getGridField().hide();
                                }
                                else {
                                    _this.form.Bt.getGridField().show();
                                    _this.form.Bt.value = entity.Bt;
                                }
                                if (entity.Ct == null) {
                                    _this.form.Ct.getGridField().hide();
                                }
                                else {
                                    _this.form.Ct.getGridField().show();
                                    _this.form.Ct.value = entity.Ct;
                                }
                                if (entity.ProthrombinTime == null) {
                                    _this.form.ProthrombinTime.getGridField().hide();
                                }
                                else {
                                    _this.form.ProthrombinTime.getGridField().show();
                                    _this.form.ProthrombinTime.value = entity.ProthrombinTime;
                                }
                                if (entity.Aptt == null) {
                                    _this.form.Aptt.getGridField().hide();
                                }
                                else {
                                    _this.form.Aptt.getGridField().show();
                                    _this.form.Aptt.value = entity.Aptt;
                                }
                                if (entity.OptionToAddHematology == null) {
                                    _this.form.OptionToAddHematology.getGridField().hide();
                                }
                                else {
                                    _this.form.OptionToAddHematology.getGridField().show();
                                    _this.form.OptionToAddHematology.value = entity.OptionToAddHematology;
                                }
                                if (entity.Na == null) {
                                    _this.form.Na.getGridField().hide();
                                }
                                else {
                                    _this.form.Na.getGridField().show();
                                    _this.form.Na.value = entity.Na;
                                }
                                if (entity.K == null) {
                                    _this.form.K.getGridField().hide();
                                }
                                else {
                                    _this.form.K.getGridField().show();
                                    _this.form.K.value = entity.K;
                                }
                                if (entity.Cl == null) {
                                    _this.form.Cl.getGridField().hide();
                                }
                                else {
                                    _this.form.Cl.getGridField().show();
                                    _this.form.Cl.value = entity.Cl;
                                }
                                if (entity.HCO3 == null) {
                                    _this.form.HCO3.getGridField().hide();
                                }
                                else {
                                    _this.form.HCO3.getGridField().show();
                                    _this.form.HCO3.value = entity.HCO3;
                                }
                                if (entity.Cxr == null) {
                                    _this.form.Cxr.getGridField().hide();
                                }
                                else {
                                    _this.form.Cxr.getGridField().show();
                                    _this.form.Cxr.value = entity.Cxr;
                                }
                                if (entity.Axr == null) {
                                    _this.form.Axr.getGridField().hide();
                                }
                                else {
                                    _this.form.Axr.getGridField().show();
                                    _this.form.Axr.value = entity.Axr;
                                }
                                if (entity.XrayKub == null) {
                                    _this.form.XrayKub.getGridField().hide();
                                }
                                else {
                                    _this.form.XrayKub.getGridField().show();
                                    _this.form.XrayKub.value = entity.XrayKub;
                                }
                                if (entity.Usg == null) {
                                    _this.form.Usg.getGridField().hide();
                                }
                                else {
                                    _this.form.Usg.getGridField().show();
                                    _this.form.Usg.value = entity.Usg;
                                }
                                if (entity.BaEnema == null) {
                                    _this.form.BaEnema.getGridField().hide();
                                }
                                else {
                                    _this.form.BaEnema.getGridField().show();
                                    _this.form.BaEnema.value = entity.BaEnema;
                                }
                                if (entity.BaMealFollowThrough == null) {
                                    _this.form.BaMealFollowThrough.getGridField().hide();
                                }
                                else {
                                    _this.form.BaMealFollowThrough.getGridField().show();
                                    _this.form.BaMealFollowThrough.value = entity.BaMealFollowThrough;
                                }
                                if (entity.Mcu == null) {
                                    _this.form.Mcu.getGridField().hide();
                                }
                                else {
                                    _this.form.Mcu.getGridField().show();
                                    _this.form.Mcu.value = entity.Mcu;
                                }
                                if (entity.Rgu == null) {
                                    _this.form.Rgu.getGridField().hide();
                                }
                                else {
                                    _this.form.Rgu.getGridField().show();
                                    _this.form.Rgu.value = entity.Rgu;
                                }
                                if (entity.Ivu == null) {
                                    _this.form.Ivu.getGridField().hide();
                                }
                                else {
                                    _this.form.Ivu.getGridField().show();
                                    _this.form.Ivu.value = entity.Ivu;
                                }
                                if (entity.CtScan == null) {
                                    _this.form.CtScan.getGridField().hide();
                                }
                                else {
                                    _this.form.CtScan.getGridField().show();
                                    _this.form.CtScan.value = entity.CtScan;
                                }
                                if (entity.Mri == null) {
                                    _this.form.Mri.getGridField().hide();
                                }
                                else {
                                    _this.form.Mri.getGridField().show();
                                    _this.form.Mri.value = entity.Mri;
                                }
                                if (entity.OptionToAddImaging == null) {
                                    _this.form.OptionToAddImaging.getGridField().hide();
                                }
                                else {
                                    _this.form.OptionToAddImaging.getGridField().show();
                                    _this.form.OptionToAddImaging.value = entity.OptionToAddImaging;
                                }
                            }
                        });
                        //OperationNoteService.List({
                        //    Criteria: Serenity.Criteria.and(criteria, [[OperationNoteRow.Fields.AdmissionId], '=', admissionId])
                        //},
                        //    (response) => {
                        //        var en = response.Entities;
                        //        for (var entity of en) {
                        //            this.form.OperationId.value = entity.OperationId.toString();
                        //            this.form.OperationDate.value = entity.Date;
                        //            this.form.Findings.value = entity.Findings;
                        //            this.form.Procedures.value = entity.Procedures;
                        //            if (entity.Diagnosis == null) {
                        //                this.form.Diagnosis.getGridField().hide();
                        //            }
                        //            else {
                        //                this.form.Diagnosis.getGridField().show();
                        //                this.form.Diagnosis.value = entity.Diagnosis;
                        //            }
                        //            if (entity.Indication == null) {
                        //                this.form.Indication.getGridField().hide();
                        //            }
                        //            else {
                        //                this.form.Indication.getGridField().show();
                        //                this.form.Indication.value = entity.Indication;
                        //            }
                        //            if (entity.Anesthesia == null) {
                        //                this.form.Anesthesia.getGridField().hide();
                        //            }
                        //            else {
                        //                this.form.Anesthesia.getGridField().show();
                        //                this.form.Anesthesia.value = entity.Anesthesia;
                        //            }
                        //            if (entity.Position == null) {
                        //                this.form.Position.getGridField().hide();
                        //            }
                        //            else {
                        //                this.form.Position.getGridField().show();
                        //                this.form.Position.value = entity.Position;
                        //            }
                        //            if (entity.Incision == null) {
                        //                this.form.Incision.getGridField().hide();
                        //            }
                        //            else {
                        //                this.form.Incision.getGridField().show();
                        //                this.form.Incision.value = entity.Incision;
                        //            }
                        //            if (entity.Histopathology == null) {
                        //                this.form.Histopathology.getGridField().hide();
                        //            }
                        //            else {
                        //                this.form.Histopathology.getGridField().show();
                        //                this.form.Histopathology.value = entity.Histopathology;
                        //            }
                        //            if (entity.SpecialNote == null) {
                        //                this.form.SpecialNote.getGridField().hide();
                        //            }
                        //            else {
                        //                this.form.SpecialNote.getGridField().show();
                        //                this.form.SpecialNote.value = entity.SpecialNote;
                        //            }
                        //            if (entity.Instructions == null) {
                        //                this.form.Instructions.getGridField().hide();
                        //            }
                        //            else {
                        //                this.form.Instructions.getGridField().show();
                        //                this.form.Instructions.value = entity.Instructions;
                        //            }
                        //            if (entity.FurtherPlan == null) {
                        //                this.form.FurtherPlan.getGridField().hide();
                        //            }
                        //            else {
                        //                this.form.FurtherPlan.getGridField().show();
                        //                this.form.FurtherPlan.value = entity.FurtherPlan;
                        //            }
                        //        }
                        //    });
                    }
                }
                this.toolbar.findButton('export-pdf-button').toggle(this.isEditMode());
            };
            DischargeDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], DischargeDialog);
            return DischargeDialog;
        }(Serenity.EntityDialog));
        Default.DischargeDialog = DischargeDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var DischargeGrid = /** @class */ (function (_super) {
            __extends(DischargeGrid, _super);
            function DischargeGrid(container) {
                return _super.call(this, container) || this;
            }
            DischargeGrid.prototype.getColumnsKey = function () { return 'Default.Discharge'; };
            DischargeGrid.prototype.getDialogType = function () { return Default.DischargeDialog; };
            DischargeGrid.prototype.getIdProperty = function () { return Default.DischargeRow.idProperty; };
            DischargeGrid.prototype.getLocalTextPrefix = function () { return Default.DischargeRow.localTextPrefix; };
            DischargeGrid.prototype.getService = function () { return Default.DischargeService.baseUrl; };
            DischargeGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: 'Delete Row',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action delete-row" title="delete">' +
                        '<i class="fa fa-trash-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                columns.splice(1, 0, {
                    field: 'Print Discharge',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action print-invoice" title="Treatment Details">' +
                        '<i class="fa fa-file-pdf-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return columns;
            };
            DischargeGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('print-invoice')) {
                        CMCPS.Common.ReportHelper.execute({
                            reportKey: 'Default.Discharge',
                            params: {
                                DischargeID: item.DischargeId
                            }
                        });
                    }
                    else if (target.hasClass('delete-row')) {
                        Q.confirm('Delete record?', function () {
                            CMCPS.Default.DischargeService.Delete({
                                EntityId: item.DischargeId,
                            }, function (response) {
                                _this.refresh();
                            });
                        });
                    }
                }
            };
            DischargeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DischargeGrid);
            return DischargeGrid;
        }(Serenity.EntityGrid));
        Default.DischargeGrid = DischargeGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var DistrictDialog = /** @class */ (function (_super) {
            __extends(DistrictDialog, _super);
            function DistrictDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.DistrictForm(_this.idPrefix);
                return _this;
            }
            DistrictDialog.prototype.getFormKey = function () { return Default.DistrictForm.formKey; };
            DistrictDialog.prototype.getIdProperty = function () { return Default.DistrictRow.idProperty; };
            DistrictDialog.prototype.getLocalTextPrefix = function () { return Default.DistrictRow.localTextPrefix; };
            DistrictDialog.prototype.getNameProperty = function () { return Default.DistrictRow.nameProperty; };
            DistrictDialog.prototype.getService = function () { return Default.DistrictService.baseUrl; };
            DistrictDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DistrictDialog);
            return DistrictDialog;
        }(Serenity.EntityDialog));
        Default.DistrictDialog = DistrictDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var DistrictGrid = /** @class */ (function (_super) {
            __extends(DistrictGrid, _super);
            function DistrictGrid(container) {
                return _super.call(this, container) || this;
            }
            DistrictGrid.prototype.getColumnsKey = function () { return 'Default.District'; };
            DistrictGrid.prototype.getDialogType = function () { return Default.DistrictDialog; };
            DistrictGrid.prototype.getIdProperty = function () { return Default.DistrictRow.idProperty; };
            DistrictGrid.prototype.getLocalTextPrefix = function () { return Default.DistrictRow.localTextPrefix; };
            DistrictGrid.prototype.getService = function () { return Default.DistrictService.baseUrl; };
            DistrictGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DistrictGrid);
            return DistrictGrid;
        }(Serenity.EntityGrid));
        Default.DistrictGrid = DistrictGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var DoaseDialog = /** @class */ (function (_super) {
            __extends(DoaseDialog, _super);
            function DoaseDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.DoaseForm(_this.idPrefix);
                return _this;
            }
            DoaseDialog.prototype.getFormKey = function () { return Default.DoaseForm.formKey; };
            DoaseDialog.prototype.getIdProperty = function () { return Default.DoaseRow.idProperty; };
            DoaseDialog.prototype.getLocalTextPrefix = function () { return Default.DoaseRow.localTextPrefix; };
            DoaseDialog.prototype.getNameProperty = function () { return Default.DoaseRow.nameProperty; };
            DoaseDialog.prototype.getService = function () { return Default.DoaseService.baseUrl; };
            DoaseDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DoaseDialog);
            return DoaseDialog;
        }(Serenity.EntityDialog));
        Default.DoaseDialog = DoaseDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var DoaseGrid = /** @class */ (function (_super) {
            __extends(DoaseGrid, _super);
            function DoaseGrid(container) {
                return _super.call(this, container) || this;
            }
            DoaseGrid.prototype.getColumnsKey = function () { return 'Default.Doase'; };
            DoaseGrid.prototype.getDialogType = function () { return Default.DoaseDialog; };
            DoaseGrid.prototype.getIdProperty = function () { return Default.DoaseRow.idProperty; };
            DoaseGrid.prototype.getLocalTextPrefix = function () { return Default.DoaseRow.localTextPrefix; };
            DoaseGrid.prototype.getService = function () { return Default.DoaseService.baseUrl; };
            DoaseGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DoaseGrid);
            return DoaseGrid;
        }(Serenity.EntityGrid));
        Default.DoaseGrid = DoaseGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var DurationDialog = /** @class */ (function (_super) {
            __extends(DurationDialog, _super);
            function DurationDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.DurationForm(_this.idPrefix);
                return _this;
            }
            DurationDialog.prototype.getFormKey = function () { return Default.DurationForm.formKey; };
            DurationDialog.prototype.getIdProperty = function () { return Default.DurationRow.idProperty; };
            DurationDialog.prototype.getLocalTextPrefix = function () { return Default.DurationRow.localTextPrefix; };
            DurationDialog.prototype.getNameProperty = function () { return Default.DurationRow.nameProperty; };
            DurationDialog.prototype.getService = function () { return Default.DurationService.baseUrl; };
            DurationDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DurationDialog);
            return DurationDialog;
        }(Serenity.EntityDialog));
        Default.DurationDialog = DurationDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var DurationGrid = /** @class */ (function (_super) {
            __extends(DurationGrid, _super);
            function DurationGrid(container) {
                return _super.call(this, container) || this;
            }
            DurationGrid.prototype.getColumnsKey = function () { return 'Default.Duration'; };
            DurationGrid.prototype.getDialogType = function () { return Default.DurationDialog; };
            DurationGrid.prototype.getIdProperty = function () { return Default.DurationRow.idProperty; };
            DurationGrid.prototype.getLocalTextPrefix = function () { return Default.DurationRow.localTextPrefix; };
            DurationGrid.prototype.getService = function () { return Default.DurationService.baseUrl; };
            DurationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DurationGrid);
            return DurationGrid;
        }(Serenity.EntityGrid));
        Default.DurationGrid = DurationGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var FamilyHistoryDialog = /** @class */ (function (_super) {
            __extends(FamilyHistoryDialog, _super);
            function FamilyHistoryDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.FamilyHistoryForm(_this.idPrefix);
                return _this;
            }
            FamilyHistoryDialog.prototype.getFormKey = function () { return Default.FamilyHistoryForm.formKey; };
            FamilyHistoryDialog.prototype.getIdProperty = function () { return Default.FamilyHistoryRow.idProperty; };
            FamilyHistoryDialog.prototype.getLocalTextPrefix = function () { return Default.FamilyHistoryRow.localTextPrefix; };
            FamilyHistoryDialog.prototype.getNameProperty = function () { return Default.FamilyHistoryRow.nameProperty; };
            FamilyHistoryDialog.prototype.getService = function () { return Default.FamilyHistoryService.baseUrl; };
            FamilyHistoryDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], FamilyHistoryDialog);
            return FamilyHistoryDialog;
        }(Serenity.EntityDialog));
        Default.FamilyHistoryDialog = FamilyHistoryDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var FamilyHistoryGrid = /** @class */ (function (_super) {
            __extends(FamilyHistoryGrid, _super);
            function FamilyHistoryGrid(container) {
                return _super.call(this, container) || this;
            }
            FamilyHistoryGrid.prototype.getColumnsKey = function () { return 'Default.FamilyHistory'; };
            FamilyHistoryGrid.prototype.getDialogType = function () { return Default.FamilyHistoryDialog; };
            FamilyHistoryGrid.prototype.getIdProperty = function () { return Default.FamilyHistoryRow.idProperty; };
            FamilyHistoryGrid.prototype.getLocalTextPrefix = function () { return Default.FamilyHistoryRow.localTextPrefix; };
            FamilyHistoryGrid.prototype.getService = function () { return Default.FamilyHistoryService.baseUrl; };
            FamilyHistoryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], FamilyHistoryGrid);
            return FamilyHistoryGrid;
        }(Serenity.EntityGrid));
        Default.FamilyHistoryGrid = FamilyHistoryGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var FollowUpDialog = /** @class */ (function (_super) {
            __extends(FollowUpDialog, _super);
            function FollowUpDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Default.FollowUpForm(_this.idPrefix);
                _this.form.AdmissionId.changeSelect2(function (x) {
                    var admissionId = Q.toId(_this.form.AdmissionId.value);
                    if (admissionId != "") {
                        Default.AdmissionService.Retrieve({ EntityId: admissionId }, function (response) {
                            _this.form.Age.value = response.Entity.Age;
                            _this.form.Sex.value = response.Entity.Sex;
                            _this.form.AdmissionDate.value = response.Entity.Date;
                            _this.form.PinNumber.value = response.Entity.PinNumber;
                            _this.form.UnitNumber.value = response.Entity.UnitNumber;
                            _this.form.UnitRegNo.value = response.Entity.UnitRegNumber;
                            _this.form.BedNumber.value = response.Entity.BedNumber;
                            _this.form.HospitalRegNo.value = response.Entity.HospitalRegNumber;
                            _this.form.Weight.value = response.Entity.Weight;
                            _this.form.BloodGroup.value = response.Entity.BloodGroup;
                        });
                    }
                });
                var fieldButton = $('.AddtoDiagnosis')[0];
                fieldButton.innerHTML = "\n                <a href= \"javascript:;\" class=\"btn btn-success DetailAdd\"> <i class=\"fa fa-fw fa-plus-circle\"> </i>Add</a>";
                $('.DetailAdd').click(function (e) { return _this.addtoGrid(); });
                var fieldbtn = $('.AddtoComplaint')[0];
                fieldbtn.innerHTML = "\n                <a href= \"javascript:;\" class=\"btn btn-success DetailAddComplaint\"> <i class=\"fa fa-fw fa-plus-circle\"> </i>Add</a>";
                $('.DetailAddComplaint').click(function (e) { return _this.addtoComplaint(); });
                return _this;
            }
            FollowUpDialog.prototype.getFormKey = function () { return Default.FollowUpForm.formKey; };
            FollowUpDialog.prototype.getIdProperty = function () { return Default.FollowUpRow.idProperty; };
            FollowUpDialog.prototype.getLocalTextPrefix = function () { return Default.FollowUpRow.localTextPrefix; };
            FollowUpDialog.prototype.getNameProperty = function () { return Default.FollowUpRow.nameProperty; };
            FollowUpDialog.prototype.getService = function () { return Default.FollowUpService.baseUrl; };
            FollowUpDialog.prototype.addtoComplaint = function () {
                if (this.form.ChiefComplaintId.value != null) {
                    if (this.form.ChiefComplaint.value == "") {
                        this.form.ChiefComplaint.value = this.form.ChiefComplaintId.text;
                    }
                    else {
                        this.form.ChiefComplaint.value = this.form.ChiefComplaint.value + "\n" + this.form.ChiefComplaintId.text;
                    }
                }
            };
            FollowUpDialog.prototype.addtoGrid = function () {
                if (this.form.DiagnosisId.value != null) {
                    if (this.form.Diagnosis.value == "") {
                        this.form.Diagnosis.value = this.form.DiagnosisId.text;
                    }
                    else {
                        this.form.Diagnosis.value = this.form.Diagnosis.value + "\n" + this.form.DiagnosisId.text;
                    }
                }
            };
            FollowUpDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push(CMCPS.Common.ReportHelper.createToolButton({
                    title: 'Follow Up Details',
                    cssClass: 'export-pdf-button',
                    reportKey: 'Default.FollowUp',
                    getParams: function () { return ({
                        FollowUpID: _this.get_entityId()
                    }); }
                }));
                return buttons;
            };
            FollowUpDialog.prototype.updateInterface = function () {
                var _this = this;
                _super.prototype.updateInterface.call(this);
                if (this.isEditMode()) {
                    Serenity.EditorUtils.setReadOnly(this.form.AdmissionId, true);
                    var admissionId = Q.toId(this.form.AdmissionId.value);
                    if (admissionId != "") {
                        Default.AdmissionService.Retrieve({ EntityId: admissionId }, function (response) {
                            _this.form.Age.value = response.Entity.Age;
                            _this.form.Sex.value = response.Entity.Sex;
                            _this.form.AdmissionDate.value = response.Entity.Date;
                            _this.form.PinNumber.value = response.Entity.PinNumber;
                            _this.form.UnitNumber.value = response.Entity.UnitNumber;
                            _this.form.UnitRegNo.value = response.Entity.UnitRegNumber;
                            _this.form.BedNumber.value = response.Entity.BedNumber;
                            _this.form.HospitalRegNo.value = response.Entity.HospitalRegNumber;
                            _this.form.Weight.value = response.Entity.Weight;
                            _this.form.BloodGroup.value = response.Entity.BloodGroup;
                        });
                    }
                }
                this.toolbar.findButton('export-pdf-button').toggle(this.isEditMode());
            };
            FollowUpDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], FollowUpDialog);
            return FollowUpDialog;
        }(Serenity.EntityDialog));
        Default.FollowUpDialog = FollowUpDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var FollowUpGrid = /** @class */ (function (_super) {
            __extends(FollowUpGrid, _super);
            function FollowUpGrid(container) {
                return _super.call(this, container) || this;
            }
            FollowUpGrid.prototype.getColumnsKey = function () { return 'Default.FollowUp'; };
            FollowUpGrid.prototype.getDialogType = function () { return Default.FollowUpDialog; };
            FollowUpGrid.prototype.getIdProperty = function () { return Default.FollowUpRow.idProperty; };
            FollowUpGrid.prototype.getLocalTextPrefix = function () { return Default.FollowUpRow.localTextPrefix; };
            FollowUpGrid.prototype.getService = function () { return Default.FollowUpService.baseUrl; };
            FollowUpGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: 'Delete Row',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action delete-row" title="delete">' +
                        '<i class="fa fa-trash-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                columns.splice(1, 0, {
                    field: 'Print Investigation',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action print-invoice" title="Investigation Details">' +
                        '<i class="fa fa-file-pdf-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return columns;
            };
            FollowUpGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('print-invoice')) {
                        CMCPS.Common.ReportHelper.execute({
                            reportKey: 'Default.FollowUp',
                            params: {
                                FollowUpID: item.FollowUpId
                            }
                        });
                    }
                    else if (target.hasClass('delete-row')) {
                        Q.confirm('Delete record?', function () {
                            CMCPS.Default.FollowUpService.Delete({
                                EntityId: item.FollowUpId,
                            }, function (response) {
                                _this.refresh();
                            });
                        });
                    }
                }
            };
            FollowUpGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], FollowUpGrid);
            return FollowUpGrid;
        }(Serenity.EntityGrid));
        Default.FollowUpGrid = FollowUpGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var FurtherPlanDialog = /** @class */ (function (_super) {
            __extends(FurtherPlanDialog, _super);
            function FurtherPlanDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.FurtherPlanForm(_this.idPrefix);
                return _this;
            }
            FurtherPlanDialog.prototype.getFormKey = function () { return Default.FurtherPlanForm.formKey; };
            FurtherPlanDialog.prototype.getIdProperty = function () { return Default.FurtherPlanRow.idProperty; };
            FurtherPlanDialog.prototype.getLocalTextPrefix = function () { return Default.FurtherPlanRow.localTextPrefix; };
            FurtherPlanDialog.prototype.getNameProperty = function () { return Default.FurtherPlanRow.nameProperty; };
            FurtherPlanDialog.prototype.getService = function () { return Default.FurtherPlanService.baseUrl; };
            FurtherPlanDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], FurtherPlanDialog);
            return FurtherPlanDialog;
        }(Serenity.EntityDialog));
        Default.FurtherPlanDialog = FurtherPlanDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var FurtherPlanGrid = /** @class */ (function (_super) {
            __extends(FurtherPlanGrid, _super);
            function FurtherPlanGrid(container) {
                return _super.call(this, container) || this;
            }
            FurtherPlanGrid.prototype.getColumnsKey = function () { return 'Default.FurtherPlan'; };
            FurtherPlanGrid.prototype.getDialogType = function () { return Default.FurtherPlanDialog; };
            FurtherPlanGrid.prototype.getIdProperty = function () { return Default.FurtherPlanRow.idProperty; };
            FurtherPlanGrid.prototype.getLocalTextPrefix = function () { return Default.FurtherPlanRow.localTextPrefix; };
            FurtherPlanGrid.prototype.getService = function () { return Default.FurtherPlanService.baseUrl; };
            FurtherPlanGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], FurtherPlanGrid);
            return FurtherPlanGrid;
        }(Serenity.EntityGrid));
        Default.FurtherPlanGrid = FurtherPlanGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var HistopathologyDialog = /** @class */ (function (_super) {
            __extends(HistopathologyDialog, _super);
            function HistopathologyDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.HistopathologyForm(_this.idPrefix);
                return _this;
            }
            HistopathologyDialog.prototype.getFormKey = function () { return Default.HistopathologyForm.formKey; };
            HistopathologyDialog.prototype.getIdProperty = function () { return Default.HistopathologyRow.idProperty; };
            HistopathologyDialog.prototype.getLocalTextPrefix = function () { return Default.HistopathologyRow.localTextPrefix; };
            HistopathologyDialog.prototype.getNameProperty = function () { return Default.HistopathologyRow.nameProperty; };
            HistopathologyDialog.prototype.getService = function () { return Default.HistopathologyService.baseUrl; };
            HistopathologyDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], HistopathologyDialog);
            return HistopathologyDialog;
        }(Serenity.EntityDialog));
        Default.HistopathologyDialog = HistopathologyDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var HistopathologyGrid = /** @class */ (function (_super) {
            __extends(HistopathologyGrid, _super);
            function HistopathologyGrid(container) {
                return _super.call(this, container) || this;
            }
            HistopathologyGrid.prototype.getColumnsKey = function () { return 'Default.Histopathology'; };
            HistopathologyGrid.prototype.getDialogType = function () { return Default.HistopathologyDialog; };
            HistopathologyGrid.prototype.getIdProperty = function () { return Default.HistopathologyRow.idProperty; };
            HistopathologyGrid.prototype.getLocalTextPrefix = function () { return Default.HistopathologyRow.localTextPrefix; };
            HistopathologyGrid.prototype.getService = function () { return Default.HistopathologyService.baseUrl; };
            HistopathologyGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], HistopathologyGrid);
            return HistopathologyGrid;
        }(Serenity.EntityGrid));
        Default.HistopathologyGrid = HistopathologyGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var IllNessDialog = /** @class */ (function (_super) {
            __extends(IllNessDialog, _super);
            function IllNessDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.IllNessForm(_this.idPrefix);
                return _this;
            }
            IllNessDialog.prototype.getFormKey = function () { return Default.IllNessForm.formKey; };
            IllNessDialog.prototype.getIdProperty = function () { return Default.IllNessRow.idProperty; };
            IllNessDialog.prototype.getLocalTextPrefix = function () { return Default.IllNessRow.localTextPrefix; };
            IllNessDialog.prototype.getNameProperty = function () { return Default.IllNessRow.nameProperty; };
            IllNessDialog.prototype.getService = function () { return Default.IllNessService.baseUrl; };
            IllNessDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], IllNessDialog);
            return IllNessDialog;
        }(Serenity.EntityDialog));
        Default.IllNessDialog = IllNessDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMC;
(function (CMC) {
    var Default;
    (function (Default) {
        var IllNessGrid = /** @class */ (function (_super) {
            __extends(IllNessGrid, _super);
            function IllNessGrid(container) {
                return _super.call(this, container) || this;
            }
            IllNessGrid.prototype.getColumnsKey = function () { return 'Default.IllNess'; };
            IllNessGrid.prototype.getDialogType = function () { return IllNessDialog; };
            IllNessGrid.prototype.getIdProperty = function () { return IllNessRow.idProperty; };
            IllNessGrid.prototype.getLocalTextPrefix = function () { return IllNessRow.localTextPrefix; };
            IllNessGrid.prototype.getService = function () { return IllNessService.baseUrl; };
            IllNessGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], IllNessGrid);
            return IllNessGrid;
        }(Serenity.EntityGrid));
        Default.IllNessGrid = IllNessGrid;
    })(Default = CMC.Default || (CMC.Default = {}));
})(CMC || (CMC = {}));
var CMC;
(function (CMC) {
    var Default;
    (function (Default) {
        var IllnessHistoryDialog = /** @class */ (function (_super) {
            __extends(IllnessHistoryDialog, _super);
            function IllnessHistoryDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.IllnessHistoryForm(_this.idPrefix);
                return _this;
            }
            IllnessHistoryDialog.prototype.getFormKey = function () { return Default.IllnessHistoryForm.formKey; };
            IllnessHistoryDialog.prototype.getIdProperty = function () { return Default.IllnessHistoryRow.idProperty; };
            IllnessHistoryDialog.prototype.getLocalTextPrefix = function () { return Default.IllnessHistoryRow.localTextPrefix; };
            IllnessHistoryDialog.prototype.getService = function () { return Default.IllnessHistoryService.baseUrl; };
            IllnessHistoryDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], IllnessHistoryDialog);
            return IllnessHistoryDialog;
        }(Serenity.EntityDialog));
        Default.IllnessHistoryDialog = IllnessHistoryDialog;
    })(Default = CMC.Default || (CMC.Default = {}));
})(CMC || (CMC = {}));
var CMC;
(function (CMC) {
    var Default;
    (function (Default) {
        var IllnessHistoryGrid = /** @class */ (function (_super) {
            __extends(IllnessHistoryGrid, _super);
            function IllnessHistoryGrid(container) {
                return _super.call(this, container) || this;
            }
            IllnessHistoryGrid.prototype.getColumnsKey = function () { return 'Default.IllnessHistory'; };
            IllnessHistoryGrid.prototype.getDialogType = function () { return Default.IllnessHistoryDialog; };
            IllnessHistoryGrid.prototype.getIdProperty = function () { return Default.IllnessHistoryRow.idProperty; };
            IllnessHistoryGrid.prototype.getLocalTextPrefix = function () { return Default.IllnessHistoryRow.localTextPrefix; };
            IllnessHistoryGrid.prototype.getService = function () { return Default.IllnessHistoryService.baseUrl; };
            IllnessHistoryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], IllnessHistoryGrid);
            return IllnessHistoryGrid;
        }(Serenity.EntityGrid));
        Default.IllnessHistoryGrid = IllnessHistoryGrid;
    })(Default = CMC.Default || (CMC.Default = {}));
})(CMC || (CMC = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var ImagesDialog = /** @class */ (function (_super) {
            __extends(ImagesDialog, _super);
            function ImagesDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Default.ImagesForm(_this.idPrefix);
                _this.form.AdmissionId.changeSelect2(function (x) {
                    var admissionId = Q.toId(_this.form.AdmissionId.value);
                    if (admissionId != "") {
                        Default.AdmissionService.Retrieve({ EntityId: admissionId }, function (response) {
                            _this.form.Age.value = response.Entity.Age;
                            _this.form.Sex.value = response.Entity.Sex;
                            _this.form.AdmissionDate.value = response.Entity.Date;
                            _this.form.PinNumber.value = response.Entity.PinNumber;
                            _this.form.UnitNumber.value = response.Entity.UnitNumber;
                            _this.form.UnitRegNo.value = response.Entity.UnitRegNumber;
                            _this.form.BedNumber.value = response.Entity.BedNumber;
                            _this.form.Weight.value = response.Entity.Weight;
                            _this.form.BloodGroup.value = response.Entity.BloodGroup;
                            _this.form.HospitalRegNo.value = response.Entity.HospitalRegNumber;
                        });
                    }
                });
                return _this;
            }
            ImagesDialog.prototype.getFormKey = function () { return Default.ImagesForm.formKey; };
            ImagesDialog.prototype.getIdProperty = function () { return Default.ImagesRow.idProperty; };
            ImagesDialog.prototype.getLocalTextPrefix = function () { return Default.ImagesRow.localTextPrefix; };
            ImagesDialog.prototype.getNameProperty = function () { return Default.ImagesRow.nameProperty; };
            ImagesDialog.prototype.getService = function () { return Default.ImagesService.baseUrl; };
            ImagesDialog.prototype.updateInterface = function () {
                var _this = this;
                _super.prototype.updateInterface.call(this);
                if (this.isEditMode()) {
                    Serenity.EditorUtils.setReadOnly(this.form.AdmissionId, true);
                    var admissionId = Q.toId(this.form.AdmissionId.value);
                    if (admissionId != "") {
                        Default.AdmissionService.Retrieve({ EntityId: admissionId }, function (response) {
                            _this.form.Age.value = response.Entity.Age;
                            _this.form.Sex.value = response.Entity.Sex;
                            _this.form.AdmissionDate.value = response.Entity.Date;
                            _this.form.PinNumber.value = response.Entity.PinNumber;
                            _this.form.UnitNumber.value = response.Entity.UnitNumber;
                            _this.form.UnitRegNo.value = response.Entity.UnitRegNumber;
                            _this.form.BedNumber.value = response.Entity.BedNumber;
                            _this.form.HospitalRegNo.value = response.Entity.HospitalRegNumber;
                            _this.form.Weight.value = response.Entity.Weight;
                            _this.form.BloodGroup.value = response.Entity.BloodGroup;
                        });
                    }
                }
                this.toolbar.findButton('export-pdf-button').toggle(this.isEditMode());
            };
            ImagesDialog = __decorate([
                Serenity.Decorators.panel(),
                Serenity.Decorators.registerClass()
            ], ImagesDialog);
            return ImagesDialog;
        }(Serenity.EntityDialog));
        Default.ImagesDialog = ImagesDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var ImagesGrid = /** @class */ (function (_super) {
            __extends(ImagesGrid, _super);
            function ImagesGrid(container) {
                return _super.call(this, container) || this;
            }
            ImagesGrid.prototype.getColumnsKey = function () { return 'Default.Images'; };
            ImagesGrid.prototype.getDialogType = function () { return Default.ImagesDialog; };
            ImagesGrid.prototype.getIdProperty = function () { return Default.ImagesRow.idProperty; };
            ImagesGrid.prototype.getLocalTextPrefix = function () { return Default.ImagesRow.localTextPrefix; };
            ImagesGrid.prototype.getService = function () { return Default.ImagesService.baseUrl; };
            ImagesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ImagesGrid);
            return ImagesGrid;
        }(Serenity.EntityGrid));
        Default.ImagesGrid = ImagesGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var ImmunizationDialog = /** @class */ (function (_super) {
            __extends(ImmunizationDialog, _super);
            function ImmunizationDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.ImmunizationForm(_this.idPrefix);
                return _this;
            }
            ImmunizationDialog.prototype.getFormKey = function () { return Default.ImmunizationForm.formKey; };
            ImmunizationDialog.prototype.getIdProperty = function () { return Default.ImmunizationRow.idProperty; };
            ImmunizationDialog.prototype.getLocalTextPrefix = function () { return Default.ImmunizationRow.localTextPrefix; };
            ImmunizationDialog.prototype.getNameProperty = function () { return Default.ImmunizationRow.nameProperty; };
            ImmunizationDialog.prototype.getService = function () { return Default.ImmunizationService.baseUrl; };
            ImmunizationDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ImmunizationDialog);
            return ImmunizationDialog;
        }(Serenity.EntityDialog));
        Default.ImmunizationDialog = ImmunizationDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var ImmunizationGrid = /** @class */ (function (_super) {
            __extends(ImmunizationGrid, _super);
            function ImmunizationGrid(container) {
                return _super.call(this, container) || this;
            }
            ImmunizationGrid.prototype.getColumnsKey = function () { return 'Default.Immunization'; };
            ImmunizationGrid.prototype.getDialogType = function () { return Default.ImmunizationDialog; };
            ImmunizationGrid.prototype.getIdProperty = function () { return Default.ImmunizationRow.idProperty; };
            ImmunizationGrid.prototype.getLocalTextPrefix = function () { return Default.ImmunizationRow.localTextPrefix; };
            ImmunizationGrid.prototype.getService = function () { return Default.ImmunizationService.baseUrl; };
            ImmunizationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ImmunizationGrid);
            return ImmunizationGrid;
        }(Serenity.EntityGrid));
        Default.ImmunizationGrid = ImmunizationGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var ImmunizationHistoryDialog = /** @class */ (function (_super) {
            __extends(ImmunizationHistoryDialog, _super);
            function ImmunizationHistoryDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.ImmunizationHistoryForm(_this.idPrefix);
                return _this;
            }
            ImmunizationHistoryDialog.prototype.getFormKey = function () { return Default.ImmunizationHistoryForm.formKey; };
            ImmunizationHistoryDialog.prototype.getIdProperty = function () { return Default.ImmunizationHistoryRow.idProperty; };
            ImmunizationHistoryDialog.prototype.getLocalTextPrefix = function () { return Default.ImmunizationHistoryRow.localTextPrefix; };
            ImmunizationHistoryDialog.prototype.getService = function () { return Default.ImmunizationHistoryService.baseUrl; };
            ImmunizationHistoryDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ImmunizationHistoryDialog);
            return ImmunizationHistoryDialog;
        }(Serenity.EntityDialog));
        Default.ImmunizationHistoryDialog = ImmunizationHistoryDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var ImmunizationHistoryGrid = /** @class */ (function (_super) {
            __extends(ImmunizationHistoryGrid, _super);
            function ImmunizationHistoryGrid(container) {
                return _super.call(this, container) || this;
            }
            ImmunizationHistoryGrid.prototype.getColumnsKey = function () { return 'Default.ImmunizationHistory'; };
            ImmunizationHistoryGrid.prototype.getDialogType = function () { return Default.ImmunizationHistoryDialog; };
            ImmunizationHistoryGrid.prototype.getIdProperty = function () { return Default.ImmunizationHistoryRow.idProperty; };
            ImmunizationHistoryGrid.prototype.getLocalTextPrefix = function () { return Default.ImmunizationHistoryRow.localTextPrefix; };
            ImmunizationHistoryGrid.prototype.getService = function () { return Default.ImmunizationHistoryService.baseUrl; };
            ImmunizationHistoryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ImmunizationHistoryGrid);
            return ImmunizationHistoryGrid;
        }(Serenity.EntityGrid));
        Default.ImmunizationHistoryGrid = ImmunizationHistoryGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var IncisionDialog = /** @class */ (function (_super) {
            __extends(IncisionDialog, _super);
            function IncisionDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.IncisionForm(_this.idPrefix);
                return _this;
            }
            IncisionDialog.prototype.getFormKey = function () { return Default.IncisionForm.formKey; };
            IncisionDialog.prototype.getIdProperty = function () { return Default.IncisionRow.idProperty; };
            IncisionDialog.prototype.getLocalTextPrefix = function () { return Default.IncisionRow.localTextPrefix; };
            IncisionDialog.prototype.getNameProperty = function () { return Default.IncisionRow.nameProperty; };
            IncisionDialog.prototype.getService = function () { return Default.IncisionService.baseUrl; };
            IncisionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], IncisionDialog);
            return IncisionDialog;
        }(Serenity.EntityDialog));
        Default.IncisionDialog = IncisionDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var IncisionGrid = /** @class */ (function (_super) {
            __extends(IncisionGrid, _super);
            function IncisionGrid(container) {
                return _super.call(this, container) || this;
            }
            IncisionGrid.prototype.getColumnsKey = function () { return 'Default.Incision'; };
            IncisionGrid.prototype.getDialogType = function () { return Default.IncisionDialog; };
            IncisionGrid.prototype.getIdProperty = function () { return Default.IncisionRow.idProperty; };
            IncisionGrid.prototype.getLocalTextPrefix = function () { return Default.IncisionRow.localTextPrefix; };
            IncisionGrid.prototype.getService = function () { return Default.IncisionService.baseUrl; };
            IncisionGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], IncisionGrid);
            return IncisionGrid;
        }(Serenity.EntityGrid));
        Default.IncisionGrid = IncisionGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var IndicationDialog = /** @class */ (function (_super) {
            __extends(IndicationDialog, _super);
            function IndicationDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.IndicationForm(_this.idPrefix);
                return _this;
            }
            IndicationDialog.prototype.getFormKey = function () { return Default.IndicationForm.formKey; };
            IndicationDialog.prototype.getIdProperty = function () { return Default.IndicationRow.idProperty; };
            IndicationDialog.prototype.getLocalTextPrefix = function () { return Default.IndicationRow.localTextPrefix; };
            IndicationDialog.prototype.getNameProperty = function () { return Default.IndicationRow.nameProperty; };
            IndicationDialog.prototype.getService = function () { return Default.IndicationService.baseUrl; };
            IndicationDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], IndicationDialog);
            return IndicationDialog;
        }(Serenity.EntityDialog));
        Default.IndicationDialog = IndicationDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var IndicationGrid = /** @class */ (function (_super) {
            __extends(IndicationGrid, _super);
            function IndicationGrid(container) {
                return _super.call(this, container) || this;
            }
            IndicationGrid.prototype.getColumnsKey = function () { return 'Default.Indication'; };
            IndicationGrid.prototype.getDialogType = function () { return Default.IndicationDialog; };
            IndicationGrid.prototype.getIdProperty = function () { return Default.IndicationRow.idProperty; };
            IndicationGrid.prototype.getLocalTextPrefix = function () { return Default.IndicationRow.localTextPrefix; };
            IndicationGrid.prototype.getService = function () { return Default.IndicationService.baseUrl; };
            IndicationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], IndicationGrid);
            return IndicationGrid;
        }(Serenity.EntityGrid));
        Default.IndicationGrid = IndicationGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var InstructionsDialog = /** @class */ (function (_super) {
            __extends(InstructionsDialog, _super);
            function InstructionsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.InstructionsForm(_this.idPrefix);
                return _this;
            }
            InstructionsDialog.prototype.getFormKey = function () { return Default.InstructionsForm.formKey; };
            InstructionsDialog.prototype.getIdProperty = function () { return Default.InstructionsRow.idProperty; };
            InstructionsDialog.prototype.getLocalTextPrefix = function () { return Default.InstructionsRow.localTextPrefix; };
            InstructionsDialog.prototype.getNameProperty = function () { return Default.InstructionsRow.nameProperty; };
            InstructionsDialog.prototype.getService = function () { return Default.InstructionsService.baseUrl; };
            InstructionsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], InstructionsDialog);
            return InstructionsDialog;
        }(Serenity.EntityDialog));
        Default.InstructionsDialog = InstructionsDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var InstructionsGrid = /** @class */ (function (_super) {
            __extends(InstructionsGrid, _super);
            function InstructionsGrid(container) {
                return _super.call(this, container) || this;
            }
            InstructionsGrid.prototype.getColumnsKey = function () { return 'Default.Instructions'; };
            InstructionsGrid.prototype.getDialogType = function () { return Default.InstructionsDialog; };
            InstructionsGrid.prototype.getIdProperty = function () { return Default.InstructionsRow.idProperty; };
            InstructionsGrid.prototype.getLocalTextPrefix = function () { return Default.InstructionsRow.localTextPrefix; };
            InstructionsGrid.prototype.getService = function () { return Default.InstructionsService.baseUrl; };
            InstructionsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], InstructionsGrid);
            return InstructionsGrid;
        }(Serenity.EntityGrid));
        Default.InstructionsGrid = InstructionsGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var InvestigationDialog = /** @class */ (function (_super) {
            __extends(InvestigationDialog, _super);
            function InvestigationDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Default.InvestigationForm(_this.idPrefix);
                _this.form.AdmissionId.changeSelect2(function (x) {
                    var admissionId = Q.toId(_this.form.AdmissionId.value);
                    if (admissionId != "") {
                        Default.AdmissionService.Retrieve({ EntityId: admissionId }, function (response) {
                            _this.form.Age.value = response.Entity.Age;
                            _this.form.Sex.value = response.Entity.Sex;
                            _this.form.AdmissionDate.value = response.Entity.Date;
                            _this.form.PinNumber.value = response.Entity.PinNumber;
                            _this.form.UnitNumber.value = response.Entity.UnitNumber;
                            _this.form.UnitRegNo.value = response.Entity.UnitRegNumber;
                            _this.form.BedNumber.value = response.Entity.BedNumber;
                            _this.form.Weight.value = response.Entity.Weight;
                            _this.form.BloodGroup.value = response.Entity.BloodGroup;
                            _this.form.HospitalRegNo.value = response.Entity.HospitalRegNumber;
                        });
                    }
                });
                return _this;
            }
            InvestigationDialog.prototype.getFormKey = function () { return Default.InvestigationForm.formKey; };
            InvestigationDialog.prototype.getIdProperty = function () { return Default.InvestigationRow.idProperty; };
            InvestigationDialog.prototype.getLocalTextPrefix = function () { return Default.InvestigationRow.localTextPrefix; };
            InvestigationDialog.prototype.getNameProperty = function () { return Default.InvestigationRow.nameProperty; };
            InvestigationDialog.prototype.getService = function () { return Default.InvestigationService.baseUrl; };
            InvestigationDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push(CMCPS.Common.ReportHelper.createToolButton({
                    title: 'Investigation Details',
                    cssClass: 'export-pdf-button',
                    reportKey: 'Default.Investigation',
                    getParams: function () { return ({
                        InvestigationID: _this.get_entityId()
                    }); }
                }));
                return buttons;
            };
            InvestigationDialog.prototype.updateInterface = function () {
                var _this = this;
                _super.prototype.updateInterface.call(this);
                if (this.isEditMode()) {
                    Serenity.EditorUtils.setReadOnly(this.form.AdmissionId, true);
                    var admissionId = Q.toId(this.form.AdmissionId.value);
                    if (admissionId != "") {
                        Default.AdmissionService.Retrieve({ EntityId: admissionId }, function (response) {
                            _this.form.Age.value = response.Entity.Age;
                            _this.form.Sex.value = response.Entity.Sex;
                            _this.form.AdmissionDate.value = response.Entity.Date;
                            _this.form.PinNumber.value = response.Entity.PinNumber;
                            _this.form.UnitNumber.value = response.Entity.UnitNumber;
                            _this.form.UnitRegNo.value = response.Entity.UnitRegNumber;
                            _this.form.BedNumber.value = response.Entity.BedNumber;
                            _this.form.HospitalRegNo.value = response.Entity.HospitalRegNumber;
                            _this.form.Weight.value = response.Entity.Weight;
                            _this.form.BloodGroup.value = response.Entity.BloodGroup;
                        });
                    }
                }
                this.toolbar.findButton('export-pdf-button').toggle(this.isEditMode());
            };
            InvestigationDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], InvestigationDialog);
            return InvestigationDialog;
        }(Serenity.EntityDialog));
        Default.InvestigationDialog = InvestigationDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var CMCPS;
(function (CMCPS) {
    var InvestigationEditor = /** @class */ (function (_super) {
        __extends(InvestigationEditor, _super);
        function InvestigationEditor(container) {
            return _super.call(this, container) || this;
        }
        InvestigationEditor.prototype.getColumnsKey = function () { return "Default.Investigation"; };
        InvestigationEditor.prototype.getDialogType = function () { return InvestigationDialog; };
        InvestigationEditor.prototype.getLocalTextPrefix = function () { return InvestigationRow.localTextPrefix; };
        InvestigationEditor.prototype.validateEntity = function (row, id) {
            row.AdmissionId = Q.toId(row.AdmissionId);
            var sameProduct = Q.tryFirst(this.view.getItems(), function (x) { return x.AdmissionId === row.AdmissionId; });
            if (sameProduct && this.id(sameProduct) !== id) {
                Q.alert('This product is already in order details!');
                return false;
            }
            //row.ProductName = ProductRow.getLookup().itemById[row.ProductID].ProductName;
            //row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
            return true;
        };
        InvestigationEditor = __decorate([
            Serenity.Decorators.registerClass()
        ], InvestigationEditor);
        return InvestigationEditor;
    }(CMCPS.Common.GridEditorBase));
    CMCPS.InvestigationEditor = InvestigationEditor;
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var InvestigationGrid = /** @class */ (function (_super) {
            __extends(InvestigationGrid, _super);
            function InvestigationGrid(container) {
                return _super.call(this, container) || this;
            }
            InvestigationGrid.prototype.getColumnsKey = function () { return 'Default.Investigation'; };
            InvestigationGrid.prototype.getDialogType = function () { return Default.InvestigationDialog; };
            InvestigationGrid.prototype.getIdProperty = function () { return Default.InvestigationRow.idProperty; };
            InvestigationGrid.prototype.getLocalTextPrefix = function () { return Default.InvestigationRow.localTextPrefix; };
            InvestigationGrid.prototype.getService = function () { return Default.InvestigationService.baseUrl; };
            InvestigationGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: 'Delete Row',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action delete-row" title="delete">' +
                        '<i class="fa fa-trash-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                columns.splice(1, 0, {
                    field: 'Print Investigation',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action print-invoice" title="Investigation Details">' +
                        '<i class="fa fa-file-pdf-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return columns;
            };
            InvestigationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('print-invoice')) {
                        CMCPS.Common.ReportHelper.execute({
                            reportKey: 'Default.Investigation',
                            params: {
                                InvestigationID: item.InvestigationId
                            }
                        });
                    }
                    else if (target.hasClass('delete-row')) {
                        Q.confirm('Delete record?', function () {
                            CMCPS.Default.InvestigationService.Delete({
                                EntityId: item.InvestigationId,
                            }, function (response) {
                                _this.refresh();
                            });
                        });
                    }
                }
            };
            InvestigationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], InvestigationGrid);
            return InvestigationGrid;
        }(Serenity.EntityGrid));
        Default.InvestigationGrid = InvestigationGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var MajorSurgeryDialog = /** @class */ (function (_super) {
            __extends(MajorSurgeryDialog, _super);
            function MajorSurgeryDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.MajorSurgeryForm(_this.idPrefix);
                return _this;
            }
            MajorSurgeryDialog.prototype.getFormKey = function () { return Default.MajorSurgeryForm.formKey; };
            MajorSurgeryDialog.prototype.getIdProperty = function () { return Default.MajorSurgeryRow.idProperty; };
            MajorSurgeryDialog.prototype.getLocalTextPrefix = function () { return Default.MajorSurgeryRow.localTextPrefix; };
            MajorSurgeryDialog.prototype.getNameProperty = function () { return Default.MajorSurgeryRow.nameProperty; };
            MajorSurgeryDialog.prototype.getService = function () { return Default.MajorSurgeryService.baseUrl; };
            MajorSurgeryDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MajorSurgeryDialog);
            return MajorSurgeryDialog;
        }(Serenity.EntityDialog));
        Default.MajorSurgeryDialog = MajorSurgeryDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMC;
(function (CMC) {
    var Default;
    (function (Default) {
        var MajorSurgeryGrid = /** @class */ (function (_super) {
            __extends(MajorSurgeryGrid, _super);
            function MajorSurgeryGrid(container) {
                return _super.call(this, container) || this;
            }
            MajorSurgeryGrid.prototype.getColumnsKey = function () { return 'Default.MajorSurgery'; };
            MajorSurgeryGrid.prototype.getDialogType = function () { return MajorSurgeryDialog; };
            MajorSurgeryGrid.prototype.getIdProperty = function () { return MajorSurgeryRow.idProperty; };
            MajorSurgeryGrid.prototype.getLocalTextPrefix = function () { return MajorSurgeryRow.localTextPrefix; };
            MajorSurgeryGrid.prototype.getService = function () { return MajorSurgeryService.baseUrl; };
            MajorSurgeryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MajorSurgeryGrid);
            return MajorSurgeryGrid;
        }(Serenity.EntityGrid));
        Default.MajorSurgeryGrid = MajorSurgeryGrid;
    })(Default = CMC.Default || (CMC.Default = {}));
})(CMC || (CMC = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var MealsDialog = /** @class */ (function (_super) {
            __extends(MealsDialog, _super);
            function MealsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.MealsForm(_this.idPrefix);
                return _this;
            }
            MealsDialog.prototype.getFormKey = function () { return Default.MealsForm.formKey; };
            MealsDialog.prototype.getIdProperty = function () { return Default.MealsRow.idProperty; };
            MealsDialog.prototype.getLocalTextPrefix = function () { return Default.MealsRow.localTextPrefix; };
            MealsDialog.prototype.getNameProperty = function () { return Default.MealsRow.nameProperty; };
            MealsDialog.prototype.getService = function () { return Default.MealsService.baseUrl; };
            MealsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MealsDialog);
            return MealsDialog;
        }(Serenity.EntityDialog));
        Default.MealsDialog = MealsDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var MealsGrid = /** @class */ (function (_super) {
            __extends(MealsGrid, _super);
            function MealsGrid(container) {
                return _super.call(this, container) || this;
            }
            MealsGrid.prototype.getColumnsKey = function () { return 'Default.Meals'; };
            MealsGrid.prototype.getDialogType = function () { return Default.MealsDialog; };
            MealsGrid.prototype.getIdProperty = function () { return Default.MealsRow.idProperty; };
            MealsGrid.prototype.getLocalTextPrefix = function () { return Default.MealsRow.localTextPrefix; };
            MealsGrid.prototype.getService = function () { return Default.MealsService.baseUrl; };
            MealsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MealsGrid);
            return MealsGrid;
        }(Serenity.EntityGrid));
        Default.MealsGrid = MealsGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var MedicineDialog = /** @class */ (function (_super) {
            __extends(MedicineDialog, _super);
            function MedicineDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.MedicineForm(_this.idPrefix);
                return _this;
            }
            MedicineDialog.prototype.getFormKey = function () { return Default.MedicineForm.formKey; };
            MedicineDialog.prototype.getIdProperty = function () { return Default.MedicineRow.idProperty; };
            MedicineDialog.prototype.getLocalTextPrefix = function () { return Default.MedicineRow.localTextPrefix; };
            MedicineDialog.prototype.getNameProperty = function () { return Default.MedicineRow.nameProperty; };
            MedicineDialog.prototype.getService = function () { return Default.MedicineService.baseUrl; };
            MedicineDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MedicineDialog);
            return MedicineDialog;
        }(Serenity.EntityDialog));
        Default.MedicineDialog = MedicineDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var MedicineGrid = /** @class */ (function (_super) {
            __extends(MedicineGrid, _super);
            function MedicineGrid(container) {
                return _super.call(this, container) || this;
            }
            MedicineGrid.prototype.getColumnsKey = function () { return 'Default.Medicine'; };
            MedicineGrid.prototype.getDialogType = function () { return Default.MedicineDialog; };
            MedicineGrid.prototype.getIdProperty = function () { return Default.MedicineRow.idProperty; };
            MedicineGrid.prototype.getLocalTextPrefix = function () { return Default.MedicineRow.localTextPrefix; };
            MedicineGrid.prototype.getService = function () { return Default.MedicineService.baseUrl; };
            MedicineGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MedicineGrid);
            return MedicineGrid;
        }(Serenity.EntityGrid));
        Default.MedicineGrid = MedicineGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var NatalDialog = /** @class */ (function (_super) {
            __extends(NatalDialog, _super);
            function NatalDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.NatalForm(_this.idPrefix);
                return _this;
            }
            NatalDialog.prototype.getFormKey = function () { return Default.NatalForm.formKey; };
            NatalDialog.prototype.getIdProperty = function () { return Default.NatalRow.idProperty; };
            NatalDialog.prototype.getLocalTextPrefix = function () { return Default.NatalRow.localTextPrefix; };
            NatalDialog.prototype.getNameProperty = function () { return Default.NatalRow.nameProperty; };
            NatalDialog.prototype.getService = function () { return Default.NatalService.baseUrl; };
            NatalDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], NatalDialog);
            return NatalDialog;
        }(Serenity.EntityDialog));
        Default.NatalDialog = NatalDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var NatalGrid = /** @class */ (function (_super) {
            __extends(NatalGrid, _super);
            function NatalGrid(container) {
                return _super.call(this, container) || this;
            }
            NatalGrid.prototype.getColumnsKey = function () { return 'Default.Natal'; };
            NatalGrid.prototype.getDialogType = function () { return Default.NatalDialog; };
            NatalGrid.prototype.getIdProperty = function () { return Default.NatalRow.idProperty; };
            NatalGrid.prototype.getLocalTextPrefix = function () { return Default.NatalRow.localTextPrefix; };
            NatalGrid.prototype.getService = function () { return Default.NatalService.baseUrl; };
            NatalGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], NatalGrid);
            return NatalGrid;
        }(Serenity.EntityGrid));
        Default.NatalGrid = NatalGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var NoteDialog = /** @class */ (function (_super) {
            __extends(NoteDialog, _super);
            function NoteDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Default.NoteForm(_this.idPrefix);
                _this.form.AdmissionId.changeSelect2(function (x) {
                    var admissionId = Q.toId(_this.form.AdmissionId.value);
                    if (admissionId != "") {
                        Default.AdmissionService.Retrieve({ EntityId: admissionId }, function (response) {
                            _this.form.Age.value = response.Entity.Age;
                            _this.form.Sex.value = response.Entity.Sex;
                            _this.form.AdmissionDate.value = response.Entity.Date;
                            _this.form.PinNumber.value = response.Entity.PinNumber;
                            _this.form.UnitNumber.value = response.Entity.UnitNumber;
                            _this.form.UnitRegNo.value = response.Entity.UnitRegNumber;
                            _this.form.BedNumber.value = response.Entity.BedNumber;
                            _this.form.Weight.value = response.Entity.Weight;
                            _this.form.BloodGroup.value = response.Entity.BloodGroup;
                            _this.form.HospitalRegNo.value = response.Entity.HospitalRegNumber;
                            _this.form.FinalDiagnosis.value = response.Entity.FinalDiagnosis;
                        });
                    }
                });
                var fieldButton = $('.AddtoNote')[0];
                fieldButton.innerHTML = "\n                <a href= \"javascript:;\" class=\"btn btn-success DetailAdd\"> <i class=\"fa fa-fw fa-plus-circle\"> </i>Add</a>";
                $('.DetailAdd').click(function (e) { return _this.AddtoNote(); });
                return _this;
            }
            NoteDialog.prototype.getFormKey = function () { return Default.NoteForm.formKey; };
            NoteDialog.prototype.getIdProperty = function () { return Default.NoteRow.idProperty; };
            NoteDialog.prototype.getLocalTextPrefix = function () { return Default.NoteRow.localTextPrefix; };
            NoteDialog.prototype.getNameProperty = function () { return Default.NoteRow.nameProperty; };
            NoteDialog.prototype.getService = function () { return Default.NoteService.baseUrl; };
            NoteDialog.prototype.AddtoNote = function () {
                if (this.form.PNoteId.value != null) {
                    if (this.form.Note.value == "") {
                        this.form.Note.value = this.form.PNoteId.text;
                    }
                    else {
                        this.form.Note.value = this.form.Note.value + "\n" + this.form.PNoteId.text;
                    }
                }
            };
            NoteDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push(CMCPS.Common.ReportHelper.createToolButton({
                    title: 'Note Details',
                    cssClass: 'export-pdf-button',
                    reportKey: 'Default.Note',
                    getParams: function () { return ({
                        NoteID: _this.get_entityId()
                    }); }
                }));
                return buttons;
            };
            NoteDialog.prototype.updateInterface = function () {
                var _this = this;
                _super.prototype.updateInterface.call(this);
                if (this.isEditMode()) {
                    Serenity.EditorUtils.setReadOnly(this.form.AdmissionId, true);
                    var admissionId = Q.toId(this.form.AdmissionId.value);
                    if (admissionId != "") {
                        Default.AdmissionService.Retrieve({ EntityId: admissionId }, function (response) {
                            _this.form.Age.value = response.Entity.Age;
                            _this.form.Sex.value = response.Entity.Sex;
                            _this.form.AdmissionDate.value = response.Entity.Date;
                            _this.form.PinNumber.value = response.Entity.PinNumber;
                            _this.form.UnitNumber.value = response.Entity.UnitNumber;
                            _this.form.UnitRegNo.value = response.Entity.UnitRegNumber;
                            _this.form.BedNumber.value = response.Entity.BedNumber;
                            _this.form.HospitalRegNo.value = response.Entity.HospitalRegNumber;
                            _this.form.Weight.value = response.Entity.Weight;
                            _this.form.BloodGroup.value = response.Entity.BloodGroup;
                            _this.form.FinalDiagnosis.value = response.Entity.FinalDiagnosis;
                        });
                    }
                }
                this.toolbar.findButton('export-pdf-button').toggle(this.isEditMode());
            };
            NoteDialog = __decorate([
                Serenity.Decorators.panel(),
                Serenity.Decorators.registerClass()
            ], NoteDialog);
            return NoteDialog;
        }(Serenity.EntityDialog));
        Default.NoteDialog = NoteDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var NoteGrid = /** @class */ (function (_super) {
            __extends(NoteGrid, _super);
            function NoteGrid(container) {
                return _super.call(this, container) || this;
            }
            NoteGrid.prototype.getColumnsKey = function () { return 'Default.Note'; };
            NoteGrid.prototype.getDialogType = function () { return Default.NoteDialog; };
            NoteGrid.prototype.getIdProperty = function () { return Default.NoteRow.idProperty; };
            NoteGrid.prototype.getLocalTextPrefix = function () { return Default.NoteRow.localTextPrefix; };
            NoteGrid.prototype.getService = function () { return Default.NoteService.baseUrl; };
            NoteGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: 'Delete Row',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action delete-row" title="delete">' +
                        '<i class="fa fa-trash-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                columns.splice(1, 0, {
                    field: 'Print Note',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action print-invoice" title="Note Details">' +
                        '<i class="fa fa-file-pdf-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return columns;
            };
            NoteGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('print-invoice')) {
                        CMCPS.Common.ReportHelper.execute({
                            reportKey: 'Default.Note',
                            params: {
                                NoteID: item.NoteId
                            }
                        });
                    }
                    else if (target.hasClass('delete-row')) {
                        Q.confirm('Delete record?', function () {
                            CMCPS.Default.NoteService.Delete({
                                EntityId: item.NoteId,
                            }, function (response) {
                                _this.refresh();
                            });
                        });
                    }
                }
            };
            NoteGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], NoteGrid);
            return NoteGrid;
        }(Serenity.EntityGrid));
        Default.NoteGrid = NoteGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var OpdDialog = /** @class */ (function (_super) {
            __extends(OpdDialog, _super);
            function OpdDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.OpdForm(_this.idPrefix);
                return _this;
            }
            OpdDialog.prototype.getFormKey = function () { return Default.OpdForm.formKey; };
            OpdDialog.prototype.getIdProperty = function () { return Default.OpdRow.idProperty; };
            OpdDialog.prototype.getLocalTextPrefix = function () { return Default.OpdRow.localTextPrefix; };
            OpdDialog.prototype.getNameProperty = function () { return Default.OpdRow.nameProperty; };
            OpdDialog.prototype.getService = function () { return Default.OpdService.baseUrl; };
            OpdDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push(CMCPS.Common.ReportHelper.createToolButton({
                    title: 'Opd Details',
                    cssClass: 'export-pdf-button',
                    reportKey: 'Default.Opd',
                    getParams: function () { return ({
                        OpdId: _this.get_entityId()
                    }); }
                }));
                return buttons;
            };
            OpdDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('export-pdf-button').toggle(this.isEditMode());
            };
            OpdDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], OpdDialog);
            return OpdDialog;
        }(Serenity.EntityDialog));
        Default.OpdDialog = OpdDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var OpdGrid = /** @class */ (function (_super) {
            __extends(OpdGrid, _super);
            function OpdGrid(container) {
                return _super.call(this, container) || this;
            }
            OpdGrid.prototype.getColumnsKey = function () { return 'Default.Opd'; };
            OpdGrid.prototype.getDialogType = function () { return Default.OpdDialog; };
            OpdGrid.prototype.getIdProperty = function () { return Default.OpdRow.idProperty; };
            OpdGrid.prototype.getLocalTextPrefix = function () { return Default.OpdRow.localTextPrefix; };
            OpdGrid.prototype.getService = function () { return Default.OpdService.baseUrl; };
            OpdGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(CMCPS.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Default/Opd/ListExcel',
                    separator: true
                }));
                buttons.push(CMCPS.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    reportTitle: "Outdoor Patient's Summary Report",
                    fileName: "Outdoor_Patient's_Summary_Report",
                    separator: true,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            OpdGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: 'Delete Row',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action delete-row" title="delete">' +
                        '<i class="fa fa-trash-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                columns.splice(1, 0, {
                    field: 'Print Opd',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action print-invoice" title="Opd Details">' +
                        '<i class="fa fa-file-pdf-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return columns;
            };
            OpdGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('print-invoice')) {
                        CMCPS.Common.ReportHelper.execute({
                            reportKey: 'Default.Opd',
                            params: {
                                OpdId: item.OpdId
                            }
                        });
                    }
                    else if (target.hasClass('delete-row')) {
                        Q.confirm('Delete record?', function () {
                            CMCPS.Default.OpdService.Delete({
                                EntityId: item.OpdId,
                            }, function (response) {
                                _this.refresh();
                            });
                        });
                    }
                }
            };
            OpdGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OpdGrid);
            return OpdGrid;
        }(Serenity.EntityGrid));
        Default.OpdGrid = OpdGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var OpdWithDiagnosisDetailsDialog = /** @class */ (function (_super) {
            __extends(OpdWithDiagnosisDetailsDialog, _super);
            function OpdWithDiagnosisDetailsDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Default.OpdWithDiagnosisDetailsForm(_this.idPrefix);
                return _this;
            }
            OpdWithDiagnosisDetailsDialog.prototype.getFormKey = function () { return Default.OpdWithDiagnosisDetailsForm.formKey; };
            OpdWithDiagnosisDetailsDialog.prototype.getNameProperty = function () { return Default.OpdWithDiagnosisDetailsRow.nameProperty; };
            OpdWithDiagnosisDetailsDialog.prototype.getLocalTextPrefix = function () { return Default.OpdWithDiagnosisDetailsRow.localTextPrefix; };
            OpdWithDiagnosisDetailsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OpdWithDiagnosisDetailsDialog);
            return OpdWithDiagnosisDetailsDialog;
        }(CMCPS.Common.GridEditorDialog));
        Default.OpdWithDiagnosisDetailsDialog = OpdWithDiagnosisDetailsDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var OpdWithDiagnosisDetailsEditor = /** @class */ (function (_super) {
            __extends(OpdWithDiagnosisDetailsEditor, _super);
            function OpdWithDiagnosisDetailsEditor(container) {
                return _super.call(this, container) || this;
            }
            OpdWithDiagnosisDetailsEditor.prototype.getColumnsKey = function () { return "Default.OpdWithDiagnosisDetails"; };
            OpdWithDiagnosisDetailsEditor.prototype.getDialogType = function () { return Default.OpdWithDiagnosisDetailsDialog; };
            OpdWithDiagnosisDetailsEditor.prototype.getLocalTextPrefix = function () { return Default.OpdWithDiagnosisDetailsRow.localTextPrefix; };
            OpdWithDiagnosisDetailsEditor.prototype.getAddButtonCaption = function () {
                return "Add";
            };
            OpdWithDiagnosisDetailsEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                row.Diagnosis = Default.DiagnosisRow.getLookup().itemById[row.DiagnosisId].DiagnosisName;
                return true;
            };
            OpdWithDiagnosisDetailsEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], OpdWithDiagnosisDetailsEditor);
            return OpdWithDiagnosisDetailsEditor;
        }(CMCPS.Common.GridEditorBase));
        Default.OpdWithDiagnosisDetailsEditor = OpdWithDiagnosisDetailsEditor;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var OperationDialog = /** @class */ (function (_super) {
            __extends(OperationDialog, _super);
            function OperationDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.OperationForm(_this.idPrefix);
                return _this;
            }
            OperationDialog.prototype.getFormKey = function () { return Default.OperationForm.formKey; };
            OperationDialog.prototype.getIdProperty = function () { return Default.OperationRow.idProperty; };
            OperationDialog.prototype.getLocalTextPrefix = function () { return Default.OperationRow.localTextPrefix; };
            OperationDialog.prototype.getNameProperty = function () { return Default.OperationRow.nameProperty; };
            OperationDialog.prototype.getService = function () { return Default.OperationService.baseUrl; };
            OperationDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OperationDialog);
            return OperationDialog;
        }(Serenity.EntityDialog));
        Default.OperationDialog = OperationDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var OperationGrid = /** @class */ (function (_super) {
            __extends(OperationGrid, _super);
            function OperationGrid(container) {
                return _super.call(this, container) || this;
            }
            OperationGrid.prototype.getColumnsKey = function () { return 'Default.Operation'; };
            OperationGrid.prototype.getDialogType = function () { return Default.OperationDialog; };
            OperationGrid.prototype.getIdProperty = function () { return Default.OperationRow.idProperty; };
            OperationGrid.prototype.getLocalTextPrefix = function () { return Default.OperationRow.localTextPrefix; };
            OperationGrid.prototype.getService = function () { return Default.OperationService.baseUrl; };
            OperationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OperationGrid);
            return OperationGrid;
        }(Serenity.EntityGrid));
        Default.OperationGrid = OperationGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var OperationNoteDialog = /** @class */ (function (_super) {
            __extends(OperationNoteDialog, _super);
            function OperationNoteDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Default.OperationNoteForm(_this.idPrefix);
                _this.form.AdmissionId.changeSelect2(function (x) {
                    var admissionId = Q.toId(_this.form.AdmissionId.value);
                    if (admissionId != "") {
                        Default.AdmissionService.Retrieve({ EntityId: admissionId }, function (response) {
                            _this.form.Age.value = response.Entity.Age;
                            _this.form.AdmissionDate.value = response.Entity.Date;
                            _this.form.PinNumber.value = response.Entity.PinNumber;
                            _this.form.UnitNumber.value = response.Entity.UnitNumber;
                            _this.form.UnitRegNo.value = response.Entity.UnitRegNumber;
                            _this.form.BedNumber.value = response.Entity.BedNumber;
                            _this.form.Sex.value = response.Entity.Sex;
                            _this.form.Weight.value = response.Entity.Weight;
                            _this.form.BloodGroup.value = response.Entity.BloodGroup;
                            _this.form.HospitalRegNo.value = response.Entity.HospitalRegNumber;
                        });
                    }
                });
                _this.form.OperationId.changeSelect2(function (x) {
                    var operationId = Q.toId(_this.form.OperationId.value);
                    if (operationId != "") {
                        Default.OperationService.Retrieve({ EntityId: operationId }, function (response) {
                            _this.form.Findings.value = response.Entity.Findings;
                            _this.form.Procedures.value = response.Entity.Procedures;
                        });
                    }
                });
                var btnDiagnosis = $('.AddtoDiagnosis')[0];
                btnDiagnosis.innerHTML = "\n                <a href= \"javascript:;\" class=\"btn btn-success DetailAdd\"> <i class=\"fa fa-fw fa-plus-circle\"> </i>Add</a>";
                $('.DetailAdd').click(function (e) { return _this.addtoDiagnosisArea(); });
                var btnIndication = $('.AddtoIndication')[0];
                btnIndication.innerHTML = "\n                <a href= \"javascript:;\" class=\"btn btn-success AddIndication\"> <i class=\"fa fa-fw fa-plus-circle\"> </i>Add</a>";
                $('.AddIndication').click(function (e) { return _this.addtoIndicationArea(); });
                var btnAnesthesia = $('.AddtoAnesthesia')[0];
                btnAnesthesia.innerHTML = "\n                <a href= \"javascript:;\" class=\"btn btn-success AddAnesthesia\"> <i class=\"fa fa-fw fa-plus-circle\"> </i>Add</a>";
                $('.AddAnesthesia').click(function (e) { return _this.addtoAnesthesiaArea(); });
                var btnPosition = $('.AddtoPosition')[0];
                btnPosition.innerHTML = "\n                <a href= \"javascript:;\" class=\"btn btn-success AddPosition\"> <i class=\"fa fa-fw fa-plus-circle\"> </i>Add</a>";
                $('.AddPosition').click(function (e) { return _this.addtoPositionArea(); });
                var btnIncision = $('.AddtoIncision')[0];
                btnIncision.innerHTML = "\n                <a href= \"javascript:;\" class=\"btn btn-success AddIncision\"> <i class=\"fa fa-fw fa-plus-circle\"> </i>Add</a>";
                $('.AddIncision').click(function (e) { return _this.addtoIncisionArea(); });
                //var btnDiagram = $('.AddtoDiagram')[0];
                //btnDiagram.innerHTML = `
                //    <a href= "javascript:;" class="btn btn-success AddDiagram"> <i class="fa fa-fw fa-plus-circle"> </i>Add</a>`;
                //$('.AddDiagram').click(e => this.addtoDiagramArea());
                var btnHistopathology = $('.AddtoHistopathology')[0];
                btnHistopathology.innerHTML = "\n                <a href= \"javascript:;\" class=\"btn btn-success AddHistopathology\"> <i class=\"fa fa-fw fa-plus-circle\"> </i>Add</a>";
                $('.AddHistopathology').click(function (e) { return _this.addtoHistopathologyArea(); });
                var btnSpecialNote = $('.AddtoSpecialNote')[0];
                btnSpecialNote.innerHTML = "\n                <a href= \"javascript:;\" class=\"btn btn-success AddSpecialNote\"> <i class=\"fa fa-fw fa-plus-circle\"> </i>Add</a>";
                $('.AddSpecialNote').click(function (e) { return _this.addtoSpecialNoteArea(); });
                var btnInstructions = $('.AddtoInstructions')[0];
                btnInstructions.innerHTML = "\n                <a href= \"javascript:;\" class=\"btn btn-success AddInstructions\"> <i class=\"fa fa-fw fa-plus-circle\"> </i>Add</a>";
                $('.AddInstructions').click(function (e) { return _this.addtoInstructionsArea(); });
                var btnFurtherPlan = $('.AddtoFurtherPlan')[0];
                btnFurtherPlan.innerHTML = "\n                <a href= \"javascript:;\" class=\"btn btn-success AddFurtherPlan\"> <i class=\"fa fa-fw fa-plus-circle\"> </i>Add</a>";
                $('.AddFurtherPlan').click(function (e) { return _this.addtoFurtherPlanArea(); });
                var btnSurgeon = $('.AddtoSurgeon')[0];
                btnSurgeon.innerHTML = "\n                <a href= \"javascript:;\" class=\"btn btn-success AddSurgeon\"> <i class=\"fa fa-fw fa-plus-circle\"> </i>Add</a>";
                $('.AddSurgeon').click(function (e) { return _this.addtoSurgeonArea(); });
                var btnAssistantSurgeon = $('.AddtoAssistantSurgeon')[0];
                btnAssistantSurgeon.innerHTML = "\n                <a href= \"javascript:;\" class=\"btn btn-success AddAssistantSurgeon\"> <i class=\"fa fa-fw fa-plus-circle\"> </i>Add</a>";
                $('.AddAssistantSurgeon').click(function (e) { return _this.addtoAssistantSurgeonArea(); });
                var btnAnesthetist = $('.AddtoAnesthetist')[0];
                btnAnesthetist.innerHTML = "\n                <a href= \"javascript:;\" class=\"btn btn-success AddAnesthetist\"> <i class=\"fa fa-fw fa-plus-circle\"> </i>Add</a>";
                $('.AddAnesthetist').click(function (e) { return _this.addtoAnesthetistArea(); });
                var btnOtSister = $('.AddtoOtSister')[0];
                btnOtSister.innerHTML = "\n                <a href= \"javascript:;\" class=\"btn btn-success AddOtSister\"> <i class=\"fa fa-fw fa-plus-circle\"> </i>Add</a>";
                $('.AddOtSister').click(function (e) { return _this.addtoOtSisterArea(); });
                var btnOtAttendant = $('.AddtoOtAttendant')[0];
                btnOtAttendant.innerHTML = "\n                <a href= \"javascript:;\" class=\"btn btn-success AddOtAttendant\"> <i class=\"fa fa-fw fa-plus-circle\"> </i>Add</a>";
                $('.AddOtAttendant').click(function (e) { return _this.addtoOtAttendantArea(); });
                return _this;
            }
            OperationNoteDialog.prototype.getFormKey = function () { return Default.OperationNoteForm.formKey; };
            OperationNoteDialog.prototype.getIdProperty = function () { return Default.OperationNoteRow.idProperty; };
            OperationNoteDialog.prototype.getLocalTextPrefix = function () { return Default.OperationNoteRow.localTextPrefix; };
            OperationNoteDialog.prototype.getNameProperty = function () { return Default.OperationNoteRow.nameProperty; };
            OperationNoteDialog.prototype.getService = function () { return Default.OperationNoteService.baseUrl; };
            OperationNoteDialog.prototype.addtoDiagnosisArea = function () {
                if (this.form.DiagnosisId.value != null) {
                    if (this.form.Diagnosis.value == "") {
                        this.form.Diagnosis.value = this.form.DiagnosisId.text;
                    }
                    else {
                        this.form.Diagnosis.value = this.form.Diagnosis.value + "\n" + this.form.DiagnosisId.text;
                    }
                }
            };
            OperationNoteDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push(CMCPS.Common.ReportHelper.createToolButton({
                    title: 'Operation Note Details',
                    cssClass: 'export-pdf-button',
                    reportKey: 'Default.OperationNote',
                    getParams: function () { return ({
                        Id: _this.get_entityId()
                    }); }
                }));
                return buttons;
            };
            OperationNoteDialog.prototype.addtoIndicationArea = function () {
                if (this.form.IndicationId.value != null) {
                    if (this.form.Indication.value == "") {
                        this.form.Indication.value = this.form.IndicationId.text;
                    }
                    else {
                        this.form.Indication.value = this.form.Indication.value + "\n" + this.form.IndicationId.text;
                    }
                }
            };
            OperationNoteDialog.prototype.addtoAnesthesiaArea = function () {
                if (this.form.AnesthesiaId.value != null) {
                    if (this.form.Anesthesia.value == "") {
                        this.form.Anesthesia.value = this.form.AnesthesiaId.text;
                    }
                    else {
                        this.form.Anesthesia.value = this.form.Anesthesia.value + "\n" + this.form.AnesthesiaId.text;
                    }
                }
            };
            OperationNoteDialog.prototype.addtoPositionArea = function () {
                if (this.form.PositionId.value != null) {
                    if (this.form.Position.value == "") {
                        this.form.Position.value = this.form.PositionId.text;
                    }
                    else {
                        this.form.Position.value = this.form.Position.value + "\n" + this.form.PositionId.text;
                    }
                }
            };
            OperationNoteDialog.prototype.addtoIncisionArea = function () {
                if (this.form.IncisionId.value != null) {
                    if (this.form.Incision.value == "") {
                        this.form.Incision.value = this.form.IncisionId.text;
                    }
                    else {
                        this.form.Incision.value = this.form.Incision.value + "\n" + this.form.IncisionId.text;
                    }
                }
            };
            //public addtoDiagramArea() {
            //    if (this.form.DiagramId.value != null) {
            //        if (this.form.Diagram.value == "") {
            //            this.form.Diagram.value = this.form.DiagramId.text;
            //        }
            //        else {
            //            this.form.Diagram.value = this.form.Diagram.value + "\n" + this.form.DiagramId.text;
            //        }
            //    }
            //}
            OperationNoteDialog.prototype.addtoHistopathologyArea = function () {
                if (this.form.HistopathologyId.value != null) {
                    if (this.form.Histopathology.value == "") {
                        this.form.Histopathology.value = this.form.HistopathologyId.text;
                    }
                    else {
                        this.form.Histopathology.value = this.form.Histopathology.value + "\n" + this.form.HistopathologyId.text;
                    }
                }
            };
            OperationNoteDialog.prototype.addtoSpecialNoteArea = function () {
                if (this.form.SpecialNoteId.value != null) {
                    if (this.form.SpecialNote.value == "") {
                        this.form.SpecialNote.value = this.form.SpecialNoteId.text;
                    }
                    else {
                        this.form.SpecialNote.value = this.form.SpecialNote.value + "\n" + this.form.SpecialNoteId.text;
                    }
                }
            };
            OperationNoteDialog.prototype.addtoInstructionsArea = function () {
                if (this.form.InstructionsId.value != null) {
                    if (this.form.Instructions.value == "") {
                        this.form.Instructions.value = this.form.InstructionsId.text;
                    }
                    else {
                        this.form.Instructions.value = this.form.Instructions.value + "\n" + this.form.InstructionsId.text;
                    }
                }
            };
            OperationNoteDialog.prototype.addtoFurtherPlanArea = function () {
                if (this.form.FurtherPlanId.value != null) {
                    if (this.form.FurtherPlan.value == "") {
                        this.form.FurtherPlan.value = this.form.FurtherPlanId.text;
                    }
                    else {
                        this.form.FurtherPlan.value = this.form.FurtherPlan.value + "\n" + this.form.FurtherPlanId.text;
                    }
                }
            };
            OperationNoteDialog.prototype.addtoSurgeonArea = function () {
                if (this.form.SurgeonId.value != null) {
                    if (this.form.Surgeon.value == "") {
                        this.form.Surgeon.value = this.form.SurgeonId.text;
                    }
                    else {
                        this.form.Surgeon.value = this.form.Surgeon.value + "\n" + this.form.SurgeonId.text;
                    }
                }
            };
            OperationNoteDialog.prototype.addtoAssistantSurgeonArea = function () {
                if (this.form.AssistantSurgeonId.value != null) {
                    if (this.form.AssistantSurgeon.value == "") {
                        this.form.AssistantSurgeon.value = this.form.AssistantSurgeonId.text;
                    }
                    else {
                        this.form.AssistantSurgeon.value = this.form.AssistantSurgeon.value + "\n" + this.form.AssistantSurgeonId.text;
                    }
                }
            };
            OperationNoteDialog.prototype.addtoAnesthetistArea = function () {
                if (this.form.AnesthetistId.value != null) {
                    if (this.form.Anesthetist.value == "") {
                        this.form.Anesthetist.value = this.form.AnesthetistId.text;
                    }
                    else {
                        this.form.Anesthetist.value = this.form.Anesthetist.value + "\n" + this.form.AnesthetistId.text;
                    }
                }
            };
            OperationNoteDialog.prototype.addtoOtSisterArea = function () {
                if (this.form.OtSisterId.value != null) {
                    if (this.form.OtSister.value == "") {
                        this.form.OtSister.value = this.form.OtSisterId.text;
                    }
                    else {
                        this.form.OtSister.value = this.form.OtSister.value + "\n" + this.form.OtSisterId.text;
                    }
                }
            };
            OperationNoteDialog.prototype.addtoOtAttendantArea = function () {
                if (this.form.OtAttendantId.value != null) {
                    if (this.form.OtAttendant.value == "") {
                        this.form.OtAttendant.value = this.form.OtAttendantId.text;
                    }
                    else {
                        this.form.OtAttendant.value = this.form.OtAttendant.value + "\n" + this.form.OtAttendantId.text;
                    }
                }
            };
            OperationNoteDialog.prototype.updateInterface = function () {
                var _this = this;
                _super.prototype.updateInterface.call(this);
                if (this.isEditMode()) {
                    Serenity.EditorUtils.setReadOnly(this.form.AdmissionId, true);
                    var admissionId = Q.toId(this.form.AdmissionId.value);
                    if (admissionId != "") {
                        Default.AdmissionService.Retrieve({ EntityId: admissionId }, function (response) {
                            _this.form.Age.value = response.Entity.Age;
                            _this.form.AdmissionDate.value = response.Entity.Date;
                            _this.form.PinNumber.value = response.Entity.PinNumber;
                            _this.form.UnitNumber.value = response.Entity.UnitNumber;
                            _this.form.UnitRegNo.value = response.Entity.UnitRegNumber;
                            _this.form.BedNumber.value = response.Entity.BedNumber;
                            _this.form.Sex.value = response.Entity.Sex;
                            _this.form.Weight.value = response.Entity.Weight;
                            _this.form.BloodGroup.value = response.Entity.BloodGroup;
                            _this.form.HospitalRegNo.value = response.Entity.HospitalRegNumber;
                        });
                    }
                }
                this.toolbar.findButton('export-pdf-button').toggle(this.isEditMode());
            };
            OperationNoteDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], OperationNoteDialog);
            return OperationNoteDialog;
        }(Serenity.EntityDialog));
        Default.OperationNoteDialog = OperationNoteDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var OperationNoteGrid = /** @class */ (function (_super) {
            __extends(OperationNoteGrid, _super);
            function OperationNoteGrid(container) {
                return _super.call(this, container) || this;
            }
            OperationNoteGrid.prototype.getColumnsKey = function () { return 'Default.OperationNote'; };
            OperationNoteGrid.prototype.getDialogType = function () { return Default.OperationNoteDialog; };
            OperationNoteGrid.prototype.getIdProperty = function () { return Default.OperationNoteRow.idProperty; };
            OperationNoteGrid.prototype.getLocalTextPrefix = function () { return Default.OperationNoteRow.localTextPrefix; };
            OperationNoteGrid.prototype.getService = function () { return Default.OperationNoteService.baseUrl; };
            OperationNoteGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(CMCPS.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Default/OperationNote/ListExcel',
                    separator: true
                }));
                buttons.push(CMCPS.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    reportTitle: "Patient's Operation Note Summary Report",
                    fileName: "Patient's_Operation_Note_Summary_Report",
                    separator: true,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            OperationNoteGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: 'Delete Row',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action delete-row" title="delete">' +
                        '<i class="fa fa-trash-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                columns.splice(1, 0, {
                    field: 'Print Operation Note',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action print-invoice" title="Operation Note Details">' +
                        '<i class="fa fa-file-pdf-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return columns;
            };
            OperationNoteGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('print-invoice')) {
                        CMCPS.Common.ReportHelper.execute({
                            reportKey: 'Default.OperationNote',
                            params: {
                                Id: item.Id
                            }
                        });
                    }
                    else if (target.hasClass('delete-row')) {
                        Q.confirm('Delete record?', function () {
                            CMCPS.Default.OperationNoteService.Delete({
                                EntityId: item.Id,
                            }, function (response) {
                                _this.refresh();
                            });
                        });
                    }
                }
            };
            OperationNoteGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OperationNoteGrid);
            return OperationNoteGrid;
        }(Serenity.EntityGrid));
        Default.OperationNoteGrid = OperationNoteGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var OtAttendantDialog = /** @class */ (function (_super) {
            __extends(OtAttendantDialog, _super);
            function OtAttendantDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.OtAttendantForm(_this.idPrefix);
                return _this;
            }
            OtAttendantDialog.prototype.getFormKey = function () { return Default.OtAttendantForm.formKey; };
            OtAttendantDialog.prototype.getIdProperty = function () { return Default.OtAttendantRow.idProperty; };
            OtAttendantDialog.prototype.getLocalTextPrefix = function () { return Default.OtAttendantRow.localTextPrefix; };
            OtAttendantDialog.prototype.getNameProperty = function () { return Default.OtAttendantRow.nameProperty; };
            OtAttendantDialog.prototype.getService = function () { return Default.OtAttendantService.baseUrl; };
            OtAttendantDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OtAttendantDialog);
            return OtAttendantDialog;
        }(Serenity.EntityDialog));
        Default.OtAttendantDialog = OtAttendantDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var OtAttendantGrid = /** @class */ (function (_super) {
            __extends(OtAttendantGrid, _super);
            function OtAttendantGrid(container) {
                return _super.call(this, container) || this;
            }
            OtAttendantGrid.prototype.getColumnsKey = function () { return 'Default.OtAttendant'; };
            OtAttendantGrid.prototype.getDialogType = function () { return Default.OtAttendantDialog; };
            OtAttendantGrid.prototype.getIdProperty = function () { return Default.OtAttendantRow.idProperty; };
            OtAttendantGrid.prototype.getLocalTextPrefix = function () { return Default.OtAttendantRow.localTextPrefix; };
            OtAttendantGrid.prototype.getService = function () { return Default.OtAttendantService.baseUrl; };
            OtAttendantGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OtAttendantGrid);
            return OtAttendantGrid;
        }(Serenity.EntityGrid));
        Default.OtAttendantGrid = OtAttendantGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var OtSisterDialog = /** @class */ (function (_super) {
            __extends(OtSisterDialog, _super);
            function OtSisterDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.OtSisterForm(_this.idPrefix);
                return _this;
            }
            OtSisterDialog.prototype.getFormKey = function () { return Default.OtSisterForm.formKey; };
            OtSisterDialog.prototype.getIdProperty = function () { return Default.OtSisterRow.idProperty; };
            OtSisterDialog.prototype.getLocalTextPrefix = function () { return Default.OtSisterRow.localTextPrefix; };
            OtSisterDialog.prototype.getNameProperty = function () { return Default.OtSisterRow.nameProperty; };
            OtSisterDialog.prototype.getService = function () { return Default.OtSisterService.baseUrl; };
            OtSisterDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OtSisterDialog);
            return OtSisterDialog;
        }(Serenity.EntityDialog));
        Default.OtSisterDialog = OtSisterDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var OtSisterGrid = /** @class */ (function (_super) {
            __extends(OtSisterGrid, _super);
            function OtSisterGrid(container) {
                return _super.call(this, container) || this;
            }
            OtSisterGrid.prototype.getColumnsKey = function () { return 'Default.OtSister'; };
            OtSisterGrid.prototype.getDialogType = function () { return Default.OtSisterDialog; };
            OtSisterGrid.prototype.getIdProperty = function () { return Default.OtSisterRow.idProperty; };
            OtSisterGrid.prototype.getLocalTextPrefix = function () { return Default.OtSisterRow.localTextPrefix; };
            OtSisterGrid.prototype.getService = function () { return Default.OtSisterService.baseUrl; };
            OtSisterGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OtSisterGrid);
            return OtSisterGrid;
        }(Serenity.EntityGrid));
        Default.OtSisterGrid = OtSisterGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var OtherLabDialog = /** @class */ (function (_super) {
            __extends(OtherLabDialog, _super);
            function OtherLabDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.OtherLabForm(_this.idPrefix);
                return _this;
            }
            OtherLabDialog.prototype.getFormKey = function () { return Default.OtherLabForm.formKey; };
            OtherLabDialog.prototype.getIdProperty = function () { return Default.OtherLabRow.idProperty; };
            OtherLabDialog.prototype.getLocalTextPrefix = function () { return Default.OtherLabRow.localTextPrefix; };
            OtherLabDialog.prototype.getNameProperty = function () { return Default.OtherLabRow.nameProperty; };
            OtherLabDialog.prototype.getService = function () { return Default.OtherLabService.baseUrl; };
            OtherLabDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OtherLabDialog);
            return OtherLabDialog;
        }(Serenity.EntityDialog));
        Default.OtherLabDialog = OtherLabDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var OtherLabGrid = /** @class */ (function (_super) {
            __extends(OtherLabGrid, _super);
            function OtherLabGrid(container) {
                return _super.call(this, container) || this;
            }
            OtherLabGrid.prototype.getColumnsKey = function () { return 'Default.OtherLab'; };
            OtherLabGrid.prototype.getDialogType = function () { return Default.OtherLabDialog; };
            OtherLabGrid.prototype.getIdProperty = function () { return Default.OtherLabRow.idProperty; };
            OtherLabGrid.prototype.getLocalTextPrefix = function () { return Default.OtherLabRow.localTextPrefix; };
            OtherLabGrid.prototype.getService = function () { return Default.OtherLabService.baseUrl; };
            OtherLabGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OtherLabGrid);
            return OtherLabGrid;
        }(Serenity.EntityGrid));
        Default.OtherLabGrid = OtherLabGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var OtherLabWithInvestigationDialog = /** @class */ (function (_super) {
            __extends(OtherLabWithInvestigationDialog, _super);
            function OtherLabWithInvestigationDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Default.OtherLabWithInvestigationForm(_this.idPrefix);
                return _this;
            }
            OtherLabWithInvestigationDialog.prototype.getFormKey = function () { return Default.OtherLabWithInvestigationForm.formKey; };
            OtherLabWithInvestigationDialog.prototype.getNameProperty = function () { return Default.OtherLabWithInvestigationRow.nameProperty; };
            OtherLabWithInvestigationDialog.prototype.getLocalTextPrefix = function () { return Default.OtherLabWithInvestigationRow.localTextPrefix; };
            OtherLabWithInvestigationDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OtherLabWithInvestigationDialog);
            return OtherLabWithInvestigationDialog;
        }(CMCPS.Common.GridEditorDialog));
        Default.OtherLabWithInvestigationDialog = OtherLabWithInvestigationDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var OtherLabWithInvestigationEditor = /** @class */ (function (_super) {
            __extends(OtherLabWithInvestigationEditor, _super);
            function OtherLabWithInvestigationEditor(container) {
                return _super.call(this, container) || this;
            }
            OtherLabWithInvestigationEditor.prototype.getColumnsKey = function () { return "Default.OtherLabWithInvestigation"; };
            OtherLabWithInvestigationEditor.prototype.getDialogType = function () { return Default.OtherLabWithInvestigationDialog; };
            OtherLabWithInvestigationEditor.prototype.getLocalTextPrefix = function () { return Default.OtherLabWithInvestigationRow.localTextPrefix; };
            OtherLabWithInvestigationEditor.prototype.getAddButtonCaption = function () {
                return "Add";
            };
            OtherLabWithInvestigationEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                row.OtherLabName = Default.OtherLabRow.getLookup().itemById[row.OtherLabId].Name;
                return true;
            };
            OtherLabWithInvestigationEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], OtherLabWithInvestigationEditor);
            return OtherLabWithInvestigationEditor;
        }(CMCPS.Common.GridEditorBase));
        Default.OtherLabWithInvestigationEditor = OtherLabWithInvestigationEditor;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var OutcomeDialog = /** @class */ (function (_super) {
            __extends(OutcomeDialog, _super);
            function OutcomeDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Default.OutcomeForm(_this.idPrefix);
                _this.form.AdmissionId.changeSelect2(function (x) {
                    var admissionId = Q.toId(_this.form.AdmissionId.value);
                    if (admissionId != "") {
                        Default.AdmissionService.Retrieve({ EntityId: admissionId }, function (response) {
                            _this.form.Age.value = response.Entity.Age;
                            _this.form.Sex.value = response.Entity.Sex;
                            _this.form.AdmissionDate.value = response.Entity.Date;
                            _this.form.PinNumber.value = response.Entity.PinNumber;
                            _this.form.UnitNumber.value = response.Entity.UnitNumber;
                            _this.form.UnitRegNo.value = response.Entity.UnitRegNumber;
                            _this.form.BedNumber.value = response.Entity.BedNumber;
                            _this.form.Weight.value = response.Entity.Weight;
                            _this.form.BloodGroup.value = response.Entity.BloodGroup;
                            _this.form.HospitalRegNo.value = response.Entity.HospitalRegNumber;
                            _this.form.FinalDiagnosis.value = response.Entity.FinalDiagnosis;
                        });
                    }
                });
                var fieldButton = $('.AddtoOutCome')[0];
                fieldButton.innerHTML = "\n                <a href= \"javascript:;\" class=\"btn btn-success DetailAdd\"> <i class=\"fa fa-fw fa-plus-circle\"> </i>Add</a>";
                $('.DetailAdd').click(function (e) { return _this.AddtoOutCome(); });
                return _this;
            }
            OutcomeDialog.prototype.getFormKey = function () { return Default.OutcomeForm.formKey; };
            OutcomeDialog.prototype.getIdProperty = function () { return Default.OutcomeRow.idProperty; };
            OutcomeDialog.prototype.getLocalTextPrefix = function () { return Default.OutcomeRow.localTextPrefix; };
            OutcomeDialog.prototype.getNameProperty = function () { return Default.OutcomeRow.nameProperty; };
            OutcomeDialog.prototype.getService = function () { return Default.OutcomeService.baseUrl; };
            OutcomeDialog.prototype.AddtoOutCome = function () {
                if (this.form.OutcomeNoteId.value != null) {
                    if (this.form.OutcomeName.value == "") {
                        this.form.OutcomeName.value = this.form.OutcomeNoteId.text;
                    }
                    else {
                        this.form.OutcomeName.value = this.form.OutcomeName.value + "\n" + this.form.OutcomeNoteId.text;
                    }
                }
            };
            OutcomeDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push(CMCPS.Common.ReportHelper.createToolButton({
                    title: 'Outcome Details',
                    cssClass: 'export-pdf-button',
                    reportKey: 'Default.Outcome',
                    getParams: function () { return ({
                        OutcomeID: _this.get_entityId()
                    }); }
                }));
                return buttons;
            };
            OutcomeDialog.prototype.updateInterface = function () {
                var _this = this;
                _super.prototype.updateInterface.call(this);
                if (this.isEditMode()) {
                    Serenity.EditorUtils.setReadOnly(this.form.AdmissionId, true);
                    var admissionId = Q.toId(this.form.AdmissionId.value);
                    if (admissionId != "") {
                        Default.AdmissionService.Retrieve({ EntityId: admissionId }, function (response) {
                            _this.form.Age.value = response.Entity.Age;
                            _this.form.Sex.value = response.Entity.Sex;
                            _this.form.AdmissionDate.value = response.Entity.Date;
                            _this.form.PinNumber.value = response.Entity.PinNumber;
                            _this.form.UnitNumber.value = response.Entity.UnitNumber;
                            _this.form.UnitRegNo.value = response.Entity.UnitRegNumber;
                            _this.form.BedNumber.value = response.Entity.BedNumber;
                            _this.form.HospitalRegNo.value = response.Entity.HospitalRegNumber;
                            _this.form.Weight.value = response.Entity.Weight;
                            _this.form.BloodGroup.value = response.Entity.BloodGroup;
                            _this.form.FinalDiagnosis.value = response.Entity.FinalDiagnosis;
                        });
                    }
                }
                this.toolbar.findButton('export-pdf-button').toggle(this.isEditMode());
            };
            OutcomeDialog = __decorate([
                Serenity.Decorators.panel(),
                Serenity.Decorators.registerClass()
            ], OutcomeDialog);
            return OutcomeDialog;
        }(Serenity.EntityDialog));
        Default.OutcomeDialog = OutcomeDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var OutcomeGrid = /** @class */ (function (_super) {
            __extends(OutcomeGrid, _super);
            function OutcomeGrid(container) {
                return _super.call(this, container) || this;
            }
            OutcomeGrid.prototype.getColumnsKey = function () { return 'Default.Outcome'; };
            OutcomeGrid.prototype.getDialogType = function () { return Default.OutcomeDialog; };
            OutcomeGrid.prototype.getIdProperty = function () { return Default.OutcomeRow.idProperty; };
            OutcomeGrid.prototype.getLocalTextPrefix = function () { return Default.OutcomeRow.localTextPrefix; };
            OutcomeGrid.prototype.getService = function () { return Default.OutcomeService.baseUrl; };
            OutcomeGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: 'Delete Row',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action delete-row" title="delete">' +
                        '<i class="fa fa-trash-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                columns.splice(1, 0, {
                    field: 'Print Outcome',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action print-invoice" title="Outcome Details">' +
                        '<i class="fa fa-file-pdf-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return columns;
            };
            OutcomeGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('print-invoice')) {
                        CMCPS.Common.ReportHelper.execute({
                            reportKey: 'Default.Outcome',
                            params: {
                                OutcomeID: item.OutcomeId
                            }
                        });
                    }
                    else if (target.hasClass('delete-row')) {
                        Q.confirm('Delete record?', function () {
                            CMCPS.Default.OutcomeService.Delete({
                                EntityId: item.OutcomeId,
                            }, function (response) {
                                _this.refresh();
                            });
                        });
                    }
                }
            };
            OutcomeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OutcomeGrid);
            return OutcomeGrid;
        }(Serenity.EntityGrid));
        Default.OutcomeGrid = OutcomeGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var OutcomeNoteDialog = /** @class */ (function (_super) {
            __extends(OutcomeNoteDialog, _super);
            function OutcomeNoteDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.OutcomeNoteForm(_this.idPrefix);
                return _this;
            }
            OutcomeNoteDialog.prototype.getFormKey = function () { return Default.OutcomeNoteForm.formKey; };
            OutcomeNoteDialog.prototype.getIdProperty = function () { return Default.OutcomeNoteRow.idProperty; };
            OutcomeNoteDialog.prototype.getLocalTextPrefix = function () { return Default.OutcomeNoteRow.localTextPrefix; };
            OutcomeNoteDialog.prototype.getNameProperty = function () { return Default.OutcomeNoteRow.nameProperty; };
            OutcomeNoteDialog.prototype.getService = function () { return Default.OutcomeNoteService.baseUrl; };
            OutcomeNoteDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OutcomeNoteDialog);
            return OutcomeNoteDialog;
        }(Serenity.EntityDialog));
        Default.OutcomeNoteDialog = OutcomeNoteDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var OutcomeNoteGrid = /** @class */ (function (_super) {
            __extends(OutcomeNoteGrid, _super);
            function OutcomeNoteGrid(container) {
                return _super.call(this, container) || this;
            }
            OutcomeNoteGrid.prototype.getColumnsKey = function () { return 'Default.OutcomeNote'; };
            OutcomeNoteGrid.prototype.getDialogType = function () { return Default.OutcomeNoteDialog; };
            OutcomeNoteGrid.prototype.getIdProperty = function () { return Default.OutcomeNoteRow.idProperty; };
            OutcomeNoteGrid.prototype.getLocalTextPrefix = function () { return Default.OutcomeNoteRow.localTextPrefix; };
            OutcomeNoteGrid.prototype.getService = function () { return Default.OutcomeNoteService.baseUrl; };
            OutcomeNoteGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OutcomeNoteGrid);
            return OutcomeNoteGrid;
        }(Serenity.EntityGrid));
        Default.OutcomeNoteGrid = OutcomeNoteGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var PNoteDialog = /** @class */ (function (_super) {
            __extends(PNoteDialog, _super);
            function PNoteDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.PNoteForm(_this.idPrefix);
                return _this;
            }
            PNoteDialog.prototype.getFormKey = function () { return Default.PNoteForm.formKey; };
            PNoteDialog.prototype.getIdProperty = function () { return Default.PNoteRow.idProperty; };
            PNoteDialog.prototype.getLocalTextPrefix = function () { return Default.PNoteRow.localTextPrefix; };
            PNoteDialog.prototype.getNameProperty = function () { return Default.PNoteRow.nameProperty; };
            PNoteDialog.prototype.getService = function () { return Default.PNoteService.baseUrl; };
            PNoteDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PNoteDialog);
            return PNoteDialog;
        }(Serenity.EntityDialog));
        Default.PNoteDialog = PNoteDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var PNoteGrid = /** @class */ (function (_super) {
            __extends(PNoteGrid, _super);
            function PNoteGrid(container) {
                return _super.call(this, container) || this;
            }
            PNoteGrid.prototype.getColumnsKey = function () { return 'Default.PNote'; };
            PNoteGrid.prototype.getDialogType = function () { return Default.PNoteDialog; };
            PNoteGrid.prototype.getIdProperty = function () { return Default.PNoteRow.idProperty; };
            PNoteGrid.prototype.getLocalTextPrefix = function () { return Default.PNoteRow.localTextPrefix; };
            PNoteGrid.prototype.getService = function () { return Default.PNoteService.baseUrl; };
            PNoteGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PNoteGrid);
            return PNoteGrid;
        }(Serenity.EntityGrid));
        Default.PNoteGrid = PNoteGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var PathologyDialog = /** @class */ (function (_super) {
            __extends(PathologyDialog, _super);
            function PathologyDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.PathologyForm(_this.idPrefix);
                return _this;
            }
            PathologyDialog.prototype.getFormKey = function () { return Default.PathologyForm.formKey; };
            PathologyDialog.prototype.getIdProperty = function () { return Default.PathologyRow.idProperty; };
            PathologyDialog.prototype.getLocalTextPrefix = function () { return Default.PathologyRow.localTextPrefix; };
            PathologyDialog.prototype.getNameProperty = function () { return Default.PathologyRow.nameProperty; };
            PathologyDialog.prototype.getService = function () { return Default.PathologyService.baseUrl; };
            PathologyDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PathologyDialog);
            return PathologyDialog;
        }(Serenity.EntityDialog));
        Default.PathologyDialog = PathologyDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var PathologyGrid = /** @class */ (function (_super) {
            __extends(PathologyGrid, _super);
            function PathologyGrid(container) {
                return _super.call(this, container) || this;
            }
            PathologyGrid.prototype.getColumnsKey = function () { return 'Default.Pathology'; };
            PathologyGrid.prototype.getDialogType = function () { return Default.PathologyDialog; };
            PathologyGrid.prototype.getIdProperty = function () { return Default.PathologyRow.idProperty; };
            PathologyGrid.prototype.getLocalTextPrefix = function () { return Default.PathologyRow.localTextPrefix; };
            PathologyGrid.prototype.getService = function () { return Default.PathologyService.baseUrl; };
            PathologyGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PathologyGrid);
            return PathologyGrid;
        }(Serenity.EntityGrid));
        Default.PathologyGrid = PathologyGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
///<reference path="../../Common/Helpers/GridEditorDialog.ts" />
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var PathologyAndInvestigationDetailsDialog = /** @class */ (function (_super) {
            __extends(PathologyAndInvestigationDetailsDialog, _super);
            function PathologyAndInvestigationDetailsDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Default.PathologyAndInvestigationDetailsForm(_this.idPrefix);
                return _this;
            }
            PathologyAndInvestigationDetailsDialog.prototype.getFormKey = function () { return Default.PathologyAndInvestigationDetailsForm.formKey; };
            PathologyAndInvestigationDetailsDialog.prototype.getNameProperty = function () { return Default.PathologyAndInvestigationDetailsRow.nameProperty; };
            PathologyAndInvestigationDetailsDialog.prototype.getLocalTextPrefix = function () { return Default.PathologyAndInvestigationDetailsRow.localTextPrefix; };
            PathologyAndInvestigationDetailsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PathologyAndInvestigationDetailsDialog);
            return PathologyAndInvestigationDetailsDialog;
        }(CMCPS.Common.GridEditorDialog));
        Default.PathologyAndInvestigationDetailsDialog = PathologyAndInvestigationDetailsDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
///<reference path="../../Common/Helpers/GridEditorBase.ts" />
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var PathologyAndInvestigationDetailsEditor = /** @class */ (function (_super) {
            __extends(PathologyAndInvestigationDetailsEditor, _super);
            function PathologyAndInvestigationDetailsEditor(container) {
                return _super.call(this, container) || this;
            }
            PathologyAndInvestigationDetailsEditor.prototype.getColumnsKey = function () { return "Default.PathologyAndInvestigationDetails"; };
            PathologyAndInvestigationDetailsEditor.prototype.getDialogType = function () { return Default.PathologyAndInvestigationDetailsDialog; };
            PathologyAndInvestigationDetailsEditor.prototype.getLocalTextPrefix = function () { return Default.PathologyAndInvestigationDetailsRow.localTextPrefix; };
            PathologyAndInvestigationDetailsEditor.prototype.getAddButtonCaption = function () {
                return "Add";
            };
            PathologyAndInvestigationDetailsEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                row.PathologyName = Default.PathologyRow.getLookup().itemById[row.PathologyId].PathologyName;
                return true;
            };
            PathologyAndInvestigationDetailsEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], PathologyAndInvestigationDetailsEditor);
            return PathologyAndInvestigationDetailsEditor;
        }(CMCPS.Common.GridEditorBase));
        Default.PathologyAndInvestigationDetailsEditor = PathologyAndInvestigationDetailsEditor;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var PercussionDialog = /** @class */ (function (_super) {
            __extends(PercussionDialog, _super);
            function PercussionDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.PercussionForm(_this.idPrefix);
                return _this;
            }
            PercussionDialog.prototype.getFormKey = function () { return Default.PercussionForm.formKey; };
            PercussionDialog.prototype.getIdProperty = function () { return Default.PercussionRow.idProperty; };
            PercussionDialog.prototype.getLocalTextPrefix = function () { return Default.PercussionRow.localTextPrefix; };
            PercussionDialog.prototype.getNameProperty = function () { return Default.PercussionRow.nameProperty; };
            PercussionDialog.prototype.getService = function () { return Default.PercussionService.baseUrl; };
            PercussionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PercussionDialog);
            return PercussionDialog;
        }(Serenity.EntityDialog));
        Default.PercussionDialog = PercussionDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPC;
(function (CMCPC) {
    var Default;
    (function (Default) {
        var PercussionGrid = /** @class */ (function (_super) {
            __extends(PercussionGrid, _super);
            function PercussionGrid(container) {
                return _super.call(this, container) || this;
            }
            PercussionGrid.prototype.getColumnsKey = function () { return 'Default.Percussion'; };
            PercussionGrid.prototype.getDialogType = function () { return PercussionDialog; };
            PercussionGrid.prototype.getIdProperty = function () { return PercussionRow.idProperty; };
            PercussionGrid.prototype.getLocalTextPrefix = function () { return PercussionRow.localTextPrefix; };
            PercussionGrid.prototype.getService = function () { return PercussionService.baseUrl; };
            PercussionGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PercussionGrid);
            return PercussionGrid;
        }(Serenity.EntityGrid));
        Default.PercussionGrid = PercussionGrid;
    })(Default = CMCPC.Default || (CMCPC.Default = {}));
})(CMCPC || (CMCPC = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var PercussionHistoryDialog = /** @class */ (function (_super) {
            __extends(PercussionHistoryDialog, _super);
            function PercussionHistoryDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.PercussionHistoryForm(_this.idPrefix);
                return _this;
            }
            PercussionHistoryDialog.prototype.getFormKey = function () { return Default.PercussionHistoryForm.formKey; };
            PercussionHistoryDialog.prototype.getIdProperty = function () { return Default.PercussionHistoryRow.idProperty; };
            PercussionHistoryDialog.prototype.getLocalTextPrefix = function () { return Default.PercussionHistoryRow.localTextPrefix; };
            PercussionHistoryDialog.prototype.getService = function () { return Default.PercussionHistoryService.baseUrl; };
            PercussionHistoryDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PercussionHistoryDialog);
            return PercussionHistoryDialog;
        }(Serenity.EntityDialog));
        Default.PercussionHistoryDialog = PercussionHistoryDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPC;
(function (CMCPC) {
    var Default;
    (function (Default) {
        var PercussionHistoryGrid = /** @class */ (function (_super) {
            __extends(PercussionHistoryGrid, _super);
            function PercussionHistoryGrid(container) {
                return _super.call(this, container) || this;
            }
            PercussionHistoryGrid.prototype.getColumnsKey = function () { return 'Default.PercussionHistory'; };
            PercussionHistoryGrid.prototype.getDialogType = function () { return PercussionHistoryDialog; };
            PercussionHistoryGrid.prototype.getIdProperty = function () { return PercussionHistoryRow.idProperty; };
            PercussionHistoryGrid.prototype.getLocalTextPrefix = function () { return PercussionHistoryRow.localTextPrefix; };
            PercussionHistoryGrid.prototype.getService = function () { return PercussionHistoryService.baseUrl; };
            PercussionHistoryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PercussionHistoryGrid);
            return PercussionHistoryGrid;
        }(Serenity.EntityGrid));
        Default.PercussionHistoryGrid = PercussionHistoryGrid;
    })(Default = CMCPC.Default || (CMCPC.Default = {}));
})(CMCPC || (CMCPC = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var PositionDialog = /** @class */ (function (_super) {
            __extends(PositionDialog, _super);
            function PositionDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.PositionForm(_this.idPrefix);
                return _this;
            }
            PositionDialog.prototype.getFormKey = function () { return Default.PositionForm.formKey; };
            PositionDialog.prototype.getIdProperty = function () { return Default.PositionRow.idProperty; };
            PositionDialog.prototype.getLocalTextPrefix = function () { return Default.PositionRow.localTextPrefix; };
            PositionDialog.prototype.getNameProperty = function () { return Default.PositionRow.nameProperty; };
            PositionDialog.prototype.getService = function () { return Default.PositionService.baseUrl; };
            PositionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PositionDialog);
            return PositionDialog;
        }(Serenity.EntityDialog));
        Default.PositionDialog = PositionDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var PositionGrid = /** @class */ (function (_super) {
            __extends(PositionGrid, _super);
            function PositionGrid(container) {
                return _super.call(this, container) || this;
            }
            PositionGrid.prototype.getColumnsKey = function () { return 'Default.Position'; };
            PositionGrid.prototype.getDialogType = function () { return Default.PositionDialog; };
            PositionGrid.prototype.getIdProperty = function () { return Default.PositionRow.idProperty; };
            PositionGrid.prototype.getLocalTextPrefix = function () { return Default.PositionRow.localTextPrefix; };
            PositionGrid.prototype.getService = function () { return Default.PositionService.baseUrl; };
            PositionGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PositionGrid);
            return PositionGrid;
        }(Serenity.EntityGrid));
        Default.PositionGrid = PositionGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var PostNatalDialog = /** @class */ (function (_super) {
            __extends(PostNatalDialog, _super);
            function PostNatalDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.PostNatalForm(_this.idPrefix);
                return _this;
            }
            PostNatalDialog.prototype.getFormKey = function () { return Default.PostNatalForm.formKey; };
            PostNatalDialog.prototype.getIdProperty = function () { return Default.PostNatalRow.idProperty; };
            PostNatalDialog.prototype.getLocalTextPrefix = function () { return Default.PostNatalRow.localTextPrefix; };
            PostNatalDialog.prototype.getNameProperty = function () { return Default.PostNatalRow.nameProperty; };
            PostNatalDialog.prototype.getService = function () { return Default.PostNatalService.baseUrl; };
            PostNatalDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PostNatalDialog);
            return PostNatalDialog;
        }(Serenity.EntityDialog));
        Default.PostNatalDialog = PostNatalDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var PostNatalGrid = /** @class */ (function (_super) {
            __extends(PostNatalGrid, _super);
            function PostNatalGrid(container) {
                return _super.call(this, container) || this;
            }
            PostNatalGrid.prototype.getColumnsKey = function () { return 'Default.PostNatal'; };
            PostNatalGrid.prototype.getDialogType = function () { return Default.PostNatalDialog; };
            PostNatalGrid.prototype.getIdProperty = function () { return Default.PostNatalRow.idProperty; };
            PostNatalGrid.prototype.getLocalTextPrefix = function () { return Default.PostNatalRow.localTextPrefix; };
            PostNatalGrid.prototype.getService = function () { return Default.PostNatalService.baseUrl; };
            PostNatalGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PostNatalGrid);
            return PostNatalGrid;
        }(Serenity.EntityGrid));
        Default.PostNatalGrid = PostNatalGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var PresentingComplaintsDialog = /** @class */ (function (_super) {
            __extends(PresentingComplaintsDialog, _super);
            function PresentingComplaintsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.PresentingComplaintsForm(_this.idPrefix);
                return _this;
            }
            PresentingComplaintsDialog.prototype.getFormKey = function () { return Default.PresentingComplaintsForm.formKey; };
            PresentingComplaintsDialog.prototype.getIdProperty = function () { return Default.PresentingComplaintsRow.idProperty; };
            PresentingComplaintsDialog.prototype.getLocalTextPrefix = function () { return Default.PresentingComplaintsRow.localTextPrefix; };
            PresentingComplaintsDialog.prototype.getNameProperty = function () { return Default.PresentingComplaintsRow.nameProperty; };
            PresentingComplaintsDialog.prototype.getService = function () { return Default.PresentingComplaintsService.baseUrl; };
            PresentingComplaintsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PresentingComplaintsDialog);
            return PresentingComplaintsDialog;
        }(Serenity.EntityDialog));
        Default.PresentingComplaintsDialog = PresentingComplaintsDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var PresentingComplaintsGrid = /** @class */ (function (_super) {
            __extends(PresentingComplaintsGrid, _super);
            function PresentingComplaintsGrid(container) {
                return _super.call(this, container) || this;
            }
            PresentingComplaintsGrid.prototype.getColumnsKey = function () { return 'Default.PresentingComplaints'; };
            PresentingComplaintsGrid.prototype.getDialogType = function () { return Default.PresentingComplaintsDialog; };
            PresentingComplaintsGrid.prototype.getIdProperty = function () { return Default.PresentingComplaintsRow.idProperty; };
            PresentingComplaintsGrid.prototype.getLocalTextPrefix = function () { return Default.PresentingComplaintsRow.localTextPrefix; };
            PresentingComplaintsGrid.prototype.getService = function () { return Default.PresentingComplaintsService.baseUrl; };
            PresentingComplaintsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PresentingComplaintsGrid);
            return PresentingComplaintsGrid;
        }(Serenity.EntityGrid));
        Default.PresentingComplaintsGrid = PresentingComplaintsGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var RegularMedicationDialog = /** @class */ (function (_super) {
            __extends(RegularMedicationDialog, _super);
            function RegularMedicationDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.RegularMedicationForm(_this.idPrefix);
                return _this;
            }
            RegularMedicationDialog.prototype.getFormKey = function () { return Default.RegularMedicationForm.formKey; };
            RegularMedicationDialog.prototype.getIdProperty = function () { return Default.RegularMedicationRow.idProperty; };
            RegularMedicationDialog.prototype.getLocalTextPrefix = function () { return Default.RegularMedicationRow.localTextPrefix; };
            RegularMedicationDialog.prototype.getNameProperty = function () { return Default.RegularMedicationRow.nameProperty; };
            RegularMedicationDialog.prototype.getService = function () { return Default.RegularMedicationService.baseUrl; };
            RegularMedicationDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RegularMedicationDialog);
            return RegularMedicationDialog;
        }(Serenity.EntityDialog));
        Default.RegularMedicationDialog = RegularMedicationDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var RegularMedicationGrid = /** @class */ (function (_super) {
            __extends(RegularMedicationGrid, _super);
            function RegularMedicationGrid(container) {
                return _super.call(this, container) || this;
            }
            RegularMedicationGrid.prototype.getColumnsKey = function () { return 'Default.RegularMedication'; };
            RegularMedicationGrid.prototype.getDialogType = function () { return Default.RegularMedicationDialog; };
            RegularMedicationGrid.prototype.getIdProperty = function () { return Default.RegularMedicationRow.idProperty; };
            RegularMedicationGrid.prototype.getLocalTextPrefix = function () { return Default.RegularMedicationRow.localTextPrefix; };
            RegularMedicationGrid.prototype.getService = function () { return Default.RegularMedicationService.baseUrl; };
            RegularMedicationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RegularMedicationGrid);
            return RegularMedicationGrid;
        }(Serenity.EntityGrid));
        Default.RegularMedicationGrid = RegularMedicationGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var SexDialog = /** @class */ (function (_super) {
            __extends(SexDialog, _super);
            function SexDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.SexForm(_this.idPrefix);
                return _this;
            }
            SexDialog.prototype.getFormKey = function () { return Default.SexForm.formKey; };
            SexDialog.prototype.getIdProperty = function () { return Default.SexRow.idProperty; };
            SexDialog.prototype.getLocalTextPrefix = function () { return Default.SexRow.localTextPrefix; };
            SexDialog.prototype.getNameProperty = function () { return Default.SexRow.nameProperty; };
            SexDialog.prototype.getService = function () { return Default.SexService.baseUrl; };
            SexDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SexDialog);
            return SexDialog;
        }(Serenity.EntityDialog));
        Default.SexDialog = SexDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var SexGrid = /** @class */ (function (_super) {
            __extends(SexGrid, _super);
            function SexGrid(container) {
                return _super.call(this, container) || this;
            }
            SexGrid.prototype.getColumnsKey = function () { return 'Default.Sex'; };
            SexGrid.prototype.getDialogType = function () { return Default.SexDialog; };
            SexGrid.prototype.getIdProperty = function () { return Default.SexRow.idProperty; };
            SexGrid.prototype.getLocalTextPrefix = function () { return Default.SexRow.localTextPrefix; };
            SexGrid.prototype.getService = function () { return Default.SexService.baseUrl; };
            SexGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SexGrid);
            return SexGrid;
        }(Serenity.EntityGrid));
        Default.SexGrid = SexGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var SpecialNoteDialog = /** @class */ (function (_super) {
            __extends(SpecialNoteDialog, _super);
            function SpecialNoteDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.SpecialNoteForm(_this.idPrefix);
                return _this;
            }
            SpecialNoteDialog.prototype.getFormKey = function () { return Default.SpecialNoteForm.formKey; };
            SpecialNoteDialog.prototype.getIdProperty = function () { return Default.SpecialNoteRow.idProperty; };
            SpecialNoteDialog.prototype.getLocalTextPrefix = function () { return Default.SpecialNoteRow.localTextPrefix; };
            SpecialNoteDialog.prototype.getNameProperty = function () { return Default.SpecialNoteRow.nameProperty; };
            SpecialNoteDialog.prototype.getService = function () { return Default.SpecialNoteService.baseUrl; };
            SpecialNoteDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SpecialNoteDialog);
            return SpecialNoteDialog;
        }(Serenity.EntityDialog));
        Default.SpecialNoteDialog = SpecialNoteDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var SpecialNoteGrid = /** @class */ (function (_super) {
            __extends(SpecialNoteGrid, _super);
            function SpecialNoteGrid(container) {
                return _super.call(this, container) || this;
            }
            SpecialNoteGrid.prototype.getColumnsKey = function () { return 'Default.SpecialNote'; };
            SpecialNoteGrid.prototype.getDialogType = function () { return Default.SpecialNoteDialog; };
            SpecialNoteGrid.prototype.getIdProperty = function () { return Default.SpecialNoteRow.idProperty; };
            SpecialNoteGrid.prototype.getLocalTextPrefix = function () { return Default.SpecialNoteRow.localTextPrefix; };
            SpecialNoteGrid.prototype.getService = function () { return Default.SpecialNoteService.baseUrl; };
            SpecialNoteGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SpecialNoteGrid);
            return SpecialNoteGrid;
        }(Serenity.EntityGrid));
        Default.SpecialNoteGrid = SpecialNoteGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var SurgeonDialog = /** @class */ (function (_super) {
            __extends(SurgeonDialog, _super);
            function SurgeonDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.SurgeonForm(_this.idPrefix);
                return _this;
            }
            SurgeonDialog.prototype.getFormKey = function () { return Default.SurgeonForm.formKey; };
            SurgeonDialog.prototype.getIdProperty = function () { return Default.SurgeonRow.idProperty; };
            SurgeonDialog.prototype.getLocalTextPrefix = function () { return Default.SurgeonRow.localTextPrefix; };
            SurgeonDialog.prototype.getNameProperty = function () { return Default.SurgeonRow.nameProperty; };
            SurgeonDialog.prototype.getService = function () { return Default.SurgeonService.baseUrl; };
            SurgeonDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SurgeonDialog);
            return SurgeonDialog;
        }(Serenity.EntityDialog));
        Default.SurgeonDialog = SurgeonDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var SurgeonGrid = /** @class */ (function (_super) {
            __extends(SurgeonGrid, _super);
            function SurgeonGrid(container) {
                return _super.call(this, container) || this;
            }
            SurgeonGrid.prototype.getColumnsKey = function () { return 'Default.Surgeon'; };
            SurgeonGrid.prototype.getDialogType = function () { return Default.SurgeonDialog; };
            SurgeonGrid.prototype.getIdProperty = function () { return Default.SurgeonRow.idProperty; };
            SurgeonGrid.prototype.getLocalTextPrefix = function () { return Default.SurgeonRow.localTextPrefix; };
            SurgeonGrid.prototype.getService = function () { return Default.SurgeonService.baseUrl; };
            SurgeonGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SurgeonGrid);
            return SurgeonGrid;
        }(Serenity.EntityGrid));
        Default.SurgeonGrid = SurgeonGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var TreatmentDialog = /** @class */ (function (_super) {
            __extends(TreatmentDialog, _super);
            function TreatmentDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Default.TreatmentForm(_this.idPrefix);
                _this.form.AdmissionId.changeSelect2(function (x) {
                    var admissionId = Q.toId(_this.form.AdmissionId.value);
                    if (admissionId != "") {
                        Default.AdmissionService.Retrieve({ EntityId: admissionId }, function (response) {
                            _this.form.Age.value = response.Entity.Age;
                            _this.form.Sex.value = response.Entity.Sex;
                            _this.form.AdmissionDate.value = response.Entity.Date;
                            _this.form.PinNumber.value = response.Entity.PinNumber;
                            _this.form.UnitNumber.value = response.Entity.UnitNumber;
                            _this.form.UnitRegNo.value = response.Entity.UnitRegNumber;
                            _this.form.BedNumber.value = response.Entity.BedNumber;
                            _this.form.Weight.value = response.Entity.Weight;
                            _this.form.BloodGroup.value = response.Entity.BloodGroup;
                            _this.form.HospitalRegNo.value = response.Entity.HospitalRegNumber;
                        });
                    }
                });
                _this.form.MedicineId.changeSelect2(function (a) {
                    var medicineId = Q.toId(_this.form.MedicineId.value);
                    if (medicineId != "") {
                        _this.form.DoaseId.value = "13";
                        _this.form.DurationId.value = "25";
                    }
                });
                var btnAdd = $('.AddToArea')[0];
                btnAdd.innerHTML = "\n                <a href= \"javascript:;\" class=\"btn btn-success DetailAdd\"> <i class=\"fa fa-fw fa-plus-circle\"> </i>Add</a>";
                $('.DetailAdd').click(function (e) { return _this.addtoArea(); });
                return _this;
            }
            TreatmentDialog.prototype.getFormKey = function () { return Default.TreatmentForm.formKey; };
            TreatmentDialog.prototype.getIdProperty = function () { return Default.TreatmentRow.idProperty; };
            TreatmentDialog.prototype.getLocalTextPrefix = function () { return Default.TreatmentRow.localTextPrefix; };
            TreatmentDialog.prototype.getNameProperty = function () { return Default.TreatmentRow.nameProperty; };
            TreatmentDialog.prototype.getService = function () { return Default.TreatmentService.baseUrl; };
            TreatmentDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push(CMCPS.Common.ReportHelper.createToolButton({
                    title: 'Treatment Details',
                    cssClass: 'export-pdf-button',
                    reportKey: 'Default.Treatment',
                    getParams: function () { return ({
                        TreatmentId: _this.get_entityId()
                    }); }
                }));
                return buttons;
            };
            TreatmentDialog.prototype.addtoArea = function () {
                if (this.form.MedicineId.value != "") {
                    if (this.form.DoaseId.value != "") {
                        if (this.form.DurationId.value != "") {
                            if (this.form.Treatment.value == "") {
                                this.form.Treatment.value = this.form.MedicineId.text + "\n          " + this.form.DoaseId.text + " ------ " + this.form.DurationId.text + ",";
                            }
                            else {
                                this.form.Treatment.value = this.form.Treatment.value + "\n" + this.form.MedicineId.text + "\n          " + this.form.DoaseId.text + " ------" + this.form.DurationId.text + ",";
                            }
                            this.form.MedicineId.value = "";
                            this.form.DoaseId.value = "";
                            this.form.DurationId.value = "";
                        }
                        else {
                            Q.alert("Please select duration");
                        }
                    }
                    else {
                        Q.alert("Please select dose");
                    }
                }
                else {
                    Q.alert("Please select medicine");
                }
            };
            TreatmentDialog.prototype.updateInterface = function () {
                var _this = this;
                _super.prototype.updateInterface.call(this);
                if (this.isEditMode()) {
                    Serenity.EditorUtils.setReadOnly(this.form.AdmissionId, true);
                    var admissionId = Q.toId(this.form.AdmissionId.value);
                    if (admissionId != "") {
                        Default.AdmissionService.Retrieve({ EntityId: admissionId }, function (response) {
                            _this.form.Age.value = response.Entity.Age;
                            _this.form.Sex.value = response.Entity.Sex;
                            _this.form.AdmissionDate.value = response.Entity.Date;
                            _this.form.PinNumber.value = response.Entity.PinNumber;
                            _this.form.UnitNumber.value = response.Entity.UnitNumber;
                            _this.form.UnitRegNo.value = response.Entity.UnitRegNumber;
                            _this.form.BedNumber.value = response.Entity.BedNumber;
                            _this.form.HospitalRegNo.value = response.Entity.HospitalRegNumber;
                            _this.form.Weight.value = response.Entity.Weight;
                            _this.form.BloodGroup.value = response.Entity.BloodGroup;
                        });
                    }
                }
                this.toolbar.findButton('export-pdf-button').toggle(this.isEditMode());
            };
            TreatmentDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], TreatmentDialog);
            return TreatmentDialog;
        }(Serenity.EntityDialog));
        Default.TreatmentDialog = TreatmentDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var TreatmentGrid = /** @class */ (function (_super) {
            __extends(TreatmentGrid, _super);
            function TreatmentGrid(container) {
                return _super.call(this, container) || this;
            }
            TreatmentGrid.prototype.getColumnsKey = function () { return 'Default.Treatment'; };
            TreatmentGrid.prototype.getDialogType = function () { return Default.TreatmentDialog; };
            TreatmentGrid.prototype.getIdProperty = function () { return Default.TreatmentRow.idProperty; };
            TreatmentGrid.prototype.getLocalTextPrefix = function () { return Default.TreatmentRow.localTextPrefix; };
            TreatmentGrid.prototype.getService = function () { return Default.TreatmentService.baseUrl; };
            TreatmentGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: 'Delete Row',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action delete-row" title="delete">' +
                        '<i class="fa fa-trash-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                columns.splice(1, 0, {
                    field: 'Print Treatment',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action print-invoice" title="Treatment Details">' +
                        '<i class="fa fa-file-pdf-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return columns;
            };
            TreatmentGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('print-invoice')) {
                        CMCPS.Common.ReportHelper.execute({
                            reportKey: 'Default.Treatment',
                            params: {
                                TreatmentId: item.TreatmentId
                            }
                        });
                    }
                    else if (target.hasClass('delete-row')) {
                        Q.confirm('Delete record?', function () {
                            CMCPS.Default.TreatmentService.Delete({
                                EntityId: item.TreatmentId,
                            }, function (response) {
                                _this.refresh();
                            });
                        });
                    }
                }
            };
            TreatmentGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TreatmentGrid);
            return TreatmentGrid;
        }(Serenity.EntityGrid));
        Default.TreatmentGrid = TreatmentGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var UnitDialog = /** @class */ (function (_super) {
            __extends(UnitDialog, _super);
            function UnitDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.UnitForm(_this.idPrefix);
                return _this;
            }
            UnitDialog.prototype.getFormKey = function () { return Default.UnitForm.formKey; };
            UnitDialog.prototype.getIdProperty = function () { return Default.UnitRow.idProperty; };
            UnitDialog.prototype.getLocalTextPrefix = function () { return Default.UnitRow.localTextPrefix; };
            UnitDialog.prototype.getNameProperty = function () { return Default.UnitRow.nameProperty; };
            UnitDialog.prototype.getService = function () { return Default.UnitService.baseUrl; };
            UnitDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UnitDialog);
            return UnitDialog;
        }(Serenity.EntityDialog));
        Default.UnitDialog = UnitDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var UnitGrid = /** @class */ (function (_super) {
            __extends(UnitGrid, _super);
            function UnitGrid(container) {
                return _super.call(this, container) || this;
            }
            UnitGrid.prototype.getColumnsKey = function () { return 'Default.Unit'; };
            UnitGrid.prototype.getDialogType = function () { return Default.UnitDialog; };
            UnitGrid.prototype.getIdProperty = function () { return Default.UnitRow.idProperty; };
            UnitGrid.prototype.getLocalTextPrefix = function () { return Default.UnitRow.localTextPrefix; };
            UnitGrid.prototype.getService = function () { return Default.UnitService.baseUrl; };
            UnitGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UnitGrid);
            return UnitGrid;
        }(Serenity.EntityGrid));
        Default.UnitGrid = UnitGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var UpazilaDialog = /** @class */ (function (_super) {
            __extends(UpazilaDialog, _super);
            function UpazilaDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.UpazilaForm(_this.idPrefix);
                return _this;
            }
            UpazilaDialog.prototype.getFormKey = function () { return Default.UpazilaForm.formKey; };
            UpazilaDialog.prototype.getIdProperty = function () { return Default.UpazilaRow.idProperty; };
            UpazilaDialog.prototype.getLocalTextPrefix = function () { return Default.UpazilaRow.localTextPrefix; };
            UpazilaDialog.prototype.getNameProperty = function () { return Default.UpazilaRow.nameProperty; };
            UpazilaDialog.prototype.getService = function () { return Default.UpazilaService.baseUrl; };
            UpazilaDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UpazilaDialog);
            return UpazilaDialog;
        }(Serenity.EntityDialog));
        Default.UpazilaDialog = UpazilaDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var UpazilaGrid = /** @class */ (function (_super) {
            __extends(UpazilaGrid, _super);
            function UpazilaGrid(container) {
                return _super.call(this, container) || this;
            }
            UpazilaGrid.prototype.getColumnsKey = function () { return 'Default.Upazila'; };
            UpazilaGrid.prototype.getDialogType = function () { return Default.UpazilaDialog; };
            UpazilaGrid.prototype.getIdProperty = function () { return Default.UpazilaRow.idProperty; };
            UpazilaGrid.prototype.getLocalTextPrefix = function () { return Default.UpazilaRow.localTextPrefix; };
            UpazilaGrid.prototype.getService = function () { return Default.UpazilaService.baseUrl; };
            UpazilaGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UpazilaGrid);
            return UpazilaGrid;
        }(Serenity.EntityGrid));
        Default.UpazilaGrid = UpazilaGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var VocalResonanceDialog = /** @class */ (function (_super) {
            __extends(VocalResonanceDialog, _super);
            function VocalResonanceDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.VocalResonanceForm(_this.idPrefix);
                return _this;
            }
            VocalResonanceDialog.prototype.getFormKey = function () { return Default.VocalResonanceForm.formKey; };
            VocalResonanceDialog.prototype.getIdProperty = function () { return Default.VocalResonanceRow.idProperty; };
            VocalResonanceDialog.prototype.getLocalTextPrefix = function () { return Default.VocalResonanceRow.localTextPrefix; };
            VocalResonanceDialog.prototype.getNameProperty = function () { return Default.VocalResonanceRow.nameProperty; };
            VocalResonanceDialog.prototype.getService = function () { return Default.VocalResonanceService.baseUrl; };
            VocalResonanceDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], VocalResonanceDialog);
            return VocalResonanceDialog;
        }(Serenity.EntityDialog));
        Default.VocalResonanceDialog = VocalResonanceDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var VocalResonanceGrid = /** @class */ (function (_super) {
            __extends(VocalResonanceGrid, _super);
            function VocalResonanceGrid(container) {
                return _super.call(this, container) || this;
            }
            VocalResonanceGrid.prototype.getColumnsKey = function () { return 'Default.VocalResonance'; };
            VocalResonanceGrid.prototype.getDialogType = function () { return Default.VocalResonanceDialog; };
            VocalResonanceGrid.prototype.getIdProperty = function () { return Default.VocalResonanceRow.idProperty; };
            VocalResonanceGrid.prototype.getLocalTextPrefix = function () { return Default.VocalResonanceRow.localTextPrefix; };
            VocalResonanceGrid.prototype.getService = function () { return Default.VocalResonanceService.baseUrl; };
            VocalResonanceGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], VocalResonanceGrid);
            return VocalResonanceGrid;
        }(Serenity.EntityGrid));
        Default.VocalResonanceGrid = VocalResonanceGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var VocalResonanceHistoryDialog = /** @class */ (function (_super) {
            __extends(VocalResonanceHistoryDialog, _super);
            function VocalResonanceHistoryDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.VocalResonanceHistoryForm(_this.idPrefix);
                return _this;
            }
            VocalResonanceHistoryDialog.prototype.getFormKey = function () { return Default.VocalResonanceHistoryForm.formKey; };
            VocalResonanceHistoryDialog.prototype.getIdProperty = function () { return Default.VocalResonanceHistoryRow.idProperty; };
            VocalResonanceHistoryDialog.prototype.getLocalTextPrefix = function () { return Default.VocalResonanceHistoryRow.localTextPrefix; };
            VocalResonanceHistoryDialog.prototype.getService = function () { return Default.VocalResonanceHistoryService.baseUrl; };
            VocalResonanceHistoryDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], VocalResonanceHistoryDialog);
            return VocalResonanceHistoryDialog;
        }(Serenity.EntityDialog));
        Default.VocalResonanceHistoryDialog = VocalResonanceHistoryDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var VocalResonanceHistoryGrid = /** @class */ (function (_super) {
            __extends(VocalResonanceHistoryGrid, _super);
            function VocalResonanceHistoryGrid(container) {
                return _super.call(this, container) || this;
            }
            VocalResonanceHistoryGrid.prototype.getColumnsKey = function () { return 'Default.VocalResonanceHistory'; };
            VocalResonanceHistoryGrid.prototype.getDialogType = function () { return Default.VocalResonanceHistoryDialog; };
            VocalResonanceHistoryGrid.prototype.getIdProperty = function () { return Default.VocalResonanceHistoryRow.idProperty; };
            VocalResonanceHistoryGrid.prototype.getLocalTextPrefix = function () { return Default.VocalResonanceHistoryRow.localTextPrefix; };
            VocalResonanceHistoryGrid.prototype.getService = function () { return Default.VocalResonanceHistoryService.baseUrl; };
            VocalResonanceHistoryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], VocalResonanceHistoryGrid);
            return VocalResonanceHistoryGrid;
        }(Serenity.EntityGrid));
        Default.VocalResonanceHistoryGrid = VocalResonanceHistoryGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var WardDialog = /** @class */ (function (_super) {
            __extends(WardDialog, _super);
            function WardDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.WardForm(_this.idPrefix);
                return _this;
            }
            WardDialog.prototype.getFormKey = function () { return Default.WardForm.formKey; };
            WardDialog.prototype.getIdProperty = function () { return Default.WardRow.idProperty; };
            WardDialog.prototype.getLocalTextPrefix = function () { return Default.WardRow.localTextPrefix; };
            WardDialog.prototype.getNameProperty = function () { return Default.WardRow.nameProperty; };
            WardDialog.prototype.getService = function () { return Default.WardService.baseUrl; };
            WardDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], WardDialog);
            return WardDialog;
        }(Serenity.EntityDialog));
        Default.WardDialog = WardDialog;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Default;
    (function (Default) {
        var WardGrid = /** @class */ (function (_super) {
            __extends(WardGrid, _super);
            function WardGrid(container) {
                return _super.call(this, container) || this;
            }
            WardGrid.prototype.getColumnsKey = function () { return 'Default.Ward'; };
            WardGrid.prototype.getDialogType = function () { return Default.WardDialog; };
            WardGrid.prototype.getIdProperty = function () { return Default.WardRow.idProperty; };
            WardGrid.prototype.getLocalTextPrefix = function () { return Default.WardRow.localTextPrefix; };
            WardGrid.prototype.getService = function () { return Default.WardService.baseUrl; };
            WardGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], WardGrid);
            return WardGrid;
        }(Serenity.EntityGrid));
        Default.WardGrid = WardGrid;
    })(Default = CMCPS.Default || (CMCPS.Default = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = /** @class */ (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = CMCPS.Membership || (CMCPS.Membership = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = CMCPS.Membership || (CMCPS.Membership = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = CMCPS.Membership || (CMCPS.Membership = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = /** @class */ (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = CMCPS.Membership || (CMCPS.Membership = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var CustomerEditor = /** @class */ (function (_super) {
            __extends(CustomerEditor, _super);
            function CustomerEditor(hidden) {
                return _super.call(this, hidden) || this;
            }
            CustomerEditor.prototype.getLookupKey = function () {
                return Northwind.CustomerRow.lookupKey;
            };
            CustomerEditor.prototype.getItemText = function (item, lookup) {
                return _super.prototype.getItemText.call(this, item, lookup) + ' [' + item.CustomerID + ']';
            };
            CustomerEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], CustomerEditor);
            return CustomerEditor;
        }(Serenity.LookupEditorBase));
        Northwind.CustomerEditor = CustomerEditor;
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
/// <reference path="../Order/OrderDialog.ts" />
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var CustomerOrderDialog = /** @class */ (function (_super) {
            __extends(CustomerOrderDialog, _super);
            function CustomerOrderDialog() {
                return _super.call(this) || this;
            }
            CustomerOrderDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                Serenity.EditorUtils.setReadOnly(this.form.CustomerID, true);
            };
            CustomerOrderDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerOrderDialog);
            return CustomerOrderDialog;
        }(Northwind.OrderDialog));
        Northwind.CustomerOrderDialog = CustomerOrderDialog;
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
/// <reference path="../Order/OrderGrid.ts" />
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var CustomerOrdersGrid = /** @class */ (function (_super) {
            __extends(CustomerOrdersGrid, _super);
            function CustomerOrdersGrid(container) {
                return _super.call(this, container) || this;
            }
            CustomerOrdersGrid.prototype.getDialogType = function () { return Northwind.CustomerOrderDialog; };
            CustomerOrdersGrid.prototype.getColumns = function () {
                return _super.prototype.getColumns.call(this).filter(function (x) { return x.field !== "CustomerCompanyName" /* CustomerCompanyName */; });
            };
            CustomerOrdersGrid.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
            };
            CustomerOrdersGrid.prototype.addButtonClick = function () {
                this.editItem({ CustomerID: this.customerID });
            };
            CustomerOrdersGrid.prototype.getInitialTitle = function () {
                return null;
            };
            CustomerOrdersGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.customerID;
            };
            Object.defineProperty(CustomerOrdersGrid.prototype, "customerID", {
                get: function () {
                    return this._customerID;
                },
                set: function (value) {
                    if (this._customerID !== value) {
                        this._customerID = value;
                        this.setEquality('CustomerID', value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            CustomerOrdersGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerOrdersGrid);
            return CustomerOrdersGrid;
        }(Northwind.OrderGrid));
        Northwind.CustomerOrdersGrid = CustomerOrdersGrid;
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var EmployeeListFormatter = /** @class */ (function () {
            function EmployeeListFormatter() {
            }
            EmployeeListFormatter.prototype.format = function (ctx) {
                var idList = ctx.value;
                if (!idList || !idList.length)
                    return "";
                var byId = Northwind.EmployeeRow.getLookup().itemById;
                var z;
                return idList.map(function (x) { return ((z = byId[x]) ? z.FullName : x); }).join(", ");
            };
            EmployeeListFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EmployeeListFormatter);
            return EmployeeListFormatter;
        }());
        Northwind.EmployeeListFormatter = EmployeeListFormatter;
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var EmployeeFormatter = /** @class */ (function () {
            function EmployeeFormatter() {
            }
            EmployeeFormatter.prototype.format = function (ctx) {
                var text = Q.htmlEncode(ctx.value);
                if (!this.genderProperty) {
                    return text;
                }
                var gender = ctx.item[this.genderProperty];
                return "<span class='" + ((gender === Northwind.Gender.Female) ?
                    'employee-symbol female' : 'employee-symbol male') +
                    "'>" + text + '</span>';
            };
            EmployeeFormatter.prototype.initializeColumn = function (column) {
                column.referencedFields = column.referencedFields || [];
                if (this.genderProperty)
                    column.referencedFields.push(this.genderProperty);
            };
            __decorate([
                Serenity.Decorators.option()
            ], EmployeeFormatter.prototype, "genderProperty", void 0);
            EmployeeFormatter = __decorate([
                Serenity.Decorators.registerFormatter([Serenity.ISlickFormatter, Serenity.IInitializeColumn])
            ], EmployeeFormatter);
            return EmployeeFormatter;
        }());
        Northwind.EmployeeFormatter = EmployeeFormatter;
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var NoteDialog = /** @class */ (function (_super) {
            __extends(NoteDialog, _super);
            function NoteDialog() {
                var _this = _super.call(this) || this;
                _this.textEditor = new Serenity.HtmlNoteContentEditor(_this.byId('Text'));
                return _this;
            }
            NoteDialog.prototype.getTemplate = function () {
                return ("<form id='~_Form' class='s-Form'>" +
                    "<textarea id='~_Text' class='required'></textarea>" +
                    "</form>");
            };
            NoteDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            if (!_this.validateForm()) {
                                return;
                            }
                            _this.okClick && _this.okClick();
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                return opt;
            };
            Object.defineProperty(NoteDialog.prototype, "text", {
                get: function () {
                    return this.textEditor.value;
                },
                set: function (value) {
                    this.textEditor.value = value;
                },
                enumerable: true,
                configurable: true
            });
            NoteDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], NoteDialog);
            return NoteDialog;
        }(Serenity.TemplatedDialog));
        Northwind.NoteDialog = NoteDialog;
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var NotesEditor = /** @class */ (function (_super) {
            __extends(NotesEditor, _super);
            function NotesEditor(div) {
                var _this = _super.call(this, div) || this;
                new Serenity.Toolbar(_this.byId('Toolbar'), {
                    buttons: [{
                            title: 'Add Note',
                            cssClass: 'add-button',
                            onClick: function (e) {
                                e.preventDefault();
                                _this.addClick();
                            }
                        }]
                });
                return _this;
            }
            NotesEditor.prototype.getTemplate = function () {
                return "<div><div id='~_Toolbar'></div><ul id='~_NoteList'></ul></div>";
            };
            NotesEditor.prototype.updateContent = function () {
                var _this = this;
                var noteList = this.byId('NoteList');
                noteList.children().remove();
                if (this.items) {
                    var index = 0;
                    for (var t1 = 0; t1 < this.items.length; t1++) {
                        var item = this.items[t1];
                        var li = $('<li/>');
                        $('<div/>').addClass('note-text').html(Q.coalesce(item.Text, '')).appendTo(li);
                        $('<a/>').attr('href', '#').addClass('note-date')
                            .text(item.InsertUserDisplayName + ' - ' +
                            Q.formatDate(item.InsertDate, 'g'))
                            .data('index', index).appendTo(li).click(function (e) { return _this.editClick(e); });
                        $('<a/>').attr('href', '#').addClass('note-delete')
                            .attr('title', 'delete note').data('index', index)
                            .appendTo(li).click(function (e) { return _this.deleteClick(e); });
                        li.appendTo(noteList);
                        index++;
                    }
                }
            };
            NotesEditor.prototype.addClick = function () {
                var _this = this;
                var dlg = new Northwind.NoteDialog();
                dlg.dialogTitle = 'Add Note';
                dlg.okClick = function () {
                    var text = Q.trimToNull(dlg.text);
                    if (text == null) {
                        return;
                    }
                    _this.items = _this.items || [];
                    Q.insert(_this.items, 0, {
                        Text: text,
                        InsertUserDisplayName: CMCPS.Authorization.userDefinition.DisplayName,
                        InsertDate: Q.formatISODateTimeUTC(new Date())
                    });
                    _this.updateContent();
                    dlg.dialogClose();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                };
                dlg.dialogOpen();
            };
            NotesEditor.prototype.editClick = function (e) {
                var _this = this;
                e.preventDefault();
                var index = $(e.target).data('index');
                var old = this.items[index];
                var dlg = new Northwind.NoteDialog();
                dlg.dialogTitle = 'Edit Note';
                dlg.text = old.Text;
                dlg.okClick = function () {
                    var text = Q.trimToNull(dlg.text);
                    if (!text) {
                        return;
                    }
                    _this.items[index].Text = text;
                    _this.updateContent();
                    dlg.dialogClose();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                };
                dlg.dialogOpen();
            };
            NotesEditor.prototype.deleteClick = function (e) {
                var _this = this;
                e.preventDefault();
                var index = $(e.target).data('index');
                Q.confirm('Delete this note?', function () {
                    _this.items.splice(index, 1);
                    _this.updateContent();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                });
            };
            Object.defineProperty(NotesEditor.prototype, "value", {
                get: function () {
                    return this.items;
                },
                set: function (value) {
                    this.items = value || [];
                    this.set_isDirty(false);
                    this.updateContent();
                },
                enumerable: true,
                configurable: true
            });
            NotesEditor.prototype.getEditValue = function (prop, target) {
                target[prop.name] = this.value;
            };
            NotesEditor.prototype.setEditValue = function (source, prop) {
                this.value = source[prop.name] || [];
            };
            NotesEditor.prototype.get_isDirty = function () {
                return this.isDirty;
            };
            NotesEditor.prototype.set_isDirty = function (value) {
                this.isDirty = value;
            };
            NotesEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.element("<div/>")
            ], NotesEditor);
            return NotesEditor;
        }(Serenity.TemplatedWidget));
        Northwind.NotesEditor = NotesEditor;
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var FreightFormatter = /** @class */ (function () {
            function FreightFormatter() {
            }
            FreightFormatter.prototype.format = function (ctx) {
                return "<span class='freight-symbol'>" + Q.htmlEncode(ctx.value) + '</span>';
            };
            FreightFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], FreightFormatter);
            return FreightFormatter;
        }());
        Northwind.FreightFormatter = FreightFormatter;
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var RegionDialog = /** @class */ (function (_super) {
            __extends(RegionDialog, _super);
            function RegionDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.RegionForm(_this.idPrefix);
                return _this;
            }
            RegionDialog.prototype.getFormKey = function () { return Northwind.RegionForm.formKey; };
            RegionDialog.prototype.getIdProperty = function () { return Northwind.RegionRow.idProperty; };
            RegionDialog.prototype.getLocalTextPrefix = function () { return Northwind.RegionRow.localTextPrefix; };
            RegionDialog.prototype.getNameProperty = function () { return Northwind.RegionRow.nameProperty; };
            RegionDialog.prototype.getService = function () { return Northwind.RegionService.baseUrl; };
            RegionDialog.prototype.getLanguages = function () {
                return CMCPS.LanguageList.getValue();
            };
            RegionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RegionDialog);
            return RegionDialog;
        }(Serenity.EntityDialog));
        Northwind.RegionDialog = RegionDialog;
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var RegionGrid = /** @class */ (function (_super) {
            __extends(RegionGrid, _super);
            function RegionGrid(container) {
                return _super.call(this, container) || this;
            }
            RegionGrid.prototype.getColumnsKey = function () { return "Northwind.Region"; };
            RegionGrid.prototype.getDialogType = function () { return Northwind.RegionDialog; };
            RegionGrid.prototype.getIdProperty = function () { return Northwind.RegionRow.idProperty; };
            RegionGrid.prototype.getLocalTextPrefix = function () { return Northwind.RegionRow.localTextPrefix; };
            RegionGrid.prototype.getService = function () { return Northwind.RegionService.baseUrl; };
            RegionGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RegionGrid);
            return RegionGrid;
        }(Serenity.EntityGrid));
        Northwind.RegionGrid = RegionGrid;
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var PhoneEditor = /** @class */ (function (_super) {
            __extends(PhoneEditor, _super);
            function PhoneEditor(input) {
                var _this = _super.call(this, input) || this;
                _this.addValidationRule(_this.uniqueName, function (e) {
                    var value = Q.trimToNull(_this.get_value());
                    if (value == null) {
                        return null;
                    }
                    return PhoneEditor_1.validate(value, _this.multiple);
                });
                input.bind('change', function (e) {
                    if (!Serenity.WX.hasOriginalEvent(e)) {
                        return;
                    }
                    _this.formatValue();
                });
                input.bind('blur', function (e) {
                    if (_this.element.hasClass('valid')) {
                        _this.formatValue();
                    }
                });
                return _this;
            }
            PhoneEditor_1 = PhoneEditor;
            PhoneEditor.prototype.formatValue = function () {
                this.element.val(this.getFormattedValue());
            };
            PhoneEditor.prototype.getFormattedValue = function () {
                var value = this.element.val();
                if (this.multiple) {
                    return PhoneEditor_1.formatMulti(value, PhoneEditor_1.formatPhone);
                }
                return PhoneEditor_1.formatPhone(value);
            };
            PhoneEditor.prototype.get_value = function () {
                return this.getFormattedValue();
            };
            PhoneEditor.prototype.set_value = function (value) {
                this.element.val(value);
            };
            PhoneEditor.validate = function (phone, isMultiple) {
                var valid = (isMultiple ? PhoneEditor_1.isValidMulti(phone, PhoneEditor_1.isValidPhone) : PhoneEditor_1.isValidPhone(phone));
                if (valid) {
                    return null;
                }
                return Q.text((isMultiple ? 'Validation.NorthwindPhoneMultiple' : 'Validation.NorthwindPhone'));
            };
            PhoneEditor.isValidPhone = function (phone) {
                if (Q.isEmptyOrNull(phone)) {
                    return false;
                }
                phone = Q.replaceAll(Q.replaceAll(phone, ' ', ''), '-', '');
                if (phone.length < 10) {
                    return false;
                }
                if (Q.startsWith(phone, '0')) {
                    phone = phone.substring(1);
                }
                if (Q.startsWith(phone, '(') && phone.charAt(4) === ')') {
                    phone = phone.substr(1, 3) + phone.substring(5);
                }
                if (phone.length !== 10) {
                    return false;
                }
                if (Q.startsWith(phone, '0')) {
                    return false;
                }
                for (var i = 0; i < phone.length; i++) {
                    var c = phone.charAt(i);
                    if (c < '0' || c > '9') {
                        return false;
                    }
                }
                return true;
            };
            PhoneEditor.formatPhone = function (phone) {
                if (!PhoneEditor_1.isValidPhone(phone)) {
                    return phone;
                }
                phone = Q.replaceAll(Q.replaceAll(Q.replaceAll(Q.replaceAll(phone, ' ', ''), '-', ''), '(', ''), ')', '');
                if (Q.startsWith(phone, '0')) {
                    phone = phone.substring(1);
                }
                phone = '(' + phone.substr(0, 3) + ') ' + phone.substr(3, 3) + '-' + phone.substr(6, 2) + phone.substr(8, 2);
                return phone;
            };
            PhoneEditor.formatMulti = function (phone, format) {
                var phones = Q.replaceAll(phone, String.fromCharCode(59), String.fromCharCode(44)).split(String.fromCharCode(44));
                var result = '';
                for (var _i = 0, phones_1 = phones; _i < phones_1.length; _i++) {
                    var x = phones_1[_i];
                    var s = Q.trimToNull(x);
                    if (s == null) {
                        continue;
                    }
                    if (result.length > 0) {
                        result += ', ';
                    }
                    result += format(s);
                }
                return result;
            };
            PhoneEditor.isValidMulti = function (phone, check) {
                if (Q.isEmptyOrNull(phone)) {
                    return false;
                }
                var phones = Q.replaceAll(phone, String.fromCharCode(59), String.fromCharCode(44)).split(String.fromCharCode(44));
                var anyValid = false;
                for (var $t1 = 0; $t1 < phones.length; $t1++) {
                    var x = phones[$t1];
                    var s = Q.trimToNull(x);
                    if (s == null) {
                        continue;
                    }
                    if (!check(s)) {
                        return false;
                    }
                    anyValid = true;
                }
                if (!anyValid) {
                    return false;
                }
                return true;
            };
            var PhoneEditor_1;
            __decorate([
                Serenity.Decorators.option()
            ], PhoneEditor.prototype, "multiple", void 0);
            PhoneEditor = PhoneEditor_1 = __decorate([
                Serenity.Decorators.registerEditor()
            ], PhoneEditor);
            return PhoneEditor;
        }(Serenity.StringEditor));
        Northwind.PhoneEditor = PhoneEditor;
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var ShipperDialog = /** @class */ (function (_super) {
            __extends(ShipperDialog, _super);
            function ShipperDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.ShipperForm(_this.idPrefix);
                return _this;
            }
            ShipperDialog.prototype.getFormKey = function () { return Northwind.ShipperForm.formKey; };
            ShipperDialog.prototype.getIdProperty = function () { return Northwind.ShipperRow.idProperty; };
            ShipperDialog.prototype.getLocalTextPrefix = function () { return Northwind.ShipperRow.localTextPrefix; };
            ShipperDialog.prototype.getNameProperty = function () { return Northwind.ShipperRow.nameProperty; };
            ShipperDialog.prototype.getService = function () { return Northwind.ShipperService.baseUrl; };
            ShipperDialog.prototype.getLanguages = function () {
                return CMCPS.LanguageList.getValue();
            };
            ShipperDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ShipperDialog);
            return ShipperDialog;
        }(Serenity.EntityDialog));
        Northwind.ShipperDialog = ShipperDialog;
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var ShipperFormatter = /** @class */ (function () {
            function ShipperFormatter() {
            }
            ShipperFormatter.prototype.format = function (ctx) {
                return "<span class='shipper-symbol shipper-" +
                    Q.replaceAll((ctx.value || '').toString(), ' ', '') +
                    "'>" + Q.htmlEncode(ctx.value) + '</span>';
            };
            ShipperFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], ShipperFormatter);
            return ShipperFormatter;
        }());
        Northwind.ShipperFormatter = ShipperFormatter;
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var ShipperGrid = /** @class */ (function (_super) {
            __extends(ShipperGrid, _super);
            function ShipperGrid(container) {
                return _super.call(this, container) || this;
            }
            ShipperGrid.prototype.getColumnsKey = function () { return "Northwind.Shipper"; };
            ShipperGrid.prototype.getDialogType = function () { return Northwind.ShipperDialog; };
            ShipperGrid.prototype.getIdProperty = function () { return Northwind.ShipperRow.idProperty; };
            ShipperGrid.prototype.getLocalTextPrefix = function () { return Northwind.ShipperRow.localTextPrefix; };
            ShipperGrid.prototype.getService = function () { return Northwind.ShipperService.baseUrl; };
            ShipperGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ShipperGrid);
            return ShipperGrid;
        }(Serenity.EntityGrid));
        Northwind.ShipperGrid = ShipperGrid;
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var TerritoryDialog = /** @class */ (function (_super) {
            __extends(TerritoryDialog, _super);
            function TerritoryDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.TerritoryForm(_this.idPrefix);
                return _this;
            }
            TerritoryDialog.prototype.getFormKey = function () { return Northwind.TerritoryForm.formKey; };
            TerritoryDialog.prototype.getIdProperty = function () { return Northwind.TerritoryRow.idProperty; };
            TerritoryDialog.prototype.getLocalTextPrefix = function () { return Northwind.TerritoryRow.localTextPrefix; };
            TerritoryDialog.prototype.getNameProperty = function () { return Northwind.TerritoryRow.nameProperty; };
            TerritoryDialog.prototype.getService = function () { return Northwind.TerritoryService.baseUrl; };
            TerritoryDialog.prototype.getLanguages = function () {
                return CMCPS.LanguageList.getValue();
            };
            TerritoryDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TerritoryDialog);
            return TerritoryDialog;
        }(Serenity.EntityDialog));
        Northwind.TerritoryDialog = TerritoryDialog;
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
var CMCPS;
(function (CMCPS) {
    var Northwind;
    (function (Northwind) {
        var TerritoryGrid = /** @class */ (function (_super) {
            __extends(TerritoryGrid, _super);
            function TerritoryGrid(container) {
                return _super.call(this, container) || this;
            }
            TerritoryGrid.prototype.getColumnsKey = function () { return "Northwind.Territory"; };
            TerritoryGrid.prototype.getDialogType = function () { return Northwind.TerritoryDialog; };
            TerritoryGrid.prototype.getIdProperty = function () { return Northwind.TerritoryRow.idProperty; };
            TerritoryGrid.prototype.getLocalTextPrefix = function () { return Northwind.TerritoryRow.localTextPrefix; };
            TerritoryGrid.prototype.getService = function () { return Northwind.TerritoryService.baseUrl; };
            TerritoryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TerritoryGrid);
            return TerritoryGrid;
        }(Serenity.EntityGrid));
        Northwind.TerritoryGrid = TerritoryGrid;
    })(Northwind = CMCPS.Northwind || (CMCPS.Northwind = {}));
})(CMCPS || (CMCPS = {}));
//# sourceMappingURL=CMCPS.Web.js.map