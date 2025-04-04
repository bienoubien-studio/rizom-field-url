import 'rizom';
import type { Session } from 'better-auth';
import type { BaseDoc, LocalAPI, Navigation, User, Rizom } from 'rizom/types'

export type RelationValue<T> =
	| T[] // When depth > 0, fully populated docs
	| { id?: string; relationTo: string; documentId: string }[] // When depth = 0, relation objects
	| string[]
	| string; // When sending data to updateById

declare global {

	export type PagesDoc = BaseDoc & {
		title?: string
		editedBy?: string
		createdAt?: Date
		updatedAt?: Date
	}

	export type UsersDoc = BaseDoc & {
		name: string
		email: string
		roles: string[]
		editedBy?: string
		createdAt?: Date
		updatedAt?: Date
	}

}

declare global {
	namespace App {
		interface Locals {
			session: Session | undefined;
			user: User | undefined;
			rizom: Rizom;
			api: LocalAPI;
			cacheEnabled: boolean;
			/** Available in panel, routes for sidebar */
			routes: Navigation;
			locale: string | undefined;
		}
	}
}
declare module 'rizom' {
	interface RegisterCollection {
		'pages': PagesDoc
		'users': UsersDoc;
	}
}