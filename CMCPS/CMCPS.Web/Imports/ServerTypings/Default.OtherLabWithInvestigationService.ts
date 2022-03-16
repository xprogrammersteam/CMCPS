namespace CMCPS.Default {
    export namespace OtherLabWithInvestigationService {
        export const baseUrl = 'Default/OtherLabWithInvestigation';

        export declare function Create(request: Serenity.SaveRequest<OtherLabWithInvestigationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<OtherLabWithInvestigationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OtherLabWithInvestigationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OtherLabWithInvestigationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Default/OtherLabWithInvestigation/Create",
            Update = "Default/OtherLabWithInvestigation/Update",
            Delete = "Default/OtherLabWithInvestigation/Delete",
            Retrieve = "Default/OtherLabWithInvestigation/Retrieve",
            List = "Default/OtherLabWithInvestigation/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>OtherLabWithInvestigationService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

