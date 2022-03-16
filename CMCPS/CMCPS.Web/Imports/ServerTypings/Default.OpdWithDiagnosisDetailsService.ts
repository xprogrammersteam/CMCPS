namespace CMCPS.Default {
    export namespace OpdWithDiagnosisDetailsService {
        export const baseUrl = 'Default/OpdWithDiagnosisDetails';

        export declare function Create(request: Serenity.SaveRequest<OpdWithDiagnosisDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<OpdWithDiagnosisDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OpdWithDiagnosisDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OpdWithDiagnosisDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Default/OpdWithDiagnosisDetails/Create",
            Update = "Default/OpdWithDiagnosisDetails/Update",
            Delete = "Default/OpdWithDiagnosisDetails/Delete",
            Retrieve = "Default/OpdWithDiagnosisDetails/Retrieve",
            List = "Default/OpdWithDiagnosisDetails/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>OpdWithDiagnosisDetailsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

