namespace CMCPS.Default {
    export namespace PathologyAndInvestigationDetailsService {
        export const baseUrl = 'Default/PathologyAndInvestigationDetails';

        export declare function Create(request: Serenity.SaveRequest<PathologyAndInvestigationDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<PathologyAndInvestigationDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PathologyAndInvestigationDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PathologyAndInvestigationDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Default/PathologyAndInvestigationDetails/Create",
            Update = "Default/PathologyAndInvestigationDetails/Update",
            Delete = "Default/PathologyAndInvestigationDetails/Delete",
            Retrieve = "Default/PathologyAndInvestigationDetails/Retrieve",
            List = "Default/PathologyAndInvestigationDetails/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>PathologyAndInvestigationDetailsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

