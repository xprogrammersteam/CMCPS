namespace CMCPS.Default {
    export interface PostNatalRow {
        PostNatalId?: number;
        PostNatalName?: string;
    }

    export namespace PostNatalRow {
        export const idProperty = 'PostNatalId';
        export const nameProperty = 'PostNatalName';
        export const localTextPrefix = 'Default.PostNatal';
        export const lookupKey = 'Default.PostNatal';

        export function getLookup(): Q.Lookup<PostNatalRow> {
            return Q.getLookup<PostNatalRow>('Default.PostNatal');
        }

        export declare const enum Fields {
            PostNatalId = "PostNatalId",
            PostNatalName = "PostNatalName"
        }
    }
}

