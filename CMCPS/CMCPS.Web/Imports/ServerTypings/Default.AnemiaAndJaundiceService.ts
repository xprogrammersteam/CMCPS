namespace CMCPS.Default {
    export namespace AnemiaAndJaundiceService {
        export const baseUrl = 'Default/AnemiaAndJaundice';

        export declare function Create(request: Serenity.SaveRequest<AnemiaAndJaundiceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<AnemiaAndJaundiceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AnemiaAndJaundiceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AnemiaAndJaundiceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Default/AnemiaAndJaundice/Create",
            Update = "Default/AnemiaAndJaundice/Update",
            Delete = "Default/AnemiaAndJaundice/Delete",
            Retrieve = "Default/AnemiaAndJaundice/Retrieve",
            List = "Default/AnemiaAndJaundice/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>AnemiaAndJaundiceService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

