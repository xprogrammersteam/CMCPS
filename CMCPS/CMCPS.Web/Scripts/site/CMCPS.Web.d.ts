/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace CMCPS.Administration {
}
declare namespace CMCPS.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CMCPS.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace CMCPS.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace CMCPS.Administration {
}
declare namespace CMCPS.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CMCPS.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace CMCPS.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace CMCPS.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace CMCPS.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace CMCPS.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace CMCPS.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName"
        }
    }
}
declare namespace CMCPS.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace CMCPS.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace CMCPS.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace CMCPS.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace CMCPS.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace CMCPS.Administration {
}
declare namespace CMCPS.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CMCPS.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace CMCPS.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace CMCPS.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace CMCPS.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace CMCPS.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace CMCPS.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace CMCPS.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace CMCPS.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace CMCPS.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace CMCPS.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace CMCPS.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace CMCPS.BasicSamples {
    namespace BasicSamplesService {
        const baseUrl = "BasicSamples/BasicSamples";
        function OrdersByShipper(request: OrdersByShipperRequest, onSuccess?: (response: OrdersByShipperResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function OrderBulkAction(request: OrderBulkActionRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            OrdersByShipper = "BasicSamples/BasicSamples/OrdersByShipper",
            OrderBulkAction = "BasicSamples/BasicSamples/OrderBulkAction"
        }
    }
}
declare namespace CMCPS.BasicSamples {
    interface ChangingLookupTextForm {
        ProductID: ChangingLookupTextEditor;
        UnitPrice: Serenity.DecimalEditor;
        Quantity: Serenity.IntegerEditor;
        Discount: Serenity.DecimalEditor;
    }
    class ChangingLookupTextForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CMCPS.BasicSamples {
}
declare namespace CMCPS.BasicSamples {
    interface CustomerGrossSalesListRequest extends Serenity.ListRequest {
        StartDate?: string;
        EndDate?: string;
    }
}
declare namespace CMCPS.BasicSamples {
    namespace CustomerGrossSalesService {
        const baseUrl = "BasicSamples/CustomerGrossSales";
        function List(request: CustomerGrossSalesListRequest, onSuccess?: (response: Serenity.ListResponse<Northwind.CustomerGrossSalesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "BasicSamples/CustomerGrossSales/List"
        }
    }
}
declare namespace CMCPS.BasicSamples {
}
declare namespace CMCPS.BasicSamples {
    interface DragDropSampleForm {
        Title: Serenity.StringEditor;
    }
    class DragDropSampleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CMCPS.BasicSamples {
    interface DragDropSampleRow {
        Id?: number;
        ParentId?: number;
        Title?: string;
    }
    namespace DragDropSampleRow {
        const idProperty = "Id";
        const nameProperty = "Title";
        const localTextPrefix = "Northwind.DragDropSample";
        const enum Fields {
            Id = "Id",
            ParentId = "ParentId",
            Title = "Title"
        }
    }
}
declare namespace CMCPS.BasicSamples {
    namespace DragDropSampleService {
        const baseUrl = "BasicSamples/DragDropSample";
        function Create(request: Serenity.SaveRequest<DragDropSampleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DragDropSampleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DragDropSampleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DragDropSampleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "BasicSamples/DragDropSample/Create",
            Update = "BasicSamples/DragDropSample/Update",
            Delete = "BasicSamples/DragDropSample/Delete",
            Retrieve = "BasicSamples/DragDropSample/Retrieve",
            List = "BasicSamples/DragDropSample/List"
        }
    }
}
declare namespace CMCPS.BasicSamples {
    interface FilteredLookupInDetailForm {
        CustomerID: Northwind.CustomerEditor;
        OrderDate: Serenity.DateEditor;
        CategoryID: Serenity.LookupEditor;
        DetailList: FilteredLookupDetailEditor;
    }
    class FilteredLookupInDetailForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CMCPS.BasicSamples {
    interface HardcodedValuesForm {
        SomeValue: HardcodedValuesEditor;
    }
    class HardcodedValuesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CMCPS.BasicSamples {
}
declare namespace CMCPS.BasicSamples {
    interface LookupFilterByMultipleForm {
        ProductName: Serenity.StringEditor;
        ProductImage: Serenity.ImageUploadEditor;
        Discontinued: Serenity.BooleanEditor;
        SupplierID: Serenity.LookupEditor;
        CategoryID: ProduceSeafoodCategoryEditor;
        QuantityPerUnit: Serenity.StringEditor;
        UnitPrice: Serenity.DecimalEditor;
        UnitsInStock: Serenity.IntegerEditor;
        UnitsOnOrder: Serenity.IntegerEditor;
        ReorderLevel: Serenity.IntegerEditor;
    }
    class LookupFilterByMultipleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CMCPS.BasicSamples {
    interface OrderBulkActionRequest extends Serenity.ServiceRequest {
        OrderIDs?: number[];
    }
}
declare namespace CMCPS.BasicSamples {
    interface OrdersByShipperRequest extends Serenity.ServiceRequest {
    }
}
declare namespace CMCPS.BasicSamples {
    interface OrdersByShipperResponse extends Serenity.ServiceResponse {
        Values?: {
            [key: string]: any;
        }[];
        ShipperKeys?: string[];
        ShipperLabels?: string[];
    }
}
declare namespace CMCPS.BasicSamples {
    interface PopulateLinkedDataForm {
        CustomerID: Northwind.CustomerEditor;
        CustomerContactName: Serenity.StringEditor;
        CustomerContactTitle: Serenity.StringEditor;
        CustomerCity: Serenity.StringEditor;
        CustomerRegion: Serenity.StringEditor;
        CustomerCountry: Serenity.StringEditor;
        CustomerPhone: Serenity.StringEditor;
        CustomerFax: Serenity.StringEditor;
        OrderDate: Serenity.DateEditor;
        RequiredDate: Serenity.DateEditor;
        EmployeeID: Serenity.LookupEditor;
        DetailList: Northwind.OrderDetailsEditor;
    }
    class PopulateLinkedDataForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CMCPS.BasicSamples {
    interface ProductExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }
    class ProductExcelImportForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CMCPS.BasicSamples {
    namespace ProductExcelImportService {
        const baseUrl = "BasicSamples/ProductExcelImport";
        function ExcelImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            ExcelImport = "BasicSamples/ProductExcelImport/ExcelImport"
        }
    }
}
declare namespace CMCPS.BasicSamples {
    interface StaticTextBlockForm {
        StaticText: StaticTextBlock;
        SomeInput: Serenity.StringEditor;
        HtmlList: StaticTextBlock;
        FromLocalText: StaticTextBlock;
        DisplayFieldValue: StaticTextBlock;
    }
    class StaticTextBlockForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CMCPS.BasicSamples {
}
declare namespace CMCPS.BasicSamples {
    interface VSGalleryQAPost {
        PostId?: number;
        PostedOn?: string;
        PostedByName?: string;
        PostedByUserId?: string;
        Message?: string;
    }
}
declare namespace CMCPS.BasicSamples {
    namespace VSGalleryQAService {
        const baseUrl = "BasicSamples/VSGalleryQA";
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VSGalleryQAThread>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "BasicSamples/VSGalleryQA/List"
        }
    }
}
declare namespace CMCPS.BasicSamples {
    interface VSGalleryQAThread {
        ThreadId?: number;
        Title?: string;
        StartedOn?: string;
        StartedByName?: string;
        StartedByUserId?: string;
        LastPostOn?: string;
        PostCount?: number;
        Posts?: VSGalleryQAPost[];
    }
}
declare namespace CMCPS.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace CMCPS.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace CMCPS.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        const enum Fields {
            UserPreferenceId = "UserPreferenceId",
            UserId = "UserId",
            PreferenceType = "PreferenceType",
            Name = "Name",
            Value = "Value"
        }
    }
}
declare namespace CMCPS.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Common/UserPreference/Update",
            Retrieve = "Common/UserPreference/Retrieve"
        }
    }
}
declare namespace CMCPS.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace CMCPS.Default {
}
declare namespace CMCPS.Default {
    interface AdmissionCcDetailsForm {
        PrComplaintsId: Serenity.LookupEditor;
        Days: Serenity.StringEditor;
    }
    class AdmissionCcDetailsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CMCPS.Default {
    interface AdmissionCcDetailsRow {
        ComplaintId?: number;
        AdmissionId?: number;
        PrComplaintsId?: number;
        Days?: string;
        PComplaints?: string;
    }
    namespace AdmissionCcDetailsRow {
        const idProperty = "ComplaintId";
        const nameProperty = "Days";
        const localTextPrefix = "Default.AdmissionCcDetails";
        const enum Fields {
            ComplaintId = "ComplaintId",
            AdmissionId = "AdmissionId",
            PrComplaintsId = "PrComplaintsId",
            Days = "Days",
            PComplaints = "PComplaints"
        }
    }
}
declare namespace CMCPS.Default {
    namespace AdmissionCcDetailsService {
        const baseUrl = "Default/AdmissionCcDetails";
        function Create(request: Serenity.SaveRequest<AdmissionCcDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AdmissionCcDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AdmissionCcDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AdmissionCcDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/AdmissionCcDetails/Create",
            Update = "Default/AdmissionCcDetails/Update",
            Delete = "Default/AdmissionCcDetails/Delete",
            Retrieve = "Default/AdmissionCcDetails/Retrieve",
            List = "Default/AdmissionCcDetails/List"
        }
    }
}
declare namespace CMCPS.Default {
}
declare namespace CMCPS.Default {
    interface AdmissionForm {
        Date: Serenity.DateEditor;
        Time: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        Age: Serenity.StringEditor;
        DateOfBirth: Serenity.DateEditor;
        SexId: Serenity.LookupEditor;
        BedId: Serenity.LookupEditor;
        UnitId: Serenity.LookupEditor;
        UnitRegNumber: Serenity.StringEditor;
        HospitalRegNumber: Serenity.StringEditor;
        BloodGroup: Serenity.EnumEditor;
        FatherName: Serenity.StringEditor;
        FatherNID: Serenity.StringEditor;
        MotherName: Serenity.StringEditor;
        MotherNID: Serenity.StringEditor;
        DistrictId: Serenity.LookupEditor;
        UpazilaId: Serenity.LookupEditor;
        House: Serenity.StringEditor;
        PostOffice: Serenity.StringEditor;
        Mobile: Serenity.StringEditor;
        DetailList: AdmissionCcDetailEditor;
        HistoryOfPresentIllness: Serenity.TextAreaEditor;
        AntenatalList: Serenity.LookupEditor;
        NatalList: Serenity.LookupEditor;
        PostNatalList: Serenity.LookupEditor;
        Milestone: Serenity.TextAreaEditor;
        HoPastIllness: Serenity.TextAreaEditor;
        Immunization: Serenity.TextAreaEditor;
        Feedinghistory: Serenity.TextAreaEditor;
        Travelhistory: Serenity.TextAreaEditor;
        DrugHistory: Serenity.TextAreaEditor;
        FamilyHistoryId: Serenity.LookupEditor;
        Consanguinity: Serenity.EnumEditor;
        AllergicHistory: Serenity.TextAreaEditor;
        SocialPersonalHistory: Serenity.TextAreaEditor;
        Conditions: Serenity.TextAreaEditor;
        Weight: Serenity.IntegerEditor;
        Height: Serenity.StringEditor;
        Anemia: Serenity.EnumEditor;
        Jaundice: Serenity.EnumEditor;
        Cyanosis: Serenity.BooleanEditor;
        Oedema: Serenity.EnumEditor;
        Dehydration: Serenity.EnumEditor;
        Pulse: Serenity.StringEditor;
        BP: Serenity.StringEditor;
        RespRate: Serenity.StringEditor;
        Temperature: Serenity.StringEditor;
        GEOther: Serenity.TextAreaEditor;
        Inspection: Serenity.TextAreaEditor;
        Palpation: Serenity.TextAreaEditor;
        Percussion: Serenity.TextAreaEditor;
        Auscultation: Serenity.TextAreaEditor;
        Other: Serenity.TextAreaEditor;
        Alimentary: Serenity.TextAreaEditor;
        Respiratory: Serenity.TextAreaEditor;
        Cardiovascular: Serenity.TextAreaEditor;
        Genitourinary: Serenity.TextAreaEditor;
        Locomotor: Serenity.TextAreaEditor;
        Haemopoetic: Serenity.TextAreaEditor;
        SalientFeatures: Serenity.TextAreaEditor;
        ProvisionalDiagnosis: Serenity.TextAreaEditor;
        DiagnosisDetails: DDiagnosisDetailEditor;
        FinalDiagnosis: Serenity.TextAreaEditor;
        Plandischarge: Serenity.TextAreaEditor;
    }
    class AdmissionForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CMCPS.Default {
    interface AdmissionRow {
        AdmissionId?: number;
        Date?: string;
        Time?: string;
        Name?: string;
        Age?: string;
        DateOfBirth?: string;
        SexId?: number;
        Sex?: string;
        PinNumber?: string;
        UnitId?: number;
        UnitNumber?: string;
        UnitRegNumber?: string;
        BedId?: number;
        BedNumber?: string;
        HospitalRegNumber?: string;
        FatherName?: string;
        FatherNID?: string;
        MotherName?: string;
        MotherNID?: string;
        DistrictId?: number;
        DistrictName?: string;
        UpazilaId?: number;
        UpazilaName?: string;
        House?: string;
        PostOffice?: string;
        Mobile?: string;
        AllergicHistory?: string;
        HistoryOfPresentIllness?: string;
        HoPastIllness?: string;
        DrugHistory?: string;
        AntenatalList?: number[];
        NatalList?: number[];
        PostNatalList?: number[];
        FamilyHistoryId?: number;
        FamilyHistory?: string;
        Type?: string;
        Immunization?: string;
        Weight?: number;
        Height?: string;
        Anemia?: Modules.Default.Admission.AnemiaAndJaundiceValue;
        Jaundice?: Modules.Default.Admission.AnemiaAndJaundiceValue;
        Cyanosis?: boolean;
        Oedema?: Modules.Default.Admission.EdemaValue;
        Dehydration?: Modules.Default.Admission.DehydrationValue;
        BloodGroup?: Modules.Default.Admission.BloodGroup;
        Pulse?: string;
        BP?: string;
        RespRate?: string;
        Temperature?: string;
        GEOther?: string;
        Inspection?: string;
        Palpation?: string;
        Percussion?: string;
        Auscultation?: string;
        Other?: string;
        Alimentary?: string;
        Milestone?: string;
        SocialPersonalHistory?: string;
        Feedinghistory?: string;
        Travelhistory?: string;
        Consanguinity?: Modules.Default.Admission.Consanguinity;
        Conditions?: string;
        Respiratory?: string;
        Cardiovascular?: string;
        Genitourinary?: string;
        Locomotor?: string;
        Haemopoetic?: string;
        SalientFeatures?: string;
        ProvisionalDiagnosis?: string;
        FinalDiagnosis?: string;
        Plandischarge?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DetailList?: AdmissionCcDetailsRow[];
        DiagnosisDetails?: DDiagnosisDetailsRow[];
    }
    namespace AdmissionRow {
        const idProperty = "AdmissionId";
        const nameProperty = "Name";
        const localTextPrefix = "Default.Admission";
        const lookupKey = "Default.Admission";
        function getLookup(): Q.Lookup<AdmissionRow>;
        const enum Fields {
            AdmissionId = "AdmissionId",
            Date = "Date",
            Time = "Time",
            Name = "Name",
            Age = "Age",
            DateOfBirth = "DateOfBirth",
            SexId = "SexId",
            Sex = "Sex",
            PinNumber = "PinNumber",
            UnitId = "UnitId",
            UnitNumber = "UnitNumber",
            UnitRegNumber = "UnitRegNumber",
            BedId = "BedId",
            BedNumber = "BedNumber",
            HospitalRegNumber = "HospitalRegNumber",
            FatherName = "FatherName",
            FatherNID = "FatherNID",
            MotherName = "MotherName",
            MotherNID = "MotherNID",
            DistrictId = "DistrictId",
            DistrictName = "DistrictName",
            UpazilaId = "UpazilaId",
            UpazilaName = "UpazilaName",
            House = "House",
            PostOffice = "PostOffice",
            Mobile = "Mobile",
            AllergicHistory = "AllergicHistory",
            HistoryOfPresentIllness = "HistoryOfPresentIllness",
            HoPastIllness = "HoPastIllness",
            DrugHistory = "DrugHistory",
            AntenatalList = "AntenatalList",
            NatalList = "NatalList",
            PostNatalList = "PostNatalList",
            FamilyHistoryId = "FamilyHistoryId",
            FamilyHistory = "FamilyHistory",
            Type = "Type",
            Immunization = "Immunization",
            Weight = "Weight",
            Height = "Height",
            Anemia = "Anemia",
            Jaundice = "Jaundice",
            Cyanosis = "Cyanosis",
            Oedema = "Oedema",
            Dehydration = "Dehydration",
            BloodGroup = "BloodGroup",
            Pulse = "Pulse",
            BP = "BP",
            RespRate = "RespRate",
            Temperature = "Temperature",
            GEOther = "GEOther",
            Inspection = "Inspection",
            Palpation = "Palpation",
            Percussion = "Percussion",
            Auscultation = "Auscultation",
            Other = "Other",
            Alimentary = "Alimentary",
            Milestone = "Milestone",
            SocialPersonalHistory = "SocialPersonalHistory",
            Feedinghistory = "Feedinghistory",
            Travelhistory = "Travelhistory",
            Consanguinity = "Consanguinity",
            Conditions = "Conditions",
            Respiratory = "Respiratory",
            Cardiovascular = "Cardiovascular",
            Genitourinary = "Genitourinary",
            Locomotor = "Locomotor",
            Haemopoetic = "Haemopoetic",
            SalientFeatures = "SalientFeatures",
            ProvisionalDiagnosis = "ProvisionalDiagnosis",
            FinalDiagnosis = "FinalDiagnosis",
            Plandischarge = "Plandischarge",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DetailList = "DetailList",
            DiagnosisDetails = "DiagnosisDetails"
        }
    }
}
declare namespace CMCPS.Default {
    namespace AdmissionService {
        const baseUrl = "Default/Admission";
        function Create(request: Serenity.SaveRequest<AdmissionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AdmissionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AdmissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AdmissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Admission/Create",
            Update = "Default/Admission/Update",
            Delete = "Default/Admission/Delete",
            Retrieve = "Default/Admission/Retrieve",
            List = "Default/Admission/List"
        }
    }
}
declare namespace CMCPS.Default {
}
declare namespace CMCPS.Default {
    interface AntenatalForm {
        AntenatalName: Serenity.StringEditor;
    }
    class AntenatalForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CMCPS.Default {
    interface AntenatalRow {
        AntenatalId?: number;
        AntenatalName?: string;
    }
    namespace AntenatalRow {
        const idProperty = "AntenatalId";
        const nameProperty = "AntenatalName";
        const localTextPrefix = "Default.Antenatal";
        const lookupKey = "Default.Antenatal";
        function getLookup(): Q.Lookup<AntenatalRow>;
        const enum Fields {
            AntenatalId = "AntenatalId",
            AntenatalName = "AntenatalName"
        }
    }
}
declare namespace CMCPS.Default {
    namespace AntenatalService {
        const baseUrl = "Default/Antenatal";
        function Create(request: Serenity.SaveRequest<AntenatalRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AntenatalRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AntenatalRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AntenatalRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Antenatal/Create",
            Update = "Default/Antenatal/Update",
            Delete = "Default/Antenatal/Delete",
            Retrieve = "Default/Antenatal/Retrieve",
            List = "Default/Antenatal/List"
        }
    }
}
declare namespace CMCPS.Default {
}
declare namespace CMCPS.Default {
    interface BedForm {
        BedNumber: Serenity.StringEditor;
        Note: Serenity.StringEditor;
    }
    class BedForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CMCPS.Default {
    interface BedRow {
        BedId?: number;
        BedNumber?: string;
        Note?: string;
    }
    namespace BedRow {
        const idProperty = "BedId";
        const nameProperty = "BedNumber";
        const localTextPrefix = "Default.Bed";
        const lookupKey = "Default.Bed";
        function getLookup(): Q.Lookup<BedRow>;
        const enum Fields {
            BedId = "BedId",
            BedNumber = "BedNumber",
            Note = "Note"
        }
    }
}
declare namespace CMCPS.Default {
    namespace BedService {
        const baseUrl = "Default/Bed";
        function Create(request: Serenity.SaveRequest<BedRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BedRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BedRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BedRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Bed/Create",
            Update = "Default/Bed/Update",
            Delete = "Default/Bed/Delete",
            Retrieve = "Default/Bed/Retrieve",
            List = "Default/Bed/List"
        }
    }
}
declare namespace CMCPS.Default {
}
declare namespace CMCPS.Default {
    interface BirthHistoryForm {
        BirthHistory: Serenity.StringEditor;
        Note: Serenity.StringEditor;
    }
    class BirthHistoryForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CMCPS.Default {
    interface BirthHistoryRow {
        BirthHistoryId?: number;
        BirthHistory?: string;
        Note?: string;
    }
    namespace BirthHistoryRow {
        const idProperty = "BirthHistoryId";
        const nameProperty = "BirthHistory";
        const localTextPrefix = "Default.BirthHistory";
        const lookupKey = "Default.BirthHistory";
        function getLookup(): Q.Lookup<BirthHistoryRow>;
        const enum Fields {
            BirthHistoryId = "BirthHistoryId",
            BirthHistory = "BirthHistory",
            Note = "Note"
        }
    }
}
declare namespace CMCPS.Default {
    namespace BirthHistoryService {
        const baseUrl = "Default/BirthHistory";
        function Create(request: Serenity.SaveRequest<BirthHistoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BirthHistoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BirthHistoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BirthHistoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/BirthHistory/Create",
            Update = "Default/BirthHistory/Update",
            Delete = "Default/BirthHistory/Delete",
            Retrieve = "Default/BirthHistory/Retrieve",
            List = "Default/BirthHistory/List"
        }
    }
}
declare namespace CMCPS.Default {
}
declare namespace CMCPS.Default {
    interface DDiagnosisDetailsForm {
        DiagnosisId: Serenity.LookupEditor;
    }
    class DDiagnosisDetailsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CMCPS.Default {
    interface DDiagnosisDetailsRow {
        DId?: number;
        AdmissionId?: number;
        DiagnosisId?: number;
        Diagnosis?: string;
    }
    namespace DDiagnosisDetailsRow {
        const idProperty = "DId";
        const nameProperty = "Diagnosis";
        const localTextPrefix = "Default.DDiagnosisDetails";
        const enum Fields {
            DId = "DId",
            AdmissionId = "AdmissionId",
            DiagnosisId = "DiagnosisId",
            Diagnosis = "Diagnosis"
        }
    }
}
declare namespace CMCPS.Default {
    namespace DDiagnosisDetailsService {
        const baseUrl = "Default/DDiagnosisDetails";
        function Create(request: Serenity.SaveRequest<DDiagnosisDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DDiagnosisDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DDiagnosisDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DDiagnosisDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/DDiagnosisDetails/Create",
            Update = "Default/DDiagnosisDetails/Update",
            Delete = "Default/DDiagnosisDetails/Delete",
            Retrieve = "Default/DDiagnosisDetails/Retrieve",
            List = "Default/DDiagnosisDetails/List"
        }
    }
}
declare namespace CMCPS.Default {
}
declare namespace CMCPS.Default {
    interface DiagnosisForm {
        DiagnosisName: Serenity.StringEditor;
        Note: Serenity.StringEditor;
    }
    class DiagnosisForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CMCPS.Default {
    interface DiagnosisRow {
        DiagnosisId?: number;
        DiagnosisName?: string;
        Note?: string;
    }
    namespace DiagnosisRow {
        const idProperty = "DiagnosisId";
        const nameProperty = "DiagnosisName";
        const localTextPrefix = "Default.Diagnosis";
        const lookupKey = "Default.Diagnosis";
        function getLookup(): Q.Lookup<DiagnosisRow>;
        const enum Fields {
            DiagnosisId = "DiagnosisId",
            DiagnosisName = "DiagnosisName",
            Note = "Note"
        }
    }
}
declare namespace CMCPS.Default {
    namespace DiagnosisService {
        const baseUrl = "Default/Diagnosis";
        function Create(request: Serenity.SaveRequest<DiagnosisRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DiagnosisRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DiagnosisRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DiagnosisRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Diagnosis/Create",
            Update = "Default/Diagnosis/Update",
            Delete = "Default/Diagnosis/Delete",
            Retrieve = "Default/Diagnosis/Retrieve",
            List = "Default/Diagnosis/List"
        }
    }
}
declare namespace CMCPS.Default {
}
declare namespace CMCPS.Default {
    interface DistrictForm {
        DistrictName: Serenity.StringEditor;
    }
    class DistrictForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CMCPS.Default {
    interface DistrictRow {
        DistrictId?: number;
        DistrictName?: string;
    }
    namespace DistrictRow {
        const idProperty = "DistrictId";
        const nameProperty = "DistrictName";
        const localTextPrefix = "Default.District";
        const lookupKey = "Default.District";
        function getLookup(): Q.Lookup<DistrictRow>;
        const enum Fields {
            DistrictId = "DistrictId",
            DistrictName = "DistrictName"
        }
    }
}
declare namespace CMCPS.Default {
    namespace DistrictService {
        const baseUrl = "Default/District";
        function Create(request: Serenity.SaveRequest<DistrictRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DistrictRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DistrictRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DistrictRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/District/Create",
            Update = "Default/District/Update",
            Delete = "Default/District/Delete",
            Retrieve = "Default/District/Retrieve",
            List = "Default/District/List"
        }
    }
}
declare namespace CMCPS.Default {
}
declare namespace CMCPS.Default {
    interface FamilyHistoryForm {
        FamilyHistory: Serenity.StringEditor;
        Note: Serenity.StringEditor;
    }
    class FamilyHistoryForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CMCPS.Default {
    interface FamilyHistoryRow {
        FamilyHistoryId?: number;
        FamilyHistory?: string;
        Note?: string;
    }
    namespace FamilyHistoryRow {
        const idProperty = "FamilyHistoryId";
        const nameProperty = "FamilyHistory";
        const localTextPrefix = "Default.FamilyHistory";
        const lookupKey = "Default.FamilyHistory";
        function getLookup(): Q.Lookup<FamilyHistoryRow>;
        const enum Fields {
            FamilyHistoryId = "FamilyHistoryId",
            FamilyHistory = "FamilyHistory",
            Note = "Note"
        }
    }
}
declare namespace CMCPS.Default {
    namespace FamilyHistoryService {
        const baseUrl = "Default/FamilyHistory";
        function Create(request: Serenity.SaveRequest<FamilyHistoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<FamilyHistoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FamilyHistoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FamilyHistoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/FamilyHistory/Create",
            Update = "Default/FamilyHistory/Update",
            Delete = "Default/FamilyHistory/Delete",
            Retrieve = "Default/FamilyHistory/Retrieve",
            List = "Default/FamilyHistory/List"
        }
    }
}
declare namespace CMCPS.Default {
}
declare namespace CMCPS.Default {
    interface InvestigationForm {
        AdmissionId: Serenity.LookupEditor;
        EntryDate: Serenity.DateEditor;
        Cbc: Serenity.TextAreaEditor;
        Creatinine: Serenity.TextAreaEditor;
        Urea: Serenity.TextAreaEditor;
        Sugar: Serenity.TextAreaEditor;
        Albumin: Serenity.TextAreaEditor;
        Calcium: Serenity.TextAreaEditor;
        Electrolytes: Serenity.TextAreaEditor;
        BloodCulture: Serenity.TextAreaEditor;
        Crp: Serenity.TextAreaEditor;
        Bt: Serenity.TextAreaEditor;
        Ct: Serenity.TextAreaEditor;
        ProthrombinTime: Serenity.TextAreaEditor;
        Aptt: Serenity.TextAreaEditor;
        OptionToAddHematology: Serenity.TextAreaEditor;
        OtherLab: OtherLabWithInvestigationEditor;
        Cxr: Serenity.TextAreaEditor;
        Axr: Serenity.TextAreaEditor;
        XrayKub: Serenity.TextAreaEditor;
        Usg: Serenity.TextAreaEditor;
        BaEnema: Serenity.TextAreaEditor;
        BaMealFollowThrough: Serenity.TextAreaEditor;
        Mcu: Serenity.TextAreaEditor;
        Rgu: Serenity.TextAreaEditor;
        Ivu: Serenity.TextAreaEditor;
        CtScan: Serenity.TextAreaEditor;
        Mri: Serenity.TextAreaEditor;
        OptionToAddImaging: Serenity.TextAreaEditor;
        Pathology: PathologyAndInvestigationDetailsEditor;
    }
    class InvestigationForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CMCPS.Default {
    interface InvestigationRow {
        OtherLab?: OtherLabWithInvestigationRow[];
        Pathology?: PathologyAndInvestigationDetailsRow[];
        InvestigationId?: number;
        AdmissionId?: number;
        EntryDate?: string;
        Name?: string;
        Cbc?: string;
        Creatinine?: string;
        Urea?: string;
        Sugar?: string;
        Albumin?: string;
        Calcium?: string;
        Electrolytes?: string;
        BloodCulture?: string;
        Crp?: string;
        Bt?: string;
        Ct?: string;
        ProthrombinTime?: string;
        Aptt?: string;
        OptionToAddHematology?: string;
        Cxr?: string;
        Axr?: string;
        XrayKub?: string;
        Usg?: string;
        BaEnema?: string;
        BaMealFollowThrough?: string;
        Mcu?: string;
        Rgu?: string;
        Ivu?: string;
        CtScan?: string;
        Mri?: string;
        OptionToAddImaging?: string;
    }
    namespace InvestigationRow {
        const idProperty = "InvestigationId";
        const nameProperty = "Cbc";
        const localTextPrefix = "Default.Investigation";
        const enum Fields {
            OtherLab = "OtherLab",
            Pathology = "Pathology",
            InvestigationId = "InvestigationId",
            AdmissionId = "AdmissionId",
            EntryDate = "EntryDate",
            Name = "Name",
            Cbc = "Cbc",
            Creatinine = "Creatinine",
            Urea = "Urea",
            Sugar = "Sugar",
            Albumin = "Albumin",
            Calcium = "Calcium",
            Electrolytes = "Electrolytes",
            BloodCulture = "BloodCulture",
            Crp = "Crp",
            Bt = "Bt",
            Ct = "Ct",
            ProthrombinTime = "ProthrombinTime",
            Aptt = "Aptt",
            OptionToAddHematology = "OptionToAddHematology",
            Cxr = "Cxr",
            Axr = "Axr",
            XrayKub = "XrayKub",
            Usg = "Usg",
            BaEnema = "BaEnema",
            BaMealFollowThrough = "BaMealFollowThrough",
            Mcu = "Mcu",
            Rgu = "Rgu",
            Ivu = "Ivu",
            CtScan = "CtScan",
            Mri = "Mri",
            OptionToAddImaging = "OptionToAddImaging"
        }
    }
}
declare namespace CMCPS.Default {
    namespace InvestigationService {
        const baseUrl = "Default/Investigation";
        function Create(request: Serenity.SaveRequest<InvestigationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<InvestigationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InvestigationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InvestigationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Investigation/Create",
            Update = "Default/Investigation/Update",
            Delete = "Default/Investigation/Delete",
            Retrieve = "Default/Investigation/Retrieve",
            List = "Default/Investigation/List"
        }
    }
}
declare namespace CMCPS.Default {
}
declare namespace CMCPS.Default {
    interface NatalForm {
        NatalName: Serenity.StringEditor;
    }
    class NatalForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CMCPS.Default {
    interface NatalRow {
        NatalId?: number;
        NatalName?: string;
    }
    namespace NatalRow {
        const idProperty = "NatalId";
        const nameProperty = "NatalName";
        const localTextPrefix = "Default.Natal";
        const lookupKey = "Default.Natal";
        function getLookup(): Q.Lookup<NatalRow>;
        const enum Fields {
            NatalId = "NatalId",
            NatalName = "NatalName"
        }
    }
}
declare namespace CMCPS.Default {
    namespace NatalService {
        const baseUrl = "Default/Natal";
        function Create(request: Serenity.SaveRequest<NatalRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<NatalRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<NatalRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<NatalRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Natal/Create",
            Update = "Default/Natal/Update",
            Delete = "Default/Natal/Delete",
            Retrieve = "Default/Natal/Retrieve",
            List = "Default/Natal/List"
        }
    }
}
declare namespace CMCPS.Default {
}
declare namespace CMCPS.Default {
    interface OpdForm {
        Name: Serenity.StringEditor;
        Date: Serenity.DateEditor;
        Age: Serenity.StringEditor;
        SexId: Serenity.LookupEditor;
        BodyWt: Serenity.StringEditor;
        RegNo: Serenity.StringEditor;
        PinNo: Serenity.StringEditor;
        UnitId: Serenity.LookupEditor;
        Type: Serenity.EnumEditor;
        Mobile: Serenity.StringEditor;
        Address: Serenity.TextAreaEditor;
        DiagnosisDetails: OpdWithDiagnosisDetailsEditor;
        History: Serenity.TextAreaEditor;
        Examination: Serenity.TextAreaEditor;
        Investigation: Serenity.TextAreaEditor;
        Advice: Serenity.TextAreaEditor;
        Remarks: Serenity.TextAreaEditor;
    }
    class OpdForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CMCPS.Default {
    interface OpdRow {
        OpdId?: number;
        Name?: string;
        Date?: string;
        Age?: string;
        SexId?: number;
        Sex?: string;
        BodyWt?: string;
        RegNo?: string;
        PinNo?: string;
        UnitId?: number;
        UniNo?: string;
        Type?: Modules.Default.Admission.TypeOfPatient;
        Address?: string;
        Mobile?: string;
        History?: string;
        Examination?: string;
        Investigation?: string;
        Advice?: string;
        Remarks?: string;
        DiagnosisDetails?: OpdWithDiagnosisDetailsRow[];
    }
    namespace OpdRow {
        const idProperty = "OpdId";
        const nameProperty = "Name";
        const localTextPrefix = "Default.Opd";
        const enum Fields {
            OpdId = "OpdId",
            Name = "Name",
            Date = "Date",
            Age = "Age",
            SexId = "SexId",
            Sex = "Sex",
            BodyWt = "BodyWt",
            RegNo = "RegNo",
            PinNo = "PinNo",
            UnitId = "UnitId",
            UniNo = "UniNo",
            Type = "Type",
            Address = "Address",
            Mobile = "Mobile",
            History = "History",
            Examination = "Examination",
            Investigation = "Investigation",
            Advice = "Advice",
            Remarks = "Remarks",
            DiagnosisDetails = "DiagnosisDetails"
        }
    }
}
declare namespace CMCPS.Default {
    namespace OpdService {
        const baseUrl = "Default/Opd";
        function Create(request: Serenity.SaveRequest<OpdRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OpdRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OpdRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OpdRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Opd/Create",
            Update = "Default/Opd/Update",
            Delete = "Default/Opd/Delete",
            Retrieve = "Default/Opd/Retrieve",
            List = "Default/Opd/List"
        }
    }
}
declare namespace CMCPS.Default {
}
declare namespace CMCPS.Default {
    interface OpdWithDiagnosisDetailsForm {
        DiagnosisId: Serenity.LookupEditor;
    }
    class OpdWithDiagnosisDetailsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CMCPS.Default {
    interface OpdWithDiagnosisDetailsRow {
        Id?: number;
        OpdId?: number;
        DiagnosisId?: number;
        Diagnosis?: string;
    }
    namespace OpdWithDiagnosisDetailsRow {
        const idProperty = "Id";
        const localTextPrefix = "Default.OpdWithDiagnosisDetails";
        const enum Fields {
            Id = "Id",
            OpdId = "OpdId",
            DiagnosisId = "DiagnosisId",
            Diagnosis = "Diagnosis"
        }
    }
}
declare namespace CMCPS.Default {
    namespace OpdWithDiagnosisDetailsService {
        const baseUrl = "Default/OpdWithDiagnosisDetails";
        function Create(request: Serenity.SaveRequest<OpdWithDiagnosisDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OpdWithDiagnosisDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OpdWithDiagnosisDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OpdWithDiagnosisDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/OpdWithDiagnosisDetails/Create",
            Update = "Default/OpdWithDiagnosisDetails/Update",
            Delete = "Default/OpdWithDiagnosisDetails/Delete",
            Retrieve = "Default/OpdWithDiagnosisDetails/Retrieve",
            List = "Default/OpdWithDiagnosisDetails/List"
        }
    }
}
declare namespace CMCPS.Default {
}
declare namespace CMCPS.Default {
    interface OtherLabForm {
        Name: Serenity.StringEditor;
    }
    class OtherLabForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CMCPS.Default {
    interface OtherLabRow {
        LabId?: number;
        Name?: string;
    }
    namespace OtherLabRow {
        const idProperty = "LabId";
        const nameProperty = "Name";
        const localTextPrefix = "Default.OtherLab";
        const lookupKey = "Default.OtherLab";
        function getLookup(): Q.Lookup<OtherLabRow>;
        const enum Fields {
            LabId = "LabId",
            Name = "Name"
        }
    }
}
declare namespace CMCPS.Default {
    namespace OtherLabService {
        const baseUrl = "Default/OtherLab";
        function Create(request: Serenity.SaveRequest<OtherLabRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OtherLabRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OtherLabRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OtherLabRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/OtherLab/Create",
            Update = "Default/OtherLab/Update",
            Delete = "Default/OtherLab/Delete",
            Retrieve = "Default/OtherLab/Retrieve",
            List = "Default/OtherLab/List"
        }
    }
}
declare namespace CMCPS.Default {
}
declare namespace CMCPS.Default {
    interface OtherLabWithInvestigationForm {
        OtherLabId: Serenity.LookupEditor;
        Value: Serenity.StringEditor;
    }
    class OtherLabWithInvestigationForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CMCPS.Default {
    interface OtherLabWithInvestigationRow {
        Id?: number;
        InvestigationId?: number;
        OtherLabId?: number;
        Value?: string;
        OtherLabName?: string;
    }
    namespace OtherLabWithInvestigationRow {
        const idProperty = "Id";
        const nameProperty = "Value";
        const localTextPrefix = "Default.OtherLabWithInvestigation";
        const enum Fields {
            Id = "Id",
            InvestigationId = "InvestigationId",
            OtherLabId = "OtherLabId",
            Value = "Value",
            OtherLabName = "OtherLabName"
        }
    }
}
declare namespace CMCPS.Default {
    namespace OtherLabWithInvestigationService {
        const baseUrl = "Default/OtherLabWithInvestigation";
        function Create(request: Serenity.SaveRequest<OtherLabWithInvestigationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OtherLabWithInvestigationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OtherLabWithInvestigationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OtherLabWithInvestigationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/OtherLabWithInvestigation/Create",
            Update = "Default/OtherLabWithInvestigation/Update",
            Delete = "Default/OtherLabWithInvestigation/Delete",
            Retrieve = "Default/OtherLabWithInvestigation/Retrieve",
            List = "Default/OtherLabWithInvestigation/List"
        }
    }
}
declare namespace CMCPS.Default {
}
declare namespace CMCPS.Default {
    interface PathologyAndInvestigationDetailsForm {
        PathologyId: Serenity.LookupEditor;
        Value: Serenity.StringEditor;
    }
    class PathologyAndInvestigationDetailsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CMCPS.Default {
    interface PathologyAndInvestigationDetailsRow {
        Id?: number;
        InvestigationId?: number;
        PathologyId?: number;
        Value?: string;
        PathologyName?: string;
    }
    namespace PathologyAndInvestigationDetailsRow {
        const idProperty = "Id";
        const nameProperty = "Value";
        const localTextPrefix = "Default.PathologyAndInvestigationDetails";
        const enum Fields {
            Id = "Id",
            InvestigationId = "InvestigationId",
            PathologyId = "PathologyId",
            Value = "Value",
            PathologyName = "PathologyName"
        }
    }
}
declare namespace CMCPS.Default {
    namespace PathologyAndInvestigationDetailsService {
        const baseUrl = "Default/PathologyAndInvestigationDetails";
        function Create(request: Serenity.SaveRequest<PathologyAndInvestigationDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PathologyAndInvestigationDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PathologyAndInvestigationDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PathologyAndInvestigationDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/PathologyAndInvestigationDetails/Create",
            Update = "Default/PathologyAndInvestigationDetails/Update",
            Delete = "Default/PathologyAndInvestigationDetails/Delete",
            Retrieve = "Default/PathologyAndInvestigationDetails/Retrieve",
            List = "Default/PathologyAndInvestigationDetails/List"
        }
    }
}
declare namespace CMCPS.Default {
}
declare namespace CMCPS.Default {
    interface PathologyForm {
        PathologyName: Serenity.StringEditor;
    }
    class PathologyForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CMCPS.Default {
    interface PathologyRow {
        PathologyId?: number;
        PathologyName?: string;
    }
    namespace PathologyRow {
        const idProperty = "PathologyId";
        const nameProperty = "PathologyName";
        const localTextPrefix = "Default.Pathology";
        const lookupKey = "Default.Pathology";
        function getLookup(): Q.Lookup<PathologyRow>;
        const enum Fields {
            PathologyId = "PathologyId",
            PathologyName = "PathologyName"
        }
    }
}
declare namespace CMCPS.Default {
    namespace PathologyService {
        const baseUrl = "Default/Pathology";
        function Create(request: Serenity.SaveRequest<PathologyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PathologyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PathologyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PathologyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Pathology/Create",
            Update = "Default/Pathology/Update",
            Delete = "Default/Pathology/Delete",
            Retrieve = "Default/Pathology/Retrieve",
            List = "Default/Pathology/List"
        }
    }
}
declare namespace CMCPS.Default {
    interface PatientBirthHistoryRow {
        PbHistoryId?: number;
        AdmissionId?: number;
        BirthHistoryId?: number;
        AdmissionDate?: string;
        AdmissionTime?: string;
        AdmissionBedId?: number;
        AdmissionPComplaintsId?: number;
        AdmissionHistoryOfPresentIllness?: string;
        AdmissionHoPastIllness?: string;
        AdmissionDrugHistory?: string;
        AdmissionFamilyHistoryId?: number;
        AdmissionImmunization?: boolean;
        AdmissionInsertUserId?: number;
        AdmissionInsertDate?: string;
        AdmissionUpdateUserId?: number;
        AdmissionUpdateDate?: string;
        BirthHistory?: string;
        BirthHistoryNote?: string;
    }
    namespace PatientBirthHistoryRow {
        const idProperty = "PbHistoryId";
        const localTextPrefix = "Default.PatientBirthHistory";
        const enum Fields {
            PbHistoryId = "PbHistoryId",
            AdmissionId = "AdmissionId",
            BirthHistoryId = "BirthHistoryId",
            AdmissionDate = "AdmissionDate",
            AdmissionTime = "AdmissionTime",
            AdmissionBedId = "AdmissionBedId",
            AdmissionPComplaintsId = "AdmissionPComplaintsId",
            AdmissionHistoryOfPresentIllness = "AdmissionHistoryOfPresentIllness",
            AdmissionHoPastIllness = "AdmissionHoPastIllness",
            AdmissionDrugHistory = "AdmissionDrugHistory",
            AdmissionFamilyHistoryId = "AdmissionFamilyHistoryId",
            AdmissionImmunization = "AdmissionImmunization",
            AdmissionInsertUserId = "AdmissionInsertUserId",
            AdmissionInsertDate = "AdmissionInsertDate",
            AdmissionUpdateUserId = "AdmissionUpdateUserId",
            AdmissionUpdateDate = "AdmissionUpdateDate",
            BirthHistory = "BirthHistory",
            BirthHistoryNote = "BirthHistoryNote"
        }
    }
}
declare namespace CMCPS.Default {
}
declare namespace CMCPS.Default {
    interface PostNatalForm {
        PostNatalName: Serenity.StringEditor;
    }
    class PostNatalForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CMCPS.Default {
    interface PostNatalRow {
        PostNatalId?: number;
        PostNatalName?: string;
    }
    namespace PostNatalRow {
        const idProperty = "PostNatalId";
        const nameProperty = "PostNatalName";
        const localTextPrefix = "Default.PostNatal";
        const lookupKey = "Default.PostNatal";
        function getLookup(): Q.Lookup<PostNatalRow>;
        const enum Fields {
            PostNatalId = "PostNatalId",
            PostNatalName = "PostNatalName"
        }
    }
}
declare namespace CMCPS.Default {
    namespace PostNatalService {
        const baseUrl = "Default/PostNatal";
        function Create(request: Serenity.SaveRequest<PostNatalRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PostNatalRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PostNatalRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PostNatalRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/PostNatal/Create",
            Update = "Default/PostNatal/Update",
            Delete = "Default/PostNatal/Delete",
            Retrieve = "Default/PostNatal/Retrieve",
            List = "Default/PostNatal/List"
        }
    }
}
declare namespace CMCPS.Default {
}
declare namespace CMCPS.Default {
    interface PresentingComplaintsForm {
        PComplaints: Serenity.StringEditor;
        Note: Serenity.StringEditor;
    }
    class PresentingComplaintsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CMCPS.Default {
    interface PresentingComplaintsRow {
        PComplaintsId?: number;
        PComplaints?: string;
        Note?: string;
    }
    namespace PresentingComplaintsRow {
        const idProperty = "PComplaintsId";
        const nameProperty = "PComplaints";
        const localTextPrefix = "Default.PresentingComplaints";
        const lookupKey = "Default.PresentingComplaints";
        function getLookup(): Q.Lookup<PresentingComplaintsRow>;
        const enum Fields {
            PComplaintsId = "PComplaintsId",
            PComplaints = "PComplaints",
            Note = "Note"
        }
    }
}
declare namespace CMCPS.Default {
    namespace PresentingComplaintsService {
        const baseUrl = "Default/PresentingComplaints";
        function Create(request: Serenity.SaveRequest<PresentingComplaintsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PresentingComplaintsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PresentingComplaintsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PresentingComplaintsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/PresentingComplaints/Create",
            Update = "Default/PresentingComplaints/Update",
            Delete = "Default/PresentingComplaints/Delete",
            Retrieve = "Default/PresentingComplaints/Retrieve",
            List = "Default/PresentingComplaints/List"
        }
    }
}
declare namespace CMCPS.Default {
}
declare namespace CMCPS.Default {
    interface SexForm {
        Sex: Serenity.StringEditor;
        Note: Serenity.StringEditor;
    }
    class SexForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CMCPS.Default {
    interface SexRow {
        SexId?: number;
        Sex?: string;
        Note?: string;
    }
    namespace SexRow {
        const idProperty = "SexId";
        const nameProperty = "Sex";
        const localTextPrefix = "Default.Sex";
        const lookupKey = "Default.Sex";
        function getLookup(): Q.Lookup<SexRow>;
        const enum Fields {
            SexId = "SexId",
            Sex = "Sex",
            Note = "Note"
        }
    }
}
declare namespace CMCPS.Default {
    namespace SexService {
        const baseUrl = "Default/Sex";
        function Create(request: Serenity.SaveRequest<SexRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SexRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SexRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SexRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Sex/Create",
            Update = "Default/Sex/Update",
            Delete = "Default/Sex/Delete",
            Retrieve = "Default/Sex/Retrieve",
            List = "Default/Sex/List"
        }
    }
}
declare namespace CMCPS.Default {
}
declare namespace CMCPS.Default {
    interface UnitForm {
        UnitNumber: Serenity.StringEditor;
        Note: Serenity.StringEditor;
    }
    class UnitForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CMCPS.Default {
    interface UnitRow {
        UnitId?: number;
        UnitNumber?: string;
        Note?: string;
    }
    namespace UnitRow {
        const idProperty = "UnitId";
        const nameProperty = "UnitNumber";
        const localTextPrefix = "Default.Unit";
        const lookupKey = "Default.Unit";
        function getLookup(): Q.Lookup<UnitRow>;
        const enum Fields {
            UnitId = "UnitId",
            UnitNumber = "UnitNumber",
            Note = "Note"
        }
    }
}
declare namespace CMCPS.Default {
    namespace UnitService {
        const baseUrl = "Default/Unit";
        function Create(request: Serenity.SaveRequest<UnitRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UnitRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UnitRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UnitRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Unit/Create",
            Update = "Default/Unit/Update",
            Delete = "Default/Unit/Delete",
            Retrieve = "Default/Unit/Retrieve",
            List = "Default/Unit/List"
        }
    }
}
declare namespace CMCPS.Default {
}
declare namespace CMCPS.Default {
    interface UpazilaForm {
        DistrictId: Serenity.LookupEditor;
        UpazilaName: Serenity.StringEditor;
    }
    class UpazilaForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CMCPS.Default {
    interface UpazilaRow {
        UpazilaId?: number;
        DistrictId?: number;
        UpazilaName?: string;
        DistrictName?: string;
    }
    namespace UpazilaRow {
        const idProperty = "UpazilaId";
        const nameProperty = "UpazilaName";
        const localTextPrefix = "Default.Upazila";
        const lookupKey = "Default.Upazila";
        function getLookup(): Q.Lookup<UpazilaRow>;
        const enum Fields {
            UpazilaId = "UpazilaId",
            DistrictId = "DistrictId",
            UpazilaName = "UpazilaName",
            DistrictName = "DistrictName"
        }
    }
}
declare namespace CMCPS.Default {
    namespace UpazilaService {
        const baseUrl = "Default/Upazila";
        function Create(request: Serenity.SaveRequest<UpazilaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UpazilaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UpazilaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UpazilaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Upazila/Create",
            Update = "Default/Upazila/Update",
            Delete = "Default/Upazila/Delete",
            Retrieve = "Default/Upazila/Retrieve",
            List = "Default/Upazila/List"
        }
    }
}
declare namespace CMCPS {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace CMCPS {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace CMCPS {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace CMCPS {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace CMCPS.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CMCPS.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace CMCPS.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CMCPS.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace CMCPS.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CMCPS.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace CMCPS.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CMCPS.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace CMCPS.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CMCPS.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace CMCPS.Modules.Default.Admission {
    enum AnemiaAndJaundiceValue {
        No = 1,
        Mild = 2,
        Moderate = 3,
        Severe = 4
    }
}
declare namespace CMCPS.Modules.Default.Admission {
    enum BloodGroup {
        A = 1,
        B = 2
    }
}
declare namespace CMCPS.Modules.Default.Admission {
    enum Consanguinity {
        Yes = 1,
        No = 2
    }
}
declare namespace CMCPS.Modules.Default.Admission {
    enum DehydrationValue {
        No = 1,
        Some = 2,
        Severe = 3
    }
}
declare namespace CMCPS.Modules.Default.Admission {
    enum EdemaValue {
        Present = 1,
        Absent = 2
    }
}
declare namespace CMCPS.Modules.Default.Admission {
    enum TypeOfPatient {
        Old = 1,
        New = 2
    }
}
declare namespace CMCPS.Modules.Default.History {
    interface AntenatalHistoryRow {
        PbAntenatalHistoryId?: number;
        AdmissionId?: number;
        AntenatalId?: number;
    }
    namespace AntenatalHistoryRow {
        const idProperty = "PbAntenatalHistoryId";
        const localTextPrefix = "Default.AntenatalHistory";
        const lookupKey = "Default.History";
        function getLookup(): Q.Lookup<AntenatalHistoryRow>;
        const enum Fields {
            PbAntenatalHistoryId = "PbAntenatalHistoryId",
            AdmissionId = "AdmissionId",
            AntenatalId = "AntenatalId"
        }
    }
}
declare namespace CMCPS.Modules.Default.History {
    interface NatalHistoryRow {
        PbNatalHistoryId?: number;
        AdmissionId?: number;
        NatalId?: number;
    }
    namespace NatalHistoryRow {
        const idProperty = "PbNatalHistoryId";
        const localTextPrefix = "Default.NatalHistory";
        const lookupKey = "Default.Historuy";
        function getLookup(): Q.Lookup<NatalHistoryRow>;
        const enum Fields {
            PbNatalHistoryId = "PbNatalHistoryId",
            AdmissionId = "AdmissionId",
            NatalId = "NatalId"
        }
    }
}
declare namespace CMCPS.Modules.Default.History {
    interface PostNatalHistoryRow {
        PBPostNatalHistoryId?: number;
        AdmissionId?: number;
        PostNatalId?: number;
    }
    namespace PostNatalHistoryRow {
        const idProperty = "PBPostNatalHistoryId";
        const localTextPrefix = "Default.PostNatalHistory";
        const lookupKey = "Default.Historyy";
        function getLookup(): Q.Lookup<PostNatalHistoryRow>;
        const enum Fields {
            PBPostNatalHistoryId = "PBPostNatalHistoryId",
            AdmissionId = "AdmissionId",
            PostNatalId = "PostNatalId"
        }
    }
}
declare namespace CMCPS.Northwind {
}
declare namespace CMCPS.Northwind {
    interface CategoryForm {
        CategoryName: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }
    class CategoryForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CMCPS.Northwind {
    interface CategoryLangRow {
        Id?: number;
        CategoryId?: number;
        LanguageId?: number;
        CategoryName?: string;
        Description?: string;
    }
    namespace CategoryLangRow {
        const idProperty = "Id";
        const nameProperty = "CategoryName";
        const localTextPrefix = "Northwind.CategoryLang";
        const enum Fields {
            Id = "Id",
            CategoryId = "CategoryId",
            LanguageId = "LanguageId",
            CategoryName = "CategoryName",
            Description = "Description"
        }
    }
}
declare namespace CMCPS.Northwind {
    namespace CategoryLangService {
        const baseUrl = "Northwind/CategoryLang";
        function Create(request: Serenity.SaveRequest<CategoryLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CategoryLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CategoryLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CategoryLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/CategoryLang/Create",
            Update = "Northwind/CategoryLang/Update",
            Delete = "Northwind/CategoryLang/Delete",
            Retrieve = "Northwind/CategoryLang/Retrieve",
            List = "Northwind/CategoryLang/List"
        }
    }
}
declare namespace CMCPS.Northwind {
    interface CategoryRow {
        CategoryID?: number;
        CategoryName?: string;
        Description?: string;
        Picture?: number[];
    }
    namespace CategoryRow {
        const idProperty = "CategoryID";
        const nameProperty = "CategoryName";
        const localTextPrefix = "Northwind.Category";
        const lookupKey = "Northwind.Category";
        function getLookup(): Q.Lookup<CategoryRow>;
        const enum Fields {
            CategoryID = "CategoryID",
            CategoryName = "CategoryName",
            Description = "Description",
            Picture = "Picture"
        }
    }
}
declare namespace CMCPS.Northwind {
    namespace CategoryService {
        const baseUrl = "Northwind/Category";
        function Create(request: Serenity.SaveRequest<CategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/Category/Create",
            Update = "Northwind/Category/Update",
            Delete = "Northwind/Category/Delete",
            Retrieve = "Northwind/Category/Retrieve",
            List = "Northwind/Category/List"
        }
    }
}
declare namespace CMCPS.Northwind {
}
declare namespace CMCPS.Northwind {
    interface CustomerCustomerDemoRow {
        ID?: number;
        CustomerID?: string;
        CustomerTypeID?: string;
        CustomerCompanyName?: string;
        CustomerContactName?: string;
        CustomerContactTitle?: string;
        CustomerAddress?: string;
        CustomerCity?: string;
        CustomerRegion?: string;
        CustomerPostalCode?: string;
        CustomerCountry?: string;
        CustomerPhone?: string;
        CustomerFax?: string;
        CustomerTypeCustomerDesc?: string;
    }
    namespace CustomerCustomerDemoRow {
        const idProperty = "ID";
        const nameProperty = "CustomerID";
        const localTextPrefix = "Northwind.CustomerCustomerDemo";
        const enum Fields {
            ID = "ID",
            CustomerID = "CustomerID",
            CustomerTypeID = "CustomerTypeID",
            CustomerCompanyName = "CustomerCompanyName",
            CustomerContactName = "CustomerContactName",
            CustomerContactTitle = "CustomerContactTitle",
            CustomerAddress = "CustomerAddress",
            CustomerCity = "CustomerCity",
            CustomerRegion = "CustomerRegion",
            CustomerPostalCode = "CustomerPostalCode",
            CustomerCountry = "CustomerCountry",
            CustomerPhone = "CustomerPhone",
            CustomerFax = "CustomerFax",
            CustomerTypeCustomerDesc = "CustomerTypeCustomerDesc"
        }
    }
}
declare namespace CMCPS.Northwind {
    interface CustomerDemographicRow {
        ID?: number;
        CustomerTypeID?: string;
        CustomerDesc?: string;
    }
    namespace CustomerDemographicRow {
        const idProperty = "ID";
        const nameProperty = "CustomerTypeID";
        const localTextPrefix = "Northwind.CustomerDemographic";
        const enum Fields {
            ID = "ID",
            CustomerTypeID = "CustomerTypeID",
            CustomerDesc = "CustomerDesc"
        }
    }
}
declare namespace CMCPS.Northwind {
    interface CustomerDetailsRow {
        Id?: number;
        LastContactDate?: string;
        LastContactedBy?: number;
        Email?: string;
        SendBulletin?: boolean;
        LastContactedByLastName?: string;
        LastContactedByFirstName?: string;
        LastContactedByTitle?: string;
        LastContactedByTitleOfCourtesy?: string;
        LastContactedByBirthDate?: string;
        LastContactedByHireDate?: string;
        LastContactedByAddress?: string;
        LastContactedByCity?: string;
        LastContactedByRegion?: string;
        LastContactedByPostalCode?: string;
        LastContactedByCountry?: string;
        LastContactedByHomePhone?: string;
        LastContactedByExtension?: string;
        LastContactedByPhoto?: number[];
        LastContactedByNotes?: string;
        LastContactedByReportsTo?: number;
        LastContactedByPhotoPath?: string;
    }
    namespace CustomerDetailsRow {
        const idProperty = "Id";
        const nameProperty = "Email";
        const localTextPrefix = "Northwind.CustomerDetails";
        const enum Fields {
            Id = "Id",
            LastContactDate = "LastContactDate",
            LastContactedBy = "LastContactedBy",
            Email = "Email",
            SendBulletin = "SendBulletin",
            LastContactedByLastName = "LastContactedByLastName",
            LastContactedByFirstName = "LastContactedByFirstName",
            LastContactedByTitle = "LastContactedByTitle",
            LastContactedByTitleOfCourtesy = "LastContactedByTitleOfCourtesy",
            LastContactedByBirthDate = "LastContactedByBirthDate",
            LastContactedByHireDate = "LastContactedByHireDate",
            LastContactedByAddress = "LastContactedByAddress",
            LastContactedByCity = "LastContactedByCity",
            LastContactedByRegion = "LastContactedByRegion",
            LastContactedByPostalCode = "LastContactedByPostalCode",
            LastContactedByCountry = "LastContactedByCountry",
            LastContactedByHomePhone = "LastContactedByHomePhone",
            LastContactedByExtension = "LastContactedByExtension",
            LastContactedByPhoto = "LastContactedByPhoto",
            LastContactedByNotes = "LastContactedByNotes",
            LastContactedByReportsTo = "LastContactedByReportsTo",
            LastContactedByPhotoPath = "LastContactedByPhotoPath"
        }
    }
}
declare namespace CMCPS.Northwind {
    interface CustomerForm {
        CustomerID: Serenity.StringEditor;
        CompanyName: Serenity.StringEditor;
        ContactName: Serenity.StringEditor;
        ContactTitle: Serenity.StringEditor;
        Representatives: Serenity.LookupEditor;
        Address: Serenity.StringEditor;
        Country: Serenity.LookupEditor;
        City: Serenity.LookupEditor;
        Region: Serenity.StringEditor;
        PostalCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Fax: Serenity.StringEditor;
        NoteList: NotesEditor;
        LastContactDate: Serenity.DateEditor;
        LastContactedBy: Serenity.LookupEditor;
        Email: Serenity.EmailEditor;
        SendBulletin: Serenity.BooleanEditor;
    }
    class CustomerForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CMCPS.Northwind {
    interface CustomerGrossSalesRow {
        CustomerId?: string;
        ContactName?: string;
        ProductId?: number;
        ProductName?: string;
        GrossAmount?: number;
    }
    namespace CustomerGrossSalesRow {
        const nameProperty = "ContactName";
        const localTextPrefix = "Northwind.CustomerGrossSales";
        const enum Fields {
            CustomerId = "CustomerId",
            ContactName = "ContactName",
            ProductId = "ProductId",
            ProductName = "ProductName",
            GrossAmount = "GrossAmount"
        }
    }
}
declare namespace CMCPS.Northwind {
    interface CustomerRepresentativesRow {
        RepresentativeId?: number;
        CustomerId?: number;
        EmployeeId?: number;
    }
    namespace CustomerRepresentativesRow {
        const idProperty = "RepresentativeId";
        const localTextPrefix = "Northwind.CustomerRepresentatives";
        const enum Fields {
            RepresentativeId = "RepresentativeId",
            CustomerId = "CustomerId",
            EmployeeId = "EmployeeId"
        }
    }
}
declare namespace CMCPS.Northwind {
    interface CustomerRow {
        ID?: number;
        CustomerID?: string;
        CompanyName?: string;
        ContactName?: string;
        ContactTitle?: string;
        Address?: string;
        City?: string;
        Region?: string;
        PostalCode?: string;
        Country?: string;
        Phone?: string;
        Fax?: string;
        NoteList?: NoteRow[];
        Representatives?: number[];
        LastContactDate?: string;
        LastContactedBy?: number;
        Email?: string;
        SendBulletin?: boolean;
    }
    namespace CustomerRow {
        const idProperty = "ID";
        const nameProperty = "CompanyName";
        const localTextPrefix = "Northwind.Customer";
        const lookupKey = "Northwind.Customer";
        function getLookup(): Q.Lookup<CustomerRow>;
        const enum Fields {
            ID = "ID",
            CustomerID = "CustomerID",
            CompanyName = "CompanyName",
            ContactName = "ContactName",
            ContactTitle = "ContactTitle",
            Address = "Address",
            City = "City",
            Region = "Region",
            PostalCode = "PostalCode",
            Country = "Country",
            Phone = "Phone",
            Fax = "Fax",
            NoteList = "NoteList",
            Representatives = "Representatives",
            LastContactDate = "LastContactDate",
            LastContactedBy = "LastContactedBy",
            Email = "Email",
            SendBulletin = "SendBulletin"
        }
    }
}
declare namespace CMCPS.Northwind {
    namespace CustomerService {
        const baseUrl = "Northwind/Customer";
        function Create(request: Serenity.SaveRequest<CustomerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CustomerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CustomerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CustomerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/Customer/Create",
            Update = "Northwind/Customer/Update",
            Delete = "Northwind/Customer/Delete",
            GetNextNumber = "Northwind/Customer/GetNextNumber",
            Retrieve = "Northwind/Customer/Retrieve",
            List = "Northwind/Customer/List"
        }
    }
}
declare namespace CMCPS.Northwind {
    interface EmployeeRow {
        EmployeeID?: number;
        LastName?: string;
        FirstName?: string;
        FullName?: string;
        Title?: string;
        TitleOfCourtesy?: string;
        BirthDate?: string;
        HireDate?: string;
        Address?: string;
        City?: string;
        Region?: string;
        PostalCode?: string;
        Country?: string;
        HomePhone?: string;
        Extension?: string;
        Photo?: number[];
        Notes?: string;
        ReportsTo?: number;
        PhotoPath?: string;
        ReportsToFullName?: string;
        ReportsToLastName?: string;
        ReportsToFirstName?: string;
        ReportsToTitle?: string;
        ReportsToTitleOfCourtesy?: string;
        ReportsToBirthDate?: string;
        ReportsToHireDate?: string;
        ReportsToAddress?: string;
        ReportsToCity?: string;
        ReportsToRegion?: string;
        ReportsToPostalCode?: string;
        ReportsToCountry?: string;
        ReportsToHomePhone?: string;
        ReportsToExtension?: string;
        ReportsToPhoto?: number[];
        ReportsToNotes?: string;
        ReportsToReportsTo?: number;
        ReportsToPhotoPath?: string;
        Gender?: Gender;
    }
    namespace EmployeeRow {
        const idProperty = "EmployeeID";
        const nameProperty = "FullName";
        const localTextPrefix = "Northwind.Employee";
        const lookupKey = "Northwind.Employee";
        function getLookup(): Q.Lookup<EmployeeRow>;
        const enum Fields {
            EmployeeID = "EmployeeID",
            LastName = "LastName",
            FirstName = "FirstName",
            FullName = "FullName",
            Title = "Title",
            TitleOfCourtesy = "TitleOfCourtesy",
            BirthDate = "BirthDate",
            HireDate = "HireDate",
            Address = "Address",
            City = "City",
            Region = "Region",
            PostalCode = "PostalCode",
            Country = "Country",
            HomePhone = "HomePhone",
            Extension = "Extension",
            Photo = "Photo",
            Notes = "Notes",
            ReportsTo = "ReportsTo",
            PhotoPath = "PhotoPath",
            ReportsToFullName = "ReportsToFullName",
            ReportsToLastName = "ReportsToLastName",
            ReportsToFirstName = "ReportsToFirstName",
            ReportsToTitle = "ReportsToTitle",
            ReportsToTitleOfCourtesy = "ReportsToTitleOfCourtesy",
            ReportsToBirthDate = "ReportsToBirthDate",
            ReportsToHireDate = "ReportsToHireDate",
            ReportsToAddress = "ReportsToAddress",
            ReportsToCity = "ReportsToCity",
            ReportsToRegion = "ReportsToRegion",
            ReportsToPostalCode = "ReportsToPostalCode",
            ReportsToCountry = "ReportsToCountry",
            ReportsToHomePhone = "ReportsToHomePhone",
            ReportsToExtension = "ReportsToExtension",
            ReportsToPhoto = "ReportsToPhoto",
            ReportsToNotes = "ReportsToNotes",
            ReportsToReportsTo = "ReportsToReportsTo",
            ReportsToPhotoPath = "ReportsToPhotoPath",
            Gender = "Gender"
        }
    }
}
declare namespace CMCPS.Northwind {
    interface EmployeeTerritoryRow {
        EmployeeID?: number;
        TerritoryID?: string;
        EmployeeLastName?: string;
        EmployeeFirstName?: string;
        EmployeeTitle?: string;
        EmployeeTitleOfCourtesy?: string;
        EmployeeBirthDate?: string;
        EmployeeHireDate?: string;
        EmployeeAddress?: string;
        EmployeeCity?: string;
        EmployeeRegion?: string;
        EmployeePostalCode?: string;
        EmployeeCountry?: string;
        EmployeeHomePhone?: string;
        EmployeeExtension?: string;
        EmployeePhoto?: number[];
        EmployeeNotes?: string;
        EmployeeReportsTo?: number;
        EmployeePhotoPath?: string;
        TerritoryTerritoryDescription?: string;
        TerritoryRegionID?: number;
    }
    namespace EmployeeTerritoryRow {
        const idProperty = "EmployeeID";
        const nameProperty = "TerritoryID";
        const localTextPrefix = "Northwind.EmployeeTerritory";
        const enum Fields {
            EmployeeID = "EmployeeID",
            TerritoryID = "TerritoryID",
            EmployeeLastName = "EmployeeLastName",
            EmployeeFirstName = "EmployeeFirstName",
            EmployeeTitle = "EmployeeTitle",
            EmployeeTitleOfCourtesy = "EmployeeTitleOfCourtesy",
            EmployeeBirthDate = "EmployeeBirthDate",
            EmployeeHireDate = "EmployeeHireDate",
            EmployeeAddress = "EmployeeAddress",
            EmployeeCity = "EmployeeCity",
            EmployeeRegion = "EmployeeRegion",
            EmployeePostalCode = "EmployeePostalCode",
            EmployeeCountry = "EmployeeCountry",
            EmployeeHomePhone = "EmployeeHomePhone",
            EmployeeExtension = "EmployeeExtension",
            EmployeePhoto = "EmployeePhoto",
            EmployeeNotes = "EmployeeNotes",
            EmployeeReportsTo = "EmployeeReportsTo",
            EmployeePhotoPath = "EmployeePhotoPath",
            TerritoryTerritoryDescription = "TerritoryTerritoryDescription",
            TerritoryRegionID = "TerritoryRegionID"
        }
    }
}
declare namespace CMCPS.Northwind {
    enum Gender {
        Male = 1,
        Female = 2
    }
}
declare namespace CMCPS.Northwind {
    interface NoteRow {
        NoteId?: number;
        EntityType?: string;
        EntityId?: number;
        Text?: string;
        InsertUserId?: number;
        InsertDate?: string;
        InsertUserDisplayName?: string;
    }
    namespace NoteRow {
        const idProperty = "NoteId";
        const nameProperty = "EntityType";
        const localTextPrefix = "Northwind.Note";
        const enum Fields {
            NoteId = "NoteId",
            EntityType = "EntityType",
            EntityId = "EntityId",
            Text = "Text",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            InsertUserDisplayName = "InsertUserDisplayName"
        }
    }
}
declare namespace CMCPS.Northwind {
}
declare namespace CMCPS.Northwind {
}
declare namespace CMCPS.Northwind {
    interface OrderDetailForm {
        ProductID: Serenity.LookupEditor;
        UnitPrice: Serenity.DecimalEditor;
        Quantity: Serenity.IntegerEditor;
        Discount: Serenity.DecimalEditor;
    }
    class OrderDetailForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CMCPS.Northwind {
    interface OrderDetailRow {
        DetailID?: number;
        OrderID?: number;
        ProductID?: number;
        UnitPrice?: number;
        Quantity?: number;
        Discount?: number;
        OrderCustomerID?: string;
        OrderEmployeeID?: number;
        OrderDate?: string;
        OrderShippedDate?: string;
        OrderShipVia?: number;
        OrderShipCity?: string;
        OrderShipCountry?: string;
        ProductName?: string;
        ProductDiscontinued?: boolean;
        ProductSupplierID?: number;
        ProductQuantityPerUnit?: string;
        ProductUnitPrice?: number;
        LineTotal?: number;
    }
    namespace OrderDetailRow {
        const idProperty = "DetailID";
        const localTextPrefix = "Northwind.OrderDetail";
        const enum Fields {
            DetailID = "DetailID",
            OrderID = "OrderID",
            ProductID = "ProductID",
            UnitPrice = "UnitPrice",
            Quantity = "Quantity",
            Discount = "Discount",
            OrderCustomerID = "OrderCustomerID",
            OrderEmployeeID = "OrderEmployeeID",
            OrderDate = "OrderDate",
            OrderShippedDate = "OrderShippedDate",
            OrderShipVia = "OrderShipVia",
            OrderShipCity = "OrderShipCity",
            OrderShipCountry = "OrderShipCountry",
            ProductName = "ProductName",
            ProductDiscontinued = "ProductDiscontinued",
            ProductSupplierID = "ProductSupplierID",
            ProductQuantityPerUnit = "ProductQuantityPerUnit",
            ProductUnitPrice = "ProductUnitPrice",
            LineTotal = "LineTotal"
        }
    }
}
declare namespace CMCPS.Northwind {
    namespace OrderDetailService {
        const baseUrl = "Northwind/OrderDetail";
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OrderDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OrderDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Retrieve = "Northwind/OrderDetail/Retrieve",
            List = "Northwind/OrderDetail/List"
        }
    }
}
declare namespace CMCPS.Northwind {
    interface OrderForm {
        CustomerID: CustomerEditor;
        OrderDate: Serenity.DateEditor;
        RequiredDate: Serenity.DateEditor;
        EmployeeID: Serenity.LookupEditor;
        DetailList: OrderDetailsEditor;
        ShippedDate: Serenity.DateEditor;
        ShipVia: Serenity.LookupEditor;
        Freight: Serenity.DecimalEditor;
        ShipName: Serenity.StringEditor;
        ShipAddress: Serenity.StringEditor;
        ShipCity: Serenity.StringEditor;
        ShipRegion: Serenity.StringEditor;
        ShipPostalCode: Serenity.StringEditor;
        ShipCountry: Serenity.StringEditor;
    }
    class OrderForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CMCPS.Northwind {
    interface OrderListRequest extends Serenity.ListRequest {
        ProductID?: number;
    }
}
declare namespace CMCPS.Northwind {
    interface OrderRow {
        OrderID?: number;
        CustomerID?: string;
        EmployeeID?: number;
        OrderDate?: string;
        RequiredDate?: string;
        ShippedDate?: string;
        ShipVia?: number;
        Freight?: number;
        ShipName?: string;
        ShipAddress?: string;
        ShipCity?: string;
        ShipRegion?: string;
        ShipPostalCode?: string;
        ShipCountry?: string;
        CustomerCompanyName?: string;
        CustomerContactName?: string;
        CustomerContactTitle?: string;
        CustomerCity?: string;
        CustomerRegion?: string;
        CustomerCountry?: string;
        CustomerPhone?: string;
        CustomerFax?: string;
        EmployeeFullName?: string;
        EmployeeGender?: Gender;
        EmployeeReportsToFullName?: string;
        ShipViaCompanyName?: string;
        ShipViaPhone?: string;
        ShippingState?: OrderShippingState;
        DetailList?: OrderDetailRow[];
    }
    namespace OrderRow {
        const idProperty = "OrderID";
        const nameProperty = "CustomerID";
        const localTextPrefix = "Northwind.Order";
        const enum Fields {
            OrderID = "OrderID",
            CustomerID = "CustomerID",
            EmployeeID = "EmployeeID",
            OrderDate = "OrderDate",
            RequiredDate = "RequiredDate",
            ShippedDate = "ShippedDate",
            ShipVia = "ShipVia",
            Freight = "Freight",
            ShipName = "ShipName",
            ShipAddress = "ShipAddress",
            ShipCity = "ShipCity",
            ShipRegion = "ShipRegion",
            ShipPostalCode = "ShipPostalCode",
            ShipCountry = "ShipCountry",
            CustomerCompanyName = "CustomerCompanyName",
            CustomerContactName = "CustomerContactName",
            CustomerContactTitle = "CustomerContactTitle",
            CustomerCity = "CustomerCity",
            CustomerRegion = "CustomerRegion",
            CustomerCountry = "CustomerCountry",
            CustomerPhone = "CustomerPhone",
            CustomerFax = "CustomerFax",
            EmployeeFullName = "EmployeeFullName",
            EmployeeGender = "EmployeeGender",
            EmployeeReportsToFullName = "EmployeeReportsToFullName",
            ShipViaCompanyName = "ShipViaCompanyName",
            ShipViaPhone = "ShipViaPhone",
            ShippingState = "ShippingState",
            DetailList = "DetailList"
        }
    }
}
declare namespace CMCPS.Northwind {
    namespace OrderService {
        const baseUrl = "Northwind/Order";
        function Create(request: Serenity.SaveRequest<OrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: OrderListRequest, onSuccess?: (response: Serenity.ListResponse<OrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/Order/Create",
            Update = "Northwind/Order/Update",
            Delete = "Northwind/Order/Delete",
            Retrieve = "Northwind/Order/Retrieve",
            List = "Northwind/Order/List"
        }
    }
}
declare namespace CMCPS.Northwind {
    enum OrderShippingState {
        NotShipped = 0,
        Shipped = 1
    }
}
declare namespace CMCPS.Northwind {
}
declare namespace CMCPS.Northwind {
    interface ProductForm {
        ProductName: Serenity.StringEditor;
        ProductImage: Serenity.ImageUploadEditor;
        Discontinued: Serenity.BooleanEditor;
        SupplierID: Serenity.LookupEditor;
        CategoryID: Serenity.LookupEditor;
        QuantityPerUnit: Serenity.StringEditor;
        UnitPrice: Serenity.DecimalEditor;
        UnitsInStock: Serenity.IntegerEditor;
        UnitsOnOrder: Serenity.IntegerEditor;
        ReorderLevel: Serenity.IntegerEditor;
    }
    class ProductForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CMCPS.Northwind {
    interface ProductLangRow {
        Id?: number;
        ProductId?: number;
        LanguageId?: number;
        ProductName?: string;
    }
    namespace ProductLangRow {
        const idProperty = "Id";
        const nameProperty = "ProductName";
        const localTextPrefix = "Northwind.ProductLang";
        const enum Fields {
            Id = "Id",
            ProductId = "ProductId",
            LanguageId = "LanguageId",
            ProductName = "ProductName"
        }
    }
}
declare namespace CMCPS.Northwind {
    namespace ProductLangService {
        const baseUrl = "Northwind/ProductLang";
        function Create(request: Serenity.SaveRequest<ProductLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProductLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/ProductLang/Create",
            Update = "Northwind/ProductLang/Update",
            Delete = "Northwind/ProductLang/Delete",
            Retrieve = "Northwind/ProductLang/Retrieve",
            List = "Northwind/ProductLang/List"
        }
    }
}
declare namespace CMCPS.Northwind {
    interface ProductLogRow {
        ProductLogID?: number;
        OperationType?: Serenity.CaptureOperationType;
        ChangingUserId?: number;
        ValidFrom?: string;
        ValidUntil?: string;
        ProductID?: number;
        ProductName?: string;
        ProductImage?: string;
        Discontinued?: boolean;
        SupplierID?: number;
        CategoryID?: number;
        QuantityPerUnit?: string;
        UnitPrice?: number;
        UnitsInStock?: number;
        UnitsOnOrder?: number;
        ReorderLevel?: number;
    }
    namespace ProductLogRow {
        const idProperty = "ProductLogID";
        const localTextPrefix = "Northwind.ProductLog";
        const enum Fields {
            ProductLogID = "ProductLogID",
            OperationType = "OperationType",
            ChangingUserId = "ChangingUserId",
            ValidFrom = "ValidFrom",
            ValidUntil = "ValidUntil",
            ProductID = "ProductID",
            ProductName = "ProductName",
            ProductImage = "ProductImage",
            Discontinued = "Discontinued",
            SupplierID = "SupplierID",
            CategoryID = "CategoryID",
            QuantityPerUnit = "QuantityPerUnit",
            UnitPrice = "UnitPrice",
            UnitsInStock = "UnitsInStock",
            UnitsOnOrder = "UnitsOnOrder",
            ReorderLevel = "ReorderLevel"
        }
    }
}
declare namespace CMCPS.Northwind {
    interface ProductRow {
        ProductID?: number;
        ProductName?: string;
        ProductImage?: string;
        Discontinued?: boolean;
        SupplierID?: number;
        CategoryID?: number;
        QuantityPerUnit?: string;
        UnitPrice?: number;
        UnitsInStock?: number;
        UnitsOnOrder?: number;
        ReorderLevel?: number;
        SupplierCompanyName?: string;
        SupplierContactName?: string;
        SupplierContactTitle?: string;
        SupplierAddress?: string;
        SupplierCity?: string;
        SupplierRegion?: string;
        SupplierPostalCode?: string;
        SupplierCountry?: string;
        SupplierPhone?: string;
        SupplierFax?: string;
        SupplierHomePage?: string;
        CategoryName?: string;
        CategoryDescription?: string;
        CategoryPicture?: number[];
    }
    namespace ProductRow {
        const idProperty = "ProductID";
        const nameProperty = "ProductName";
        const localTextPrefix = "Northwind.Product";
        const lookupKey = "Northwind.Product";
        function getLookup(): Q.Lookup<ProductRow>;
        const enum Fields {
            ProductID = "ProductID",
            ProductName = "ProductName",
            ProductImage = "ProductImage",
            Discontinued = "Discontinued",
            SupplierID = "SupplierID",
            CategoryID = "CategoryID",
            QuantityPerUnit = "QuantityPerUnit",
            UnitPrice = "UnitPrice",
            UnitsInStock = "UnitsInStock",
            UnitsOnOrder = "UnitsOnOrder",
            ReorderLevel = "ReorderLevel",
            SupplierCompanyName = "SupplierCompanyName",
            SupplierContactName = "SupplierContactName",
            SupplierContactTitle = "SupplierContactTitle",
            SupplierAddress = "SupplierAddress",
            SupplierCity = "SupplierCity",
            SupplierRegion = "SupplierRegion",
            SupplierPostalCode = "SupplierPostalCode",
            SupplierCountry = "SupplierCountry",
            SupplierPhone = "SupplierPhone",
            SupplierFax = "SupplierFax",
            SupplierHomePage = "SupplierHomePage",
            CategoryName = "CategoryName",
            CategoryDescription = "CategoryDescription",
            CategoryPicture = "CategoryPicture"
        }
    }
}
declare namespace CMCPS.Northwind {
    namespace ProductService {
        const baseUrl = "Northwind/Product";
        function Create(request: Serenity.SaveRequest<ProductRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProductRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/Product/Create",
            Update = "Northwind/Product/Update",
            Delete = "Northwind/Product/Delete",
            Retrieve = "Northwind/Product/Retrieve",
            List = "Northwind/Product/List"
        }
    }
}
declare namespace CMCPS.Northwind {
}
declare namespace CMCPS.Northwind {
    interface RegionForm {
        RegionID: Serenity.IntegerEditor;
        RegionDescription: Serenity.StringEditor;
    }
    class RegionForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CMCPS.Northwind {
    interface RegionRow {
        RegionID?: number;
        RegionDescription?: string;
    }
    namespace RegionRow {
        const idProperty = "RegionID";
        const nameProperty = "RegionDescription";
        const localTextPrefix = "Northwind.Region";
        const lookupKey = "Northwind.Region";
        function getLookup(): Q.Lookup<RegionRow>;
        const enum Fields {
            RegionID = "RegionID",
            RegionDescription = "RegionDescription"
        }
    }
}
declare namespace CMCPS.Northwind {
    namespace RegionService {
        const baseUrl = "Northwind/Region";
        function Create(request: Serenity.SaveRequest<RegionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RegionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RegionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RegionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/Region/Create",
            Update = "Northwind/Region/Update",
            Delete = "Northwind/Region/Delete",
            Retrieve = "Northwind/Region/Retrieve",
            List = "Northwind/Region/List"
        }
    }
}
declare namespace CMCPS.Northwind {
}
declare namespace CMCPS.Northwind {
    interface SalesByCategoryRow {
        CategoryId?: number;
        CategoryName?: string;
        ProductName?: string;
        ProductSales?: number;
    }
    namespace SalesByCategoryRow {
        const nameProperty = "CategoryName";
        const localTextPrefix = "Northwind.SalesByCategory";
        const enum Fields {
            CategoryId = "CategoryId",
            CategoryName = "CategoryName",
            ProductName = "ProductName",
            ProductSales = "ProductSales"
        }
    }
}
declare namespace CMCPS.Northwind {
    namespace SalesByCategoryService {
        const baseUrl = "Northwind/SalesByCategory";
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SalesByCategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Northwind/SalesByCategory/List"
        }
    }
}
declare namespace CMCPS.Northwind {
}
declare namespace CMCPS.Northwind {
    interface ShipperForm {
        CompanyName: Serenity.StringEditor;
        Phone: PhoneEditor;
    }
    class ShipperForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CMCPS.Northwind {
    interface ShipperRow {
        ShipperID?: number;
        CompanyName?: string;
        Phone?: string;
    }
    namespace ShipperRow {
        const idProperty = "ShipperID";
        const nameProperty = "CompanyName";
        const localTextPrefix = "Northwind.Shipper";
        const lookupKey = "Northwind.Shipper";
        function getLookup(): Q.Lookup<ShipperRow>;
        const enum Fields {
            ShipperID = "ShipperID",
            CompanyName = "CompanyName",
            Phone = "Phone"
        }
    }
}
declare namespace CMCPS.Northwind {
    namespace ShipperService {
        const baseUrl = "Northwind/Shipper";
        function Create(request: Serenity.SaveRequest<ShipperRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ShipperRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ShipperRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ShipperRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/Shipper/Create",
            Update = "Northwind/Shipper/Update",
            Delete = "Northwind/Shipper/Delete",
            Retrieve = "Northwind/Shipper/Retrieve",
            List = "Northwind/Shipper/List"
        }
    }
}
declare namespace CMCPS.Northwind {
}
declare namespace CMCPS.Northwind {
    interface SupplierForm {
        CompanyName: Serenity.StringEditor;
        ContactName: Serenity.StringEditor;
        ContactTitle: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Region: Serenity.StringEditor;
        PostalCode: Serenity.StringEditor;
        Country: Serenity.StringEditor;
        City: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Fax: Serenity.StringEditor;
        HomePage: Serenity.StringEditor;
    }
    class SupplierForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CMCPS.Northwind {
    interface SupplierRow {
        SupplierID?: number;
        CompanyName?: string;
        ContactName?: string;
        ContactTitle?: string;
        Address?: string;
        City?: string;
        Region?: string;
        PostalCode?: string;
        Country?: string;
        Phone?: string;
        Fax?: string;
        HomePage?: string;
    }
    namespace SupplierRow {
        const idProperty = "SupplierID";
        const nameProperty = "CompanyName";
        const localTextPrefix = "Northwind.Supplier";
        const lookupKey = "Northwind.Supplier";
        function getLookup(): Q.Lookup<SupplierRow>;
        const enum Fields {
            SupplierID = "SupplierID",
            CompanyName = "CompanyName",
            ContactName = "ContactName",
            ContactTitle = "ContactTitle",
            Address = "Address",
            City = "City",
            Region = "Region",
            PostalCode = "PostalCode",
            Country = "Country",
            Phone = "Phone",
            Fax = "Fax",
            HomePage = "HomePage"
        }
    }
}
declare namespace CMCPS.Northwind {
    namespace SupplierService {
        const baseUrl = "Northwind/Supplier";
        function Create(request: Serenity.SaveRequest<SupplierRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SupplierRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SupplierRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SupplierRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/Supplier/Create",
            Update = "Northwind/Supplier/Update",
            Delete = "Northwind/Supplier/Delete",
            Retrieve = "Northwind/Supplier/Retrieve",
            List = "Northwind/Supplier/List"
        }
    }
}
declare namespace CMCPS.Northwind {
}
declare namespace CMCPS.Northwind {
    interface TerritoryForm {
        TerritoryID: Serenity.StringEditor;
        TerritoryDescription: Serenity.StringEditor;
        RegionID: Serenity.LookupEditor;
    }
    class TerritoryForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CMCPS.Northwind {
    interface TerritoryRow {
        ID?: number;
        TerritoryID?: string;
        TerritoryDescription?: string;
        RegionID?: number;
        RegionDescription?: string;
    }
    namespace TerritoryRow {
        const idProperty = "ID";
        const nameProperty = "TerritoryID";
        const localTextPrefix = "Northwind.Territory";
        const lookupKey = "Northwind.Territory";
        function getLookup(): Q.Lookup<TerritoryRow>;
        const enum Fields {
            ID = "ID",
            TerritoryID = "TerritoryID",
            TerritoryDescription = "TerritoryDescription",
            RegionID = "RegionID",
            RegionDescription = "RegionDescription"
        }
    }
}
declare namespace CMCPS.Northwind {
    namespace TerritoryService {
        const baseUrl = "Northwind/Territory";
        function Create(request: Serenity.SaveRequest<TerritoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TerritoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TerritoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TerritoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/Territory/Create",
            Update = "Northwind/Territory/Update",
            Delete = "Northwind/Territory/Delete",
            Retrieve = "Northwind/Territory/Retrieve",
            List = "Northwind/Territory/List"
        }
    }
}
declare namespace CMCPS {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace CMCPS.Texts {
}
declare namespace CMCPS.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace CMCPS.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace CMCPS.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace CMCPS.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace CMCPS.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace CMCPS.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace CMCPS.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace CMCPS.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
    }
}
declare namespace CMCPS.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace CMCPS.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        value: UserPermissionRow[];
        private _rolePermissions;
        rolePermissions: string[];
        private _implicitPermissions;
        implicitPermissions: Q.Dictionary<string[]>;
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace CMCPS.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace CMCPS.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace CMCPS.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare var Morris: any;
declare namespace CMCPS.BasicSamples {
    class ChartInDialog extends Serenity.TemplatedDialog<any> {
        private areaChart;
        static initializePage(): void;
        protected onDialogOpen(): void;
        protected arrange(): void;
        protected getTemplate(): string;
        protected getDialogOptions(): JQueryUI.DialogOptions;
    }
}
declare namespace CMCPS.Northwind {
    class ProductDialog extends Serenity.EntityDialog<ProductRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ProductForm;
    }
}
declare namespace CMCPS.BasicSamples {
    class CloneableEntityDialog extends Northwind.ProductDialog {
        protected updateInterface(): void;
        /**
         * Overriding this method is optional to customize cloned entity
         */
        protected getCloningEntity(): Northwind.ProductRow;
    }
}
declare namespace CMCPS.Northwind {
    class ProductGrid extends Serenity.EntityGrid<ProductRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private pendingChanges;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected onViewProcessData(response: any): Serenity.ListResponse<ProductRow>;
        /**
         * It would be nice if we could use autonumeric, Serenity editors etc. here, to control input validation,
         * but it's not supported by SlickGrid as we are only allowed to return a string, and should attach
         * no event handlers to rendered cell contents
         */
        private numericInputFormatter;
        private stringInputFormatter;
        /**
         * Sorry but you cannot use LookupEditor, e.g. Select2 here, only possible is a SELECT element
         */
        private selectFormatter;
        private getEffectiveValue;
        protected getColumns(): Slick.Column[];
        private inputsChange;
        private setSaveButtonState;
        private saveClick;
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
    }
}
declare namespace CMCPS.BasicSamples {
    /**
     * Subclass of ProductGrid to override dialog type to CloneableEntityDialog
     */
    class CloneableEntityGrid extends Northwind.ProductGrid {
        protected getDialogType(): typeof CloneableEntityDialog;
        constructor(container: JQuery);
    }
}
declare namespace CMCPS.Northwind {
    class OrderGrid extends Serenity.EntityGrid<OrderRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected shippingStateFilter: Serenity.EnumEditor;
        constructor(container: JQuery);
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
        protected createQuickFilters(): void;
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        set_shippingState(value: number): void;
        protected addButtonClick(): void;
    }
}
declare namespace CMCPS.BasicSamples {
    class DefaultValuesInNewGrid extends Northwind.OrderGrid {
        constructor(container: JQuery);
        /**
         * This method is called when New Item button is clicked.
         * By default, it calls EditItem with an empty entity.
         * This is a good place to fill in default values for New Item button.
         */
        protected addButtonClick(): void;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace CMCPS.BasicSamples.DialogBoxes {
    function initializePage(): void;
}
declare namespace CMCPS.Northwind {
    class OrderDialog extends Serenity.EntityDialog<OrderRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: OrderForm;
        constructor();
        getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace CMCPS.BasicSamples {
    /**
     * A version of order dialog converted to a panel by adding Serenity.Decorators.panel decorator.
     */
    class EntityDialogAsPanel extends Northwind.OrderDialog {
        constructor();
        protected updateInterface(): void;
        protected onSaveSuccess(response: any): void;
    }
}
declare namespace CMCPS.Northwind {
    class CategoryDialog extends Serenity.EntityDialog<CategoryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CategoryForm;
    }
}
declare namespace CMCPS.BasicSamples {
    class GetInsertedRecordIdDialog extends Northwind.CategoryDialog {
        /**
         * This method is called after the save request to service
         * is completed succesfully. This can be an insert or update.
         *
         * @param response Response that is returned from server
         */
        protected onSaveSuccess(response: Serenity.SaveResponse): void;
    }
}
declare namespace CMCPS.Northwind {
    class CategoryGrid extends Serenity.EntityGrid<CategoryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CMCPS.BasicSamples {
    /**
     * Subclass of CategoryGrid to override dialog type to GetInsertedRecordIdDialog
     */
    class GetInsertedRecordIdGrid extends Northwind.CategoryGrid {
        protected getDialogType(): typeof GetInsertedRecordIdDialog;
        constructor(container: JQuery);
    }
}
declare namespace CMCPS.BasicSamples {
    /**
     * Our custom order dialog subclass that will have a tab to display and edit selected customer details.
     */
    class OtherFormInTabDialog extends Northwind.OrderDialog {
        private customerPropertyGrid;
        private customerForm;
        private customerValidator;
        constructor();
        getCustomerID(): number;
        loadEntity(entity: Northwind.OrderRow): void;
    }
}
declare namespace CMCPS.BasicSamples {
    /**
     * Subclass of OrderGrid to override dialog type to OtherFormInTabDialog
     */
    class OtherFormInTabGrid extends Northwind.OrderGrid {
        protected getDialogType(): typeof OtherFormInTabDialog;
        constructor(container: JQuery);
    }
}
declare namespace CMCPS.BasicSamples {
    /**
     * Our custom order dialog subclass that will have a tab to display and edit selected customer details.
     * With single toolbar for all forms
     */
    class OtherFormOneBarDialog extends Northwind.OrderDialog {
        private customerPropertyGrid;
        private customerForm;
        private customerValidator;
        private selfChange;
        constructor();
        getCustomerID(): number;
        loadEntity(entity: Northwind.OrderRow): void;
        protected saveCustomer(callback: (response: Serenity.SaveResponse) => void, onSuccess?: (response: Serenity.SaveResponse) => void): boolean;
        protected saveOrder(callback: (response: Serenity.SaveResponse) => void): void;
        protected saveAll(callback: (response: Serenity.SaveResponse) => void): void;
        protected save(callback: (response: Serenity.SaveResponse) => void): void;
    }
}
declare namespace CMCPS.BasicSamples {
    /**
     * Subclass of OrderGrid to override dialog type to OtherFormInTabOneBarDialog
     */
    class OtherFormInTabOneBarGrid extends Northwind.OrderGrid {
        protected getDialogType(): typeof OtherFormOneBarDialog;
        constructor(container: JQuery);
    }
}
declare namespace CMCPS.BasicSamples {
    class PopulateLinkedDataDialog extends Serenity.EntityDialog<Northwind.OrderRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PopulateLinkedDataForm;
        constructor();
        private setCustomerDetails;
        /**
         * This dialog will have CSS class "s-PopulateLinkedDataDialog"
         * We are changing it here to "s-OrderDialog", to make it use default OrderDialog styles
         * This has no effect other than looks on populate linked data demonstration
         */
        protected getCssClass(): string;
    }
}
declare namespace CMCPS.BasicSamples {
    /**
     * A subclass of OrderGrid that launches PopulateLinkedDataDialog
     */
    class PopulateLinkedDataGrid extends Northwind.OrderGrid {
        protected getDialogType(): typeof PopulateLinkedDataDialog;
        constructor(container: JQuery);
    }
}
declare namespace CMCPS.Northwind {
    class SupplierDialog extends Serenity.EntityDialog<SupplierRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SupplierForm;
        protected getLanguages(): string[][];
    }
}
declare namespace CMCPS.BasicSamples {
    class ReadOnlyDialog extends Northwind.SupplierDialog {
        /**
         * This is the method that gets list of tool
         * buttons to be created in a dialog.
         *
         * Here we'll remove save and close button, and
         * apply changes buttons.
         */
        protected getToolbarButtons(): Serenity.ToolButton[];
        /**
         * This method is a good place to update states of
         * interface elements. It is called after dialog
         * is initialized and an entity is loaded into dialog.
         * This is also called in new item mode.
         */
        protected updateInterface(): void;
        /**
         * This method is called when dialog title needs to be updated.
         * Base class returns something like 'Edit xyz' for edit mode,
         * and 'New xyz' for new record mode.
         *
         * But our dialog is readonly, so we should change it to 'View xyz'
         */
        protected getEntityTitle(): string;
        /**
         * This method is actually the one that calls getEntityTitle()
         * and updates the dialog title. We could do it here too...
         */
        protected updateTitle(): void;
    }
}
declare namespace CMCPS.Northwind {
    class SupplierGrid extends Serenity.EntityGrid<SupplierRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CMCPS.BasicSamples {
    /**
     * A readonly grid that launches ReadOnlyDialog
     */
    class ReadOnlyGrid extends Northwind.SupplierGrid {
        protected getDialogType(): typeof ReadOnlyDialog;
        constructor(container: JQuery);
        /**
         * Removing add button from grid using its css class
         */
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace CMCPS.Northwind {
    class CustomerDialog extends Serenity.EntityDialog<CustomerRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CustomerForm;
        private ordersGrid;
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
        loadEntity(entity: CustomerRow): void;
        onSaveSuccess(response: any): void;
    }
}
declare namespace CMCPS.BasicSamples {
    class SerialAutoNumberDialog extends Northwind.CustomerDialog {
        constructor();
        protected afterLoadEntity(): void;
        private getNextNumber;
    }
}
declare namespace CMCPS.Northwind {
    class CustomerGrid extends Serenity.EntityGrid<CustomerRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace CMCPS.BasicSamples {
    /**
     * Subclass of CustomerGrid to override dialog type to SerialAutoNumberDialog
     */
    class SerialAutoNumberGrid extends Northwind.CustomerGrid {
        protected getDialogType(): typeof SerialAutoNumberDialog;
        constructor(container: JQuery);
    }
}
declare namespace CMCPS.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace CMCPS.BasicSamples {
    class ChangingLookupTextDialog extends Common.GridEditorDialog<Northwind.OrderDetailRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: ChangingLookupTextForm;
        constructor();
        protected updateInterface(): void;
    }
}
declare namespace CMCPS.BasicSamples {
    /**
     * Our custom product editor type
     */
    class ChangingLookupTextEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, Northwind.ProductRow> {
        constructor(container: JQuery, options: Serenity.LookupEditorOptions);
        protected getLookupKey(): string;
        protected getItemText(item: Northwind.ProductRow, lookup: Q.Lookup<Northwind.ProductRow>): string;
    }
}
declare namespace CMCPS.Northwind {
    class OrderDetailDialog extends Common.GridEditorDialog<OrderDetailRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: OrderDetailForm;
        constructor();
    }
}
declare namespace CMCPS.BasicSamples {
    /**
     * Our subclass of order detail dialog with a CategoryID property
     * that will be used to set CascadeValue of product editor
     */
    class FilteredLookupOrderDetailDialog extends Northwind.OrderDetailDialog {
        constructor();
        /**
         * This method is called just before an entity is loaded to dialog
         * This is also called for new record mode with an empty entity
         */
        protected beforeLoadEntity(entity: any): void;
        categoryID: number;
    }
}
declare namespace CMCPS.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        value: TEntity[];
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
    }
}
declare namespace CMCPS.Northwind {
    class OrderDetailsEditor extends Common.GridEditorBase<OrderDetailRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OrderDetailDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace CMCPS.BasicSamples {
    /**
     * Our subclass of Order Details editor with a CategoryID property
     */
    class FilteredLookupDetailEditor extends Northwind.OrderDetailsEditor {
        protected getDialogType(): typeof FilteredLookupOrderDetailDialog;
        constructor(container: JQuery);
        categoryID: number;
        /**
         * This method is called to initialize an edit dialog created by
         * grid editor when Add button or an edit link is clicked
         * We have an opportunity here to pass CategoryID to edit dialog
         */
        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>): void;
    }
}
declare namespace CMCPS.BasicSamples {
    /**
     * Basic order dialog with a category selection
     */
    class FilteredLookupInDetailDialog extends Serenity.EntityDialog<Northwind.OrderRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        private form;
        constructor();
    }
}
declare namespace CMCPS.BasicSamples {
    /**
     * Subclass of OrderGrid to override dialog type to FilteredLookupInDetailDialog
     */
    class FilteredLookupInDetailGrid extends Northwind.OrderGrid {
        protected getDialogType(): typeof FilteredLookupInDetailDialog;
        constructor(container: JQuery);
    }
}
declare namespace CMCPS.BasicSamples {
    /**
     * This is our custom product dialog that uses a different product form
     * (LookupFilterByMultipleForm) with our special category editor.
     */
    class LookupFilterByMultipleDialog extends Northwind.ProductDialog {
        protected getFormKey(): string;
    }
}
declare namespace CMCPS.BasicSamples {
    /**
     * Subclass of ProductGrid to override dialog type to CloneableEntityDialog
     */
    class LookupFilterByMultipleGrid extends Northwind.ProductGrid {
        protected getDialogType(): typeof LookupFilterByMultipleDialog;
        constructor(container: JQuery);
        /**
         * This method is called just before List request is sent to service.
         * You have an opportunity here to cancel request or modify it.
         * Here we'll add a custom criteria to list request.
         */
        protected onViewSubmit(): boolean;
    }
}
declare namespace CMCPS.BasicSamples {
    /**
     * This is our category editor that will show only categories of Produce and
     * Seafood. We are subclassing LookupEditorBase which also LookupEditor
     * derives from.
     *
     * After compiling and transforming templates, this editor type will be
     * available in server side to use in our LookupFilterByMultipleForm,
     * which is a version of ProductForm that uses our custom editor.
     */
    class ProduceSeafoodCategoryEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, Northwind.CategoryRow> {
        constructor(container: JQuery, opt: Serenity.LookupEditorOptions);
        /**
         * Normally LookupEditor requires a lookup key to determine which set of
         * lookup data to show in editor. As our editor will only show category
         * data, we lock it to category lookup key.
         */
        protected getLookupKey(): string;
        /**
         * Here we are filtering by category name but you could filter by any field.
         * Just make sure the fields you filter on has [LookupInclude] attribute on them,
         * otherwise their value will be null in client side as they are not sent back
         * from server in lookup script.
         */
        protected getItems(lookup: Q.Lookup<Northwind.CategoryRow>): Northwind.CategoryRow[];
    }
}
declare namespace CMCPS.BasicSamples {
    class HardcodedValuesDialog extends Serenity.PropertyDialog<any, any> {
        protected getFormKey(): string;
        protected form: HardcodedValuesForm;
        constructor();
    }
}
declare namespace CMCPS.BasicSamples {
    /**
     * Our select editor with hardcoded values.
     *
     * When you define a new editor type, make sure you build
     * and transform templates for it to be available
     * in server side forms, e.g. [HardCodedValuesEditor]
     */
    class HardcodedValuesEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace CMCPS.BasicSamples {
    class StaticTextBlockDialog extends Serenity.PropertyDialog<any, any> {
        protected getFormKey(): string;
        protected form: StaticTextBlockForm;
        constructor();
        /**
         * Here we override loadInitialEntity method to set value for "DisplayFieldValue" field.
         * If this was an EntityDialog, your field value would be originating from server side entity.
         */
        protected loadInitialEntity(): void;
        protected getDialogOptions(): JQueryUI.DialogOptions;
    }
}
declare namespace CMCPS.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace CMCPS.BasicSamples {
    class OrderBulkAction extends Common.BulkServiceAction {
        /**
         * This controls how many service requests will be used in parallel.
         * Determine this number based on how many requests your server
         * might be able to handle, and amount of wait on external resources.
         */
        protected getParallelRequests(): number;
        /**
         * These number of records IDs will be sent to your service in one
         * service call. If your service is designed to handle one record only,
         * set it to 1. But note that, if you have 5000 records, this will
         * result in 5000 service calls / requests.
         */
        protected getBatchSize(): number;
        /**
         * This is where you should call your service.
         * Batch parameter contains the selected order IDs
         * that should be processed in this service call.
         */
        protected executeForBatch(batch: any): void;
    }
}
declare namespace CMCPS.BasicSamples {
    class CancellableBulkActionGrid extends Northwind.OrderGrid {
        private rowSelection;
        constructor(container: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
        protected getColumns(): Slick.Column[];
        protected getViewOptions(): Slick.RemoteViewOptions;
    }
}
declare namespace CMCPS.BasicSamples {
    class ConditionalFormattingGrid extends Serenity.EntityGrid<Northwind.ProductRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        /**
         * We override getColumns() to be able to add a custom CSS class to UnitPrice
         * We could also add this class in ProductColumns.cs but didn't want to modify
         * it solely for this sample.
         */
        protected getColumns(): Slick.Column[];
        /**
         * This method is called for all rows
         * @param item Data item for current row
         * @param index Index of the row in grid
         */
        protected getItemCssClass(item: Northwind.ProductRow, index: number): string;
    }
}
declare namespace CMCPS.BasicSamples {
    class CustomLinksInGrid extends Northwind.OrderGrid {
        constructor(container: JQuery);
        /**
         * We override getColumns() to change format functions for some columns.
         * You could also write them as formatter classes, and use them at server side
         */
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
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
        protected editItem(entityOrId: any): void;
    }
}
declare namespace CMCPS.BasicSamples {
    class DragDropSampleDialog extends Serenity.EntityDialog<DragDropSampleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: DragDropSampleForm;
    }
}
declare namespace CMCPS.BasicSamples {
    class DragDropSampleGrid extends Serenity.EntityGrid<DragDropSampleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DragDropSampleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private dragging;
        constructor(container: JQuery);
        /**
         * This method will determine if item can be moved under a given target
         * An item can't be moved under itself, under one of its children
         */
        private canMoveUnder;
        /**
         * Gets children list of an item
         */
        private getChildren;
        /**
         * Gets all parents of an item
         */
        private getParents;
        protected getButtons(): any[];
        protected usePager(): boolean;
    }
}
declare namespace CMCPS {
    class SelectableEntityGrid<TItem, TOptions> extends Serenity.EntityGrid<TItem, TOptions> {
        protected getSlickOptions(): Slick.GridOptions;
        protected createSlickGrid(): Slick.Grid;
    }
}
declare namespace CMCPS.BasicSamples {
    class RowSelectionGrid extends SelectableEntityGrid<Northwind.SupplierRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CMCPS.BasicSamples {
    class GridFilteredByCriteria extends Northwind.ProductGrid {
        constructor(container: JQuery);
        protected onViewSubmit(): boolean;
    }
}
declare namespace CMCPS.BasicSamples {
    class GroupingAndSummariesInGrid extends Northwind.ProductGrid {
        constructor(container: JQuery);
        protected createSlickGrid(): Slick.Grid;
        protected getColumns(): Slick.Column[];
        protected getSlickOptions(): Slick.GridOptions;
        protected usePager(): boolean;
        protected getButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
}
declare namespace CMCPS.BasicSamples {
    class InitialValuesForQuickFilters extends Northwind.OrderGrid {
        constructor(container: JQuery);
        /**
         * This method is called to get list of quick filters to be created for this grid.
         * By default, it returns quick filter objects corresponding to properties that
         * have a [QuickFilter] attribute at server side OrderColumns.cs
         */
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
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
        protected createQuickFilters(): void;
    }
}
declare namespace CMCPS.BasicSamples {
    class InlineActionGrid extends Northwind.CustomerGrid {
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace CMCPS.BasicSamples {
    class InlineImageFormatter implements Slick.Formatter, Serenity.IInitializeColumn {
        format(ctx: Slick.FormatterContext): string;
        initializeColumn(column: Slick.Column): void;
        fileProperty: string;
        thumb: boolean;
    }
}
declare namespace CMCPS.BasicSamples {
    class InlineImageInGrid extends Serenity.EntityGrid<Northwind.ProductRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getSlickOptions(): Slick.GridOptions;
    }
}
declare namespace CMCPS.BasicSamples {
    class ProductExcelImportDialog extends Serenity.PropertyDialog<any, any> {
        private form;
        constructor();
        protected getDialogTitle(): string;
        protected getDialogButtons(): Serenity.DialogButton[];
    }
}
declare namespace CMCPS.BasicSamples {
    class ProductExcelImportGrid extends Northwind.ProductGrid {
        constructor(container: JQuery);
        /**
         * This method is called to get list of buttons to be created.
         */
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace CMCPS.BasicSamples {
    class QuickFilterCustomization extends Serenity.EntityGrid<Northwind.OrderRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof Northwind.OrderDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        /**
         * This method is called to get list of quick filters to be created for this grid.
         * By default, it returns quick filter objects corresponding to properties that
         * have a [QuickFilter] attribute at server side OrderColumns.cs
         */
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
    }
}
declare namespace CMCPS.BasicSamples {
    class RemovingAddButton extends Northwind.SupplierGrid {
        constructor(container: JQuery);
        /**
         * This method is called to get list of buttons to be created.
         */
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace CMCPS.BasicSamples {
    class CustomerGrossSalesGrid extends Serenity.EntityGrid<Northwind.CustomerGrossSalesRow, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private nextId;
        constructor(container: JQuery);
        /**
         * This method is called to preprocess data returned from the list service
         */
        protected onViewProcessData(response: Serenity.ListResponse<Northwind.SalesByCategoryRow>): Serenity.ListResponse<Northwind.SalesByCategoryRow>;
        protected getButtons(): any[];
        protected createSlickGrid(): Slick.Grid;
        protected getSlickOptions(): Slick.GridOptions;
        protected usePager(): boolean;
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
    }
}
declare namespace CMCPS.BasicSamples {
    class TreeGrid extends Northwind.OrderGrid {
        private treeMixin;
        constructor(container: JQuery);
        protected usePager(): boolean;
    }
}
declare namespace CMCPS.BasicSamples {
    class VSGalleryQAGrid extends Serenity.EntityGrid<BasicSamples.VSGalleryQAThread, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): any[];
        protected getSlickOptions(): Slick.GridOptions;
        protected getColumns(): Slick.Column[];
        protected getInitialTitle(): any;
    }
}
declare namespace CMCPS.BasicSamples {
    class ViewWithoutIDGrid extends Serenity.EntityGrid<Northwind.SalesByCategoryRow, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private nextId;
        constructor(container: JQuery);
        /**
         * This method is called to preprocess data returned from the list service
         */
        protected onViewProcessData(response: Serenity.ListResponse<Northwind.SalesByCategoryRow>): Serenity.ListResponse<Northwind.SalesByCategoryRow>;
        protected getButtons(): any[];
    }
}
declare namespace CMCPS.BasicSamples {
    class WrappedHeadersGrid extends Northwind.OrderGrid {
        constructor(container: JQuery);
    }
}
declare namespace CMCPS.LanguageList {
    function getValue(): string[][];
}
declare namespace CMCPS.ScriptInitialization {
}
declare namespace CMCPS {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        max: number;
        value: number;
        title: string;
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace CMCPS.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace CMCPS.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace CMCPS.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace CMCPS {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent;
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace CMCPS.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace CMCPS.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace CMCPS.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace CMCPS.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace CMCPS.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace CMCPS.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace CMCPS.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace CMCPS.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace CMCPS.Default {
    class AdmissionDialog extends Serenity.EntityDialog<AdmissionRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: AdmissionForm;
    }
}
declare namespace CMCPS.Default {
    class AdmissionGrid extends Serenity.EntityGrid<AdmissionRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AdmissionDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace CMCPS.Default {
    class BirthHistoryListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace CMCPS.Default {
    class PatientListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): any;
    }
}
declare namespace CMCPS.Default {
    class AdmissionCcDetailEditor extends Common.GridEditorBase<AdmissionCcDetailsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AdmissionCcDetailsDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected getAddButtonCaption(): string;
        protected validateEntity(row: AdmissionCcDetailsRow, id: number): boolean;
    }
}
declare namespace CMCPS.Default {
    class AdmissionCcDetailsDialog extends Common.GridEditorDialog<AdmissionCcDetailsRow> {
        protected getFormKey(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected form: AdmissionCcDetailsForm;
        constructor();
    }
}
declare namespace CMCPS.Default {
    class AntenatalDialog extends Serenity.EntityDialog<AntenatalRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: AntenatalForm;
    }
}
declare namespace CMCPS.Default {
    class AntenatalGrid extends Serenity.EntityGrid<AntenatalRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AntenatalDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CMCPS.Default {
    class BedDialog extends Serenity.EntityDialog<BedRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: BedForm;
    }
}
declare namespace CMCPS.Default {
    class BedGrid extends Serenity.EntityGrid<BedRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BedDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CMCPS.Default {
    class BirthHistoryDialog extends Serenity.EntityDialog<BirthHistoryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: BirthHistoryForm;
    }
}
declare namespace CMCPS.Default {
    class BirthHistoryGrid extends Serenity.EntityGrid<BirthHistoryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BirthHistoryDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CMCPS.Default {
    class DDiagnosisDetailEditor extends Common.GridEditorBase<DDiagnosisDetailsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DDiagnosisDetailsDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected getAddButtonCaption(): string;
        protected validateEntity(row: DDiagnosisDetailsRow, id: number): boolean;
    }
}
declare namespace CMCPS.Default {
    class DDiagnosisDetailsDialog extends Common.GridEditorDialog<DDiagnosisDetailsRow> {
        protected getFormKey(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected form: DDiagnosisDetailsForm;
        constructor();
    }
}
declare namespace CMCPS.Default {
    class DiagnosisDialog extends Serenity.EntityDialog<DiagnosisRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: DiagnosisForm;
    }
}
declare namespace CMCPS.Default {
    class DiagnosisGrid extends Serenity.EntityGrid<DiagnosisRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DiagnosisDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CMCPS.Default {
    class DistrictDialog extends Serenity.EntityDialog<DistrictRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: DistrictForm;
    }
}
declare namespace CMCPS.Default {
    class DistrictGrid extends Serenity.EntityGrid<DistrictRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DistrictDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CMCPS.Default {
    class FamilyHistoryDialog extends Serenity.EntityDialog<FamilyHistoryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: FamilyHistoryForm;
    }
}
declare namespace CMCPS.Default {
    class FamilyHistoryGrid extends Serenity.EntityGrid<FamilyHistoryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FamilyHistoryDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CMCPS.Default {
    class InvestigationDialog extends Serenity.EntityDialog<InvestigationRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: InvestigationForm;
    }
}
declare namespace CMCPS.Default {
    class InvestigationGrid extends Serenity.EntityGrid<InvestigationRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InvestigationDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CMCPS.Default {
    class NatalDialog extends Serenity.EntityDialog<NatalRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: NatalForm;
    }
}
declare namespace CMCPS.Default {
    class NatalGrid extends Serenity.EntityGrid<NatalRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof NatalDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CMCPS.Default {
    class OpdDialog extends Serenity.EntityDialog<OpdRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: OpdForm;
    }
}
declare namespace CMCPS.Default {
    class OpdGrid extends Serenity.EntityGrid<OpdRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OpdDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CMCPS.Default {
    class OpdWithDiagnosisDetailsDialog extends Common.GridEditorDialog<OpdWithDiagnosisDetailsRow> {
        protected getFormKey(): string;
        protected getNameProperty(): any;
        protected getLocalTextPrefix(): string;
        protected form: OpdWithDiagnosisDetailsForm;
        constructor();
    }
}
declare namespace CMCPS.Default {
    class OpdWithDiagnosisDetailsEditor extends Common.GridEditorBase<OpdWithDiagnosisDetailsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OpdWithDiagnosisDetailsDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected getAddButtonCaption(): string;
        protected validateEntity(row: OpdWithDiagnosisDetailsRow, id: number): boolean;
    }
}
declare namespace CMCPS.Default {
    class OtherLabDialog extends Serenity.EntityDialog<OtherLabRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: OtherLabForm;
    }
}
declare namespace CMCPS.Default {
    class OtherLabGrid extends Serenity.EntityGrid<OtherLabRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OtherLabDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CMCPS.Default {
    class OtherLabWithInvestigationDialog extends Common.GridEditorDialog<OtherLabWithInvestigationRow> {
        protected getFormKey(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected form: OtherLabWithInvestigationForm;
        constructor();
    }
}
declare namespace CMCPS.Default {
    class OtherLabWithInvestigationEditor extends Common.GridEditorBase<OtherLabWithInvestigationRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OtherLabWithInvestigationDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected getAddButtonCaption(): string;
        protected validateEntity(row: OtherLabWithInvestigationRow, id: number): boolean;
    }
}
declare namespace CMCPS.Default {
    class PathologyDialog extends Serenity.EntityDialog<PathologyRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PathologyForm;
    }
}
declare namespace CMCPS.Default {
    class PathologyGrid extends Serenity.EntityGrid<PathologyRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PathologyDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CMCPS.Default {
    class PathologyAndInvestigationDetailsDialog extends Common.GridEditorDialog<PathologyAndInvestigationDetailsRow> {
        protected getFormKey(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected form: PathologyAndInvestigationDetailsForm;
        constructor();
    }
}
declare namespace CMCPS.Default {
    class PathologyAndInvestigationDetailsEditor extends Common.GridEditorBase<PathologyAndInvestigationDetailsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PathologyAndInvestigationDetailsDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected getAddButtonCaption(): string;
        protected validateEntity(row: PathologyAndInvestigationDetailsRow, id: number): boolean;
    }
}
declare namespace CMCPS.Default {
    class PostNatalDialog extends Serenity.EntityDialog<PostNatalRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PostNatalForm;
    }
}
declare namespace CMCPS.Default {
    class PostNatalGrid extends Serenity.EntityGrid<PostNatalRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PostNatalDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CMCPS.Default {
    class PresentingComplaintsDialog extends Serenity.EntityDialog<PresentingComplaintsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PresentingComplaintsForm;
    }
}
declare namespace CMCPS.Default {
    class PresentingComplaintsGrid extends Serenity.EntityGrid<PresentingComplaintsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PresentingComplaintsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CMCPS.Default {
    class SexDialog extends Serenity.EntityDialog<SexRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SexForm;
    }
}
declare namespace CMCPS.Default {
    class SexGrid extends Serenity.EntityGrid<SexRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SexDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CMCPS.Default {
    class UnitDialog extends Serenity.EntityDialog<UnitRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UnitForm;
    }
}
declare namespace CMCPS.Default {
    class UnitGrid extends Serenity.EntityGrid<UnitRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UnitDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CMCPS.Default {
    class UpazilaDialog extends Serenity.EntityDialog<UpazilaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UpazilaForm;
    }
}
declare namespace CMCPS.Default {
    class UpazilaGrid extends Serenity.EntityGrid<UpazilaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UpazilaDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CMCPS.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace CMCPS.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace CMCPS.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace CMCPS.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace CMCPS.Northwind {
    class CustomerEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, CustomerRow> {
        constructor(hidden: JQuery);
        protected getLookupKey(): string;
        protected getItemText(item: any, lookup: any): string;
    }
}
declare namespace CMCPS.Northwind {
    class CustomerOrderDialog extends OrderDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace CMCPS.Northwind {
    class CustomerOrdersGrid extends OrderGrid {
        protected getDialogType(): typeof CustomerOrderDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _customerID;
        customerID: string;
    }
}
declare namespace CMCPS.Northwind {
    class EmployeeListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace CMCPS.Northwind {
    class EmployeeFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
        genderProperty: string;
        initializeColumn(column: Slick.Column): void;
    }
}
declare namespace CMCPS.Northwind {
    class NoteDialog extends Serenity.TemplatedDialog<any> {
        private textEditor;
        constructor();
        protected getTemplate(): string;
        protected getDialogOptions(): JQueryUI.DialogOptions;
        text: string;
        okClick: () => void;
    }
}
declare namespace CMCPS.Northwind {
    class NotesEditor extends Serenity.TemplatedWidget<any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        private isDirty;
        private items;
        constructor(div: JQuery);
        protected getTemplate(): string;
        protected updateContent(): void;
        protected addClick(): void;
        protected editClick(e: any): void;
        deleteClick(e: any): void;
        value: NoteRow[];
        getEditValue(prop: Serenity.PropertyItem, target: any): void;
        setEditValue(source: any, prop: Serenity.PropertyItem): void;
        get_isDirty(): boolean;
        set_isDirty(value: any): void;
        onChange: () => void;
    }
}
declare namespace CMCPS.Northwind {
    class FreightFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace CMCPS.Northwind {
    class RegionDialog extends Serenity.EntityDialog<RegionRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RegionForm;
        protected getLanguages(): string[][];
    }
}
declare namespace CMCPS.Northwind {
    class RegionGrid extends Serenity.EntityGrid<RegionRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CMCPS.Northwind {
    class PhoneEditor extends Serenity.StringEditor {
        constructor(input: JQuery);
        protected formatValue(): void;
        protected getFormattedValue(): string;
        multiple: boolean;
        get_value(): string;
        set_value(value: string): void;
        static validate(phone: string, isMultiple: boolean): string;
        static isValidPhone(phone: string): boolean;
        static formatPhone(phone: any): any;
        static formatMulti(phone: string, format: (s: string) => string): string;
        static isValidMulti(phone: string, check: (s: string) => boolean): boolean;
    }
}
declare namespace CMCPS.Northwind {
    class ShipperDialog extends Serenity.EntityDialog<ShipperRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ShipperForm;
        protected getLanguages(): string[][];
    }
}
declare namespace CMCPS.Northwind {
    class ShipperFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace CMCPS.Northwind {
    class ShipperGrid extends Serenity.EntityGrid<ShipperRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CMCPS.Northwind {
    class TerritoryDialog extends Serenity.EntityDialog<TerritoryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TerritoryForm;
        protected getLanguages(): string[][];
    }
}
declare namespace CMCPS.Northwind {
    class TerritoryGrid extends Serenity.EntityGrid<TerritoryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
